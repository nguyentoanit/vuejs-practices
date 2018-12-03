import Vue from 'vue';
import Vuex from 'vuex';
import word from './modules/Word';
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {},
  getters: {
    getLocale: state => {
      return state.locale;
    }
  },
  mutations: {},
  modules: {
    word: word
  }
});
