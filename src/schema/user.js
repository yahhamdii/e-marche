import { gql } from 'apollo-server'; 

export default gql`

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
    plateform: Plateform
  }
type UserAded {
    converMail: String 
}
extend type Query {
    user(id: ID!): User
    listuser :[User]
}
    
extend type Mutation {
    createUser(username : String, email: String, password: String): UserAded
    updateUser(id: ID!,username : String, email: String, password: String): UserAded 
    deleteUser(id: ID!): UserAded
}
`;