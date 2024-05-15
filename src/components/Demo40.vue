<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Demo40Child1 from './Demo40Child1.vue';
import Demo40Child2 from './Demo40Child2.vue';
import NotFound from './NotFound.vue';

const routes = {
  '/': Demo40Child1,
  '/page2': Demo40Child2,
};

const currentPath = ref(window.location.hash);

function onHashChange() {
  console.log(window.location.hash);
  currentPath.value = window.location.hash;
}

onMounted(() => window.addEventListener('hashchange', onHashChange));
onUnmounted(() => window.removeEventListener('hashchange', onHashChange));

const currentView = computed(() => {
  return routes[currentPath.value.slice(8) || '/'] || NotFound;
});
</script>

<template>
  <div>
    <MainTitle
      title="路由"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#%E8%B7%AF%E7%94%B1"
    />
    <p>通過動態組件方式，監聽 'hashchange' 事件來實現一個簡單的路由</p>
    <a href="#/Demo40/">Page1</a> | <a href="#/Demo40/page2">Page2</a> |
    <a href="#/Demo40/non-existent-path">Broken Link</a>
    <component :is="currentView" />
  </div>
</template>
