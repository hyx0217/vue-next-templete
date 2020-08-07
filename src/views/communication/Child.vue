<template>
  <div>
    <div>
      <h3>props属性传递</h3>
      <span>{{count}}</span>
    </div>
    <div>
      <h3>provide注入传递</h3>
      <span>我是儿子组件的：{{provideMsg}}</span>
      <button @click="changeFather">子组件改变provideMsg</button>
      <child-a></child-a>
    </div>
  </div>

</template>
<script lang="ts">
import { defineComponent, inject } from 'vue';
import ChildA from '@/views/communication/ChildA.vue';
export default defineComponent({
  props: {
    count: {
      type: Number,
      default: () => 0
    }
  },
  components: {
    ChildA
  },
  setup(props, { emit }) {
    const provideMsg = inject('provideMsg');
    const changeFather = () => {
      emit('changepro', 'child change');
    };
    return { provideMsg, changeFather };
  }
});
</script>;
