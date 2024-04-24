<!-- 在 <script setup> 中使用 -->
<!-- <script setup>
const props = defineProps(['greetingMessage']);
console.log(props.greetingMessage);
</script> -->

<!-- 沒有使用 <script setup> 時 -->
<!-- <script>
export default {
  props: ['greetingMessage'],
  setup(props) {
    console.log(props.greetingMessage);
  },
};
</script> -->

<!-- 使用物件形式 -->
<script setup>
const props = defineProps({
  greetingMessage: String,
});
console.log(props.greetingMessage);
</script>

<template>
  <div>
    <h2>hi! 我是子組件 1</h2>
    <p>{{ greetingMessage }}</p>
  </div>
</template>
