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
			<view class="tosp cet" v-show="data_list.state == 0">
				<view>
					<view class="cxcxdcdcdcd">
						待支付
					</view>
					<view class="cet cdsfsdfs">
						<image class="img" src="../../static/loudou.png" mode="aspectFit"></image>
						<view class="jhjk">
							一天后自动取消订单
						</view>
					</view>
				</view>
			</view>
			<view class="centers cet" style="justify-content: space-between;">
				<image class="img" src="../../static/icon_me_blueaddress.png" mode="aspectFit"></image>
				<view style="width: 86%;">
					<view class="cet" style="justify-content: flex-start;margin-bottom: 30rpx;">
						<view class="name">
							{{data_list.username}}
						</view>
						<view class="phone">
							{{data_list.phone}}
						</view>
					</view>
					<view class="text">
						{{data_list.address}}{{data_list.addressxq}}
					</view>
				</view>
			</view>
			<view class="swiper-item">
				<view class="top">
					<view class="text"> 订单编号：{{ data_list.orderid }} </view>
					<view class="status" v-show="data_list.state == 0"> 待付款 </view>
					<view class="status" v-show="data_list.state == 1"> 待发货 </view>
					<view class="status" v-show="data_list.state == 2"> 待收货 </view>
					<view class="status" v-show="data_list.state == 3"> 待评价 </view>
					<view class="status" v-show="data_list.state == 4"> 已完成 </view>
					<view class="status" v-show="data_list.state == 5"> 退款审核中 </view>
					<view class="status" v-show="data_list.state == 6"> 退款成功 </view>
					<view class="status" v-show="data_list.state == 7"> 退款已驳回 </view>
					<view class="status" v-show="data_list.state == 9"> 已取消 </view>
					<view class="status" v-show="data_list.state == 10"> 退货审核中 </view>
					<view class="status" v-show="data_list.state == 11"> 退货成功 </view>
					<view class="status" v-show="data_list.state == 12"> 退货已驳回 </view>
					<view class="status" v-show="items.state == 13"> 换货审核中 </view>
					<view class="status" v-show="items.state == 14"> 换货成功 </view>
					<view class="status" v-show="items.state == 15"> 换货已驳回 </view>
				</view>
				<view class="centre" v-for="(itemc,indexc) in data_list.shop" :key="indexc" @click="product(itemc)">
					<view class="">
						<image class="img" :src="img+itemc.simage" mode="aspectFit"></image>
					</view>
					<view class="" style="margin-left: 20rpx;">
						<view class="name">
							{{itemc.name}}
						</view>
						<text class="fdsds">共{{itemc.num}}件 合计：</text><text
							class="fsdfsfs fdsds">￥{{(itemc.num* itemc.sonprice).toFixed(2)}}</text>
					</view>
				</view>
				<view style="">
					<view class="text kfhkjsdh">
						<view class="">
							商品总价：
						</view>
						<view class="red">
							￥{{data_list.price}}
						</view>
					</view>
					<view class="text kfhkjsdh">
						<view class="">
							数量
						</view>
						<view class="reds">
							共{{data_list.num}}件
						</view>
					</view>
					<view class="text kfhkjsdh">
						<view class="">
							运费
						</view>
						<view class="red">
							<text v-if="data_list.yf !=0 && data_list.yf !==null">{{data_list.yf}}</text><text
								v-else>包邮</text>
						</view>
					</view>
					<!-- <view class="text kfhkjsdh" @click="youhuijuan">
						<view class="">
							优惠券
						</view>
						<view class="cet">
							<view class="red">
								<text v-if="youhuijuan_num != 0">-￥{{youhuijuan_num}}</text><text v-else>暂无优惠卷</text>
							</view>
							<image style="width: 8rpx;height: 14rpx;margin-left: 10rpx;"
								src="../../static/icon_home_heiseyoufan.png" mode="aspectFit"></image>
						</view>
					</view> -->
				</view>
				<view style="height: 2rpx;background: #F6F6F6;">

				</view>
				<view class="kfhkjsdh">
					<view class="text">
						总金额：<text class="reds">￥{{data_list.price}}</text>
					</view>
					<view class="status" v-show="data_list.state == 0">
						未支付
					</view>
					<view class="status" v-show="data_list.state != 0">
						已支付￥{{data_list.price}}
					</view>
				</view>
			</view>
			<view class="bottomsk">
				<view class="text">
					订单信息
				</view>
				<view class="xians">

				</view>
				<view class="kfosjd">
					<view class="dmskajd">订单编号：</view>
					<view class="djkshfk">{{data_list.orderid}}</view>

				</view>
				<view class="kfosjd">
					<view class="dmskajd">创建时间：</view>
					<view class="djkshfk">{{data_list.create_at}}</view>
				</view>
				<view class="kfosjd">
					<view class="dmskajd">订单备注：</view>
					<view class="djkshfk">{{data_list.content||"无备注"}}</view>
				</view>
			</view>
			<!-- <view class="tuikuan" v-show="data_list.tuikuan == 3">
				<view class="text">
					填写快递单号
				</view>
				<view class="xians">
				</view>
				<view class="ipnu">
					<u-input input-align="left" placeholder="请填写相关的快递单号" v-model="value" type="text" />
				</view>
			</view> -->
			<view class="tuikuans" v-show="data_list.state == 5 || data_list.state == 6 || data_list.state == 7">
				<view class="text">
					退款信息
				</view>
				<view class="xians">

				</view>
				<view class="kfosjd">
					<view class="dmskajd">退款理由：</view>
					<view class="djkshfk">{{data_list.state_text}}</view>

				</view>
				<view class="kfosjd">
					<view class="dmskajd">补充说明：</view>
					<view class="djkshfk" v-if="data_list.tuik_ly">{{data_list.tuik_ly}}</view>
					<view class="djkshfk" v-else></view>
				</view>
				<view class="hahahahha">
					<view class="dmskajds">图片说明：</view>
					<view class="djkshfks">
						<image class="imgsa" :src="img+item" v-for="(item,index) in img_list" :key="index" mode="aspectFit">
						</image>
					</view>
				</view>
			</view>
			<view class="datass" v-show="data_list.state == 7">
				<view class="text">
					驳回理由
				</view>
				<view class="xians">

				</view>
				<view class="kfosjd">
					<view class="djkshfk">{{data_list.bohui}}</view>
				</view>
			</view>
		</view>
		<view style="height: 110rpx;"></view>
		<u-kehu po_hei="100" url="../Home/booking/AppointmentDesign"></u-kehu>
		<view class="annius">
			<view class="anniu">
				<view class="button" @click="annui(0)" v-if="data_list.state == 0">
					取消订单
				</view>
				<view class="button" @click="annui(1)" v-if="data_list.state == 0">
					立即支付
				</view>
				<view class="button" @click="annui(5)" v-if="data_list.state == 1">
					申请退款
				</view>
				<view class="button" @click="annui(3)" v-if="data_list.state == 2">
					查看物流
				</view>
				<view class="button" @click="annui(4)" v-if="data_list.state == 2">
					确认收货
				</view>
				<view class="button" @click="annui(6)" v-if="data_list.state == 3">
					立即评价
				</view>
				<view class="button" @click="annui(7)" v-if="data_list.state == 3 || data_list.state == 4">
					申请售后
				</view>
				<view class="button" @click="annui(2)" v-if="data_list.state == 5">
					取消退款
				</view>
				<!-- <view class="button" v-if="items.state == 9">
					取消售后
				</view> -->
				<!--  -->
				<!--  -->
				<view class="button" v-if="data_list.state == 9 || data_list.state == 4 || data_list.state == 3">
					删除订单
				</view>
				<!--  -->
				<!--  -->
				<view class="button" v-if="items.state == 8">
					已申请退款
				</view>
			</view>
		</view>
		<u-popup width="640" :closeable="true" border-radius="10" v-model="show" mode="center">
			<view class="popup">
				<view class="top">
					提示
				</view>
				<view class="cets">
					确认取消该订单么？
				</view>
				<view class="xian">

				</view>
				<view class="bottoms">
					<view class="sdasas" @click="xuanzhe(0)">
						取消
					</view>
					<view class="czcxc" @click="xuanzhe(1)">
						确定
					</view>
				</view>
			</view>
		</u-popup>
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
		<u-popup width="640" :closeable="true" border-radius="10" v-model="shows" mode="center">
			<view class="popup">
				<view class="top">
					提示
				</view>
				<view class="cets">
					确认收到该订单商品？
				</view>
				<view class="xian">

				</view>
				<view class="bottoms">
					<view class="sdasas" @click="xuanzhes(0)">
						取消
					</view>
					<view class="czcxc" @click="xuanzhes(1)">
						确定
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				youhuijuan_num: 0,
				img: this.$imgPath,
				value: "",
				show: false,
				shows: false,
				showa: false,
				title: "商品详情",
				data_list: {},
				img_list: [],
				order_idsssss: ""
			}
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
			this.order_idsssss = ev.order_id

			this.allsss()

		},
		methods: {
			allsss() {
				this.$api.myorder({
					user_id: uni.getStorageSync("user_info").id,
					id: this.order_idsssss
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							if (item.orderid == this.order_idsssss) {
								this.data_list = item;
								let img = this.data_list.image;
								this.img_list = img.split(",")

							}
						})
					}
				})
			},
			// 退款
			xuanzhea(ev) {
				switch (ev) {
					case 0:
						this.showa = false;
						break;
					case 1:
						this.$api.qxorder({
							orderid: this.order_idsssss
						}).then(data => {
							if (data.data.code == 1) {
								uni.showToast({
									title: data.data.msg,
									icon: "none",
								});
								uni.navigateBack(-1)
							}
						})
						this.showa = false;
						break;
					default:
				}
			},
			product(ev) {

				uni.navigateTo({
					url: "/pages/pagesC/Shopping?shopid=" + ev.id,
				});
			},
			xuanzhes(ev) {
				switch (ev) {
					case 0:
						this.shows = false;
						break;
					case 1:
						this.$api.sureorder({
							id: this.data_list.id
						}).then(data => {
							if (data.data.code == 1) {
								uni.showToast({
									title: "收货成功",
									icon: "none",
								});
								uni.navigateBack(-1)
							}
						})
						this.shows = false;
						break;
					default:
				}
			},
			//取消订单
			xuanzhe(ev) {
				switch (ev) {
					case 0:
						this.show = false;
						break;
					case 1:
						this.$api.orderdzf({
							id: this.data_list.id,
						}).then(data => {
							if (data.data.code == 1) {
								uni.showToast({
									title: "订单取消成功",
									duration: 1000,
									icon: "success"
								})
								this.show = false;
								uni.navigateBack(-1);
							} else {
								uni.showToast({
									title: data.data.msg,
									duration: 1000,
									icon: "success"
								})
							}
						})
						break;
					default:
				}
			},
			annui(ev) {
				//0取消订单
				//1支付
				//2取消退款
				//3查看物流
				//4确认收货
				//5申请退款
				//6立即评价
				//7支付尾款
				switch (ev) {
					case 0:

						this.show = true;
						break;
					case 1:

						this.$api.orderpay({
								prepay_id: this.data_list.id,
								id: this.data_list.id,
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
											uni.navigateBack(-1)
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

						this.showa = true;
						break;
					case 3:

						uni.navigateTo({
							url: "../pagesC/wuliu?id=" + this.data_list.id,
						});
						break;
					case 4:

						this.shows = true;
						break;
					case 5:
						let type = ""

						if (this.data_list.state == 1) {
							type = 0
						} else {
							type = 1
						}
						uni.navigateTo({
							url: "../pagesA/tuikuan?orderid=" + this.data_list.orderid + "&type=" + type +
								"&asdf=111"
						})
						break;
					case 6:

						uni.navigateTo({
							url: "../pagesC/pingjia?item=" + JSON.stringify(this.data_list)
						})
						break;
					case 7:

						uni.navigateTo({
							url: "../pagesC/shouhou?item=" + JSON.stringify(this.data_list)
						});
						break;
					default:
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
	.annius {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.anniu {

		display: flex;
		align-data_list: center;
		justify-content: flex-end;
		background-color: #FFFFFF;
		padding: 20rpx 30rpx;

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

	.xians {
		height: 2rpx;
		background: #F6F6F6;
	}

	.home {
		padding: 30rpx;

		.datass {
			margin-bottom: 30rpx;
			padding: 30rpx;
			background: #FFFFFF;
			border-radius: 10rpx;

			.kfosjd {
				padding: 20rpx 0;
				display: flex;
				align-items: center;



				.djkshfk {
					height: 80%;
					font-size: 24rpx;
					font-weight: 400;
					color: #666666;
				}
			}

			.text {
				padding-bottom: 20rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}
		}

		.tuikuans {
			margin-bottom: 30rpx;
			padding: 30rpx;
			background: #FFFFFF;
			border-radius: 10rpx;

			.hahahahha {
				.djkshfks {
					padding: 30rpx 0;
					display: flex;
					justify-content: space-around;
					align-items: center;
					flex-wrap: wrap;
					font-size: 24rpx;
					font-weight: 400;
					color: #333333;
				}

				.dmskajds {
					font-size: 24rpx;
					font-weight: 400;
					color: #333333;
				}

				.imgsa {
					border-radius: 20rpx;
					width: 160rpx;
					height: 160rpx;
					margin-bottom: 20rpx;
				}
			}

			.djkshfk {
				width: 80%;
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}

			.dmskajd {
				width: 20%;
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}

			.kfosjd {
				padding: 20rpx 0;
				display: flex;
				align-items: center;
			}

			.text {
				padding-bottom: 20rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}
		}

		.tuikuan {
			margin-bottom: 30rpx;
			padding: 30rpx;
			width: 690rpx;
			height: 178rpx;
			background: #FFFFFF;
			border-radius: 10rpx;

			.ipnu {
				padding: 30rpx 0;
			}

			.text {
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}
		}

		.bottomsk {
			margin-bottom: 30rpx;
			padding: 30rpx;
			background: #FFFFFF;
			border-radius: 10rpx;

			.kfosjd {
				padding: 20rpx 0;
				display: flex;
				align-items: center;

				.dmskajd {
					width: 20%;
					font-size: 24rpx;
					font-weight: 400;
					color: #333333;
				}

				.djkshfk {
					height: 80%;
					font-size: 24rpx;
					font-weight: 400;
					color: #666666;
				}
			}

			.text {
				padding-bottom: 20rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}
		}

		.centers {
			width: 690rpx;
			height: 160rpx;
			background: #FFFFFF;
			border-radius: 10rpx;
			margin-bottom: 30rpx;
			padding: 30rpx;

			.text {
				font-size: 24rpx;
				font-weight: 400;
				color: #666666;
			}

			.phone {
				margin-left: 20rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #999999;
			}

			.name {
				font-size: 26rpx;
				font-weight: 400;
				color: #333333;
			}

			.img {
				width: 60rpx;
				height: 60rpx;
			}
		}

		.tosp {
			background-image: url(../../static/me_payment_bg.png);
			background-size: cover;
			background-repeat: no-repeat;
			width: 690rpx;
			height: 170rpx;
			margin-bottom: 30rpx;

			.cxcxdcdcdcd {
				margin-bottom: 20rpx;
				font-size: 30rpx;
				font-weight: 400;
				color: #007399;
			}

			.cdsfsdfs {
				width: fit-content;
				padding: 10rpx 20rpx;
				background: #E4F2F4;
				border-radius: 100rpx;
			}

			.jhjk {
				font-size: 24rpx;
				font-weight: 400;
				color: #000000;
			}

			.img {
				margin-right: 10rpx;
				width: 18rpx;
				height: 22rpx;
			}
		}

		.swiper-item {
			margin-bottom: 30rpx;
			border-radius: 10rpx;
			background-color: #FFFFFF;
			padding: 30rpx;

			.kfhkjsdh {
				display: flex;
				justify-content: space-between;
				align-data_list: center;
				padding: 30rpx 0;

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
				align-data_list: center;
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
				align-data_list: center;
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

	.navbar {
		.navbar_top {
			border: 1px solid #e5e5e5;
			overflow: hidden;
			width: 166rpx;
			height: 60rpx;
			border-radius: 30rpx;
			margin-left: 30rpx;
			display: flex;
			align-data_list: center;
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
