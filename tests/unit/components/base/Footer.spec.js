import Vue from "vue";
import Vuetify from "vuetify";

import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/base/Footer.vue";

Vue.use(Vuetify);

describe("Footer.vue.vue", () => {
  const wrapper = shallowMount(Footer, {});

  it("should be exist", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("should have name", () => {
    expect(wrapper.name()).toMatch("Footer");
  });
  it("should have span", () => {
    expect(wrapper.find("strong").exists()).toBe(true);
    expect(wrapper.find("strong").text()).toMatch("FOOD Factory");
  });

  it("it should have a <v-footer> element", () => {
    expect(wrapper.contains("v-footer-stub")).toBe(true);
  });
  it("it should have a <v-row> element", () => {
    expect(wrapper.contains("v-row-stub")).toBe(true);
  });
  it("it should have a <v-col> element", () => {
    expect(wrapper.contains("v-col-stub")).toBe(true);
  });
  it("it should have a <strong> element", () => {
    expect(wrapper.contains("strong")).toBe(true);
  });
  afterEach(() => {
    wrapper.destroy();
  });
});
