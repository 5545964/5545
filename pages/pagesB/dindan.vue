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
				<u-tabs :list="lists" :is-scroll="false" :weizhi="false" :current="current" @change="change"></u-tabs>
				<swiper :style="'height: ' + height + 'px;'" :circular="true" duration="200" :current="current"
					@change="lun_change">
					<swiper-item v-for="(item, index) in list" :key="index">
						<scroll-view :style="'height: ' + height + 'px;'" scroll-y="true">
							<view class="swiper-item" v-for="(items, indexs) in item.data_list" :key="indexs">
								<view class="top" @click="goods(items)">
									<view class="text"> 订单编号：{{ items.orderid }} </view>
									<view class="status" v-show="items.state == 0"> 待付款 </view>
									<view class="status" v-show="items.state == 1"> 待发货 </view>
									<view class="status" v-show="items.state == 2"> 待收货 </view>
									<view class="status" v-show="items.state == 3"> 待评价 </view>
									<view class="status" v-show="items.state == 4"> 已完成 </view>
									<view class="status" v-show="items.state == 5"> 退款审核中 </view>
									<view class="status" v-show="items.state == 6"> 退款成功 </view>
									<view class="status" v-show="items.state == 7"> 退款已驳回 </view>
									<view class="status" v-show="items.state == 9"> 已取消 </view>
									<view class="status" v-show="items.state == 10"> 退货审核中 </view>
									<view class="status" v-show="items.state == 11"> 退货成功 </view>
									<view class="status" v-show="items.state == 12"> 退货已驳回 </view>
									<view class="status" v-show="items.state == 13"> 换货审核中 </view>
									<view class="status" v-show="items.state == 14"> 换货成功 </view>
									<view class="status" v-show="items.state == 15"> 换货已驳回 </view>
								</view>
								<view class="centre" v-for="(itemc, indexc) in items.shop" :key="indexc"
									@click="goods(items)">
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
								<!-- 0取消订单 -->
								<!-- 1立即支付 -->
								<!-- 2取消退款 -->
								<!-- 3查看物流 -->
								<!-- 4确认收货 -->
								<!-- 5申请退款 -->
								<!-- 6立即评价 -->
								<!-- 7申请售后 -->

								<!-- 9已取消/待付款 -->

								<!-- 0 -->
								<!-- 0取消订单/待付款 -->
								<!-- 1立即支付/待付款 -->
								<!-- 1 -->
								<!-- 5申请退款/代发货 -->

								<!-- 2 -->
								<!-- 5申请退款/代收获 -->
								<!-- 3查看物流/代收获 -->
								<!-- 4确认收货/代收获 -->

								<!-- 3 -->
								<!-- 6立即评价/待评价 -->
								<!-- 7申请售后/待评价 -->
								<!-- 4 -->
								<!-- 7申请售后/以完成 -->
								<!-- 5 -->
								<!-- 5退款审核中/退款中 -->
								<!-- 6退款成功/退款中 -->
								<!-- 7退款已驳回/退款中 -->


								<!-- 申请退货/申请售后 -->
								<!-- 申请换货/申请售后 -->

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
									<view class="button" @click="annui(6, items)" v-if="items.state == 3">
										立即评价
									</view>
									<view class="button" @click="annui(7, items)"
										v-if="items.state == 3 || items.state == 4">
										申请售后
									</view>
									<view class="button" @click="annui(2, items)" v-if="items.state == 5">
										取消退款
									</view>
									<!--  -->
									<!--  -->
									<view class="button" @click="delorder(items)"
										v-if="items.state == 9 || items.state == 4 || items.state == 3">
										删除订单
									</view>
									<!--  -->
									<!--  -->
									<view class="button" v-if="items.state == 8">
										已申请退款
									</view>
								</view>
							</view>
							<u-empty v-if="item.data_list.length == 0" text="暂无订单" mode="list"></u-empty>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<u-popup width="640" :closeable="true" border-radius="10" v-model="show" mode="center">
			<view class="popup">
				<view class="top"> 提示 </view>
				<view class="cets"> 确认取消该订单么？ </view>
				<view class="xian"> </view>
				<view class="bottoms">
					<view class="sdasas" @click="xuanzhe(0)"> 取消 </view>
					<view class="czcxc" @click="xuanzhe(1)"> 确定 </view>
				</view>
			</view>
		</u-popup>
		<u-popup width="640" :closeable="true" border-radius="10" v-model="showa" mode="center">
			<view class="popup">
				<view class="top"> 提示 </view>
				<view class="cets"> 确认取消退款？ </view>
				<view class="xian"> </view>
				<view class="bottoms">
					<view class="sdasas" @click="xuanzhea(0)"> 取消 </view>
					<view class="czcxc" @click="xuanzhea(1)"> 确定 </view>
				</view>
			</view>
		</u-popup>
		<u-popup width="640" :closeable="true" border-radius="10" v-model="shows" mode="center">
			<view class="popup">
				<view class="top"> 提示 </view>
				<view class="cets"> 确认收到该订单商品？ </view>
				<view class="xian"> </view>
				<view class="bottoms">
					<view class="sdasas" @click="xuanzhes(0)"> 取消 </view>
					<view class="czcxc" @click="xuanzhes(1)"> 确定 </view>
				</view>
			</view>
		</u-popup>
		<u-kehu po_hei="100" url="../Home/booking/AppointmentDesign"></u-kehu>
	</view>
</template>

<script>
	import dayjs from "dayjs";
	export default {
		data() {
			return {
				hahahaxuanzhe: {},
				imgtitle: this.$imgPath,
				show: false,
				shows: false,
				showa: false,
				height: 0,
				current: 0,
				title: "",
				// lists: [{
				// 		name: "全部",
				// 	},
				// 	{
				// 		name: "待付款",
				// 	},
				// 	{
				// 		name: "待发货",
				// 	},
				// 	{
				// 		name: "待收货",
				// 	},
				// 	{
				// 		name: "待评价",
				// 	},
				// 	{
				// 		name: "已完成",
				// 	},
				// 	{
				// 		name: "退换货",
				// 	},
				// ],
				// list: [{
				// 		status: "all",
				// 		data_list: [],
				// 	},
				// 	{
				// 		status: 0,
				// 		data_list: [],
				// 	},
				// 	{
				// 		status: 1,
				// 		data_list: [],
				// 	},
				// 	{
				// 		status: 2,
				// 		data_list: [],
				// 	},
				// 	{
				// 		status: 3,
				// 		data_list: [],
				// 	},
				// 	{
				// 		status: 4,
				// 		data_list: [],
				// 	},
				// 	{
				// 		status: 5,
				// 		data_list: [],
				// 	},
				// ],
				lists: [{
						name: "代发货",
					},
					{
						name: "发货中",
					},
					{
						name: "已收货",
					},
					{
						name: "报装中",
					},
					{
						name: "已安装",
					}
				],
				list: [{
						status: 0,
						data_list: [],
					},
					{
						status: 1,
						data_list: [],
					},
					{
						status: 2,
						data_list: [],
					},
					{
						status: 3,
						data_list: [],
					},
					{
						status: 4,
						data_list: [],
					}
				],
				time: "",
			};
		},
		onLoad(ev) {
			uni.$on("number", () => {
				this.current = 6
			})
			uni.$on("yuwancheng", () => {
				this.current = 5
			})
			this.title = ev.title;
			if (ev.current) {
				this.current = ev.current;
			}
			this.$api.orderset().then(data => {
				if (data.data.code == 1) {
					this.time = data.data.data.status.ordertime
				}
			})
		},
		onShow() {
			this.system();
			this.allsss();
		},
		methods: {
			delorder(ev) {
				console.log(ev);
				let that = this;
				uni.showModal({
					title: '是否删除此订单',
					content: ev.orderid,
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							that.$api.deleorder({
								orderid: ev.orderid
							}).then(data => {
								uni.showToast({
									title: data.data.msg,
									duration: 1000,
									icon: "success"
								});
								if (data.data.code == 1) {
									uni.navigateBack(-1)
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			allsss() {
				this.$api.myorder({
					user_id: uni.getStorageSync("user_info").id,
				}).then((data) => {
					if (data.data.code == 1) {
						this.list.forEach((item, index) => {
							item.data_list = [];
						});
						data.data.data.status.forEach((item) => {
							switch (item.state) {
								case "0":
									this.list[0].data_list.push(item);
									break;
								case "1":
									this.list[1].data_list.push(item);
									break;
								case "2":
									this.list[2].data_list.push(item);
									break;
								case "3":
									this.list[3].data_list.push(item);
									break;
								case "4":
									this.list[4].data_list.push(item);
									break;
								default:

							}
						});
						// this.list[0].data_list = [];
						// this.list[0].data_list = [...data.data.data.status];
						// this.chulidata();
					}
				});
			},
			//订单
			order() {
				this.$api
					.myorderI({
						user_id: 1,
					})
					.then((data) => {
						if (data.data.code == 1) {

						}
					});
			},
			//订单
			//订单详情
			goods(ev) {
				// let aa = JSON.stringify(ev)
				uni.navigateTo({
					url: "../pagesA/goods_data?order_id=" + ev.orderid,
				});
			},
			//订单详情
			//退款
			xuanzhea(ev) {
				switch (ev) {
					case 0:
						this.showa = false;
						break;
					case 1:
						this.$api.qxorder({
							orderid: this.order_id
						}).then(data => {
							if (data.data.code == 1) {
								uni.showToast({
									title: data.data.msg,
									icon: "none",
								});
								this.allsss();
								// this.current = 
							}
						})
						this.showa = false;
						break;
					default:
				}
			},
			//收获
			xuanzhes(ev) {
				switch (ev) {
					case 0:
						this.shows = false;
						break;
					case 1:
						this.$api.sureorder({
							id: this.order_id
						}).then(data => {
							if (data.data.code == 1) {
								uni.showToast({
									title: "收货成功",
									icon: "none",
								});
								this.allsss();
								this.current = 4
							}
						})
						this.shows = false;
						break;
					default:
				}
			},
			// 取消订单
			xuanzhe(ev) {
				switch (ev) {
					case 0:
						this.show = false;
						break;
					case 1:
						this.$api
							.orderdzf({
								id: this.hahahaxuanzhe.id,
							})
							.then((data) => {
								if (data.data.code == 1) {
									uni.showToast({
										title: "订单取消成功",
										duration: 1000,
										icon: "success",
									});
									this.allsss();
									this.show = false;
									this.current = 0
								} else {
									uni.showToast({
										title: data.data.msg,
										duration: 1000,
										icon: "success",
									});
								}
							});
						break;
					default:
				}
			},
			annui(ev, item) {
				//0取消订单
				//1立即支付
				//2取消退款
				//3查看物流
				//4确认收货
				//5申请退款
				//6立即评价

				switch (ev) {
					case 0:

						this.order_id = item.id;
						this.show = true;
						this.hahahaxuanzhe = item;
						break;
					case 1:


						this.$api
							.orderpay({
								prepay_id: item.id,
								id: item.id,
							}).then((res) => {

								if (res.data.code == 200) {
									let that = this;
									uni.requestPayment({
										timeStamp: res.data.data.timeStamp, //当前的时间
										nonceStr: res.data.data.nonceStr, //随机字符串
										package: res.data.data.package, //统一下单接口返回的 prepay_id 参数值
										signType: res.data.data.signType, //签名算法，暂支持 MD5。
										paySign: res.data.data.paySign, //签名
										success: function(res) {
											uni.showToast({
												title: "支付成功",
												icon: "none",
											});
											that.allsss();
											that.current = 2
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
							});
						break;
					case 2:

						this.order_id = item.orderid;
						this.showa = true;
						break;
					case 3:

						uni.navigateTo({
							url: "../pagesC/wuliu?id=" + item.id,
						});
						break;
					case 4:

						this.order_id = item.id
						this.shows = true;
						break;
					case 5:
						let type = ""

						if (this.current == 2) {
							type = 0
						} else {
							type = 1
						}
						uni.navigateTo({
							url: "../pagesA/tuikuan?orderid=" + item.orderid + "&type=" + type
						});
						break;
					case 6:

						uni.navigateTo({
							url: "../pagesC/pingjia?item=" + JSON.stringify(item)
						});
						break;
					case 7:

						uni.navigateTo({
							url: "../pagesC/shouhou?item=" + JSON.stringify(item)
						});
						break;
					default:
				}
			},
			//处理数据
			chulidata() {
				this.list.forEach((item, index) => {
					if (index != 0) {
						item.data_list = [];
					}
				});
				this.list[0].data_list.forEach((item) => {
					switch (item.state) {
						case "0":
							this.list[1].data_list.push(item);
							break;
						case "1":
							this.list[2].data_list.push(item);
							break;
						case "2":
							this.list[3].data_list.push(item);
							break;
						case "3":
							this.list[4].data_list.push(item);
							break;
						case "4":
							this.list[5].data_list.push(item);
							break;
						default:
							if (item.state != 9) {
								this.list[6].data_list.push(item);
							}
					}
				});
				// this.list[2].data_list.forEach(item => {
				// 	dayjs(item.updatetime).format('YYYY-MM-DD');

				// })
			},
			system() {
				let system = uni.getSystemInfoSync();
				this.height = system.windowHeight;
			},
			lun_change(ev) {
				this.current = ev.detail.current;
			},
			change(ev) {
				this.current = ev;
				this.title = this.lists[ev].name
			},
			back(ev) {
				switch (ev) {
					case 0:
						uni.navigateBack(-1);
						break;
					case 1:
						uni.switchTab({
							url: "/pages/Home/Home",
						});
						break;
					default:
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.popup {
		.xcvb {
			height: 100%;
			width: 2rpx;
			background: #efefef;
		}

		.czcxc {
			border-left: 1px solid #efefef;
			text-align: center;
			width: 50%;
			padding: 25rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #007399;
		}

		.sdasas {
			border-right: 1px solid #efefef;
			text-align: center;
			width: 50%;
			padding: 25rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #333333;
		}

		.xian {
			height: 2rpx;
			background: #efefef;
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
			color: #fefefe;
		}
	}

	.home {
		.swiper {
			.swiper-item {
				margin-bottom: 30rpx;
				border-radius: 10rpx;
				background-color: #ffffff;
				padding: 30rpx;
				margin: 30rpx;

				.anniu {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					margin-top: 30rpx;

					.button:last-child {
						padding: 15rpx 25rpx;
						background: #e8f2f4;
						border: 2rpx solid #007399;
						border-radius: 30rpx;
						font-size: 20rpx;
						font-weight: 400;
						color: #007399;
						margin-left: 20rpx;
					}

					.button {
						padding: 15rpx 25rpx;
						background: #efefef;
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
						color: #db1625;
					}

					.status {
						font-size: 24rpx;
						font-weight: 400;
						color: #db0e1e;
					}
				}

				.centre {
					display: flex;
					align-items: center;
					justify-content: end;
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
					border-bottom: 1px solid #f6f6f6;

					.status {
						padding: 5rpx 10rpx;
						background: #fc716a;
						border-radius: 4rpx;
						font-size: 20rpx;
						font-weight: 400;
						color: #ffffff;
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
			background-color: #ffffff;
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
