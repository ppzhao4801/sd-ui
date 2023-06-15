<template>
  <div class="news-list f-flex f-row-center f-col-top">
    <div style="width: 240px; text-align: left">
      <ul id="bookList" class="ztree" ref="ztreeContainer"></ul>
    </div>
    <div>
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

<style lang="scss" scoped></style>
