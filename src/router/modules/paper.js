const _import = require("@/libs/util.import." + process.env.NODE_ENV);

const meta = {};

export default [
  {
    path: "/paper/list",
    name: "PaperList",
    component: _import("paper/list"),
    meta: { ...meta, title: "报纸列表" },
  },
];
