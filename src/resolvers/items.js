export default {

    Query: {

        item: (_, { id }, { dataSources }) =>
            dataSources.itemAPI.getItemById({ itemId: id }),
        listitem: (_, {filter}, { dataSources }) =>
            dataSources.itemAPI.getAllItems(filter),
    },
    Mutation: {
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