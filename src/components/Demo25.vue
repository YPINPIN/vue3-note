<script setup>
import { ref } from 'vue';
import Demo25Child1 from './Demo25Child1.vue';

const data = ref({
  propA: 10,
  propB: 'Peter',
  propC: 'Hello world',
  // propD: true,
  // propE: 50,
  // propF: { message: 'Welcome!!!!!' },
  propG: 'success',
  propH: function () {
    return 'Hi I am function.';
  },
});
</script>

<template>
  <div>
    <MainTitle
      title="props 校驗"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#props-%E6%A0%A1%E9%A9%97"
    />
    <p>父組件 data{{ data }}</p>
    <hr />
    <Demo25Child1 v-bind="data" />
  </div>
</template>
