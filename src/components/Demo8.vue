<script setup>
import { ref, reactive, watch } from 'vue';

// ref的基本類型數據 ---------------------------------------------
const count = ref(0);
// 方法
function addCount() {
  count.value += 1;
}
// 監聽 ref 數據，並保存返回函數
const stopWatch = watch(count, (newVal, oldVal) => {
  console.log('count改變了', newVal, oldVal);
  if (newVal >= 10) {
    // 手動停止監聽
    stopWatch();
    console.log('停止監聽!!');
  }
});

// ref 的物件類型數據 ---------------------------------------------
const data = ref([1, 2, 3]);
// 方法 - 修改物件中的屬性
function addData() {
  let count = data.value.length + 1;
  data.value.push(count);
}
// // 方法 - 修改物件本身
function changeData() {
  data.value = [1];
}
// 監聽 ref 的物件數據，要手動設定 deep
watch(
  data,
  (newVal, oldVal) => {
    console.log('data改變了', newVal, oldVal);
  },
  { deep: true }
);

// reactive 的物件類型數據 ---------------------------------------------
const person = reactive({
  name: 'Peter',
  age: 18,
  books: {
    book1: 'book111',
    book2: 'book222',
    c: {
      d: '123',
    },
  },
});
// 更改屬性
function changeName() {
  person.name += '!';
}
function changeAge() {
  person.age += 2;
}
// 更改深層屬性
function changeBook1() {
  person.books.book1 += '~';
}
function changeBookD() {
  person.books.c.d += '-';
}
// 使用Object.assign替換reactive物件屬性(還是同一個物件，地址值無更改)
function changePerson() {
  Object.assign(person, {
    name: 'Joy',
    age: 40,
    books: {
      book1: 'book1',
      book2: 'book2',
      book3: 'book3',
      c: {
        d: '567',
      },
    },
  });
}
// 監視reactive定義的物件數據，默認深度監視
// newVal, oldVal 皆會為新值
watch(person, (newVal, oldVal) => {
  console.log('person改變了', newVal, oldVal);
});

// 使用 getter 函數監聽屬性變化 ---------------------------------------------
const person2 = reactive({
  name: 'Peter',
  age: 18,
  books: {
    book1: 'book111',
    book2: 'book222',
  },
});
// 更改屬性
function changeP2Name() {
  person2.name += '!';
}
// 更改深層屬性
function changeP2Book1() {
  person2.books.book1 += '~';
}
// 更改物件屬性
function changeP2Book() {
  person2.books = {
    book1: 'book1',
    book2: 'book2',
    book3: 'book3',
  };
}
// 監視 reactive 定義的物件的屬性值為基本類型
watch(
  () => person2.name,
  (newVal, oldVal) => {
    console.log('person2 的 name 改變了', newVal, oldVal);
  }
);
// 監視 reactive 定義的物件的屬性值為物件類型
// 要手動開啟深度監視，沒開啟則只有 person2.books 本身被更改才會觸發
watch(
  () => person2.books,
  (newVal, oldVal) => {
    console.log('person2 的 books 改變了', newVal, oldVal);
  }
);
// 開啟深度監視後，此時的 newVal, oldVal 一樣只有 person2.books 本身被更改才會不同
watch(
  () => person2.books,
  (newVal, oldVal) => {
    console.log('深度監視 person2 的 books 改變了', newVal, oldVal);
  },
  { deep: true }
);
// 要正確獲取 book1 的 oldVal，則需要直接監聽 book1 屬性
watch(
  () => person2.books.book1,
  (newVal, oldVal) => {
    console.log('person2 的 books 的 book1 改變了', newVal, oldVal);
  }
);

// 監聽多個數據 ---------------------------------------------
const sum = ref(0);
const fruit = reactive({
  name: 'Apple',
  price: 20,
});

function addSum() {
  sum.value++;
}
function addFruitPrice() {
  fruit.price += 10;
}

watch([sum, () => fruit.price], (newVal, oldVal) => {
  console.log('sum 或 fruit 改變了', newVal, oldVal);
});
</script>

<template>
  <div>
    <MainTitle
      title="watch"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#watch"
    />
    <span>監視ref的基本類型數據：count: {{ count }}</span>
    <button @click="addCount">count+1</button>
    <hr />
    <span>監視ref的物件類型數據：data: {{ data }}</span>
    <button @click="addData">addData</button>
    <button @click="changeData">changeData</button>
    <hr />
    <span>監視reactive的物件類型數據：person: {{ person }}</span>
    <br />
    <button @click="changeName">changeName</button>
    <button @click="changeAge">changeAge</button>
    <button @click="changeBook1">changeBook1</button>
    <button @click="changeBookD">changeBookD</button>
    <button @click="changePerson">changePerson</button>
    <hr />
    <span>使用 getter 函數監聽屬性變化：person2: {{ person2 }}</span>
    <br />
    <button @click="changeP2Name">changeP2Name</button>
    <button @click="changeP2Book1">changeP2Book1</button>
    <button @click="changeP2Book">changeP2Book</button>
    <hr />
    <span>監聽多個數據：sum: {{ sum }} | fruit: {{ fruit }}</span>
    <br />
    <button @click="addSum">addSum</button>
    <button @click="addFruitPrice">addFruitPrice</button>
    <hr />
    總結：
    <br />
    <table>
      <tr>
        <th>定義類型</th>
        <th>資料類型</th>
        <th>監視的對象</th>
        <th>寫法</th>
        <th>是否取得正確的新舊值</th>
      </tr>
      <tr>
        <td rowspan="3">ref</td>
        <td>基本型別</td>
        <td>基本型別本身</td>
        <td>基本型別數據名稱 (count)</td>
        <td>✔️</td>
      </tr>
      <tr>
        <td rowspan="2">物件型別</td>
        <td>物件本身</td>
        <td>物件數據名稱 (data)</td>
        <td>✔️</td>
      </tr>
      <tr>
        <td>物件本身 + 物件內任意屬性</td>
        <td>物件數據名稱 (data) + deep true</td>
        <td>(物件本身)✔️ (物件內屬性)❌</td>
      </tr>
      <tr>
        <td>reactive</td>
        <td>物件型別</td>
        <td>物件本身 + 物件內任意屬性</td>
        <td>物件數據名稱 (person)，deep配置無效</td>
        <td>❌</td>
      </tr>
      <tr>
        <td rowspan="4">ref, reactive</td>
        <td>物件內的基本型別</td>
        <td>基本型別本身</td>
        <td>() => 基本型別數據名稱(person2.name)</td>
        <td>✔️</td>
      </tr>
      <tr>
        <td rowspan="3">物件內的物件型別</td>
        <td>物件本身</td>
        <td>() => 物件數據名稱(person2.books)</td>
        <td>✔️</td>
      </tr>
      <tr>
        <td>物件本身 + 物件內任意屬性</td>
        <td>() => 物件數據名稱(person2.books) + deep true</td>
        <td>(物件本身)✔️ (物件內屬性)❌</td>
      </tr>
      <tr>
        <td>物件內某屬性</td>
        <td>() => 物件內某屬性數據名稱(person2.books.book1)</td>
        <td>✔️</td>
      </tr>
    </table>
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
