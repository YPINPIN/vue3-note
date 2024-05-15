<script setup>
const vue_url = 'https://vuejs.org/';
const google_url = 'https://www.google.com/';
const isButtonDisabled = true;
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
};
</script>

<template>
  <div>
    <MainTitle
      title="v-bind 綁定"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#v-bind-%E5%B1%AC%E6%80%A7attribute%E7%B6%81%E5%AE%9A"
    />
    <h1><a v-bind:href="vue_url">Vue</a></h1>
    <h1><a :href="google_url">Google</a></h1>
    <button :disabled="isButtonDisabled">Button</button>
    <div v-bind="objectOfAttrs">container</div>
  </div>
</template>
