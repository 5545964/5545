<template>
	<view>
		<view class="navbar">
			<u-navbar :is-back="false" :title="title">
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
		<!-- 轮播 -->
		<view class="lunbo">
			<u-swiper height="750" :border-radius="0" @click="kansss" :list="list" :img-mode="'scaleToFill'"></u-swiper>
		</view>
		<view class="datas">
			<view class="">
				<view class="cet" style="justify-content: space-between;">
					<view class="">
						<view class="title">
							{{youhuijuan.name||""}}
						</view>
						<view class="text">
							优惠卷
						</view>
					</view>
					<view class="">
					</view>
				</view>
				<view class="cet" style="justify-content: space-between;margin-top: 30rpx;">
					<view class="cet" style="justify-content: space-between;">
						<view class="mony">
							￥{{youhuijuan.price||""}}
						</view>
						<view class="monys">
							￥{{youhuijuan.cb_price||""}}
						</view>
					</view>
					<view class="yue">
						库存{{youhuijuan.num||""}}
					</view>
				</view>
			</view>
		</view>
		<view class="data_shop">
			<view class="text">
				优惠券详情
			</view>
			<view class="xian"></view>
			<view class="bai"></view>
			<u-parse :html="youhuijuan.content"></u-parse>
		</view>
		<view class="" style="height: 100rpx;" />
		<view class="bottonn cet">
			<view class="bottonm" @click="goumai">
				立即购买
			</view>
		</view>
		<u-kehu url="../Home/booking/AppointmentDesign"></u-kehu>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				youhuijuan: {},
				list: [],
				title: ""
			};
		},
		onLoad(ev) {
			this.$api.cupons({
				id: ev.id
			}).then(data => {
				this.destaoxi = []
				if (data.data.code == 1) {
					this.youhuijuan = data.data.data.status[0]
					this.youhuijuan.image = this.youhuijuan.image.split(",");
					this.youhuijuan.image.forEach(item => {
						this.list.push(this.$imgPath + item)
					})
					this.title = this.youhuijuan.name
				}
			})
		},
		methods: {
			async goumai() {
				if (await this.$login()) {

					this.$api.paycupons({
						user_id: uni.getStorageSync("user_info").id,
						coupons_id: this.youhuijuan.id
					}).then(res => {
						if (res.data.code == 200) {
							let that = this;
							uni.requestPayment({
								timeStamp: res.data.data.timeStamp,
								nonceStr: res.data.data.nonceStr,
								package: res.data.data.package,
								signType: res.data.data.signType,
								paySign: res.data.data.paySign,
								success: function(res) {
									uni.showToast({
										title: "支付成功",
										icon: "none",
									});
									setTimeout(() => {
										uni.reLaunch({
											url: "../pagesA/gongju4"
										})
									}, 800)

								},
								fail: function(err) {
									uni.showToast({
										title: "支付失败",
										icon: "none",
									});
								},
							});
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: "none",
							});
						}
					})
				}
			},
			kansss(ev) {
				let that = this;
				uni.previewImage({
					urls: this.list,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {},
						fail: function(err) {}
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
	.bottonm {
		width: 100%;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		background: #007399;
		border-radius: 35rpx;
		margin: 0 30rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: #FFFFFF;
	}

	.bottonn {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100rpx;
		background: #FFFFFF;
	}

	.data_shop {
		background-color: #FFFFFF;

		.bai {
			width: 100%;
			height: 30rpx;
		}

		.text {
			padding-top: 40rpx;
			padding-bottom: 30rpx;
			text-align: center;
			font-size: 28rpx;
			font-weight: 400;
			color: #000000;
		}

		.xian {
			width: 100%;
			height: 2rpx;
			background: #F6F6F6;
		}
	}

	.datas {
		padding: 30rpx;
		background: #FFFFFF;


		.yue {
			font-size: 20rpx;
			font-weight: 400;
			color: #999999;
		}

		.mony {
			font-size: 28rpx;
			font-weight: 400;
			color: #D71312;
		}

		.monys {
			margin-left: 20rpx;
			font-size: 22rpx;
			font-weight: 400;
			text-decoration: line-through;
			color: #999999;
		}

		.title {
			font-size: 26rpx;
			font-weight: 400;
			color: #000000;
		}

		.text {
			margin-top: 20rpx;
			font-size: 22rpx;
			font-weight: 400;
			color: #666666;
		}
	}

	.lunbo {
		width: 100%;
	}

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
</style>
