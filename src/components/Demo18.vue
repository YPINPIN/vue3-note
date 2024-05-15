<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

const count = ref(0);
const cc = ref(null);
console.log('created---');

onBeforeMount(() => {
  console.log('onBeforeMount---', cc.value);
});
onMounted(() => {
  console.log('onMounted---', cc.value);
});
onBeforeUpdate(() => {
  console.log('onBeforeUpdate---', cc.value.innerHTML);
});
onUpdated(() => {
  console.log('onUpdated---', cc.value.innerHTML);
});
onBeforeUnmount(() => {
  console.log('onBeforeUnmount---', cc.value);
});
onUnmounted(() => {
  console.log('onUnmounted---', cc.value);
});
</script>

<template>
  <div>
    <MainTitle
      title="生命週期鉤子"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#%E7%94%9F%E5%91%BD%E9%80%B1%E6%9C%9F%E9%89%A4%E5%AD%90"
    />
    <div ref="cc">Count: {{ count }}</div>
    <button @click="count++">count + 1</button>
  </div>
</template>
