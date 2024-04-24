<script setup>
import { ref } from 'vue';
import Demo1 from './components/Demo1.vue';
import Demo2 from './components/Demo2.vue';
import Demo3 from './components/Demo3.vue';
import Demo4 from './components/Demo4.vue';
import Demo5 from './components/Demo5.vue';
import Demo6 from './components/Demo6.vue';
import Demo7 from './components/Demo7.vue';
import Demo8 from './components/Demo8.vue';
import Demo9 from './components/Demo9.vue';
import Demo10 from './components/Demo10.vue';
import Demo11 from './components/Demo11.vue';
import Demo12 from './components/Demo12.vue';
import Demo13 from './components/Demo13.vue';
import Demo14 from './components/Demo14.vue';
import Demo15 from './components/Demo15.vue';
import Demo16 from './components/Demo16.vue';
import Demo17 from './components/Demo17.vue';
import Demo18 from './components/Demo18.vue';
import Demo19 from './components/Demo19.vue';
import Demo20 from './components/Demo20.vue';
import Demo21 from './components/Demo21.vue';
import Demo22 from './components/Demo22.vue';
const currentTab = ref('Demo1');

const tabs = {
  Demo1,
  Demo2,
  Demo3,
  Demo4,
  Demo5,
  Demo6,
  Demo7,
  Demo8,
  Demo9,
  Demo10,
  Demo11,
  Demo12,
  Demo13,
  Demo14,
  Demo15,
  Demo16,
  Demo17,
  Demo18,
  Demo19,
  Demo20,
  Demo21,
  Demo22,
};
</script>

<template>
  <HelloVue3 />
  <hr />
  <button
    v-for="(comp, tab) in tabs"
    :key="tab"
    :class="['tab-button', { active: currentTab === tab }]"
    @click="currentTab = tab"
  >
    {{ tab }}
  </button>
  <component :is="tabs[currentTab]" class="tab"></component>
</template>

<style>
/* .demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
} */

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
