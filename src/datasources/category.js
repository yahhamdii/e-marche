import { RESTDataSource } from 'apollo-datasource-rest';

class CategoryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GRAPHQL_APP_API_URL;
  }
  async getAllCategory(filter) {
    return  this.get(`category?filter=${filter}`); 
  }
  async getCategoryById({categoryId}) {
    return  this.get(`category/${categoryId}`);
  }
  async CreateCategory({ date_create: date_createArg, date_update: date_updateArg} = {}) {
    const date_create = this.context && this.context.category ? this.context.category.date_create : date_createArg;
    const date_update = this.context && this.context.category ? this.context.category.date_update : date_updateArg;
    return this.post(
      `category`,
      {date_create, date_update},
    );
  }
  async updateCategory({id: idArg, date_create: date_createArg, date_update: date_updateArg}={} ) {
    const categoryId = this.context && this.context.category ? this.context.category.id : idArg;
    const date_create = this.context && this.context.category ? this.context.category.date_create : date_createArg;
    const date_update = this.context && this.context.category ? this.context.category.date_update : date_updateArg;
    return this.put(
      `category/${categoryId}`, 
      { categoryId, date_create, date_update },
    );
  }
  async deleteCategory({id: idArg}) {
    const categoryId = this.context && this.context.category ? this.context.category.id : idArg;
    return this.delete(
      `category/${categoryId}`,
    );
  }
}

export default CategoryAPI;