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
			<view class="back">
				<view class="">
					<view class="dads">
						<view class="mony xiaosize">
							￥
						</view>
						<view class="mony dasize">
							{{canprice}}
						</view>
						<view class="mony xiaosize">
							可提现(元)
						</view>
					</view>
					<view class="yaoqingma">
						<!-- 邀请码：321654987 -->
					</view>
					<view class="cet" style="margin-top: 30rpx;" @click="tanchuchen">
						<view class="no">
							￥0.00不可提现(元)
						</view>
						<image class="imgs" src="../../static/wenhao.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="tixian" @click="tixian">
					提佣申请
				</view>
			</view>
			<view style="background-color: #FFFFFF;height: 180rpx;"></view>
			<view class="center">
				<view class="">
					<view class="text">
						总佣金(元)
					</view>
					<view class="number">
						￥{{allprice}}
					</view>
				</view>
				<view class="">
					<view class="text">
						可提佣金(元)
					</view>
					<view class="number">
						￥{{canprice}}
					</view>
				</view>
			</view>
			<view class="">
				<u-tabs :list="list" :weizhi="false" :is-scroll="false" :current="current" @change="change"></u-tabs>
			</view>
			<view class="hahahahaxczxc" v-show="current == 0">
				<view class="erji">
					<u-tabs :inactive-color="'#999999'" :bg-color="''" :bold="false" :showBar="false" :list="lists"
						:weizhi="false" :is-scroll="false" :current="currents" @change="changes"></u-tabs>
				</view>
				<view class="ccxv">
					<view class="text">
						选择时间
					</view>
					<view class="dasdsdadsxcxzas" @click="openDatetimePicker">
						<view class="dsdxcxvxs">
							{{datas}}
						</view>
						<u-icon name="arrow-down"></u-icon>
					</view>
				</view>
				<view class="jhfjkdhfk">
					<view class="win">
						订单编号
					</view>
					<view class="win">
						状态
					</view>
					<view class="win">
						成交金额
					</view>
					<view class="win">
						佣金收益
					</view>
					<view class="win">
						备注
					</view>
				</view>
				<view class="czcxczcxc" v-for="(item,index) in monList" :key="index">
					<view class="vdfdd" v-if="item.money==currents">
						<view class="win">
							{{item.order_id}}
						</view>
						<view class="win">
							{{item.state==1?'已完成':"未完成"}}
						</view>
						<view class="win">
							{{item.cjprice||0}}
						</view>
						<view class="win">
							{{item.price||0}}
						</view>
						<view class="win">
							{{item.type==0?'商品':'拉新'}}
						</view>
					</view>
				</view>
			</view>
			<view class="hahahahaxczxc" v-show="current == 1">
				<view class="ccxv" style="margin-top: 40rpx;">
					<view class="text">
						选择时间
					</view>
					<view class="dasdsdadsxcxzas" @click="openDatetimePicker">
						<view class="dsdxcxvxs">
							{{datas}}
						</view>
						<u-icon name="arrow-down"></u-icon>
					</view>
				</view>
				<view class="jhfjkdhfk">
					<view class="wins">
						提佣时间
					</view>
					<view class="win">
						提佣金额
					</view>
					<view class="win">
						提佣方式
					</view>
					<view class="win">
						提佣进度
					</view>
					<view class="win">
						关联订单
					</view>
				</view>
				<view class="czcxczcxc" v-for="(item,index) in 0" :key="index">
					<view class="vdfdd">
						<view class="wins">
							11月8日 16:43
						</view>
						<view class="win">
							666.66
						</view>
						<view class="win">
							微信(直接)
						</view>
						<view class="win">
							完成
						</view>
						<view class="win cet">
							<view class="">
								查看订单
							</view>
							<image style="width: 10rpx;height: 16rpx;margin-left: 10rpx;"
								src="../../static/icon_home_heiseyoufan.png" mode="aspectFit"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-timeSelect ref="myPicker" @submit="handleSubmit" :start-year="2000" :end-year="2500">
		</u-timeSelect>
		<u-popup border-radius="10" v-model="show" mode="center">
			<view class="tanchu">
				<view class="top">
					提示
				</view>
				<view class="center">
					未完成的订单不可体现佣金
				</view>
				<view class="text" @click="guanbi">
					确定
				</view>
			</view>
		</u-popup>
		<u-kehu url="../Home/booking/AppointmentDesign" :po_hei="100"></u-kehu>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isshejishiss:0,
				allprice:0,
				canprice:0,
				show: false,
				datas: new Date().toISOString().slice(0, 10),
				lists: [{
						name: "直接佣金"
					},
					{
						name: "间接佣金"
					}
				],
				current: 0,
				currents: 0,
				list: [{
						name: "收益明细"
					},
					{
						name: "提现明细"
					}
				],
				monList:[],
				title: "我的佣金",
			};
		},
		onLoad(ev) {

			if (ev.title) {
				this.title = ev.title;
			}
			if (ev.isshejishi) {
				this.isshejishiss = 1;
			}

		},
		onShow() {
			this.getdata()
		},
		methods: {
			getdata(){
				// 1是设计师
				this.$api.mysub({
					type:this.isshejishiss,
					user_id:uni.getStorageSync("user_info").id
				}).then(data=>{ 
					if(data.data.code==1){
						this.monList=data.data.data.status
						this.allprice=data.data.data.all.toFixed(2);
						this.canprice=data.data.data.can.toFixed(2);
						uni.setStorageSync("monList",this.monList)
					}
				})
			},
			guanbi() {
				this.show = false
			},
			tanchuchen() {
				this.show = !this.show;
			},
			tixian() {
				uni.navigateTo({
					url: "../pagesA/tixian"
				})
			},
			openDatetimePicker() {
				this.$refs.myPicker.show();
			},
			handleSubmit(e) {
				this.datas = `${e.year}-${e.month}-${e.day}`;
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
	.home {
		.hahahahaxczxc {
			.wins {
				text-align: center;
				width: 20%;
			}

			.win {
				text-align: center;
				width: 20%;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.czcxczcxc:nth-child(odd) {
				background-color: #EBEEF5;
			}

			.czcxczcxc:nth-child(even) {
				background-color: #FFFFFF;
			}

			.vdfdd {
				padding: 30rpx;
				display: flex;
				align-items: center;
				justify-content: space-around;
				font-size: 26rpx;
				font-weight: 400;
				color: #333333;
			}

			.jhfjkdhfk {
				padding: 30rpx;
				background: #007399;
				display: flex;
				align-items: center;
				justify-content: space-around;
				font-size: 26rpx;
				font-weight: 400;
				color: #FFFFFF;
			}

			.erji {
				padding: 20rpx 0;
			}

			.ccxv {
				padding: 0 30rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-bottom: 30rpx;

				.text {
					font-size: 30rpx;
					font-weight: 400;
					color: #333333;
				}

				.dsdxcxvxs {
					margin-right: 10rpx;
					font-size: 30rpx;
					font-weight: 400;
					color: #333333;
				}

				.dasdsdadsxcxzas {
					background: #FFFFFF;
					border: 1px solid #E8E8E8;
					border-radius: 100rpx;
					display: flex;
					width: fit-content;
					align-items: center;
					padding: 15rpx 25rpx;
				}
			}
		}

		.center {
			display: flex;
			justify-content: space-around;
			align-items: center;
			text-align: center;
			padding: 20rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 3rpx 7rpx 0rpx rgba(0, 0, 0, 0.1);
			border-radius: 20rpx;
			margin: -250rpx 30rpx 0 30rpx;

			.number {
				padding: 20rpx;
				font-size: 48rpx;
				font-weight: 400;
				color: #007399;
			}

			.text {
				padding: 20rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #007399;
			}
		}

		.back {
			padding: 30rpx;
			height: 360rpx;
			background: #007399;
			display: flex;
			justify-content: space-between;

			.no {
				font-size: 28rpx;
				font-weight: 400;
				text-decoration: underline;
				color: #FF9F59;
			}

			.yaoqingma {
				margin-top: 30rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #FFFFFF;
			}

			.dasize {
				font-size: 60rpx;
			}

			.xiaosize {
				font-size: 28rpx;
			}

			.mony {
				font-weight: 400;
				color: #FFFFFF;
			}

			.dads {
				align-items: baseline;
				display: flex;
			}

			.tixian {
				margin-top: 20rpx;
				width: 200rpx;
				height: 70rpx;
				line-height: 70rpx;
				text-align: center;
				background: #FFFFFF;
				border-radius: 35rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #007399;
			}

			.imgs {
				margin-left: 20rpx;
				width: 30rpx;
				height: 30rpx;
			}
		}

	}

	.tanchu {
		.top {
			width: 640rpx;
			height: 90rpx;
			line-height: 90rpx;
			text-align: center;
			background: #007399;
			font-size: 30rpx;
			font-weight: 400;
			color: #FEFEFE;
		}

		.center {
			padding: 50rpx;
			background: #F8F8F8;
			text-align: center;
			font-size: 26rpx;
			font-weight: 400;
			color: #333333;
		}

		.text {
			width: 640rpx;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			background: #FFFFFF;
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
