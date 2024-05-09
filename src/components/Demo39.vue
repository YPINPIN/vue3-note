<script setup>
import { defineAsyncComponent, ref, onErrorCaptured } from 'vue';
import Demo39Child1 from './Demo39Child1.vue';
import Demo39Child2 from './Demo39Child2.vue';
// 異步組件
const Demo39Child3 = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    // 模擬從服務器獲取組件
    setTimeout(() => {
      // 返回獲取到的組件
      resolve(import('./Demo39Child3.vue'));
    }, 2000);
  });
});
const Demo39Child4 = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    // 模擬從服務器獲取組件
    setTimeout(() => {
      // 返回獲取到的組件
      resolve(import('./Demo39Child4.vue'));
    }, 1000);
  });
});

const show = ref(true);

onErrorCaptured((err) => {
  console.log('onErrorCaptured: ', err);
});
</script>

<template>
  <div>
    <MainTitle title="Suspense (實驗性功能)" />
    <button @click="show = !show">change</button>
    <Suspense timeout="200">
      <!-- #default插槽內容：具有深層異步依賴的組件 -->
      <template #default>
        <div v-if="show">
          <Demo39Child1 />
          <Demo39Child3 />
        </div>
        <div v-else>
          <Demo39Child2 />
          <Demo39Child4 />
        </div>
      </template>

      <!-- #fallback插槽：加載中內容 -->
      <template #fallback>
        <div>
          <span>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
