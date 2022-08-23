// https://github.com/logaretm/vee-validate/issues/2234#issue-484926944
// https://vee-validate.logaretm.com/v3/guide/rules.html#rules
import Vue from "vue";
import es from "vee-validate/dist/locale/es.json";

import {
  extend,
  localize,
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate";
import * as rules from "vee-validate/dist/rules.umd";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation,
  });
}
localize({
  es,
});

localize("es");
