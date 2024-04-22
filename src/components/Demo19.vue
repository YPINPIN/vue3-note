<script setup>
import { ref } from 'vue';
import Demo19Child1 from './Demo19Child1.vue';
import Demo19Child2 from './Demo19Child2.vue';
const title1 = ref(null);

function showLog() {
  console.log(title1.value);
  console.log(title1.value.innerHTML);
}

const child1 = ref(null);
function showChild1() {
  console.log(child1.value);
  console.log(child1.value.name);
  console.log(child1.value.age);
  child1.value.show();
}

const child2 = ref(null);
function showChild2() {
  console.log(child2.value);
  console.log(child2.value.name);
  console.log(child2.value.age);
  child2.value.show();
}
</script>

<template>
  <div>
    <!-- 普通的DOM標籤上 -->
    <h1 ref="title1">Hello~~</h1>
    <button @click="showLog">log</button>
    <hr />
    <!-- 組件上使用 -->
    <Demo19Child1 ref="child1" />
    <button @click="showChild1">log child1</button>
    <Demo19Child2 ref="child2" />
    <button @click="showChild2">log child2</button>
  </div>
</template>
