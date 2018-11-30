<template>
  <div class="row">
    <h1>{{ msg }}</h1>
    <div class="form-group">
      <label for="word">Add word:</label>
      <input type="word" class="form-control" v-model="word">
    </div>
    <input v-on:click="addWord(word)" type="button" class="btn btn-info" value="Submit">
    <div>
      <br>
      Store: {{getWord}}
    </div>
    <div>
      <br>Result:
      <div v-for="value in getWord">
        {{value}}&nbsp;
        <input
          v-on:click="deleteWord(value)"
          class="btn btn-danger"
          type="button"
          value="x"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "Word",
  data() {
    return {
      msg: "Test Vuex",
      word: ""
    };
  },
  methods: {
    ...mapMutations([
      "addWord", // map `this.increment()` to `this.$store.commit('increment')`
      "deleteWord" // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
    ])
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      "getWord"
      // ...
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
