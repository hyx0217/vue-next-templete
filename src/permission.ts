import router from './router'
import store from './store'
import { getToken } from './utils/auth'

router.beforeEach((to, from, next) => {
  //白名单路由
  const whiteUrl = ['/login', '/forget', '/register']
  if (getToken()) {
    if (to.path === '/login') {
      next('/home')
    } else {
      store.dispatch('GetUser')
    }
    next()
  } else {
    if (whiteUrl.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
