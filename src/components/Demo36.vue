<script setup>
import { ref } from 'vue';

const items = ref([1, 2, 3, 4, 5, 6]);
let num = 7;

const items2 = ref([1, 2, 3, 4, 5, 6]);
let num2 = 7;

function addItem() {
  let random = Math.round(Math.random() * items.value.length);
  items.value.splice(random, 0, num);
  num++;
}
function delItem() {
  let random = Math.floor(Math.random() * items.value.length);
  items.value.splice(random, 1);
}

function addItem2() {
  let random = Math.round(Math.random() * items2.value.length);
  items2.value.splice(random, 0, num2);
  num2++;
}
function delItem2() {
  let random = Math.floor(Math.random() * items2.value.length);
  items2.value.splice(random, 1);
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function change() {
  let arr = shuffle([...items2.value]);
  items2.value = arr;
}
</script>

<template>
  <div>
    <MainTitle
      title="過渡動畫 (transition-group)"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#%E9%81%8E%E6%B8%A1%E5%8B%95%E7%95%AB-transition-group"
    />
    <button @click="addItem">在任意位置添加一個新 item</button>
    <button @click="delItem">刪除任意位置上的一個 item</button>
    <transition-group name="list" tag="ul">
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </transition-group>
    <hr />

    <button @click="addItem2">在任意位置添加一個新 item</button>
    <button @click="delItem2">刪除任意位置上的一個 item</button>
    <button @click="change">隨機調換 item</button>
    <transition-group name="list2" tag="ul">
      <li v-for="item in items2" :key="item">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<style scoped>
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

/* 添加移動過渡動畫 */
.list2-enter-from,
.list2-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/* .list2-move 為對移動中的元素應用的過渡 */
.list2-move,
.list2-enter-active,
.list2-leave-active {
  transition: all 0.5s ease;
}
/* 確保元素離開時從布局流中刪除，以便正確的計算移動動畫 */
.list2-leave-active {
  position: absolute;
}
</style>
