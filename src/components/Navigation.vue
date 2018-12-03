<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li v-for="route in routes" v-if="route.visible">
            <router-link v-bind:to="{ 'path' : route.path }">{{ $t("navigation."+route.title) }}</router-link>
          </li>
        </ul>
        <select id="locale" v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
        </select>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      routes: this.$router.options.routes,
      langs: ["en", "fr", "jp"]
    };
  }
};
</script>

<style scoped>
#locale {
  float: right;
  margin-top: 13px;
}
</style>