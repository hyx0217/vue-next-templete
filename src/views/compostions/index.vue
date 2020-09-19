<template>
  <div class="container">
    <section>
      <h3>Ref</h3>
      <p>{{ val }}</p>
      <h3>isRef（检查一个值是否为一个 ref 对象）</h3>
      <p>{{ isVal }}</p>
    </section>
    <section ref="title">
      <h3>通过refs获取该Title（对应原先的this.$refs）</h3>
    </section>
  </div>
</template>;
<script lang="ts">
import { defineComponent, ref, isRef, nextTick } from 'vue';
export default defineComponent({
  setup() {
    const val = ref('I am a ref');
    const isVal = isRef(val);
    const title = ref(null);
    nextTick(() => {
      console.log('dom已挂载');
      console.log(title.value);
    });
    return { val, isVal, title };
  }
});
</script>
<style lang="scss" scoped>
.container {
  padding: 20px;
}
</style>
