import request from '@/utils/request'
//登录
export const login = (data: any) => request({ url: '/login', method: 'post', data })

//注册
export const register = (data: any) => request({ url: '/register', method: 'post', data })

//重置密码
export const forget = (data: any) => request({ url: '/forget', method: 'post', data })
//重置密码
export const getUser = (data: any) => request({ url: '/getUser', method: 'post', data })
