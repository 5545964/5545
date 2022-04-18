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
			<view class="ccxv">
				<view class="text">
					<view class="" @click="tixians(1)">
						已提现
					</view>
					<view class="" @click="tixians(0)">
						未提现
					</view>
				</view>
				<view class="dasdsdadsxcxzas" @click="openDatetimePicker">
					<view class="dsdxcxvxs">
						{{$u.timeFormat(datas, 'yyyy-mm-dd')}}
					</view>
					<u-icon name="arrow-down"></u-icon>
				</view>
			</view>
			<view class="hahahahaxczxc">
				<view class="jhfjkdhfk">
					<view class="win">
						昵称
					</view>
					<view class="win">
						服务费
					</view>
					<view class="win">
						培训费用
					</view>
					<view class="win">
						时间
					</view>
				</view>
				<view class="czcxczcxc" v-for="(item,index) in monList" :key="index">
					<view class="vdfdd">
						<view class="win">
							{{item.user.username||""}}
						</view>
						<!-- <view class="win">
							<text v-if="item.px == 0">未申请</text>
							<text v-if="item.px == 1">已申请</text>
						</view> -->
						<view class="win">
							{{item.cjprice||0}}
						</view>
						<view class="win">
							{{item.price||0}}
						</view>
						<view class="win">
							{{$u.timeFormat(item.createtime, 'yyyy-mm-dd')}}
						</view>
					</view>
				</view>
				<view class="daddasda" @click="peiun(item)">
					申请提现
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
					<!-- 或视频 -->
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
		<u-timeSelect ref="myPicker" :datas="datas" @submit="handleSubmit" :start-year="2000" :end-year="2500" />
		<u-kehu url="../Home/booking/AppointmentDesign" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datas: Date.parse(new Date()),
				monList: [],
				monLists: [],
				title: "我的佣金",
				show: false,
				imgList: [],
				action: this.$shangchuan + '/api/byd_user/addpostspic',
				formData: {},
				time: {}
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
			this.time = this.times(new Date(this.datas))
			this.getdata()
		},
		methods: {
			tixians(ev) {
				let aa = []
				this.monLists.forEach(item => {
					console.log(item.tixian, ev);
					if (item.tixian == ev) {
						aa.push(item)
					}
				})
				this.monList = [...aa]
			},
			openDatetimePicker() {
				this.$refs.myPicker.show();
			},
			handleSubmit(e) {
				let aa = e.year + "-" + e.month + "-" + e.day
				this.datas = Date.parse(new Date(aa).toString())
				this.time = this.times(new Date(aa))
				this.getdata()
			},
			times(data) {
				data.setDate(1);
				data.setHours(0);
				data.setSeconds(0);
				data.setMinutes(0);
				var data1 = new Date();
				if (data.getMonth() == 11) {
					data1.setMonth(0)
				} else {
					data1.setMonth(data.getMonth() + 1)
				}
				data1.setDate(1);
				data1.setHours(0);
				data1.setSeconds(0);
				data1.setMinutes(0);
				let start = (data.getTime() / 1000).toFixed(0)
				let end = ((data1.getTime() / 1000) - 1).toFixed(0)
				return {
					start,
					end
				}
			},
			tongyi() {
				let aa = []
				this.monList.forEach(item => {
					aa.push(item.id)
				})
				this.$api.pxsq({
					user_id: uni.getStorageSync("user_info").id,
					id: aa,
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
			peiun() {
				this.show = true
			},
			getdata() {
				this.$api.pxxr({
					user_id: uni.getStorageSync("user_info").id,
					start: this.time.start,
					end: this.time.end
				}).then(data => {
					if (data.data.code == 1) {
						this.monList = [...data.data.data.status]
						this.monLists = [...data.data.data.status]
					} else {
						this.monList = []
						this.monLists = []
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
	.daddasda {
		margin: 80rpx 30rpx 30rpx 30rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background: #007399;
		border-radius: 10rpx;
		font-size: 30rpx;
		font-weight: 400;
		color: #FFFFFF;
	}

	.ccxv {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 15rpx 30rpx;
		background: #fff;

		.text {
			font-size: 30rpx;
			font-weight: 400;
			color: #333333;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 30%;
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

	.home {
		.hahahahaxczxc {
			.win {
				text-align: center;
				width: 25%;
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
