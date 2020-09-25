<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ count }}</h2>
    <button @click="increse">
      +
    </button>
    <button @click="decrese">
      -
    </button>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { defineComponent, onMounted, computed } from 'vue';

export default defineComponent({
  name: 'Vuex',
  props: {
    msg: { type: String, default: '' }
  },
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count.count);
    console.log(store);
    const increse = () => {
      store.dispatch('count/Increment');
    };
    const decrese = () => {
      store.dispatch('count/Decrement');
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

