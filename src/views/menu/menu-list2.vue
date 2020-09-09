<template>
  <div>
    <h2>Script Setup + CSS Variables Injection</h2>
    <p>
      <span class="style-vars">This should be red</span>
      <button
        class="script-setup-change"
        @click="change"
      >
        click to change
      </button>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
export default {
};
export const color = ref('red');
export function change() {
  color.value = color.value === 'red' ? 'green' : 'red';
}
</script>

<style scoped vars="{ color }">
span {
  color: var(--color);
}
</style>
