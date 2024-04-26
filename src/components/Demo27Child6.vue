<script setup>
defineProps(['modelValue', 'firstName', 'lastName']);
defineEmits(['update:modelValue', 'update:firstName', 'update:lastName']);
</script>

<template>
  <div>
    <p>hi! 我是子組件 6：</p>
    Age :
    <input
      type="number"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    /><br />
    FirstName :
    <input
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)"
    /><br />
    LastName :
    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)"
    />
  </div>
</template>
