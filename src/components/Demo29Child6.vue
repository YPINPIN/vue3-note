<script setup>
import { ref } from 'vue';
const greetingMessage = ref('Hello');
</script>

<template>
  <div class="container">
    <h1>hi! 我是子組件 6</h1>
    <header>
      <slot name="header" :count="1"></slot>
    </header>
    <main>
      <slot :text="greetingMessage" :count="2"></slot>
    </main>
  </div>
</template>
