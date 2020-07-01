<template>
	<section>
		<el-card>
			<el-row class="title"><h1>欢迎,请登录</h1></el-row>
			<el-row>
				<el-form ref="loginFrom" :model="loginFrom" label-width="80px" :rules="loginRules" style="margin-top:50px">
					<el-form-item label="账号" prop="username">
						<el-input v-model="loginFrom.username"> </el-input>
					</el-form-item>
					<el-form-item label="密码" prop="password">
						<el-input v-model="loginFrom.password"> </el-input>
					</el-form-item>
				</el-form>
			</el-row>
			<el-row type="flex" justify="end">
				<el-col :span="4">
					<el-button @click="login" type="primary">登录</el-button>
				</el-col>
				<el-col :span="4">
					<el-button @click="restLoginForm('loginForm')" type="primary">重置</el-button>
				</el-col>
			</el-row>
		</el-card>
	</section>
</template>

<script>
import Cookies from 'js-cookie'
export default {
	name: 'Login',
	data() {
		return {
			loginFrom: {
				username: '',
				password: ''
			},
			loginRules: {
				username: [
					{
						require: true,
						trigger: 'blur',
						message: '用户名不能为空'
					}
				],
				password: [
					{
						require: true,
						trigger: 'blur',
						message: '密码不能为空'
					}
				]
			},
			redirect: undefined
		}
	},

	methods: {
		getCookies() {
			// 从store中获取 username password
			const username = Cookies.get('username')
			const password = Cookies.get('password')

			this.loginFrom = {
				username: username === undefined ? this.loginFrom.username : username,
				password: password === undefined ? this.loginFrom.password : password
			}
		},
		login() {
			this.$refs.loginFrom.validate(valid => {
				if (valid) {
					Cookies.set('username', this.loginFrom.username, { expires: 30 })
					Cookies.set('password', this.loginFrom.password, { expires: 30 })
				}

				// 将登录表单信息存入 store 中state对象中
				this.$store.dispatch('Login', this.loginFrom).then(() => {
					// this.$router.push({ path: this.redirect || '/' })
					this.$router.push({ path: '/home' })
				})
			})
		},
		restLoginForm(loginFrom) {}
	},
	watch: {
		$router: {
			handler: function(route) {
				this.redirect = route.query && route.query.redirect
			}
		}
	}
}
</script>

<style scoped>
section {
	position: relative;
	width: 100%;
	height: 900px;
}

.el-card {
	position: absolute;
	background-color: #e3eaf9;
	width: 600px;
	height: 400px;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

.title {
	text-align: center;
	margin-top: 50px;
}

.login {
	position: absolute;
	top: 40%;
	left: 20%;
}

.btns {
	position: absolute;
	bottom: 10%;
	right: 28%;
}

.el-button {
	margin: 0 15px;
}
</style>
