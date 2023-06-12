<template>
  <div class="register">
    <div class="register-steps">
      <el-steps :active="active" align-center finish-status="success">
        <el-step title="填写账号信息"></el-step>
        <el-step title="注册成功"></el-step>
      </el-steps>
    </div>
    <div v-if="active === 0" class="register-form">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="手机号" type="text" autocomplete="on">
            <i slot="prefix" class="el-icon-user" />
          </el-input>
        </el-form-item>
        <el-form-item label="登录密码" prop="passwd">
          <el-input v-model="form.passwd" :type="passwordType" placeholder="登录密码" autocomplete="on" show-password>
            <i slot="prefix" class="el-icon-lock" />
          </el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPasswd">
          <el-input
            v-model="form.confirmPasswd"
            :type="passwordType"
            placeholder="确认密码"
            autocomplete="on"
            show-password
          >
            <i slot="prefix" class="el-icon-lock" />
          </el-input>
        </el-form-item>
        <el-form-item label="会员名称" prop="alias">
          <el-input v-model="form.alias" placeholder="会员名称" type="text" autocomplete="on">
            <i slot="prefix" class="el-icon-user" />
          </el-input>
        </el-form-item>
        <el-form-item label="图形验证码" prop="captcha">
          <el-input class="register-captcha" type="text" v-model="form.captcha" placeholder="验证码" maxlength="4">
            <template slot="append">
              <img
                class="register-code"
                :src="captchaUrl || `${$baseUrl}images/icon/refresh.png`"
                @click="getCaptcha"
              />
            </template>
          </el-input>
        </el-form-item>
        <div style="text-align: center">
          <el-button :loading="pageData.submitLoading" @click="submit" type="primary" size="large">注册</el-button>
        </div>
      </el-form>
    </div>
    <div v-else>
      <div class="register-success">
        <el-result icon="success" title="注册成功" :subTitle="`登录名为【${form.username}】`">
          <template slot="extra">
            <el-button type="primary" size="medium" @click="openLogin(true)">去登录</el-button>
          </template>
        </el-result>
      </div>
    </div>
  </div>
</template>
<script>
import { request } from "@/api/service";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      pageData: {
        submitLoading: false,
      },
      active: 0,
      passwordType: "password",
      captchaUrl: null,
      form: {
        username: null,
        passwd: null,
        confirmPasswd: null,
        alias: null,
        captcha: null,
        uid: null,
      },
      rules: {
        username: [
          { required: true, message: "请输入", trigger: "blur" },
          {
            pattern: /^((0\d{2,3}\d{7,8})|(1[3456789]\d{9}))$/,
            message: "手机号格式有误",
            trigger: "blur",
          },
        ],
        passwd: [
          { required: true, message: "请输入", trigger: "blur" },
          {
            pattern: /^(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])^[^\s\u4e00-\u9fa5]{8,20}$/,
            message: "密码需包含数字、大小写字母、特殊字符，长度不小于8-20位",
            trigger: "blur",
          },
        ],
        confirmPasswd: [
          { required: true, message: "请输入", trigger: "blur" },
          {
            pattern: /^(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])^[^\s\u4e00-\u9fa5]{8,20}$/,
            message: "密码需包含数字、大小写字母、特殊字符，长度不小于8-20位",
            trigger: "blur",
          },
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请再次输入密码"));
              } else if (value !== this.form.passwd) {
                callback(new Error("两次输入密码不一致!"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
        alias: [{ required: true, message: "请输入", trigger: "blur" }],
        captcha: [{ required: true, message: "请输入", trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.getCaptcha();
  },
  methods: {
    ...mapActions("user", ["openLogin"]),
    getCaptcha() {
      request({
        url: "/afis-openapi/oapi/auth/captcha",
        method: "post",
      }).then((res) => {
        this.form.uid = res.uid;
        this.captchaUrl = res.img;
      });
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return false;
        }
        this.pageData.submitLoading = true;
        request({
          url: "/afis-openapi/oapi/auth/register",
          method: "post",
          data: this.form,
        })
          .then(() => {
            this.pageData.submitLoading = false;
            this.active = 1;
            //this.$router.push({ name: "Index" });
          })
          .catch(() => {
            this.pageData.submitLoading = false;
          });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.register-steps {
  margin: 20px 0;
}
.register-form {
  max-width: 500px;
  text-align: center;
  margin: auto;
  .el-form-item {
    margin-bottom: 20px;
  }
  ::v-deep(.el-input-group__append) {
    background-color: #fff;
    border: none;
  }
  .el-icon-user,
  .el-icon-lock {
    font-size: 18px;
    margin-top: 12px;
  }
  .register-captcha {
    vertical-align: top;
  }
  .register-code {
    height: 40px;
    display: inline-block;
    margin: 0px;
    vertical-align: top;
  }
}
</style>
