import router from './router'
import store from './store'
import { getToken } from '../src/utils/auth'

router.beforeEach((to, from, next) => {
	if (getToken()) {
		// has token
		if (to.path === '/login') {
			next()
			// next({
			// 	path: '/login'
			// })
		} else {
			// 判断当前用户 是否 已拉取用户信息
			if (store.getters.roles.length === 0) {
			}
		}
	}
})
