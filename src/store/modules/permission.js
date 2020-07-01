import { constantRoutes } from '@/router'
import { getRouters } from '@/api/menu'
import Layout from '@/layout/index'

const permission = {
	state: {
		routers: [],
		addRoutes: []
	},
	mutations: {
		SET_ROUTES: (state, routes) => {
			state.addRoutes = routes
			state.routes = constantRoutes.concat(routes)
		}
	},
	actions: {
		// 生成路由
		GenerateRoutes({ commit }) {
			return new Promise(resolve => {
				// 向后端请求 路由信息
				getRouters().then(res => {
					const accessedRoutes = filterAsyncRouters(res.data.respone.data)
					// accessedRoutes.push({ path: '*', redirect: '/404', hidden: true })
					commit('SET_ROUTES', accessedRoutes)
					resolve(accessedRoutes)
				})
			})
		}
	}
}

// 遍历后台传来的路由参数, 转换为组件对象
function filterAsyncRouters(asyncRoutersMap) {
	// 通过 js array .filter() 对每个参数进行处理 返回一个新数组
	return asyncRoutersMap.filter(route => {
		if (route.component) {
			// Layout 组件特殊处理
			if (route.component === 'Layout') {
				route.component = Layout
			} else {
				route.component = loadView(route.component)
			}
		}
		if (route.children != null && route.children && route.children.length) {
			route.children = filterAsyncRouters(route.children)
		}
		return true
	})
}

export const loadView = view => {
	return resolve => require([`@/views/${view}`], resolve)
}

export default permission
