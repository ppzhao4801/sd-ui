<template>
  <div class="book-list f-flex f-row-between f-col-top l-width">
    <div class="book-list-tree">
      <h2 class="title">
        <span>资源类型</span>
        <i class="el-icon-arrow-down zpp-collapse-item_icon"></i>
      </h2>
      <!-- <ul id="bookList" class="ztree" ref="ztreeContainer"></ul> -->
      <!-- :expand-on-click-node="false" -->
      <el-tree :data="treeData" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current> </el-tree>
      <div class="more"><i class="el-icon-arrow-down zpp-collapse-item_icon"></i></div>
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
      treeData: [
        {
          id: "id1",
          label: "父节点父节点父节点父节点父节点父节点父节点父节点父节点父节点父节点父节点父节点父节点父节点父节点",
          children: [
            { id: "id1-1", label: "子节点1" },
            { id: "id2-1", label: "子节点2" },
          ],
        },
        {
          id: "id2",
          label: "父节点2",
          children: [
            { id: "id2-1", label: "子节点1" },
            { id: "id2-2", label: "子节点2" },
          ],
        },
      ],
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
        {
          id: "id1",
          name: "父节点父节点父节点父节点父节点父节点父节点父节点",
          children: [
            { id: "id1-1", name: "子节点1" },
            { id: "id2-1", name: "子节点2" },
          ],
        },
        {
          id: "id2",
          name: "父节点2",
          children: [
            { id: "id2-1", name: "子节点1" },
            { id: "id2-2", name: "子节点2" },
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
.book-list {
  &-tree {
    padding: 10px;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 300px;
    .title {
      display: flex;
      justify-content: space-between;
      color: #424242;
      font-size: 16px;
      margin-bottom: 10px;
    }
    .more {
      height: 20px;
      text-align: center;
      background-color: #e8ecf1;
      border-radius: 3px;
      line-height: 20px;
      font-size: 14px;
    }
  }
  ul.search-result-list {
    margin-left: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    li.item {
      display: flex;
      justify-content: flex-start;
      flex-wrap: nowrap;
      position: relative;
      padding: 15px;
      background-color: #fff;
      border-bottom: 1px solid #ebeef5;
      // margin-bottom: 20px;
      // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      // border-radius: 5px;
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
        font-size: 16px;
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
          text-align: right;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
