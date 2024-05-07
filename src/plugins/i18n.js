import { ref, readonly } from 'vue';

const lang = ref('en');
const localDict = ref({});
const dict = ref({});
// 語言設置
function setLang(language = 'en') {
  console.log('setLang-- ', language);
  lang.value = language;
  dict.value = localDict.value[lang.value] || {};
}

export default {
  install(
    app,
    { language = 'en', dictionary = {} } = { language: 'en', dictionary: {} }
  ) {
    // 初始設置
    localDict.value = dictionary;
    setLang(language);

    // 提供全局設置
    app.provide('$i18n', {
      lang: readonly(lang),
      setLang,
      dict: readonly(dict),
    });
  },
};
