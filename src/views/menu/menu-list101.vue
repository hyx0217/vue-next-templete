<template>
    <h3>获取鼠标坐标，公共方法引入</h3>
    <div class="mouse-box">
      <span>x:{{x}}</span>
      <span>y:{{y}}</span>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useMousePosition } from '@/libs/mouse';
export default defineComponent({
  setup() {
    const { x, y } = useMousePosition();
    return { x, y };
  }
});
</script>
<style lang="scss" scoped>
.mouse-box {
  width: 200px;
  height: 50px;
}
</style>
