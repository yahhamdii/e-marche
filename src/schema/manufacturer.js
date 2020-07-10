import { gql } from 'apollo-server'; 

export default gql`

type Manufacturer {
    id: String
    date_create: String
    date_update: String
    name: String
    slug: String
}
type manufacturerAded {
    converdate_create: String 
  }
extend type Query {
    manufacturer(id: ID!): Manufacturer
    listmanufacturer(filter: String) :[Manufacturer]
}
    
extend type Mutation {
    createManufacturer(date_create : String, date_update: String): manufacturerAded 
    updateManufacturer(id: ID!,date_create : String, date_update: String): manufacturerAded 
    deleteManufacturer(id: ID!): manufacturerAded
}
`;