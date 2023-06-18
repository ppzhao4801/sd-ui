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
                <el-collapse v-model="collapseVal">
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
      collapseVal: "1",
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
