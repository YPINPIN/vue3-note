<script setup>
import { ref } from 'vue';
const open = ref(false);
</script>

<template>
  <button @click="open = true">Open Modal2</button>
  <!-- 將模板片段傳送到 body 標籤下 -->
  <Teleport to="body">
    <div v-if="open" class="modal">
      <div class="modal_body">
        <p>Hello from the modal2!</p>
        <button @click="open = false">Close</button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal_body {
  width: 300px;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
}
</style>
