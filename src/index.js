import {ApolloServer} from 'apollo-server';
import {dotenv} from 'dotenv';
import typeDefs  from './schema';
import resolvers from './resolvers';
import ItemAPI from './datasources/item';
import UserAPI from './datasources/user';

require('dotenv').config();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        itemAPI: new ItemAPI(),
        userAPI: new UserAPI(),
    })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

