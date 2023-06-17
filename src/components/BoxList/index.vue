<template>
  <div class="box-list">
    <dl v-for="(item, index) in data" class="box-list_item" :key="index" @click="toDetail">
      <dd class="item-pic">
        <img :src="item.pic" />
      </dd>
      <dt class="item-title">
        <a>{{ item.title }}</a>
      </dt>
      <dd class="item-explain">
        <div v-if="isMark" class="item-mark"></div>
        <slot name="mark" :item="item"></slot>
        <slot :item="item">
          <div class="coll">
            <div class="item"><i></i><span class="dzs">151493</span></div>
          </div>
        </slot>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "BoxList",
  props: {
    // 容器样式
    data: {
      type: Array,
      required: false,
      default: function () {
        return [];
      },
    },
    // 滚动优化
    dataProp: {
      type: Object,
      default: function () {
        return {};
      },
    },
    isMark: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toDetail() {
      this.$emit("detail");
    },
  },
};
</script>

<style lang="scss" scoped>
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
