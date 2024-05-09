import { ref } from 'vue';

//全局狀態
const globalCount = ref(1);

function addGlobalCount() {
  globalCount.value++;
}

export function useCount() {
  //局部狀態，每個組件都會創建
  const localCount = ref(1);

  function addLocalCount() {
    localCount.value++;
  }

  return {
    globalCount,
    localCount,
    addGlobalCount,
    addLocalCount,
  };
}
