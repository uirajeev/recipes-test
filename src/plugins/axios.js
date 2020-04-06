"use strict";

import Vue from "vue";
import axios from "axios";
import VueIziToast from "vue-izitoast"; // Global error message

import "izitoast/dist/css/iziToast.min.css";

Vue.use(VueIziToast, { error: { position: "bottomCenter" } });
const TostaVm = new Vue();

// Full config:  https://github.com/axios/axios#request-config

let config = {
  baseURL: process.env.VUE_APP_BASE_URL || process.env.apiUrl || "",
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Global error message
    TostaVm.$toast.error(
      "Something went wrong, unable to fetch data!",
      "Error"
    );
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Global error message
    TostaVm.$toast.error(
      "Something went wrong, unable to fetch data!",
      "Error"
    );
    return Promise.reject(error);
  }
);

Plugin.install = function (Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
