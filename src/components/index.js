import BoxList from "./BoxList";
import Breadcrumb from "./Breadcrumb";
import Collapse from "./Collapse";

const components = [BoxList, Breadcrumb, Collapse];
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default install;
