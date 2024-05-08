<template>
  <transition name="my-transition">
    <slot></slot>
  </transition>
</template>

<style>
.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
}
.my-transition-enter-active,
.my-transition-leave-active {
  transition: opacity 1s ease;
}
</style>
