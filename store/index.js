import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
	    token: uni.getStorageSync("token") || "", // token标识
		routerConfig: {} // 路由配置表
    },
    mutations: {
	    // 设置TOKEN
		SET_TOKEN(state, token) {
			state.token = token;
			// 存储数据
			uni.setStorageSync("token", token);
		},
		// 合并路由配置表
		SETROUTERCONFIG (state, obj) {
			let objs = {}
			Object.keys(obj).forEach(function(key){
				if (JSON.stringify(obj[key]) !== "{}") {
					objs = Object.assign({}, objs, obj[key])
				}
			});
			state.routerConfig = Object.assign({}, state.routerConfig, objs);
		}
	},
    actions: {}
})