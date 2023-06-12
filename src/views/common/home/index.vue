<template>
  <div>
    <div style="background: url('/images/home/bg.jpg') no-repeat 100% 100%">
      <el-carousel :interval="5000" arrow="always" height="400px">
        <el-carousel-item>
          <img :src="`${$baseUrl}images/home/01.jpg`" height="100%" width="auto" />
        </el-carousel-item>
        <el-carousel-item>
          <img :src="`${$baseUrl}images/home/02.jpg`" height="100%" width="auto" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="app f-flex f-row-center">
      <div @click="toUserApp">
        <el-result icon="success" title="企业应用" subTitle="为企业提供专业服务">
          <template slot="icon">
            <img :src="`${$baseUrl}images/home/qy.svg`" height="100px" width="100px" />
          </template>
        </el-result>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toUserApp() {
      debugger;
      this.$router.push({ name: "App" });
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  padding: 20px 10px;
  ::v-deep(.el-result) {
    width: 300px;
    cursor: pointer;
    &:hover {
      background-color: #f0f0f0;
    }
    .el-result__title {
      margin-top: 5px;
    }
  }
}

::v-deep(.el-carousel__container) {
  .el-carousel__item {
    text-align: center;
  }
}
</style>
