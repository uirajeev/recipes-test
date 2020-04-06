import Vue from "vue";
import Vuex from "vuex";

import dashboard from "./dashboard";
import search from "./search";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dashboard,
    search,
  },
  state: {},
  mutations: {},
  actions: {},
});
