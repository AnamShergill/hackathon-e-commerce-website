import { type SchemaTypeDefinition } from 'sanity'
import { ProductType } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProductType],
}
