export default  {

    Query: {
        user: (_, { id }, { dataSources }) =>
            dataSources.userAPI.getUserById({ userId: id }),
        listuser: (_, {filter}, { dataSources }) =>
            dataSources.userAPI.getAllUsers(filter),
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
        
    },

};