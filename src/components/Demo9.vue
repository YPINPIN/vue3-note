<script setup>
import { ref, watchEffect } from 'vue';
const min = 1;
const max = 50;
const photoId = ref(min);
let data = ref(null);

function changeId(num) {
  photoId.value += num;
  if (photoId.value < min) {
    photoId.value = min;
  } else if (photoId.value > max) {
    photoId.value = max;
  }
}

function fetchPhoto(id) {
  fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then((res) => res.json())
    .then((json) => {
      data.value = json;
      console.log(data.value);
    });
}
// photoId 變動時自動獲取新資料
watchEffect(() => {
  fetchPhoto(photoId.value);
});
</script>

<template>
  <div>
    <MainTitle
      title="watchEffect"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#watcheffect"
    />
    {{ data }}
    <br />
    photoId: {{ photoId }}
    <br />
    <button @click="changeId(-1)" :disabled="photoId === min">prev</button>
    <button @click="changeId(1)" :disabled="photoId === max">next</button>
  </div>
</template>
