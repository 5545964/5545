<template>
	<view style="background-color: #ffffff;">
		<view class="navbarssss" v-if="!navber">
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
			<view class="top" :style="'background-image: url('+backsss+')'">
				<view style="text-align:center;margin-top:88rpx;">
					<view class="text">
						{{user_info.score||0}}
					</view>
					<view class="fen">
						可用积分
					</view>
					<view class="fen" style="margin-top: 30rpx;">
						总积分：{{user_info.allscore||0}}
					</view>
				</view>
			</view>
			<view class="yuan">
				<view class="" @click="go(0)">
					<view class="cet">
						<image class="img" src="../../static/shopji.png" />
					</view>
					<view class="mmlm">
						积分商城
					</view>
				</view>
				<view class="xian" />
				<view class="" @click="go(1)">
					<view class="cet">
						<image class="img" src="../../static/jilu.png" />
					</view>
					<view class="mmlm">
						兑换记录
					</view>
				</view>
			</view>
			<view class="mingxi">
				<view class="kkjk">
					积分明细
				</view>
				<view class="cessst">
					<view :class="count==0 ? 'jjhj':'jjhjs'" @click="gai(0)">
						全部
						<view :class="count==0 ? 'zxcv':'zxcvs'" />
					</view>
					<view :class="count==1 ? 'jjhj':'jjhjs'" @click="gai(1)">
						收入
						<view :class="count==1 ? 'zxcv':'zxcvs'" />
					</view>
					<view :class="count==2 ? 'jjhj':'jjhjs'" @click="gai(2)">
						支出
						<view :class="count==2 ? 'zxcv':'zxcvs'" />
					</view>
				</view>
			</view>
			<view style="margin: 0 30rpx;">
				<view v-for="(item,index) in list" :key="index">
					<view class="xhi">
						<view class="">
							<view class="goumai">
								{{item.name||""}}
							</view>
							<view class="time">
								{{$u.timeFormat(item.createtime, 'yyyy-mm-dd')}}
							</view>
						</view>
						<view class="qian">
							<text v-if="item.state==0">+</text><text v-else>-</text> <text
								style="font-size: 36rpx;">{{item.price||""}}</text>
						</view>
					</view>
					<view class="xianxian" />
				</view>
			</view>
		</view>
		<view class="navbar" v-if="navber">
			<u-navbar :is-back="false" title-color="#FFFFFF" :title="title" :background="background">
				<view class="navbar_top">
					<view class="dsds cet" @click="back(0)">
						<image class="fanhui" src="@/static/icon_navigation_fanhuibai.png" mode="aspectFit"></image>
					</view>
					<view class="hang"></view>
					<view class="dsds cet" @click="back(1)">
						<image class="souye" src="@/static/icon_navigation_housebai.png" mode="aspectFit"></image>
					</view>
				</view>
			</u-navbar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				backsss: this.$imgPath + "/uploads/20220221/7999ee50b489c9084c7861cc5192a74f.jpg",
				title: "我的积分",
				count: 0,
				list: [],
				user_info: uni.getStorageSync("user_info"),
				beilist: [],
				pages: 1,
				navber: true,
				uniup: uni.upx2px(530)
			};
		},
		onLoad(ev) {
			this.all()
		},
		onReachBottom() {
			this.pages++
			this.all()
		},
		onPageScroll(ev) {
			if (ev.scrollTop >= this.uniup) {
				this.navber = false
			} else {
				this.navber = true
			}
		},
		methods: {
			all() {
				this.$api.sorcemx({
					page: this.pages,
					user_id: this.user_info.id
				}).then(data => {
					if (data.data.code == 1) {
						this.list = [...this.list, ...data.data.data.status.data]
						this.beilist = [...this.beilist, ...data.data.data.status.data]
					}
				})
			},
			go(ev) {
				if (ev == 0) {
					uni.navigateTo({
						url: "./jifenshangcheng"
					})
				} else {
					uni.navigateTo({
						url: "./dindan?jifen=1&title=积分商城"
					})
				}

			},
			gai(ev) {
				this.count = ev
				let aa = this.beilist
				if (ev == 0) {
					this.list = aa
				}
				if (ev == 1) {
					let bb = []
					aa.forEach(item => {
						if (item.state == 0) {
							bb.push(item)
						}
					})
					this.list = [...bb]
				}
				if (ev == 2) {
					let bb = []
					aa.forEach(item => {
						if (item.state == 1) {
							bb.push(item)
						}
					})
					this.list = [...bb]
				}
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
	.qian {
		font-size: 26rpx;
		font-weight: 400;
		color: #E82525;
	}

	.time {
		margin-top: 10rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: #999999;
	}

	.goumai {
		font-size: 32rpx;
		font-weight: 400;
		color: #333333;
	}

	.xianxian {
		height: 2rpx;
		background: #DEDEDE;
	}

	.xhi {
		margin: 40rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.home {
		.mingxi {
			display: flex;
			justify-content: space-between;
			margin: 10rpx 30rpx;

			.zxcv {
				margin-top: 10rpx;
				width: 100%;
				height: 4rpx;
				background: #007399;

			}

			.jjhj {
				font-size: 24rpx;
				font-weight: 400;
				color: #007399;
			}

			.jjhjs {
				font-size: 24rpx;
				font-weight: 400;
				color: #000000;
			}

			.zxcvs {
				margin-top: 10rpx;
				width: 100%;
				height: 4rpx;
				background: #ffffff;
			}

			.cessst {
				width: 220rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
			}

			.kkjk {
				font-size: 36rpx;
				font-weight: 400;
				color: #333333;
				line-height: 36rpx;
			}
		}

		.yuan {
			padding: 30rpx;
			margin: -100rpx 30rpx 30rpx 30rpx;
			background: #FFFFFF;
			box-shadow: 0 0 10rpx 0 rgba(0, 0, 0, 0.2);
			border-radius: 20rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.mmlm {
				margin-top: 25rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #333333;
			}

			.img {
				width: 46rpx;
				height: 52rpx;
			}

			.xian {
				width: 2rpx;
				height: 72rpx;
				background: #DEDEDE;
			}

		}

		.top {
			height: 530rpx;
			background-size: cover;
			background-repeat: no-repeat;
			padding: 30rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #FFFFFF;

			.text {
				font-size: 64rpx;
			}

			.fen {
				font-size: 24rpx;
			}
		}
	}

	.navbar {
		height: 1rpx;
		overflow: hidden;

		.navbar_top {
			border: 1px solid #FFFFFF;
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
				background-color: #FFFFFF;
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

	.navbarssss {
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
