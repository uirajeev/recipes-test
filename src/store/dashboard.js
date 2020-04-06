import Vue from "vue";
import { Apis } from "@/constant/constant";

export default {
  namespaced: true,
  state: {
    error: false,
    loading: false,
    meals: [],
  },
  mutations: {
    error(state, payload) {
      state.dataError = payload ? payload : false;
    },
    loading(state, payload) {
      state.loading = payload ? payload : false;
    },
    setRecipes(state, payload) {
      state.meals = payload;
    },
  },
  actions: {
    getRendomRecipes({ commit }) {
      commit("loading", true);
      commit("error");
      Vue.axios
        .get(Apis.randomMeals)
        .then((res) => {
          let data = res.data.meals;
          console.log(data);
          commit("setRecipes", data);
          commit("loading");
        })
        .catch((e) => {
          console.log(e);
          commit("error", true);
        });
    },
  },
  getters: {
    getRecipes(state) {
      return state.meals[0];
    },
  },
};
