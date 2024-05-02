<script setup>
import { useMouse } from '../composables/useMouse.js';
import { useFetch } from '../composables/useFetch.js';
import { ref, computed } from 'vue';

const { x, y } = useMouse();

const baseUrl = 'https://jsonplaceholder.typicode.com/photos/';
const id = ref(1);
const url = computed(() => {
  return `${baseUrl}${id.value}`;
});

// 接收 ref，當 id 改變時重新fetch
const { data, error } = useFetch(url);

// 也可以接收一個 getter 函數
// const { data, error } = useFetch(() => `${baseUrl}${id.value}`);
</script>

<template>
  <div>
    <MainTitle title="組合式函數 (Composables)" />
    <h3>Mouse position is at: {{ x }}, {{ y }}</h3>
    <hr />
    <button @click="id++">next data</button>
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="data">
      Data loaded:
      <pre>{{ data }}</pre>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>
