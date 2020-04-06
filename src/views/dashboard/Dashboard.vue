<template>
  <div class="home">
    <Banner
      :title="recipeName"
      :subTitle="recipeArea"
      :image="recipeThumb"
      v-if="recipes"
    ></Banner>
    <v-container v-if="!recipes">
      <v-row>
        <v-col>
          <Loader />
        </v-col>
      </v-row>
    </v-container>
    <v-container class="grey lighten-5 mt-5" v-else>
      <v-row>
        <v-col>
          <Description
            :text="[description]"
            :title="preparationTitle"
          ></Description>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <List title="Ingredients" :items="ingredients"></List>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

const Banner = () => import("@/components/base/Banner");
const Description = () => import("@/components/base/Description");
const List = () => import("@/components/base/List");
const Loader = () => import("@/components/base/Loader");
import Mixin from "@/mixins/mixins";

export default {
  name: "Dashboaed",
  mixins: [Mixin],
  components: {
    Banner,
    Description,
    List,
    Loader,
  },
  computed: {
    ...mapGetters("dashboard", {
      recipes: "getRecipes",
    }),
  },
  methods: {
    ...mapActions("dashboard", ["getRendomRecipes"]),
  },
  mounted() {
    this.getRendomRecipes();
  },
};
</script>
