<script setup>
import Demo28Child3_1 from './Demo28Child3_1.vue';
// 被聲明過的 props 不會繼續透傳給深層組件
const props = defineProps(['count']);
</script>

<template>
  <Demo28Child3_1 />
</template>
