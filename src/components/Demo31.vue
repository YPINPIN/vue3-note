<script setup>
import { defineAsyncComponent, onUnmounted, ref } from 'vue';
import LoadingComponent from './LoadingComponent.vue';
import ErrorComponent from './ErrorComponent.vue';
const show = ref(false);
// 異步組件
const AsyncComponent1 = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    // 模擬從服務器獲取組件
    setTimeout(() => {
      // 返回獲取到的組件
      resolve(import('./Demo31Child1.vue'));
    }, 1000);
  });
});

// ES 模組動態導入
const AsyncComponent2 = defineAsyncComponent(() =>
  import('./Demo31Child2.vue')
);

// 異步組件高級選項設置
const AsyncComponent3 = defineAsyncComponent({
  // 加載函數
  loader: () => {
    return new Promise((resolve, reject) => {
      // 模擬加載各種狀態
      let num = Math.random();
      let state = num > 0.6 ? 'load' : num > 0.3 ? 'error' : 'timeout';
      console.log('state', state);
      setTimeout(() => {
        switch (state) {
          case 'load':
            resolve(import('./Demo31Child3.vue'));
            break;
          case 'error':
            reject(new Error('加載失敗'));
            break;
          case 'timeout':
            break;
        }
      }, 1000);
    });
  },
  // 若加載超過 delay 時間時顯示的組件
  loadingComponent: LoadingComponent,
  // 展示 loadingComponent 前的延遲時間，默認為 200ms
  delay: 200,
  // 加載失敗後展示的組件
  errorComponent: ErrorComponent,
  // 如果提供 timeout 時間限制，超時時也會顯示配置的加載失敗組件，默認值為 Infinity
  timeout: 3000,
});
</script>

<template>
  <div>
    <MainTitle title="異步組件" />
    <button @click="show = !show">點我取得異步組件</button>
    <AsyncComponent1 v-if="show" />
    <hr />
    <AsyncComponent2 />
    <hr />
    <AsyncComponent3 />
  </div>
</template>
