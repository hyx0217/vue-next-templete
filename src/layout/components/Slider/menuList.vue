<template>
  <div class="menu-list">
    <div class="menu-item" v-for="(item, index) in list" :key="index">
      <div :class="['menu-parent', 'menu-sub']" v-if="item.children && item.children.length > 0">
        <div @click.prevent="showSub(item)">{{ item.meta.title }}<my-icon :name="item.opened ? 'arrow-down' : 'arrow-up'"></my-icon></div>
        <menu-list :list="item.children" v-show="item.opened"></menu-list>
      </div>
      <div class="menu-parent" v-else>
        <router-link :to="item.name">{{ item.meta.title }}</router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RouteRecordRaw } from 'vue-router';

export default defineComponent({
  name: 'MenuList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    interface RouteRecordRaw {
      opened: boolean;
    }
    const opened = ref(false);
    const showSub = (item: RouteRecordRaw) => {
      item.opened = !item.opened;
    };
    return { showSub, opened };
  }
});
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
