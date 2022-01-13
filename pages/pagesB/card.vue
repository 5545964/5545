<template>
	<view>
		<view class="home">
			<view class="top">
				<image class="img" src="../../static/login.png" mode=""></image>
				<view class="tops">
					<view class="name pad">
						{{userinfo.username}}
					</view>
					<view class="text pad">

						{{userinfo.biaoti||"不止设计 · 共赢卓越"}}
					</view>
					<view class="add pad">
						{{cardinfo.city||""}}
					</view>
				</view>
			</view>
			<view class="yuan">
				<scroll-view :scroll-x="true">
					<view class="dasds">
						<view v-for="(item,index) in rinima" :key="index">
							<view class="cet vxcvx" v-show="index == 'mobile'" @click="copy(item,index)">
								<image class="img" src="../../static/icons0.png" mode=""></image>
								<view class="text">
									{{userinfo.mobile||""}}
								</view>
							</view>
							<view class="cet vxcvx" v-show="index == 'email'" @click="copy(item,index)">
								<image class="img" src="../../static/icons1.png" mode=""></image>
								<view class="text">
									{{userinfo.email||""}}
								</view>
							</view>
							<view class="cet vxcvx" v-show="index == 'wechat'" @click="copy(item,index)">
								<image class="img" src="../../static/icons2.png" mode=""></image>
								<view class="text">
									{{userinfo.wechat||""}}
								</view>
							</view>
							<view class="cet vxcvx" v-show="index == 'qq'" @click="copy(item,index)">
								<image class="img" src="../../static/icons3.png" mode=""></image>
								<view class="text">
									{{userinfo.qq||""}}
								</view>
							</view>
							<view class="cet vxcvx" v-show="index == 'tt'" @click="copy(item,index)">
								<image class="img" src="../../static/icons4.png" mode=""></image>
								<view class="text">
									{{item}}
								</view>
							</view>
							<view class="cet vxcvx"  v-show="index == 'daohang'" @click="go">
								<image class="img" src="../../static/icons5.png" mode=""></image>
								<view class="text">
									导航到我的公司
								</view>
							</view>
						</view>
						
					</view>
				</scroll-view>
			</view>
			<view style="padding: 30rpx;background-color: #FFFFFF;" v-html="cardinfo.content">
			</view>
		</view>
		<!-- <view class="anniuss">
			<view class="kuang">
				<button open-type="contact">11</button>
				<image class="img" src="../../static/icon_me_fenxiang.png" mode=""></image>
			</view>
			<view class="kuang" @click="gohome">
				<image class="img" src="../../static/icon_me_shouye.png" mode=""></image>
			</view>
		</view> -->
		<view class="navbar">
			<u-navbar :is-back="false" title-color="#FFFFFF" :title="title" :background="background">
				<view class="navbar_top">
					<view class="dsds cet" @click="back(0)">
						<image class="fanhui" src="@/static/icon_navigation_fanhuibai.png" mode=""></image>
					</view>
					<view class="hang"></view>
					<view class="dsds cet" @click="back(1)">
						<image class="souye" src="@/static/icon_navigation_housebai.png" mode=""></image>
					</view>
				</view>
			</u-navbar>
		</view>
		<view style="padding: 30rpx;background-color: #FFFFFF;" v-if="state==1">
			<u-swiper height="400" :effect3d="true" :list="imgList"></u-swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rinima: {},
				imgtitle: this.$imgPath,
				userinfo: {},
				list: {},
				background: {
					background: ''
				},
				title: "电子名片",
				state: 0,
				cardinfo: {},
				desinfo: {},
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
			if (ev.state) {
				this.state = ev.state;
			}
			this.getcard()
			this.userinfo = uni.getStorageSync("des_info")
			this.rinima["mobile"] = this.userinfo.mobile
			this.rinima["email"] = this.userinfo.email
			this.rinima["wechat"] = this.userinfo.wechat
			this.rinima["qq"] = this.userinfo.qq
			this.rinima["daohang"] = this.userinfo.qq
			console.log(this.rinima);
		},
		computed: {
			imgList() {
				let arr = []
				if (this.desinfo.work) {
					this.desinfo.work.split(",").forEach(item => {
						arr.push(this.$imgPath + item)
					})
				}
				return arr
			}
		},
		methods: {
			// 获取电子名片
			getcard() {
				this.$api.business({
					state: this.state
				}).then(data => {
					if (data.data.code == 1) {
						this.cardinfo = data.data.data.status
					}
				})
			},
			gohome() {
				uni.switchTab({
					url: "/pages/Home/Home"
				})
			},
			go() {
				uni.openLocation({
					latitude: 30.60195606045137, //要去的纬度-地址       
					longitude: 103.97588054382395, //要去的经度-地址
					success: function() {

					},
					fail: function(error) {

					}
				});
			},
			copy(item, index) {

				if (index == 'mobile') {
					uni.makePhoneCall({
						phoneNumber: item,
						success: (res) => {

						},
						fail: (res) => {

						}
					});
				}
				uni.setClipboardData({
					data: item.toString(),
					success: function() {

					}
				});
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
	.anniuss {
		width: 80rpx;
		height: 180rpx;
		background: #007399;
		border-radius: 40rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: fixed;
		right: 10rpx;

		.kuang {
			width: fit-content;
			padding: 20rpx 0;
		}

		.img {
			width: 38rpx;
			height: 38rpx;
		}
	}

	.home {
		.yuan {
			padding: 30rpx;
			margin: -64rpx 30rpx 30rpx 30rpx;
			background: #FFFFFF;
			box-shadow: 0 0 10rpx 0 rgba(0, 0, 0, 0.2);
			border-radius: 70rpx;

			.vxcvx {
				margin: 0 20rpx;
			}

			.text {
				margin-left: 10rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #666666;
			}

			.dasds {
				display: flex;
				align-items: center;
			}

			.img {
				width: 70rpx;
				height: 70rpx;
			}
		}

		.top {
			width: 100%;
			height: 725rpx;
			background-image: url(../../static/beijin.jpg);
			background-size: cover;
			background-repeat: no-repeat;
			padding: 30rpx;

			.tops {
				padding: 30rpx;

				.pad {
					padding: 30rpx 0;
				}

				.name {
					font-size: 48rpx;
					font-weight: 400;
					color: #FFFFFF;
				}

				.text {
					width: fit-content;
					padding: 15rpx 20rpx;
					background: #FFFFFF;
					opacity: 0.5;
					border-radius: 100rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #007399;
				}

				.add {
					font-size: 24rpx;
					font-weight: 400;
					color: #FFFFFF;
				}
			}

			.img {
				margin-top: 90rpx;
				padding-top: 60rpx;
				width: 555rpx;
				height: 66rpx;
			}
		}
	}

	.navbar {
		.navbar_top {
			border: 1px solid #FFFFFF;
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
				background-color: #FFFFFF;
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
