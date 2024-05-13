<script setup>
import { ref } from 'vue';
const props = defineProps(['initialCount']);
const count = ref(props.initialCount);
</script>

<template>
  <div>
    <h2 class="title">MyComponent</h2>
    <p class="count">{{ count }}</p>
    <button class="btnAdd" @click="count++">add count</button>
  </div>
</template>
