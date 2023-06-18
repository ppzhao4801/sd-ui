<template>
  <div class="global-background video-play-list l-width">
    <div>
      <Breadcrumb :levelList="levelList" />
    </div>
    <div class="section f-flex f-col-top">
      <div class="section-left">
        <div
          class="cover-pay-wrapper"
          style="
            background-image: url('https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDlYvnQHwQ5y4j3618qhVbsB8Edenx9TY15kfic6BnqUcH7yaJrm1QaSszKT9omsAIA/');
          "
        >
          <div class="cover-mask">
            <a class="cover-mask-icon">
              <span class="cover-mask-play">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18.76 9.856c1.619.971 1.619 3.317 0 4.288l-9.307 5.584c-1.666 1-3.786-.2-3.786-2.144V6.415c0-1.943 2.12-3.143 3.786-2.143l9.308 5.584Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </a>
            <p class="cover-mask-txt">立即播放</p>
          </div>
        </div>
      </div>
      <div class="section-right">
        <h3 class="course-title">亚马逊Amazon全球开店账号后台基础操作</h3>
        <div class="course-highlights">腾讯课堂描述</div>
        <p class="course-hints">
          <span><span class="num">5</span>节课程</span>
          <span><span class="num">2.1</span>小时</span>
          <span><span class="num">100%</span>好评</span>
          <span><span class="num">557</span>人最近购买</span>
        </p>
        <div class="pay-desc">
          <span>VIP会员价：96.00元</span>
          <span>注册会员价：196.00元</span>
          <span class="cost">原价：240.00</span>
        </div>
        <div class="f-flex">
          <el-button type="danger" @click="play">
            <router-link target="_blank" :to="{ path: '/video/play/detail' }" style="color: #fff">立即播放</router-link>
          </el-button>
          <div style="margin-left: 10px">
            <i class="el-icon-share"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="section-main">
      <div>
        <div class="detail">
          <div class="detail_search">
            <span class="label">内容</span>
            <el-input v-model="search" size="small" />
            <el-button type="danger" size="small">检索</el-button>
          </div>
          <el-tabs v-model="detailTab" class="detail-tabs">
            <el-tab-pane label="课程目录" name="list">
              <el-collapse class="detail-collapse">
                <el-collapse-item title="一致性 Consistency" name="1">
                  <template slot="title">
                    <div class="detail-collapse_title">
                      <div class="section-index">01.</div>
                      <div class="section-info-main">
                        <p class="section-title">
                          与现实生活的流程、逻辑保持一与现实生活的流程、逻辑保持一与现实生活的流程、逻辑保持一与现实生活的流程、逻辑保持一
                        </p>
                      </div>
                      <i class="section-operate">
                        <span class="opicon">
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
                              d="M3.565 14.364a1 1 0 0 1 0-1.414L8.515 8a4 4 0 0 1 5.656 0l4.95 4.95a1 1 0 0 1-1.414 1.414l-4.95-4.95a2 2 0 0 0-2.828 0l-4.95 4.95a1 1 0 0 1-1.414 0Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </i>
                    </div>
                  </template>
                  <div>
                    <div class="task-item-expo-wrapper">
                      <a class="task-item">
                        <div class="task-type">
                          <span class="play-icon" style="color: #c9d0d6">
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
                            <div class="task-name"><span class="task-index">1.</span>2019年亚马逊招商经理选品数据1</div>
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
                    <div class="task-item-expo-wrapper">
                      <a class="task-item">
                        <div class="task-type">
                          <span class="play-icon" style="color: #c9d0d6">
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
                            <div class="task-name"><span class="task-index">1.</span>2019年亚马逊招商经理选品数据1</div>
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
                  </div>
                </el-collapse-item>
                <el-collapse-item title="一致性 Consistency" name="2">
                  <template slot="title">
                    <div class="detail-collapse_title">
                      <div class="section-index">01.</div>
                      <div class="section-info-main">
                        <p class="section-title">
                          与现实生活的流程、逻辑保持一与现实生活的流程、逻辑保持一与现实生活的流程、逻辑保持一与现实生活的流程、逻辑保持一
                        </p>
                      </div>
                      <i class="section-operate">
                        <span class="opicon">
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
                              d="M3.565 9.636a1 1 0 0 0 0 1.414L8.515 16a4 4 0 0 0 5.656 0l4.95-4.95a1 1 0 0 0-1.414-1.414l-4.95 4.95a2 2 0 0 1-2.828 0l-4.95-4.95a1 1 0 0 0-1.414 0Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </i>
                    </div>
                  </template>
                </el-collapse-item>
              </el-collapse>
            </el-tab-pane>
            <el-tab-pane label="课程介绍" name="detail">
              <div class="detail-introduce">课程介绍</div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div>
        <div class="agency-info">
          <div class="agency-info-inner">
            <h4 class="agency-tt">
              <div class="tt-cover-pic">
                <img
                  src="https://10.idqqimg.com/eth/ajNVdqHZLLB02oCBVvIX1Zgn9IHhfVgHNvHElyIqsf17xWUb74DUPuE8k1W6ZsmEYibxdMgVY2UE/"
                  alt="鲤鱼design"
                  width="64"
                  height="64"
                />
              </div>
              <div class="tt-cover-name">讲师：名称</div>
            </h4>
            <div class="agency-summary">
              我是一名视觉设计师，专注于动态视觉设计。从平面到三维，从静态到动态，为你提供专业的视觉设计指导。
            </div>
          </div>
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
      search: null,
      detailTab: "list",
      levelList: [
        {
          title: "视频列表",
          path: "/video/list",
        },
        {
          title: "新闻详情",
          path: "video/play/list",
        },
      ],
    };
  },
  methods: {
    play() {},
  },
};
</script>
