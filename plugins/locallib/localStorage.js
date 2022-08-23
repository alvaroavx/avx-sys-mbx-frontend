import Vue from "vue";
import _ from "lodash";
import moment from "moment";

Object.defineProperty(Vue.prototype, "_", { value: _ });
Object.defineProperty(Vue.prototype, "moment", { value: moment });
export default ({ store, app: { $axios } }) => {
  if (!Vue.prototype.$ls) {
    Object.defineProperty(Vue.prototype, "$ls", {
      value: {
        get(path, defaultValue) {
          if (path) {
            return _.get(store.state.localStorage.object, path, defaultValue);
          } else {
            return store.state.localStorage.object;
          }
        },
        set(obj) {
          store.commit("localStorage/update", obj);
        },
      },
    });
  }
};
