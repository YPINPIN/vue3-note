import { onMounted, onUnmounted } from 'vue';

// 組合式函數也可以傳入參數
export function useEventListener(target, event, callback) {
  onMounted(() => target.addEventListener(event, callback));
  onUnmounted(() => target.removeEventListener(event, callback));
}
