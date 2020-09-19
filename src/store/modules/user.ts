import { getUser, login } from '@/api/login';
import { getToken, removeToken, setToken } from '@/utils/auth';
import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators';
export interface UserState {
  token: string;
  name: string;
  avatar: string;
  roles: string[];
}

@Module({ namespaced: true })
class User extends VuexModule implements UserState {
  public token = getToken() || '';
  public name = '';
  public avatar = '';
  public roles: string[] = [];
  public email = '';

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token;
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name;
  }

  @Mutation
  private SET_AVATAR(avatar: string) {
    this.avatar = avatar;
  }
  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles;
  }

  @Mutation
  private SET_EMAIL(email: string) {
    this.email = email;
  }

  @Action
  public async Login(userInfo: { username: string; password: string }) {
    let { username, password } = userInfo;
    username = username.trim();
    const { data } = await login({ username, password });
    setToken(data.token);
    this.context.commit('SET_TOKEN',data.token);
  }

  @Action
  public ResetToken() {
    removeToken();
    this.SET_TOKEN('');
    this.SET_ROLES([]);
  }

  @Action
  public async GetUser() {
    if (this.token === '') {
      throw Error('GetUserInfo: token is undefined!');
    }
    const { data } = await getUser({
      /* Your params here */
    });
    if (!data) {
      throw Error('Verification failed, please Login again.');
    }
    const { roles, name, avatar, introduction, email } = data.user;
    // roles must be a non-empty array
    if (!roles || roles.length <= 0) {
      throw Error('GetUserInfo: roles must be a non-null array!');
    }
    this.SET_ROLES(roles);
    this.SET_NAME(name);
    this.SET_AVATAR(avatar);
    this.SET_EMAIL(email);
  }

  @Action
  public async LogOut() {
    if (this.token === '') {
      throw Error('LogOut: token is undefined!');
    }
    removeToken();
    // Reset visited views and cached views
    this.SET_TOKEN('');
    this.SET_ROLES([]);
  }
}

export const UserModule = User;
