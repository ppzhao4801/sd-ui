const _import = require("@/libs/util.import." + process.env.NODE_ENV);

const meta = {};

export default [
  {
    path: "/resource/list",
    name: "ResourceList",
    component: _import("resource/index"),
    meta: { ...meta, title: "资源列表" },
  },
];
