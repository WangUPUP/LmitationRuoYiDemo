import router from './router'
import store from './store'
import { getToken } from '../src/utils/auth'

// 路由白名单 免登录直接进入
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
	if (getToken()) {
		// 有 token
		if (to.path === '/login') {
			next()
		} else {
			// 判断当前用户 是否 已拉取用户信息
			if (store.getters.roles.length === 0) {
				store.dispatch('GetInfo').then(res => {
					const roles = res.data.userInfo.roles
					store.dispatch('GenerateRoutes', { roles }).then(accessedRoutes => {
						console.log(accessedRoutes)
						router.addRoutes(accessedRoutes) // 动态添加可访问路由
						// next({ ...to, replace: true }) // hack 方法, 确保 addRoutes 已完成
						next()
					})
				})
			}
		}
	} else {
		// 没有token
		if (whiteList.indexOf(to.path) !== -1) {
			next()
		} else {
			// 否则全部重定向到login
			next(`/login?redirect=${to.fullPath}`)
		}
	}
})
