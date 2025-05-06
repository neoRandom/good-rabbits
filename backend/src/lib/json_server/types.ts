export type Document = { id?: number, [key: string]: any };

export type HookFunction = (doc: Document) => Promise<void> | void;

export interface ModelOptions {
  beforeCreate?: HookFunction;
  afterCreate?: HookFunction;
  beforeUpdate?: HookFunction;
  afterUpdate?: HookFunction;
  beforeDelete?: HookFunction;
  afterDelete?: HookFunction;
}
