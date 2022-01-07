<template>
	<view>
		<view class="navbar">
			<u-navbar :is-back="false" :title="title">
				<view class="navbar_top">
					<view class="dsds cet" @click="back(0)">
						<image class="fanhui" src="@/static/icon_navigation_fanhui.png" mode=""></image>
					</view>
					<view class="hang"></view>
					<view class="dsds cet" @click="back(1)">
						<image class="souye" src="@/static/icon_navigation_house.png" mode=""></image>
					</view>
				</view>
			</u-navbar>
		</view>
		<view class="home">
			<view class="top_c">
				<!-- <view class="template" v-for="(item,index) in alls.all" :key="index" @click="kan(item)"> -->
				<view class="template" v-for="(item,index) in alls" :key="index" @click="kan(item)">
					<view class="cet">
						<view class="texts">
							{{item.type}}
						</view>
						<image class="fanhui" src="../../static/icon_home_heiseyoufan.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "相关合同",
				alls: []
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
		},
		onShow() {
			this.alls = [{
				type: "合同一",
				doc_url: this.$imgPath + uni.getStorageSync("hetong")
			}]

		},
		methods: {
			kan(ev) {
				let url = ev.doc_url;
				if (url.indexOf("http") == -1) {
					url = this.$imgPath + url
				}
				uni.downloadFile({
					url: url,
					success(res) {
						const filePath = res.tempFilePath;

						uni.openDocument({
							filePath,
							success(res) {

							}
						})
					}
				})
			},
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
		padding: 30rpx;
		width: 100%;
		height: 100%;

		.top_c {
			.fanhui {
				width: 8rpx;
				height: 16rpx;
			}

			.template {
				margin-bottom: 20rpx;
				padding: 20rpx 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background: #FFFFFF;
				border-radius: 10rpx;
			}

			.texts {
				padding: 10rpx 20rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}
		}
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
