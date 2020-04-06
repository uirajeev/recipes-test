<template>
  <div class="details">
    <Banner
      :title="recipeName"
      :subTitle="recipeArea"
      :image="recipeThumb"
      :height="200"
      v-if="recipes"
    />

    <v-container class="grey lighten-5 mt-5" v-if="recipes">
      <v-row>
        <v-col>
          <v-chip v-if="tags" class="deep-orange--text text--accent-4 mr-4"
            >Tags: {{ tags }}</v-chip
          >
          <v-chip
            v-if="recipeArea"
            class="deep-orange--text text--accent-4 mr-4"
            >Area: {{ recipeArea }}</v-chip
          >
          <v-chip v-if="category" class="deep-orange--text text--accent-4 mr-4"
            >Category: {{ category }}
          </v-chip>
          <v-chip
            v-if="drinkAlternate"
            class="deep-orange--text text--accent-4 mr-4"
            >Drink Alternate: {{ drinkAlternate }}
          </v-chip>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Description
            :text="[description]"
            :title="preparationTitle"
            :videoId="videoId"
          ></Description>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <List title="Ingredients" :items="ingredients"></List>
        </v-col>
      </v-row>
      <v-row v-if="source">
        <v-col> Source: {{ source }} </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Mixin from "@/mixins/mixins";
import { mapGetters } from "vuex";

const Banner = () => import("@/components/base/Banner");
const Description = () => import("@/components/base/Description");
const List = () => import("@/components/base/List");

export default {
  name: "Detail",
  components: {
    Banner,
    Description,
    List,
  },
  mixins: [Mixin],
  computed: {
    ...mapGetters("search", {
      recipes: "getSeleted",
    }),
  },
  beforeDestroy() {
    this.$store.dispatch("search/clearSelected");
  },
};
</script>
