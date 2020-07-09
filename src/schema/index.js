import  { gql } from 'apollo-server';

export default gql`
type Query {
   
    item(id: ID!): Item
    listitem(filter: String) :[Item]
    user(id: ID!): User
    listuser :[User]
  }
  type Stock {
    id: String
    date_create: String
    date_update: String
    value_cu: Int
    value_packing: Int
    code: String
    next_date_delivery: String
    quantity_package_next_delivery: Int
    quantity_uc_next_delivery: Int
    first_date_entry_in_stock: String
  }
  type Image {
    small: String
    large: String
  }
  type Category {
    id: String
    date_create: String
    date_update: String
    count_items: Int
    type: String
    name: String
    slug: String
  }
  type Manufacturer {
    id: String
    date_create: String
    date_update: String
    name: Int
    slug: String
  }
  type Package {
    id: String
    date_create: String
    date_update: String
    weight_gross_package: String
    volume_package: String
  }
  type Platform {
    id: String
    date_update: String
    attributs: [Attribut]
    name: String
    zipcode: String
    address: String
    legals: String
    cookie_path: String
    privacy_path: String
    city: String
    ext_code: String
    email_credit: String
    email_commitment: String
    tel_accounting: String
    fax_accounting: String
    email_accounting: String
    tel_technical: String
    fax_technical: String
    email_technical: String
  }
  type Supplier {
    id: String
    date_create: String
    date_update: String
    name: String
    code: String
    slug: String
  }
  type Attribut {
    id: String
    date_create: String
    date_update: String
    name: String
    key: String
    value: String
  }
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
  type User {
    id: ID!
    date_update: String
    username: String
    email: String!
    enabled: Boolean
    salt: String
    roles: [String]
    last_login: String
    confirmation_token: String
    password_requested_at: String
    lastname: String
    firstname: String
    first_visit: String
    type: String
    platform: Platform
    
  }
  type UserAded {
    converMail: String 
  }
  type itemAded {
    converdate_create: String 
  }
  type Mutation {
    createUser(username : String, email: String, password: String): UserAded
    updateUser(id: ID!,username : String, email: String, password: String): UserAded 
    deleteUser(id: ID!): UserAded
    createItem(date_create : String, date_update: String): itemAded 
    updateItem(id: ID!,date_create : String, date_update: String): itemAded 
    deleteItem(id: ID!): itemAded 
  }
  enum PatchSize {
    SMALL
    LARGE
  }
`;