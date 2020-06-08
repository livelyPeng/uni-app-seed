/*
  高仿axios拦截机制
*/
import http from './httpRequest'
// 请求地址
http.config.baseUrl = "http://localhost:80/api/"
//设置请求前拦截器
http.interceptor.request = (config) => {
	config.header = {
		"token": "我是token"
	}
}
//设置请求结束后拦截器
http.interceptor.response = (response) => {
	//判断返回状态 执行相应操作
	return response;
}

// 写入Vue插件
export default {
  install (Vue) {
    Vue.prototype.$http = http
    Vue.http = http
  }
}