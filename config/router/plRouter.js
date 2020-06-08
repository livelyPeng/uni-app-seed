/* 
 * 由于uni-app没有Vue中的全局钩子函数，所以封装了plRouter对象。
 * 注意：应用中的路由跳转尽量使用该plRouter的方法，并配合routesConfig中的路由表对象进行跳转。
 * 
 */
class plRouter {
	// 构造函数
	constructor(arg) {
		this.callBack = () => {};
	}
    // 钩子函数
	beforeEach(callBack) {
		if (callBack instanceof Function) this.callBack = callBack;
	}
    // navigateTo 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面
	push(to) {
		this.callBack("navigateTo", to);
	}
   // redirectTo 关闭当前页面，跳转到应用内的某个页面。
	redirectTo(to) {
		this.callBack("redirectTo", to);
	}
    // reLaunch 关闭所有页面，打开到应用内的某个页面。
	reLaunch(to) {
		this.callBack("reLaunch", to);
	}
    // switchTab 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
	switchTab(to) {
		this.callBack("switchTab", to);
	}
   // navigateBack 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，
   //   决定需要返回几层
	back(delta) {
		uni.navigateBack({
			delta
		})
	}
}
export default new plRouter()