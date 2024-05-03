<script setup>
import Demo33Child1 from './Demo33Child1.vue';
import Demo33Child2 from './Demo33Child2.vue';
import { ref } from 'vue';
const vFocus = {
  mounted: (el) => el.focus(),
};

const count = ref(0);

const vMyDirective = {
  //在綁定元素的 attribute 前或事件監聽器應用前調用
  created(el, binding, vnode, prevVnode) {
    console.log('created');
  },
  //在元素被插入到 DOM 前調用
  beforeMount(el, binding, vnode, prevVnode) {
    console.log('beforeMount');
  },
  //在綁定元素的父組件及所有的子節點都掛載完成後調用
  mounted(el, binding, vnode, prevVnode) {
    console.log('mounted');
    console.log(binding);
    el.textContent = `vMyDirective - Double Count: ${count.value * 2}`;
  },
  //綁定元素的父組件更新前調用
  beforeUpdate(el, binding, vnode, prevVnode) {
    console.log('beforeUpdate');
  },
  //在綁定元素的父組件及所有的子節點都更新後調用
  updated(el, binding, vnode, prevVnode) {
    console.log('updated');
    console.log(binding);
    el.textContent = `vMyDirective - Double Count: ${count.value * 2}`;
  },
  //綁定元素的父組件卸載前調用
  beforeUnmount(el, binding, vnode, prevVnode) {
    console.log('beforeUnmount');
  },
  //綁定元素的父組件卸載後調用
  unmounted(el, binding, vnode, prevVnode) {
    console.log('unmounted');
  },
};

const time = ref(new Date());
function getNewTime() {
  time.value = new Date();
}
</script>

<template>
  <div>
    <MainTitle title="自定義指令" />
    <!-- vFocus 可以用 v-focus 形式使用 -->
    自動 Foucs：<input type="text" v-focus />
    <hr />

    <h2>Count: {{ count }}</h2>
    <h2 v-my-directive:foo.bar="count"></h2>
    <button @click="count++">add count</button>
    <hr />

    <h2>now time: {{ time }}</h2>
    <h2 v-timeformat="time"></h2>
    <button @click="getNewTime">get new time</button>
    <hr />

    <p v-font="{ color: 'blue', fontSize: 30 }">Hello~~ welcome!!!!!</p>
    <p v-font="{ color: 'darkgreen', fontSize: 16 }">HA!HA!HA!HA!</p>
    <hr />

    <!-- 組件上使用指令 -->
    <Demo33Child1 v-font="{ color: 'blue', fontSize: 30 }" />
    <Demo33Child2 v-font="{ color: 'blue', fontSize: 30 }" />
  </div>
</template>
