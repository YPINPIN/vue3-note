<script setup>
import { ref, reactive } from 'vue';
// 直接綁定樣式 ---------------------------------------------
// 控制 style 的樣式值
const activeColor = ref('red');
const fontSize = ref(30);

// 綁定一個樣式物件 ---------------------------------------------
// 樣式物件
const styleObject = reactive({
  color: 'red',
  fontSize: '13px',
});

// 綁定陣列 ---------------------------------------------
// 樣式物件
const baseStyles = reactive({
  color: 'red',
  letterSpacing: '5px',
});
const overridingStyles = reactive({
  color: 'blue',
  fontSize: '30px',
});
</script>

<template>
  <div>
    <MainTitle
      title="綁定 style"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#%E7%B6%81%E5%AE%9A-style-%E5%85%A7%E8%81%AF%E6%A8%A3%E5%BC%8F"
    />
    <h1 :style="{ color: activeColor, fontSize: fontSize + 'px' }">
      直接綁定樣式(使用 camelCase)
    </h1>
    <h1 :style="{ 'font-size': fontSize + 'px' }">
      直接綁定樣式(使用 kebab-cased)
    </h1>
    <h1 :style="styleObject">綁定一個樣式物件</h1>
    <h1 :style="[baseStyles, overridingStyles]">
      綁定一個包含多個樣式物件的陣列
    </h1>
    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
      <div>item1</div>
      <div>item2</div>
    </div>
  </div>
</template>
