import Vue from "vue";
import Vuetify from "vuetify";

import { shallowMount } from "@vue/test-utils";
import Loader from "@/components/base/Loader.vue";

Vue.use(Vuetify);

describe("Loader.vue", () => {
  const wrapper = shallowMount(Loader, {});
  it("should be exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("it shoud have <v-card> element", () => {
    expect(wrapper.contains("v-card-stub")).toBe(true);
  });
  it("it shoud have <v-list-item> element", () => {
    expect(wrapper.contains("v-list-item-stub")).toBe(true);
  });
  it("it should have a <v-list-item-content> element", () => {
    expect(wrapper.contains("v-list-item-content-stub")).toBe(true);
  });
  it("it should have a <img> element", () => {
    expect(wrapper.contains("img")).toBe(true);
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
