<script setup>
import { shallowRef } from 'vue';
import Demo37Child1 from './Demo37Child1.vue';
import Demo37Child2 from './Demo37Child2.vue';
import Demo37Child3 from './Demo37Child3.vue';

const activeComp = shallowRef(Demo37Child1);
</script>

<template>
  <div>
    <MainTitle
      title="KeepAlive"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#keepalive"
    />
    <label>
      <input type="radio" v-model="activeComp" :value="Demo37Child1" /> Child1
    </label>
    <label>
      <input type="radio" v-model="activeComp" :value="Demo37Child2" /> Child2
    </label>
    <label>
      <input type="radio" v-model="activeComp" :value="Demo37Child3" /> Child3
    </label>
    <keep-alive>
      <component :is="activeComp"></component>
    </keep-alive>
    <hr />

    <!-- 以 , 分隔的字符串 -->
    <h3>只緩存Child1, Child2 => include="Demo37Child1,Demo37Child2"</h3>
    <keep-alive include="Demo37Child1,Demo37Child2">
      <component :is="activeComp" />
    </keep-alive>
    <hr />

    <!-- 正則表達式(必須使用v-bind) -->
    <h3>只緩存Child2, Child3 => :include="/Demo37Child2|Demo37Child3/"</h3>
    <keep-alive :include="/Demo37Child2|Demo37Child3/">
      <component :is="activeComp" />
    </keep-alive>
    <hr />

    <!-- 陣列(必須使用v-bind) -->
    <h3>只緩存Child1, Child3 => :include="['Demo37Child1', 'Demo37Child3']"</h3>
    <keep-alive :include="['Demo37Child1', 'Demo37Child3']">
      <component :is="activeComp" />
    </keep-alive>
  </div>
</template>
