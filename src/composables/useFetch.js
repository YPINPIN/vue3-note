import { ref, watchEffect, toValue } from 'vue';

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  // 處理異步數據
  const fetchData = async () => {
    // reset state
    data.value = null;
    error.value = null;

    // toValue -> 3.3新增的API，目的是將 ref 或 getter 規範化為值
    const urlVal = toValue(url);

    try {
      await timeout();

      const res = await fetch(urlVal);
      data.value = await res.json();
    } catch (err) {
      error.value = err;
    }
  };

  watchEffect(() => {
    fetchData();
  });

  // 通過返回值暴露管理的狀態
  return { data, error };
}

// 模擬獲取數據失敗
function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve();
      } else {
        reject(new Error('random error'));
      }
    }, 300);
  });
}
