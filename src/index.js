import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import typeDefs  from './schema/index';
import resolvers from './resolvers/index';
import ItemAPI from './datasources/item';
import UserAPI from './datasources/user';
import CategoryAPI from './datasources/category';
import AttributAPI from './datasources/attribut';
import ManufacturerAPI from './datasources/manufacturer';

require('dotenv').config();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        itemAPI: new ItemAPI(),
        userAPI: new UserAPI(),
        categoryAPI: new CategoryAPI(),
        attributAPI: new AttributAPI(),
        manufacturerAPI: new ManufacturerAPI(),
    })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

