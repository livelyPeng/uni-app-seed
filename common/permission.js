import Vue from 'vue'
import { plRouter } from '../config'
import store from '../store'
import $utils from './utils.js'
// 路由拦截器
plRouter.beforeEach((navType, to) => {
	// routerCfg 路由配置表
	let routerCfg  = store.state.routerConfig
	// 无router对象
	if (to.router === undefined) {
		throw ("路由钩子函数中没有找到to.router对象，路由信息:" + JSON.stringify(to));
	}
	// 如果我当前路由是我的登录页面，但是我token存在，那么就去首页
	if (to.router.path === routerCfg.login.path && store.state.token) {
		uni.switchTab({
			url: $utils.objParseUrlAndParam(routerCfg.home.path, to.query)
		})
		return;
	}
	// 过滤需要权限的页面
	if (to.router.requiresAuth) {
		if (store.state.token) {
			// console.log("已经登录")
			uni[navType]({
				url: $utils.objParseUrlAndParam(to.router.path, to.query)
			})
		} else {
			// console.log("无权限")
			uni.reLaunch({
				url: $utils.objParseUrlAndParam(routerCfg.login.path)
			})
		}
	} else {
		// console.log("无需过滤路由")
		uni[navType]({
			url: $utils.objParseUrlAndParam(to.router.path, to.query)
		})
	}
})