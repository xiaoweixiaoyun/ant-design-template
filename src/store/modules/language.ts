import { getLanguage, setLanguage } from '@/utils/language';
import getPageTitle from '@/utils/PageTitle';
const state = {
  lang: ''
};
const mutations = {
  SET_LANG: (state: any, lang: any) => {
    state.lang = lang;
  }
};

const actions = {
  initLanguage({ commit }: any) {
    const lang = getLanguage();
    if (getLanguage() === null) {
      commit('SET_LANG', 'CN');
    } else {
      commit('SET_LANG', lang);
    }
  },
  changeLanguage({ commit }: any, lang: any) {
    commit('SET_LANG', lang);
    setLanguage(lang);
    document.title = getPageTitle('');
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
