import Vue from "vue";
import "./plugins/axios"; // Global axios plugin
import App from "./App.vue";
import router from "./router"; // Router
import store from "./store"; // Store for state management
import vuetify from "./plugins/vuetify"; // vuetify for ui presentation
import vueDebounce from "vue-debounce"; // Debounce utility
import VueYoutube from "vue-youtube"; // Youtube video Player

Vue.config.productionTip = false;
Vue.use(vueDebounce);
Vue.use(VueYoutube);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
