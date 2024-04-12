<script setup>
const dynamicId = 'layout'
const isButtonDisabled = true
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
}
</script>

<template>
  <div>
    <div v-bind:id="dynamicId">layout</div>
    <button :disabled="isButtonDisabled">Button</button>
    <div v-bind="objectOfAttrs">container</div>
  </div>
</template>
