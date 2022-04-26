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
		<view class="home">
			<view class="top">
				<view class="text">
					<view class="texts">
						总人数
					</view>
					<view class="mony">
						<text v-if="man_num != ''">{{man_num||""}}</text><text v-else>0</text>
					</view>
				</view>
				<view class="text">
					<view class="texts">
						总返利(元)
					</view>
					<view class="mony">
						￥<text v-if="mony != ''">{{mony||""}}</text><text v-else>0</text>
					</view>
				</view>
			</view>
			<view class="">
				<!-- <u-tabs :list="list" :weizhi="false" :is-scroll="false" :current="current" @change="change"></u-tabs>
				<swiper :duration="500" :style="'height:'+heigth+'px;'" :circular="true" :current="current"
					:disable-touch="true" @change="lun_change">
					<swiper-item v-for="(item,index) in list" :key="index">
						<scroll-view scroll-y="true" :style="'height:'+heigth+'px;'">
							<view class="swiper-item" v-for="(items,indexs) in userList" :key="indexs">
								<view class="cet">
									<image class="img" :src="items.users.avatar" mode="aspectFit"></image>
									<view class="">
										<view class="name">
											<text
												v-if="items.users.username != ''">{{items.users.username||""}}</text><text
												v-else>未知昵称</text>
										</view>
										<view class="text">
											<text v-if="items.users.mobile != ''">{{items.users.mobile||""}}</text><text
												v-else>无</text>
										</view>
									</view>
								</view>
								<view v-if="current == 1" class="mony">
									人数：<text v-if="items.son != ''">{{items.son||""}}</text><text v-else>0</text>
								</view>
								<view class="mony">
									￥<text v-if="items.moneys != ''">{{items.moneys||""}}</text><text v-else>0</text>
								</view>
							</view>
						</scroll-view>
					</swiper-item>
				</swiper> -->
				<view class="swiper-item" v-for="(items,indexs) in userList" :key="indexs">
					<view class="cet">
						<image class="img" :src="items.users.avatar" mode="aspectFit"></image>
						<view class="">
							<view class="name">
								<text v-if="items.users.username != ''">{{items.users.username||""}}</text><text
									v-else>未知昵称</text>
							</view>
							<view class="text">
								<text v-if="items.users.mobile != ''">{{items.users.mobile||""}}</text><text
									v-else>无</text>
							</view>
						</view>
					</view>
					<view v-if="current == 1" class="mony">
						人数：<text v-if="items.son != ''">{{items.son||""}}</text><text v-else>0</text>
					</view>
					<view class="mony">
						￥<text v-if="items.moneys != ''">{{items.moneys||""}}</text><text v-else>0</text>
					</view>
				</view>
			</view>
		</view>
		<u-kehu url="../Home/booking/AppointmentDesign"></u-kehu>
		<u-heigth />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				heigth: 0,
				title: "",
				man_num: 0,
				mony: 0,
				userList: [],
				list: [{
						name: "一级"
					},
					{
						name: "二级"
					},
				],
				current: 0,
				shejishi: 0
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
			if (ev.shejishi) {
				this.shejishi = ev.shejishi
			}
		},
		onShow() {
			this.getdata(1)
			this.heigth = uni.getSystemInfoSync().windowHeight
		},
		methods: {
			// 我的团队 
			getdata(index) {
				this.userList = []
				this.mony = []
				if (this.shejishi == 0) {
					this.$api.myteam({
						user_id:uni.getStorageSync("user_info").id,
						// user_id: 5,
						state: index
					}).then(data => {
						if (data.data.code == 1) {
							data.data.data.status.forEach(item => {
								item.users.avatar = this.$imgs(item.users.avatar)
							})
							this.userList = data.data.data.status
							this.man_num = data.data.data.count
							data.data.data.status.forEach(item => {
								this.mony = Number(this.mony) + Number(item.moneys)
							})
							// this.mony = data.data.data.sum
						}
					})
				} else {
					this.$api.desmyteam({
						user_id:uni.getStorageSync("user_info").id,
						// user_id: 5,
						state: index
					}).then(data => {
						if (data.data.code == 1) {
							data.data.data.status.forEach(item => {
								item.users.avatar = this.$imgs(item.users.avatar)
							})
							this.userList = data.data.data.status
							this.man_num = data.data.data.count
							this.mony = data.data.data.sum
						}
					})
				}


			},
			lun_change(index) {
				this.current = index.detail.current;
				this.getdata(index.detail.current + 1)
			},
			change(index) {
				this.current = index;
				this.getdata(index + 1)
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
		.swiper-item:nth-child(odd) {
			background-color: #EBEEF5;
		}

		.swiper-item:nth-child(even) {
			background-color: #FFFFFF;
		}

		.swiper-item {
			padding: 40rpx 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.mony {
				font-size: 26rpx;
				font-weight: 400;
				color: #333333;
			}

			.text {
				font-size: 20rpx;
				font-weight: 400;
				color: #999999;
			}

			.name {
				margin-bottom: 10rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}

			.img {
				margin-right: 20rpx;
				border-radius: 50%;
				width: 70rpx;
				height: 70rpx;
			}


		}

		.mony {
			font-size: 48rpx;
			font-weight: 400;
			color: #FFFFFF;
		}

		.texts {
			margin: 20rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #FFFFFF;
		}

		.text {
			text-align: center;
		}

		.top {
			padding: 50rpx;
			background: #007399;
			display: flex;
			align-items: center;
			justify-content: space-around;
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
