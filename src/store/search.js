import Vue from "vue";
import { Apis } from "@/constant/constant";

export default {
  namespaced: true,
  state: {
    error: false,
    loading: false,
    meals: [],
    selectedMeals: {},
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
    setSelected(state, payload) {
      state.selectedMeals = state.meals.find((item) => item.idMeal === payload);
    },
    clearSelected(state) {
      state.selectedMeals = {};
    },
  },
  actions: {
    searchRecipes({ commit, dispatch }, payload) {
      commit("loading", true);
      commit("setRecipes", []);
      commit("error");
      Vue.axios
        .get(Apis.search + payload)
        .then((res) => {
          let data = res.data.meals;
          if (!data) {
            dispatch("reset");
            dispatch("clearSelected");
          } else {
            commit("setRecipes", data);
          }
          commit("loading");
        })
        .catch((e) => {
          console.log(e);
          commit("error", true);
        });
    },
    select({ commit, dispatch }, id) {
      commit("setSelected", id);
      dispatch("reset");
    },
    clearSelected({ commit }) {
      commit("clearSelected");
    },
    reset({ commit }) {
      commit("loading");
      commit("setRecipes", []);
      commit("error");
    },
  },
  getters: {
    getRecipes(state) {
      return state.meals;
    },
    getSeleted(state) {
      return state.selectedMeals;
    },
    isLoading(state) {
      return state.loading;
    },
    isError(state) {
      return state.error;
    },
  },
};
