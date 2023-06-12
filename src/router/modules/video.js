const _import = require("@/libs/util.import." + process.env.NODE_ENV);

const meta = {};

export default [
  {
    path: "/video/list",
    name: "VideoList",
    component: _import("video/list"),
    meta: { ...meta, title: "视频列表" },
  },
];
