<script setup>
const props = defineProps({
  author: Object,
});
console.log('author', props.author);
</script>

<template>
  <div>
    <h2>hi! 我是子組件 5</h2>
    <p>{{ props }}</p>
  </div>
</template>
