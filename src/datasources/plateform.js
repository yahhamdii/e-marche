import { RESTDataSource } from 'apollo-datasource-rest';

class PlateformAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GRAPHQL_APP_API_URL;
  }
  async getAllPlateform(filter) {
    return  this.get(`platform?filter=${filter}`);
  }
  async getPlateformById({plateformId}) {
    return  this.get(`platform/${plateformId}`);
  }
  async CreatePlateform({ date_create: date_createArg, date_update: date_updateArg} = {}) {
    const date_create = this.context && this.context.plateform ? this.context.plateform.date_create : date_createArg;
    const date_update = this.context && this.context.plateform ? this.context.plateform.date_update : date_updateArg;
    return this.post(
      `platform`,
      {date_create, date_update},
    );
  }
  async updatePlateform({id: idArg, date_create: date_createArg, date_update: date_updateArg}={} ) {
    const plateformId = this.context && this.context.plateform ? this.context.plateform.id : idArg;
    const date_create = this.context && this.context.plateform ? this.context.plateform.date_create : date_createArg;
    const date_update = this.context && this.context.plateform ? this.context.plateform.date_update : date_updateArg;
    return this.put(
      `platform/${plateformId}`, 
      { plateformId, date_create, date_update },
    );
  }
  async deletePlateform({id: idArg}) {
    const plateformId = this.context && this.context.plateform ? this.context.plateform.id : idArg;
    return this.delete(
      `platform/${plateformId}`,
    );
  }
}

export default PlateformAPI;