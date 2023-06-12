import BoxList from "./BoxList";
import Breadcrumb from "./Breadcrumb";

const components = [BoxList, Breadcrumb];
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default install;
