import axios from 'axios'
// import { Notification, MessageBox, Message } from 'element-ui'
// import store from '../store'
import { getToken } from '../utils/auth'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// 创建 axios 实例
const service = axios.create({
	// axios 中请求配置有 baseURL 选项, 表示请求 URL 公共部分
	// baseURL: 'locahost:8080',
	// 超时
	time: 10000
})

// request 拦截器
service.interceptors.request.use(
	config => {
		// 是否需要设置 token
		const isToken = (config.headers || {}) === false
		if (getToken() && !isToken) {
			// 让每个请求携带自定义请求头
			config.headers['Authorization'] = 'Beaer' + getToken()
		}
		return config
	},
	error => {
		console.log(error)
		Promise.reject(error)
	}
)

export default service
