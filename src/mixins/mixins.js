export default {
  computed: {
    recipeName() {
      return this.recipes.strMeal;
    },
    category() {
      return this.recipes.strCategory;
    },
    description() {
      return this.recipes.strInstructions;
    },
    preparationTitle() {
      return `Preparation Instructions of ${this.recipes.strMeal}`;
    },
    videoId() {
      if (this.recipes.strYoutube) {
        return this.recipes.strYoutube.split("v=")[1];
      }
      return null;
    },
    recipeThumb() {
      return this.recipes.strMealThumb;
    },
    recipeArea() {
      return this.recipes.strArea;
    },
    ingredients() {
      return this.getIngredients(this.recipes);
    },
    drinkAlternate() {
      return this.recipes.strDrinkAlternate;
    },
    tags() {
      return this.recipes.strTags;
    },
    source() {
      return this.recipes.strSource;
    },
  },
  methods: {
    getIngredients(recipes) {
      let ingredientsQuantity = [];
      for (let item in recipes) {
        if (item.indexOf("strIngredient") === 0 && recipes[item]) {
          let quantity = `strMeasure${item.split("strIngredient")[1]}`;
          ingredientsQuantity.push(
            `${this.recipes[item]} ${this.recipes[quantity]}`
          );
        }
        if (item.indexOf("strIngredient") === 0 && recipes[item] === "") {
          break;
        }
      }
      return ingredientsQuantity;
    },
  },
};
