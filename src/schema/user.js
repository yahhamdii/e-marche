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
type UserLoged {
    access_token: String 
    expires_in: Int 
    token_type: String 
    scope: String 
    refresh_token: String 
}
extend type Query {
    user(id: ID!): User
    listuser(filter : String) :[User]
}
    
extend type Mutation {
    loginUser(username : String, password: String): UserLoged
    createUser(username : String, email: String, password: String): User
    updateUser(id: ID!,username : String, email: String, password: String): User 
    deleteUser(id: ID!): User
}
`;