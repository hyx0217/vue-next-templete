<template>
  <div class="container">
    <section>
      <h3>Ref</h3>
      <p>{{val}}</p>
      <h3>isRef（检查一个值是否为一个 ref 对象）</h3>
      <p>{{isVal}}</p>
    </section>
  </div>
</template>;
<script lang="ts">
import { defineComponent, ref, isRef } from 'vue';
export default defineComponent({
  setup() {
    const val = ref('I am a ref');
    const isVal = isRef(val);
    return { val, isVal };
  }
});
</script>
<style lang="scss" scoped>
.container{
  padding: 20px;
}
</style>
