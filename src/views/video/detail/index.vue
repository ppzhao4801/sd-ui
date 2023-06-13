<template>
  <div class="video-play-detail">
    <div class="play-body">
      <div class="study-bodys">
        <video ref="videoPlayer" class="video-js"></video>
      </div>
      <div class="right-side-bar"></div>
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
