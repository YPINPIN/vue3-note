<script setup>
import { ref, computed } from 'vue'
let firstName = ref('張')
let lastName = ref('三')

// 只讀取不修改
// let fullName = computed(() => {
//   return firstName.value + '-' + lastName.value
// })

// 讀取又修改
let fullName = computed({
  get() {
    return firstName.value + '-' + lastName.value
  },
  set(val) {
    firstName.value = val.split('-')[0]
    lastName.value = val.split('-')[1]
  },
})
function changeFullName() {
  fullName.value = fullName.value === '張-三' ? '李-四' : '張-三'
}
</script>

<template>
  <div class="person">
    姓：<input type="text" v-model="firstName" /> <br />
    名：<input type="text" v-model="lastName" /> <br />
    全名：<span>{{ fullName }}</span> <br />
    <button @click="changeFullName">修改名字</button>
  </div>
</template>
