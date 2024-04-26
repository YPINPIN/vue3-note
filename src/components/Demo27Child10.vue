<script setup>
// 3.4 版本前用法
const props = defineProps({
  firstName: String,
  lastName: String,
  firstNameModifiers: { default: () => ({}) },
  lastNameModifiers: { default: () => ({}) },
});
defineEmits(['update:firstName', 'update:lastName']);
</script>

<template>
  <div>
    <p>hi! 我是子組件 10：</p>
    <p>firstNameModifiers : {{ firstNameModifiers }}</p>
    <p>lastNameModifiers : {{ lastNameModifiers }}</p>
  </div>
</template>
