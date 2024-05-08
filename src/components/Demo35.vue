<script setup>
import { ref, shallowRef } from 'vue';
import MyTransition from './MyTransition.vue';
import Demo35Child1 from './Demo35Child1.vue';
import Demo35Child2 from './Demo35Child2.vue';

const show = ref(false);
const fade = ref(false);
const isOpen = ref(false);
const isOpen2 = ref(true);
const isOpen3 = ref(false);
const isOpen4 = ref(false);
const isOpen5 = ref(false);
const isOpen6 = ref(false);
const isOpen7 = ref(true);
const docState = ref('saved');

const activeComp = shallowRef(Demo35Child1);
const count = ref(0);

// Javascript 鉤子
function onBeforeEnter(el) {
  console.log('onBeforeEnter');
}

// 元素被插入到DOM後的下一幀被調用，開始進入動畫
function onEnter(el, done) {
  console.log('onEnter');
  // 使用回調函數 done 表示過渡結束
  setTimeout(() => {
    done();
  }, 500);
}

// 當進入過渡完成時調用
function onAfterEnter(el) {
  console.log('onAfterEnter');
}

// 當進入過渡在完成之前被取消時調用
function onEnterCancelled(el) {
  console.log('onEnterCancelled');
}

// 在leave鉤子之前調用，大多數時候只會用到leave鉤子
function onBeforeLeave(el) {
  console.log('onBeforeLeave');
}

// 在離開過渡開始時調用，開始離開動畫
function onLeave(el, done) {
  console.log('onLeave');
  // 使用回調函數 done 表示過渡結束
  setTimeout(() => {
    done();
  }, 500);
}

//在離開過渡完成且元素已從DOM中移除時調用
function onAfterLeave(el) {
  console.log('onAfterLeave');
}

//僅在 v-show 過渡中可用
function onLeaveCancelled(el) {
  console.log('onLeaveCancelled');
}
</script>

<template>
  <div>
    <MainTitle title="過渡動畫 (transition)" />
    <button @click="show = !show">Toggle</button>
    <transition>
      <p v-show="show">Hello~~~~</p>
    </transition>
    <hr />

    <button @click="fade = !fade">Toggle 2</button>
    <transition name="slide-fade">
      <p v-show="fade">Welcome~~~~</p>
    </transition>
    <hr />

    <button @click="isOpen = !isOpen">Toggle 3</button>
    <transition name="bounce">
      <p v-show="isOpen" style="text-align: center">Bounce~~~~</p>
    </transition>
    <hr />

    <button @click="isOpen2 = !isOpen2">Toggle 4</button>
    <transition name="bounce" type="animation">
      <p class="p-text" v-show="isOpen2" style="text-align: center">
        Hello here is some text!
      </p>
    </transition>
    <hr />

    <button @click="isOpen3 = !isOpen3">Toggle 5</button>
    <transition
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <p v-show="isOpen3" style="text-align: center">
        Hello here is use Animate.css!
      </p>
    </transition>
    <hr />

    <button @click="isOpen4 = !isOpen4">Toggle 6</button>
    <transition name="nested" :duration="550">
      <div v-show="isOpen4" class="outer">
        <p class="inner">Hello here is inner text!</p>
      </div>
    </transition>
    <hr />

    <button @click="isOpen5 = !isOpen5">Toggle 7</button>
    <transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @enter-cancelled="onEnterCancelled"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
      @leave-cancelled="onLeaveCancelled"
    >
      <p v-show="isOpen5">Hello here is text!</p>
    </transition>
    <hr />

    <button @click="isOpen6 = !isOpen6">Toggle 8</button>
    <MyTransition>
      <p v-show="isOpen6">Hello here is slot text</p>
    </MyTransition>
    <hr />

    <button @click="isOpen7 = !isOpen7">Toggle 9</button>
    <transition appear>
      <p v-show="isOpen7">Hello~~~~</p>
    </transition>
    <hr />

    <span style="margin-right: 10px">Click to cycle through states:</span>
    <transition mode="out-in">
      <button v-if="docState === 'saved'" @click="docState = 'edited'">
        Edit
      </button>
      <button v-else-if="docState === 'edited'" @click="docState = 'editing'">
        Save
      </button>
      <button v-else-if="docState === 'editing'" @click="docState = 'saved'">
        Cancel
      </button>
    </transition>
    <hr />

    <label>
      <input type="radio" v-model="activeComp" :value="Demo35Child1" /> Child1
    </label>
    <label>
      <input type="radio" v-model="activeComp" :value="Demo35Child2" /> Child2
    </label>
    <transition mode="out-in">
      <component :is="activeComp"></component>
    </transition>
    <hr />

    <button style="margin-right: 10px" @click="count++">add count</button>
    <transition mode="out-in">
      <span :key="count">{{ count }}</span>
    </transition>
  </div>
</template>

<style scoped>
/* 設置進入及離開時 opacity 為 0 */
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
/* 設置動畫過渡時間及速度曲線 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

/* 對於有名字的過渡效果，class會以其名字做為前綴 */
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
/* 也可以在進入及離開時分別使用不同的持續時間和速度曲線 */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

/* 使用 animation */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
/* 滑鼠 hover 時的 CSS transition */
.p-text {
  transition: color 1s;
}
.p-text:hover {
  color: blue;
}

/* outer */
.outer {
  width: 500px;
  height: 50px;
  background-color: lightgray;
  padding: 10px;
}
/* 應用於根元素的 transition */
.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
.nested-leave-active {
  transition-delay: 0.25s;
}
/* 應用於深層元素的設置 */
.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
.nested-enter-active .inner {
  transition-delay: 0.25s;
}
</style>
