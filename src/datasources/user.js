const { RESTDataSource } = require('apollo-datasource-rest');

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8000/api/';
  }
  async getAllUsers() {
    return  this.get('user');
  }
  async getUserById({ userId }) {
    return  this.get(`user/${userId}`);
  }
  async CreateUser({ username: usernameArg, email: emailArg, password: passwordArg } = {}) {
    const username = this.context && this.context.user ? this.context.user.username : usernameArg;
    const email = this.context && this.context.user ? this.context.user.email : emailArg;
    const password = this.context && this.context.user ? this.context.user.password : passwordArg;
    return this.post(
      `users`,
      {username, email, password},
    );
  }
  async updateUser({id: idArg, username: usernameArg, email: emailArg, password: passwordArg } = {}) {
    const userId = this.context && this.context.user ? this.context.user.id : idArg;
    const username = this.context && this.context.user ? this.context.user.username : usernameArg;
    const email = this.context && this.context.user ? this.context.user.email : emailArg;
    const password = this.context && this.context.user ? this.context.user.password : passwordArg;  
    return this.put(
      `users/${userId}`, 
      {username, email, password },
    );
  }
  async deleteUser({id: idArg}) {
    const userId = this.context && this.context.user ? this.context.user.id : idArg;  
    return this.delete(
      `users/${userId}`, // path
    );
  }
}

export default  UserAPI;