import Vue from "vue";
import Vuetify from "vuetify";
import vueDebounce from "vue-debounce";

import { shallowMount } from "@vue/test-utils";
import List from "@/components/base/List.vue";

Vue.use(Vuetify);
Vue.use(vueDebounce);

describe("List.vue", () => {
  const wrapper = shallowMount(List, {
    propsData: {
      title: "Title",
      items: ["Item"],
    },
  });
  it("should be exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have h4", () => {
    expect(wrapper.find("h4").exists()).toBe(true);
    expect(wrapper.find("h4").text()).toMatch("Title");
    expect(wrapper.find("h4").classes()).toContain("subheading");
  });

  it("renders props when passed", () => {
    expect(wrapper.props().title).toMatch("Title");
    expect(wrapper.props().items).toContain("Item");
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("it shoud have <v-card> element", () => {
    expect(wrapper.contains("v-card-stub")).toBe(true);
  });
  it("it shoud have <v-card-title> element", () => {
    expect(wrapper.contains("v-card-title-stub")).toBe(true);
  });
  it("it should have a <v-list> element", () => {
    expect(wrapper.contains("v-list-stub")).toBe(true);
  });
  it("it should have a <v-list-item> element", () => {
    expect(wrapper.contains("v-list-item-stub")).toBe(true);
  });
  it("it should have a <v-list-item-content> element", () => {
    expect(wrapper.contains("v-list-item-content-stub")).toBe(true);
  });
  it("it should have a <v-list-item-title> element", () => {
    expect(wrapper.contains("v-list-item-title-stub")).toBe(true);
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
