<script setup>
// 3.4 版本前用法
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

function addCount() {
  let newCount = props.modelValue + 1;
  emit('update:modelValue', newCount);
}
</script>

<template>
  <div>
    <p>hi! 我是子組件 2：</p>
    <button @click="addCount">count + 1</button>
    <!-- 因為不能直接修改 props，所以要監聽input事件 -->
    <input
      type="number"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
