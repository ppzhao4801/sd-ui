const _import = require("@/libs/util.import." + process.env.NODE_ENV);

const meta = {};

export default [
  {
    path: "/book/list",
    name: "BookList",
    component: _import("book/list"),
    meta: { ...meta, title: "图书列表" },
  },
];
