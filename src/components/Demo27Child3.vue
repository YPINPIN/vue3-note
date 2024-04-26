<script setup>
const title = defineModel('title', { required: true });
</script>

<template>
  <div>
    <p>hi! 我是子組件 3：</p>
    <input type="text" v-model="title" />
  </div>
</template>
