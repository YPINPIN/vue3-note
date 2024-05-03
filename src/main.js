import { createApp } from 'vue';
import App from './App.vue';
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

app.mount('#app');
