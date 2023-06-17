<template>
  <div class="header l-width">
    <div class="search">
      <div>
        <el-input v-model="searchValue" placeholder="请输入内容" class="search-input">
          <el-select v-model="searchSelect" slot="prepend" popper-class="search" placeholder="请选择">
            <el-option label="书名" value="title"></el-option>
            <el-option label="作者" value="author"></el-option>
            <el-option label="出版社" value="press"></el-option>
            <el-option label="ISBN" value="isbn"></el-option>
            <el-option label="全文" value="yj"></el-option>
          </el-select>
          <el-button type="danger" slot="append" icon="el-icon-search" @click="toSearch">搜索</el-button>
        </el-input>
      </div>
      <div class="other">高级检索</div>
    </div>
    <ul class="nav">
      <li>
        <router-link to="/">图书库</router-link>
        <router-link to="/news/list">新闻库</router-link>
        <router-link to="/">素材库</router-link>
        <router-link to="/audio/list">音频库</router-link>
        <router-link to="/video/list">视频库</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Heads",
  components: {},
  computed: {},
  data() {
    return {
      searchSelect: "title",
      searchValue: null,
    };
  },
  mounted() {},
  methods: {
    toSearch() {
      this.$router.push({ path: "/resource/list" });
    },
  },
};
</script>
<style lang="scss">
.search {
  .el-input-group__prepend {
    border: 0;
    background-color: #fff;
  }
  .el-input-group__append {
    border: 0;
    background-color: #d73240;
    color: #fff;
  }
  .el-select-dropdown__item.selected {
    background-color: #d73240;
    color: #fff;
  }
  input.el-input__inner {
    border: 0;
  }
}
</style>
