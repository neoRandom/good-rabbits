import { Model } from "./Model.js";
export class JsonORM {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    model(collection, options, schemaDef) {
        return new Model(this.baseUrl, collection, options, schemaDef);
    }
}
