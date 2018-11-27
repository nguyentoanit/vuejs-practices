<template>
  <div class="row">
    <div class="hello">
      <h1>{{ msg }}</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Avatar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>
              <img v-bind:src="user.avatar">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Users",
  data() {
    return {
      msg: "Welcome to Users Page",
      users: {}
    };
  },
  mounted() {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then(response => (this.users = response.data.data));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
