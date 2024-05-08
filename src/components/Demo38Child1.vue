<script setup>
import { ref } from 'vue';
const show = ref(false);
</script>

<template>
  <div>
    <h2>hi! 我是子組件 1</h2>
    <button @click="show = !show">toggle A & B</button>
    <Teleport to="#wrapper">
      <div v-if="show">我是子組件 1 的 A</div>
    </Teleport>
    <Teleport to="#wrapper">
      <div v-if="show">我是子組件 1 的 B</div>
    </Teleport>
  </div>
</template>
