import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
	{
		path: '/redirect',
		component: Layout,
		hidden: true,
		children: [
			{
				path: '/redirect/:path(.*)',
				component: resolve => require(['@/views/redirect'], resolve)
			}
		]
	},
	{
		path: '/login',
		component: resolve => require(['@/views/login'], resolve)
	}
]

export default new Router({
	routes: constantRoutes
})
