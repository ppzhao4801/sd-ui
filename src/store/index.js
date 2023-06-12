import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import db from "./modules/db";
import user from "./modules/user";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    db,
    user,
  },
  getters,
});
