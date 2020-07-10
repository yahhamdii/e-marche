import { gql } from 'apollo-server'; 

export default gql`

type Image {
    small: String
    large: String
}
`;