<script setup>
import { ref } from 'vue';
// 父組件傳遞的props
const props = defineProps(['api-url']);
// 紀錄列表數據
const items = ref([]);
// 模擬遠端獲取列表數據
setTimeout(() => {
  items.value = [
    { id: 1, body: 'Scoped Slots Guide', username: 'Evan You', likes: 20 },
    { id: 2, body: 'Vue Tutorial', username: 'Natalia', likes: 10 },
  ];
}, 1500);
</script>

<template>
  <h1>hi! 我是子組件 7 (列表範例)</h1>
  <ul>
    <li v-if="!items.length">Loading...</li>
    <li v-for="item in items" :key="item.id">
      <!-- 具名插槽，並使用 v-bind 綁定來傳遞所有item屬性 -->
      <slot name="item" v-bind="item" />
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 5px;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
}
li {
  padding: 5px 20px;
  margin: 10px;
  background: #fff;
}
</style>
