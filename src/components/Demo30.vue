<script setup>
import Demo30Child1 from './Demo30Child1.vue';
import Demo30Child2 from './Demo30Child2.vue';
import Demo30Child3 from './Demo30Child3.vue';
import { myInjectionKey } from '../utility/provideKeys.js';
import { ref, provide, readonly } from 'vue';

const count = ref(0);
provide('count', count);

function addCount() {
  count.value++;
}

const number = ref(Math.random());

function changeNumber() {
  number.value = Math.random();
}

provide('number', {
  number: readonly(number), // 設定只讀
  changeNumber,
});

provide(myInjectionKey, {
  name: 'Apple',
  price: 20,
});
</script>

<template>
  <div>
    <MainTitle title="依賴注入 (Provide/Inject)" />
    <h1>父組件 count : {{ count }}</h1>
    <div>
      <button @click="addCount">Add count</button>
    </div>
    <Demo30Child1 />
    <hr />

    <h1>父組件 number : {{ number }}</h1>
    <Demo30Child2 />
    <hr />

    <h1>父組件</h1>
    <Demo30Child3 />
  </div>
</template>
