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
			<view class="hahahahaxczxc">
				<view class="jhfjkdhfk">
					<view class="win">
						订单编号
					</view>
					<view class="win">
						订单状态
					</view>
					<view class="win">
						成交金额
					</view>
					<view class="win">
						佣金收益
					</view>
					<view class="win">
						申请
					</view>
				</view>
				<view class="czcxczcxc" v-for="(item,index) in monList" :key="index" @click="peiun(item)">
					<view class="vdfdd">
						<view class="win">
							{{item.order_id||""}}
						</view>
						<view class="win">
							<block v-if="item.statess == null">
								<text v-if="item.states == 0">待付设计定金</text>
								<text v-if="item.states == 1">已付设计定金</text>
								<!-- <text v-if="item.states == 1 && item.jdtime !=''">设计中</text> -->
							</block>
							<block v-if="item.statess != null">
								<text v-if="item.statess.state >= 0 && item.statess.state <4">已下单付款</text>
								<text v-if="item.statess.state >= 4">订单完成</text>
							</block>
							<block v-if="item.tixian != 1">
								<text v-if="item.sq == 0">佣金未申请</text>
								<text v-if="item.sq == 1">佣金申请中</text>
							</block>
							<text v-if="item.tixian == 1">佣金申请成功</text>
						</view>
						<view class="win">
							{{item.cjprice||0}}
						</view>
						<view class="win">
							{{item.price||0}}
						</view>
						<view class="win">
							申请培训
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-popup border-radius="10" v-model="show" mode="center">
			<view class="tanchu">
				<view class="top">
					提示
				</view>
				<view class="center">
					请上传图片
				</view>
				<view class="">
					<u-upload :action="action" max-count="9" width="140" height="140" ref="uUpload"
						:form-data="formData" @on-success="asdfg" @on-remove="deleteimg" name="image"
						size-type="compressed" />
				</view>
				<view class="anniusss">
					<view class="hkhnij jjhgj" @click="show = false">
						取消
					</view>
					<view class="hkhnij jjhgj" @click="tongyi()">
						申请
					</view>
				</view>
			</view>
		</u-popup>
		<u-kehu url="../Home/booking/AppointmentDesign" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				monList: [],
				title: "我的佣金",
				show: false,
				imgList: [],
				action: this.$shangchuan + '/api/byd_user/addpostspic',
				formData: {},
				gdata: {},
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
			this.getdata()
		},
		methods: {
			tongyi() {
				this.$api.pxsq({
					user_id: uni.getStorageSync("user_info").id,
					id: this.gdata.id,
					image: this.imgList
				}).then(data => {
					if (data.data.code == 1) {
						this.show = false
					}
				})
			},
			asdfg(ev) {
				this.imgList.push(ev.data.status)
			},
			deleteimg(index) {
				this.imgList.splice(index, 1)
			},
			peiun(ev) {
				this.gdata = ev
				this.show = true
			},
			getdata() {
				this.$api.pxxr({
					user_id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						this.monList = [...data.data.data.status]
					} else {
						this.monList = []
					}
				})
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
		.hahahahaxczxc {
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
		}
	}

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

	.tanchu {
		min-width: 540rpx;

		.top {
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
