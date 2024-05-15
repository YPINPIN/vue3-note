<script setup>
import { ref } from 'vue';
const awesome = ref(true);
const show = ref(1);

function changeShow() {
  show.value++;
}
function resetShow() {
  show.value = 1;
}

const isDisplay = ref(true);

function changeDisplay() {
  isDisplay.value = !isDisplay.value;
}
</script>

<template>
  <div>
    <MainTitle
      title="v-if & v-show"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#%E6%A2%9D%E4%BB%B6%E6%B8%B2%E6%9F%93-v-if--v-show"
    />
    <!-- 切換單一元素 -->
    <button @click="awesome = !awesome">Toggle</button>
    <p v-if="awesome">Vue is awesome!</p>
    <hr />
    <!-- 同時切換多個元素 -->
    <button @click="changeShow">Show : {{ show }}</button>
    <button @click="resetShow">resetShow</button>
    <template v-if="show === 1">
      <h1>Show 1</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <template v-else-if="show === 2">
      <h1>Show 2</h1>
      <p>Paragraph 2222</p>
    </template>
    <template v-else>
      <h1>No More...</h1>
    </template>
    <hr />
    <!-- v-show 切換 -->
    <button @click="changeDisplay">changeDisplay</button>
    <h1 v-show="isDisplay">v-show 只是控制 display 屬性</h1>
  </div>
</template>
