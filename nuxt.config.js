import colors from "vuetify/es5/util/colors";
const url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:6543/"
    : "https://api.platform.mbx.cl/";

// const development = process.env.NODE_ENV !== 'production'
export default {
  env: {
    // apiURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:4567/api/' : 'https://roje.cl/api/'
    apiURL: url,
  },
  axios: {
    baseURL: url,
  },
  server: {
    timing: false,
    port: process.env.PORT || 3000,
    host: "0.0.0.0",
  },
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "MBX Platform",
    title: "mbx",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    script: [
      "https://cdnjs.cloudflare.com/ajax/libs/webrtc-adapter/6.4.0/adapter.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/jquery.blockUI/2.70/jquery.blockUI.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/js/bootstrap.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/5.4.0/bootbox.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/spin.js/2.3.2/spin.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js",
    ].map((a) => ({ src: a })),

    link: [
      ...[
        "assets/css/bootstrap.min.css",
        "assets/css/all.min.css",
        "assets/css/fontawesome.css",
        "assets/css/default.css",
        "assets/css/style.css",
        "assets/css/responsive.css",
      ].map((a) => ({ rel: "stylesheet", href: a })),
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico?2" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/locallib/localStorage.js",
    "@/plugins/locallib/vuetify.js",
    "@/plugins/locallib/Forms/Forms.js",
    { src: "@/plugins/locallib/vuetify-dialog.js", ssr: false },
    "@/plugins/locallib/vee-validate.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "nuxt-vuex-localstorage",

    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      themes: {
        dark: {
          primary: colors.grey.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  loading: {
    color: "blue",
    height: "1px",
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        exclude: /(node_modules)/,
        options: {
          fix: true,
        },
      });
      config.resolve = config.resolve || {};
      config.resolve.symlinks = false;
    },
  },
};
