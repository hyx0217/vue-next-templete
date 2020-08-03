import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
/* Layout */
import Layout from '@/layout/index.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
        meta: { title: '首页', hidden: false, icon: '' }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { title: '关于我', hidden: false, icon: '' }
      }
    ],
    meta: { title: '引导', hidden: false, icon: '' }
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
