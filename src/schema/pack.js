import { gql } from 'apollo-server'; 

export default gql`

type Package {
    id: String
    date_create: String
    date_update: String
    weight_gross_package: String
    volume_package: String
}

`;