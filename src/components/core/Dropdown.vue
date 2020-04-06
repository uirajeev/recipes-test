<template>
  <v-card
    class="mx-auto"
    max-width="500"
    min-width="220"
    v-if="(loading || items.length) && !error"
  >
    <v-list shaped>
      <v-list-item-group>
        <v-list-item-content v-if="loading">
          <v-list-item>
            <v-list-item-title>Loading...</v-list-item-title>
          </v-list-item>
        </v-list-item-content>

        <template v-for="(item, i) in items">
          <v-divider v-if="i > 0" :key="`divider-${i}`"></v-divider>
          <v-list-item :key="`item-${i}`">
            <template>
              <v-list-item-content @click="goToDetails(item.id)">
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.area }}</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  name: "Dropdown",
  props: {
    items: {
      default: () => [],
      type: Array,
    },
    loading: {
      default: false,
      type: Boolean,
    },
    error: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    goToDetails(id) {
      this.$emit("clearSearch");
      this.$store.dispatch("search/select", id);
      this.$nextTick(() => {
        this.$router.push({ path: `detail/${id}` });
      });
    },
  },
};
</script>
