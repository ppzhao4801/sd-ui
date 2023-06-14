<template>
  <div class="layout">
    <div class="layout-head">
      <Heads />
    </div>
    <div class="layout-content">
      <router-view />
    </div>
    <div class="layout-foot">
      <Foot />
    </div>
  </div>
</template>

<script>
import { Foot, Heads } from "./components";
export default {
  name: "Layout",
  components: {
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
.layout {
  position: relative;
  background: #ca0b0b url(./images/body-bg.jpg) no-repeat center top;
  &-content {
    background-color: #f5f8fa;
    padding: 10px 0;
  }
}
</style>
