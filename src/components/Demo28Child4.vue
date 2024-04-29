<script setup>
// 禁用繼承 attribute
defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div class="btn-wrapper">
    <!-- 綁定所有透傳 attribute -->
    <button class="btn" v-bind="$attrs">hi! 我是子組件 4 click me</button>
  </div>
</template>
