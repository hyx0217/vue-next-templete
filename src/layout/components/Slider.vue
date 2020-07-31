<template>
  <div class="slider-container">
    <div class="slider-logo">
      <router-link class="sidebar-logo-link" to="/">
        <img v-if="showLogo" src="@/assets/images/logo.png" class="sidebar-logo" />
        <h1 v-else class="sidebar-title">{{ title }}</h1>
      </router-link>
    </div>
    <div class="menu-list">
      <div class="menu-item" v-for="(item, index) in routerList" :key="index">
        <div>
          <div class="slider-parent">{{ item.meta.title }}<my-icon name="arrow-down"></my-icon></div>
          <div v-for="(node, i) in item.children" :key="i">
            <router-link :to="node.path">
              {{ node.meta.title }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
// import Myicon from '@/components/Icons/index.vue'
export default defineComponent({
  // components: { Myicon },
  name: 'Slider',
  setup() {
    const showLogo = true
    const title = 'Vue-next'
    const routerList = useRouter().options.routes
    console.log(routerList)
    return { showLogo, title, routerList }
  }
})
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
.slider-parent {
  cursor: pointer;
}
.menu-list {
  padding: 0 20px;
  height: 100%;
  & > .menu-item {
    color: #fff;
    font-size: 20px;
    padding: 10px 0;
  }
}
</style>
