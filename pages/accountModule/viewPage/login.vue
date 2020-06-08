<template>
	<view class="content">
		<view>
			<text class="title">{{title}}</text>
			<div class="btn" @tap="loginClick">点击我进行登陆哦!</div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '我是登陆页面'
			}
		},
		onLoad() {

		},
		methods: {
		 // 登录方法
          loginClick () {
			  this.$store.commit('SET_TOKEN', '123456')
			  this.$plRouter.switchTab({
				  router: this.$routerConfig.home
			  })
		  }
		}
	}
</script>

<style lang="less">
	.content {
		text-align: center;
		height: 400upx;
		
		.logo {
			height: 200upx;
			width: 200upx;
			margin-top: 200upx;
		}
		.btn {
			margin-top: 20upx;
			font-size: 40upx;
			background-color: antiquewhite
		}
		.title {
			font-size: 36upx;
			color: #8f8f94;
		}
	}
</style>
