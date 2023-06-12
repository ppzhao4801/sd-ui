<template>
  <div class="layout">
    <div class="layout-head">
      <Heads />
    </div>
    <div class="layout-navbar">
      <Navbar />
    </div>
    <div class="layout-content">
      <router-view />
    </div>
    <div class="layout-foot"><Foot /></div>
  </div>
</template>

<script>
import { Navbar, Foot, Heads } from "./components";
export default {
  name: "Layout",
  components: {
    Navbar,
    Foot,
    Heads,
  },
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
// @import "@/assets/styles/layout/index.scss";
// // 注册主题
// @import "@/assets/styles/theme/register.scss";
.layout-content {
  min-height: 600px;
}
</style>
