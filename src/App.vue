<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/">
      <a class="navbar-brand"><span>Vue</span>Music</a>
    </router-link>
  </nav>

  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss">
@import "./assets/styles/variables";
@import "./assets/styles/bootstrap";

.navbar-brand {
  font-size: 30px;
  font-weight: 700;
  span {
    color: #44d0bc;
  }
}
</style>
