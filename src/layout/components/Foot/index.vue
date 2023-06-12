<template>
  <div class="foot">
    <div class="copy">
      <span>Copyright &copy; 2022 股份有限公司 版权所有</span>
      <a style="margin-left: 20px" target="_blank" href="https://beian.miit.gov.cn/">京ICP备12004550号-2</a>
      <span style="margin-left: 20px">公司地址：北京市昌平区沙河镇沙阳路</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Foot",
  components: {},
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.foot {
  width: 100%;
  background-color: #e6e6e6;
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.foot .copy {
  white-space: nowrap;
  color: #969696;
}
.foot .copy a {
  color: #969696;
}
</style>
