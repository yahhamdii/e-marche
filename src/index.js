import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import typeDefs  from './schema/index';
import resolvers from './resolvers/index';
import ItemAPI from './datasources/item';
import UserAPI from './datasources/user';
import CategoryAPI from './datasources/category';

require('dotenv').config();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        itemAPI: new ItemAPI(),
        userAPI: new UserAPI(),
        categoryAPI: new CategoryAPI(),
    })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

