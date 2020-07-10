import { RESTDataSource } from 'apollo-datasource-rest';

class AttributAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GRAPHQL_APP_API_URL;
  }
  async getAllAttribut(filter) {
    return  this.get(`attribut?filter=${filter}`); 
  }
  async getAttributById({attributId}) {
    return  this.get(`attribut/${attributId}`);
  }
  async CreateAttribut({ date_create: date_createArg, date_update: date_updateArg} = {}) {
    const date_create = this.context && this.context.attribut ? this.context.attribut.date_create : date_createArg;
    const date_update = this.context && this.context.attribut ? this.context.attribut.date_update : date_updateArg;
    return this.post(
      `attribut`,
      {date_create, date_update},
    );
  }
  async updateAttribut({id: idArg, date_create: date_createArg, date_update: date_updateArg}={} ) {
    const attributId = this.context && this.context.attribut ? this.context.attribut.id : idArg;
    const date_create = this.context && this.context.attribut ? this.context.attribut.date_create : date_createArg;
    const date_update = this.context && this.context.attribut ? this.context.attribut.date_update : date_updateArg;
    return this.put(
      `attribut/${attributId}`, 
      { attributId, date_create, date_update },
    );
  }
  async deleteAttribut({id: idArg}) {
    const attributId = this.context && this.context.attribut ? this.context.attribut.id : idArg;
    return this.delete(
      `attribut/${attributId}`,
    );
  }
}

export default AttributAPI;