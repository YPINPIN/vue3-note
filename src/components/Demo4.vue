<script setup>
import { ref, reactive, toRefs, toRef } from 'vue';
const name = ref('小明');
const obj = ref({ count: 0 });
const fruit = reactive({
  name: 'apple',
  price: 20,
});

function changeName() {
  name.value = name.value === '小明' ? '小白' : '小明';
}

function addCount() {
  obj.value.count++;
}

function addPrice() {
  fruit.price += 10;
}

// toRefs & toRef

const person = reactive({
  personName: '小明',
  age: 18,
  gender: '男',
});

const { personName, age } = toRefs(person);
const gender = toRef(person, 'gender');

function changePersonName() {
  personName.value = personName.value === '小明' ? '小白' : '小明';
}

function changePersonAge() {
  age.value++;
}

function changePersonGender() {
  gender.value = gender.value === '男' ? '女' : '男';
}
</script>

<template>
  <div>
    <MainTitle title="ref & reactive" />
    <div>
      name:
      {{ name }}
      <button @click="changeName">changeName</button>
    </div>
    <div>
      obj:
      {{ obj }}
      <button @click="addCount">add obj count</button>
    </div>
    <div>
      fruit:
      {{ fruit }}
      <button @click="addPrice">add fruit price</button>
    </div>
    <hr />
    <MainTitle title="使用 toRefs & toRef" />
    <div>
      person:
      {{ person }}
      <br />
      personName:
      {{ personName }}
      <button @click="changePersonName">changePersonName</button>
      <br />
      age:
      {{ age }}
      <button @click="changePersonAge">changePersonAge</button>
      <br />
      gender:
      {{ gender }}
      <button @click="changePersonGender">changePersonGender</button>
    </div>
  </div>
</template>
