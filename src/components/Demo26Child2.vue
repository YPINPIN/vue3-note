<script setup>
const emit = defineEmits(['addCount']);

function onAddCountClick(count) {
  emit('addCount', count);
}
</script>

<template>
  <div>
    <p>hi! 我是子組件 2：</p>
    <button @click="$emit('addCount', 1)">add count 1</button>
    <button @click="onAddCountClick(2)">add count 2</button>
  </div>
</template>
