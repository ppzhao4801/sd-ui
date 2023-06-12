<template>
  <div class="app-breadcrumb f-flex f-col-center">
    <div class="pre">当前位置：</div>
    <yxb-breadcrumb separator=">">
      <transition-group name="breadcrumb">
        <template v-for="(item, index) in levelList">
          <yxb-breadcrumb-item v-if="item.meta.title" :key="item.path">
            <span v-if="index == levelList.length - 1" class="no-redirect">
              {{ item.meta.title }}
            </span>
            <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
          </yxb-breadcrumb-item>
        </template>
      </transition-group>
    </yxb-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      levelList: null,
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      const matched = this.$route.matched.filter((item) => {
        if (item.name) {
          return true;
        }
      });
      this.levelList = matched;
    },
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
