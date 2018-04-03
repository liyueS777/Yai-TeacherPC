<template>
  <div class="login-wrap">
      <div class="login">
        <p class="title">展示页面管理系统</p>
        <el-form :model="ruleForm" label-position="middle" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号:" prop="account">
                <el-input v-model="ruleForm.account" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="password">
                <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="验证:" prop="authorial">
                <el-input v-model="ruleForm.authorial" placeholder="请输入验证码" class="authorial-input"></el-input>
                <div class="authorial">验证码</div>
                <span></span>
            </el-form-item>
            <el-form-item class="submit" id="submit">
                <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
                <p>忘记密码，请联系管理员重置</p>
            </el-form-item>
        </el-form>
    
        </div>
        <footer class="footer">
            <p>深圳群英汇益爱信息技术有限公司</p>
            <p>Copy Right 2017-2019 Shenzhen Qunyionghui Yiai Tech Co.Itd</p>
        </footer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        account: "",
        password: "",
        authorial: ""
      },
      rules: {
        account: [
          { required: true, message: "请输入账户名", trigger: "blur"},
        ],
        password:[
          { required: true, message: "请输入密码", trigger: "blur"},
        ],
        authorial:[
          { required: true, message: "请输入验证码", trigger: "blur"}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
          console.log(valid)
        if (valid) {
          this.$router.push('/main')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less">
.login-wrap {
  height: 100%;
  .login {
    box-shadow: darkgrey 0px 0px 12px 0px;
    border-radius: 2px;
    // border: 1px solid #000;
    // margin:0 auto;
    // padding-top: 200px;
    width: 450px;
    //   height: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .title {
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 18px;
      border-bottom: 1px solid #e4e7ed;
    }
    .demo-ruleForm {
      margin-top: 20px;
      padding: 10px 20px 0;
      .el-form-item {
        .el-form-item__label {
          text-align: center !important;
          width: 60px !important;
        }
        >div {
          margin-left: 60px !important;
        }
      }
      .el-form-item:last-of-type {
        margin-top: 30px;
        .el-form-item__content {
          margin-left:10px !important;
          p {
            height: 40px;
            line-height: 40px;
            text-align: center;
          }
          .el-button {
            width: 100%;
          }
          }
      }
      .authorial-input {
        width: 230px;
      }
      .authorial {
        display: inline-block;
        width: 100px;
        border: 1px solid #000;
        margin-left: 10px;
      }
    }
    .footer {
      position: absolute;
      bottom: 6px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .footer {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      p{
          line-height: 30px;
          text-align: center;
          font-size: 14px;
      }
    }
}
</style>

