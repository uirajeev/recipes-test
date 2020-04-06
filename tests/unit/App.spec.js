import Vue from "vue";
import Vuetify from "vuetify";
import router from "@/router"; // Router

import { shallowMount } from "@vue/test-utils";

import App from "@/App.vue";

Vue.use(Vuetify);
Vue.use(router);

describe("App.vue", () => {
  const wrapper = shallowMount(App, {});

  it("should be exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("it shoud have <v-app> element", () => {
    expect(wrapper.contains("v-app-stub")).toBe(true);
  });

  it("it shoud have <v-content> element", () => {
    expect(wrapper.contains("v-content-stub")).toBe(true);
  });
});
