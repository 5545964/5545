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
		<u-tabs :list="list" :weizhi="false" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<view class="home">
			<view v-show="current == 0">
				<view v-for="(item,index) in coupon_list0" :key="index" @click="xuanzhewo(item)">
					<view class="coupon">
						<view class="left">
							<view class="text">
								{{item.cupons.name}}
							</view>
							<view class="textd">
								{{item.cupons.endtime_text}}到期
							</view>
							<view class="textd">
								满{{item.cupons.cb_price}}减{{item.cupons.yh_price}}
							</view>
						</view>
						<view class="right">
							<view class="">
								<text class="dnsjbd">￥</text><text class="djdh">{{item.cupons.yh_price}}</text>
							</view>
							<view class="dsjhbd">
								满{{item.cupons.cb_price}}可用
							</view>
						</view>
					</view>
				</view>
				<u-empty mode="coupon" v-if="coupon_list0.length == 0"></u-empty>
			</view>
			<view v-show="current == 1">
				<view v-for="(item,index) in coupon_list1" :key="index">
					<view class="coupons">
						<view class="left">
							<view class="text">
								{{item.cupons.name}}
							</view>
							<view class="textd">
								{{item.cupons.endtime_text}}到期
							</view>
							<view class="textd">
								满{{item.cupons.cb_price}}减{{item.cupons.yh_price}}
							</view>
						</view>
						<view class="right">
							<view class="">
								<text class="dnsjbd">￥</text><text class="djdh">{{item.cupons.yh_price}}</text>
							</view>
							<view class="dsjhbd">
								满{{item.cupons.cb_price}}可用
							</view>
							<view class="img">
								<image class="" src="../../static/icon_me_used.png" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<u-empty mode="coupon" v-if="coupon_list1.length == 0"></u-empty>
			</view>
			<view v-show="current == 2">
				<view v-for="(item,index) in coupon_list2" :key="index">
					<view class="coupons">
						<view class="left">
							<view class="text">
								{{item.cupons.name}}
							</view>
							<view class="textd">
								{{item.cupons.endtime_text}}到期
							</view>
							<view class="textd">
								满{{item.cupons.cb_price}}减{{item.cupons.yh_price}}
							</view>
						</view>
						<view class="right">
							<view class="">
								<text class="dnsjbd">￥</text><text class="djdh">{{item.cupons.yh_price}}</text>
							</view>
							<view class="dsjhbd">
								满{{item.cupons.cb_price}}可用
							</view>
							<view class="img">
								<image class="" src="../../static/icon_me_invalid.png" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<u-empty mode="coupon" v-if="coupon_list2.length == 0"></u-empty>
			</view>
		</view>
		<u-heigth />
		<u-kehu url="../Home/booking/AppointmentDesign"></u-kehu>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "优惠券",
				list: [{
					name: '待使用',
				}, {
					name: '已使用'
				}, {
					name: '已失效'
				}],
				current: 0,
				coupon_list0: [],
				coupon_list1: [],
				coupon_list2: [],
				xuanzhe: 0,
				jiage: 0
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
			if (ev.xuanzhe) {
				this.xuanzhe = ev.xuanzhe;
				this.jiage = ev.jiage;
			}
			this.getdata()
		},
		methods: {
			xuanzhewo(ev) {
				uni.$emit('youhuijuan', ev)
				uni.navigateBack(-1)
			},
			getdata() {
				let time = new Date().getTime()
				this.$api.mycupon({
					user_id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							if (item.usetime == null && time < item.cupons.endtime * 1000 && item.state ==
								0) {
								this.coupon_list0.push(item)
							}
							if (item.state == 1 || item.usetime != null && time < item.cupons.endtime *
								1000) {
								this.coupon_list1.push(item)
							}
							if (time > item.cupons.endtime * 1000) {
								this.coupon_list2.push(item)
							}
						})
						if (this.jiage != 0) {
							let aav = []
							this.coupon_list0.forEach(item => {
								if (this.jiage > item.cupons.cb_price) {
									aav.push(item)
								}
							})
							this.coupon_list0 = [...aav]
						}
					}
				})

			},
			change(index) {
				this.current = index;
			},
			back(ev) {
				switch (ev) {
					case 0:
						if (this.xuanzhe == 0) {
							uni.reLaunch({
								url: "/pages/Home/User"
							})
						} else {
							uni.navigateBack(-1)
						}

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
	page {
		background-color: red;
	}

	.home {
		padding: 30rpx;

		.coupons {
			margin-bottom: 20rpx;
			width: 690rpx;
			height: 220rpx;
			background-image: url(../../static/coupon_me_bg.png);
			background-size: cover;
			background-repeat: no-repeat;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.right {
				width: 170rpx;
				display: flex;
				align-items: center;
				flex-direction: column;

				.img {
					margin: 0 auto;
					width: 134rpx;
					height: 62rpx;
				}

				.dsjhbd {
					font-size: 22rpx;
					font-weight: 400;
					color: #999999;
					text-align: center;
				}

				.djdh {
					font-size: 60rpx;
					font-weight: 800;
					color: #999999;
				}

				.dnsjbd {
					font-size: 28rpx;
					font-weight: 800;
					color: #999999;
				}
			}

			.left {
				width: 350rpx;

				.text {
					font-size: 28rpx;
					font-weight: 800;
					color: #999999;
				}

				.textd {
					padding: 10rpx 0;
					font-size: 24rpx;
					font-weight: 400;
					color: #999999;
				}
			}
		}

		.coupon {
			margin-bottom: 20rpx;
			width: 690rpx;
			height: 220rpx;
			background-image: url(../../static/coupon_me_bg.png);
			background-size: cover;
			background-repeat: no-repeat;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.right {
				width: 170rpx;
				display: flex;
				align-items: center;
				flex-direction: column;

				.dsjhbd {
					font-size: 22rpx;
					font-weight: 400;
					color: #666666;
					text-align: center;
					margin-top: 20rpx;
				}

				.djdh {
					font-size: 60rpx;
					font-weight: 800;
					color: #FF6005;
				}

				.dnsjbd {
					font-size: 28rpx;
					font-weight: 800;
					color: #FF6005;
				}
			}

			.left {
				width: 350rpx;

				.text {
					font-size: 28rpx;
					font-weight: 800;
					color: #000000;
				}

				.textd {
					padding: 10rpx 0;
					font-size: 24rpx;
					font-weight: 400;
					color: #666666;
				}
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
