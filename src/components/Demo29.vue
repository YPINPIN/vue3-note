<script setup>
import { ref } from 'vue';
import Demo29Child1 from './Demo29Child1.vue';
import Demo29Child2 from './Demo29Child2.vue';
import Demo29Child3 from './Demo29Child3.vue';
import Demo29Child4 from './Demo29Child4.vue';
import Demo29Child5 from './Demo29Child5.vue';
import Demo29Child6 from './Demo29Child6.vue';
import Demo29Child7 from './Demo29Child7.vue';
import Demo29Child8 from './Demo29Child8.vue';

const message = ref('Welcome~~~');
</script>

<template>
  <div>
    <MainTitle
      title="插槽 Slots"
      link="https://github.com/YPINPIN/vue3-note?tab=readme-ov-file#%E6%8F%92%E6%A7%BD-slots"
    />
    <Demo29Child1>Hello~~~我是<strong>插槽內容</strong></Demo29Child1>
    <Demo29Child1>{{ message }}</Demo29Child1>
    <hr />

    <Demo29Child2 />
    <hr />

    <Demo29Child2>Click me!!</Demo29Child2>
    <hr />

    <Demo29Child3>
      <template v-slot:header>
        <!-- header 插槽的內容 -->
        <h1>Here might be a header title</h1>
      </template>
      <!-- 簡寫v-slot -->
      <template #default>
        <!-- default 插槽的內容 -->
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>
      <template #footer>
        <!-- footer 插槽的內容 -->
        <p>Here is some contact info</p>
      </template>
    </Demo29Child3>
    <hr />

    <Demo29Child4>
      <template #header>
        <h1>This is the header</h1>
      </template>

      <template #default>
        <p>This is the content</p>
      </template>

      <template #footer>
        <em>This is the footer</em>
      </template>
    </Demo29Child4>
    <hr />

    <Demo29Child5 v-slot="slotProps">
      {{ slotProps.text }} {{ slotProps.count }}
    </Demo29Child5>
    <hr />

    <Demo29Child6>
      <template v-slot:header="{ count }">
        <h1>Count: {{ count }}</h1>
      </template>

      <template #default="slotProps">
        {{ slotProps.text }} {{ slotProps.count }}
      </template>
    </Demo29Child6>
    <hr />

    <Demo29Child7 api-url="url">
      <!-- 具名插槽，v-slot的值解構獲得子組件插槽出口提供的props -->
      <template #item="{ body, username, likes }">
        <div class="item">
          <p>{{ body }}</p>
          <p class="meta">by {{ username }} | {{ likes }} likes</p>
        </div>
      </template>
    </Demo29Child7>
    <hr />

    <Demo29Child8 v-slot="{ x, y }">
      Mouse is at: {{ x }}, {{ y }}
    </Demo29Child8>
  </div>
</template>

<style scoped>
.meta {
  font-size: 0.8em;
  color: #42b883;
}
</style>
