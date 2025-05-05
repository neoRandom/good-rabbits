import axios from "axios";
import { Document, ModelOptions } from "./types.js";
import { deepClone } from "./utils.js";
import { Schema, SchemaDefinition } from "./Schema.js";

export class Model {
  private url: string;
  private hooks: ModelOptions;
  private schema?: Schema;

  constructor(
    baseUrl: string,
    collection: string,
    options?: ModelOptions,
    schemaDef?: SchemaDefinition
  ) {
    this.url = `${baseUrl.replace(/\/$/, "")}/${collection}`;
    this.hooks = options || {};
    if (schemaDef) {
      this.schema = new Schema(schemaDef);
    }
  }

  async find(query: Partial<Document> = {}): Promise<Document[]> {
    const res = await axios.get(this.url, { params: query });
    return res.data;
  }

  async findById(id: string | number): Promise<Document | null> {
    try {
      const res = await axios.get(`${this.url}/${id}`);
      return res.data;
    } catch {
      return null;
    }
  }

  async create(doc: Document): Promise<Document> {
    const data = deepClone(doc);

    if (this.schema) {
      const withDefaults = this.schema.applyDefaults(data);
      this.schema.validate(withDefaults);
      Object.assign(data, withDefaults); // override data with defaults
    }

    if (this.hooks.beforeCreate) await this.hooks.beforeCreate(data);

    const res = await axios.post(this.url, data);

    if (this.hooks.afterCreate) await this.hooks.afterCreate(res.data);

    return res.data;
  }

  async update(id: string | number, doc: Partial<Document>): Promise<Document> {
    const data = deepClone(doc);

    if (this.schema) {
      const existing = await this.findById(id);
      if (!existing) throw new Error(`Document with id ${id} not found.`);
      const merged = { ...existing, ...data };
      this.schema.validate(merged);
    }

    if (this.hooks.beforeUpdate) await this.hooks.beforeUpdate(data);

    const res = await axios.patch(`${this.url}/${id}`, data);

    if (this.hooks.afterUpdate) await this.hooks.afterUpdate(res.data);

    return res.data;
  }

  async delete(id: number): Promise<boolean> {
    if (this.hooks.beforeDelete) await this.hooks.beforeDelete({ id });

    await axios.delete(`${this.url}/${id}`);

    if (this.hooks.afterDelete) await this.hooks.afterDelete({ id });

    return true;
  }
}
