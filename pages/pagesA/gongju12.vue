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
		<view class="home" v-if="fansList.length != 0">
			<view class="dssadada" v-for="(item,index) in fansList" :key="index">
				<view class="dsadsaxzczd" @click="go(item)">
					<view class="number">
						{{item.orderid||"无订单号"}}
					</view>
					<view class="cet">
						<view class="text">
							查看美居设计进度
						</view>
						<image class="img" mode="aspectFit" src="../../static/icon_shop_hsmore.png"></image>
					</view>
				</view>
				<view class="dsfedfed">
					<cell @startmessage='startmessage' contactText="点击加入美居设计群" @completemessage="completemessage"
						:url='item.ewm'>点击加入美居设计群</cell>
				</view>
			</view>
		</view>
		<u-empty v-else></u-empty>
		<u-heigth />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cellurl:"",
				title: "",
				fansList: [],
			};
		},
		onLoad(ev) {
			this.title = ev.title
		},
		onShow() {
			this.gethomepage()
		},
		methods: {
			startmessage(ev) {
			},
			completemessage(ev) {
			},
			kanzhaopian(ev) {
				// uni.navigateTo({
				// 	url: "../Home/URL/URL?url=" + ev
				// })
			},
			bindIcon(icon) {
				return this.$imgPath + icon;
			},
			gethomepage() {
				this.$api.mymake({
					user_id: uni.getStorageSync("user_info").id,
					limit: 1000
				}).then(data => {
					if (data.data.code == 1) {
						let aa = 0
						data.data.data.status.data.forEach(item => {
							item["tjtime"] = this.$u.timeFormat(item.createtime, 'yyyy-mm-dd')
							if (item.state == "1") {
								aa = aa + 1
							}
						})
						this.fansList = []
						this.fansList = data.data.data.status.data;
						this.fansList.reverse()
						uni.setStorageSync("yuyuejilunum", aa)
					}
				})
			},
			go(ev) {
				uni.setStorageSync("yuyue_info", ev)
				uni.navigateTo({
					url: "../Home/booking/AppointmentDesign?yuyue=1"
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
		padding: 30rpx;

		.dsfedfed {
			border-top: 1px solid #DEDEDE;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.text {
				padding-top: 30rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #333333;
			}

			.img {
				padding-top: 30rpx;
				width: 182rpx;
				height: 182rpx;
			}
		}

		.dssadada {
			margin-bottom: 30rpx;
			padding: 30rpx;
			background-color: #FFFFFF;
			border-radius: 10rpx;
		}

		.dsadsaxzczd {
			margin-bottom: 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

		}

		.number {
			font-size: 24rpx;
			font-weight: 400;
			color: #333333;
		}

		.text {
			font-size: 24rpx;
			font-weight: 400;
			color: #666666;
		}

		.img {
			margin-left: 10rpx;
			width: 10rpx;
			height: 16rpx;
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
s
