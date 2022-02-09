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
									<!-- <view class="status" v-show="items.state == 2"> 待收货 </view> -->
									<view class="status" v-show="items.state == 2"> 发货中 </view>
									<!-- <view class="status" v-show="items.state == 3"> 待评价 </view> -->
									<view class="status" v-show="items.state == 3"> 已收货 </view>
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
									<view class="status" v-show="items.state == 16"> 报装中 </view>
									<view class="status" v-show="items.state == 17"> 已安装 </view>
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
									<view class="button" @click="annui(7, items)"
										v-if="items.state == 3 || items.state == 4">
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
							<u-empty v-if="item.data_list.length == 0" text="暂无订单" mode="list"></u-empty>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 确认取消该订单 -->
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
		<!-- 确认安装完成 -->
		<u-popup width="640" :closeable="true" border-radius="10" v-model="qurren" mode="center">
			<view class="popup">
				<view class="top"> 提示 </view>
				<view class="cets"> 是否安装完成 </view>
				<view class="xian"> </view>
				<view class="bottoms">
					<view class="sdasas" @click="qurrere(0)"> 取消 </view>
					<view class="czcxc" @click="qurrere(1)"> 确定 </view>
				</view>
			</view>
		</u-popup>
		<!-- 确认取消退款 -->
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
		<!-- 是否需要安装 -->
		<u-popup width="640" :closeable="true" border-radius="10" v-model="baozhuangshow" mode="center">
			<view class="popup">
				<view class="top"> 提示 </view>
				<view class="cets"> 是否需要安装？ </view>
				<view class="xian"> </view>
				<view class="bottoms">
					<view class="sdasas" @click="baozhaungshowss(0)"> 取消 </view>
					<view class="czcxc" @click="baozhaungshowss(1)" v-if="buyanzheng"> 确定 </view>
					<view class="czcxc" @click="tanchuanbaozhuang()" v-else> 确定 </view>
				</view>
			</view>
		</u-popup>
		<!-- 确认收到该订单商品 -->
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

		<!-- 确保是你本人操作 -->
		<u-popup width="500" border-radius="30" v-model="shoujiyanzheng" mode="center">
			<view class="yueduwo">
				<view class="text">
					确保是你本人操作
				</view>
				<view class="textss">
					<input type="number" value="" @blur="hahahaa" placeholder="请输入手机号" v-model="shoujihao" />
				</view>
				<view class="yanzhengma">
					<view class="cet" style="justify-content: space-around;width: 100%;">
						<view class="djkshfks" style="background-color: #e5e5e5;padding: 0 30rpx;">
							<u-input inputAlign="left" size="200" v-model="code" placeholder="请输入验证码" type="number" />
						</view>
						<button class="annuyt" @click="go_code">{{huoqu}}</button>
					</view>
				</view>
				<view class="anniusss">
					<view class="hkhnij" @click="tongyis(0)">
						取消
					</view>
					<view class="hkhnij jjhgj" @click="tongyis(1)">
						同意
					</view>
				</view>
			</view>
		</u-popup>
		<!-- 服务协议和隐私政策 -->
		<u-popup width="500" border-radius="30" v-model="yuedu" mode="center">
			<view class="yueduwo">
				<view class="text">
					服务协议和隐私政策
				</view>
				<view class="textss">
					感谢您使用宝芸邸，我们会严格
					按照法律规定存储和使用您的个人
					信息。您可以阅读以下几项条款了
					解详细信息。如您同意，请勾选以
					下几项条款并点击”同意”开始接受
					我们的服务。
				</view>
				<view style="padding:20rpx 0;">
					<view class="cet" style="margin:10rpx 0;justify-content: end;" v-for="(item,index) in xieyi"
						:key="index">
						<view style="width:30%;display:flex;justify-content: flex-end;">
							<view class="yuan" @click="hahaha(item)">
								<u-icon v-if="item.check" name="checkbox-mark" color="#2979ff" size="28"></u-icon>
							</view>
						</view>
						<view class="mingcheng" @click="fuwenben(item)">
							《{{item.name}}》
						</view>
					</view>
				</view>
				<view class="anniusss">
					<view class="hkhnij" @click="tongyi(0)">
						暂不使用
					</view>
					<view class="hkhnij jjhgj" @click="tanchuanbaozhuang()">
						同意
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import dayjs from "dayjs";
	export default {
		data() {
			return {
				qurrsaen: "",
				qurren: false,
				code: "",
				buyanzheng: true,
				timea: 0,
				huoqu: "获取验证码",
				shoujiyanzheng: false,
				yuedu: false,
				xieyi: [],
				//
				//
				mnbv: "",
				baozhuangshow: false,
				hahahaxuanzhe: {},
				imgtitle: this.$imgPath,
				show: false,
				shows: false,
				showa: false,
				height: 0,
				current: 0,
				title: "",
				lists: [{
						name: "全部",
					},
					{
						name: "待发货",
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
						status: "all",
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
					},
					{
						status: 5,
						data_list: [],
					}
				],
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
			this.$api.agreement({
				state: 5
			}).then(data => {
				if (data.data.code == 1) {
					console.log(data);
					data.data.data.status.forEach(item => {
						item["check"] = false
					})
					this.xieyi = data.data.data.status
				} else {
					this.buyanzheng = false
				}
			})
		},
		methods: {
			qurrere(ev) {
				if (ev == 1) {
					this.$api.successloading({
						orderid: this.qurrsaen.orderid
					}).then(data => {
						if (data.data.code == 1) {
							uni.showToast({
								title: "安装完成",
								icon: "success"
							})
							this.allsss();
						} else {
							uni.showToast({
								title: data.data.msg,
								icon: "success"
							})
						}
						this.qurren = false
					})
				} else {
					this.qurren = false
				}
			},
			jiesubaozhaung(ev) {
				console.log(ev);
				this.qurrsaen = ev
				this.qurren = true
			},
			tanchuanbaozhuang() {
				if (this.buyanzheng) {
					let mm = 0
					this.xieyi.forEach(item => {
						if (item.check) {
							mm++
						}
					})
					if (this.xieyi.length != mm) {
						return uni.showToast({
							title: "请阅读并同意协议",
							icon: "none"
						})
					}
					this.shoujiyanzheng = false;
					this.yuedu = false
				}
				this.baozhuangshow = false
				uni.setStorageSync("baozhaung", this.mnbv.shop)
				uni.navigateTo({
					url: "./baozhaung?orderid=" + this.mnbv.orderid + "&tiao=1"
				})
			},
			baozhaungshowss(ev) {
				if (ev == 1) {
					this.shoujiyanzheng = true
				}
				this.baozhuangshow = false
			},
			baozhaung(ev) {
				this.mnbv = ev
				this.baozhuangshow = !this.baozhuangshow
			},
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
									that.allsss()
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
						this.list[0].data_list = data.data.data.status;
						data.data.data.status.forEach((item) => {
							switch (item.state) {
								case "1":
									this.list[1].data_list.push(item);
									break;
								case "2":
									this.list[2].data_list.push(item);
									break;
								case "3":
									this.list[3].data_list.push(item);
									break;
								case "16":
									this.list[4].data_list.push(item);
									break;
								case "17":
									this.list[5].data_list.push(item);
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
				this.$api.myorderI({
					user_id: 1,
				}).then((data) => {
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
						this.$api.orderpay({
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
										that.current = 1
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
						case "16":
							this.list[4].data_list.push(item);
							break;
						case "17":
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
			hahaha(item) {
				item.check = !item.check
			},
			fuwenben(ev) {
				uni.setStorageSync("fuwenbeng", ev.content)
				uni.navigateTo({
					url: "../pagesC/fuwenben?title=" + ev.name
				})
			},
			tongyis(ev) {
				if (ev == 1) {
					if (this.code != "") {
						this.tongyi(1)
					} else {
						uni.showToast({
							title: "请输入验证码",
							icon: "none"
						})
					}
				} else {
					this.shoujiyanzheng = false;
				}
			},
			tongyi(ev) {
				if (ev == 1) {
					this.xieyi.forEach(item => {
						item.check = false
					})
					this.yuedu = true;
				} else {
					this.shoujiyanzheng = false;
					this.yuedu = false;
				}
			},
			hahahaa(ev) {
				let phoneCodeVerification = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (!phoneCodeVerification.test(ev.detail.value)) {
					uni.showToast({
						title: "手机号不正确",
						icon: "none"
					})
				}
			},
			go_code() {
				if (this.timea == 0) {
					this.timea = 60
					let aa = setInterval(() => {
						this.timea--
						this.huoqu = this.timea + "s后获取"
						if (this.timea == 0) {
							clearInterval(aa)
							this.huoqu = '获取验证码'
						}
					}, 1000)
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

	.yueduwo {
		background-color: #FFFFFF;

		.jjhgj {
			color: #2979ff;
			font-size: 30rpx;
			font-weight: bold;
			border-left: 1px solid #b9b9b9;
		}

		.hkhnij {
			width: 100%;
			height: 100%;
			padding: 26rpx 0;
			text-align: center;

		}

		.anniusss {
			display: flex;
			border-top: 1px solid #b9b9b9;
		}

		.mingcheng {
			color: #2979ff;
		}

		.yuan {
			width: 30rpx;
			height: 30rpx;
			border: 1px solid #000000;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
		}

		.textss {
			padding: 0 26rpx;
			text-align: center;
			font-weight: bold;
			font-size: 30rpx;
		}

		.text {
			text-align: center;
			line-height: 100rpx;
			font-weight: bold;
			font-size: 30rpx;
		}
	}

	.yanzhengma {
		margin: 50rpx 0px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.djkshfks {
			background-color: #e5e5e5;
			height: 100%;
			border-radius: 10rpx;
			width: 230rpx;
		}

		.annuyt {
			font-size: 28rpx;
			margin: 0;
		}
	}
</style>
