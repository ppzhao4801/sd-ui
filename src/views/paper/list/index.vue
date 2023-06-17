<template>
  <div class="paper-list f-flex f-row-center f-col-top l-width">
    <div class="collapse">
      <Collapse></Collapse>
    </div>
    <div class="content-wrap">
      <BoxList :data="list">
        <template #foot="{ item }">
          <div class="item"><i></i><span class="dzs">收集日期：1933~2023</span></div>
          <div class="item" @click="store(item)"><i></i><span class="dzs">收藏</span></div>
        </template>
      </BoxList>
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
</template>
<script>
export default {
  computed: {},
  data() {
    return {
      list: [
        {
          pic: "//img.tukuppt.com/preview/2008636/01/49/10/6351dceddbc841666309357.jpg-0.jpg!/fw/288",
          title: "2023蓝色简约商务风季度工作总结报告通用PPT模板1",
        },
        {
          pic: "//img.tukuppt.com/preview/2008636/01/49/10/6351dceddbc841666309357.jpg-0.jpg!/fw/288",
          title: "2023蓝色简约商务风季度工作总结报告通用PPT模板3",
        },
        {
          pic: "//img.tukuppt.com/preview/2008636/01/49/10/6351dceddbc841666309357.jpg-0.jpg!/fw/288",
          title: "2023蓝色简约商务风季度工作总结报告通用PPT模板4",
        },
        {
          pic: "//img.tukuppt.com/preview/2008636/01/49/10/6351dceddbc841666309357.jpg-0.jpg!/fw/288",
          title: "2023蓝色简约商务风季度工作总结报告通用PPT模板1",
        },
        {
          pic: "//img.tukuppt.com/preview/2008636/01/49/10/6351dceddbc841666309357.jpg-0.jpg!/fw/288",
          title: "2023蓝色简约商务风季度工作总结报告通用PPT模板3",
        },
        {
          pic: "//img.tukuppt.com/preview/2008636/01/49/10/6351dceddbc841666309357.jpg-0.jpg!/fw/288",
          title: "2023蓝色简约商务风季度工作总结报告通用PPT模板4",
        },
      ],
    };
  },
  methods: {
    store() {},
  },
};
</script>

<style lang="scss" scoped>
.paper-list {
  .collapse {
    flex: 1 1 240px;
  }
  .content-wrap {
    width: 960px;
  }
}
</style>
