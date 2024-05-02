import { ref } from 'vue';
import { useEventListener } from './useEventListener.js';

// 組合式函數名建議以 use 開頭。
export function useMouse() {
  // 封裝管理的狀態
  const x = ref(0);
  const y = ref(0);

  // 更改狀態
  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  // 使用其他的組合式函數處理啟動和卸載時更新狀態
  useEventListener(window, 'mousemove', update);

  // 通過返回值暴露管理的狀態
  return { x, y };
}
