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
			<view class="dawdad" v-show="current ==0">
				<view class="top" v-for="(item,index) in datas" :key="index">
					<view class="" v-if="item.money==currents&&item.type==current">
						<view class="top-top">
							<view class="cet">
								<view :class="[item.checked ? 'active' : 'yuan']" @click="xuanzhe(index)"
									v-show="currents == 0">
								</view>
								<view class="cdscdf">
									2021-08-09 14:25:25
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
							<view class="">
								<view class="text">
									订单编号：{{item.order_id}}
								</view>
								<view class="text">
									订单名称：订单订单
								</view>
							</view>
							<view class="">
								<view class="text">
									订单价格：￥{{item.cjprice}}
								</view>
								<view class="text">
									可提佣金：￥{{item.price}}
								</view>
							</view>
						</view>
					</view>
				</view>
				<view style="margin-top: 110rpx;">

				</view>
				<view class="bottomssss cet" v-show="currents == 0">
					<view class="dasdasdxzxcx">
						提交申请
					</view>
				</view>
			</view>
			<view class="dawdad" v-show="current ==1">
				<view class="top" v-for="(item,index) in datas" :key="index">
					<view class="" v-if="item.money==currents&&item.type==current">
						<view class="top-top">
							<view class="cet">
								<view :class="[item.checked ? 'active' : 'yuan']" @click="xuanzhe(index)"
									v-show="currents == 0">
								</view>
								<view class="cdscdf">
									2021-08-09 14:25:25
								</view>
							</view>
						</view>
						<view class="top-bottom">
							<view class="">
								<view class="text">
									获得佣金：￥{{item.cjprice}}
								</view>
							</view>
							<view class="">
								<view class="text">
									可提佣金：￥{{item.price}}
								</view>
							</view>
						</view>
					</view>
				</view>
				<view style="margin-top: 110rpx;">

				</view>

			</view>
		</view>
		<view class="bottomssss cet" v-show="currents == 0">
			<view class="dasdasdxzxcx" @click="shengfen">
				提交申请
			</view>
		</view>
		<u-kehu url="../Home/booking/AppointmentDesign" :po_hei="100"></u-kehu>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
			let data = uni.getStorageSync("monList")
			if (data.length != 0) {
				data.forEach(item => {
					item["checked"] = false
				})
				this.datas = [...data]
			}

		},
		methods: {
			god(ev){
				uni.navigateTo({
					url:"./goods_data?order_id="+ev.order_id
				})
			},
			shengfen() {
				if (uni.getStorageSync("user_info").freelance_id != null && uni.getStorageSync("user_info").freelance_id != '') {
					let list = {
						title: "提佣成功",
						text: "你的提佣申请已成功",
						botton: "我知道了",
						navbar: "提佣成功"
					}
					uni.navigateTo({
						url: "../pagesD/regSuccess?list=" + JSON.stringify(list)
					})
				} else {
					uni.navigateTo({
						url: "./shengfen"
					})
				}

			},
			xuanzhe(ev) {
				this.datas[ev].checked = !this.datas[ev].checked;
			},
			changes(index) {
				this.currents = index;
			},
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
	.bottomssss {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 110rpx;
		background: #FFFFFF;

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
			border-top: 1px solid #DEDEDE;
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
