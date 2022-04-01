<template>
	<view>
		<!-- 导航 -->
		<view class="navbar">
			<u-navbar :is-back="false" :title="title">
				<view class="sssss">
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
		<!-- 设计师 -->
		<view class="" style="margin-top: 20rpx;">
			<u-designDet :info="desInfo" :disabled="disabled" :current="current" @click="guanzhu" @dianzhan="dianzhan"
				@pinglun="pinglun" @xuanxinxin="xuanxinxin" />
		</view>
		<view class="logopage">
			<view class="page_top">
				<view class="top_item1" @click="lunbo(0)">
					<image src="../../static/icon_home_heisezuofan.png"
						style="width: 12rpx;height: 22rpx;margin-right: 82rpx;" mode="aspectFit"></image>上一条
				</view>
				<view class="top_item" @click="lunbo(1)">
					下一条<image src="../../static/icon_home_heiseyoufan.png"
						style="width: 12rpx;height: 22rpx;margin-left: 82rpx;" mode="aspectFit"></image>
				</view>
			</view>
			<view class="yuyue" @click="yuyue">
				预约设计
			</view>
		</view>
		<!-- 最新评论 -->
		<view class="newpl" v-if="desInfo.pl.length>0">
			<view class="" style="color: #000000;margin-bottom: 40rpx;">
				最新评论
			</view>
			<view class="pl_detail">
				<view class="pl_user">
					<view class="">
						<image :src="desInfo.pl[0].head" style="width: 70rpx;height: 70rpx;border-radius: 50%;"
							mode="aspectFit">
						</image>
					</view>
					<view class="" style="margin-left: 20rpx;">
						<view class="" style="font-size: 24rpx;color: #303133;">
							{{desInfo.pl[0].name||""}}
						</view>
						<view class="" style="font-size: 20rpx;color: #909399;">
							{{desInfo.pl[0].create_at||""}}
						</view>
					</view>
				</view>
				<view class="content">
					{{desInfo.pl[0].content||""}}
				</view>
				<view class="see_all" @click="jhsdkfjhsdlk">
					查看全部评论
					<image src="../../static/icon_shop_lamsemore.png"
						style="width: 10rpx;height: 18rpx;margin-left: 10rpx;" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		<u-pinglun :show="showComment" @zipingjia="pingjia" @fupingjia="pingjia" @chang="chang"
			:pinglun_list="pinglun_list" @guanbi="guanbi"></u-pinglun>
		<!-- 优享作品 -->
		<view class="works" v-if="tuijian.length!=0">
			<view class="title">
				<view class="name">
					代表作品
					<view class="bor_bot">

					</view>
				</view>
			</view>
			<view class="design_list">
				<view class="" v-for="(item,index) in tuijian" :key="index">
					<u-design-card :list="item" />
				</view>
			</view>
		</view>
		<!-- 编辑楼盘 -->
		<!-- <view class="edithouse" v-if="isDesign">
			<view class="" @click="editHouse">
				编辑楼盘
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				disabled: false,
				showComment: false,
				dsaa: {},
				itemsss: {},
				pinglun_list: [],
				tuijian: [],
				current: 0,
				imgtitle: this.$imgPath,
				designerId: "",
				desInfo: {},
				title: "详情",
				list: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				budakai: false,
			};
		},
		onLoad(e) {
			this.designerId = e.id
			this.desDetails()
			// this.$api.dessel({
			// 	order: 0
			// }).then(data => {
			// 	if (data.data.code == 1) {
			// 	}
			// })

			// this.$api.loupanden({
			// 	pages: 1,
			// 	limit: 200
			// }).then(data => {
			// 	if (data.data.code == 1) {
			// 		this.tuijian = [...data.data.data.status.data];
			// 	}
			// })
		},
		methods: {
			jhsdkfjhsdlk() {
				this.itemsss = this.desInfo
				this.showComment = true
			},
			guanbi() {
				this.showComment = false
			},
			pingjia(item) {
				this.dsaa = item
			},
			chang(text, pla) {
				if (pla == "发表评论请文明用语") {
					this.$api.indexpl({
						userid: uni.getStorageSync("user_info").id,
						content: text,
						image: "#",
						state: 0,
						id: this.itemsss.id
					}).then(data => {
						if (data.data.code == 1) {
							this.desDetails()
						} else {
							uni.showToast({
								title: "评论失败",
								icon: "none"
							})
						}
					})
				} else {
					this.$api.indexplhf({
						pl_id: this.dsaa.pl_id,
						pl_user_id: this.dsaa.pl_user_id,
						userid: uni.getStorageSync("user_info").id,
						content: text,
						image: "#",
						state: 0,
						id: this.itemsss.id
					}).then(data => {
						if (data.data.code == 1) {
							this.desDetails()
						} else {
							uni.showToast({
								title: "评论失败",
								icon: "none"
							})
						}
					})
				}
			},
			async pinglun(ev) {

				if (await this.$login()) {
					let aa = ev

					this.pinglun_list = ev.pl
					this.itemsss = aa;
					if (this.budakai) {
						this.showComment = true;
					}
					this.budakai = true
				}
			},
			// 选星星
			async xuanxinxin(ev) {

				if (await this.$login()) {
					this.$api.star({
						user_id: uni.getStorageSync("user_info").id,
						des_id: ev.id,
						star: ev.star
					}).then(data => {
						// uni.showToast({
						// 	title: data.data.msg,
						// 	duration: 1000,
						// 	icon: "none"
						// })
					})
				}
			},
			async dianzhan(ev) {

				// alls.zans !=null && alls.zans != ''
				if (await this.$login()) {
					let aa = ""
					if (ev.zans != null && ev.zans != '') {
						ev.zans = null
						ev.zan--
						aa = 1
					} else {
						ev.zans = {
							aa: "",
							bb: ""
						}
						ev.zan++
						aa = 0
					}
					this.$api.zan({
						type: aa,
						user_id: uni.getStorageSync("user_info").id,
						video_id: ev.id,
						state: 1
					}).then(data => {
						if (data.data.code == 1) {
							this.budakai = false
							// this.desDetails()
						}
					})
				}
			},
			async yuyue() {
				if (await this.$login()) {
					uni.navigateTo({
						url: "../Home/booking/AppointmentDesign"
					})
				}
			},
			lunbo(ev) {
				if (this.desInfo.work != '') {
					let aa = this.desInfo.work.split(",")
					aa = aa.length - 1
					if (ev == 0) {
						this.current = this.current - 1
						if (this.current < 0) {
							this.current = aa
						}
					} else {
						this.current = this.current + 1
						if (this.current > aa) {
							this.current = 0
						}
					}
				}

			},
			//关注
			async guanzhu(ev) {

				if (await this.$login()) {
					this.$api.desfollow({
						user_id: uni.getStorageSync("user_info").id,
						tes_id: ev.id
					}).then(data => {
						uni.showToast({
							title: data.data.msg,
							duration: 1000,
							icon: "none"
						})
						if (data.data.code == 1) {
							this.budakai = false
							// this.desDetails()
							if (this.desInfo.follows != 0) {
								this.desInfo.follows = 0
							} else {
								this.desInfo.follows = 1
							}
						}
					})
				}
			},
			// 设计师详情
			desDetails() {
				this.$api.desxq({
					id: this.designerId,
					user_id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						this.desInfo = {}
						this.desInfo = data.data.data.status
						// this.title = "设计师-" + this.desInfo.username
						// if (this.desInfo.userstar != null && this.desInfo.userstar != "") {
						// 	this.disabled = true;
						// }
						data.data.data.status.pl.forEach(item => {
							item["checked"] = false
						})
						this.pinglun(data.data.data.status)
						this.$api.des({
							user_id: this.desInfo.user_id
						}).then(data => {
							if (data.data.code == 1) {
								this.tuijian = [...data.data.data.status.zp];
							} else {
								this.tuijian = [];
							}
						})
					}
				})
			},
			editHouse() {
				uni.navigateTo({
					url: "../pagesD/uploadCase"
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
	// 导航
	.navbar {
		.sssss {
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

	.logopage {
		padding: 60rpx 30rpx 40rpx;
		box-sizing: border-box;
		border-top: 2rpx solid #f6f6f6;
		background-color: #FFFFFF;

		.page_top {
			width: 690rpx;
			height: 70rpx;
			background: #F6F6F6;
			display: flex;
		}

		.top_item {
			width: 50%;
			display: flex;
			align-items: center;
			font-size: 26rpx;
			justify-content: center;
			border-left: 2rpx solid #DEDEDE;
			box-sizing: border-box;
		}

		.top_item1 {
			width: 50%;
			display: flex;
			align-items: center;
			font-size: 26rpx;
			justify-content: center;
			border-right: 2rpx solid #DEDEDE;
			box-sizing: border-box;
		}

		.yuyue {
			width: 500rpx;
			height: 70rpx;
			background: #007399;
			border-radius: 20rpx;
			font-size: 24rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 70rpx;
			margin: auto;
			margin-top: 60rpx;
		}
	}

	// 最新评论
	.newpl {
		background-color: #FFFFFF;
		margin-top: 20rpx;
		padding: 40rpx 30rpx;
		box-sizing: border-box;

		.pl_detail {
			.pl_user {
				display: flex;
				align-items: center;
			}
		}

		.content {
			margin-left: 90rpx;
			margin-top: 20rpx;
			font-size: 28rpx;
			color: #333;
			margin-bottom: 50rpx;
		}

		.see_all {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 22rpx;
			color: #007399;
		}
	}

	// 优享作品
	.works {
		padding: 0 30rpx;
		margin-top: 30rpx;
		margin-bottom: 60rpx;

		.title {
			padding: 50rpx 30rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.name {
			font-size: 30rpx;
			color: #000000;
		}

		.bor_bot {
			width: 100%;
			height: 10rpx;
			background: #7AB8C8;
			margin-top: -10rpx;
		}

		.question {
			width: 30rpx;
			height: 30rpx;
			color: #F5625D;
			font-size: 24rpx;
			border: 2rpx solid #F5625D;
			box-sizing: border-box;
			text-align: center;
			line-height: 30rpx;
			border-radius: 50%;
			margin-left: 10rpx;
			margin-top: 10rpx;
		}

		.design_list {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			justify-content: space-between;
		}
	}

	// 编辑楼盘
	.edithouse {
		width: 750rpx;
		height: 110rpx;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 0;

		view {
			width: 600rpx;
			height: 70rpx;
			background: #007399;
			border-radius: 35rpx;
			font-size: 26rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 70rpx;
		}
	}
</style>
