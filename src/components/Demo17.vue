<script setup>
import { ref } from 'vue';
const toggle = ref('yes');

const dynamicTrueValue = ref('yes!!!!');
const dynamicFalseValue = ref('false!!!!');
const toggle2 = ref(dynamicFalseValue.value);

const first = ref('first radio');
const second = ref('second radio');
const picked = ref(first.value);

const selected = ref('');

const message = ref('');

const age = ref(undefined);
const age2 = ref(undefined);

const trimMsg = ref('');
</script>

<template>
  <div>
    <MainTitle title="v-model (動態值綁定 & 修飾符)" />
    <!-- toggle 會在被選中時設定為'yes'，取消時設為'no' -->
    <input
      type="checkbox"
      id="toggle"
      v-model="toggle"
      true-value="yes"
      false-value="no"
    />
    <label for="toggle">{{ toggle }}</label>
    <hr />
    <!-- 其他動態值 -->
    <input
      type="checkbox"
      id="toggle2"
      v-model="toggle2"
      :true-value="dynamicTrueValue"
      :false-value="dynamicFalseValue"
    />
    <label for="toggle2">{{ toggle2 }}</label>
    <hr />
    <!-- picked 會在第一個 radio 選中時被設為 first ，在第二個 radio 選中時被設為 second -->
    <div>Picked: {{ picked }}</div>
    <input type="radio" id="first" v-model="picked" :value="first" />
    <label for="first">first</label>
    <input type="radio" id="second" v-model="picked" :value="second" />
    <label for="second">second</label>
    <hr />
    <!-- 也可以綁定非字串類型的值 -->
    <div>Selected: {{ selected }}</div>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option :value="{ number: 123 }">123</option>
      <option :value="{ number: 456 }">456</option>
      <option :value="{ number: 789 }">789</option>
    </select>
    <hr />
    <!-- .lazy -->
    <div>Message: {{ message }}</div>
    <input v-model.lazy="message" />
    <hr />
    <!-- .number -->
    <div>Age: {{ age }} type: {{ typeof age }}</div>
    <input v-model="age" />
    <div>Age (with .number): {{ age2 }} type: {{ typeof age2 }}</div>
    <input v-model.number="age2" />
    <hr />
    <!-- .trim -->
    <div>trimMsg: {{ trimMsg }}</div>
    <input v-model.trim="trimMsg" />
  </div>
</template>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
th,
td {
  text-align: center;
  padding: 8px;
}
</style>
