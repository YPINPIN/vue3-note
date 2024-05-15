<script setup>
import { ref } from 'vue';
const count = ref(0);

const name = ref('Vue.js');
function greet(event) {
  alert(`Hello ${event.target.innerHTML}`);
}

function say(message) {
  alert(message);
}

function showText(message, submitEvent) {
  submitEvent.preventDefault();
  const textElement = submitEvent.target.elements.text;
  alert(`${message}, ${textElement.value}`);
  textElement.value = '';
}
</script>

<template>
  <div>
    <MainTitle
      title="事件處理 v-on"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#%E4%BA%8B%E4%BB%B6%E8%99%95%E7%90%86-v-on"
    />
    <!-- 直接執行的 js 語句 -->
    <p>count is: {{ count }}</p>
    <button v-on:click="count++">count + 1</button>
    <hr />
    <!-- 一個函數，原生的 DOM 事件 `event`會為參數 -->
    <h1 @click="greet">{{ name }}</h1>
    <hr />
    <!-- 帶自定義參數的函數 -->
    <button @click="say('Hello~~')">Say Hello~~</button>
    <hr />
    <!-- 傳遞事件參數 $event -->
    <form @submit="showText('Welcome', $event)">
      <div>
        <label for="example">Let's submit some text</label>
        <input id="example" type="text" name="text" />
      </div>
      <div>
        <input type="submit" value="Submit text" />
      </div>
    </form>
    <!-- 使用箭頭函數 -->
    <form @submit="(event) => showText('Hello', event)">
      <div>
        <label for="example">Let's submit some text</label>
        <input id="example" type="text" name="text" />
      </div>
      <div>
        <input type="submit" value="Submit text" />
      </div>
    </form>
  </div>
</template>
