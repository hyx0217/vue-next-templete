<template>
  <section class="app-main">
    <router-view />
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'AppMain',
  setup() {
    const $route = useRoute();
    const key = computed(() => $route.path);
    return { key };
  }
});
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  background: #fff;
  border: 20px solid #f5f7f9;
}
/* .fixed-header + .app-main {
  padding-top: 50px;
} */
</style>
