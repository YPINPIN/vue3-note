<script setup>
import { ref } from 'vue'
import Demo1 from './components/Demo1.vue'
import Demo2 from './components/Demo2.vue'
import Demo3 from './components/Demo3.vue'
import Demo4 from './components/Demo4.vue'
const currentTab = ref('Demo1')

const tabs = {
  Demo1,
  Demo2,
  Demo3,
  Demo4,
}
</script>

<template>
  <h1>Hello Vue3!</h1>
  <hr />
  <button
    v-for="(_, tab) in tabs"
    :key="tab"
    :class="['tab-button', { active: currentTab === tab }]"
    @click="currentTab = tab"
  >
    {{ tab }}
  </button>
  <Component :is="tabs[currentTab]" class="tab"></Component>
</template>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

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
