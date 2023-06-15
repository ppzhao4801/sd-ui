import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//公共组件
import Components from "@/components";
import VueAudio from "vue-audio-better";
export default {
  async install(Vue) {
    // 设置为 false 以阻止 vue 在启动时生成生产提示
    // https://cn.vuejs.org/v2/api/#productionTip
    Vue.config.productionTip = false;
    // 当前环境
    Vue.prototype.$env = process.env.NODE_ENV;
    // 当前的 baseUrl
    Vue.prototype.$baseUrl = process.env.BASE_URL;
    Vue.use(Components);
    Vue.use(ElementUI);
    Vue.use(VueAudio);
  },
};
