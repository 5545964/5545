<template>
	<view>
		<view class="navbar">
			<u-navbar :is-back="false" :title="title">
				<view class="navbar_top">
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
		<view class="home">
			<u-parse :html="content"></u-parse>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '<h2 style="text-align:center"><u><s>d阿三<strong>大苏打撒旦撒大苏打阿达阿萨啊是阿达阿斯顿啊阿达啊啊阿达啊阿萨阿萨啊实打实大苏打实打实的打撒打撒打撒萨达萨达</strong>萨达萨达是打撒十大打算<img alt=""src="https://v1.uviewui.com/common/logo.png" /></s></u></h2>',
				title: "富文本",
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
			let aa = uni.getStorageSync("fuwenbeng")
			if(aa){
				this.content = aa
			}
		},
		methods: {
			back(ev) {
				switch (ev) {
					case 0:
						uni.navigateBack(-1)
						break;
					case 1:
						uni.switchTab({
							url: "/pages/Home/Home"
						})
						break;
					default:
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		width: 100%;
		height: 100%;
	}

	.navbar {
		.navbar_top {
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
</style>
