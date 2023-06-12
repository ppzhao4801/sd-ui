<template>
  <div class="top">
    <div class="top_fixed">
      <div class="f-flex f-row-between top_content">
        <div class="f-flex">
          <div>
            <img :src="`${$baseUrl}images/logo/icon.png`" height="50px" width="auto" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Navbar",
  components: {},
  computed: {
    ...mapState("user", ["info"]),
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    /**
     * 接收点击切换侧边栏的按钮
     */
    handleToggleSidebar() {
      this.toggleSidebar();
    },
    toHome() {
      this.$router.push({ name: "Index" });
    },
    toUser() {
      this.$router.push({ name: "Info" });
    },
    toWiki() {
      this.$router.push({ name: "Guide" });
    },
  },
};
</script>
<style lang="scss" scoped>
.top {
  height: 61px;
  &_fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: #ffffff;
    width: 100%;
    border-bottom: 1px solid #ccc;
  }
  &_content {
    padding: 5px;
    background-color: #ffffff;
    width: 50%;
    margin: 0 auto;
    .nav {
      white-space: nowrap;
      padding: 0 30px;
      ::v-deep(.el-link) {
        margin-left: 60px;
        font-size: 16px;
        // font-weight: 600;
      }
    }
  }
}
</style>
