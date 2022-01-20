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
				<view  v-for="(item,index) in coupon_list" :key="index">
					<view class="coupon" v-if="item.state==current">
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
			</view>
			<view v-show="current == 1">
				<view  v-for="(item,index) in coupon_list" :key="index">
					<view class="coupons" v-if="item.state==current">
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
			</view>
			<view v-show="current == 2">
				<view  v-for="(item,index) in coupon_list" :key="index">
					<view class="coupons" v-if="item.state==current">
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
			</view>
		</view>
		<u-kehu url="../Home/booking/AppointmentDesign"></u-kehu>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				coupon_list: [
					// {
					// 	title: "优惠券",
					// 	time: "2021/12/31",
					// 	max_mony: 1000,
					// 	min_mony: 500,
					// 	mony: 1000,
					// },
					// {
					// 	title: "优惠券",
					// 	time: "2021/12/31",
					// 	max_mony: 1000,
					// 	min_mony: 500,
					// 	mony: 1000,
					// },
					// {
					// 	title: "优惠券",
					// 	time: "2021/12/31",
					// 	max_mony: 1000,
					// 	min_mony: 500,
					// 	mony: 1000,
					// },
					// {
					// 	title: "优惠券",
					// 	time: "2021/12/31",
					// 	max_mony: 1000,
					// 	min_mony: 500,
					// 	mony: 1000,
					// },
					// {
					// 	title: "优惠券",
					// 	time: "2021/12/31",
					// 	max_mony: 1000,
					// 	min_mony: 500,
					// 	mony: 1000,
					// },
					// {
					// 	title: "优惠券",
					// 	time: "2021/12/31",
					// 	max_mony: 1000,
					// 	min_mony: 500,
					// 	mony: 1000,
					// },
					// {
					// 	title: "优惠券",
					// 	time: "2021/12/31",
					// 	max_mony: 1000,
					// 	min_mony: 500,
					// 	mony: 1000,
					// }
				],
				title: "优惠券",
				list: [{
					name: '待使用',
				}, {
					name: '已使用'
				}, {
					name: '已失效'
				}],
				current: 0
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
			this.getdata()
		},
		methods: {
			// 获取优惠卷信息
			getdata(){
				this.$api.mycupon({
					user_id:uni.getStorageSync("user_info").id
				}).then(data=>{

					if(data.data.code==1){
						data.data.data.status.forEach(item=>{
							item.cupons.endtime_text=item.cupons.endtime_text.split(" ")[0]
						})
						this.coupon_list=data.data.data.status
					}
				})
			},
			change(index) {
				this.current = index;
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
