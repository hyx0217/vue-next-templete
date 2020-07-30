<template>
  <router-view />
</template>

<script>
import Myicon from './components/Icons/index.vue'
const App = {
  components: {
    Myicon
  }
}
export { App as default }
</script>
<style>
@import './assets/styles/index.scss';
</style>
