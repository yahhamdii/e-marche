import { RESTDataSource } from 'apollo-datasource-rest';

class ManufacturerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GRAPHQL_APP_API_URL;
  }
  async getAllManufacturer(filter) {
    return  this.get(`manufacturer?filter=${filter}`);
  }
  async getManufacturerById({manufacturerId}) {
    return  this.get(`manufacturer/${manufacturerId}`);
  }
  async CreateManufacturer({ date_create: date_createArg, date_update: date_updateArg} = {}) {
    const date_create = this.context && this.context.manufacturer ? this.context.manufacturer.date_create : date_createArg;
    const date_update = this.context && this.context.manufacturer ? this.context.manufacturer.date_update : date_updateArg;
    return this.post(
      `manufacturer`,
      {date_create, date_update},
    );
  }
  async updateManufacturer({id: idArg, date_create: date_createArg, date_update: date_updateArg}={} ) {
    const manufacturerId = this.context && this.context.manufacturer ? this.context.manufacturer.id : idArg;
    const date_create = this.context && this.context.manufacturer ? this.context.manufacturer.date_create : date_createArg;
    const date_update = this.context && this.context.manufacturer ? this.context.manufacturer.date_update : date_updateArg;
    return this.put(
      `manufacturer/${manufacturerId}`, 
      { manufacturerId, date_create, date_update },
    );
  }
  async deleteManufacturer({id: idArg}) {
    const manufacturerId = this.context && this.context.manufacturer ? this.context.manufacturer.id : idArg;
    return this.delete(
      `manufacturer/${manufacturerId}`,
    );
  }
}

export default ManufacturerAPI;