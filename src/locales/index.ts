import VueI18n from 'vue-i18n';

export default new VueI18n({
  locale: process.env.LANG,
  fallbackLocale: process.env.FALLBACK_LANG,
});
