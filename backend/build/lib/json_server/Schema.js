const typeCheckers = {
    String: (val) => typeof val === "string",
    Number: (val) => typeof val === "number",
    Boolean: (val) => typeof val === "boolean",
    Date: (val) => !isNaN(Date.parse(val)),
    Array: Array.isArray,
    Object: (val) => typeof val === "object" && !Array.isArray(val) && val !== null,
};
export class Schema {
    constructor(schema) {
        this.schema = schema;
    }
    applyDefaults(doc) {
        const output = Object.assign({}, doc);
        for (const key in this.schema) {
            const field = this.schema[key];
            if (output[key] === undefined && field.default !== undefined) {
                output[key] = typeof field.default === "function"
                    ? field.default()
                    : field.default;
            }
        }
        return output;
    }
    validate(doc) {
        for (const key in this.schema) {
            const field = this.schema[key];
            const value = doc[key];
            if (field.required && (value === undefined || value === null)) {
                throw new Error(`Field "${key}" is required.`);
            }
            if (value !== undefined) {
                const check = typeCheckers[field.type];
                if (!check(value)) {
                    throw new Error(`Field "${key}" must be of type ${field.type}.`);
                }
                if (field.validate) {
                    const valid = field.validate(value);
                    if (valid !== true) {
                        throw new Error(typeof valid === "string" ? valid : `Validation failed for "${key}".`);
                    }
                }
            }
        }
    }
}
