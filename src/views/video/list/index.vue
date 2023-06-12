<template>
  <div class="VideoList">
    <div>
      <div class="zpp-collapse">
        <div class="zpp-collapse-item">
          <h2 class="zpp-collapse-item_title">资源类型<i class="el-icon-arrow-down zpp-collapse-item_icon"></i></h2>
          <div class="zpp-collapse-item_content" style="max-height: 170px">
            <ul class="cluster-term">
              <li>
                <a class="cluster-close"><i class="el-icon-close"></i></a>
                <span class="cluster-name">资源类型=期刊</span>
              </li>
            </ul>
            <ul class="cluster-list">
              <li class="cluster-item">
                <a>期刊<tt>43588</tt></a>
              </li>
              <li class="cluster-item active">
                <a>期刊<tt>43588</tt></a>
              </li>
              <li class="cluster-item">
                <a>期刊<tt>43588</tt></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="zpp-collapse-item">
          <h2 class="zpp-collapse-item_title">资源类型<i class="el-icon-arrow-down zpp-collapse-item_icon"></i></h2>
          <div class="zpp-collapse-item_content" style="max-height: 170px">
            <ul class="cluster-term">
              <li>
                <a class="cluster-close"><i class="el-icon-close"></i></a>
                <span class="cluster-name">资源类型=期刊</span>
              </li>
            </ul>
            <ul class="cluster-list">
              <li class="cluster-item">
                <a>期刊<tt>43588</tt></a>
              </li>
              <li class="cluster-item">
                <a>期刊<tt>43588</tt></a>
              </li>
              <li class="cluster-item active">
                <a>期刊<tt>43588</tt></a>
              </li>
              <li class="cluster-item">
                <a>期刊<tt>43588</tt></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- <BoxList :data="list"></BoxList> -->
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
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.zpp-collapse {
  border: 0;
  border-radius: 2px;
  .zpp-collapse-item {
    margin-bottom: 20px;
    position: relative;
    padding: 0 10px 25px;
    background-color: #fff;
    border-radius: 5px;
    z-index: 1;
    &_icon {
      position: absolute;
      left: 0;
      right: 0;
      color: #656565;
      top: auto;
      bottom: 0;
      height: 20px;
      text-align: center;
      background-color: #e8ecf1;
      border-radius: 3px;
      line-height: 20px;
      font-size: 14px;
    }
    &_title {
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      color: #424242;
    }
    &_content {
      overflow: hidden;
      padding: 5px 0;
      transition: all 0.3s;
      -webkit-transition: all 0.3s;
      color: #666;
      &:before {
        position: absolute;
        right: 10px;
        top: 9px;
        font-family: element-icons !important;
        font-size: 14px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #aaa;
        content: "\e6df";
        z-index: -1;
      }
      .cluster-term {
        li {
          height: 30px;
          margin-bottom: 4px;
          line-height: 30px;
          background: #ededf7;
          border-radius: 5px;
          .cluster-name {
            padding: 0 10px;
            float: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 195px;
            height: 30px;
            padding-right: 5px;
          }
          .cluster-close {
            float: right;
            padding: 0 5px;
            cursor: pointer;
            &:hover {
              text-decoration: none;
            }
          }
        }
      }
      .cluster-list {
        .cluster-item {
          margin-bottom: 0;
          line-height: 30px;
          &.active {
            background: #ededf7;
            border-radius: 5px;
          }
          a {
            position: relative;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-left: 20px;
            padding-right: 40px;
            color: #000;
            border: 1px solid #fff;
            border-radius: 5px;
            &:before {
              position: absolute;
              width: 3px;
              height: 3px;
              left: 8px;
              top: 50%;
              margin-top: -2px;
              background: #aaa;
              -webkit-transform: rotate(45deg);
              transform: rotate(45deg);
              content: "";
            }
            &:hover {
              border-color: #e5e5e5;
              text-decoration: none;
              &:before {
                background: #333333;
              }
            }
            tt {
              position: absolute;
              right: 10px;
            }
            i {
              position: relative;
              top: -1px;
              display: inline-block;
              width: 20px;
              height: 20px;
              margin-left: -21px;
              margin-right: 1px;
              font-size: 13px;
              line-height: 20px;
              text-align: center;
              background: #fff;
              vertical-align: middle;
              border-radius: 100%;
              &:before {
                width: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
