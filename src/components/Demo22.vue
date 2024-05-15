<script setup>
import { ref } from 'vue';
import Demo22Child1 from './Demo22Child1.vue';
import Demo22Child2 from './Demo22Child2.vue';

const currentTab = ref('Demo22Child1');
const tabs = {
  Demo22Child1: { name: '子組件 1', comp: Demo22Child1 },
  Demo22Child2: { name: '子組件 2', comp: Demo22Child2 },
};
</script>

<template>
  <div>
    <MainTitle
      title="動態組件"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#%E5%8B%95%E6%85%8B%E7%B5%84%E4%BB%B6"
    />
    <div class="tab-wrapper">
      <button
        v-for="(data, key) in tabs"
        :key="key"
        :class="['tab-button', { active: currentTab === key }]"
        @click="currentTab = key"
      >
        {{ data.name }}
      </button>
    </div>
    <component :is="tabs[currentTab].comp" class="tab"></component>
  </div>
</template>
