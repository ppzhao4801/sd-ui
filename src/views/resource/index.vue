<template>
  <div class="resource-list f-flex f-row-center f-col-top l-width">
    <div style="width: 500px">
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
              <div class="source">
                <a class="collectLink">
                  <i class="icon-favorite"></i>
                  <span class="cLinkTS9787119111667">收藏</span>
                </a>
                <a class="collectLink">
                  <i class="icon-favorite"></i>
                  <span class="cLinkTS9787119111667">收藏</span>
                </a>
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
