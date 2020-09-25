import { getUser, login } from '@/api/login';
import { getToken, removeToken, setToken } from '@/utils/auth';
export interface UserState {
  token: string;
  name: string;
  avatar: string;
  roles: string[];
}

export const UserModule = {
  namespaced: true,
  state: {
    token: getToken() || '',
    name: '',
    avatar: '',
    roles: [],
    email: ''
  },
  mutations: {
    SET_TOKEN(state: any, data: unknown) {
      state.token = data;
    },
    SET_NAME(state: any, data: unknown) {
      state.name = data;
    },
    SET_AVATAR(state: any, data: unknown) {
      state.avatar = data;
    },
    SET_ROLES(state: any, data: unknown) {
      state.roles = data;
    },
    SET_EMAIL(state: any, data: unknown) {
      state.email = data;
    }
  },
  actions: {
    async Login({ commit }: any, userInfo: { userName: string; password: string }) {
      let { userName, password } = userInfo;
      userName = userName.trim();
      const { data } = await login({ userName, password });
      setToken(data.token);
      commit('SET_TOKEN', data.token);
    },
    ResetToken({ commit }: any) {
      removeToken();
      commit('SET_TOKEN', '');
      commit('SET_ROLES', []);
    },
    async GetUser({ state, commit }: any) {
      if (state.token === '') {
        throw Error('GetUserInfo: token is undefined!');
      }
      const { data } = await getUser();
      if (!data) {
        throw Error('Verification failed, please Login again.');
      }
      const { roles, name, avatar, email } = data.user;
      // roles must be a non-empty array
      if (!roles || roles.length <= 0) {
        throw Error('GetUserInfo: roles must be a non-null array!');
      }
      commit('SET_ROLES', roles);
      commit('SET_NAME', name);
      commit('SET_AVATAR', avatar);
      commit('SET_EMAIL', email);
    },
    async LogOut({ state, commit }: any) {
      if (state.token === '') {
        throw Error('LogOut: token is undefined!');
      }
      removeToken();
      // Reset visited views and cached views
      commit('SET_TOKEN', '');
      commit('SET_ROLES', []);
    }
  }
};
