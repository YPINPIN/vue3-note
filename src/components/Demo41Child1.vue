<script setup>
import { store } from '../utility/store.js';
</script>

<template>
  <div>
    <h2>hi! 我是子組件 1</h2>
    <p>共用 count: {{ store.count }}</p>
    <button @click="store.increment()">add count</button>
  </div>
</template>
