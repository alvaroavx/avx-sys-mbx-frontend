// https://www.npmjs.com/package/nuxt-vuex-localstorage

import lodash from "lodash";
export const state = () => ({
  object: {},
});
export const mutations = {
  update(state, obj) {
    state.object = obj;
  },
  patch(state, obj) {
    state.object = { ...lodash.chain(state.object).merge(obj).value() };
  },
  delete(state, path = false) {
    if (path) {
      state.object = { ...lodash.chain(state.object).omit(path).value() };
    } else {
      state.object = {};
    }
  },
};
