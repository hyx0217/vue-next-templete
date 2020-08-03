<template>
  <div class="menu-list">
    <div class="menu-item"
         v-for="(item, index) in list"
         :key="index">
      <div class="menu-sub"
           v-if="item.children && item.children.length > 0">
        <div @click.prevent="showSub(item)">
          <!-- <my-icon class="left-icon"
                   name="arrow-down"></my-icon> -->
          <span>{{ item.meta.title }}</span>
          <my-icon :class="[item.opened?'arrow-opened':'','right-icon']"
                   name="arrow-down"></my-icon>
        </div>
        <menu-list :list="item.children"
                   v-show="item.opened"
                   :basePath='resolvePath(item.path)'></menu-list>
      </div>
      <div class="menu-parent"
           v-else>
        <div>
          <router-link :to="resolvePath(item.path)">{{ item.meta.title }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import path from 'path';
export default defineComponent({
  name: 'MenuList',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    basePath: {
      type: String,
      default: () => ''
    }
  },
  setup(props) {
    interface RouteRecordRaw {
      opened: boolean;
    }
    const showSub = (item: RouteRecordRaw) => {
      item.opened = !item.opened;
    };
    const resolvePath = (routePath: string) => {
      return path.resolve(props.basePath, routePath);
    };
    return { showSub, resolvePath };
  }
});
</script>
<style lang="scss" scoped>
.menu-list {
  height: 100%;
}
.menu-sub,
.menu-parent {
  position: relative;
  z-index: 1;
  line-height: 1;
  width: 100%;

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.menu-sub {
  .menu-item {
    display: flex;
    align-items: center;
    padding: 14px 0;
  }
}
.menu-item {
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 10px 0;
  .left-icon {
    float: left;
    margin-right: 10px;
  }
  .right-icon {
    float: right;
  }
}
.arrow-opened {
  transform: rotate(180deg);
  transition: 0.3s all;
}
</style>
