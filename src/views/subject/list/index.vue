<template>
  <div class="subject-list l-width">
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
        <div class="view" @click="toDetail">
          <a>查看</a>
        </div>
      </li>
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
              习近平讲话学习参考资料中国特色社会主义社会主义建设模式学习参考资料 思想理论
              2014年10月第1版；2018年1月第2版习近平讲话学习参考资料中国特色社会主义社会主义建设模式学习参考资料 思想理论
              2014年10月第1版；2018年1月第2版
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
        <div class="view">
          <a>查看</a>
        </div>
      </li>
    </ul>
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
</template>
<script>
export default {
  computed: {},
  data() {
    return {
      list: [],
    };
  },
  methods: {
    toDetail() {
      this.$router.push({ path: "/subject/detail" });
    },
  },
};
</script>

<style lang="scss" scoped>
.subject-list {
  .result-list {
    li {
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
      .item {
        display: flex;
        justify-content: flex-start;
        flex-wrap: nowrap;
        .img {
          width: 350px;
          margin-right: 20px;
          img {
            width: 350px;
          }
        }
        .content {
          & > div {
            color: #999999;
            margin-bottom: 5px;
            font-size: 14px;
            line-height: 26px;
          }
          .title {
            margin-bottom: 5px;
            font-size: 26px;
            line-height: 30px;
            color: #d73240;
          }
          .keyword {
            line-height: 24px;
            .keyword span {
              margin: 0 5px;
            }
          }
          .remark {
            a {
              color: #3c3c3c;
              margin-left: 5px;
              border-bottom: 1px dotted #808080;
            }
          }
          .source {
            .data > span {
              margin-right: 15px;
              span {
                color: #d73240;
              }
            }
          }
        }
      }
      .view {
        color: #999999;
        line-height: 24px;
        font-size: 14px;
        a {
          display: block;
          line-height: 40px;
          text-align: center;
          background-color: #eff2f7;
          border: 0;
          border-radius: 0 0 5px 5px;
          color: #3c3c3c;
        }
      }
    }
  }
}
</style>
