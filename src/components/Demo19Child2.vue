<script setup>
import { ref } from 'vue';
const name = ref('小美');
const age = ref(20);
function show() {
  console.log('哈哈哈');
}
// 使用 defineExpose 將組件中的數據交給外部
defineExpose({ name, age, show });
</script>

<template>
  <div>
    <h2>hi! 我是子組件 2</h2>
    <p>name : {{ name }}, age : {{ age }}</p>
  </div>
</template>
