<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h2 class="main-title">{{ title }}</h2>
</template>

<style scoped>
.main-title {
  color: blue;
  font-weight: bold;
  border: 1px solid blue;
  text-align: center;
}
</style>
