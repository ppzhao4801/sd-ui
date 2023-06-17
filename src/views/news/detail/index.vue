<template>
  <div class="news-detail l-width">
    <div>
      <Breadcrumb :levelList="levelList" />
    </div>
    <div>
      <h2 class="title">习近平：中国式现代化是中国共产党领导的社会主义现代化</h2>
      <div class="content">
        <div class="source">
          <span>日期:</span>
          <span>作者:</span>
          <span>来源:</span>
          <span>原地址:</span>
        </div>
        <div>
          <p>
            党的领导决定中国式现代化的根本性质。党的性质宗旨、初心使命、信仰信念、政策主张决定了中国式现代化是社会主义现代化，而不是别的什么现代化。我们党始终高举中国特色社会主义伟大旗帜，既坚持科学社会主义基本原则，又不断赋予其鲜明的中国特色和时代内涵，坚定不移地走中国特色社会主义道路，确保中国式现代化在正确的轨道上顺利推进。我们党坚持把马克思主义作为根本指导思想，不断深化对共产党执政规律、社会主义建设规律、人类社会发展规律的认识，不断开辟马克思主义中国化时代化新境界，为中国式现代化提供科学指引。我们党坚持和完善中国特色社会主义制度，不断推进国家治理体系和治理能力现代化，形成包括中国特色社会主义根本制度、基本制度、重要制度等在内的一整套制度体系，为中国式现代化稳步前行提供坚强制度保证。我们党坚持和发展中国特色社会主义文化，激发全民族文化创新创造活力，为中国式现代化提供强大精神力量。可以说，只有毫不动摇坚持党的领导，中国式现代化才能前景光明、繁荣兴盛；否则，中国式现代化就会偏离航向、丧失灵魂，甚至犯颠覆性错误。
          </p>
          <p>
            党的领导决定中国式现代化的根本性质。党的性质宗旨、初心使命、信仰信念、政策主张决定了中国式现代化是社会主义现代化，而不是别的什么现代化。我们党始终高举中国特色社会主义伟大旗帜，既坚持科学社会主义基本原则，又不断赋予其鲜明的中国特色和时代内涵，坚定不移地走中国特色社会主义道路，确保中国式现代化在正确的轨道上顺利推进。我们党坚持把马克思主义作为根本指导思想，不断深化对共产党执政规律、社会主义建设规律、人类社会发展规律的认识，不断开辟马克思主义中国化时代化新境界，为中国式现代化提供科学指引。我们党坚持和完善中国特色社会主义制度，不断推进国家治理体系和治理能力现代化，形成包括中国特色社会主义根本制度、基本制度、重要制度等在内的一整套制度体系，为中国式现代化稳步前行提供坚强制度保证。我们党坚持和发展中国特色社会主义文化，激发全民族文化创新创造活力，为中国式现代化提供强大精神力量。可以说，只有毫不动摇坚持党的领导，中国式现代化才能前景光明、繁荣兴盛；否则，中国式现代化就会偏离航向、丧失灵魂，甚至犯颠覆性错误。
          </p>
        </div>
      </div>
      <div class="foot">
        <div class="attach">
          <span>习近平</span>
        </div>
        <div class="attach">
          <span>2023年5月23日</span>
        </div>
        <div class="attach">
          <span>附件1:</span>
          <span>附件2:</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {},
  data() {
    return {
      levelList: [
        {
          title: "新闻列表",
          path: "/news/list",
        },
        {
          title: "新闻详情",
          path: "/news/detail",
        },
      ],
      list: [],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.news-detail {
  .title {
    color: #333;
    line-height: 46px;
    font-weight: bold;
    text-align: center;
    font-size: 24px;
  }
  .content {
    margin: 20px 0;
    .source {
      font-size: 14px;
      color: #c2c2c2;
      text-align: right;
      padding-bottom: 16px;
      span {
        padding-right: 30px;
      }
    }
    p {
      margin-bottom: 10px;
      text-indent: 2em;
      line-height: 1.5em;
    }
  }
  .foot {
    .attach {
      font-size: 14px;
      color: #c2c2c2;
      text-align: right;
      padding-bottom: 16px;
      span {
        padding-right: 30px;
      }
    }
  }
}
</style>
