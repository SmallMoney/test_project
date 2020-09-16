<template>
  <header class="system-header">
    <div class="system-title">
      <img class="system-logo"
           src="@/assets/logo.png">
      <div class="title-text">{{ title }}</div>
    </div>
    <div class="operation">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
// import service from '@/service';
export default {
  data() {
    return {
      title: '研发平台',
      userName: '莫小山',
    };
  },
};
</script>
<style lang="scss" scoped>
.system-header {
  height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdfe6;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  .system-title {
    height: 100%;
    display: flex;
    align-items: center;
    .system-logo {
      width: 34px;
      margin-right: 10px;
    }
    .title-text {
      color: #409eff;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .operation {
    .el-dropdown-link:hover {
      cursor: pointer;
      color: #409eff;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
}
</style>
