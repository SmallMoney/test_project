<template>
  <div class="main">
    <Header />
    <div class="system-body">
      <NavMenu />
      <div class="system-content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Header from './Header';
import NavMenu from './NavMenu';
export default {
  components: {
    Header,
    NavMenu,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.main {
  height: 100vh;
  .system-body {
    height: calc(100% - 50px);
    padding-left: 50px;
    position: relative;
    .system-content {
      height: 100%;
      overflow-y: auto;
    }
  }
}
</style>
