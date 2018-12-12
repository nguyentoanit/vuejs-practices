<template>
  <b-row>
    <b-col>
      <div class="hello">
        <h1>{{ $t("message.welcomeUserPage") }}</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">{{ $t("message.firstName") }}</th>
              <th scope="col">{{ $t("message.lastName") }}</th>
              <th scope="col">{{ $t("message.avatar") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user">
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
    </b-col>
  </b-row>
</template>

<script>
import userAPI from "../../api/user";
export default {
  name: "Users",
  data() {
    return {
      users: []
    };
  },
  created() {
    userAPI
      .getUsers()
      .then(response => (this.users = response.data.data))
      .catch(error => console.log(error));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
