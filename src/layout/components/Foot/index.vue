<template>
  <div class="footer">
    <div class="container">
      <div class="content">
        <div class="logo"><img src="../../images/logo.png" /></div>
        <ul>
          <li><i class="fa el-icon-phone-outline"></i>010-84883678</li>
          <li><i class="fa el-icon-message"></i>136983991@qq.com</li>
          <li><i class="fa el-icon-map-location"></i>北京市东城区朝阳门内南小街51号</li>
        </ul>
      </div>
      <div class="nav">
        <div class="tit">快速链接</div>
        <ul class="er">
          <li><a href="#">关于我们</a></li>
          <li><a href="#">信息公告</a></li>
          <li><a href="#">客服中心</a></li>
          <li><a href="#">版权公告</a></li>
          <li><a href="#">在线咨询</a></li>
        </ul>
      </div>
      <div class="nav">
        <div class="tit">网站群</div>
        <ul>
          <li><a href="#">语文出出版社</a></li>
          <li><a href="#">数字语文资源网</a></li>
          <li><a href="#">中华人民共和国教育部</a></li>
        </ul>
      </div>
    </div>
    <div class="copy">
      <div class="container">版权所有：语文出版社 <a href="#">京ICP备11009062号-6</a></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Foot",
  components: {},
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  width: 1200px;
  margin: 0 auto;
}
.footer {
  background-color: #a30005; //底部背景颜色
  font-size: 12px;
  & > .container {
    padding: 50px 0;
    overflow: hidden;
  }
  .content {
    color: #fafafa;
    float: left;
    .logo img {
      height: 54px;
      width: auto;
    }
    ul {
      padding-left: 65px;
      margin-top: 20px;
      li {
        margin-top: 15px;
        background-position: left center;
        background-repeat: no-repeat;
        padding-left: 20px;
        position: relative;
        &:first-child {
          margin-top: 0;
        }
        .fa {
          color: #fafafa;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
  .nav {
    width: 220px;
    margin-left: 80px;
    float: right;
    .tit {
      font-size: 18px;
      color: #fafafa;
      border-bottom: 1px solid #fafafa;
      padding-bottom: 15px;
      margin-bottom: 10px;
    }
    .er li {
      width: 50%;
      float: left;
    }
    ul {
      overflow: hidden;
      li {
        margin-top: 15px;
        a {
          display: block;
          overflow: hidden;
          position: relative;
          color: #fafafa;
          padding-left: 20px;
          &:before {
            display: block;
            content: "\e6e0";
            font-family: element-icons;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            color: #fafafa;
            font-size: 16px;
          }
          &:hover:before {
            border-color: #fafafa;
          }
        }
      }
    }
  }
  .copy {
    background-color: #7d0008; //下面版权背景
    color: #fafafa;
    padding: 20px 0;
    a {
      color: #fafafa;
      &:hover {
        //color: #3a83e0;
        text-decoration: underline;
      }
    }
  }
}
</style>
