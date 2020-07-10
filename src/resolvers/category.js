export default {

    Query: {

        category: (_, { id }, { dataSources }) =>
            dataSources.categoryAPI.getCategoryById({ categoryId: id }),
        listcategory: (_, { filter }, { dataSources }) =>
            dataSources.categoryAPI.getAllCategory(filter),
    },
    Mutation: {
        createCategory: async (_, { date_create, date_update },{ dataSources }) => {
            const category = await dataSources.categoryAPI.CreateCategory({ date_create, date_update });
            if (category) {
                const categoryAded = new Buffer(date_create).toString('base64');
                return  { converdate_create :categoryAded};
            }
        },
        updateCategory: async (_, {id, date_create, date_update},{ dataSources }) => {
            const category = await dataSources.categoryAPI.updateCategory({id, date_create, date_update });
            if (category) {
                const categoryAded = new Buffer(date_create).toString('base64');
                return  { converdate_create :categoryAded};
            }
        },
        deleteCategory: async (_, { id },{ dataSources }) => {
            const category = await dataSources.categoryAPI.deleteCategory({ id });
            if (category) {
                const categoryAded = new Buffer(date_create).toString('base64');
                return  { converdate_create :categoryAded};
            }
        },
    },

};