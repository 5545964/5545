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
		<!-- <view class="search">
			<u-search bg-color="#f6f6f6" placeholder="输入关键字搜索"></u-search>
		</view> -->
		<u-tabs :list="list" :weizhi="false" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<view class="home">
			<view v-if="current == 0">
				<view class="swiper-item" v-for="(items, indexs) in lists[0].data_list" :key="indexs">
					<view class="top" @click="goods(items)">
						<view class="text"> 订单编号：{{ items.orderid ||""}} </view>
						<view class="status" v-show="items.state == 3"> 待安装 </view>
						<view class="status" v-show="items.state == 16"> 报装中 </view>
						<view class="status" v-show="items.state == 17"> 已安装 </view>
					</view>
					<view class="centre" v-for="(itemc, indexc) in items.shop" :key="indexc" @click="goods(items)">
						<view class="">
							<image class="img" :src="imgtitle + itemc.simage" mode="aspectFit"></image>
						</view>
						<view style="margin-left: 10rpx;">
							<view class="name">
								{{ itemc.name ||""}}
							</view>
							<text class="fdsds">共{{itemc.num||""}}件 合计：</text><text
								class="fsdfsfs fdsds">￥{{itemc.sonprice||""}}</text>
						</view>
					</view>
					<view class="kfhkjsdh" @click="goods(items)">
						<view class="text">
							总金额：<text class="reds">￥{{ items.price ||""}}</text>
						</view>
						<view class="status" v-show="items.state == 0"> 未支付 </view>
						<view class="status" v-show="items.state != 0 && items.state != 9">
							已支付￥{{ items.price ||""}}
						</view>
					</view>
					<view class="anniu">
						<view class="button" v-if="items.state == 3 || items.states == 2" @click="baozhaung(items)">
							是否安装
						</view>
						<view class="button" v-if="items.state == 16" @click="jiesubaozhaung(items)">
							完成安装
						</view>
						<view class="button" @click="baozhuangpngji(1, items)" v-if="items.state == 17">
							报装评价
						</view>
						<view class="button" v-if="items.state == 16&&items.bz==1"
							@click="lookdetails(items)">
							查看安装详情
						</view>
					</view>
				</view>
			</view>
			<view v-if="current == 1">
				<view class="swiper-item" v-for="(items, indexs) in lists[1].data_list" :key="indexs">
					<view class="top" @click="goods(items)">
						<view class="text"> 订单编号：{{ items.orderid ||""}} </view>
						<view class="status" v-show="items.state == 3"> 待安装 </view>
						<view class="status" v-show="items.state == 16"> 报装中 </view>
						<view class="status" v-show="items.state == 17"> 已安装 </view>
					</view>
					<view class="centre" v-for="(itemc, indexc) in items.shop" :key="indexc" @click="goods(items)">
						<view class="">
							<image class="img" :src="imgtitle + itemc.simage" mode="aspectFit"></image>
						</view>
						<view style="margin-left: 10rpx;">
							<view class="name">
								{{ itemc.name ||""}}
							</view>
							<text class="fdsds">共{{itemc.num||""}}件 合计：</text><text
								class="fsdfsfs fdsds">￥{{itemc.sonprice||""}}</text>
						</view>
					</view>
					<view class="kfhkjsdh" @click="goods(items)">
						<view class="text">
							总金额：<text class="reds">￥{{ items.price ||""}}</text>
						</view>
						<view class="status" v-show="items.state == 0"> 未支付 </view>
						<view class="status" v-show="items.state != 0 && items.state != 9">
							已支付￥{{ items.price ||""}}
						</view>
					</view>
					<view class="anniu">
						<view class="button" v-if="items.state == 3 || items.states == 2" @click="baozhaung(items)">
							是否安装
						</view>
					</view>
				</view>
			</view>
			<view v-if="current == 2">
				<view class="swiper-item" v-for="(items, indexs) in lists[2].data_list" :key="indexs">
					<view class="top" @click="goods(items)">
						<view class="text"> 订单编号：{{ items.orderid ||""}} </view>
						<view class="status" v-show="items.state == 3"> 待安装 </view>
						<view class="status" v-show="items.state == 16"> 报装中 </view>
						<view class="status" v-show="items.state == 17"> 已安装 </view>
					</view>
					<view class="centre" v-for="(itemc, indexc) in items.shop" :key="indexc" @click="goods(items)">
						<view class="">
							<image class="img" :src="imgtitle + itemc.simage" mode="aspectFit"></image>
						</view>
						<view style="margin-left: 10rpx;">
							<view class="name">
								{{ itemc.name ||""}}
							</view>
							<text class="fdsds">共{{itemc.num||""}}件 合计：</text><text
								class="fsdfsfs fdsds">￥{{itemc.sonprice||""}}</text>
						</view>
					</view>
					<view class="kfhkjsdh" @click="goods(items)">
						<view class="text">
							总金额：<text class="reds">￥{{ items.price ||""}}</text>
						</view>
						<view class="status" v-show="items.state == 0"> 未支付 </view>
						<view class="status" v-show="items.state != 0 && items.state != 9">
							已支付￥{{ items.price ||""}}
						</view>
					</view>
					<view class="anniu">
						<view class="button" v-if="items.state == 16" @click="jiesubaozhaung(items)">
							完成安装
						</view>
						<view class="button" v-if="items.state == 16&&items.bz==1"
							@click="lookdetails(items)">
							查看安装详情
						</view>
					</view>
				</view>
			</view>
			<view v-if="current == 3">
				<view class="swiper-item" v-for="(items, indexs) in lists[3].data_list" :key="indexs">
					<view class="top" @click="goods(items)">
						<view class="text"> 订单编号：{{ items.orderid ||""}} </view>
						<view class="status" v-show="items.state == 3"> 待安装 </view>
						<view class="status" v-show="items.state == 16"> 报装中 </view>
						<view class="status" v-show="items.state == 17"> 已安装 </view>
					</view>
					<view class="centre" v-for="(itemc, indexc) in items.shop" :key="indexc" @click="goods(items)">
						<view class="">
							<image class="img" :src="imgtitle + itemc.simage" mode="aspectFit"></image>
						</view>
						<view style="margin-left: 10rpx;">
							<view class="name">
								{{ itemc.name ||""}}
							</view>
							<text class="fdsds">共{{itemc.num||""}}件 合计：</text><text
								class="fsdfsfs fdsds">￥{{itemc.sonprice||""}}</text>
						</view>
					</view>
					<view class="kfhkjsdh" @click="goods(items)">
						<view class="text">
							总金额：<text class="reds">￥{{ items.price ||""}}</text>
						</view>
						<view class="status" v-show="items.state == 0"> 未支付 </view>
						<view class="status" v-show="items.state != 0 && items.state != 9">
							已支付￥{{ items.price ||""}}
						</view>
					</view>
					<view class="anniu">
						<view class="button" @click="baozhuangpngji(1, items)" v-if="items.state == 17">
							报装评价
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 是否需要安装 -->
		<u-popup width="640" :closeable="true" border-radius="10" v-model="baozhuangshow" mode="center">
			<view class="popup">
				<view class="top"> 提示 </view>
				<view class="cets"> 是否需要安装？</view>
				<view class="xian"> </view>
				<view class="bottoms">
					<view class="sdasas" @click="baozhuangshow = false"> 否 </view>
					<view class="czcxc" @click="dakaishouji(1)" v-if="shifouanzhaungkaiguan"> 是 </view>
					<view class="czcxc" @click="shifouanzhuangdsadas" v-else> 是</view>
				</view>
			</view>
		</u-popup>
		<!-- 查看安装详情 -->
		<u-popup width="500" border-radius="30" v-model="anzhuang" mode="center">
			<view class="yueduwo">
				<view class="text">
					安装详情
				</view>
				<view style="padding: 0 30rpx;">
					<view class="">
						姓名
					</view>
					<view style="background:#f6f6f6;border-radius:10rpx;margin: 10rpx;">
						<u-input disabled inputAlign="left" placeholder-style="color: #999999;" v-model="bzxq.aname"
							placeholder="请填写快递公司" />
					</view>
					<view class="">
						电话
					</view>
					<view style="background:#f6f6f6;border-radius:10rpx;margin: 10rpx;">
						<u-input disabled inputAlign="left" placeholder-style="color: #999999;"
							v-model="bzxq.aphone" placeholder="请填写快递单号" type="number" />
					</view>
					<view v-if="bzxq.abh" class="">
						<view class="">
							安装人员编号
						</view>
						<view style="background:#f6f6f6;border-radius:10rpx;margin: 10rpx;">
							<u-input disabled inputAlign="left" placeholder-style="color: #999999;"
								v-model="bzxq.abh" placeholder="请填写快递单号" type="number" />
						</view>
					</view>
					<view class="">
						预计上门时间
					</view>
					<view style="background:#f6f6f6;border-radius:10rpx;margin: 10rpx;">
						<u-input disabled inputAlign="left" placeholder-style="color: #999999;" v-model="bzxq.atime"
							placeholder="请填写快递单号" type="number" />
					</view>
				</view>
				<!-- <view class="anniusss">
					<view class="hkhnij" @click="anzhuang=false">
						取消
					</view>
					<view class="hkhnij jjhgj" @click="anzhuang=false">
						同意
					</view>
				</view> -->
			</view>
		</u-popup>
		<!-- 确认安装完成 -->
		<u-popup width="640" :closeable="true" border-radius="10" v-model="qurren" mode="center">
			<view class="popup">
				<view class="top"> 提示 </view>
				<view class="cets"> 是否安装完成 </view>
				<view class="xian"> </view>
				<view class="bottoms">
					<view class="sdasas" @click="qurren = false"> 取消 </view>
					<view class="czcxc" @click="dakaishouji(2)" v-if="yianzhaungkaiguan"> 确定 </view>
					<view class="czcxc" @click="anzhaungwancheng()" v-else> 确定 </view>
				</view>
			</view>
		</u-popup>
		<u-heigth />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				anzhuang: false,
				bzxq: {},
				qurrsaen: "",
				qurren: false,
				buyanzheng: true,
				mnbv: "",
				zhuangtai: 0, //0确认收货，1是否安装，2安装完成
				// 已安装
				yianzhaungkaiguan: true,
				yianzhaungxieyi: [],
				// 是否安装
				shifouanzhaungkaiguan: true,
				shifouanzhaungxieyi: [],
				baozhuangshow: false,
				imgtitle: this.$imgPath,
				current: 0,
				pingjiaok: 0,
				title: "我的报装",
				list: [{
						name: "全部"
					},
					{
						name: "待安装"
					},
					{
						name: "安装中"
					},
					{
						name: "已完成"
					}
				],
				lists: [{
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
					}
				],
			};
		},
		onLoad(ev) {
			let aa = uni.getStorageSync("xieyi")
			if (aa) {
				this.yiwanchengxieyi = [];
				this.yianzhaungxieyi = [];
				this.shifouanzhaungxieyi = [];
				this.querenqianshouxieyi = [];
				aa.forEach(item => {
					if (item.state == 3) {
						this.yianzhaungxieyi.push(item)
					}
					if (item.state == 5) {
						this.shifouanzhaungxieyi.push(item)
					}
					if (item.state == 2) {
						this.querenqianshouxieyi.push(item)
					}
				})
				if (this.yianzhaungxieyi.length > 0) {
					this.yianzhaungkaiguan = true
				} else {
					this.yianzhaungkaiguan = false
				}
				if (this.shifouanzhaungxieyi.length > 0) {
					this.shifouanzhaungkaiguan = true
				} else {
					this.shifouanzhaungkaiguan = false
				}
				if (this.querenqianshouxieyi.length > 0) {
					this.querenqianshoukaiguan = true
				} else {
					this.querenqianshoukaiguan = false
				}

			} else {
				this.yianzhaungkaiguan = false
				this.shifouanzhaungkaiguan = false
				this.querenqianshoukaiguan = false
			}
			this.title = ev.title

		},
		onShow() {
			this.allsss();
		},
		methods: {
			// 查看安装详情
			lookdetails(item) {
				this.$api.bzxq({
					id: item.bzid
				}).then(data => {
					if (data.data.code == 1) {
						this.bzxq = data.data.data.status
						this.anzhuang = true
					}
				})
			},
			allsss() {
				// 初始化数据
				this.$api.myorder({
					user_id: uni.getStorageSync("user_info").id,
				}).then((data) => {
					if (data.data.code == 1) {
						this.lists.forEach((item, index) => {
							item.data_list = [];
						});
						data.data.data.status.forEach((item) => {
							switch (item.state) {
								case "3":
									this.lists[0].data_list.push(item);
									this.lists[1].data_list.push(item);
									break;
								case "16":
									this.lists[0].data_list.push(item);
									this.lists[2].data_list.push(item);
									break;
								case "17":
									this.lists[0].data_list.push(item);
									this.lists[3].data_list.push(item);
									break;
								default:
							}
						});
					}
				});
			},
			baozhuangpngji(okj, ev) {
				this.pingjiaok = okj
				this.annui(6, ev)
			},
			annui(ev, item) {
				switch (ev) {
					case 6:
						uni.navigateTo({
							url: "../pagesC/pingjia?item=" + JSON.stringify(item) + "&okj=" + this.pingjiaok
						});
						break;
					default:
				}
			},
			// 已安装
			anzhaungwancheng() {
				this.$api.successloading({
					orderid: this.qurrsaen.orderid
				}).then(data => {
					if (data.data.code == 1) {
						uni.showToast({
							title: "安装完成",
							icon: "success"
						})
						this.qurren = false
						this.allsss();
					} else {
						uni.showToast({
							title: data.data.msg,
							icon: "none"
						})
					}
				})
			},
			// 完成安装
			jiesubaozhaung(ev) {
				this.qurrsaen = ev
				this.qurren = true
			},
			//订单详情
			goods(ev) {
				uni.navigateTo({
					url: "./goods_data?order_id=" + ev.orderid,
				});
			},
			// 去报装
			shifouanzhuangdsadas() {
				this.baozhuangshow = false
				uni.setStorageSync("baozhaung", this.mnbv.shop)
				uni.navigateTo({
					url: "../pagesB/baozhaung?orderid=" + this.mnbv.orderid + "&tiao=1"
				})
			},
			// 切换协议内容
			dakaishouji(ev) {
				this.zhuangtai = ev
				if (ev == 1) {
					this.xieyi = this.shifouanzhaungxieyi
					this.buyanzheng = this.shifouanzhaungkaiguan
					this.baozhuangshow = false
				}
				if (ev == 2) {
					this.xieyi = this.yianzhaungxieyi
					this.buyanzheng = this.yianzhaungkaiguan
					this.qurren = false
				}
				this.shoujiyanzheng = true
			},
			// 报装是否安装
			baozhaung(ev) {
				this.mnbv = ev
				this.baozhuangshow = !this.baozhuangshow
			},
			change(ev) {
				this.current = ev
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

	// .search {
	// 	padding: 30rpx;
	// 	background-color: #FFFFFF;
	// }

	.home {
		height: 100%;

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
				justify-content: flex-start;
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
