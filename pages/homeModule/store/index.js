import Vue from 'vue'
export default {
  namespaced: true,
  state: {
	  name: '欢迎来到uni-app，该种子作者PL'
  },
  mutations: {},
  actions: {
    // 请求
    text ({ commit }, params) {
      // console.log(Vue.http, '----> 请求方法')
    }
  }
}