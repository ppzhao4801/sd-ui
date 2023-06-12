const _import = require("@/libs/util.import." + process.env.NODE_ENV);

const meta = {};

export default [
  {
    path: "/index",
    name: "Home",
    component: _import("common/home"),
    meta: { ...meta, title: "首页" },
  },
  {
    path: "/register",
    name: "Register",
    component: _import("common/register"),
    meta: { ...meta, title: "注册" },
  },
];
