<script setup>
import { ref } from 'vue';
import Demo11Child1 from './Demo11Child1.vue';
import Demo11Child2 from './Demo11Child2.vue';

// class 的名稱
const activeClass = ref('active');
const errorClass = ref('test-danger');
// 條件開關
const isActive = ref(true);
</script>

<template>
  <div>
    <MainTitle
      title="綁定 class (陣列 & 組件)"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#-%E7%B6%81%E5%AE%9A%E9%99%A3%E5%88%97"
    />
    <h1 :class="[activeClass, errorClass, 'text-ted']">一般陣列形式</h1>
    <h1 :class="[isActive ? activeClass : '', errorClass, 'text-ted']">
      條件渲染
    </h1>
    <h1 :class="[{ active: isActive, 'text-ted': false }, errorClass]">
      陣列中嵌套物件
    </h1>
    <div>
      <Demo11Child1 class="baz boo" />
      <Demo11Child1 :class="{ active: isActive }" />
      <Demo11Child2 class="baz boo" />
    </div>
  </div>
</template>
