<script setup>
const count = defineModel();
// 更改 .value值
function addCount() {
  count.value++;
}
</script>

<template>
  <div>
    <p>hi! 我是子組件 1：</p>
    <button @click="addCount">count + 1</button>
    <!-- 也可以用 v-model 綁定到 input 元素上 -->
    <input type="number" v-model="count" />
  </div>
</template>
