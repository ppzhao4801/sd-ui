const _import = require("@/libs/util.import." + process.env.NODE_ENV);

const meta = {};

export default [
  {
    path: "/subject/list",
    name: "SubjectList",
    component: _import("subject/list"),
    meta: { ...meta, title: "专题列表" },
  },
];
