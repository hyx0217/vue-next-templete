<template>
  <div class="menu-list">
    <div class="menu-item" v-for="(item, index) in list" :key="index">
      <div :class="['menu-parent', 'menu-sub']" v-if="item.children && item.children.length > 0" @click.prevent="showSub">
        {{ item.meta.title }}<my-icon name="arrow-down"></my-icon>
        <menu-list :list="item.children" v-show="opened"></menu-list>
      </div>
      <div class="menu-parent" v-else>{{ item.meta.title }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'MenuList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const opened = ref(false)
    const showSub = () => {
      opened.value = !opened.value
    }
    return { showSub, opened }
  }
})
</script>
<style lang="scss" scoped>
.menu-list {
  padding: 0 20px;
  height: 100%;
}
.menu-parent {
  cursor: pointer;
}
.menu-item {
  color: #fff;
  font-size: 20px;
}
</style>
