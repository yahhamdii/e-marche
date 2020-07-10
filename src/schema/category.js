import { gql } from 'apollo-server'; 

export default gql`

type Category {
    id: String
    date_create: String
    date_update: String
    count_items: Int
    type: String
    name: String
    slug: String
    temperature: String
}
type categoryAded {
    converdate_create: String 
}
extend type Query {
    category(id: ID!): Category
    listcategory(filter: String) :[Category]
}
    
extend type Mutation {
    createCategory(date_create : String, date_update: String): categoryAded 
    updateCategory(id: ID!,date_create : String, date_update: String): categoryAded 
    deleteCategory(id: ID!): categoryAded 
}
`;