<script>
export default {
  data() {
    return {
      name: '小明',
      age: 18,
    };
  },
  methods: {
    show() {
      console.log('嗨~~~');
    },
  },
};
</script>

<template>
  <div>
    <h2>hi! 我是子組件 1</h2>
    <p>name : {{ name }}, age : {{ age }}</p>
  </div>
</template>
