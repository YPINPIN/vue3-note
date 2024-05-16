<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
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
import Demo23 from './components/Demo23.vue';
import Demo24 from './components/Demo24.vue';
import Demo25 from './components/Demo25.vue';
import Demo26 from './components/Demo26.vue';
import Demo27 from './components/Demo27.vue';
import Demo28 from './components/Demo28.vue';
import Demo29 from './components/Demo29.vue';
import Demo30 from './components/Demo30.vue';
import Demo31 from './components/Demo31.vue';
import Demo32 from './components/Demo32.vue';
import Demo33 from './components/Demo33.vue';
import Demo34 from './components/Demo34.vue';
import Demo35 from './components/Demo35.vue';
import Demo36 from './components/Demo36.vue';
import Demo37 from './components/Demo37.vue';
import Demo38 from './components/Demo38.vue';
import Demo39 from './components/Demo39.vue';
import Demo40 from './components/Demo40.vue';
import Demo41 from './components/Demo41.vue';

const tabs = {
  Demo1: { name: '文本插值', comp: Demo1, route: '#/Demo1' },
  Demo2: { name: '插入原始 HTML', comp: Demo2, route: '#/Demo2' },
  Demo3: { name: 'v-bind 綁定', comp: Demo3, route: '#/Demo3' },
  Demo4: { name: 'ref & reactive', comp: Demo4, route: '#/Demo4' },
  Demo5: {
    name: 'shallowRef & shallowReactive',
    comp: Demo5,
    route: '#/Demo5',
  },
  Demo6: { name: 'readonly', comp: Demo6, route: '#/Demo6' },
  Demo7: { name: 'computed', comp: Demo7, route: '#/Demo7' },
  Demo8: { name: 'watch', comp: Demo8, route: '#/Demo8' },
  Demo9: { name: 'watchEffect', comp: Demo9, route: '#/Demo9' },
  Demo10: { name: '綁定 class', comp: Demo10, route: '#/Demo10' },
  Demo11: { name: '綁定 class (陣列 & 組件)', comp: Demo11, route: '#/Demo11' },
  Demo12: { name: '綁定 style', comp: Demo12, route: '#/Demo12' },
  Demo13: { name: 'v-if & v-show', comp: Demo13, route: '#/Demo13' },
  Demo14: { name: 'v-for', comp: Demo14, route: '#/Demo14' },
  Demo15: { name: '事件處理 v-on', comp: Demo15, route: '#/Demo15' },
  Demo16: { name: '雙向綁定 v-model', comp: Demo16, route: '#/Demo16' },
  Demo17: {
    name: 'v-model (動態值綁定 & 修飾符)',
    comp: Demo17,
    route: '#/Demo17',
  },
  Demo18: { name: '生命週期鉤子', comp: Demo18, route: '#/Demo18' },
  Demo19: { name: '模板引用 ref 屬性', comp: Demo19, route: '#/Demo19' },
  Demo20: { name: '組件-單文件組件(SFC)', comp: Demo20, route: '#/Demo20' },
  Demo21: { name: '組件多次使用', comp: Demo21, route: '#/Demo21' },
  Demo22: { name: '動態組件', comp: Demo22, route: '#/Demo22' },
  Demo23: { name: 'props 傳遞 (父傳子)', comp: Demo23, route: '#/Demo23' },
  Demo24: { name: 'props 單向數據流', comp: Demo24, route: '#/Demo24' },
  Demo25: { name: 'props 校驗', comp: Demo25, route: '#/Demo25' },
  Demo26: { name: '組件事件 (子傳父) & 校驗', comp: Demo26, route: '#/Demo26' },
  Demo27: { name: '組件 v-model 雙向綁定', comp: Demo27, route: '#/Demo27' },
  Demo28: { name: '透傳 Attributes', comp: Demo28, route: '#/Demo28' },
  Demo29: { name: '插槽 Slots', comp: Demo29, route: '#/Demo29' },
  Demo30: {
    name: '依賴注入 (Provide/Inject)',
    comp: Demo30,
    route: '#/Demo30',
  },
  Demo31: { name: '異步組件', comp: Demo31, route: '#/Demo31' },
  Demo32: { name: '組合式函數 (Composables)', comp: Demo32, route: '#/Demo32' },
  Demo33: { name: '自定義指令', comp: Demo33, route: '#/Demo33' },
  Demo34: { name: '插件 (Plugins)', comp: Demo34, route: '#/Demo34' },
  Demo35: { name: '過渡動畫 (transition)', comp: Demo35, route: '#/Demo35' },
  Demo36: {
    name: '過渡動畫 (transition-group)',
    comp: Demo36,
    route: '#/Demo36',
  },
  Demo37: { name: 'KeepAlive', comp: Demo37, route: '#/Demo37' },
  Demo38: { name: 'Teleport', comp: Demo38, route: '#/Demo38' },
  Demo39: { name: 'Suspense (實驗性功能)', comp: Demo39, route: '#/Demo39' },
  Demo40: { name: '路由', comp: Demo40, route: '#/Demo40' },
  Demo41: { name: '狀態管理', comp: Demo41, route: '#/Demo41' },
};

const currentTab = ref('Demo1');
const tab_wrapper = ref(null);
const btns = ref([]);

onMounted(() => {
  window.addEventListener('hashchange', onHashChange);
  onHashChange();
});
onUnmounted(() => {
  window.removeEventListener('hashchange', onHashChange);
});

function onHashChange() {
  let tab = window.location.hash.slice(2);
  if (tab.slice(0, 7) === 'Demo40/') {
    // Demo40 的子路由內部自行處理
    currentTab.value = 'Demo40';
    scrollToCenter();
    return;
  } else if (!tabs[tab]) {
    // 當tab不存在時
    window.location.hash = tabs['Demo1'].route;
    return;
  }
  currentTab.value = tab;
  scrollToCenter();
}

// 滾動至對應tab
function scrollToCenter() {
  let index = btns.value.findIndex((el) => el.dataset.key === currentTab.value);
  let width = tab_wrapper.value.getBoundingClientRect().width / 2;
  tab_wrapper.value.scrollTo({
    left: 154 * index - width + 75,
    behavior: 'smooth',
  });
}

function onBtnClick(route) {
  window.location.hash = route;
}

const currentView = computed(() => {
  return tabs[currentTab.value].comp;
});
</script>

<template>
  <main>
    <HelloVue3 />
    <a
      href="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#vue-3-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98"
      target="_blank"
      >Vue3 筆記 📖</a
    >
    <span> | 點擊標題旁的 📖 可以對應到相關筆記。</span>
    <hr />
    <div class="tab-wrapper" ref="tab_wrapper">
      <button
        v-for="(data, key) in tabs"
        :key="key"
        :class="['tab-button', { active: currentTab === key }]"
        @click="onBtnClick(data.route)"
        ref="btns"
        :data-key="key"
      >
        {{ data.name }}
      </button>
    </div>
    <component :is="currentView" class="tab"></component>
    <div v-show="currentTab === 'Demo38'" id="wrapper">
      <h2>這裡是 App.vue 的 wrapper</h2>
    </div>
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  font-size: 20px;
}
main {
  padding: 16px;
}
.tab-wrapper {
  display: flex;
  overflow-x: scroll;
}
.tab-button {
  min-width: 150px;
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  color: black;
  cursor: pointer;
  background-color: #f0f0f0;
  font-size: 16px;
  line-height: 16px;
  margin: 2px 4px 0px 0px;
}
.tab-button:hover {
  background-color: #e0e0e0;
}
.tab-button.active {
  background-color: #c6c4c4;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
  overflow: auto;
}
</style>
