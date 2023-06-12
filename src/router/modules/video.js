const _import = require("@/libs/util.import." + process.env.NODE_ENV);

const meta = {};

export default [
  {
    path: "/video/list",
    name: "VideoList",
    component: _import("video/list"),
    meta: { ...meta, title: "视频列表" },
  },
  {
    path: "/video/play/list",
    name: "VideoPlayList",
    component: _import("video/playList"),
    meta: { ...meta, title: "视频播放列表" },
  },
];
