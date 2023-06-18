<template>
  <div class="video-play-detail">
    <div class="play-body">
      <div class="study-bodys">
        <video ref="videoPlayer" class="video-js"></video>
      </div>
      <div class="right-side-bar">
        <div class="side-bar">
          <el-tabs v-model="activeName" class="side-tabs">
            <el-tab-pane label="目录" name="list">
              <div class="playlist">
                <el-collapse>
                  <el-collapse-item name="1">
                    <template slot="title">
                      <div class="title">01,一致性 Consistency一致性一致性一致性一致性一致性test</div>
                    </template>
                    <div>
                      <div class="task-item-expo-wrapper active">
                        <a class="task-item">
                          <div class="task-type">
                            <span class="play-icon">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM5.919 9.705 9.308 7.44a.302.302 0 0 0 0-.502l-3.39-2.265a.308.308 0 0 0-.314-.016.302.302 0 0 0-.162.267v4.53c0 .112.063.215.162.267.1.053.221.047.315-.016Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </div>
                          <div class="task-content">
                            <div class="task-name-ctn">
                              <div class="task-name">
                                <span class="task-index">1.</span>2019年亚马逊招商经理选品数据1
                              </div>
                              <div class="task-labels">
                                <span class="task-label">试学</span>
                              </div>
                            </div>
                            <div class="task-info">
                              <span class="time-range">2月21日 19:30-20:00</span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="task-item-expo-wrapper">
                        <a class="task-item">
                          <div class="task-type">
                            <span class="play-icon">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM5.919 9.705 9.308 7.44a.302.302 0 0 0 0-.502l-3.39-2.265a.308.308 0 0 0-.314-.016.302.302 0 0 0-.162.267v4.53c0 .112.063.215.162.267.1.053.221.047.315-.016Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </div>
                          <div class="task-content">
                            <div class="task-name-ctn">
                              <div class="task-name">
                                <span class="task-index">1.</span>2019年亚马逊招商经理选品数据1
                              </div>
                              <div class="task-labels">
                                <span class="task-label">试学</span>
                              </div>
                            </div>
                            <div class="task-info">
                              <span class="time-range">2月21日 19:30-20:00</span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="task-item-expo-wrapper">
                        <a class="task-item">
                          <div class="task-type">
                            <span class="play-icon">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM5.919 9.705 9.308 7.44a.302.302 0 0 0 0-.502l-3.39-2.265a.308.308 0 0 0-.314-.016.302.302 0 0 0-.162.267v4.53c0 .112.063.215.162.267.1.053.221.047.315-.016Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </div>
                          <div class="task-content">
                            <div class="task-name-ctn">
                              <div class="task-name">
                                <span class="task-index">1.</span>2019年亚马逊招商经理选品数据1
                              </div>
                              <div class="task-labels">
                                <span class="icon-lock">
                                  <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M12 1a6 6 0 0 0-6 6v1a4 4 0 0 0-4 4v7a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-7a4 4 0 0 0-4-4V7a6 6 0 0 0-6-6Zm4 7V7a4 4 0 0 0-8 0v1h8ZM6 10a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H6Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div class="task-info">
                              <span class="time-range">2月21日 19:30-20:00</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item name="2">
                    <template slot="title">
                      <div class="title">02,一致性 Consistency一致性一致性一致性一致性一致性test</div>
                    </template>
                    <div>
                      <div class="task-item-expo-wrapper">
                        <a class="task-item">
                          <div class="task-type">
                            <span class="play-icon">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM5.919 9.705 9.308 7.44a.302.302 0 0 0 0-.502l-3.39-2.265a.308.308 0 0 0-.314-.016.302.302 0 0 0-.162.267v4.53c0 .112.063.215.162.267.1.053.221.047.315-.016Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </div>
                          <div class="task-content">
                            <div class="task-name-ctn">
                              <div class="task-name">
                                <span class="task-index">1.</span>2019年亚马逊招商经理选品数据1
                              </div>
                              <div class="task-labels">
                                <span class="task-label">试学</span>
                              </div>
                            </div>
                            <div class="task-info">
                              <span class="time-range">2月21日 19:30-20:00</span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="task-item-expo-wrapper">
                        <a class="task-item">
                          <div class="task-type">
                            <span class="play-icon">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM5.919 9.705 9.308 7.44a.302.302 0 0 0 0-.502l-3.39-2.265a.308.308 0 0 0-.314-.016.302.302 0 0 0-.162.267v4.53c0 .112.063.215.162.267.1.053.221.047.315-.016Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </div>
                          <div class="task-content">
                            <div class="task-name-ctn">
                              <div class="task-name">
                                <span class="task-index">1.</span>2019年亚马逊招商经理选品数据1
                              </div>
                              <div class="task-labels">
                                <span class="task-label">试学</span>
                              </div>
                            </div>
                            <div class="task-info">
                              <span class="time-range">2月21日 19:30-20:00</span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="task-item-expo-wrapper">
                        <a class="task-item">
                          <div class="task-type">
                            <span class="play-icon">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM5.919 9.705 9.308 7.44a.302.302 0 0 0 0-.502l-3.39-2.265a.308.308 0 0 0-.314-.016.302.302 0 0 0-.162.267v4.53c0 .112.063.215.162.267.1.053.221.047.315-.016Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </div>
                          <div class="task-content">
                            <div class="task-name-ctn">
                              <div class="task-name">
                                <span class="task-index">1.</span>2019年亚马逊招商经理选品数据1
                              </div>
                              <div class="task-labels">
                                <span class="icon-lock">
                                  <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M12 1a6 6 0 0 0-6 6v1a4 4 0 0 0-4 4v7a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-7a4 4 0 0 0-4-4V7a6 6 0 0 0-6-6Zm4 7V7a4 4 0 0 0-8 0v1h8ZM6 10a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H6Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div class="task-info">
                              <span class="time-range">2月21日 19:30-20:00</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-tab-pane>
            <el-tab-pane label="视频内容" name="content">
              <div class="playContent">
                <div class="search-bar">
                  <el-input placeholder="请输入内容" prefix-icon="el-icon-search" size="small" v-model="search">
                  </el-input>
                  <el-button type="danger" size="small">检索</el-button>
                </div>
                <div class="docs-list">
                  <div class="docs-part">
                    <div class="begin-time">00:04</div>
                    <div class="docs-part-cnt">
                      <span class="docs-text">2016年国家十三五规划2016年国家十三五规划中提出中提出</span>
                      <span class="comma">，</span>
                      <span class="docs-text">以习志为核心的党中央弘扬改革创新精神中央弘扬改革创新精神</span>
                    </div>
                  </div>
                  <div class="docs-part">
                    <div class="begin-time">10:04</div>
                    <div class="docs-part-cnt">
                      <span class="docs-text">2016年国家十三五规划中提出</span>
                      <span class="comma">，</span>
                      <span class="docs-text">以习近平同志为核心的党中央弘扬改革创新精神</span>
                    </div>
                  </div>
                  <div class="docs-part">
                    <div class="begin-time">20:04</div>
                    <div class="docs-part-cnt">
                      <span class="docs-text">2016年国家十三五规划2016年国家十三五规划中提出中提出</span>
                      <span class="comma">，</span>
                      <span class="docs-text">以习志为核心的党中央弘扬改革创新精神中央弘扬改革创新精神</span>
                    </div>
                  </div>
                  <div class="docs-part">
                    <div class="begin-time">30:04</div>
                    <div class="docs-part-cnt">
                      <span class="docs-text">2016年国家十三五规划2016年国家十三五规划中提出中提出</span>
                      <span class="comma">，</span>
                      <span class="docs-text">以习志为核心的党中央弘扬改革创新精神中央弘扬改革创新精神</span>
                    </div>
                  </div>
                  <div class="docs-part">
                    <div class="begin-time">40:04</div>
                    <div class="docs-part-cnt">
                      <span class="docs-text">2016年国家十三五规划2016年国家十三五规划中提出中提出</span>
                      <span class="comma">，</span>
                      <span class="docs-text">以习志为核心的党中央弘扬改革创新精神中央弘扬改革创新精神</span>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="study-foot">
        <div>下载地址</div>
      </div>
    </div>
  </div>
</template>
<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";
export default {
  components: {},
  data() {
    return {
      activeName: "list",
      search: null,
      player: null,
    };
  },
  mounted() {
    this.player = videojs(
      this.$refs.videoPlayer,
      { controls: true, autoplay: true, muted: true, type: "video/mp4" },
      function () {
        console.log("Video.js is ready");
        this.src("https://img.tukuppt.com/video_show/15653652/01/00/67/6117b79d71fa8.mp4");
      }
    );
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
      this.player = null;
    }
  },
  methods: {},
};
</script>
<style lang="scss">
.side-tabs.el-tabs {
  height: 100%;
  display: flex;
  flex-direction: column;
  .el-tabs__item {
    color: #c0c5cc;
  }
  .el-tabs__nav-wrap::after {
    background-color: transparent;
  }
  .el-tabs__header {
    flex: 0 0 50px;
    padding: 0 20px;
    margin: 0;
  }
  .el-tabs__content {
    flex: 1;
    height: 100%;
    .el-tab-pane {
      height: 100%;
    }
    .playContent {
      display: flex;
      flex-direction: column;
      height: 100%;
      .search-bar {
        display: flex;
        align-items: baseline;
        padding: 6px 24px;
        .el-input__inner {
          background-color: transparent;
          color: #fff;
        }
      }
      .docs-list {
        padding: 10px 0;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;
        &::-webkit-scrollbar-thumb {
          background-color: #323c46;
        }
        &::-webkit-scrollbar,
        &::-webkit-scrollbar-track {
          background-color: transparent;
        }
        .docs-part {
          padding: 0 24px;
          font-size: 14px;
          line-height: 28px;
          color: #667280;
          margin-bottom: 24px;
          .begin-time {
            padding: 0 4px;
            margin-bottom: 8px;
            background: #323c46;
            border-radius: 6px;
            height: 20px;
            line-height: 20px;
            width: fit-content;
            font-size: 14px;
            color: #a1a9b2;
          }
          .docs-part-cnt {
            cursor: default;
            .docs-text {
              padding: 5.5px 0 5.5px 4px;
              &:first-child {
                margin-left: -4px;
              }
              &:hover {
                cursor: pointer;
                background: rgb(202, 11, 11, 0.3);
                border-radius: 6px;
                color: #c0c5cc;
              }
            }
            .comma {
              margin-right: -4px;
              padding: 5.5px 0;
            }
          }
        }
      }
    }
    .playlist {
      height: 100%;
      overflow: auto;
      &::-webkit-scrollbar-thumb {
        background-color: #323c46;
      }
      &::-webkit-scrollbar,
      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
      .el-collapse {
        background-color: transparent;
        border: 0;
        .el-collapse-item {
          .el-collapse-item__wrap {
            background-color: transparent;
            border: 0;
            .el-collapse-item__content {
              padding-bottom: 0;
            }
          }
          .el-collapse-item__header {
            height: 44px;
            line-height: 44px;
            font-size: 16px;
            padding: 0 24px;
            cursor: pointer;
            background-color: transparent;
            color: #c0c5cc;
            border: 0;
            .title {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              word-wrap: normal;
            }
          }
          .el-collapse-item__content {
            .task-item-expo-wrapper {
              position: relative;
              font-size: 14px;
              padding: 12px 0;
              margin: 0 12px;
              cursor: pointer;
              &.active {
                background: #0f1419;
                border-radius: 16px;
                .task-item {
                  color: #e35e54;
                  &:hover {
                    color: #e35e54;
                  }
                }
              }
              .task-item {
                position: relative;
                display: flex;
                cursor: pointer;
                padding: 0 12px;
                color: #a1a9b2;
                &:hover {
                  color: #c0c5cc;
                }
                .task-type {
                  display: flex;
                  width: 14px;
                  height: 14px;
                  margin-top: 3px;
                  margin-right: 14px;
                  .play-icon {
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 14px;
                    svg {
                      display: block;
                      margin: auto;
                      width: 1em em;
                      height: 1em;
                    }
                  }
                }
                .task-content {
                  width: calc(100% - 44px);
                  .task-name-ctn {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .task-name {
                      height: 22px;
                      line-height: 22px;
                      font-size: 16px;
                      margin-bottom: 4px;
                      overflow: hidden;
                      white-space: nowrap;
                      text-overflow: ellipsis;
                      word-wrap: normal;
                      .task-index {
                        margin-right: 7px;
                        font-size: 18px;
                        font-weight: 600;
                      }
                    }
                    .task-labels {
                      display: flex;
                      flex: none;
                      margin-left: 20px;
                      .icon-lock {
                        margin-right: 8px;
                        display: inline-block;
                        vertical-align: middle;
                        color: #c9d0d6;
                        font-size: 16px;
                      }
                      .task-label {
                        height: 20px;
                        padding: 2px 6px;
                        background: rgba(32, 128, 247, 0.1);
                        border-radius: 8px;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 16px;
                        color: #2080f7;
                        margin-left: 2px;
                      }
                    }
                  }
                  .task-info {
                    height: 20px;
                    line-height: 20px;
                    font-size: 14px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    word-wrap: normal;
                    .time-range {
                      margin-right: 8px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.play-body {
  min-width: 750px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: #000;
  .right-side-bar {
    border-top: 1px solid #14171a;
    background: #1b2128;
    width: 360px;
    position: absolute;
    right: 0;
    bottom: 50px;
    top: 0;
    z-index: 2001;
    transition: right 0.5s;
    .side-bar {
      color: #c0c5cc;
      height: 100%;
      overflow: hidden;
    }
  }
  .study-bodys {
    display: flex;
    position: absolute;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    top: 0;
    bottom: 50px;
    left: 0;
    right: 360px;
    transition: right 0.5s;
    .video-js {
      width: 100%;
      height: 100%;
    }
  }
  .study-foot {
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #8797a1;
    background: #1b2128;
    user-select: none;
    position: absolute;
    bottom: 0;
    z-index: 2002;
    div {
      margin: 0 20px;
    }
  }
}
</style>
