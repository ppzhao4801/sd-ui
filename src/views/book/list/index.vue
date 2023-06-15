<template>
  <div class="book-list f-flex f-row-center f-col-top">
    <div class="book" style="width: 240px">
      <ul id="bookList" class="ztree" ref="ztreeContainer"></ul>
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
import "@ztree/ztree_v3/css/zTreeStyle/zTreeStyle.css";
import "@ztree/ztree_v3/js/jquery.ztree.core";
import "@ztree/ztree_v3/js/jquery.ztree.excheck";
export default {
  name: "BookList",
  computed: {},
  data() {
    return {
      list: [],
      ztreeSetting: {
        treeId: "bookList",
        treeObj: null,
        check: {
          enable: true,
        },
        data: {
          simpleData: {
            enable: true,
          },
        },
        view: {
          expandSpeed: "",
        },
        callback: {
          // 这里是ZTree的回调函数
          beforeCheck: (id, node) => {
            console.log(id, node);
            debugger;
          },
          onCheck: (event, treeId, treeNode) => {
            console.log(event, treeId, treeNode);
            console.log(this);
            debugger;
            // eslint-disable-next-line no-undef
            var treeObj = $.fn.zTree.getZTreeObj("bookList");
            debugger;
            const a = treeObj.getCheckedNodes(true);
            console.log(a);
            debugger;
          },
        },
      },
    };
  },
  mounted() {
    this.initZTree();
  },
  methods: {
    initZTree() {
      const zTreeData = [
        // 这里是你的ZTree数据
        {
          id: "id1",
          name: "父节点1",
          children: [
            { id: "id2", name: "子节点1" },
            { id: "id3", name: "子节点2" },
          ],
        },
      ];

      // 初始化ZTree
      // eslint-disable-next-line no-undef
      $.fn.zTree.init($(this.$refs.ztreeContainer), this.ztreeSetting, zTreeData);
    },
  },
};
</script>

<style lang="scss" scoped>
.book {
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.book-list {
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
        .source {
          margin-top: 15px;
          padding-left: 0;
          a {
            position: relative;
            display: inline-block;
            height: 25px;
            margin-right: 10px;
            padding: 0 10px;
            line-height: 25px;
            text-decoration: none;
            color: #545454;
            background: #ededf1;
            border-radius: 3px;
            border: 1px solid #ededf1;
            transition: all 0.3s;
            i {
              margin-right: 4px;
            }
          }
        }
      }
    }
  }
}
</style>
