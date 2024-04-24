<script setup>
const props = defineProps({
  id: Number,
  title: String,
});
console.log('props', props);
</script>

<template>
  <div>
    <h2>hi! 我是子組件 6</h2>
    <p>{{ props }}</p>
  </div>
</template>
