<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
  <div>
    <MainTitle title="組件-單文件組件(SFC)" />
    <button @click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>
