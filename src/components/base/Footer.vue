<template>
  <v-footer color="orange darken-1" padless>
    <v-row justify="center" no-gutters>
      <v-col class="orange darken-2 py-4 text-center white--text" cols="12">
        Copyright &copy; {{ new Date().getFullYear() }} —
        <strong>FOOD Factory</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
