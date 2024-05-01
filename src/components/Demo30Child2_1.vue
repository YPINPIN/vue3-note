<script setup>
import { inject } from 'vue';

const { number, changeNumber } = inject('number');
</script>

<template>
  <h3>hi! 我是深層組件 2</h3>
  <p>number : {{ number }}</p>
  <button @click="changeNumber">change number</button>
  <button @click="number = Math.random()">local change number</button>
</template>
