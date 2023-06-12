<template>
  <div>
    <div class="opt">
      <yxb-button type="primary" @click="add">创建应用</yxb-button>
      <AddComp ref="addRef" @close="init" />
      <ViewComp ref="viewRef" />
    </div>
    <div>
      <yxb-table ref="table" :data="listData" stripe beautify-table highlight-current-row style="width: 100%">
        <yxb-table-column type="index" width="50"> </yxb-table-column>
        <yxb-table-column property="appName" label="应用名称" show-overflow-tooltip> </yxb-table-column>
        <yxb-table-column property="clientId" label="应用标识" show-overflow-tooltip> </yxb-table-column>
        <yxb-table-column property="approvalStatus" label="审批状态" width="100" show-overflow-tooltip>
          <template slot-scope="scope"> {{ status[scope.row.approvalStatus] }} </template>
        </yxb-table-column>
        <yxb-table-column label="操作" width="80">
          <template slot-scope="scope"><yxb-link type="primary" @click="view(scope.row)">查看</yxb-link> </template>
        </yxb-table-column>
      </yxb-table>
      <div style="padding: 5px">
        <yxb-pagination
          :total="total"
          :page-size="query.pageSize"
          :current-page="query.page"
          layout="total, prev, pager, next"
          align="right"
          size="mini"
          background
          @size-change="sizeChange"
          @current-change="pageChange"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { request } from "@/api/service";
import AddComp from "./components/add";
import ViewComp from "./components/view";
export default {
  components: { AddComp, ViewComp },
  data() {
    return {
      status: {
        pass: "审核通过",
        reject: "拒绝",
        audit: "待审核",
      },
      query: {
        page: 1,
        pageSize: 10,
      },
      total: 0,
      listData: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.query.page = 1;
      this.queryList();
    },
    add() {
      this.$refs.addRef.open();
    },
    view(row) {
      this.$refs.viewRef.open(row);
    },
    sizeChange(val) {
      this.query.pageSize = val;
      this.queryList();
    },
    pageChange(val) {
      this.query.page = val;
      this.queryList();
    },
    queryList() {
      request({
        url: "/afis-openapi/oapi/oapiApp/partnerApplist",
        method: "post",
        data: this.query,
      })
        .then((res) => {
          this.listData = res.list;
          this.total = res.total;
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
.opt {
  margin-bottom: 10px;
}
</style>
