<template>
  <div>
    <span>我是孙子组件的：{{provideMsg}}</span>
  </div>

</template>
<script lang="ts">
import { defineComponent, inject } from 'vue';
export default defineComponent({
  setup() {
    const provideMsg = inject('provideMsg');
    return { provideMsg };
  }
});
</script>;
