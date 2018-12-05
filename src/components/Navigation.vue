<template>
  <b-navbar type="dark" variant="info" toggleable>
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav>
        <b-nav-item
          v-for="route in routes"
          v-if="route.visible"
          :href="'#'+route.path"
        >{{ $t("navigation."+route.title) }}</b-nav-item>
        <b-nav-item-dropdown text="Language" right>
          <b-dropdown-item v-for="(lang, i) in langs" @click="$i18n.locale = lang">{{ lang }}</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
</style>