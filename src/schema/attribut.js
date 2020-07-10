import { gql } from 'apollo-server'; 

export default gql`

type Attribut {
    id: String
    date_create: String
    date_update: String
    name: String
    key: String
    value: String
}
type AttributAded {
    converMail: String 
}
extend type Query {
    attribut(id: ID!): Attribut
    listattribut(filter : String) :[Attribut]
}
    
extend type Mutation {
    createAttribut(username : String, email: String, password: String): AttributAded
    updateAttribut(id: ID!,username : String, email: String, password: String): AttributAded 
    deleteAttribut(id: ID!): AttributAded
}

`;