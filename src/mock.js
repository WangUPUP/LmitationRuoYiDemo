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

// 获取用户信息
const getInfo = function() {
	let userInfo = {
		msg: '操作成功',
		code: 200,
		permissions: ['*:*:*'],
		roles: ['admin'],
		user: {
			searchValue: null,
			createBy: 'admin',
			createTime: '2018-03-16 11:33:00',
			updateBy: null,
			updateTime: null,
			remark: '管理员',
			dataScope: null,
			params: {},
			userId: 1,
			deptId: 103,
			userName: 'admin',
			nickName: '若依',
			email: 'ry@163.com',
			phonenumber: '15888888888',
			sex: '1',
			avatar: '',
			password: '$2a$10$7JB720yubVSZvUI0rEqK/.VqGOZTH.ulu33dHOiBE8ByOhJIrdAu2',
			salt: null,
			status: '0',
			delFlag: '0',
			loginIp: '127.0.0.1',
			loginDate: '2018-03-16T11:33:00.000+0800',
			dept: {
				searchValue: null,
				createBy: null,
				createTime: null,
				updateBy: null,
				updateTime: null,
				remark: null,
				dataScope: null,
				params: {},
				deptId: 103,
				parentId: 101,
				ancestors: null,
				deptName: '研发部门',
				orderNum: '1',
				leader: '若依',
				phone: null,
				email: null,
				status: '0',
				delFlag: null,
				parentName: null,
				children: []
			},
			roles: [
				{
					searchValue: null,
					createBy: null,
					createTime: null,
					updateBy: null,
					updateTime: null,
					remark: null,
					dataScope: '1',
					params: {},
					roleId: 1,
					roleName: '管理员',
					roleKey: 'admin',
					roleSort: '1',
					status: '0',
					delFlag: null,
					flag: false,
					menuIds: null,
					deptIds: null,
					admin: true
				}
			],
			roleIds: null,
			postIds: null,
			admin: true
		}
	}

	return {
		userInfo
	}
}

// 获取路由
const getRouters = function() {
	let respone = {
		msg: '操作成功',
		code: 200,
		data: [
			{
				name: 'System',
				path: '/system',
				hidden: false,
				redirect: 'noRedirect',
				component: 'Layout',
				alwaysShow: true,
				meta: { title: '系统管理', icon: 'system' },
				children: [
					{ name: 'User', path: 'user', hidden: false, component: 'system/user/index', meta: { title: '用户管理', icon: 'user' } },
					{ name: 'Role', path: 'role', hidden: false, component: 'system/role/index', meta: { title: '角色管理', icon: 'peoples' } },
					{ name: 'Menu', path: 'menu', hidden: false, component: 'system/menu/index', meta: { title: '菜单管理', icon: 'tree-table' } },
					{ name: 'Dept', path: 'dept', hidden: false, component: 'system/dept/index', meta: { title: '部门管理', icon: 'tree' } },
					{ name: 'Post', path: 'post', hidden: false, component: 'system/post/index', meta: { title: '岗位管理', icon: 'post' } },
					{ name: 'Dict', path: 'dict', hidden: false, component: 'system/dict/index', meta: { title: '字典管理', icon: 'dict' } },
					{ name: 'Config', path: 'config', hidden: false, component: 'system/config/index', meta: { title: '参数设置', icon: 'edit' } },
					{ name: 'Notice', path: 'notice', hidden: false, component: 'system/notice/index', meta: { title: '通知公告', icon: 'message' } },
					{
						name: 'Log',
						path: 'log',
						hidden: false,
						redirect: 'noRedirect',
						component: 'system/log/index',
						alwaysShow: true,
						meta: { title: '日志管理', icon: 'log' },
						children: [
							{ name: 'Operlog', path: 'operlog', hidden: false, component: 'monitor/operlog/index', meta: { title: '操作日志', icon: 'form' } },
							{
								name: 'Logininfor',
								path: 'logininfor',
								hidden: false,
								component: 'monitor/logininfor/index',
								meta: { title: '登录日志', icon: 'logininfor' }
							}
						]
					}
				]
			}
		]
	}

	return {
		respone
	}
}

Mock.mock('/login', 'post', login) // 登录
Mock.mock('/getinfo', 'get', getInfo) // 获取用户信息
Mock.mock('/getRouters', 'get', getRouters) // 获取路由信息
