const _import = require("@/libs/util.import." + process.env.NODE_ENV);

const meta = {};

export default [
  {
    path: "/fodder/list",
    name: "FodderList",
    component: _import("fodder/list"),
    meta: { ...meta, title: "素材列表" },
  },
];
