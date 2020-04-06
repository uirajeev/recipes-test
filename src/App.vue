<template>
  <v-app>
    <Header />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
const Header = () => import("@/components/base/Header");
const Footer = () => import("@/components/base/Footer");

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
