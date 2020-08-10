<template>
  <div>
    <div>
      <h3>props属性传递</h3>
      <span>{{count}}</span>
        <button class="btn default-btn mlr20"
                @click="increse">+</button>
        <button class="btn default-btn mlr20"
                @click="decrese">-</button>
                <button class="btn default-btn mlr20"
                @click="tozero">归零</button>
    </div>
    <div>
      <h3>provide注入传递</h3>
      <span>我是儿子组件的：{{provideMsg}}</span>
      <section>
        <button class="btn default-btn mtb20"
                @click="changeFather">子组件改变provideMsg</button>
      </section>
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
      provideMsg.value = 'child change';
    };
    const increse = () => {
      emit('increse');
    };
    const decrese = () => {
      emit('decrese');
    };
    const tozero = () => {
      emit('tozero', 0);
    };
    return { increse, decrese, tozero, provideMsg, changeFather };
  }
});
</script>;
