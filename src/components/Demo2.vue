<script setup>
const rawHtml = '<i>html元素</i>';
</script>

<template>
  <div>
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  </div>
</template>
