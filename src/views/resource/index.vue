<template>
  <div class="resource-list f-flex f-row-center f-col-top">
    <div style="width: 240px">
      <Collapse></Collapse>
    </div>
    <div>
      <div>
        <ul class="search-result-list">
          <li class="item">
            <div class="img">
              <img
                src="http://xwk.test.cqvip.com:8090/download/News/5741611/Cover/0dba4b248c7246eebbcebf2cf240934b.jpg"
              />
            </div>
            <div class="content">
              <div class="title"><span class="r-type">图书</span>习近平谈治国理政（第一卷）</div>
              <div class="search">
                <span><a>习近平著</a></span>
                <span class="vol">2014年10月</span>
              </div>
              <div class="search">
                <span><a>习近平著</a><a>习近平著</a><a>习近平著</a><a>习近平著</a><a>习近平著</a><a>习近平著</a></span>
              </div>
              <div class="remark">
                习近平讲话学习参考资料中国特色社会主义社会主义建设模式学习参考资料 思想理论
                2014年10月第1版；2018年1月第2版习近平讲话学习参考资料中国特色社会主义社会主义建设模式学习参考资料
                思想理论 2014年10月第1版；2018年1月第2版
              </div>
            </div>
          </li>
          <li class="item">
            <div class="img">
              <img
                src="http://xwk.test.cqvip.com:8090/download/News/5741611/Cover/0dba4b248c7246eebbcebf2cf240934b.jpg"
              />
            </div>
            <div class="content">
              <div class="title"><span class="r-type">图书</span>习近平谈治国理政（第一卷）</div>
              <div class="search">
                <span><a>习近平著</a></span>
                <span class="vol">2014年10月</span>
              </div>
              <div class="search">
                <span><a>习近平著</a><a>习近平著</a><a>习近平著</a><a>习近平著</a><a>习近平著</a><a>习近平著</a></span>
              </div>
              <div class="remark">
                习近平讲话学习参考资料中国特色社会主义社会主义建设模式学习参考资料 思想理论
                2014年10月第1版；2018年1月第2版习近平讲话学习参考资料中国特色社会主义社会主义建设模式学习参考资料
                思想理论 2014年10月第1版；2018年1月第2版
              </div>
            </div>
          </li>
          <li class="item">
            <div class="img">
              <img
                src="http://xwk.test.cqvip.com:8090/download/News/5741611/Cover/0dba4b248c7246eebbcebf2cf240934b.jpg"
              />
            </div>
            <div class="content">
              <div class="title"><span class="r-type">图书</span>习近平谈治国理政（第一卷）</div>
              <div class="search">
                <span><a>习近平著</a></span>
                <span class="vol">2014年10月</span>
              </div>
              <div class="search">
                <span><a>习近平著</a><a>习近平著</a><a>习近平著</a><a>习近平著</a><a>习近平著</a><a>习近平著</a></span>
              </div>
              <div class="remark">
                习近平讲话学习参考资料中国特色社会主义社会主义建设模式学习参考资料 思想理论
                2014年10月第1版；2018年1月第2版习近平讲话学习参考资料中国特色社会主义社会主义建设模式学习参考资料
                思想理论 2014年10月第1版；2018年1月第2版
              </div>
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
  methods: {},
};
</script>

<style lang="scss" scoped>
.resource-list {
  margin: 0 30px;
  .search-result-list {
    margin-left: 20px;
    li.item {
      display: flex;
      justify-content: flex-start;
      flex-wrap: nowrap;
      position: relative;
      margin-bottom: 20px;
      padding: 15px;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      transition: all 0.3s;
      line-height: 1.5;
      word-break: break-all;
      word-wrap: break-word;
      .img {
        width: 200px;
        margin-right: 20px;
        img {
          width: 100%;
        }
      }
      .content {
        & > div {
          margin-bottom: 5px;
          font-size: 14px;
          line-height: 26px;
        }
        .title {
          margin-bottom: 5px;
          font-size: 18px;
          line-height: 30px;
          color: #0033a0;
          .r-type {
            display: inline-block;
            position: relative;
            top: -2px;
            height: 20px;
            padding: 0 5px;
            font-size: 12px;
            color: #fff;
            line-height: 20px;
            margin-right: 5px;
            background-color: #e60012;
            border-radius: 5px;
            vertical-align: middle;
          }
        }
        .search {
          .vol:before {
            margin-right: 3px;
            display: inline-block;
            font-weight: bold;
            line-height: 14px;
            content: "\00B7";
          }
          a {
            color: #3c3c3c;
            margin-left: 5px;
            border-bottom: 1px dotted #808080;
          }
        }
        .remark {
          color: #999999;
        }
      }
    }
  }
}
</style>
