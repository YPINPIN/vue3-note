<!-- 沒有使用 <script setup> 時 -->
<!-- <script>
export default {
  emits: ['someEvent', 'btnClick'],
  setup(props, ctx) {
    function onBtnClick() {
      ctx.emit('btnClick');
    }
    return { onBtnClick };
  },
  // 也可以使用解構
  // setup(props, { emit }) {
  //   //...
  // },
};
</script> -->

<!-- 在 <script setup> 中使用 -->
<script setup>
const emit = defineEmits(['someEvent', 'btnClick']);

function onBtnClick() {
  emit('btnClick');
}
</script>

<template>
  <div>
    <p>hi! 我是子組件 1：</p>
    <button @click="$emit('someEvent')">someEvent send</button>
    <button @click="onBtnClick">click me</button>
  </div>
</template>
