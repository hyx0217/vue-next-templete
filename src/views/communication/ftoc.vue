<template>
  <div>
    <div class="box">
      <child :count="count" @changepro="(val)=>provideMsg=val"></child>
      <button @click="increse">+</button>
      <button @click="decrese">-</button>
      <button @click="changeMsg">改变Provide</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, provide } from 'vue';
import Child from '@/views/communication/Child.vue';
export default defineComponent({
  name: 'FtoC',
  components: {
    Child
  },
  setup() {
    const count = ref(1);
    const increse = () => {
      count.value++;
    };
    const decrese = () => {
      count.value--;
    };
    const provideMsg = ref('react is good');
    const changeMsg = () => {
      provideMsg.value = 'vue is better';
    };
    provide('provideMsg', provideMsg);
    return { count, increse, decrese, changeMsg, provideMsg };
  }
});
</script>
