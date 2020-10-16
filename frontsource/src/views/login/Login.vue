<template>
  <div class="login">
    <div class="login-body">
      <div class="system-title">
        <img class="system-logo"
             src="@/assets/logo.png">
        <div class="title-text">{{ title }}</div>
      </div>
      <el-form ref="formRef"
               :model="form"
               label-width="70px"
               hide-required-asterisk>
        <el-form-item label="用户名"
                      prop="userName"
                      :rules="{required: true, message: '请输入用户名'}">
          <span slot="label"
                class="item-label">
            用户名
          </span>
          <el-input v-model="form.userName"
                    placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="password"
                      :rules="{required: true, message: '请输入密码'}">
          <span slot="label"
                class="item-label">
            密&#12288;码
          </span>
          <el-input v-model="form.password"
                    show-password
                    placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="operation">
          <el-button type="primary"
                     class="submit-bt"
                     @click="onSubmit">登&#12288;&#12288;录</el-button>
        </el-form-item>
        <div class="register-div">
          <a class="register"
             @click="onRegister">新用户注册</a>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import service from '@/service';
const API = service.login;
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
  methods: {
    onSubmit() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          let { userName: loginname, password } = this.form;
          let params = {
            loginname,
            password,
          };
          API.login({ params }).then(({ data }) => {
            console.log(data);
            this.$router.push({
              name: 'home',
            });
          });
        }
      });
    },
    onRegister() {},
  },
};
</script>
<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-body {
    width: 380px;
    padding: 24px 50px;
    background: #ebf3ff;
    border-radius: 5px;
    border: 1px solid #ebebeb;
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
    .system-title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      .system-logo {
        width: 55px;
        margin-right: 20px;
      }
      .title-text {
        color: #409eff;
        font-size: 36px;
        font-weight: bold;
      }
    }
    .item-label {
      font-size: 16px;
    }
  }
  .operation {
    .submit-bt {
      width: 100%;
    }
  }
  .register-div {
    text-align: right;
    .register {
      // font-size: 14px;
    }
  }
}
</style>
