<template>
  <v-card>
    <v-card-title>
      <h4 class="subheading">{{ title }}</h4>
    </v-card-title>
    <v-list dense>
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item-content>
          <v-list-item-title class="textCaps">{{ item }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "List",
  props: {
    title: {
      default: "",
      type: String,
    },
    items: {
      default: () => [],
      type: Array,
    },
  },
};
</script>

<style scoped>
.textCaps {
  text-transform: capitalize;
}
</style>

<!-- <style lang="scss" module>
// .textCaps {
//   text-transform: capitalize;
// }
// </style> -->
