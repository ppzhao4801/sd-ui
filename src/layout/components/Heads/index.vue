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
          <el-button type="danger" slot="append" icon="el-icon-search">搜索</el-button>
        </el-input>
      </div>
      <div class="other">高级检索</div>
    </div>
    <ul class="nav">
      <li>
        <a href="#">图书库</a>
        <a href="#">新闻库</a>
        <a href="#">素材库</a>
        <a href="#">视频库</a>
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
  methods: {},
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
