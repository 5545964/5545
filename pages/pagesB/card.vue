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
							<view class="cet vxcvx" v-if="item !=''" @click="copy(item,index)">
								<image class="img" :src="'../../static/icons'+index+'.png'" mode=""></image>
								<view class="text" style="width: 100rpx;" v-if="index == 5">
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
				<u-swiper height="400" :effect3d="true" img-mode="aspectFit" :list="imgList"></u-swiper>
			</view>
			
		</view>
		
		<view class="anniuss">
			<view class="kuang">
				<button open-type="contact" class="annuiwwww" type="default">
					<image class="img" src="../../static/icon_me_fenxiang.png" mode=""></image>
				</button>
			</view>
			<view class="kuang" @click="gohome">
				<image class="img" src="../../static/icon_me_shouye.png" mode=""></image>
			</view>
		</view>
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
		<!-- 优享作品 -->
		<view class="works">
			<view class="title">
				<view class="name">
					热门推荐搭配
					<view class="bor_bot">
		
					</view>
				</view>
			</view>
			<view class="design_list">
				<view class="" v-for="(item,index) in tuijian" :key="item" v-if="index <= 1">
					<u-design-card :tiaozhuan="'../pagesC/DesignDetail'" :list="item" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tuijian:[],
				imgList: [],
				rinima: [],
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
			this.state = 1
			if (ev.state) {
				this.state = ev.state;
			}
			this.getcard()
			this.userinfo = uni.getStorageSync("des_info")
			this.rinima.push(this.userinfo.mobile)
			this.rinima.push(this.userinfo.email)
			this.rinima.push(this.userinfo.wechat)
			this.rinima.push(this.userinfo.qq)
			this.rinima.push("")
			this.rinima.push("导航到我的公司！")
			this.userinfo.work.split(",").forEach(item => {
				this.imgList.push({
					image: this.$imgPath + item
				})
			})
			this.$api.loupanden().then(data => {
				if (data.data.code == 1) {
					data.data.data.status.sort(function () {
					 return Math.random() - 0.5;   // 值为 -0.5 ~ 0.5 的随机数
					});
					this.tuijian = [...data.data.data.status];
				}
			})
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
	
	// 优享作品
	.works {
		padding: 0 30rpx;
		margin-top: -120rpx;
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
</style>
