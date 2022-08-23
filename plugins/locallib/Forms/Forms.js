import Vue from "vue";
import Alert from "../Toys/Alert";
import Form, {
  refreshUser,
  TextInput,
  SelectInput,
  logout,
  logoutAxios,
  logoutSocket,
  configureSocket,
  configureAxios,
  login,
  loginAxios,
  loginSocket,
} from "./Form.vue";
import Crud from "./Crud.vue";
const Plugin = {
  install(Vue, options) {
    Vue.component("Form", Form);
    Vue.component("Crud", Crud);
    // 1. add global method or property
    Vue.myGlobalMethod = function () {
      // some logic ...
    };

    // 2. add a global asset
    Vue.directive("my-directive", {
      bind(el, binding, vnode, oldVnode) {
        // some logic ...
      },
    });

    // 3. inject some component options
    Vue.mixin({
      created() {
        Vue.prototype.$fevu.alert = (object) => {
          return this.$dialog.show(Alert, { waitForResult: true, ...object });
        };
      },
    });

    // 4. add an instance method
    Vue.prototype.$fevu = {
      refreshUser,
      TextInput,
      SelectInput,
      logout,
      logoutAxios,
      logoutSocket,
      configureSocket,
      configureAxios,
      login,
      loginAxios,
      loginSocket,
    };
  },
};
Vue.use(Plugin);
export default async function ({ app, router, store }) {}
