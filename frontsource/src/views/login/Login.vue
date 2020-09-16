<template>
  <div class="login">
    <div class="login-body">
      <div class="system-title">
        <img class="system-logo"
             src="@/assets/logo.png">
        <div class="title-text">{{ title }}</div>
      </div>
      <el-form ref="form"
               :model="form"
               label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '研发平台',
      form: {
        userName: '',
        password: '',
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-body {
    width: 400px;
    padding: 30px 50px;
    background: #ebf3ff;
    border-radius: 5px;
    .system-title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 30px;
      .system-logo {
        width: 55px;
        margin-right: 20px;
      }
      .title-text {
        color: #409eff;
        font-size: 40px;
        font-weight: bold;
      }
    }
  }
}
</style>
