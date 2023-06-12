import "core-js";
import "regenerator-runtime";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 核心插件
import Base from "@/plugin/base";
Vue.use(Base);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
