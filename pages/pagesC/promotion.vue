<template>
	<view>
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
		<view class="">
			<image src="../../static/shop_dingbu_bg.png" style="height: 240rpx;" mode="aspectFit"></image>
		</view>
		<!-- 轮播 -->
		<view class="lun_main">
			<view class="">
				<swiper @change="gaizhi" style="width: 100%;height: 300rpx;" :indicator-dots="true" :circular="true"
					:autoplay="autoplay" :interval="3000" :duration="1000">
					<swiper-item v-for="(item,index) in lun_list" :key="index" style="border-radius: 20rpx;">
						<view style="border-radius: 20rpx;height: 100%;">
							<video :page-gesture="true" id="video" @play="bofang" @pause="pause" @ended="ended"
								v-if="item.video !=null && item.video != ''" :src="item.video"></video>
							<image v-if="item.image !=''" @click="lunbochang" :src="item.image">
							</image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="" style="padding-top: 100rpx;">
				<view class="last">
					最后疯抢
				</view>
				<view class="start">
					已开抢<view class="hot">
						HOT
					</view>
				</view>
			</view>
		</view>
		<!-- 商品列表 -->
		<view class="">
			<u-adata :list="data_list" @click="goshop"></u-adata>
		</view>
		<view class="" style="height: 20rpx;">

		</view>
		<u-heigth />
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.$api.banner().then(data => {
				if (data.data.code == 1) {
					this.lun_list = [];
					let aa = []
					let time = Date.parse(new Date()) / 1000
					data.data.data.status.forEach(item => {
						// && item.endtime > time
						if (item.position == 2 && item.endtime > time) {
							item.video = this.$imgs(item.video)
							item.image = this.$imgs(item.image)
							aa.push(item)
						}
					})
					this.lun_list = aa;
				}
			})
			this.$api.timeshop().then(data => {
				if (data.data.code == 1) {
					data.data.data.data.forEach((item, index) => {
						item["isgo"] = true;
						item["cupons"] = false;
						let aa = item.simage
						item.simage = item.image
						item.image = aa
					})
					data.data.data.cupons.forEach((item, index) => {
						item["isgo"] = true;
						item["cupons"] = true;
						item["xc_price"] = item.price
						let aa = item.simage
						item.simage = item.image
						item.image = aa
					})
					this.data_list = [...data.data.data.data, ...data.data.data.cupons]
				}
			})
			this.videoContext = uni.createVideoContext('video')
			this.$api.pots({
				limit: 1000
			}).then(data => {
				if (data.data.code == 1) {
					data.data.data.status.data.forEach(item => {
						item.content = item.content.replace(/\<img src=\"/gi, this.imgsss);
					})
					this.xinxi = data.data.data.status.data
				}
			})
		},
		data() {
			return {
				videoContext: "",
				autoplay: true,
				imgurl: this.$imgPath,
				current: 0,
				title: "限时抢购",
				lun_list: [],
				data_list: [],
				imgsss: '<img src=\"' + this.$imgPath,
				xinxi: []
			};
		},
		onUnload() {

		},
		methods: {
			ended(ev) {
				this.autoplay = true
			},
			pause(ev) {
				this.autoplay = true
			},
			bofang(ev) {
				this.autoplay = false
			},
			goshop(ev) {
				if (ev.cupons) {
					uni.navigateTo({
						url: "./youhuijuan?id=" + ev.id
					})
				} else {
					uni.navigateTo({
						url: "./Shopping?shopid=" + ev.id
					})
				}


			},
			linkOthers(ev) {
				uni.navigateTo({
					url: "../Home/URL/URL?url=" + ev
				});
			},
			gosss(ev) {
				switch (Number(ev.link)) {
					case 0:
						// 网页跳转
						if (ev.head != "") {
							this.linkOthers(ev.head)
						} else {
							uni.previewImage({
								urls: [this.imgurl + ev.image],
								longPressActions: {
									itemList: ['发送给朋友', '保存图片', '收藏'],
									success: function(data) {},
									fail: function(err) {}
								}
							});
						}
						break;
					case 1:
						// 产品pages/pagesC/Shopping
						uni.navigateTo({
							url: "./Shopping?shopid=" + ev.shopid
						})
						break;
					case 2:
						// 套餐
						uni.navigateTo({
							url: "./Shopping?id=" + ev.tc
						})
						break;
					case 3:
						// 关于宝芸邸
						uni.reLaunch({
							url: "/pages/Home/About"
						})
						break;
					case 4:
						uni.navigateTo({
							url: "./youhuijuan?id=" + ev.cupons
						})
						break;
					case 5:
						let aa = {}
						this.xinxi.forEach(item => {
							if (item.id == ev.wz) {
								aa = item
							}
						})
						if (ev.wz == "") {
							uni.reLaunch({
								url: "./About?titit=0"
							})
						} else {
							uni.setStorageSync("fuwenbeng", aa.content)
							uni.navigateTo({
								url: "./fuwenben?title=" + aa.title
							})
						}
						break;
					default:
				}
			},
			lunbochang() {

				let aa = this.lun_list[this.current]
				this.gosss(aa)
			},
			gaizhi(ev) {
				this.current = ev.detail.current
				if (ev.detail.current == this.lun_list.length - 1) {
					// this.videoContext.play()
				} else {
					this.videoContext.pause()
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
	.lun_main {
		margin-top: -170rpx;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #FFFFFF;

		.last {
			font-size: 28rpx;
			color: #333;
			font-weight: 800;
		}

		.start {
			display: flex;
			align-items: center;
			font-size: 22rpx;
			color: #333;
		}

		.hot {
			width: 40rpx;
			height: 24rpx;
			background: #ED3736;
			border-radius: 8rpx 0px 8rpx 8rpx;
			font-size: 16rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 24rpx;
			margin-left: 10rpx;
		}
	}

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
</style>
