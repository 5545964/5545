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
						{{$u.timeFormat(datas, 'yyyy-mm')}}
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
				<view class="daddasda">
					<view class="kklklk">
						<view>共{{monList.length}}单</view>
						<view>总计：{{money}}元</view>
					</view>
					<view class="kklklk vvbv" @click="peiun(item)">
						申请提现
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
		<u-timeSelects ref="myPicker" :datas="datas" @submit="handleSubmit" :start-year="2000" :end-year="2500" />
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
				time: {},
				money: 0,
				mobanid: [
					'qFe_Sxyot4g5R2qJhpo5ECIp6TvRjYFY3g-WIVAgjXU',
				],
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
			let aa = this.$u.timeFormat(this.datas, 'yyyy-mm')
			let firstDay = new Date(aa.substr(0, aa.length - 3), aa.substr(5) - 1, 1);
			let lastDay = new Date(aa.substr(0, aa.length - 3), aa.substr(5), 0);
			this.time = {
				start: Date.parse(firstDay) / 1000,
				end: Date.parse(lastDay) / 1000
			}
			this.getdata()
		},
		onShow() {
			this.money = 0
			this.$api.myuser({
				user_id: uni.getStorageSync("user_info").id || 0
			}).then(data => {
				if (data.data.code == 1) {
					uni.setStorageSync("user_info", data.data.data.myuser)
					uni.stopPullDownRefresh();
				}
			})
		},
		methods: {
			tixians(ev) {
				let aa = []
				this.monLists.forEach(item => {

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
				let aa = e.year + "-" + e.month
				this.datas = aa
				let firstDay = new Date(e.year, e.month - 1, 1);
				let lastDay = new Date(e.year, e.month, 0);
				this.time = {
					start: Date.parse(firstDay) / 1000,
					end: Date.parse(lastDay) / 1000
				}
				this.getdata()
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
					uni.showToast({
						title: data.data.msg,
						icon: "none"
					})
				})
			},
			asdfg(ev) {
				this.imgList.push(ev.data.status)
			},
			deleteimg(index) {
				this.imgList.splice(index, 1)
			},
			peiun() {
				let that = this
				uni.requestSubscribeMessage({
					provider: 'weixin',
					tmplIds: that.mobanid,
					complete: function(e) {
						that.peiunshi()
					}
				});
			},
			peiunshi() {
				// 智慧型查询是否签约
				this.$api.querysuccess({
					user_id: uni.getStorageSync("user_info").id
				}).then(data => {
					// 成功
					if (data.data.code == 200) {
						if (uni.getStorageSync("user_info").rw == 0) {
							this.rw()
						} else {
							this.show = true
						}
					}
					// 未签约
					if (data.data.code == 1) {
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
						return
					}
					if (uni.getStorageSync("user_info").freelance_id != 0) {
						return this.show = true;
					}
					//为实名认证
					if (data.data.code == 0) {
						uni.showToast({
							title: data.data.data.data,
							icon: "error",
							duration: 1000
						})
						uni.setStorageSync("delta", 1)
						setTimeout(() => {
							uni.navigateTo({
								url: "../pagesA/shengfen"
							})
						}, 1000)
						return
					}
				})
				// this.show = true
			},
			rw() {
				this.$api.gettask({
					user_id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code != 1) {
						this.rw()
					} else {
						this.show = true
					}
				})
			},
			getdata() {
				this.$api.pxxr({
					user_id: uni.getStorageSync("user_info").id,
					start: this.time.start,
					end: this.time.end
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							this.money = this.money + Number(item.price)
						})
						this.money
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
		margin-top: 40rpx;
		padding: 20rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
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
