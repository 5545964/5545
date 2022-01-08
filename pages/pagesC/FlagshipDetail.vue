<template>
	<view>
		<!-- 导航 -->
		<view class="navbar">
			<u-navbar :is-back="false" :title="title">
				<view class="sssss">
					<view class="dsds cet" @click="back(0)">
						<image class="fanhui" src="@/static/icon_navigation_fanhui.png" mode=""></image>
					</view>
					<view class="hang"></view>
					<view class="dsds cet" @click="back(1)">
						<image class="souye" src="@/static/icon_navigation_house.png" mode=""></image>
					</view>
				</view>
			</u-navbar>
		</view>
		<!-- 轮播 -->
		<view class="lunbo">
			<swiper style="width: 100%;height: 450rpx;" :current="current" :indicator-dots="true" :circular="true"
				:autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in list" :key="index" @click="kaniamg(item)">
					<image style="width: 100%;height: 450rpx;" :src="item" mode=""></image>
				</swiper-item>
				<swiper-item style="position: relative;" v-if="vr_image != ''">
					<image style="width: 100%;height: 450rpx;" @click="kaniamg(vr_image)" :src="vr_image" mode="">
					</image>
					<view class="fdjksfhdsjk cet" @click="goVR(alls)">
						<view class="fsds">
							点击VR
							100%所见所得
						</view>
					</view>
				</swiper-item>
				<swiper-item v-if="video != ''">
					<video style="width: 100%;height: 450rpx;" :src="video"></video>
				</swiper-item>
			</swiper>
		</view>
		<view class="mian">
			<view class="mian_left"  id="mianleft">
				<scroll-view scroll-y="true" :style="'height: '+heigths+'px;'">
					<view :class="index%2==0? 'mian_left_item':'mian_left_item1'"
						:style="active==index?'border-left: 4rpx solid #FD7904;':''" v-for="(item,index) in leftlist"
						:key="index" @click="change(index)">
						{{item.name}}
					</view>
				</scroll-view>
			</view>
			<view style="width: 86%;overflow: hidden;">
				<scroll-view scroll-y="true" :style="'height: '+heigths+'px;'">
					<view v-if="active == 0">
						<u-designDet :info="desInfo" @click="guanzhu" @dianzhan="dianzhan" @qushejishi="pinglun"
							@pinglun="pinglun" @xuanxinxin="xuanxinxin" />
					</view>
					<u-parse v-if="active == 1" :html="alls.deslg"></u-parse>
					<view v-if="active != 1 && active != 0" style="position: relative;" v-for="(item,index) in xq_img" :key="index">
						<view class="fdjksfhdsjk cet" v-if="item.url !=''" @click="goVR(item)">
							<view class="fsds">
								点击VR
								100%所见所得
							</view>
						</view>
						<view class="mengban"  @click="dianjishouzhi">
							<view class="kklm" style="width: 100%;height: 100%;" v-if="item.url == '' && shouzhi == 0"></view>
							<image class="imhjk" v-if="item.url == '' && shouzhi == 0" src="../../static/gif.gif" mode=""></image>
							<image :src="img+item.image" style="width: 640rpx;" mode="widthFix">
							</image>
						</view>
					
						
						<view class="dcdczdc" v-if="item.shopid != 0" @click="goshop(item.shopid)">
							<view style="margin:0 auto;margin-top:36rpx;">
								<view class="nkjsfbjhsd">
									<!-- 套餐价￥ -->
									商品价￥
								</view>
								<view class="nkjsfbjhsd">
									{{item.shop.xc_price}}
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="" style="height: 110rpx;">

		</view>
		<!-- 底部 -->
		<view class="flag_foot">
			<button class="reset" open-type="contact">咨询客服</button>
			<view class="on" @click="gosheji">
				预约设计
			</view>
		</view>

		<!-- <view class="djsa cet" style="bottom: 100rpx;" @click="goshop">
			<view class="">
				<view class="cet">
					<view class="dasds">
						<image src="../../static/shopid.png" mode=""></image>
					</view>
				</view>
				<view class="dad cet">
					商城
				</view>
			</view>
		</view> -->
		<!-- <u-kehu url="../Home/booking/AppointmentDesign"></u-kehu> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				heigthss:10000,
				shouzhi: uni.getStorageSync("shouzhi"),
				img: this.$imgPath,
				current: "",
				desInfo: {},
				video: "",
				vr_image: "",
				xq_img: [],
				xq: [],
				alls: {},
				title: "详情",
				list: [],
				active: 0,
				leftlist: [],
				shenme_id: "",
				heigths: 580
			};
		},
		onLoad(ev) {
			this.shenme_id = ev.id
		},
		onShow() {
			this.allss(this.shenme_id)
			this.$api.setleft({
				setleft_id:this.shenme_id
			}).then(data => {
				if (data.data.code == 1) {
					this.leftlist = [...data.data.data.status];
					setTimeout(() => {
						const query = uni.createSelectorQuery().in(this);
						query.select('#mianleft').boundingClientRect(data => {
							// this.heigths = data.height
						}).exec();
					}, 1000)
				}
			})

		},
		methods: {
			dianjishouzhi() {
				this.shouzhi = 1
				uni.setStorageSync("shouzhi", 1)
			},
			goshop(ev) {
				uni.navigateTo({
					url: "./Shopping?shopid=" + ev
				})
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
			// pinglun
			pinglun(ev) {
				uni.navigateTo({
					url: "./ClubStar?id=" + ev.id
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
						this.allss(this.shenme_id)
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
						icon: "success"
					})
					if (data.data.code == 1) {
						this.allss(this.shenme_id)
					}
				})
			},
			// 设计师详情
			desDetails(ev) {  
				console.log(ev,11111111111)
				this.$api.desxq({
					id: ev,
					// id: 45,
					user_id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						this.desInfo = []
						this.desInfo = data.data.data.status
					}
				})
			},
			goVR(ev) {
				uni.navigateTo({
					url: "../Home/URL/URL?url=" + ev.url
				})
			},
			gosheji() {
				uni.navigateTo({
					url: "../Home/booking/AppointmentDesign"
				})
			},
			allss(ev) {
				this.$api.setxq({
					id: ev
				}).then(data => {
					if (data.data.code == 1) {
						this.alls = data.data.data.status;
						this.xq = data.data.data.status.xq;
						this.title = data.data.data.status.name;
						setTimeout(() => {
							this.change(0)
						}, 1000)
						let img = this.alls.image.split(",")
						let aa = []
						let bbs = this.$imgPath
						img.forEach(item => {
							aa.push(bbs + item)
						})
						this.list = []
						this.list.push(...aa)
						if (data.data.data.status.vrimage != '' && data.data.data.status.vrimage != null) {
							this.vr_image = this.$imgPath + data.data.data.status.vrimage
						}
						if (data.data.data.status.video != '' && data.data.data.status.video != null) {
							this.video = this.$imgPath + data.data.data.status.video
						}
					} else {
						uni.showToast({
							title: "暂无数据",
							duration: 1000,
							icon: "none"
						})
						setTimeout(() => {
							uni.navigateTo(-1)
						}, 1000)
					}
				})
			},
			qeihuan(ev) {

				// let aa = ev;
				// let bb = []
				// aa.forEach(item => {
				// 	if (item.shopid != 0) {
				// 		bb.push({
				// 			img: this.$imgPath + item.image,
				// 			shopid: item.shopid,
				// 			xc_price: item.shop.xc_price
				// 		})
				// 	} else {
				// 		bb.push({
				// 			shopid: 0,
				// 			img: this.$imgPath + item.image,
				// 			url: item.url
				// 		})
				// 	}
				// })
				this.xq_img = []
				this.xq_img = [...ev]

			},
			change(index) {
				this.active = index;
				if (index == 0 || index == 1) {
					this.desDetails(this.alls.designer)
				} else {
					let aa = []
					this.alls.xq.forEach(item => {
						if (this.leftlist[index].id == item.leftid) {
							aa.push(item)
						}
					})
					this.qeihuan(aa)
				}

			},
			back(ev) {
				switch (ev) {
					case 0:
						uni.navigateBack(-1)
						break;
					case 1:
						uni.switchTab({
							url: "/pages/Home/Home"
						})
						break;
					default:
				}
			}
		}
	}
</script>

<style lang="scss">
	.mengban {
		.kklm {
			background-color: #000000;
			opacity: 0.4;
			width: 640rpx;
			height: 400rpx;
			position: absolute;
			z-index: 1;
			top: 0;
		}

		.imhjk {
			width: 60px;
			height: 60px;
			position: absolute;
			bottom: 50%;
			z-index: 111;
			left: 50%;
			margin-left: -60rpx;
			margin-bottom: -60rpx;
		}
	}

	.nkjsfbjhsd {
		font-size: 22rpx;
		font-weight: 400;
		color: #FFFFFF;
		text-align: center;
	}

	.dcdczdc {
		width: 120rpx;
		height: 120rpx;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url(../../static/huahua.png);
		position: absolute;
		bottom: 40rpx;
		right: 20rpx;
	}

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

	.dad {
		margin-top: 8rpx;
		font-size: 20rpx;
		font-weight: 400;
		color: #FFFFFF;
	}

	.dasds {
		width: 30rpx;
		height: 30rpx;
	}

	.djsa {
		width: 90rpx;
		height: 90rpx;
		background: #666666;
		border-radius: 50%;
		position: fixed;

		right: 20rpx;
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

	.lunbo {
		width: 100%;
	}

	.mian {
		display: flex;
		justify-content: space-between;
		margin-top: 20rpx;

		.mian_left {
			width: 14%;
			// background: #305166;
			max-height: 1900rpx;
			overflow: hidden;
		}

		.mian_left_item {
			font-size: 26rpx;
			color: #FFFFFF;
			padding: 20rpx;
			box-sizing: border-box;
			width: 100rpx;
			background: #305166;
		}

		.mian_left_item1 {
			font-size: 26rpx;
			color: #FFFFFF;
			padding: 20rpx;
			box-sizing: border-box;
			width: 100rpx;
			background: #376379;
		}
	}

	.flag_foot {
		width: 100%;
		height: 110rpx;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 0 30rpx;
		justify-content: space-between;
		position: fixed;
		bottom: 0;
		z-index: 100000;

		.reset {
			width: 335rpx;
			height: 70rpx;
			background: #E6F1F5;
			border-radius: 35rpx;
			border: 1rpx solid #007399;
			font-size: 26rpx;
			color: #007399;
			text-align: center;
			line-height: 70rpx;
			box-sizing: border-box;
		}

		.on {
			width: 335rpx;
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
