<script setup>
const age = defineModel();
const firstName = defineModel('firstName');
const lastName = defineModel('lastName');
</script>

<template>
  <div>
    <p>hi! 我是子組件 5：</p>
    Age : <input type="number" v-model="age" /><br />
    FirstName : <input type="text" v-model="firstName" /><br />
    LastName : <input type="text" v-model="lastName" />
  </div>
</template>
