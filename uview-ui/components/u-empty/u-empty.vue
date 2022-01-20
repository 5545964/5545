<template>
	<view style="height: 80%;">
		<view class="cet csf">
			<view class="">
				<view class="jhg">
					<image class="image" :src="src" mode="aspectFit"></image>
				</view>
				<view class="dns" :style="'color:'+color+';'">
					{{text}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "u-empty",
		props: {
			src: {
				type: String,
				default: require('../../../static/default_bg.png')
			},
			text: {
				type: String,
				default: '暂无数据'
			},
			color: {
				type: String,
				default: '#999999'
			},
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped lang="scss">
	.csf {
		height: 100%;

		.dns {
			margin-top: 60rpx;
			text-align: center;
			font-size: 24rpx;
			font-weight: 400;
			color: #999999;
		}

		.jhg {
			width: 410rpx;
			height: 162rpx;
		}

		.image {
			width: 100%;
			height: 100%;
		}
	}
</style>
