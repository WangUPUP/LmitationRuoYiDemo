// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'es6-promise/auto'
import './assets/css/global.css'
import store from './store'
// 引入路由导航
import './permission'

import Vuex from 'vuex'
import VCharts from 'v-charts'

import './assets/icons'

require('./mock')

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VCharts)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
