<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
  <div>
    <h2>hi! 我是子組件 3</h2>
    <button @click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>
