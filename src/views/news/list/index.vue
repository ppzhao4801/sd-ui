<template>
  <div class="news-list f-flex f-row-center f-col-top l-width">
    <div class="collapse">
      <Collapse></Collapse>
    </div>
    <div class="content-wrap">
      <div>
        <ul class="content-list">
          <li class="content-list_item" @click="toDetail">
            <div class="item-wrap">
              <i>2023.05.31</i>
              <span class="title">
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

<style lang="scss" scoped>
.news-list {
  .collapse {
    flex: 1 1 240px;
  }
  .content-wrap {
    width: 960px;
  }
  .content-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    &_item {
      width: 220px;
      height: 300px;
      position: relative;
      overflow: hidden;
      margin: 0px 10px 20px;
      border-radius: 6px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      div.item-wrap {
        height: 100%;
        background: #fff;
        padding: 10px;
        i {
          color: #b58487;
          font-size: 12px;
          display: block;
        }
        .title {
          font-weight: bold;
          line-height: 25px;
          margin: 10px 0;
          display: -webkit-box; /* 旧版本的Webkit内核浏览器需要这个属性 */
          -webkit-line-clamp: 3; /* 控制显示的行数 */
          -webkit-box-orient: vertical; /* 垂直排列 */
          overflow: hidden; /* 隐藏超出容器的内容 */
          text-overflow: ellipsis; /* 添加省略号 */
        }
        .content {
          font-size: 14px;
          color: #999999;
          display: block;
          text-indent: 2em;
          display: -webkit-box; /* 旧版本的Webkit内核浏览器需要这个属性 */
          -webkit-line-clamp: 8; /* 控制显示的行数 */
          -webkit-box-orient: vertical; /* 垂直排列 */
          overflow: hidden; /* 隐藏超出容器的内容 */
          text-overflow: ellipsis; /* 添加省略号 */
        }
      }
    }
  }
}
</style>
