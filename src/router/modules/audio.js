const _import = require("@/libs/util.import." + process.env.NODE_ENV);

const meta = {};

export default [
  {
    path: "/audio/list",
    name: "AudioList",
    component: _import("audio/list"),
    meta: { ...meta, title: "音频列表" },
  },
  {
    path: "/audio/play/list",
    name: "AudioPlayList",
    component: _import("audio/playList"),
    meta: { ...meta, title: "音频播放列表" },
  },
];
