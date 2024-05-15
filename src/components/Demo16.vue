<script setup>
import { ref } from 'vue';
const text = ref('');

const message = ref('');
const message2 = ref('');

const checked = ref(true);

const checkedNames = ref([]);

const picked = ref('One');

const selected = ref('');
const options = ref([
  { text: 'One - A', value: 'A' },
  { text: 'Two - B', value: 'B' },
  { text: 'Three - C', value: 'C' },
]);
</script>

<template>
  <div>
    <MainTitle
      title="雙向綁定 v-model"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#%E9%9B%99%E5%90%91%E7%B6%81%E5%AE%9A-v-model"
    />
    <table>
      <tr>
        <th>輸入元素</th>
        <th>綁定屬性</th>
        <th>監聽事件</th>
      </tr>
      <tr>
        <td>input</td>
        <td rowspan="2">value</td>
        <td rowspan="2">input 事件</td>
      </tr>
      <tr>
        <td>textarea</td>
      </tr>
      <tr>
        <td>input & type="checkbox"</td>
        <td rowspan="2">checked</td>
        <td rowspan="2">change 事件</td>
      </tr>
      <tr>
        <td>input & type="radio"</td>
      </tr>
      <tr>
        <td>select</td>
        <td>value</td>
        <td>change 事件</td>
      </tr>
    </table>
    <hr />
    <p>text: {{ text }}</p>
    <!-- 手動綁定 & 監聽事件 -->
    <input
      type="text"
      :value="text"
      @input="(event) => (text = event.target.value)"
    />
    <!-- 使用v-model簡化 -->
    <input type="text" v-model="text" />
    <hr />

    <!-- text 文本 -->
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
    <hr />
    <!-- textarea 多行文本 -->
    <span>Multiline message is:</span>
    <p style="white-space: pre-line">{{ message2 }}</p>
    <textarea v-model="message2" placeholder="add multiple lines" />
    <hr />
    <!-- 單一 checkbox -->
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <hr />
    <!-- 多個 checkbox -->
    <div>Checked names: {{ checkedNames }}</div>
    <input type="checkbox" id="A" value="A" v-model="checkedNames" />
    <label for="A">A</label>
    <input type="checkbox" id="B" value="B" v-model="checkedNames" />
    <label for="B">B</label>
    <input type="checkbox" id="C" value="C" v-model="checkedNames" />
    <label for="C">C</label>
    <hr />
    <!-- radio -->
    <div>Picked: {{ picked }}</div>
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <hr />
    <!-- select -->
    <div>Selected: {{ selected }}</div>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
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
  min-width: 100px;
}
</style>
