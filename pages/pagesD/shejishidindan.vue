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
				<u-tabs :list="lists" :weizhi="false" :current="current" @change="change"></u-tabs>
				<swiper :style="'height: '+height+'px;'" :circular="true" duration="200" :current="current"
					@change="lun_change">
					<swiper-item v-for="(item,index) in lists" :key="index">
						<scroll-view :style="'height: '+height+'px;'" scroll-y="true">
							<view class="swiper-item" v-if="current==0||items.state==current"
								v-for="(items,indexs) in list" :key="indexs">
								<view class="">
									<view class="top" @click="goods(items)">
										<view class="status" v-show="items.states.state == 0"> 待付款 </view>
										<view class="status" v-show="items.states.state == 1"> 待发货 </view>
										<view class="status" v-show="items.states.state == 2"> 发货中 </view>
										<view class="status" v-show="items.states.state == 3"> 已收货 </view>
										<view class="status" v-show="items.states.state == 4"> 已完成 </view>
										<view class="status" v-show="items.states.state == 5"> 退款审核中 </view>
										<view class="status" v-show="items.states.state == 6"> 退款成功 </view>
										<view class="status" v-show="items.states.state == 7"> 退款已驳回 </view>
										<view class="status" v-show="items.states.state == 9"> 已取消 </view>
										<view class="status" v-show="items.states.state == 10"> 退货审核中 </view>
										<view class="status" v-show="items.states.state == 11"> 退货成功 </view>
										<view class="status" v-show="items.states.state == 12"> 退货已驳回 </view>
										<view class="status" v-show="items.states.state == 13"> 换货审核中 </view>
										<view class="status" v-show="items.states.state == 14"> 换货成功 </view>
										<view class="status" v-show="items.states.state == 15"> 换货已驳回 </view>
										<view class="status" v-show="items.states.state == 16"> 报装中 </view>
										<view class="status" v-show="items.states.state == 17">已安装</view>
										<view style="display: flex;align-items: center;">
											<view class="text">
												查看详情
											</view>
											<image style="width: 10rpx;height: 16rpx;margin-left: 10rpx;"
												src="../../static/icon_home_heiseyoufan.png" mode="aspectFit"></image>
										</view>
									</view>
									<view class="centre" @click="goods(items)">
										<view class="">
											<image class="img" :src="imgtitle+items.simage" mode="aspectFit"></image>
										</view>
										<view style="margin-left: 30rpx;">
											<view class="name">
												客户姓名：{{items.name||""}}
											</view>
											<view class="name">
												客户性别：<text v-if="items.sex == 0">男</text><text v-else>女</text>
											</view>
											<view class="name">
												联系方式：{{items.phone||""}}
											</view>
											<view class="name">
												客户地址：{{items.city?items.city+items.dire:""}}
											</view>
										</view>
									</view>
									<view class="anniu">
										<view class="button" @click="annui(0,items)"
											v-if="items.state == 1 || items.state == 2">
											<!-- 上传二维码 -->
											查看二维码
										</view>
										<!-- <view class="button" @click="annui(1,items)" v-if="items.state == 1">
											确认完成
										</view> -->
									</view>
								</view>
							</view>
							<u-empty v-if="item.data_list.length == 0" text="暂无订单" mode="list"></u-empty>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<u-popup width="640" :closeable="true" border-radius="10" v-model="showa" mode="center">
			<view class="popup">
				<view class="top">
					提示
				</view>
				<view class="cets">
					确认完成该订单么？
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
				height: 0,
				current: 0,
				title: "",
				lists: [{
						name: "全部订单"
					},
					{
						name: "进行中"
					},
					{
						name: "已完成"
					}
				],
				order_id: "",
				list: []
			};
		},
		onLoad(ev) {
			this.title = ev.title;
			if (ev.current) {
				this.current = ev.current;
			}
		},
		onShow() {
			this.getdata()
			this.system();
		},
		methods: {
			// 获取订单数据
			getdata() {
				this.$api.desorders({
					id: uni.getStorageSync("des_info").id
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							if (item.image != null) {
								item["simage"] = item.image.split(",")[0]
							}
						})
						this.list = data.data.data.status
					}
				})
			},
			xuanzhea(ev) {
				switch (ev) {
					case 0:
						this.showa = false;
						break;
					case 1:
						this.$api.desorder({
							id: this.order_id,
							state: 2
						}).then(data => {

							if (data.data.code == 1) {
								uni.showToast({
									title: "确认成功"
								})
								this.getdata()
								uni.navigateBack({
									delta: 1
								})
								this.showa = false;
							}
						})
						break;
					default:
				}
			},
			annui(ev, item) {
				switch (ev) {
					case 0:
						uni.previewImage({
							urls: [this.$imgPath + item.ewm],
							longPressActions: {
								itemList: ['发送给朋友', '保存图片', '收藏'],
								success: function(data) {},
								fail: function(err) {

								}
							}
						});

						// uni.navigateTo({
						// 	url: "./erweima?id="+item.id
						// })
						break;
					case 1:
						this.order_id = item.id
						this.showa = true;

						// this.order_id=item.id
						break;
					default:
				}
			},
			goods(ev) {
				uni.setStorageSync("des_order", ev)
				uni.navigateTo({
					url: "./shejishixiangqing?isdes=1"
				})
			},
			//处理数据
			chulidata() {
				this.list.forEach((item, index) => {
					if (index != 0) {
						item.data_list = [];
					}
				})
				this.list[0].data_list.forEach(item => {
					switch (item.state) {
						case 1:
							this.list[1].data_list.push(item)
							break;
						case 2:
							this.list[2].data_list.push(item)
							break;
						default:
							uni.showToast({
								title: "未知错误",
								duration: 1000,
								icon: "none"
							})
					}
				})
			},
			system() {
				let system = uni.getSystemInfoSync();
				this.height = system.windowHeight
			},
			lun_change(ev) {
				this.current = ev.detail.current;
			},
			change(ev) {
				this.current = ev;
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
		.swiper {
			.swiper-item {
				margin-bottom: 30rpx;
				border-radius: 10rpx;
				background-color: #FFFFFF;
				padding: 30rpx;
				margin: 30rpx;

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

				.centre {
					display: flex;
					align-items: center;
					margin-bottom: 20rpx;

					.name {
						padding-bottom: 10rpx;
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
