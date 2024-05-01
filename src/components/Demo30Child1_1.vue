<script setup>
import { inject } from 'vue';
// 注入依賴
const count = inject('count');
const appMessage = inject('appMessage');
// 設置默認值
const text = inject('text', 'default text');
const data = inject(
  'data',
  () => ({
    key: 1,
    text: 'Welcome~~~~~',
  }),
  true
);
</script>

<template>
  <h3>hi! 我是深層組件 1</h3>
  <p>count : {{ count }}</p>
  <p>appMessage : {{ appMessage }}</p>
  <p>text : {{ text }}</p>
  <p>data : {{ data }}</p>
</template>
