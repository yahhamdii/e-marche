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

`;