import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

import common from "./modules/common";
import video from "./modules/video";
import audio from "./modules/audio";
import news from "./modules/news";
import Layout from "@/layout";
import util from "@/libs/util.js";
// 进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// fix vue-router NavigationDuplicated
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return VueRouterPush.call(this, location).catch((err) => err);
};
const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return VueRouterReplace.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);
const _import = require("@/libs/util.import." + process.env.NODE_ENV);
/**
 * 在主框架内显示
 */
const frameIn = {
  path: "/",
  redirect: "/index",
  name: "Index",
  component: Layout,
  children: [...common, ...video, ...audio, ...news],
};

const routes = [
  frameIn,
  {
    path: "/video/play/detail",
    name: "VideoPlayDetail",
    component: _import("video/detail"),
    meta: { title: "视频播放详情" },
  },
  {
    path: "*",
    name: "Error404",
    component: _import("common/error/404"),
    meta: { title: "没有找到页面" },
  },
];

const router = new VueRouter({
  routes,
});

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach((to, from, next) => {
  // 进度条
  NProgress.start();
  const auth = to.meta && to.meta.auth;
  if (auth && !store.getters.token) {
    next("index");
    NProgress.done();
    store.dispatch("user/openLogin", true, { root: true });
    return false;
  }
  next();
});
router.afterEach((to) => {
  // 进度条
  NProgress.done();
  // 更改标题
  util.title(to.meta.title);
});

router.onError(() => {
  NProgress.done();
});

export default router;
