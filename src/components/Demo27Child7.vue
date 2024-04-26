<script setup>
const [modal, modifiers] = defineModel({
  set(value) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  },
});

console.log(modifiers); // { capitalize: true }
</script>

<template>
  <div>
    <p>hi! 我是子組件 7：</p>
    <input type="text" v-model="modal" />
  </div>
</template>
