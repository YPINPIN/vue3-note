<script setup>
// 3.4 版本前用法
defineProps({
  title: {
    required: true,
  },
});
defineEmits(['update:title']);
</script>

<template>
  <div>
    <p>hi! 我是子組件 4：</p>
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)"
    />
  </div>
</template>
