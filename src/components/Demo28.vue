<script setup>
import Demo28Child1 from './Demo28Child1.vue';
import Demo28Child2 from './Demo28Child2.vue';
import Demo28Child3 from './Demo28Child3.vue';
import Demo28Child4 from './Demo28Child4.vue';
import Demo28Child5 from './Demo28Child5.vue';

function onClick() {
  console.log('父組件的 onClick');
}
</script>

<template>
  <div>
    <MainTitle title="透傳 Attributes" />
    <Demo28Child1 class="large" />
    <hr />
    <Demo28Child2 @click="onClick" />
    <hr />
    <Demo28Child3 class="large" :count="0" title="123" name="Peter" />
    <hr />
    <Demo28Child4 @click="onClick" class="large" />
    <hr />
    <Demo28Child5 id="custom-layout" />
  </div>
</template>
