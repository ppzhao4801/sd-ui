<template>
  <div>
    <yxb-dialog title="创建应用" :visible.sync="pageData.showDialog" :before-close="close">
      <div>
        <yxb-form ref="form" :model="form" :rules="rules" label-width="120px">
          <yxb-col :span="12">
            <yxb-form-item label="应用名称" prop="appName">
              <yxb-input v-model="form.appName" placeholder="请输入应用名称" maxlength="256" type="text" clearable>
              </yxb-input>
            </yxb-form-item>
          </yxb-col>
          <yxb-col :span="12">
            <yxb-form-item label="应用标识" prop="clientId">
              <yxb-input
                v-model="form.clientId"
                placeholder="8-12位之内的字母或下划线"
                maxlength="12"
                type="text"
                clearable
              >
              </yxb-input>
            </yxb-form-item>
          </yxb-col>
          <yxb-col :span="24">
            <yxb-form-item label="描述" prop="description">
              <yxb-input
                v-model="form.description"
                placeholder="请输入描述"
                type="textarea"
                maxlength="500"
                rows="2"
                clearable
              >
              </yxb-input>
            </yxb-form-item>
          </yxb-col>
        </yxb-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <yxb-button :loading="pageData.submitLoading" type="primary" @click="submit">保存</yxb-button>
        <yxb-button @click="close">取 消</yxb-button>
      </span>
    </yxb-dialog>
  </div>
</template>

<script>
import { request } from "@/api/service";
export default {
  computed: {},
  data() {
    return {
      pageData: {
        showDialog: false,
        submitLoading: false,
      },
      form: {
        appName: null,
        clientId: null,
        description: null,
      },
      rules: {
        appName: [{ required: true, message: "请输入应用名称", trigger: "blur" }],
        clientId: [
          { required: true, message: "请输入应用标识", trigger: "blur" },
          {
            pattern: /^[a-zA-Z_]{8,12}$/,
            message: "应用标识格式有误",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    open() {
      this.pageData.showDialog = true;
    },
    close() {
      this.pageData.showDialog = false;
      this.$refs.form.resetFields();
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return false;
        }
        this.pageData.submitLoading = true;
        request({
          url: "/afis-openapi/oapi/oapiApp/savePartnerApp",
          method: "post",
          data: this.form,
        })
          .then(() => {
            this.pageData.submitLoading = false;
            this.close();
            this.$emit("close");
          })
          .catch(() => {
            this.pageData.submitLoading = false;
          });
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
