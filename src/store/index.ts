import { createStore } from 'vuex';
import getters from './getters';
import app from './modules/app';
import language from './modules/language';
import roles from './modules/roles';
import user from './modules/user';

const store: any = createStore({
  modules: {
    app,
    user,
    roles,
    language
  },
  getters
});

export const setupStore = (app: any) => {
  app.use(store);
};

export default store;
