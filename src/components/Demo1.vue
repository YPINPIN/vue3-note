<script setup>
const username = 'User1';
const message = () => '這是一個函數';
const html = '<span>元素會轉為純字串</span>';
</script>

<template>
  <div>
    <MainTitle
      title="文本插值"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#1-%E6%96%87%E6%9C%AC%E6%8F%92%E5%80%BC"
    />
    <h1>{{ 'Vue 文本插值' }}</h1>
    <h1>{{ 8 > 5 ? 'true' : 'false' }}</h1>
    <h1>{{ username }}</h1>
    <h1>Username: {{ username }}</h1>
    <h1 v-text="username"></h1>
    <h1>{{ message() }}</h1>
    <h1>{{ html }}</h1>
  </div>
</template>
