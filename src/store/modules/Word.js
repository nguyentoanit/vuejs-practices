export default {
  state: {
    words: []
  },
  getters: {
    getWord: state => {
      return state.words
    }
  },
  mutations: {
    addWord(state, word) {
      state.words.push(word)
    },
    deleteWord(state, word) {
      state.words = state.words.filter(obj => obj !== word)
    }
  }
}
