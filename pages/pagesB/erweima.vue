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
		<view class="cet">
			<view class="home cet">
				<image class="img" @click="kan(ewmsrc)" :src="ewmsrc" mode="aspectFit"></image>
			</view>
		</view>
		<view class="boyyty cet" @click="sava">
			<view class="tetx">
				保存图片
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "二维码",
				level: "",
				ewmsrc: "",
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title
			}
			if (ev.level) {
				this.level = uni.getStorageSync("des_info").bbs.id || 0
			}else{
				this.level = uni.getStorageSync("user_info").bbs.id || 0
			}
			this.getewm()
		},
		methods: {
			kan(ev) {
				uni.previewImage({
					urls:[ev] ,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
						},
						fail: function(err) {
						}
					}
				});
			},
			// 获取二维码
			getewm() {
				if(this.level ==""){
					this.level ==0
				}
				this.$api.ewm({
					id: uni.getStorageSync("user_info").id,
					level: this.level
				}).then(data => {

					if (data.data.code == 1) {
						this.ewmsrc = data.data.data.status
					}
				})
			},
			sava() {
				uni.getImageInfo({
					src: this.ewmsrc,
					success: function(image) {
						uni.saveImageToPhotosAlbum({
							filePath: image.path,
							success: function() {
								uni.showToast({
									icon: 'success',
									mask: true,
									title: '保存到相册了',
								});
							}
						});
					}
				});
			},
			back(ev) {
				switch (ev) {
					case 0:
						uni.navigateBack(-1)
						break;
					case 1:
						uni.reLaunch({
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
		margin-top: 70rpx;
		width: 690rpx;
		height: 690rpx;
		background: #FFFFFF;
		border-radius: 20rpx;

		.img {
			width: 490rpx;
			height: 490rpx;
			border-radius: 10rpx;
		}
	}

	.boyyty {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 110rpx;
		background: #FFFFFF;
		padding: 20rpx 30rpx;

		.tetx {
			width: 100%;
			height: 70rpx;
			text-align: center;
			line-height: 70rpx;
			background: #007399;
			border-radius: 35rpx;
			font-size: 26rpx;
			font-weight: 400;
			color: #FFFFFF;
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
