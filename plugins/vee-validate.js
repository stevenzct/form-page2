// plugins/vee-validate.js
import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

// Install VeeValidate rules
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize( 'en', {
  messages: {
    required: 'This field is required',
    min: 'This field must have at least {length} characters',
  }
})

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);


