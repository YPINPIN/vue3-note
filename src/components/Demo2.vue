<script setup>
const rawHtml = '<i>html元素</i>';
</script>

<template>
  <div>
    <MainTitle
      title="插入原始 HTML"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#2-%E5%8E%9F%E5%A7%8B-html"
    />
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  </div>
</template>
