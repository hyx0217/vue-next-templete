import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
/* Layout */
import Layout from '@/layout/index.vue';
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *

 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    hidden: true                 if set true, item will not show in the sidebar(default is false)
    alwaysShow: true             if set true, will always show the root menu
                                 if not set alwaysShow, when item has more than one children route,
                                 it will becomes nested mode, otherwise not show the root menu
  }
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    meta: { title: '首页', hidden: false, icon: '', alwaysShow: true },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
        meta: { title: '首页', hidden: true, icon: '' }
      }
    ]
  },
  {
    path: '/compostions',
    redirect: '/compostions/index',
    component: Layout,
    meta: { title: 'Compostions API', hidden: false, icon: '', alwaysShow: true },
    children: [
      {
        path: 'index',
        name: 'compostions',
        component: () => import(/* webpackChunkName: "compostions" */ '../views/compostions/index.vue'),
        meta: { title: 'Compostions API', hidden: true, icon: '' }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    meta: { title: '组件通信', hidden: false, icon: '' },
    children: [
      {
        path: 'ftoc',
        name: 'ftoc',
        component: () => import(/* webpackChunkName: "ftoc" */ '../views/communication/ftoc.vue'),
        meta: { title: '父传子', hidden: false, icon: '' }
      },
      {
        path: 'vuex',
        name: 'vuex',
        component: () => import(/* webpackChunkName: "vuex" */ '../views/communication/vuex.vue'),
        meta: { title: 'Vuex', hidden: false, icon: '' }
      }
    ]
  },
  {
    path: '/menu-list',
    component: Layout,
    children: [
      {
        path: 'menu-list-1',
        name: 'menu-list-1',
        component: () => import(/* webpackChunkName: "menu-list-1" */ '../views/menu/menu-list101.vue'),
        meta: { title: '菜单1', hidden: false, icon: '' },
        children: [
          {
            path: 'menu-list-101',
            name: 'menu-list-101',
            component: () => import('../views/menu/menu-list101.vue'),
            meta: { title: '菜单1-1', hidden: false, icon: '' }
          }
        ]
      },
      {
        path: 'menu-list-2',
        name: 'menu-list-2',
        component: () => import(/* webpackChunkName: "menu-list-2"  */ '../views/menu/menu-list2.vue'),
        meta: { title: '菜单2', hidden: false, icon: '' }
      }
    ],
    meta: { title: '菜单管理', hidden: false, icon: '' }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
