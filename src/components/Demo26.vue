<script setup>
import { ref } from 'vue';
import Demo26Child1 from './Demo26Child1.vue';
import Demo26Child2 from './Demo26Child2.vue';
import Demo26Child3 from './Demo26Child3.vue';

function someEventHandler() {
  console.log('someEventHandler');
}
function btnClickHandler() {
  console.log('btnClickHandler');
}

const count = ref(0);
function addCountHandler(num) {
  count.value += num;
}

function submitHandler(data) {
  console.log('data: ', data);
}
</script>

<template>
  <div>
    <MainTitle
      title="組件事件 (子傳父) & 校驗"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#%E7%B5%84%E4%BB%B6%E4%BA%8B%E4%BB%B6-%E5%AD%90%E5%82%B3%E7%88%B6"
    />
    <p>父組件</p>
    <Demo26Child1 @some-event="someEventHandler" @btn-click="btnClickHandler" />

    <hr />
    <p>父組件 Count : {{ count }}</p>
    <Demo26Child2 @add-count="addCountHandler" />

    <hr />
    <Demo26Child3 @submit-event="submitHandler" />
  </div>
</template>
