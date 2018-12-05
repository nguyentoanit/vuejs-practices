<template>
  <div>
    <b-row>
      <h1 style="margin: 0 auto;">{{ $t("message.testVuex") }}</h1>
    </b-row>
    <b-row>
      <b-form inline>
        <label for="word">{{ $t("message.content") }}:</label>
        <b-form-input v-model="word"></b-form-input>
        <!-- <input class="btn btn-info"> -->
        <b-button
          :disabled="word == ''"
          @click="addWord(word); word=''"
          variant="info"
        >{{$t('message.content')}}</b-button>
      </b-form>
    </b-row>
    <b-row>{{$t("message.store")}}: {{getWord}}</b-row>
    <b-row>{{$t("message.result")}}:</b-row>
    <b-row>
      <div v-for="value in getWord">
        {{value}}
        <b-button @click="deleteWord(value)" variant="danger">x</b-button>
      </div>
    </b-row>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "Word",
  data() {
    return {
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
