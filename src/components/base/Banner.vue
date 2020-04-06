<template>
  <v-parallax :height="height" :src="image">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-bold mb-4">{{ title }}</h1>
        <h3 class="subheading font-weight-light">{{ subTitle }}</h3>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: "Banner",
  props: {
    image: {
      default: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
      type: String,
    },
    title: {
      default: "",
      type: String,
    },
    subTitle: {
      default: "",
      type: String,
    },
    height: {
      default: 450,
      type: Number,
    },
  },
};
</script>

<style></style>
