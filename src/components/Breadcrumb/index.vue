<template>
  <div class="app-breadcrumb f-flex f-col-center">
    <div class="pre">当前位置：</div>
    <el-breadcrumb separator=">">
      <transition-group name="breadcrumb">
        <template v-for="(item, index) in levelList">
          <el-breadcrumb-item v-if="item.title" :key="item.path">
            <span v-if="index == levelList.length - 1" class="no-redirect">
              {{ item.title }}
            </span>
            <a v-else @click.prevent="handleLink(item)">{{ item.title }}</a>
          </el-breadcrumb-item>
        </template>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    // 容器样式
    levelList: {
      type: Array,
      required: false,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route;
      const pathToRegexp = require("path-to-regexp");
      var toPath = pathToRegexp.compile(path);
      return toPath(params);
    },
    handleLink(item) {
      const { redirect, path } = item;
      if (redirect) {
        this.$router.push(redirect);
        return;
      }
      this.$router.push(this.pathCompile(path));
    },
  },
};
</script>

<style lang="scss" scoped>
.app-breadcrumb {
  font-size: 14px;
  a:hover {
    color: #ca0b0b;
  }
  .pre {
    line-height: 40px;
  }
  .el-breadcrumb {
    display: inline-block;
    line-height: 40px;
    margin-left: 5px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
}
</style>
