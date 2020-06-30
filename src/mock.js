const Mock = require('mockjs')
// const qs = require('qs')

// const Random = Mock.Random
// 登录
const login = function(params) {
	// 获取请求中的参数
	params = JSON.parse(params.body)
	let status = {}
	if (params.username === 'admin' && params.password === '123456') {
		status = {
			msg: '登录成功',
			status: 200,
			token: '99999'
		}
	} else {
		status = {
			msg: '登录失败',
			status: 404,
			roles: ['admin', 'user']
		}
	}
	return {
		status
	}
	// let status = params.body
	// return {
	// 	status: status
	// }
}

Mock.mock('/login', 'post', login) // 登录
