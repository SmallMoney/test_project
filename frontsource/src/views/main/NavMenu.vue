<template>
  <div class="nav-menu"
       @mouseover="mouseover"
       @mouseleave="mouseleave">
    <el-menu :default-active="activeIndex"
             :collapse="isCollapse"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             @select="handleSelect">
      <el-menu-item index="home">
        <i class="el-icon-s-home"></i>
        <span slot="title">工作台</span>
      </el-menu-item>
      <el-menu-item index="list">
        <i class="el-icon-menu"></i>
        <span slot="title">研发列表</span>
      </el-menu-item>
      <el-menu-item index="setting">
        <i class="el-icon-setting"></i>
        <span slot="title">设置中心</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true,
      activeIndex: '',
    };
  },
  watch: {
    $route: {
      handler(v) {
        this.activeIndex = v.name;
      },
      immediate: true,
    },
  },
  methods: {
    mouseover() {
      this.isCollapse = false;
    },
    mouseleave() {
      this.isCollapse = true;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push({
        name: key,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.nav-menu {
}
.el-menu-vertical-demo {
  z-index: 999;
  width: 50px;
  height: 100%;
  position: absolute;
  left: 0px;
  overflow-y: auto;
  .el-menu-item {
    padding-left: 13px !important;
  }
  /deep/ .el-menu-item .el-tooltip {
    padding: 0 13px !important;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
