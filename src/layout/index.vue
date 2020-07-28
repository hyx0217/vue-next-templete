<template>
  <div class="app-wrapper">
    <slider class="slider"></slider>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script lang="ts">
import Slider from './components/Slider.vue'
import Navbar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Layout',
  components: { Slider, Navbar, AppMain }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
.slider {
  -webkit-transition: width 0.28s;
  transition: width 0.28s;
  width: 210px !important;
  background-color: #304156;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
.main-container {
  min-height: 100%;
  -webkit-transition: margin-left 0.28s;
  transition: margin-left 0.28s;
  margin-left: 210px;
  position: relative;
}
.nav {
  width: 100%;
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>
