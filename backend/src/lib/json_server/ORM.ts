import { Model } from "./Model.js";
import { ModelOptions } from "./types.js";
import { SchemaDefinition } from "./Schema.js";

export class JsonORM {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  model(
    collection: string,
    options?: ModelOptions,
    schemaDef?: SchemaDefinition
  ): Model {
    return new Model(this.baseUrl, collection, options, schemaDef);
  }
}
