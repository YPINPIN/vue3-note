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
onUnmounted(() => {
  window.removeEventListener('hashchange', onHashChange);
  window.location.hash = '';
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound;
});
</script>

<template>
  <div>
    <MainTitle title="路由" />
    <p>通過動態組件方式，監聽 'hashchange' 事件來實現一個簡單的路由</p>
    <a href="#/">Page1</a> | <a href="#/page2">Page2</a> |
    <a href="#/non-existent-path">Broken Link</a>
    <component :is="currentView" />
  </div>
</template>
