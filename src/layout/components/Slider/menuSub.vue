<template>
  <div :class="['menu-parent', 'menu-sub']" v-if="item.children && item.children.length > 0" @click.prevent="showSub">
    {{ item.meta.title }}<my-icon name="arrow-down"></my-icon>
    <menu-list :list="item.children" v-show="opened"></menu-list>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    this.data
  }
})
</script>
