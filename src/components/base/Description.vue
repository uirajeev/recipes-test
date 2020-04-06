<template>
  <v-card>
    <v-card-title>
      <h4 class="subheading">{{ title }}</h4>
    </v-card-title>
    <v-card-text class="font-regular">
      <v-row>
        <v-col v-if="videoId">
          <youtube :video-id="videoId" resize></youtube>
        </v-col>
        <v-col>
          <p v-for="(item, index) in text" :key="index">{{ item }}</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Description",
  props: {
    title: {
      default: "",
      type: String,
    },
    text: {
      default: () => [],
      type: Array,
    },
    videoId: {
      default: "",
      type: String,
    },
  },
};
</script>

<style></style>
