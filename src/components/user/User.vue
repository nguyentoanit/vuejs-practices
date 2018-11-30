<template>
  <div class="row">
    <h1>{{ msg }}</h1>
    {{$route.params.id}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "User",
  data() {
    return {
      msg: "Welcome to User Details Page",
      user: {}
    };
  },
  mounted() {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then(response => (this.user = response.data.data));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
