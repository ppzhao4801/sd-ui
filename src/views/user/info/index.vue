<template>
  <div>
    <div>
      <yxb-form ref="form" :disabled="view" :model="form" :rules="rules" label-width="120px">
        <yxb-row>
          <yxb-col :span="12">
            <yxb-form-item label="合作方名称" prop="partnerName">
              <yxb-input
                v-model="form.partnerName"
                :disabled="!!form.id"
                placeholder="请输入合作方名称"
                maxlength="30"
                type="text"
                clearable
              >
              </yxb-input>
            </yxb-form-item>
          </yxb-col>
          <yxb-col :span="12">
            <yxb-form-item label="合作方编码" prop="partnerCode">
              <yxb-input
                v-model="form.partnerCode"
                :disabled="!!form.id"
                placeholder="请输入合作方编码"
                maxlength="32"
                type="text"
                clearable
              >
              </yxb-input>
            </yxb-form-item>
          </yxb-col>
          <yxb-col :span="12">
            <yxb-form-item label="联系人名称" prop="contractName">
              <yxb-input
                v-model="form.contractName"
                placeholder="请输入联系人名称"
                maxlength="50"
                type="text"
                clearable
              >
              </yxb-input>
            </yxb-form-item>
          </yxb-col>
          <yxb-col :span="12">
            <yxb-form-item label="联系人电话" prop="contractPhone">
              <yxb-input
                v-model="form.contractPhone"
                placeholder="请输入联系人电话"
                maxlength="11"
                type="text"
                clearable
              >
              </yxb-input>
            </yxb-form-item>
          </yxb-col>
          <yxb-col :span="12">
            <yxb-form-item label="联系人邮箱" prop="contractEmail">
              <yxb-input
                v-model="form.contractEmail"
                placeholder="请输入联系人邮箱"
                maxlength="50"
                type="text"
                clearable
              >
              </yxb-input>
            </yxb-form-item>
          </yxb-col>
          <yxb-col :span="24">
            <yxb-form-item label="备注" prop="description">
              <yxb-input
                v-model="form.description"
                placeholder="请输入备注"
                type="textarea"
                maxlength="500"
                rows="2"
                clearable
              >
              </yxb-input>
            </yxb-form-item>
          </yxb-col>
        </yxb-row>
      </yxb-form>
      <div style="text-align: center">
        <yxb-button :disabled="!view" type="primary" size="large" @click="closeView">编辑</yxb-button>
        <yxb-button :loading="pageData.submitLoading" :disabled="view" @click="submit" type="primary" size="large">
          保存
        </yxb-button>
      </div>
    </div>
  </div>
</template>
<script>
import { request } from "@/api/service";
import { merge } from "lodash";
import { mapState } from "vuex";
export default {
  data() {
    return {
      pageData: {
        submitLoading: false,
      },
      view: true,
      form: {
        id: null,
        partnerName: null,
        partnerCode: null,
        contractName: null,
        contractPhone: null,
        contractEmail: null,
        description: null,
      },
      rules: {
        partnerName: [
          {
            required: true,
            message: "请输入合作方名称",
            trigger: "blur",
          },
        ],
        partnerCode: [
          {
            required: true,
            message: "请输入合作方编码",
            trigger: "blur",
          },
        ],
        contractName: [
          {
            required: true,
            message: "请输入联系人名称",
            trigger: "blur",
          },
        ],
        contractPhone: [
          {
            required: true,
            message: "请输入联系人电话",
            trigger: "blur",
          },
          {
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (!value) {
                callback();
              } else if (!/^((0\d{2,3}\d{7,8})|(1[3456789]\d{9}))$/.test(value)) {
                callback(new Error("请输入正确的手机号"));
              } else {
                callback();
              }
            },
          },
        ],
        contractEmail: [
          {
            pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            message: "邮箱格式有误",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    ...mapState("user", ["info"]),
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      request({
        url: "/afis-openapi/oapi/partner/current",
        method: "post",
        data: {},
      })
        .then((res) => {
          merge(this.form, res);
          if (!(this.form && this.form.id)) {
            this.form.contractPhone = this.info.userName;
            this.view = false;
          }
        })
        .catch(() => {
          this.form.contractPhone = this.info.userName;
        });
    },
    closeView() {
      this.view = false;
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return false;
        }
        this.pageData.submitLoading = true;
        request({
          url: "/afis-openapi/oapi/partner/saveCurrent",
          method: "post",
          data: this.form,
        })
          .then(() => {
            this.pageData.submitLoading = false;
            this.init();
            this.view = true;
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
