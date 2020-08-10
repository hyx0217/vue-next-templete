<template>
  <div>
    <span>我是孙子组件的：{{provideMsg}}</span>
    <section>
    <button class="btn default-btn mtb20" @click="changeGrandFather">孙子组件改变Provide</button>
    </section>
  </div>

</template>
<script lang="ts">
import { defineComponent, inject } from 'vue';
export default defineComponent({
  setup() {
    const provideMsg = inject('provideMsg');
    const changeGrandFather = () => {
      provideMsg.value = 'grandson change';
    };
    return { provideMsg, changeGrandFather };
  }
});
</script>;
