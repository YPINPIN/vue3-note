<script setup>
const props = defineProps({
  list: Array,
});
console.log('list', props.list);
</script>

<template>
  <div>
    <h2>hi! 我是子組件 4</h2>
    <p>{{ props }}</p>
  </div>
</template>
