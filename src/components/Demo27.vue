<script setup>
import { ref } from 'vue';
import Demo27Child1 from './Demo27Child1.vue';
import Demo27Child2 from './Demo27Child2.vue';
import Demo27Child3 from './Demo27Child3.vue';
import Demo27Child4 from './Demo27Child4.vue';
import Demo27Child5 from './Demo27Child5.vue';
import Demo27Child6 from './Demo27Child6.vue';
import Demo27Child7 from './Demo27Child7.vue';
import Demo27Child8 from './Demo27Child8.vue';
import Demo27Child9 from './Demo27Child9.vue';
import Demo27Child10 from './Demo27Child10.vue';

const count = ref(0);

const title = ref('Hello Vue!');

const user = ref({
  age: 0,
  firstName: 'first',
  lastName: 'last',
});

const text = ref('');

const firstName = ref('first');
const lastName = ref('last');
</script>

<template>
  <div>
    <MainTitle
      title="組件 v-model 雙向綁定"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#%E7%B5%84%E4%BB%B6-v-model-%E9%9B%99%E5%90%91%E7%B6%81%E5%AE%9A"
    />
    <p>父組件 Count : {{ count }}</p>
    <hr />
    <Demo27Child1 v-model="count" />
    <hr />
    <Demo27Child2 v-model="count" />
    <hr />

    <p>父組件 Title : {{ title }}</p>
    <hr />
    <Demo27Child3 v-model:title="title" />
    <hr />
    <Demo27Child4 v-model:title="title" />
    <hr />

    <p>父組件 User : {{ user }}</p>
    <hr />
    <Demo27Child5
      v-model="user.age"
      v-model:first-name="user.firstName"
      v-model:last-name="user.lastName"
    />
    <hr />
    <Demo27Child6
      v-model="user.age"
      v-model:first-name="user.firstName"
      v-model:last-name="user.lastName"
    />
    <hr />

    <p>父組件 Text : {{ text }}</p>
    <Demo27Child7 v-model.capitalize="text" />
    <hr />
    <Demo27Child8 v-model.capitalize="text" />
    <hr />

    <p>父組件</p>
    <hr />
    <Demo27Child9
      v-model:first-name.capitalize="firstName"
      v-model:last-name.uppercase="lastName"
    />
    <hr />
    <Demo27Child10
      v-model:first-name.capitalize="firstName"
      v-model:last-name.uppercase="lastName"
    />
  </div>
</template>
