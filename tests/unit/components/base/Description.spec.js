import Vue from "vue";
import Vuetify from "vuetify";
import VueYoutube from "vue-youtube";

import { shallowMount } from "@vue/test-utils";
import Description from "@/components/base/Description.vue";

Vue.use(Vuetify);
Vue.use(VueYoutube);

describe("Description.vue", () => {
  const prop = {
    title: "Title",
    videoId: "videoid",
  };

  const wrapper = shallowMount(Description, {
    propsData: {
      ...prop,
      text: ["Text content"],
    },
  });
  it("should be exist", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("should have name", () => {
    expect(wrapper.name()).toMatch("Description");
  });
  it("should have h4", () => {
    expect(wrapper.find("h4").exists()).toBe(true);
    expect(wrapper.find("h4").text()).toMatch("Title");
    expect(wrapper.find("h4").classes()).toContain("subheading");
  });

  it("should have p", () => {
    expect(wrapper.find("p").exists()).toBe(true);
  });

  it("renders props when passed", () => {
    expect(wrapper.props().title).toMatch("Title");
    expect(wrapper.props().text).toContain("Text content");
    expect(wrapper.props().videoId).toMatch("videoid");
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
  it("it should have a <v-card-text> element", () => {
    expect(wrapper.contains("v-card-text-stub")).toBe(true);
  });
  it("it should have a <v-row> element", () => {
    expect(wrapper.contains("v-row-stub")).toBe(true);
  });
  it("it should have a <v-col> element", () => {
    expect(wrapper.contains("v-col-stub")).toBe(true);
  });
});
