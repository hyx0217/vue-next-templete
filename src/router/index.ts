import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
/* Layout */
import Layout from '@/layout/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect:'/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
        meta: { title: '首页', hidden: false, icon: '' }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { title: '关于我', hidden: false, icon: '' }
      }
    ],
    meta: { title: '引导', hidden: false, icon: '' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
