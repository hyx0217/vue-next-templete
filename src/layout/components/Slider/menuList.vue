<template>
  <ul class="menu-list">
    <li class="menu-item"
         v-for="(item, index) in list"
         :key="index">
      <div class="menu-sub"
           v-if="item.children && item.children.length > 0">
        <div class="menu-sub-main" @click.prevent="showSub(item)">
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
          <router-link :class="[activePath===resolvePath(item.path)?'active':'','menu-sub-main']" :to="resolvePath(item.path)">{{ item.meta.title }}</router-link>
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue';
import { RouteRecordRaw, useRoute } from 'vue-router';
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
    const currentRouter = useRoute().path;
    const resolvePath = (routePath: string) => {
      return path.resolve(props.basePath, routePath);
    };
    const activePath = inject('activePath');
    return { showSub, resolvePath, currentRouter, activePath };
  }
});
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.menu-list {
  height: 100%;
}
.menu-sub-main{
  display: inline-block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  width: 100%;
  color: $menuText;
    &:hover{
    color: $menuActiveText;
  }
  &.active{
    color: $menuActiveText;
    background-color: $subMenuBg;
  }
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
  .menu-list{
    background:$subMenuBg;
    padding-left:20px ;
  }
  .menu-item {
    display: flex;
    align-items: center;
  }
}
.menu-item {
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

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
