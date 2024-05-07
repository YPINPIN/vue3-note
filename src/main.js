import { createApp } from 'vue';
import App from './App.vue';
import i18nPlugin from './plugins/i18n.js';
import HelloVue3 from './components/HelloVue3.vue';
import MainTitle from './components/MainTitle.vue';

const app = createApp(App);

// 組件全局註冊
app.component('HelloVue3', HelloVue3).component('MainTitle', MainTitle);

// 全局指令註冊
app.directive('timeformat', (el, binding) => {
  // 會在 mounted 和 updated 時都調用
  el.textContent = `format time: ${dayjs(binding.value).format(
    'YYYY/MM/DD HH:mm:ss'
  )}`;
});

app.directive('font', (el, binding) => {
  // binding.value 為物件
  el.style.color = binding.value.color;
  el.style.fontSize = binding.value.fontSize + 'px';
});

// 全局依賴注入
app.provide('appMessage', 'Hello!!');

// 插件
const myPlugin = {
  install(app, options) {
    // 配置此應用
    console.log('install');
    console.log('app', app);
    console.log('options', options);
  },
};
// 安裝插件
app.use(myPlugin, {
  // 可選的選項
  msg: 'hello',
});

// 安裝 i18n 插件，並傳入設定的語言及翻譯字典
app.use(i18nPlugin, {
  language: 'zh',
  dictionary: {
    en: {
      greetings: {
        welcome: 'Welcome',
        hello: 'hello',
      },
    },
    zh: {
      greetings: {
        welcome: '歡迎',
        hello: '你好',
      },
    },
  },
});

app.mount('#app');
