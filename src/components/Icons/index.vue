<template>
  <i :class="['my-icon-' + name, 'iconfont','my-icon']"
     :style="{ fontSize: size + 'px' }" />
</template>
<script lang="ts">
export default {
  name: 'MyIcon',
  props: {
    name: { type: String, default: '' },
    size: {
      type: String,
      default: '14'
    }
  }
};
</script>
<style>
@font-face {
  font-family: 'iconfont'; /* project id 1976837 */
  src: url('//at.alicdn.com/t/font_1976837_rwwj5dfzhp.eot');
  src: url('//at.alicdn.com/t/font_1976837_rwwj5dfzhp.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1976837_rwwj5dfzhp.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1976837_rwwj5dfzhp.woff') format('woff'),
    url('//at.alicdn.com/t/font_1976837_rwwj5dfzhp.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1976837_rwwj5dfzhp.svg#iconfont') format('svg');
}
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 14px;
  font-style: normal;
  display: inline-block;
  font-family: Ionicons;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.my-icon-arrow-down:before {
  content: '\e8a4';
}
.my-icon-arrow-up:before {
  content: '\e74c';
}
.my-icon-arrow-right:before {
  content: '\e748';
}
.my-icon-arrow-left:before {
  content: '\e749';
}
</style>
