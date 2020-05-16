import { RESTDataSource } from 'apollo-datasource-rest';

class ItemAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GRAPHQL_APP_API_URL;
  }
  async getAllItems() {
    return  this.get('item');
  }
  async getItemById({itemId}) {
    return  this.get(`item/${itemId}`);
  }
  async CreateItem({ date_create: date_createArg, date_update: date_updateArg} = {}) {
    const date_create = this.context && this.context.item ? this.context.item.date_create : date_createArg;
    const date_update = this.context && this.context.item ? this.context.item.date_update : date_updateArg;
    return this.post(
      `item`,
      {date_create, date_update},
    );
  }
  async updateItem({id: idArg, date_create: date_createArg, date_update: date_updateArg}={} ) {
    const itemId = this.context && this.context.item ? this.context.item.id : idArg;
    const date_create = this.context && this.context.item ? this.context.item.date_create : date_createArg;
    const date_update = this.context && this.context.item ? this.context.item.date_update : date_updateArg;
    return this.put(
      `item/${itemId}`, 
      { itemId, date_create, date_update },
    );
  }
  async deleteItem({id: idArg}) {
    const itemId = this.context && this.context.item ? this.context.item.id : idArg;
    return this.delete(
      `item/${itemId}`,
    );
  }
}

export default ItemAPI;