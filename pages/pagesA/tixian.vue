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
			<u-tabs :inactive-color="'#999999'" :bold="false" :showBar="false" :list="list" :weizhi="false"
				:is-scroll="false" :current="current" @change="change"></u-tabs>
			<u-tabs :inactive-color="'#999999'" :bold="false" :list="lists" :weizhi="false" :is-scroll="false"
				:current="currents" @change="changes"></u-tabs>
			<!-- 采购佣金 -->
			<view class="dawdad" v-if="current ==0">
				<view class="top" v-for="(item,index) in datas" :key="index">
					<view v-if="dispro==0">
						<view v-if="item.money==0&&item.type==current&&item.tixian == currents&&item.state==1">
							<view class="top-top">
								<view class="cet">
									<view :class="[item.checked ? 'active' : 'yuan']" @click="xuanzhe(index)"
										v-show="currents == 0">
									</view>
									<view class="cdscdf">
										{{item.createtime||""}}
									</view>
								</view>
								<view class="rigtt" @click="god(item)">
									<view class="text">
										查看订单详情
									</view>
									<image class="img" src="../../static/icon_shop_hsmore.png" mode="aspectFit"></image>
								</view>
							</view>
							<view class="top-bottom" @click="god(item)">
								<view class="text">
									订单编号：{{item.order_id||""}}
								</view>
							</view>
							<view class="top-bottom" @click="god(item)">
								<view class="text">
									订单价格：￥{{item.cjprice||""}}
								</view>
								<view class="text">
									可提佣金：￥{{item.price||""}}
								</view>
							</view>
						</view>
					</view>
					<view v-else>
						<view
							v-if="item.dipro.type==current&&item.dipro.tixian == currents&&item.dipro.state==1&&item.statess.state >= 3">
							<view class="top-top">
								<view class="cet">
									<view :class="[item.checked ? 'active' : 'yuan']" @click="xuanzhe(index)"
										v-show="currents == 0">
									</view>
									<view class="cdscdf">
										{{item.createtime||""}}
									</view>
								</view>
								<view class="rigtt" @click="god(item)">
									<view class="text">
										查看订单详情
									</view>
									<image class="img" src="../../static/icon_shop_hsmore.png" mode="aspectFit"></image>
								</view>
							</view>
							<view class="top-bottom" @click="god(item)">
								<view class="text">
									订单编号：{{item.dipro.order_id||""}}
								</view>
							</view>
							<view class="top-bottom" @click="god(item)">
								<view class="text">
									订单价格：￥{{item.dipro.cjprice||""}}
								</view>
								<view class="text">
									可提佣金：￥{{item.dipro.price||""}}
								</view>
							</view>
						</view>
					</view>

				</view>
				<!-- <view style="margin-top: 110rpx;" />
				<view class="bottomssss cet" v-show="currents == 0">
					<view class="dasdasdxzxcx">
						提交申请
					</view>
				</view> -->
			</view>





			<!-- 推荐佣金 -->
			<view class="dawdad" v-if="current ==1">
				<view class="top" v-for="(item,index) in datas" :key="index">
					<view v-if="dispro==0">
						<view v-if="item.money==0&&item.type==current&&item.tixian == currents&&item.state==1">
							<view class="top-top">
								<view class="cet">
									<view :class="[item.checked ? 'active' : 'yuan']" @click="xuanzhe(index)"
										v-show="currents == 0">
									</view>
									<view class="cdscdf">
										{{item.createtime||""}}
									</view>
								</view>
							</view>
							<view class="top-bottom">
								<view>
									<view class="text">
										获得佣金：￥{{item.cjprice||""}}
									</view>
								</view>
								<view>
									<view class="text">
										可提佣金：￥{{item.price||""}}
									</view>
								</view>
							</view>
						</view>
					</view>
					<view v-else>
						<view
							v-if="item.dipro.type==current&&item.dipro.tixian == currents&&item.dipro.state==1&&item.statess.state >= 3">
							<view class="top-top">
								<view class="cet">
									<view :class="[item.checked ? 'active' : 'yuan']" @click="xuanzhe(index)"
										v-show="currents == 0">
									</view>
									<view class="cdscdf">
										{{item.createtime||""}}
									</view>
								</view>
							</view>
							<view class="top-bottom">
								<view>
									<view class="text">
										获得佣金：￥{{item.dipro.cjprice||""}}
									</view>
								</view>
								<view>
									<view class="text">
										可提佣金：￥{{item.dipro.price||""}}
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view style="margin-top: 40rpx;" />
		<view class="bottomssss cet" v-show="currents == 0">
			<view style="width: 100%;" v-if="tiao" @click="shengfen">
				<view class="daddasda">
					<view class="kklklk">
						<view>共{{zjgeshi}}单</view>
						<view>总计：{{zjmoney.toFixed(2)}}元</view>
					</view>
					<view class="kklklk vvbv">
						申请提现
					</view>
				</view>
			</view>
			<view class="dasdasdxzxcx" @click="qianyue" v-else>
				去签约
			</view>
		</view>
		<u-heigth />
		<u-kehu url="../Home/booking/AppointmentDesign" :po_hei="100"></u-kehu>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				zjmoney: 0,
				zjgeshi: 0,
				dispro: 0,
				yinghangka: false,
				datas: [],
				current: 0,
				currents: 0,
				lists: [{
						name: "未提佣"
					},
					{
						name: "已提佣"
					}
				],
				list: [{
						name: "采购佣金"
					},
					{
						name: "推荐佣金"
					}
				],
				title: "提现申请",
				tiao: false,
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
			if (ev.isshejishiss) {
				this.dispro = ev.isshejishiss
			}

		},
		onShow() {
			let data = uni.getStorageSync("monList")

			if (data.length != 0) {
				data.forEach(item => {
					item["checked"] = false
					item.createtime = this.$u.timeFormat(item.createtime, 'yyyy-mm-dd hh:MM:ss')
				})
				this.datas = [...data]
			}
			this.$api.myuser({
				user_id: uni.getStorageSync("user_info").id || 0
			}).then(data => {
				if (data.data.code == 1) {
					uni.setStorageSync("user_info", data.data.data.myuser)
					uni.stopPullDownRefresh();
				}
			})
			// 去签约
			if (uni.getStorageSync("user_info").freelance_id != "0" && uni.getStorageSync("user_info").rw != 0) {
				return this.tiao = true
			}
			// 智慧型查询是否签约
			this.$api.querysuccess({
				user_id: uni.getStorageSync("user_info").id
			}).then(data => {
				// 成功
				if (data.data.code == 200) {
					if (uni.getStorageSync("user_info").rw == 0) {
						this.rw()
					} else {
						return this.tiao = true
					}
				}
				// 未签约
				if (data.data.code == 1) {
					this.tiao = false
					return
				}
				//为实名认证
				if (data.data.code == 0) {
					this.tiao = false
					uni.showToast({
						title: "您未实名认证！",
						icon: "error",
						duration: 1000
					})
					setTimeout(() => {
						uni.navigateTo({
							url: "./shengfen"
						})
					}, 1000)
					return
				}
			})
		},
		methods: {
			qianyue() {
				this.$api.contract({
					user_id: uni.getStorageSync("user_info").id
				}).then(data => {
					uni.setStorageSync("bbghb", data.data.data.data)
					if (data.data.code == 1) {
						uni.navigateTo({
							url: "../Home/URL/URL?url=0"
						})
					}
				})
			},
			rw() {
				this.$api.gettask({
					user_id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code != 1) {
						this.rw()
					}else{
						this.tiao = true
					}
				})
			},
			god(ev) {
				console.log(ev);
				if (this.dispro == 0) {
					uni.navigateTo({
						url: "./goods_data?order_id=" + ev.order_id + "&qitarenfasle=" + ev.user_id +
							"&id=" + ev.id
					})
				} else {
					uni.setStorageSync("des_order", ev)
					uni.navigateTo({
						url: "../pagesD/shejishixiangqing?isdes=1"
					})
				}

			},
			shengfen() {
				if (uni.getStorageSync("user_info").freelance_id != null && uni.getStorageSync("user_info").freelance_id !=
					'') {
					let aa = []
					if (this.dispro == 0) {
						this.datas.forEach(item => {
							if (item.checked) {
								aa.push(item.id)
							}
						})
					} else {
						this.datas.forEach(item => {
							if (item.checked) {
								aa.push(item.dipro.id)
							}
						})

					}

					if (aa.length >= 1) {
						this.$api.sqty({
							userid: uni.getStorageSync("user_info").id,
							orderid: aa
						}).then(data => {
							if (data.data.code == 1) {
								let list = {
									title: "提佣申请成功",
									text: "你的提佣申请已成功",
									botton: "我知道了",
									navbar: "提佣成功"
								}
								uni.navigateTo({
									url: "../pagesD/regSuccess?list=" + JSON.stringify(list)
								})
							} else {
								uni.showToast({
									title: data.data.msg,
									icon: "none"
								})
							}
						})
					}
				} else {
					uni.navigateTo({
						url: "./shengfen"
					})
				}

			},
			xuanzhe(ev) {
				this.datas[ev].checked = !this.datas[ev].checked;
				this.zjgeshi = 0
				this.zjmoney = 0
				this.datas.forEach(item => {
					if (item.checked) {
						this.zjgeshi = this.zjgeshi + 1
						this.zjmoney = this.zjmoney + Number(item.price)
					}
				})
			},
			// 推荐佣金
			changes(index) {
				this.currents = index;
			},
			// 采购佣金
			change(index) {
				this.currents = 0;
				this.current = index;
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
	.vvbv {
		background: #007399;
		color: #FFFFFF;
	}

	.kklklk {
		border-radius: 10rpx;
		font-size: 30rpx;
		font-weight: 400;
		margin: 0 30rpx;
		padding: 10rpx 20rpx;
	}

	.daddasda {
		background: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.bottomssss {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 110rpx;
		background: #FFFFFF;

		.dasdasdxzxcxs {
			height: 70rpx;
			line-height: 70rpx;
			text-align: center;
			background: #007399;
			border-radius: 35rpx;
			font-size: 26rpx;
			font-weight: 400;
			color: #FFFFFF;
		}

		.dasdasdxzxcx {
			width: 600rpx;
			height: 70rpx;
			line-height: 70rpx;
			text-align: center;
			background: #007399;
			border-radius: 35rpx;
			font-size: 26rpx;
			font-weight: 400;
			color: #FFFFFF;
		}
	}

	.home {
		.dawdad {
			padding: 30rpx;
		}

		.top {
			margin-bottom: 30rpx;
			border-radius: 20rpx;
			background-color: #FFFFFF;
		}

		.top-bottom {
			padding: 30rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.text {
				padding: 15rpx;
				font-size: 26rpx;
				font-weight: 400;
				color: #333333;
			}
		}

		.top-top {
			border-bottom: 1px solid #DEDEDE;
			padding: 30rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.cdscdf {
				font-size: 26rpx;
				font-weight: 400;
				color: #333333;
			}

			.active {
				background-image: url(../../static/icon_care_gou.png);
				background-color: #037496;
				background-size: 22rpx 16rpx;
				background-position: 5.6rpx 8rpx;
				background-repeat: no-repeat;
				margin-right: 30px;
				width: 34rpx;
				height: 34rpx;
				border: 2rpx solid #999999;
				border-radius: 50%;
			}

			.yuan {
				margin-right: 30px;
				width: 34rpx;
				height: 34rpx;
				background: #FFFFFF;
				border: 2rpx solid #999999;
				border-radius: 50%;
			}

			.rigtt {
				display: flex;
				align-items: center;

				.text {
					font-size: 22rpx;
					font-weight: 400;
					color: #999999;
				}

				.img {
					margin-left: 10rpx;
					width: 10rpx;
					height: 18rpx;
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
