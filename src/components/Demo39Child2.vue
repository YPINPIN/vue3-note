<script setup>
const res = await fetch('https://jsonplaceholder.typicode.com/posts/2');
const posts = await res.json();
</script>

<template>
  <div>
    <h2>hi! 我是子組件 2 - script setup 頂層 await</h2>
    <div>{{ posts }}</div>
  </div>
</template>
