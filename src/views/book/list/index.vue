<template>
  <div class="book-list f-flex f-row-between f-col-top l-width">
    <div class="book">
      <ul id="bookList" class="ztree" ref="ztreeContainer"></ul>
    </div>
    <div class="f-flex-1">
      <div>
        <ul class="search-result-list">
          <li class="item">
            <div class="img">
              <img
                src="https://data.lilun.cn/Service/?logic=PDFReaderController&call=ReadImg&imgurl=Ql8wMTAyNTExNl8wMDEoMSkuanBn"
              />
            </div>
            <div class="content">
              <div class="title">习近平谈治国理政（第一卷）</div>
              <div>
                <ul class="param">
                  <li>【作/编者】：习近平 著</li>
                  <li>【书号】：978-7-01-025305-3</li>
                </ul>
                <ul class="param">
                  <li>【出版社】：人民出版社</li>
                  <li>【出版时间】：2022年11月</li>
                </ul>
              </div>
              <div class="opt">
                <el-button type="danger">在线阅读</el-button>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="img">
              <img
                src="https://data.lilun.cn/Service/?logic=PDFReaderController&call=ReadImg&imgurl=Ql8wMTAyNTExNF8wMDEoMSkuanBn"
              />
            </div>
            <div class="content">
              <div class="title">习近平谈治国理政（第一卷）</div>
              <div>
                <ul class="param">
                  <li>【作/编者】：习近平 著</li>
                  <li>【书号】：978-7-01-025305-3</li>
                </ul>
                <ul class="param">
                  <li>【出版社】：人民出版社</li>
                  <li>【出版时间】：2022年11月</li>
                </ul>
              </div>
              <div class="opt">
                <el-button type="danger">在线阅读</el-button>
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
          },
          onCheck: (event, treeId, treeNode) => {
            console.log(event, treeId, treeNode);
            // eslint-disable-next-line no-undef
            var treeObj = $.fn.zTree.getZTreeObj("bookList");
            const a = treeObj.getCheckedNodes(true);
            console.log(a);
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
  width: 300px;
}
.book-list {
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
        margin-right: 20px;
        img {
          width: 150px;
        }
      }
      .content {
        width: 100%;
        font-size: 12px;
        color: #717171;
        .title {
          margin-bottom: 10px;
          line-height: 30px;
          font-size: 20px;
          font-weight: bold;
          color: #333;
        }
        ul.param {
          display: flex;
          margin-bottom: 10px;
          li {
            flex: 1;
            margin-right: 10px;
          }
        }
        .opt {
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
