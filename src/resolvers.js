const resolvers =  {

    Query: {

        item: (_, { id }, { dataSources }) =>
            dataSources.itemAPI.getItemById({ itemId: id }),
        listitem: (_, $, { dataSources }) =>
            dataSources.itemAPI.getAllItems(),
        user: (_, { id }, { dataSources }) =>
            dataSources.userAPI.getUserById({ userId: id }),
        listuser: (_, $, { dataSources }) =>
            dataSources.userAPI.getAllUsers(),
    },
    Mutation: {
        createUser: async (_, { username, email, password },{ dataSources }) => {
            const user = await dataSources.userAPI.CreateUser({ username, email, password });
            if (user) {
              const userAded =  new Buffer(email).toString('base64');
              return { converMail :userAded};
            }
        },
        updateUser: async (_, {id, username, email, password },{ dataSources }) => {
            const user = await dataSources.userAPI.updateUser({ id, username, email, password });
            if (user) {
                const userAded =  new Buffer(email).toString('base64');
                return { converMail :userAded};
              }
        },
        deleteUser: async (_, { id },{ dataSources }) => {
            const user = await dataSources.userAPI.deleteUser({ id });
            if (user) {
                const userAded =  new Buffer(email).toString('base64');
                return { converMail :userAded};
              }
        },
        createItem: async (_, { date_create, date_update },{ dataSources }) => {
            const item = await dataSources.itemAPI.CreateItem({ date_create, date_update });
            if (item) {
                const itemAded = new Buffer(date_create).toString('base64');
                return  { converdate_create :itemAded};
            }
        },
        updateItem: async (_, {id, date_create, date_update},{ dataSources }) => {
            const item = await dataSources.itemAPI.updateItem({id, date_create, date_update });
            if (item) {
                const itemAded = new Buffer(date_create).toString('base64');
                return  { converdate_create :itemAded};
            }
        },
        deleteItem: async (_, { id },{ dataSources }) => {
            const item = await dataSources.itemAPI.deleteItem({ id });
            if (item) {
                const itemAded = new Buffer(date_create).toString('base64');
                return  { converdate_create :itemAded};
            }
        },
    },

};
export default resolvers;