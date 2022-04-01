<template>
	<view class="success_main">
		<!-- 导航 -->
		<view class="navbar">
			<u-navbar :is-back="false" :background="{
						background: '#007399'
					}" :title="list.navbar" titleColor="#fff" :borderBottom="false">
				<view class="sssss">
					<view class="dsds cet" @click="back(0)">
						<image class="fanhui" src="@/static/icon_navigation_fanhui.png" mode="aspectFit"></image>
					</view>
					<view class="hang"></view>
					<view class="dsds cet" @click="back(1)">
						<image class="souye" src="@/static/icon_navigation_house.png" mode="aspectFit"></image>
					</view>
				</view>
			</u-navbar>
		</view>
		<image class="banner" src="../../static/about_tijiao_bg.png" mode="aspectFit"></image>
		<view class="sucView">
			<view class="text1">{{list.title||""}}</view>
			<view class="text2">{{list.text||""}}</view>
			<view @click="topage" class="knowView">
				<view class="knowText">{{list.botton||""}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: {},
				tiao:1
			}
		},
		onLoad(ev) {
			if (ev.list) {
				this.list = JSON.parse(ev.list);
			}
			if (ev.tiao) {
				this.tiao = 2
			}
		},
		methods: {
			back(ev) {
				switch (ev) {
					case 0:
						uni.navigateBack({
							delta:this.tiao
						})
						break;
					case 1:
						uni.reLaunch({
							url: "/pages/Home/Home"
						})
						break;
					default:
				}
			},
			topage() {
				uni.navigateBack({
					delta: 2
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.success_main {
		background-color: #FFFFFF;
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
	}

	// 导航
	.navbar {
		.sssss {
			border: 1px solid #e5e5e5;
			overflow: hidden;
			width: 166rpx;
			height: 60rpx;
			border-radius: 30rpx;
			margin-left: 30rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;

			.dsds {
				padding: 20rpx;
			}

			.hang {
				width: 2rpx;
				height: 26rpx;
				background-color: #e5e5e5;
			}

			.fanhui {
				width: 12rpx;
				height: 22rpx;
			}

			.souye {
				width: 26rpx;
				height: 24rpx;
			}
		}
	}


	.success {
		width: 400rpx;
		height: 270rpx;
		position: absolute;
		top: 203rpx;
		left: 175rpx;
	}

	.banner {
		width: 750rpx;
		height: 660rpx;
		position: relative;
	}

	.sucView {
		display: flex;
		flex-direction: column;
		width: 750rpx;
		align-items: center;
	}

	.text1 {
		font-size: 36rpx;
		font-family: PingFang SC;
		font-weight: 800;
		color: #333333;
	}

	.text2 {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #333333;
		display: inline-block;
		margin-bottom: 130rpx;
		margin-top: 40rpx;
		text-align: center;
		padding: 30rpx;
	}

	.knowView {
		width: 460rpx;
		height: 90rpx;
		background: #007399;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.knowText {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
	}
</style>
