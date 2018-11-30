// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';
import en from './lang/en';
import jp from './lang/jp';
import fr from './lang/fr';
Vue.use(VueI18n);

Vue.config.productionTip = false;
const messages = {
  en: en,
  jp: jp,
  fr: fr
};

const locale = 'jp';

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale, // set locale
  messages // set locale messages
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
});
