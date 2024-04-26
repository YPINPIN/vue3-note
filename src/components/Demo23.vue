<script setup>
import { ref } from 'vue';
import Demo23Child1 from './Demo23Child1.vue';
import Demo23Child2 from './Demo23Child2.vue';
import Demo23Child3 from './Demo23Child3.vue';
import Demo23Child4 from './Demo23Child4.vue';
import Demo23Child5 from './Demo23Child5.vue';
import Demo23Child6 from './Demo23Child6.vue';

const message = ref('Hello Vue');

const likes = ref(120);

const isPublished = ref(false);

const list = ref([111, 222, 654]);

const author = ref({
  name: 'Joy',
  company: 'Alphabet',
});

const post = {
  id: 1,
  title: 'My Journey with Vue',
};
</script>

<template>
  <div>
    <MainTitle title="props 傳遞 (父傳子)" />
    <!-- 靜態 props -->
    <Demo23Child1 greeting-message="Hello Vue" />
    <hr />
    <!-- 根據變數動態傳入 -->
    <Demo23Child1 :greeting-message="message" />
    <hr />
    <!-- 根據表達式動態傳入 -->
    <Demo23Child1 :greeting-message="message + '!!!!!!'" />
    <hr />

    <!-- Number -->
    <Demo23Child2 :likes="42" />
    <Demo23Child2 :likes="likes" />
    <hr />

    <!-- Boolean -->
    <!-- 僅寫上prop名字不傳值，會自動轉換為 true -->
    <Demo23Child3 is-published />
    <!-- 不傳，則會自動轉換為 false -->
    <Demo23Child3 />
    <!-- 動態綁定 -->
    <Demo23Child3 :is-published="isPublished" />
    <hr />

    <!-- Array -->
    <Demo23Child4 :list="[234, 266]" />
    <Demo23Child4 :list="list" />
    <hr />

    <!-- Object -->
    <Demo23Child5
      :author="{
        name: 'Peter',
        company: 'Google',
      }"
    />
    <Demo23Child5 :author="author" />
    <hr />

    <!-- v-bind 一次綁定 -->
    <!-- 等同於 
      <Demo23Child6 :id="post.id" :title="post.title" />
    -->
    <Demo23Child6 v-bind="post" />
  </div>
</template>
