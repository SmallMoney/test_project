<template>
  <div class="main">
    <Header />
    <div class="page-content">
      <NavMenu />
      <div class="page-view">
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
  .page-content {
    height: calc(100% - 50px);
    padding-left: 50px;
    position: relative;
    .page-view {
      height: 100%;
      overflow-y: auto;
    }
  }
}
</style>
