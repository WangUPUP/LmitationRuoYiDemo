import request from '../utils/request'

// 登录方法
export function login(username, password) {
	const data = {
		username,
		password
	}

	return request({
		url: '/login',
		method: 'post',
		data: data
	})
}

// 获取用户信息
export function getInfo() {
	return request({
		url: '/getinfo',
		method: 'get'
	})
}
