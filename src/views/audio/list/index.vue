<template>
  <div class="audio-list f-flex f-row-between f-col-top l-width">
    <div class="collapse">
      <Collapse></Collapse>
    </div>
    <div style="width: 960px; text-align: right">
      <BoxList :data="list" @detail="toDetail"></BoxList>
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
    toDetail() {
      this.$router.push({ path: "/audio/play/list" });
    },
  },
};
</script>
