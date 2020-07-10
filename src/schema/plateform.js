import { gql } from 'apollo-server'; 

export default gql`

type Plateform {
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
type plateformAded {
    converdate_create: String 
  }
extend type Query {
    plateform(id: ID!): Plateform
    listplateform(filter: String) :[Plateform]
}
    
extend type Mutation {
    createPlateform(date_create : String, date_update: String): plateformAded 
    updatePlateform(id: ID!,date_create : String, date_update: String): plateformAded 
    deletePlateform(id: ID!): plateformAded
}
`;