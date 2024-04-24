<script setup>
const props = defineProps({
  isPublished: Boolean,
});
console.log('isPublished', props.isPublished);
</script>

<template>
  <div>
    <h2>hi! 我是子組件 3</h2>
    <p>{{ props }}</p>
  </div>
</template>
