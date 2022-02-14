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
			<view class="search">
				<u-search bg-color="#f6f6f6" placeholder="输入关键字搜索"></u-search>
			</view>
			<view class="swiper">
				<view class="swiper-item" v-for="(items,indexs) in list" :key="indexs" @click="goods(items)">
					<view class="top">
						<view class="text"> 订单编号：{{ items.orderid }} </view>
						<!-- <view class="status" v-show="items.state == 5"> 退款审核中 </view>
						<view class="status" v-show="items.state == 6"> 退款成功 </view>
						<view class="status" v-show="items.state == 7"> 退款已驳回 </view> -->
						<view class="status" v-show="items.state == 10"> 退货审核中 </view>
						<view class="status" v-show="items.state == 11"> 退货成功 </view>
						<view class="status" v-show="items.state == 12"> 退货已驳回 </view>
						<view class="status" v-show="items.state == 13"> 换货审核中 </view>
						<view class="status" v-show="items.state == 14"> 换货成功 </view>
						<view class="status" v-show="items.state == 15"> 换货已驳回 </view>
					</view>
					<view class="centre" v-for="(itemc, indexc) in items.shop" :key="indexc" @click="goods(items)">
						<view class="">
							<image class="img" :src="imgtitle + itemc.simage" mode="aspectFit"></image>
						</view>
						<view style="margin-left: 10rpx;">
							<view class="name">
								{{ itemc.name }}
							</view>
							<text class="fdsds">共{{itemc.num}}件 合计：</text><text
								class="fsdfsfs fdsds">￥{{itemc.sonprice}}</text>
						</view>
					</view>
					<view class="kfhkjsdh" @click="goods(items)">
						<view class="text">
							总金额：<text class="reds">￥{{ items.price }}</text>
						</view>
						<view class="status" v-show="items.state == 0"> 未支付 </view>
						<view class="status" v-show="items.state != 0 && items.state != 9">
							已支付￥{{ items.price }}
						</view>
					</view>
					<view class="anniu">
						<view class="button" @click="annui(0, items)" v-if="items.state == 0">
							取消订单
						</view>
						<view class="button" @click="annui(1, items)" v-if="items.state == 0">
							立即支付
						</view>
						<view class="button" @click="annui(5, items)" v-if="items.state == 1">
							申请退款
						</view>
						<view class="button" @click="annui(3, items)" v-if="items.state == 2">
							查看物流
						</view>
						<view class="button" @click="annui(4, items)" v-if="items.state == 2">
							确认收货
						</view>
						<view class="button" @click="annui(7, items)" v-if="items.state == 3 || items.state == 4">
							申请售后
						</view>
						<view class="button" @click="annui(2, items)" v-if="items.state == 5">
							取消退款
						</view>
						<view class="button" @click="delorder(items)"
							v-if="items.state == 9 || items.state == 4 || items.state == 17">
							删除订单
						</view>
						<view class="button" v-if="items.state == 8">
							已申请退款
						</view>
						<view class="button" v-if="items.state == 3" @click="baozhaung(items)">
							是否安装
						</view>
						<view class="button" v-if="items.state == 16" @click="jiesubaozhaung(items)">
							完成安装
						</view>
						<!-- <view class="button" @click="delorder(items)"
							v-if="items.state == 9 || items.state == 4 || items.state == 3">
							删除订单
						</view> -->
						<!-- <view class="button" @click="annui(6, items)" v-if="items.state == 3">
							立即评价
						</view> -->
					</view>
				</view>
			</view>
		</view>
		<u-popup width="640" :closeable="true" border-radius="10" v-model="showa" mode="center">
			<view class="popup">
				<view class="top">
					提示
				</view>
				<view class="cets">
					确认取消退款？
				</view>
				<view class="xian">

				</view>
				<view class="bottoms">
					<view class="sdasas" @click="xuanzhea(0)">
						取消
					</view>
					<view class="czcxc" @click="xuanzhea(1)">
						确定
					</view>
				</view>
			</view>
		</u-popup>
		<u-kehu po_hei="100" url="../Home/booking/AppointmentDesign"></u-kehu>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgtitle: this.$imgPath,
				showa: false,
				title: "我的售后",
				list: []
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
			this.allsss()
		},
		onShow() {

		},
		methods: {
			allsss() {
				this.$api.myorder({
					user_id: uni.getStorageSync("user_info").id,
				}).then((data) => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							if (item.state == 10 || item.state == 11 || item.state == 12 || item.state ==
								13 || item.state == 14 || item.state == 15) {
								this.list.push(item)
							}
						})
					}
				});
			},
			goods(ev) {
				let aa = JSON.stringify(ev)
				uni.navigateTo({
					url: '../pagesA/goods_data?data=' + aa
				})
			},
			xuanzhea(ev) {
				switch (ev) {
					case 0:
						this.showa = false;
						break;
					case 1:
						this.showa = false;
						break;
					default:
				}
			},
			annui() {
				this.showa = true;

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
		.swiper {
			padding: 30rpx;

			.swiper-item {
				margin-bottom: 30rpx;
				border-radius: 10rpx;
				background-color: #FFFFFF;
				padding: 30rpx;

				.anniu {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					margin-top: 30rpx;

					.button:last-child {
						padding: 15rpx 25rpx;
						background: #E8F2F4;
						border: 2rpx solid #007399;
						border-radius: 30rpx;
						font-size: 20rpx;
						font-weight: 400;
						color: #007399;
						margin-left: 20rpx;
					}

					.button {
						padding: 15rpx 25rpx;
						background: #EFEFEF;
						border-radius: 30rpx;
						font-size: 20rpx;
						font-weight: 400;
						color: #333333;
						margin-left: 20rpx;
					}

				}

				.kfhkjsdh {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.text {
						font-size: 24rpx;
						font-weight: 400;
						color: #333333;
					}

					.red {
						font-size: 24rpx;
						font-weight: 400;
						color: #DB1625;
					}

					.status {
						font-size: 24rpx;
						font-weight: 400;
						color: #DB0E1E;
					}
				}

				.centre {
					display: flex;
					align-items: center;
					justify-content: space-around;
					margin-bottom: 20rpx;

					.fsdfsfs {
						color: #000000;
					}

					.fdsds {
						font-size: 22rpx;
						font-weight: 400;
						color: #666666;
					}

					.name {
						margin-bottom: 40rpx;
						font-size: 24rpx;
						font-weight: 400;
						color: #333333;
					}

					.img {
						border-radius: 20rpx;
						width: 160rpx;
						height: 160rpx;
					}
				}

				.top {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 30rpx 0;
					margin-bottom: 30rpx;
					border-bottom: 1px solid #F6F6F6;

					.status {
						padding: 5rpx 10rpx;
						background: #FC716A;
						border-radius: 4rpx;
						font-size: 20rpx;
						font-weight: 400;
						color: #FFFFFF;
					}

					.text {
						font-size: 24rpx;
						font-weight: 400;
						color: #333333;
					}
				}
			}

			.swipers {
				padding: 30rpx;
			}
		}

		.search {
			padding: 30rpx;
			background-color: #FFFFFF;
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

	.popup {
		.xcvb {
			height: 100%;
			width: 2rpx;
			background: #EFEFEF;
		}

		.czcxc {
			border-left: 1px solid #EFEFEF;
			text-align: center;
			width: 50%;
			padding: 25rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #007399;
		}

		.sdasas {
			border-right: 1px solid #EFEFEF;
			text-align: center;
			width: 50%;
			padding: 25rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #333333;
		}

		.xian {
			height: 2rpx;
			background: #EFEFEF;
		}

		.bottoms {
			display: flex;
			justify-content: space-around;
			align-items: center;
		}

		.cets {
			text-align: center;
			padding: 50rpx;
			font-size: 26rpx;
			font-weight: 400;
			color: #333333;
		}

		.top {
			height: 90rpx;
			line-height: 90rpx;
			text-align: center;
			background: #007399;
			font-size: 30rpx;
			font-weight: 400;
			color: #FEFEFE;
		}
	}
</style>
