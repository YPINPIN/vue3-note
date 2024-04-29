<script setup>
import { ref } from 'vue';
const greetingMessage = ref('Hello');
</script>

<template>
  <div class="container">
    <h1>hi! 我是子組件 5</h1>
    <slot :text="greetingMessage" :count="0"></slot>
  </div>
</template>
