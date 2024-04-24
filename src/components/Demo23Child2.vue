<script setup>
const props = defineProps({
  likes: Number,
});
console.log('likes', props.likes);
</script>

<template>
  <div>
    <h2>hi! 我是子組件 2</h2>
    <p>{{ props }}</p>
  </div>
</template>
