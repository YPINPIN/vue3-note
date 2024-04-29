<script setup>
function onBtnClick() {
  console.log('子組件的 onBtnClick');
}
</script>

<template>
  <button @click="onBtnClick">hi! 我是子組件 2 click me</button>
</template>
