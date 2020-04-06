import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import search from "@/store/search";

import { shallowMount } from "@vue/test-utils";
import Dropdown from "@/components/core/Dropdown.vue";

Vue.use(Vuetify);
Vue.use(Vuex);

const $router = {
  push: (obj) => {
    return obj;
  },
};

describe("Dropdown.vue", () => {
  let wrapper;
  let actions;
  let store;
  beforeEach(() => {
    actions = {
      reset: jest.fn(),
      searchRecipes: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
      modules: {
        search,
      },
    });
  });
  wrapper = shallowMount(Dropdown, {
    store,
    mocks: {
      $router,
    },
    propsData: {
      items: ["item"],
      loading: false,
      error: false,
    },
  });
  it("should be exist", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("should be called", () => {
    wrapper = shallowMount(Dropdown, {
      store,
      mocks: {
        $router,
      },
      propsData: {
        items: ["item"],
        loading: false,
        error: false,
      },
    });
    expect(wrapper.vm.goToDetails("id")).toBe(undefined);
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  // it("it shoud have <v-text-field> element", () => {
  //   expect(wrapper.contains("v-text-field-stub")).toBe(true);
  // });
});
