<script setup>
import { ref } from 'vue';
const emit = defineEmits({
  submitEvent: (data) => {
    console.log(data);
    if (data.username && data.password) {
      return true;
    } else {
      return false;
    }
  },
});

const username = ref(null);
const password = ref(null);

function onSubmitClick() {
  emit('submitEvent', {
    username: username.value,
    password: password.value,
  });
}
</script>

<template>
  <div>
    <p>hi! 我是子組件 3：</p>
    <form action="" @submit.prevent="onSubmitClick">
      <label for="username">Username : </label>
      <input type="text" id="username" v-model="username" />
      <br />
      <label for="password">Password : </label>
      <input type="password" id="password" v-model="password" />
      <br />
      <button>Submit</button>
    </form>
  </div>
</template>
