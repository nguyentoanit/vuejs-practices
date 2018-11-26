<template>
  <div>
    <nav class="navbar navbar-default">
    <div class="container-fluid">\
        <ul class="nav navbar-nav">
            <li><a href="#">Home</a></li>
            <li v-for="route in routes" v-if="route.visible">
              <router-link v-bind:to="{ 'path' : route.path }">{{route.title}}</router-link>
            </li>
        </ul>
    </div>
</nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      routes: this.$router.options.routes
    };
  }
};
</script>

<style scoped>
</style>