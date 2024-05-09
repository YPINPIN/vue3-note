<script setup>
import { useCount } from '../composables/useCount.js';

const { globalCount, localCount, addGlobalCount, addLocalCount } = useCount();
</script>

<template>
  <div>
    <h2>hi! 我是子組件 4</h2>
    <p>共用 globalCount: {{ globalCount }}</p>
    <button @click="addGlobalCount()">add globalCount</button>
    <p>自己的 localCount: {{ localCount }}</p>
    <button @click="addLocalCount()">add localCount</button>
  </div>
</template>
