import { findInfo, login } from '@/api/login';
import { resetRouter } from '@/router/index';
import { getToken, removeToken, setToken } from '@/utils/auth';
const state = {
  token: getToken(),
  name: '',
  roles: [],
  prrmissions: []
};

const mutations = {
  SET_TOKEN: (state: any, token: any) => {
    state.token = token;
  },
  SET_NAME: (state: any, name: any) => {
    state.name = name;
  },
  SET_ROLES: (state: any, roles: any) => {
    state.roles = roles;
  },
  SET_PRRMISSIONS: (state: any, prrmissions: any) => {
    state.prrmissions = prrmissions;
  }
};

const actions = {
  // user login
  login({ commit }: any, userInfo: any) {
    const { username, password } = userInfo;
    return new Promise((resolve: any, reject: any) => {
      login({ username: username.trim(), password: password })
        .then((response: any) => {
          const { token } = response;
          commit('SET_TOKEN', token);
          setToken(token);
          resolve();
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  },

  // get user info
  getInfo({ commit, state }: any) {
    return new Promise((resolve, reject) => {
      findInfo(state.token)
        .then((response: any) => {
          const { roles, name, prrmissions } = response;
          if (!roles || roles.length <= 0) {
            reject('用户角色信息不能为空');
          }
          // 保存用户信息到store
          commit('SET_ROLES', roles);
          commit('SET_PRRMISSIONS', prrmissions);
          commit('SET_NAME', name);
          resolve(response);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  },

  // user logout
  logout({ commit }: any) {
    return new Promise((resolve: any) => {
      // 退出登录，删除信息
      commit('SET_TOKEN', '');
      commit('SET_ROLES', []);
      commit('SET_PRRMISSIONS', []);
      removeToken();
      resetRouter();
      resolve();
    });
  },

  // remove token
  resetToken({ commit }: any) {
    return new Promise((resolve: any) => {
      commit('SET_TOKEN', '');
      commit('SET_ROLES', []);
      commit('SET_PRRMISSIONS', []);
      removeToken();
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
