<script setup>
// 透傳的 attribute 符合聲明，也可以作為 `props` 傳入深層組件
const props = defineProps(['name']);
</script>
<template>
  <h1>hi {{ name }}! 我是深層組件</h1>
</template>
