import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import vueDebounce from "vue-debounce";
import Mixin from "@/mixins/mixins";
import search from "@/store/search";

import { shallowMount } from "@vue/test-utils";
import Search from "@/components/core/Search.vue";
import Dropdown from "@/components/core/Dropdown.vue";

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(vueDebounce);

const $route = {
  name: "dashboard",
};
const $router = {
  push: (obj) => {
    return obj;
  },
};

describe("Search.vue", () => {
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
  wrapper = shallowMount(Search, {
    stubs: {
      Dropdown,
    },
    store,
    mixins: [Mixin],
    mocks: {
      $route,
      $router,
    },
    propsData: {
      searchString: "Search",
    },
  });
  it("should be exist", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("should be return path name", () => {
    wrapper = shallowMount(Search, {
      mocks: {
        $route,
      },
    });
    expect(wrapper.vm.path).toMatch("dashboard");
  });
  it("should be return path name", () => {
    wrapper = shallowMount(Search, {
      stubs: {
        Dropdown,
      },
      store,
      mixins: [Mixin],
      mocks: {
        $route,
        $router,
      },

      propsData: {
        searchString: "Search",
      },
    });
    expect(wrapper.vm.recipeNames).toStrictEqual([]);
  });
  it("should be called", () => {
    wrapper = shallowMount(Search, {
      stubs: {
        Dropdown,
      },
      store,
      mixins: [Mixin],
      mocks: {
        $route,
        $router,
      },
      propsData: {
        searchString: "Search",
      },
    });
    expect(wrapper.vm.search()).toBe(undefined);
  });
  it("should be called", () => {
    expect(wrapper.vm.clearSearchText()).toBe(undefined);
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("it shoud have <v-text-field> element", () => {
    expect(wrapper.contains("v-text-field-stub")).toBe(true);
  });
});
