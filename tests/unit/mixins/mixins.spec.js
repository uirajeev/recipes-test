import Mixin from "@/mixins/mixins";
import { mount } from "@vue/test-utils";

const Component = {
  template: '<div class="mi-component"></div>',
  mixins: [Mixin],
  computed: {
    recipes() {
      return {
        idMeal: "52992",
        strMeal: "Soy-Glazed Meatloaves with",
        strDrinkAlternate: "alter",
        strCategory: "Beef",
        strArea: "American",
        strInstructions: "1. Preheat oven to 425 degrees.",
        strMealThumb: "o2wb6p1581005243.jpg",
        strTags: "non-vag",
        strYoutube: "watch?v=kfkghkfh",
        strIngredient1: "Potatoes",
        strMeasure1: "5",
        strSource: "",
      };
    },
  },
};

describe("MiMixin", () => {
  let wrapper;

  wrapper = mount(Component, {});

  it("should be return recipeName name", () => {
    expect(wrapper.vm.recipeName).toMatch("Soy-Glazed Meatloaves with");
  });

  it("should be return category name", () => {
    expect(wrapper.vm.category).toMatch("Beef");
  });
  it("should be return description name", () => {
    expect(wrapper.vm.description).toMatch("1. Preheat oven to 425 degrees.");
  });
  it("should be return preparationTitle name", () => {
    expect(wrapper.vm.preparationTitle).toMatch(
      "Preparation Instructions of Soy-Glazed Meatloaves with"
    );
  });
  it("should be return videoId ", () => {
    expect(wrapper.vm.videoId).toMatch("kfkghkfh");
  });
  it("should be return recipeThumb name", () => {
    expect(wrapper.vm.recipeThumb).toMatch("o2wb6p1581005243.jpg");
  });
  it("should be return recipeArea name", () => {
    expect(wrapper.vm.recipeArea).toMatch("American");
  });
  it("should be return ingredients name", () => {
    expect(wrapper.vm.ingredients).toContain("Potatoes 5");
  });
  it("should be return drinkAlternate name", () => {
    expect(wrapper.vm.drinkAlternate).toMatch("alter");
  });
  it("should be return tags name", () => {
    expect(wrapper.vm.tags).toMatch("non-vag");
  });

  it("should be return path name", () => {
    expect(wrapper.vm.source).toMatch("");
  });
});
