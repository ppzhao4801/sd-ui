const _import = require("@/libs/util.import." + process.env.NODE_ENV);

const meta = {};

export default [
  {
    path: "/news/list",
    name: "NewsList",
    component: _import("news/list"),
    meta: { ...meta, title: "新闻列表" },
  },
];
