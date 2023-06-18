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
        <div class="sort">
          <el-select v-model="sort" size="mini">
            <el-option label="正序" :value="1"> </el-option>
            <el-option label="倒序" :value="2"> </el-option>
          </el-select>
        </div>
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
      sort: null,
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
