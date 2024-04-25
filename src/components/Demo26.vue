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
    <p>父組件</p>
    <hr />
    <Demo26Child1 @some-event="someEventHandler" @btn-click="btnClickHandler" />

    <p>父組件 Count : {{ count }}</p>
    <Demo26Child2 @add-count="addCountHandler" />

    <Demo26Child3 @submit-event="submitHandler" />
  </div>
</template>
