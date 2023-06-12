import { dbGet } from "@/libs/util.db";
import { MessageBox } from "element-ui";
import { request } from "@/api/service";
import router from "@/router";

export default {
  namespaced: true,
  state: {
    // 用户信息
    showLogin: false,
    info: dbGet({ dbName: "user", path: "info", defaultValue: null }),
    token: dbGet({ dbName: "user", path: "token", defaultValue: null }),
  },
  actions: {
    /**
     * @description 设置用户数据
     * @param {Object} context
     * @param {*} info info
     */
    async setInfo({ state, dispatch }, info) {
      // store 赋值
      state.info = info;
      // 持久化
      await dispatch(
        "db/set",
        {
          dbName: "user",
          path: "info",
          value: info,
        },
        { root: true }
      );
    },
    /**
     * @description 从数据库取用户数据
     * @param {Object} context
     */
    async getInfo({ state, dispatch }) {
      // store 赋值
      state.info = await dispatch(
        "db/get",
        {
          dbName: "user",
          path: "info",
          defaultValue: {},
        },
        { root: true }
      );
      return state.info;
    },
    /**
     * @description 设置用户token数据
     * @param {Object} context
     * @param {*} info info
     */
    async setToken({ state, dispatch }, token) {
      // store 赋值
      state.token = token;
      // 持久化
      await dispatch(
        "db/set",
        {
          dbName: "user",
          path: "token",
          value: token,
        },
        { root: true }
      );
    },
    /**
     * @description 从数据库取用户token数据
     * @param {Object} context
     */
    async getToken({ state, dispatch }) {
      // store 赋值
      state.token = await dispatch(
        "db/get",
        {
          dbName: "user",
          path: "token",
          defaultValue: {},
        },
        { root: true }
      );
      return state.token;
    },
    /**
     * @description 获取用户信息
     * @param {Object} context
     */
    async loadInfo({ dispatch }) {
      const userInfo = await request({
        url: "/afis-openapi/oapi/auth/current",
        method: "post",
      });
      if (userInfo) {
        await dispatch("setInfo", userInfo);
      }
    },
    /**
     * 登录
     */
    async login({ dispatch }, token) {
      await dispatch("openLogin", false);
      await dispatch("setToken", token);
      await dispatch("loadInfo");
    },
    openLogin({ state }, show) {
      state.showLogin = show;
    },
    /**
     * @description 注销用户并返回登录页面
     * @param {Object} context
     * @param {Object} payload confirm {Boolean} 是否需要确认
     */
    logout({ dispatch }, { confirm = false } = {}) {
      /**
       * @description 注销
       */
      async function logout() {
        // await request({
        //   url: "/platform/user/loginOut",
        //   method: "post",
        //   data: { userId: state.info.userId },
        // });
        // 清空 vuex 用户信息
        await dispatch("setInfo", null);
        await dispatch("setToken", null);
        // 跳转路由
        router.replace({ name: "Index" });
      }
      // 判断是否需要确认
      if (confirm) {
        MessageBox.confirm("确定要注销当前用户吗", "注销用户", {
          type: "warning",
        })
          .then(() => {
            logout();
          })
          .catch(() => {
            // Message({ message: "取消注销操作" });
          });
      } else {
        logout();
      }
    },
  },
};
