import { gql } from 'apollo-server';

export default gql`

type Item {
    id: String
    date_create: String
    date_update: String
    applicable_price_vat: Float
    stock: Stock
    applicable_price: Float
    images: Image
    document: String
    is_new: Boolean
    categories: [Category]
    display_as_promotion: Boolean
    has_promotion: Boolean
    promotion: Boolean
    manufacturer: Manufacturer
    has_stock: Boolean
    has_moq: Boolean
    should_request_stock: Boolean
    should_replace_regular_stock: Boolean
    code: String
    code_nature: String
    frequency: String
    price: Float
    price_vat: Float
    vat: Float
    reference: String
    type: String
    name: String
    ean13: String
    weight: String
    pcb: Int
    unity: String
    upc: String
    variable_weight: Boolean
    active: Boolean
    date_begin: String
    package: Package
    supplier: Supplier
    is_preorder: Boolean
  }
  type itemAded {
    converdate_create: String 
  }
extend type Query {
    item(id: ID!): Item
    listitem(filter: String) :[Item]
}
    
extend type Mutation {
    createItem(date_create : String, date_update: String): itemAded 
    updateItem(id: ID!,date_create : String, date_update: String): itemAded 
    deleteItem(id: ID!): itemAded
}
`;