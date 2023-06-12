import store from "@/store";
import axios from "axios";
import router from "@/router";
import { request } from "@/api/service";

let isRefreshing = true; //是否需要刷新token
let subscribers = []; //请求缓存函数

/**
 * 执行请求，并情况
 */
const onAccessTokenFetched = function () {
  subscribers.forEach((callback) => {
    callback();
  });
  subscribers = [];
  isRefreshing = true;
};
const onAccessTokenRejected = function () {
  subscribers = [];
  isRefreshing = true;
  router.replace({ name: "Login" });
};
/**
 * 添加请求
 */
const addSubscriber = function (callback) {
  subscribers.push(callback);
};
/**
 * 刷新token
 */
const refreshTokenRequst = function () {
  axios
    .request({
      baseURL: process.env.VUE_APP_API,
      url: "/platform/user/refreshToken",
      method: "POST",
      data: {
        accessToken: store.getters.token && store.getters.token.accessToken,
        refreshToken: store.getters.token && store.getters.token.refreshToken,
      },
    })
    .then(async (response) => {
      if (!(response.data.code && response.data.code === 200)) {
        onAccessTokenRejected();
        return false;
      }
      const token = response.data.data;
      await store.dispatch("user/setToken", token);
      //保存token
      onAccessTokenFetched();
    })
    .catch(() => {
      onAccessTokenRejected();
    });
};

const retryRequest = function (resConfig) {
  if (isRefreshing) {
    const headers = resConfig.headers;
    if (
      headers["Access-Token"] === store.getters.token.accessToken &&
      headers["Refresh-Token"] === store.getters.token.refreshToken
    ) {
      refreshTokenRequst();
      isRefreshing = false;
    } else {
      return new Promise((resolve) => {
        resolve(
          request({
            url: resConfig.url,
            data: resConfig.data,
            method: resConfig.method,
          })
        );
      });
    }
  }
  return new Promise((resolve) => {
    addSubscriber(() => {
      resolve(
        request({
          url: resConfig.url,
          data: resConfig.data,
          method: resConfig.method,
        })
      );
    });
  });
};

export default retryRequest;
