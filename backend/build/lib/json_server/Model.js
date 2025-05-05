var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import { deepClone } from "./utils.js";
import { Schema } from "./Schema.js";
export class Model {
    constructor(baseUrl, collection, options, schemaDef) {
        this.url = `${baseUrl.replace(/\/$/, "")}/${collection}`;
        this.hooks = options || {};
        if (schemaDef) {
            this.schema = new Schema(schemaDef);
        }
    }
    find() {
        return __awaiter(this, arguments, void 0, function* (query = {}) {
            const res = yield axios.get(this.url, { params: query });
            return res.data;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield axios.get(`${this.url}/${id}`);
                return res.data;
            }
            catch (_a) {
                return null;
            }
        });
    }
    create(doc) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = deepClone(doc);
            if (this.schema) {
                const withDefaults = this.schema.applyDefaults(data);
                this.schema.validate(withDefaults);
                Object.assign(data, withDefaults);
            }
            if (this.hooks.beforeCreate)
                yield this.hooks.beforeCreate(data);
            const res = yield axios.post(this.url, data);
            if (this.hooks.afterCreate)
                yield this.hooks.afterCreate(res.data);
            return res.data;
        });
    }
    update(id, doc) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = deepClone(doc);
            if (this.schema) {
                const existing = yield this.findById(id);
                if (!existing)
                    throw new Error(`Document with id ${id} not found.`);
                const merged = Object.assign(Object.assign({}, existing), data);
                this.schema.validate(merged);
            }
            if (this.hooks.beforeUpdate)
                yield this.hooks.beforeUpdate(data);
            const res = yield axios.patch(`${this.url}/${id}`, data);
            if (this.hooks.afterUpdate)
                yield this.hooks.afterUpdate(res.data);
            return res.data;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hooks.beforeDelete)
                yield this.hooks.beforeDelete({ id });
            yield axios.delete(`${this.url}/${id}`);
            if (this.hooks.afterDelete)
                yield this.hooks.afterDelete({ id });
            return true;
        });
    }
}
