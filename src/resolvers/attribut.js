export default {

    Query: {

        attribut: (_, { id }, { dataSources }) =>
            dataSources.attributAPI.getAttributById({ attributId: id }),
        listattribut: (_, {filter}, { dataSources }) =>
            dataSources.attributAPI.getAllAttribut(filter),
    },
    Mutation: {
        createAttribut: async (_, { date_create, date_update },{ dataSources }) => {
            const attribut = await dataSources.attributAPI.CreateAttribut({ date_create, date_update });
            if (attribut) {
                const attributAded = new Buffer(date_create).toString('base64');
                return  { converdate_create :attributAded};
            }
        },
        updateAttribut: async (_, {id, date_create, date_update},{ dataSources }) => {
            const attribut = await dataSources.attributAPI.updateAttribut({id, date_create, date_update });
            if (attribut) {
                const attributAded = new Buffer(date_create).toString('base64');
                return  { converdate_create :attributAded};
            }
        },
        deleteAttribut: async (_, { id },{ dataSources }) => {
            const attribut = await dataSources.attributAPI.deleteAttribut({ id });
            if (attribut) {
                const attributAded = new Buffer(date_create).toString('base64');
                return  { converdate_create :attributAded};
            }
        },
    },

};