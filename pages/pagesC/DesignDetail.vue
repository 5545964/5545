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
		<!-- 轮播 -->
		<view class="lunbo">
			<swiper style="width: 100%;height: 450rpx;" @change="bainhua" :indicator-dots="true" :circular="true"
				:autoplay="autoplay" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in list" :key="index" @click="kaniamg(item)">
					<image style="width: 100%;height: 450rpx;" :src="item" mode="aspectFit"></image>
				</swiper-item>
				<swiper-item style="position: relative;">
					<view class="fdjksfhdsjk cet" @click="govr">
						<view class="fsds">
							点击VR
							100%所见所得
						</view>
					</view>
					<image style="width: 100%;height: 450rpx;" @click="kaniamg(vr_image)" :src="vr_image"
						mode="aspectFit">
					</image>
				</swiper-item>
				<swiper-item v-if="video">
					<video :page-gesture="true" id="video" @play="bofang" @pause="pause" @ended="ended" style="width: 100%;height: 450rpx;"
						:src="imgPath+video"></video>
				</swiper-item>
			</swiper>
		</view>
		<view class="shop_list">
			<view class="title">
				<view class="name">
					{{alls.name}}
					<view class="bor_bot">

					</view>
				</view>
				<view class="question">
				
				</view>
			</view>
			<view class="question">
				免责申明：版权所有权由设计师负责
			</view>
		</view>
		<!-- 设计师 -->
		<view class="" style="margin-top: 20rpx;">
			<u-designDet :info="des" :disabled="disabled" @click="guanzhu" @dianzhan="dianzhan" @qushejishi="topage"
				@pinglun="pinglun" @xuanxinxin="xuanxinxin" />
		</view>
		<u-pinglun :show="showComment" @zipingjia="pingjia" @fupingjia="pingjia" @chang="chang"
			:pinglun_list="pinglun_list" @guanbi="guanbi"></u-pinglun>
		<!-- 优享作品 -->
		<view class="works">
			<view class="title">
				<view class="name">
					优享作品
					<view class="bor_bot">

					</view>
				</view>
			</view>
			<view class="design_list">
				<view class="" v-for="(item,index) in tuijian" :key="index" v-if="index<=3">
					<u-design-card :list="item" />
				</view>
			</view>
		</view>
		<!-- 预约作品 -->
		<view class="design_foot">
			<view class="">
				已有3399人咨询
			</view>
			<view class="yuyue" @click="yuyue">
				预约设计
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgPath:this.$imgPath,
				disabled: false,
				autoplay: true,
				budakai: false,
				showComment: false,
				dsaa: {},
				itemsss: {},
				pinglun_list: [],
				//
				//
				//
				//
				tuijian: [],
				des: {},
				design_imglist: [],
				desInfo: {},
				designerId: "",
				title: "楼盘设计",
				current: 0,
				alls: {},
				deta: {},
				list: [],
				vr_image: "",
				video: ""
			};
		},
		onLoad(ev) {
			// this.deta = JSON.parse(ev.id);
			this.deta = uni.getStorageSync("fdklfjdsfjsfhks")
			this.allss()
			this.videoContext = uni.createVideoContext('video')
		},
		methods: {
			bainhua(ev) {
				if (ev.detail.current == this.list.length + 1) {
					this.videoContext.play()
				} else {
					this.videoContext.pause()
				}

			},
			ended(ev) {
				this.autoplay = true
			},
			pause(ev) {
				this.autoplay = true
			},
			bofang(ev) {
				this.autoplay = false
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
							this.allss()
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
							this.allss()
						} else {
							uni.showToast({
								title: "评论失败",
								icon: "none"
							})
						}
					})
				}
			},
			guanbi() {
				this.showComment = false
			},
			pingjia(item) {
				this.dsaa = item
			},
			kaniamg(ev) {
				let aa = [ev]
				uni.previewImage({
					urls: aa,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {},
						fail: function(err) {}
					}
				});
			},
			allss() {
				this.$api.loupanxq({
					id: this.deta.id,
					user_id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						let aa = data.data.data.status
						aa.image.split(",").forEach(item => {
							this.list.push(this.$imgPath + item)
						})
						this.alls = aa;
						this.vr_image = this.$imgPath + data.data.data.status.vr_image
						// this.video = this.$imgPath + data.data.data.status.video
						this.video = data.data.data.status.video
						this.$api.desxq({
							id: aa.des.id,
							user_id: uni.getStorageSync("user_info").id
						}).then(data => {
							if (data.data.code == 1) {
								this.des = {};
								this.des = data.data.data.status;
								if (this.desInfo.userstar != null && this.desInfo.userstar != "") {
									this.disabled = true;
								}
								data.data.data.status.pl.forEach(item => {
									// item.head = this.$imgPath + item.head
									item["checked"] = false
								})
								this.pinglun(data.data.data.status)
							}
						})
					} else {
						uni.showToast({
							title: "暂无数据",
							duration: 1000,
							icon: "error"
						})
						setTimeout(() => {
							uni.navigateBack(-1)
						}, 500)
					}
				}).catch(data => {
					uni.showToast({
						title: "暂无数据",
						duration: 1000,
						icon: "error"
					})
					setTimeout(() => {
						uni.navigateBack(-1)
					}, 500)
				})
				this.$api.loupanden({
					limit: 4
				}).then(data => {
					if (data.data.code == 1) {
						this.tuijian = [...data.data.data.status];
					}
				})
			},
			// 选星星
			xuanxinxin(ev) {

				this.$api.star({
					user_id: uni.getStorageSync("user_info").id,
					des_id: ev.id,
					star: ev.star
				}).then(data => {
					uni.showToast({
						title: data.data.msg,
						duration: 1000,
						icon: "none"
					})
				})
			},
			//点赞
			dianzhan(ev) {

				this.budakai = false;
				let aa = ""
				if (ev.zans != null && ev.zans != '') {
					aa = 1
				} else {
					aa = 0
				}
				this.$api.zan({
					type: aa,
					user_id: uni.getStorageSync("user_info").id,
					video_id: ev.id,
					state: 1
				}).then(data => {
					if (data.data.code == 1) {
						// this.allss()

						if (aa == 0) {
							this.des.zan = this.des.zan + 1
							this.des.zans = {
								name: 'kkkkkkk'
							}
						} else {
							this.des.zan = this.des.zan - 1
							this.des.zans = null
						}
					}
				})
			},
			//关注
			guanzhu(ev) {
				this.$api.desfollow({
					user_id: uni.getStorageSync("user_info").id,
					tes_id: ev.id
				}).then(data => {
					uni.showToast({
						title: data.data.msg,
						duration: 1000,
						icon: "none"
					})
					this.budakai = false;
					if (data.data.code == 1) {
						// this.allss()
						if (this.des.follows != 0) {
							this.des.follows = 0
						} else {
							this.des.follows = 1
						}
					}
				})
			},
			govr() {
				// pages/Home/URL/URL
				uni.navigateTo({
					url: "../Home/URL/URL?url=" + this.alls.vr_rul
				})
			},
			yuyue() {
				uni.navigateTo({
					url: "../Home/booking/AppointmentDesign"
				})
			},
			pinglun(ev) {
				let aa = ev

				this.pinglun_list = ev.pl;
				this.itemsss = aa;
				if (this.budakai) {
					this.showComment = true;
				}
				this.budakai = true
			},
			topage() {
				uni.navigateTo({
					url: "./ClubStar?id=" + this.des.id
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
	.fdjksfhdsjk {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -70rpx;
		margin-left: -100rpx;
		width: 200rpx;
		height: 140rpx;
		background-size: cover;
		background-image: url(../../static/VR.png);

		.fsds {
			width: 160rpx;
			height: 52rpx;
			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: #FFFFFF;
			margin-top: 50rpx;
			text-align: center;
		}
	}

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

	// 轮播
	.lunbo {
		width: 100%;
	}

	.shop_list {
		box-sizing: border-box;
		background-color: #FFFFFF;

		.title {
			padding: 50rpx 30rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
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
			color: #F5625D;
			font-size: 24rpx;
			text-align: center;
			line-height: 30rpx;
			margin-left: 10rpx;
			margin-top: 10rpx;
		}
	}

	// 优享作品
	.works {
		padding: 0 30rpx;
		margin-top: 30rpx;
		margin-bottom: 160rpx;

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

	// 底部r
	.design_foot {
		width: 750rpx;
		height: 110rpx;
		background: #FFFFFF;
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		bottom: 0;
		font-size: 26rpx;
		color: #333;

		.yuyue {
			width: 300rpx;
			height: 70rpx;
			background: #007399;
			border-radius: 35rpx;
			font-size: 26rpx;
			text-align: center;
			color: #FFFFFF;
			line-height: 70rpx;
		}
	}
</style>
