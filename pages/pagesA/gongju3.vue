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
					选择时间
				</view>
				<view class="dasdsdadsxcxzas" @click="openDatetimePicker">
					<view class="dsdxcxvxs">
						{{$u.timeFormat(datas, 'yyyy-mm-dd')}}
					</view>
					<u-icon name="arrow-down"></u-icon>
				</view>
			</view>
			<u-cart :list="list" @kan="dsadsa" @click="del"></u-cart>
		</view>
		<u-heigth />
		<u-timeSelect ref="myPicker" :datas="datas" @submit="handleSubmit" :start-year="2000" :end-year="2500">
		</u-timeSelect>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				datas: Date.parse(new Date()),
				title: "我的足迹",
				list: []
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title
			}
			this.getMyfoot()
		},
		methods: {
			dsadsa(ev) {
				uni.navigateTo({
					url: "../pagesC/Shopping?shopid=" + ev.id
				})
			},
			getMyfoot() {
				this.$api.myfootxr({
					user_id: uni.getStorageSync('user_info').id,
					time: this.datas / 1000,
					page: 1,
					limit: 10000
				}).then(data => {
					if (data.data.code == 1) {
						this.list = [];
						data.data.data.status.forEach((item, index) => {
							this.list.push({
								img: this.$imgPath + item.content.simage,
								title: item.content.name,
								num: item.content.xl,
								id: item.shop_id
							})
						});
					}
				})
			},
			del(ev, index) {
				let aa = this.list;
				this.$api.delfootxr({
					id: ev.id
				}).then(data => {
					//Todo 判断是否成功
					this.getMyfoot()
				})



			},
			// 打开picker
			openDatetimePicker() {
				this.$refs.myPicker.show();
			},
			handleSubmit(e) {
				// {year: "2019", month: "07", day: "17", hour: "15", minute: "21"}
				this.datas = `${e.year}-${e.month}-${e.day}`;

				this.getMyfoot()
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
	.ccxv {
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





	.home {
		padding: 30rpx;
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
