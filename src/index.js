import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import typeDefs  from './schema/index';
import resolvers from './resolvers/index';
import ItemAPI from './datasources/item';
import UserAPI from './datasources/user';
import CategoryAPI from './datasources/category';
import AttributAPI from './datasources/attribut';
import ManufacturerAPI from './datasources/manufacturer';
import PlateformAPI from './datasources/plateform';

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
        plateformAPI: new PlateformAPI(),
    })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

