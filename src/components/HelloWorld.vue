<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ count }}</h2>
    <button @click="increse">+</button>
    <button @click="decrese">-</button>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'hello world',
  props: {
    msg: String
  },
  setup() {
    const store = useStore();
    const count = ref(store.state.count.count);
    const increse = () => {
      store.dispatch('count/Increment', count.value++);
    };
    const decrese = () => {
      store.dispatch('count/Decrement', count.value--);
    };
    // 暴露给模板
    onMounted(() => {
      console.log('mounted');
    });
    return {
      count,
      increse,
      decrese
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
