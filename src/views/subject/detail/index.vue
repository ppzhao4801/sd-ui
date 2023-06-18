<template>
  <div class="subject-detail l-width">
    <ul class="result-list">
      <li>
        <div class="item">
          <div class="img">
            <img src="http://xwk.test.cqvip.com:8090/download//Topic/1.jpg" />
          </div>
          <div class="content">
            <div class="title">习近平谈治国理政（第一卷）</div>
            <div class="keyword">
              专题关键字：
              <span>习近平</span>
              <span>中国梦</span>
            </div>
            <div class="remark">
              <span class="remarkStr" style="display: none">
                1921年7月23日，中国共产党第一次全国代表大会在上海召开。由于会场受到法租界巡捕的搜查，最后一天的会议转移到浙江嘉兴南湖的游船上举行。
                1921年8月3日黄昏，浙江嘉兴南湖的暑热逐渐散去。湖面上一艘中等大小的画舫内，气氛庄重肃穆。在“中国共产党万岁”的低声呼喊中，中国共产党第一次全国代表大会闭...
              </span>
              <span class="hidRemark" style="">
                1921年7月23日，中国共产党第一次全国代表大会在上海召开。由于会场受到法租界巡捕的搜查，最后一天的会议转移到浙江嘉兴南湖的游船上举行。
                1921年8月3日黄昏，浙江嘉兴南湖的暑热逐渐散去。湖面上一艘中等大小的画舫内，气氛庄重肃穆。在“中国共产党万岁”的低声呼喊中，中国共产党第一次全国代表大会闭幕。
                2021年是中国共产党百年华诞。中国站在“两个一百年”的历史交汇点，全面建设社会主义现代化国家新征程即将开启。世界更多将目光投向中国，聚焦中国共产党矢志不渝为人民谋幸福，为民族谋复兴，为世界谋大同。
              </span>
              <a class="showRemark" href="javascript:void(0);">展开更多</a>
            </div>
            <div class="source">
              <span class="data">
                <span>文献总量：<span>86</span>篇</span>
                <span>期刊：<span>28</span>篇</span>
                <span>图书：<span>21</span>本</span>
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="detail">
      <el-tabs v-model="activeName">
        <el-tab-pane label="期刊" name="first">
          <div class="resource-list">
            <ul>
              <li>
                <a target="_blank">党史文化的当代价值党史文化的当代价值及其建设发展路径探讨及其建设发展路径探讨</a>
              </li>
              <li><a target="_blank">党史文化的当代价值及其建设发展路径探讨</a></li>
              <li><a target="_blank">党史文化的当代价值及其建设发展路径探讨</a></li>
              <li><a target="_blank">党史文化的当代价值及其建设发展路径探讨</a></li>
              <li><a target="_blank">党史文化的当代价值及其建设发展路径探讨</a></li>
            </ul>
            <div style="text-align: right; margin-top: 10px">
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
        </el-tab-pane>
        <el-tab-pane label="图书" name="second">
          <div class="resource-list">
            <ul>
              <li><a target="_blank">党史文化的当代价值及其建设发展路径探讨</a></li>
              <li><a target="_blank">党史文化的当代价值及其建设发展路径探讨</a></li>
              <li><a target="_blank">党史文化的当代价值及其建设发展路径探讨</a></li>
              <li><a target="_blank">党史文化的当代价值及其建设发展路径探讨</a></li>
              <li><a target="_blank">党史文化的当代价值及其建设发展路径探讨</a></li>
            </ul>
            <div style="text-align: right; margin-top: 10px">
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
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  computed: {},
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {},
};
</script>
