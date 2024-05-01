<script setup>
import { myInjectionKey } from '../utility/provideKeys.js';
import { inject } from 'vue';

const data = inject(myInjectionKey);
</script>

<template>
  <h3>hi! 我是深層組件 3</h3>
  <p>data : {{ data }}</p>
</template>
