<template>
  <div class="news-list f-flex f-row-center f-col-top l-width">
    <div class="collapse">
      <Collapse></Collapse>
    </div>
    <div class="content-wrap">
      <div>
        <ul class="content-list">
          <li class="content-list_item">
            <div class="item-wrap">
              <i>2023.05.31</i>
              <span class="title" @click="toDetail">
                习近平：中国式现代化习近平：中国式现代化是中国共产党领导的社习近平：中国式现代化是中国共产党领导的社是中国共产党领导的社
              </span>
              <span class="content">
                党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报
              </span>
            </div>
          </li>
          <li class="content-list_item">
            <div class="item-wrap">
              <i>2023.05.31</i>
              <span class="title"> 习近平：产党领导的社会主义现代化的社会主义现代的社会主义现代 </span>
              <span class="content">党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报 </span>
            </div>
          </li>
          <li class="content-list_item">
            <div class="item-wrap">
              <i>2023.05.31</i>
              <span class="title"> 习近平：中国式现代化是会主义现代化的社会主义现代的社会主义现代 </span>
              <span class="content">党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报 </span>
            </div>
          </li>
          <li class="content-list_item">
            <div class="item-wrap">
              <i>2023.05.31</i>
              <span class="title"> 习近平：中国式现代化是义现代化的社会主义现代的社会主义现代 </span>
              <span class="content">
                党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报
              </span>
            </div>
          </li>
          <li class="content-list_item">
            <div class="item-wrap">
              <i>2023.05.31</i>
              <span class="title">
                习近平：中国式现代化是中国共产党领导的社会主义现代化的社会主义现代的社会主义现代
              </span>
              <span class="content">党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报党的二十大报 </span>
            </div>
          </li>
        </ul>
      </div>
      <div style="text-align: right">
        <el-pagination
          :current-page="1"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {},
  data() {
    return {
      list: [],
    };
  },
  methods: {
    toDetail() {
      this.$router.push({ path: "/news/detail" });
    },
  },
};
</script>
