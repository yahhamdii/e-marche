export default {

    Query: {

        manufacturer: (_, { id }, { dataSources }) =>
            dataSources.manufacturerAPI.getManufacturerById({ manufacturerId: id }),
        listmanufacturer: (_, { filter }, { dataSources }) =>
            dataSources.manufacturerAPI.getAllManufacturer(filter),
    },
    Mutation: {
        createManufacturer: async (_, { date_create, date_update },{ dataSources }) => {
            const manufacturer = await dataSources.manufacturerAPI.CreateManufacturer({ date_create, date_update });
            if (manufacturer) {
                const manufacturerAded = new Buffer(date_create).toString('base64');
                return  { converdate_create :manufacturerAded};
            }
        },
        updateManufacturer: async (_, {id, date_create, date_update},{ dataSources }) => {
            const manufacturer = await dataSources.manufacturerAPI.updateManufacturer({id, date_create, date_update });
            if (manufacturer) {
                const manufacturerAded = new Buffer(date_create).toString('base64');
                return  { converdate_create :manufacturerAded};
            }
        },
        deleteManufacturer: async (_, { id },{ dataSources }) => {
            const manufacturer = await dataSources.manufacturerAPI.deleteManufacturer({ id });
            if (manufacturer) {
                const manufacturerAded = new Buffer(date_create).toString('base64');
                return  { converdate_create :manufacturerAded};
            }
        },
    },

};