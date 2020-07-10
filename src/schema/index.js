import  { gql } from 'apollo-server';
import attribut from './attribut';
import category from './category';
import image from './image';
import item from './item';
import manufacturer from './manufacturer';
import pack from './pack';
import plateform from './plateform';
import stock from './stock';
import supplier from './supplier'
import user from './user';

const root = gql`
    scalar Date
    
    type Query {
        root: String,
    }
    
    type Mutation {
        root:String
    }
`;
export default [
  root,
  attribut,
  category,
  image,
  item,
  manufacturer,
  pack,
  plateform,
  stock,
  supplier,
  user,
]
