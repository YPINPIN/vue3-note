<template>
  <div class="spinner"></div>
</template>

<style scoped>
.spinner {
  width: 25px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 5px solid lightblue;
  border-right-color: darkblue;
  animation: spinner_ani 1s infinite linear;
}
@keyframes spinner_ani {
  to {
    transform: rotate(360deg);
  }
}
</style>
