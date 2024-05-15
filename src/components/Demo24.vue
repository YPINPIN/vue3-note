<script setup>
import { ref } from 'vue';
import Demo24Child1 from './Demo24Child1.vue';
import Demo24Child2 from './Demo24Child2.vue';
import Demo24Child3 from './Demo24Child3.vue';
import Demo24Child4 from './Demo24Child4.vue';

const message = ref('Hello');

const data = ref({
  msg: 'Hello2',
});

const initialCounter = ref(10);
const data2 = ref({
  name: 'Peter',
  age: 18,
  books: {
    book1: 'Vue',
    book2: 'Pinia',
  },
});

const title = ref('Harry Potter');
</script>

<template>
  <div>
    <MainTitle
      title="props 單向數據流"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#%E5%96%AE%E5%90%91%E6%95%B8%E6%93%9A%E6%B5%81"
    />
    <p>父組件 message：{{ message }}</p>
    <label>父組件的message：</label>
    <input type="text" v-model="message" />

    <Demo24Child1 :message="message" />
    <hr />

    <p>父組件 data：{{ data }}</p>
    <label>父組件的data.msg：</label>
    <input type="text" v-model="data.msg" />

    <Demo24Child2 :data="data" />
    <hr />

    <p>父組件 initialCounter：{{ initialCounter }}</p>
    <label>父組件的initialCounter：</label>
    <input type="number" v-model="initialCounter" />
    <p>父組件 data2：{{ data2 }}</p>
    <label>父組件的data2.books.book1：</label>
    <input type="text" v-model="data2.books.book1" />

    <Demo24Child3 :initialCounter="initialCounter" :data2="data2" />
    <hr />

    <p>父組件 title：{{ title }}</p>
    <label>父組件的title：</label>
    <input type="text" v-model="title" />

    <Demo24Child4 :title="title" />
  </div>
</template>
