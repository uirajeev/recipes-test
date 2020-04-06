import Vue from "vue";
import Vuetify from "vuetify";
import vueDebounce from "vue-debounce";

import { shallowMount } from "@vue/test-utils";
import Header from "@/components/base/Header.vue";
import Search from "@/components/core/Search.vue";

Vue.use(Vuetify);
Vue.use(vueDebounce);

describe("Header.vue", () => {
  const $route = {
    name: "dashboard",
  };
  const $router = {
    push: (obj) => {
      return obj;
    },
  };
  const wrapper = shallowMount(Header, {
    stubs: {
      Search,
    },
    mocks: {
      $route,
      $router,
    },
  });
  it("should be exist", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Search be exist", () => {
    expect(wrapper.find(Search).exists()).toBe(true);
  });
  it("should be return path name", () => {
    expect(wrapper.vm.path).toMatch("dashboard");
  });
  it("should be called", () => {
    expect(wrapper.vm.goToHome()).toBe(undefined);
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("it shoud have <v-app-bar> element", () => {
    expect(wrapper.contains("v-app-bar-stub")).toBe(true);
  });
});
