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
      <div class="other" @click="searchShow">高级检索</div>
    </div>
    <ul class="nav">
      <li>
        <router-link to="/book/list">图书库</router-link>
        <router-link to="/news/list">新闻库</router-link>
        <router-link to="/paper/list">报刊库</router-link>
        <router-link to="/fodder/list">素材库</router-link>
        <!-- <router-link to="/subject/list">专题库</router-link>
        <router-link to="/audio/list">音频库</router-link> -->
        <router-link to="/video/list">视频库</router-link>
      </li>
    </ul>
    <el-dialog
      title="高级检索"
      custom-class="search-dialog"
      :lock-scroll="false"
      :close-on-click-modal="false"
      :visible.sync="searchVisible"
    >
      <el-form ref="form" size="small" :model="form" label-width="80px">
        <el-form-item label="标题名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="时间限定">
          <div>
            <el-date-picker v-model="form.beginDate" type="year"> </el-date-picker>
            <span style="padding: 0 10px">至</span>
            <el-date-picker v-model="form.endDate" type="year"> </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="资源类型">
          <el-checkbox-group v-model="form.sourceType">
            <el-checkbox
              v-for="item in sourceType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="语种">
          <el-checkbox-group v-model="form.languageType">
            <el-checkbox
              v-for="item in languageType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <template slot="footer">
        <div style="text-align: center">
          <el-button type="danger" @click="toSearch">检索</el-button>
        </div>
      </template>
    </el-dialog>
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
      searchVisible: false,
      languageType: [
        {
          value: "all1",
          label: "全部",
        },
        {
          value: "all2",
          label: "中文",
        },
        {
          value: "all3",
          label: "英文",
        },
        {
          value: "all4",
          label: "法文",
        },
        {
          value: "all5",
          label: "日文",
        },
        {
          value: "all6",
          label: "朝鲜文",
        },
        {
          value: "all7",
          label: "西班牙文",
        },
      ],
      sourceType: [
        {
          value: "all1",
          label: "全部",
        },
        {
          value: "all2",
          label: "期刊",
        },
        {
          value: "all3",
          label: "报纸",
        },
        {
          value: "all4",
          label: "地方志",
        },
        {
          value: "all5",
          label: "图书",
        },
        {
          value: "all6",
          label: "年鉴",
        },
        {
          value: "all7",
          label: "讲话单行本",
        },
        {
          value: "all8",
          label: "视频",
        },
        {
          value: "all9",
          label: "音频",
        },
        {
          value: "all10",
          label: "图片",
        },
      ],
      form: {
        name: null,
        beginDate: null,
        endDate: null,
        sourceType: [],
        languageType: [],
      },
    };
  },
  mounted() {},
  methods: {
    searchShow() {
      this.searchVisible = true;
    },
    toSearch() {
      this.searchVisible = false;
      this.$router.push({ path: "/resource/list" });
    },
  },
};
</script>
<style lang="scss">
.search-dialog {
}
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
