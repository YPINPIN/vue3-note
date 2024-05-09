<script>
export default {
  name: 'Demo39Child1',
  async setup() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const posts = await res.json();

    return { posts };
  },
};
</script>

<template>
  <div>
    <h2>hi! 我是子組件 1 - async setup()</h2>
    <div>{{ posts }}</div>
  </div>
</template>
