<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
  <div>
    <MainTitle
      title="組件-單文件組件(SFC)"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#%E7%B5%84%E4%BB%B6"
    />
    <button @click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>
