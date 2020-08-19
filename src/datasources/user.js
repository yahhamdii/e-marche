import { RESTDataSource } from 'apollo-datasource-rest';
import  request  from 'request';
import  {promisify} from 'util';

const promisifedReq = promisify(request)

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GRAPHQL_APP_API_URL;
  }
  async getAllUsers(filter) {
    return  this.get(`user?filter=${filter}`); 
  }
  async getUserById({ userId }) {
    return  this.get(`user/${userId}`);
  }
  async makeLoginWith({username, password, refreshToken = ''}) {
    console.log("makeLoginWith -> password", password)
    const formData = refreshToken === ''
    ?({
      grant_type: `${process.env.GRAPHQL_APP_PASSWORD_GRANT_TYPE}`,
      username: username,
      password: password,
      client_id: `${process.env.GRAPHQL_APP_API_CLIENT_ID}`,
      client_secret: `${process.env.GRAPHQL_APP_API_SECRET}`
    }):
    ({      
      grant_type: `${process.env.GRAPHQL_APP_refreshToken_grantType}`,
      username: username,
      client_id: `${process.env.GRAPHQL_APP_API_CLIENT_ID}`,
      client_secret: `${process.env.GRAPHQL_APP_API_SECRET}`  
    });
    const requestOptions = {
      method: 'POST',
      url: `${process.env.GRAPHQL_APP_URL}/oauth/v2/token`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded'},
      mode: 'cors',
      form: formData
    };
     const response = await promisifedReq(requestOptions);
     try {
      const user = await JSON.parse(response.body);
      
      const datetime = new Date();
      const userTokens = user.expires_in
      ? ({user, expires_at: (datetime.setSeconds(datetime.getSeconds() + user.expires_in)) })
      : user;
      
      return user;
     }catch(e){
      console.log(e);
     }
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