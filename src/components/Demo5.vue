<script setup>
import { shallowRef, shallowReactive } from 'vue';
const obj = shallowRef({ count: 1 });

function changeObjCount() {
  // 不會觸發響應
  obj.value.count++;
  console.log('obj', obj.value);
}
function changeObj() {
  // 會觸發響應
  let count = obj.value.count + 1;
  obj.value = { count: count };
  console.log('obj', obj.value);
}

const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 2,
  },
});

function changeFoo() {
  // 更改頂層的屬性是響應式的
  state.foo++;
  console.log('state', state);
}
function changeNestedBar() {
  // 下層嵌套的屬性不會是響應式
  state.nested.bar++;
  console.log('state', state);
}
</script>

<template>
  <div>
    <MainTitle
      title="shallowRef & shallowReactive"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#%E6%B7%BA%E5%B1%A4%E9%9F%BF%E6%87%89%E5%BC%8F%E7%8B%80%E6%85%8B-shallowref--shallowreactive"
    />
    <div>
      obj (shallowRef):
      {{ obj }}
      <button @click="changeObjCount">changeObjCount</button>
      <button @click="changeObj">changeObj</button>
    </div>
    <div>
      state (shallowReactive):
      {{ state }}
      <button @click="changeFoo">changeFoo</button>
      <button @click="changeNestedBar">changeNestedBar</button>
    </div>
  </div>
</template>
