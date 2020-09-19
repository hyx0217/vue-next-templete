<template>
  <ul class="menu-list">
    <li class="menu-item"
        v-for="(item, index) in routerList"
        :key="index">
      <div class="menu-sub"
           v-if=" item.children && item.children.length > 0 && !item.meta.alwaysShow ">
        <div class="menu-sub-main"
             @click.prevent="showSub(item)">
          <!-- <my-icon class="left-icon"
                   name="arrow-down"></my-icon> -->
          <span>{{ item.meta.title }}</span>
          <my-icon :class="[item.opened?'arrow-opened':'','right-icon']"
                   name="arrow-down" />
        </div>
        <menu-list :list="item.children"
                   v-show="item.opened"
                   :base-path="resolvePath(item)" />
      </div>
      <div class="menu-parent"
           v-else>
        <router-link :class="[activePath===resolvePath(item)?'active':'','menu-sub-main']"
                     :to="resolvePath(item)">
          {{ item.meta.title }}
        </router-link>
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
    interface ShowOpen {
      opened: boolean;
    }
    const routerList = props.list.filter((item: any) => {
      return item.meta.hidden === false;
    });
    const showSub = (item: ShowOpen) => {
      item.opened = !item.opened;
    };
    const currentRouter = useRoute().path;
    const resolvePath = (item: RouteRecordRaw) => {
      if (item.redirect) {
        return path.resolve(props.basePath, item.redirect);
      } else {
        return path.resolve(props.basePath, item.path);
      }
    };
    /* accept father component's activePath */
    const activePath = inject('activePath');

    /*  const hasChild: boolean = (children: [], parent: RouteRecordRaw): boolean => {
      if(parent.)
      return true;
    }; */
    return { showSub, resolvePath, currentRouter, activePath, routerList };
  }
});
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.menu-list {
  height: 100%;
}
.menu-sub-main {
  display: inline-block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  width: 100%;
  color: $menuText;
  &:hover {
    color: $menuActiveText;
  }
  &.active {
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
  .menu-list {
    background: $subMenuBg;
    padding-left: 20px;
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
