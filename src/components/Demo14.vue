<script setup>
import { reactive, ref, computed } from 'vue';
import Demo14Child1 from './Demo14Child1.vue';

const items = ref([
  { id: 1, message: 'Hello!' },
  { id: 2, message: 'Welcome~' },
]);

// 物件
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10',
});

const todos = reactive([
  { id: 1, message: 'Todo1', isComplete: false },
  { id: 2, message: 'Todo2', isComplete: true },
]);

// computed
const numbers = ref([1, 2, 3, 4, 5]);
const reverseNumbers = computed(() => {
  return [...numbers.value].reverse();
});
const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0);
});
</script>

<template>
  <div>
    <MainTitle
      title="v-for"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93-v-for"
    />
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.id }} : {{ item.message }}
      </li>
    </ul>
    <!-- 支持使用解構 -->
    <ul>
      <li v-for="({ id, message }, index) in items" :key="id">
        {{ index }} : {{ message }}
      </li>
    </ul>
    <hr />
    <!-- 多個元素 -->
    <ul>
      <template v-for="item in items" :key="item.id">
        <li>{{ item.message }}</li>
        <hr />
      </template>
    </ul>
    <hr />
    <!-- v-for 物件 -->
    <p>Object.keys(myObject) :{{ Object.keys(myObject) }}</p>
    <ul>
      <li v-for="(value, key, index) in myObject" :key="key">
        {{ index }}. {{ key }}: {{ value }}
      </li>
    </ul>
    <hr />
    <!-- v-for 整數值 -->
    <p v-for="n in 5" :key="n">{{ n }}</p>
    <hr />
    <!-- v-if 與 v-for -->
    <ul>
      <template v-for="todo in todos" :key="todo.id">
        <li v-if="!todo.isComplete">
          {{ todo.message }}
        </li>
      </template>
    </ul>
    <hr />
    <!-- 組件上使用 v-for -->
    <ul>
      <Demo14Child1
        v-for="item in items"
        :key="item.id"
        :message="item.message"
      />
    </ul>
    <hr />
    <!-- 使用 computed -->
    <p>numbers：{{ numbers }}</p>
    <p>reverseNumbers：</p>
    <ul>
      <li v-for="n in reverseNumbers" :key="n">{{ n }}</li>
    </ul>
    <p>evenNumbers：</p>
    <ul>
      <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    </ul>
  </div>
</template>
