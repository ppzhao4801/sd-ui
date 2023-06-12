<template>
  <div class="VideoList">
    <div class="box-list">
      <dl class="box-list_item">
        <dd class="item-pic">
          <img src="//img.tukuppt.com/preview/2008636/01/49/10/6351dceddbc841666309357.jpg-0.jpg!/fw/288" />
        </dd>
        <dt class="item-title"><a>2023蓝色简约商务风季度工作总结报告通用PPT模板</a></dt>
        <dd class="item-explain">
          <div class="coll">
            <div class="item"><i></i><span class="dzs">151493</span></div>
            <div class="item"><i></i><span class="dzs">151493</span></div>
            <div class="item"><i></i>17482</div>
          </div>
          <div class="item-mark"></div>
        </dd>
      </dl>
      <dl class="box-list_item">
        <dd class="item-pic">
          <img src="//img.tukuppt.com/preview/2008636/01/49/10/6351dceddbc841666309357.jpg-0.jpg!/fw/288" />
        </dd>
        <dt class="item-title"><a>2023蓝色简约商务风季度工作总结报告通用PPT模板</a></dt>
        <dd class="item-explain">
          <div class="coll">
            <div class="item"><i></i><span class="dzs">151493</span></div>
            <div class="item"><i></i><span class="dzs">151493</span></div>
            <div class="item"><i></i>17482</div>
          </div>
          <div class="item-mark"></div>
        </dd>
      </dl>
    </div>
  </div>
</template>
<style lang="scss" scoped>
dl,
dt,
dd {
  padding: 0;
  margin: 0;
}
.box-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  &_item {
    position: relative;
    overflow: hidden;
    margin: 0px 10px 26px;
    width: 240px;
    height: auto;
    border-radius: 6px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    -o-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    .item-pic,
    .item-mark {
      height: 400px;
      img {
        height: 400px;
      }
    }
    //图片
    .item-pic {
      cursor: pointer;
      display: inline;
      border: 0;
      width: 100%;
      img {
        width: 100%;
      }
    }
    //标题
    .item-title {
      height: 44px;
      background: #fff;
      padding: 0 10px;
      a {
        display: inline-block;
        overflow: hidden;
        width: 100%;
        height: 44px;
        line-height: 44px;
        color: #252525;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .item-explain {
      display: block;
      padding: 0 10px;
      background: #fff;
      .coll {
        display: block;
        width: 100%;
        border-top: 1px solid #eceff1;
        color: #838383;
        font-size: 14px;
        font-family: Arial;
        margin: 5px 0;
        div.item {
          margin: 5px 0;
        }
      }
    }
    .item-mark {
      position: absolute;
      top: 0;
      left: 0;
      display: none;
      width: 100%;
      background: #000;
      opacity: 0;
      -moz-opacity: 0;
      -khtml-opacity: 0;
      filter: alpha(opacity=0);
    }

    &:hover .item-mark {
      display: block;
      opacity: 0.4;
      transition: all 0.15s;
      -moz-opacity: 0.4;
      -khtml-opacity: 0.4;
      filter: alpha(opacity=40);
      -ms-transition: all 0.15s;
    }
  }
}
</style>
