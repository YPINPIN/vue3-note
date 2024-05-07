<script setup>
import { computed, inject, ref, watch } from 'vue';
const langList = ref(['en', 'zh']);
// 注入插件提供的依賴
const $i18n = inject('$i18n');
const selectLang = ref($i18n.lang.value);
const i18nDict = computed(() => $i18n.dict.value);
// 監聽語言切換
watch(selectLang, (newVal) => {
  console.log('selectLang:', newVal);
  $i18n.setLang(newVal);
});
</script>

<template>
  <div>
    <MainTitle title="插件 (Plugins)" />
    選擇語言 : {{ selectLang }} |
    <template v-for="lang in langList" :key="lang">
      <input
        type="radio"
        :id="lang"
        name="selectLang"
        :value="lang"
        v-model="selectLang"
      />
      <label :for="lang"> {{ lang }} </label>
    </template>
    <h2>
      {{ i18nDict.greetings.welcome }} ,
      {{ i18nDict.greetings.hello }}
    </h2>
  </div>
</template>
