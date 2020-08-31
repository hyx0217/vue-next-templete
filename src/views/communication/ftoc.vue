<template>
  <div>
    <div class="box">
      <child ref="child"
             :count="count"
             @increse="()=>count++"
             @decrese="()=>count--"
             @tozero="(val)=>count=val"></child>
      <section>
        <button class="btn default-btn"
                @click="changeMsg">父组件改变provide</button>
      </section>
      <section>
        <button class="btn default-btn mtb20"
                @click="refChangeMsg">通过$ref调用子组件方法改变provide</button>
      </section>
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
    const child = ref(Child);
    const count = ref(1);
    const provideMsg = ref('vue is good');
    const changeMsg = () => {
      provideMsg.value = 'father change';
    };
    const refChangeMsg = () => {
      console.log(child);
      child.value.changeFather();
    };
    provide('provideMsg', provideMsg);
    return { count, changeMsg, provideMsg, child, refChangeMsg };
  }
});
</script>
