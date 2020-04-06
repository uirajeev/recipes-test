import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import Banner from "@/components/base/Banner.vue";

Vue.use(Vuetify);

describe("Banner.vue", () => {
  const prop = {
    image: "material2.jpg",
    title: "Title",
    subTitle: "SubTitle",
    height: 400,
  };
  const wrapper = shallowMount(Banner, {
    propsData: { ...prop },
  });
  it("should be exist", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("should have name", () => {
    expect(wrapper.name()).toMatch("Banner");
  });
  it("should have h1", () => {
    expect(wrapper.find("h1").exists()).toBe(true);
    expect(wrapper.find("h1").text()).toMatch("Title");
    expect(wrapper.find("h1").classes()).toContain("display-1");
    expect(wrapper.find("h1").classes("font-weight-bold")).toBeTruthy();
  });
  it("should have h3", () => {
    expect(wrapper.find("h3").exists()).toBe(true);
    expect(wrapper.find("h3").text()).toMatch("SubTitle");
    expect(wrapper.find("h3").classes()).toContain("subheading");
    expect(wrapper.find("h3").classes("font-weight-light")).toBeTruthy();
  });
  it("renders props when passed", () => {
    expect(wrapper.props().title).toMatch("Title");
    expect(wrapper.props().subTitle).toMatch("SubTitle");
    expect(wrapper.props().height).toBe(400);
    expect(wrapper.props().image).toMatch("material2.jpg");
  });
});
