<template>
  <div class="hello">
    <h1>{{ $t("message.welcome") }}</h1>
    <p>{{ $t("message.hello") }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
