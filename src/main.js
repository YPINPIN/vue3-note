import { createApp } from 'vue';
import App from './App.vue';
import HelloVue3 from './components/HelloVue3.vue';

const app = createApp(App);

// 組件全局註冊
app.component('HelloVue3', HelloVue3);

app.mount('#app');
