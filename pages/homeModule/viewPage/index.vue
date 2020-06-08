<template>
	<view class="content">
		 <map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers"/>
	 	<view>
			<text class="title" style="margin-bottom: 40upx;">{{name}}</text>
			<input v-model="titles"/>
			<view @tap="linck" style="color: #007AFF; font-size: 30upx;margin-top: 40upx;">点我跳页</view>
		</view>
	</view>
</template>

<script>
	import { createNamespacedHelpers } from 'vuex'
    const { mapState, mapActions } = createNamespacedHelpers('homeModule')
	export default {
		components: {},
		computed: {
			...mapState({
			  name: state => state.name
			})
		},
		data() {
			return {
				titles: '我是输入框，你可以输内容哦',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742
				}, {
					latitude: 39.90,
					longitude: 116.39
				}]
			}
		},
		onShow () {
		},
        // 建议使用 uni-app 的 onLoad 代替 vue 的 created
		onLoad() {
		},
		// 建议使用 uni-app 的 onReady代替 vue 的 mounted。
		onReady () {
			this.text()
		},
		methods: {
			...mapActions([
			  'text'
			]),
			linck () {
				this.$plRouter.push({
					router: this.$routerConfig.text
				})
             }
		}
	}
</script>

<style lang="scss">
	.content {
		text-align: center;
		height: 400upx;	
		.logo {
			height: 200upx;
			width: 200upx;
			margin-top: 200upx;
		}
		input {
			font-size: 30upx;
			color: #555;
		}
		.title {
			font-size: 36upx;
			display: block;
			color: red;
		}
	}
</style>
