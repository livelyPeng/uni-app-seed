/*
 * 路由表对象：
 * 该路由表挂载在Vue原型中 $routerConfig
 * 
 * 示例：this.$plRouter.push({router:this.$routerConfig.textTemplate, query:{a:1}})
 * 
 * 注意：所有在pages目录下新建的页面都必须在"路由表"中进行声明，并且在框架的pages.json注册。
 * 
 * 配置参数项说明： 
 * path:必填配置 （路由地址）（注意：必须跟pages.json文件给定的路径一致）
 * name:可选配置 （路由名称）
 * requiresAuth:可选配置 （是否权限路由）
 */
// 权限路由
export default {
// textTemplate 名字不能重复。必须唯一
	// textTemplate: {
	// 	name: "我是模板",
	// 	path: "/pages/text",
	// 	requiresAuth: true
	// }
}