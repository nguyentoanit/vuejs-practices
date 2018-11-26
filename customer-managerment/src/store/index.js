import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {
    words: []
  },
  getters: {
    getWord: state => {
      return state.words;
    }
  },
  mutations: {
    addWord(state, word) {
      state.words.push(word);
    },
    deleteWord(state, word) {
      state.words = state.words.filter(obj => obj !== word);
    }
  }
});
