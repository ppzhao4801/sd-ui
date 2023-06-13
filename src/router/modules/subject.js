const _import = require("@/libs/util.import." + process.env.NODE_ENV);

const meta = {};

export default [
  {
    path: "/subject/list",
    name: "SubjectList",
    component: _import("subject/list"),
    meta: { ...meta, title: "专题列表" },
  },
  {
    path: "/subject/detail",
    name: "SubjectDetail",
    component: _import("subject/detail"),
    meta: { ...meta, title: "专题详情" },
  },
];
