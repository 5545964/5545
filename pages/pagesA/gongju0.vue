<template>
	<view class="wh">
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
		<view class="home wh">
			<view class="address wh">
				<template v-if="list.length != 0">
					<view class="hahahah" v-for="(item,index) in list" :key="index" @click="go(index)">
						<view class="ing">
							<view class="djkashk">
								<view class="name">
									{{item.username}}
								</view>
								<view class="phone">
									{{item.phone}}
								</view>
							</view>
							<view class="add">
								{{item.title}}{{item.address}}
							</view>
							<view class="default" v-if="item.auto==1">
								默认地址
							</view>
						</view>
						<image class="img" src="../../static/icon_shop_hsmore.png" mode="aspectFit"></image>
					</view>
				</template>
				<u-empty v-else text="暂无内容" mode="list"></u-empty>
			</view>
		</view>
		<view class="bottom" @click="addss">
			<view class="bottoms wh">
				新增地址
			</view>
		</view>
		<u-heigth />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo: {},
				title: "收货地址",
				list: [],
				xuanzhe: 0,
			};
		},
		onShow() {
			this.$api.addressshow({
				id: uni.getStorageSync("user_info").id
			}).then(data => {
				if (data.data.code == 1) {
					this.list = data.data.data.status;
					this.list.forEach(item => {
						if (item.auto == 1) {
							uni.setStorageSync("address", item)
						}
					})
				} else {
					this.list = []
					uni.removeStorageSync("address")
				}
			})
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title
			}
			if (ev.xuanzhe) {
				this.xuanzhe = ev.xuanzhe;

			}
		},
		methods: {
			addss() {
				uni.navigateTo({
					url: "../pagesB/address?title=添加地址"
				})
			},
			go(ev) {
				if (this.xuanzhe != 0) {
					uni.$emit("address", this.list[ev])
					return uni.navigateBack(-1)
				}
				let data = JSON.stringify(this.list[ev]);
				uni.navigateTo({
					url: "../pagesB/address?title=修改地址&data=" + data
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
	.bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 30rpx;
		background-color: #FFFFFF;

		.bottoms {
			background: #007399;
			border-radius: 10rpx;
			font-size: 30rpx;
			font-weight: 400;
			color: #FFFFFF;
			text-align: center;
			padding: 25rpx 0;
		}
	}

	.home {
		padding: 0 30rpx;

		.address {
			.default {
				margin-top: 20rpx;
				font-size: 20rpx;
				font-weight: 400;
				color: #999999;
				width: 120rpx;
				height: 40rpx;
				line-height: 40rpx;
				text-align: center;
				background: #E9EEED;
				border-radius: 6rpx;
			}

			.add {
				font-size: 24rpx;
				font-weight: 400;
				color: #666666;
			}

			.phone {
				margin-left: 20rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}

			.name {
				font-size: 26rpx;
				font-weight: 400;
				color: #333333;
			}

			.djkashk {
				margin-bottom: 30rpx;
				display: flex;
				align-items: center;
			}

			.hahahah {
				margin-bottom: 20rpx;
				padding: 40rpx;
				background-color: #FFFFFF;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-radius: 20rpx;
			}

			.ing {
				width: 85%;
			}

			.img {
				width: 15%;
				width: 16rpx;
				height: 26rpx;
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
