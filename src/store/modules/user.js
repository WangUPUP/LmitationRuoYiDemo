import { login, getInfo } from '../../api/login'
import { getToken, setToken } from '../../utils/auth'

const user = {
	// 创建一个state对象
	state: {
		token: getToken(),
		name: '',
		roles: []
	},
	// 统一放置 修改state对象的方法, 并使用常量命名
	// 只能通过 mutations 中的方法修改state 对象
	// 必须同步执行
	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token
		},
		SET_NAME: (state, name) => {
			state.name = name
		},
		SET_ROLES: (state, roles) => {
			state.roles = roles
		}
	},

	// 提交 mutations, 不直接修改状态, 可以包含任意异步操作
	actions: {
		// Login 方法 处理登录表单中的信息, 然后将信息传入, api/login 方法中发起请求
		Login({ commit }, userinfo) {
			const username = userinfo.username.trim()
			const password = userinfo.password
			return new Promise((resolve, reject) => {
				login(username, password)
					.then(res => {
						// 请求成功 将返回的token信息存入cookies中
						let params = res.data.status
						// setToken(res.token)
						setToken(params.token)
						// 将返回的token 信息存入 store 中 state中
						// commit('SET_TOKEN', res.token)
						commit('SET_TOKEN', params.token)
						resolve()
					})
					.catch(error => {
						reject(error)
					})
			})
		},

		// 获取用户信息
		GetInfo({ commit, state }) {
			return new Promise((resolve, reject) => {
				getInfo()
					.then(res => {
						const info = res.data.userInfo
						if (info.roles && info.roles.length > 0) {
							commit('SET_ROLES', info.roles)
						} else {
							commit('SET_ROLES', ['ROLES_DEFAULT'])
						}
						commit('SET_NAME', info.username)
						resolve(res)
					})
					.catch(error => {
						reject(error)
					})
			})
		}
	}
}

export default user
