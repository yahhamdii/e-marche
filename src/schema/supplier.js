import { gql } from 'apollo-server'; 

export default gql`

type Supplier {
    id: String
    date_create: String
    date_update: String
    name: String
    code: String
    slug: String
}

`;