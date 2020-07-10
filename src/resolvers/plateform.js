export default {

    Query: {

        plateform: (_, { id }, { dataSources }) =>
            dataSources.plateformAPI.getPlateformById({ plateformId: id }),
        listplateform: (_, {filter}, { dataSources }) =>
            dataSources.plateformAPI.getAllPlateform(filter),
    },
    Mutation: {
        createPlateform: async (_, { date_create, date_update },{ dataSources }) => {
            const pack = await dataSources.plateformAPI.CreatePlateform({ date_create, date_update });
            if (pack) {
                const plateformAded = new Buffer(date_create).toString('base64');
                return  { converdate_create :plateformAded};
            }
        },
        updatePlateform: async (_, {id, date_create, date_update},{ dataSources }) => {
            const pack = await dataSources.plateformAPI.updatePlateform({id, date_create, date_update });
            if (pack) {
                const plateformAded = new Buffer(date_create).toString('base64');
                return  { converdate_create :plateformAded};
            }
        },
        deletePlateform: async (_, { id },{ dataSources }) => {
            const pack = await dataSources.plateformAPI.deletePlateform({ id });
            if (pack) {
                const plateformAded = new Buffer(date_create).toString('base64');
                return  { converdate_create :plateformAded};
            }
        },
    },

};