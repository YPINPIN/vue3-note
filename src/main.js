import { createApp } from 'vue';
import App from './App.vue';
import HelloVue3 from './components/HelloVue3.vue';
import MainTitle from './components/MainTitle.vue';

const app = createApp(App);

// 組件全局註冊
app.component('HelloVue3', HelloVue3).component('MainTitle', MainTitle);

// 全局依賴注入
app.provide('appMessage', 'Hello!!');

app.mount('#app');
