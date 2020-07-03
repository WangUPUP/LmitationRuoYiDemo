<template>
	<section>
		<el-container>
			<el-aside width="200px">
				<!-- 页面logo -->
				<el-row class="asideLogo" type="flex" justify="center">
					<el-col :span="6">
						<img src="../assets/logo.png" />
					</el-col>
					<el-col :span="12">
						<span class="asideName">后台管理系统</span>
					</el-col>
				</el-row>
				<!-- 菜单栏 -->
				<el-row>
					<el-menu
						default-active="2"
						class="el-menu-vertical-demo"
						@open="handleOpen"
						@close="handleClose"
						background-color="#545c64"
						text-color="#fff"
						active-text-color="#ffd04b"
						:router="true"
					>
						<!-- 一级菜单 -->
						<template v-for="item in route">
							<el-submenu :key="item.name" :index="item.path">
								<template slot="title">
									<span>{{ item.meta.title }}</span>
								</template>
								<!-- 二级菜单  -->
								<template v-for="subitem in item.children">
									<el-submenu v-if="subitem.children" :key="subitem.name" :index="subitem.path">
										<template slot="title">
											<span>{{ subitem.meta.title }}</span>
										</template>
										<el-menu-item v-for="child in subitem.children" :key="child.name" :index="child.path" v-if="subitem.children">
											<template slot="title">
												<span>{{ child.meta.title }}</span>
											</template>
										</el-menu-item>
									</el-submenu>
									<el-menu-item v-else :key="subitem.name" :index="subitem.path">{{ subitem.meta.title }}</el-menu-item>
								</template>
							</el-submenu>
						</template>
					</el-menu>
				</el-row>
			</el-aside>
			<el-container>
				<!-- 导航栏 -->
				<el-header class="header">
					<el-card class="navbar">
						<el-row type="flex" justify="space-between">
							<el-col class="hamburger" :span="12">
								<el-row type="flex" justify="start">
									<i class="el-icon-s-fold"> </i>
									<el-breadcrumb separator="/">
										<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
										<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
									</el-breadcrumb>
								</el-row>
							</el-col>
							<el-col class="right-menu" :span="6">123</el-col>
						</el-row>
					</el-card>
				</el-header>
				<el-main>Main</el-main>
			</el-container>
		</el-container>
	</section>
</template>

<script>
export default {
	data() {
		return {
			route: [
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
								{
									name: 'Operlog',
									path: 'operlog',
									hidden: false,
									component: 'monitor/operlog/index',
									meta: { title: '操作日志', icon: 'form' }
								},
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
	},
	created() {},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath)
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath)
		}
	}
}
</script>

<style>
section {
	width: 100%;
	height: 900px;
}
/* .el-row {
	height: 850px;
} */

.el-menu {
	height: 850px;
	border-right: 0px !important;
}
img {
	width: 32px;
	height: 32px;
	margin: 10px auto;
}

.asideName {
	line-height: 50px;
}

.asideLogo {
	text-align: center;
	height: 50px;
	background-color: rgb(84, 92, 100);
	color: rgb(255, 255, 255);
}

.el-header {
	padding: 0;
	margin: 0;
	background-color: #fff;
	border-bottom: 1px solid #ebeef5;
}

.header {
	height: 80px !important;
}

.navbar {
	height: 50px !important;
}

.hamburger {
	font-size: 25px;
	font-weight: normal;
	margin: 8px 10px;
}

.el-card__body {
	padding: 0;
}

.el-icon-s-fold {
	margin-right: 20px;
}

.el-breadcrumb {
	margin-top: 8px;
}
</style>
