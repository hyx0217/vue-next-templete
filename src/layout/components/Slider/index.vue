<template>
  <div class="slider-container">
    <div class="slider-logo">
      <router-link class="sidebar-logo-link" to="/">
        <img v-if="showLogo" src="@/assets/images/logo.png" class="sidebar-logo" />
        <h1 v-else class="sidebar-title">{{ title }}</h1>
      </router-link>
    </div>
    <div class="menu">
       <menu-list :list="routerList"></menu-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import MenuList from './menuList.vue';
export default defineComponent({
  components: { MenuList },
  name: 'Slider',
  setup() {
    const showLogo = true;
    const title = 'Vue-next';
    const routerList = reactive(useRouter().options.routes);
    return { showLogo, title, routerList };
  }
});
</script>

<style lang="scss" scoped>
.slider-logo {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }
}
.menu{
  padding: 0 20px;
}
</style>
