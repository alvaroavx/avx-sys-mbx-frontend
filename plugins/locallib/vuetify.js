import es from "vuetify/es5/locale/es";
import Vue from "vue";
import Vuetify from "vuetify/dist/vuetify";

// eslint-disable-next-line no-unused-vars

// import colors from 'vuetify/es5/util/colors'
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
// import 'typeface-roboto/index.css' // Ensure you are using css-loader
import "@/assets/variables.scss";
import "vuetify/dist/vuetify.min.css";
// need instance of vuetify, for example

// import 'vuetify-dialog/dist/vuetify-dialog.css'
const vuetify = new Vuetify({
  lang: {
    locales: { es },
    current: "es",
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#2698e8",
      },
    },
  },
});
Vue.use(Vuetify);
export default (ctx) => {
  ctx.app.vuetify = vuetify;
  ctx.$vuetify = vuetify.framework;
};
export { vuetify };
