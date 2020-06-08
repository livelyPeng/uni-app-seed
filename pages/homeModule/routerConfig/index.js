// 路径前面必须加/ ， 错误方式：pages/accountModule/viewPage/index

export default {
	home: {
		name: "首页",
		path: "/pages/homeModule/viewPage/index",
		requiresAuth: true
	},
	text: {
		name: "测试",
		path: "/pages/homeModule/viewPage/texts",
		requiresAuth: true
	},
	my: {
		name: "我的",
		path: "/pages/homeModule/viewPage/my",
		requiresAuth: true
	}
}