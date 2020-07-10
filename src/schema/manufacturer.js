import { gql } from 'apollo-server'; 

export default gql`

type Manufacturer {
    id: String
    date_create: String
    date_update: String
    name: Int
    slug: String
}

`;