<template>
  <v-app-bar app color="orange accent-4">
    <div class="d-flex align-center headline font-weight-bold">
      FOOD Factory
    </div>
    <v-btn
      depressed
      v-if="path !== 'dashboard'"
      class="ml-12"
      @click="goToHome"
      color="orange"
      >Home</v-btn
    >
    <v-spacer />

    <v-spacer />
    <Search />
  </v-app-bar>
</template>

<script>
const Search = () => import("@/components/core/Search");

export default {
  name: "Header",
  components: { Search },
  computed: {
    path() {
      return this.$route.name;
    },
  },
  methods: {
    goToHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style></style>
