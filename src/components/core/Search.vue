<template>
  <div class="searchBox">
    <v-text-field
      v-if="path !== 'detail'"
      class="mt-6"
      background-color="white"
      color="gray"
      rounded
      placeholder="Search for your food..."
      dense
      outlined
      v-debounce:300="search"
      v-model="searchString"
    ></v-text-field>
    <Dropdown
      v-if="searchString.length"
      class="dropDwon"
      :items="recipeNames"
      :loading="isLoading"
      :error="isError"
      @clearSearch="clearSearchText"
    />
  </div>
</template>

<script>
import Mixin from "@/mixins/mixins";
import { mapGetters } from "vuex";
const Dropdown = () => import("@/components/core/Dropdown");

export default {
  name: "Search",
  mixins: [Mixin],
  data() {
    return {
      searchString: "",
    };
  },
  components: {
    Dropdown,
  },
  computed: {
    ...mapGetters("search", {
      recipes: "getRecipes",
      isLoading: "isLoading",
      isError: "isError",
    }),

    recipeNames() {
      if (this.recipes) {
        return this.recipes.slice(0, 8).map((item) => ({
          id: item.idMeal,
          name: item.strMeal,
          area: item.strArea,
        }));
      }
      return [];
    },
    path() {
      return this.$route.name;
    },
  },
  methods: {
    search() {
      if (!this.searchString.length) {
        this.$store.dispatch("search/reset", this.searchString);
        return;
      }
      this.$store.dispatch("search/searchRecipes", this.searchString);
    },
    clearSearchText() {
      this.searchString = "";
    },
  },
};
</script>

<style scoped>
.searchBox {
  position: relative;
}
.dropDwon {
  position: absolute;
  top: 70px;
  right: 0;
}
</style>

<!-- <style lang="scss" module>
.searchBox {
  position: relative;
  .dropDwon {
    position: absolute;
    top: 70px;
    right: 0;
  }
}
</style> -->
