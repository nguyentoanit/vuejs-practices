import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '../store';
import en from './en';
import jp from './jp';
import fr from './fr';
Vue.use(VueI18n);

const locale = store.getters.getLocale;
console.log(store);
const messages = {
  en: en,
  jp: jp,
  fr: fr
};

const i18n = new VueI18n({
  locale,
  messages
});

export default i18n;
