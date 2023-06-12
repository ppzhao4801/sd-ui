import { Message, MessageBox } from "element-ui";
import axios from "axios";
import Adapter from "axios-mock-adapter";
import { get, isEmpty, merge } from "lodash";
import qs from "qs";
import store from "@/store";
import router from "@/router";
import retryRequest from "./refreshToken";

/**
 * @description 记录和显示错误
 * @param {Error} error 错误对象
 */
function handleError(error) {
  // 显示提示
  Message({
    message: error.message,
    type: "error",
    duration: 5 * 1000,
  });
}

/**
 * @description 创建请求实例
 */
function createService() {
  // 创建一个 axios 实例
  const service = axios.create();
  // 请求拦截
  service.interceptors.request.use(
    (config) => config,
    (error) => {
      // 发送失败
      return Promise.reject(error);
    }
  );
  // 响应拦截
  service.interceptors.response.use(
    (response) => {
      // 没有 code 视为非项目接口不作处理
      if (response.data.code === undefined) {
        return response.data;
      }
      // 有 code 判断为项目接口请求
      switch (response.data.code) {
        // 返回响应内容
        case 200:
          return response.data.data;
        case 30310: {
          // 长token过期到登录页面
          //router.replace({ name: "Login" });
          break;
        }
        case 30312: {
          // 短token过期需要刷新token
          return retryRequest(response.config);
        }
        case 30313: {
          // 其它地方已经登录过
          break;
        }
        // 例如在 code 401 情况下退回到登录页面
        case 401: {
          store.dispatch("user/openLogin", true, { root: true });
          store.dispatch("user/logout", false, { root: true });
          router.replace({ name: "Home" });
          throw new Error("请重新登录");
        }
        case 10134: {
          MessageBox({
            title: "退出提示",
            message: "您的账号在其他地方已登录,请重新登录",
            type: "warning",
            callback: () => {
              store.dispatch("user/logout", false, { root: true });
              router.replace({ name: "Home" });
            },
          });
          // throw new Error("您的账号在其他地方已登录,请重新登录");
          break;
        }
        // 根据需要添加其它判断
        default: {
          handleError({ message: response.data.message || response.data.msg });
          throw new Error(`${response.data.message || response.data.msg}: ${response.config.url}`);
        }
      }
    },
    (error) => {
      const status = get(error, "response.status");
      switch (status) {
        case 400:
          error.message = "请求错误";
          break;
        case 401:
          store.dispatch("user/openLogin", true, { root: true });
          store.dispatch("user/logout", false, { root: true });
          router.replace({ name: "Home" });
          error.message = "未授权，请登录";
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`;
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器内部错误";
          break;
        case 501:
          error.message = "服务未实现";
          break;
        case 502:
          error.message = "网关错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网关超时";
          break;
        case 505:
          error.message = "HTTP版本不受支持";
          break;
        default:
          break;
      }
      handleError(error);
      throw error;
    }
  );
  return service;
}
function stringify(data) {
  return qs.stringify(data, { allowDots: true, encode: false });
}

/**
 * @description 创建请求方法
 * @param {Object} service axios 实例
 */
function createRequest(service) {
  return function (config) {
    const configDefault = {
      headers: {
        "Access-Token": store.getters.token,
        "Content-Type": get(config, "headers.Content-Type", "application/json"),
      },
      baseURL: process.env.VUE_APP_API,
      data: {},
    };
    const option = merge(configDefault, config);
    // 处理 get 请求的参数
    // 请根据实际需要修改
    if (!isEmpty(option.params)) {
      option.url = option.url + "?" + stringify(option.params);
      option.params = {};
    }
    // 当需要以 form 形式发送时 处理发送的数据
    // 请根据实际需要修改
    if (!isEmpty(option.data) && option.headers["Content-Type"] === "application/x-www-form-urlencoded") {
      option.data = stringify(option.data);
    }
    return service(option);
  };
}

// 用于真实网络请求的实例和请求方法
export const service = createService();
export const request = createRequest(service);

// 用于模拟网络请求的实例和请求方法
export const serviceForMock = createService();
export const requestForMock = createRequest(serviceForMock);

// 网络请求数据模拟工具
export const mock = new Adapter(serviceForMock);
