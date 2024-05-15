<script setup>
import MyModal from './MyModal.vue';
import MyModal2 from './MyModal2.vue';
import Demo38Child1 from './Demo38Child1.vue';
</script>

<template>
  <div>
    <MainTitle
      title="Teleport"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#teleport"
    />
    <div class="outer">
      <MyModal />
      <hr />

      <p>Use Teleport</p>
      <MyModal2 />
    </div>
    <hr />

    <Demo38Child1 />
  </div>
</template>

<style>
/* 如果有 transform MyModal樣式會出錯 */
.outer {
  transform: translate(0px);
}
</style>
