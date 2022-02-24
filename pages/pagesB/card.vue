<template>
	<view>
		<view class="home">
			<view class="top" :style="'background-image: url('+backsss+')'">
				<image class="img" src="../../static/login.png" mode="aspectFit"></image>
				<view class="tops">
					<view class="name pad">
						{{userinfo.username}}
					</view>
					<view class="name" style="font-size:15px;margin-bottom:30rpx;">
						{{userinfo.bbs.type}}
					</view>
					<view class="text pad">
						{{userinfo.biaoti||"设计师买手整装平台"}}
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
							<view class="cet vxcvx" v-if="item !=''" @click="copy(item,index)">
								<image class="img" :src="'../../static/icons'+index+'.png'" mode="aspectFit"></image>
								<view class="text" style="width: 100rpx;" v-if="index == 3">
									{{item}}
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view style="padding: 30rpx;background-color: #FFFFFF;" v-html="cardinfo.content">
			</view>
			<view style="padding: 30rpx;background-color: #FFFFFF;" v-if="state==1">
				<u-swiper height="400" :effect3d="true" img-mode="aspectFit" @click="goss" :list="imgList"></u-swiper>
			</view>
		</view>
		<view class="anniuss">
			<view class="kuang">
				<button open-type="contact" class="annuiwwww" type="default">
					<image class="img" src="../../static/icon_me_fenxiang.png" mode="aspectFit"></image>
				</button>
			</view>
			<view class="kuang" @click="gohome">
				<image class="img" src="../../static/icon_me_shouye.png" mode="aspectFit"></image>
			</view>
		</view>
		<view class="works" style="display:flex;flex-flow:column;justify-content:center;align-items: center;">
			<view class="title">
				<view class="name">
					小程序二维码
					<view class="bor_bot">

					</view>
				</view>
			</view>
			<view class="homeewm cet">
				<image class="img" @click="kan(ewmsrc)" :src="ewmsrc" mode="widthFix"></image>
			</view>
		</view>
		<view class="works">
			<view class="title">
				<view class="name">
					旗舰整装套系
					<view class="bor_bot">

					</view>
				</view>
			</view>
			<u-adata :list="tuijian" @click="go_shop"></u-adata>
		</view>
		<view class="navbar">
			<u-navbar :is-back="false" title-color="#FFFFFF" :title="title" :background="background">
				<view class="navbar_top">
					<view class="dsds cet" @click="back(0)">
						<image class="fanhui" src="@/static/icon_navigation_fanhuibai.png" mode="aspectFit"></image>
					</view>
					<view class="hang"></view>
					<view class="dsds cet" @click="back(1)">
						<image class="souye" src="@/static/icon_navigation_housebai.png" mode="aspectFit"></image>
					</view>
				</view>
			</u-navbar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				backsss: this.$imgPath + "/uploads/20220221/7999ee50b489c9084c7861cc5192a74f.jpg",
				tuijian: [],
				imgList: [],
				rinima: [],
				imgtitle: this.$imgPath,
				userinfo: "",
				list: {},
				background: {
					background: ''
				},
				title: "电子名片",
				state: 0,
				cardinfo: {},
				desinfo: {},
				ewmsrc: "",
				latitude: 30.602673,
				longitude: 103.975896

			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
			this.state = 1
			if (ev.state) {
				this.state = ev.state;
			}
			this.getcard()

			this.userinfo = uni.getStorageSync("des_info")
			this.rinima.push(this.userinfo.mobile)
			this.rinima.push(this.userinfo.email)
			this.rinima.push(this.userinfo.wechat)
			// this.rinima.push(this.userinfo.qq)
			// this.rinima.push("")
			this.rinima.push("导航到我的公司！")
			this.$api.setcategory().then(data => {
				if (data.data.code == 1) {
					data.data.data.status.forEach(item => {
						this.imgList.push({
							image: this.$imgPath + item.image,
							id: item.id
						})
					})
					this.imgList.shift()
				}
			})
			this.$api.qjset({
				setid: 13,
				page: 1,
				limit: 10
			}).then(data => {
				if (data.data.code == 1) {
					data.data.data.status.data.forEach(item => {
						item.image = item.simage
					})
					data.data.data.status.data.sort(function() {
						return Math.random() - 0.5; // 值为 -0.5 ~ 0.5 的随机数
					});
					this.tuijian = [data.data.data.status.data[0], data.data.data.status.data[2]];
				}
			})
			this.$api.ewm({
				id: uni.getStorageSync("user_info").id,
				level: uni.getStorageSync("des_info").bbs.id || 0
			}).then(data => {
				if (data.data.code == 1) {
					this.ewmsrc = data.data.data.status
					if (data.data.data.status.longitude && data.data.data.status.latitude) {
						this.longitude = data.data.data.status.longitude
						this.latitude = data.data.data.status.latitude
					}
				}
			})
		},
		methods: {
			kan(ev) {
				uni.previewImage({
					urls: [ev],
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {},
						fail: function(err) {}
					}
				});
			},
			goss(ev) {
				uni.navigateTo({
					url: "../pagesC/FlagshipSet?id=" + this.imgList[ev].id
				})
			},
			go_shop(ev) {
				uni.navigateTo({
					url: "../pagesC/FlagshipDetail?id=" + ev.id
				})
			},
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
				let that = this;
				console.log(that.latitude,that.longitude,Number(that.latitude),Number(that.longitude));
				uni.openLocation({
					latitude: Number(that.latitude),
					longitude: Number(that.longitude),
					name:"宝芸邸生活家具(成都体验中心)",
					address:"四川省成都市武侯区成双大道585号旭耀鞋业4栋",
					success: function() {

					},
					fail: function(error) {
						
					}
				});
			},
			copy(item, index) {
				if (index == 0) {
					uni.makePhoneCall({
						phoneNumber: item,
						success: (res) => {

						},
						fail: (res) => {

						}
					});
				} else if (index == this.rinima.length - 1) {
					this.go()
				} else {
					uni.setClipboardData({
						data: item.toString(),
						success: function() {}
					});
				}

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
		right: 0rpx;
		top: 800rpx;
		z-index: 10000;

		.annuiwwww {
			background-color: #007399;
			padding: 0;
			margin: 0;
			display: flex;
			flex-direction: column;

		}

		.img {
			width: 38rpx;
			height: 38rpx;
		}

		.kuang {
			width: fit-content;
			padding: 20rpx 0;
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

	// 优享作品
	.works {
		// padding: 0 30rpx;
		// margin-top: -120rpx;
		margin-bottom: 60rpx;

		.title {
			padding: 50rpx 30rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.name {
			font-size: 30rpx;
			color: #000000;
		}

		.bor_bot {
			width: 100%;
			height: 10rpx;
			background: #7AB8C8;
			margin-top: -10rpx;
		}

		.question {
			width: 30rpx;
			height: 30rpx;
			color: #F5625D;
			font-size: 24rpx;
			border: 2rpx solid #F5625D;
			box-sizing: border-box;
			text-align: center;
			line-height: 30rpx;
			border-radius: 50%;
			margin-left: 10rpx;
			margin-top: 10rpx;
		}

		.design_list {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			justify-content: space-between;
		}
	}

	.homeewm {
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
</style>
