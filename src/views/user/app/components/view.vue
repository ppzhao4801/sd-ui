<template>
  <div>
    <yxb-dialog title="查看应用" :visible.sync="pageData.showDialog" :before-close="close">
      <div>
        <yxb-form ref="form" :disabled="true" :model="form" :rules="rules" label-width="120px">
          <yxb-col :span="12">
            <yxb-form-item label="应用名称" prop="appName">
              {{ form.appName }}
            </yxb-form-item>
          </yxb-col>
          <yxb-col :span="12">
            <yxb-form-item label="应用标识" prop="clientId">
              {{ form.clientId }}
            </yxb-form-item>
          </yxb-col>
          <yxb-col :span="24">
            <yxb-form-item label="应用密钥" prop="clientSecret">
              {{ form.clientSecret }}
            </yxb-form-item>
          </yxb-col>
          <yxb-col :span="24">
            <yxb-form-item label="描述" prop="description">
              {{ form.description }}
            </yxb-form-item>
          </yxb-col>
        </yxb-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <yxb-button @click="close">关闭</yxb-button>
      </span>
    </yxb-dialog>
  </div>
</template>

<script>
import { merge } from "lodash";
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
        clientSecret: null,
        description: null,
      },
      rules: {},
    };
  },
  methods: {
    open(row) {
      this.pageData.showDialog = true;
      merge(this.form, row);
    },
    close() {
      this.pageData.showDialog = false;
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep(.el-dialog__body) {
  overflow: auto;
}
::v-deep(.el-form-item__label) {
  font-weight: 600;
}
</style>
