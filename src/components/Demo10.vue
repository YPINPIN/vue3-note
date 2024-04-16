<script setup>
import { ref, reactive, computed } from 'vue'
// 內聯形式 -------------------------------------------------
// 控制 class 的開關
const isActive = ref(true)
const hasError = ref(false)

// 直接綁定一個物件 -------------------------------------------------
// 控制 class 的物件
const classObject = reactive({ active: true, 'text-danger': false })

// 綁定一個返回物件的 computed -------------------------------------------------
// 控制 class 的物件
const isShow = ref(true)
const error = ref('fatal')
// computed 返回一個物件
const classObject2 = computed(() => ({
  show: isShow.value && !error.value,
  'text-danger': error.value && error.value === 'fatal',
}))
</script>

<template>
  <div>
    <h1 class="static" :class="{ active: isActive, 'text-danger': hasError }">
      內聯形式
    </h1>
    <h1 :class="classObject">直接綁定一個物件</h1>
    <h1 :class="classObject2">綁定一個返回物件的 computed</h1>
  </div>
</template>
