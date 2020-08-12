import { Ref, ref, onMounted, onUnmounted } from 'vue';
export function useMousePosition() {
  const x: Ref<number> = ref<number>(0);
  const y: Ref<number> = ref<number>(0);

  function update(e: any) {
    x.value = e.offsetX;
    y.value = e.offsetY;
    console.log(x.value);
  }

  onMounted(() => {
    window.addEventListener('mousemove', update);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });

  return { x, y };
}
