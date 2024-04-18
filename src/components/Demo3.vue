<script setup>
const vue_url = 'https://vuejs.org/'
const google_url = 'https://www.google.com/'
const isButtonDisabled = true
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
}
</script>

<template>
  <div>
    <h1><a v-bind:href="vue_url">Vue</a></h1>
    <h1><a :href="google_url">Google</a></h1>
    <button :disabled="isButtonDisabled">Button</button>
    <div v-bind="objectOfAttrs">container</div>
  </div>
</template>
