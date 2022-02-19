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
			<swiper style="width: 100%;height: 450rpx;" :current="current" :indicator-dots="true" :circular="true"
				:autoplay="autoplay" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in list.image" :key="index" @click="kaniamg(item)">
					<image style="width: 100%;height: 450rpx;" :src="img+item" mode="aspectFit"></image>
				</swiper-item>
				<swiper-item style="position: relative;" v-if="list.vrimage != ''">
					<image style="width: 100%;height: 450rpx;" @click="kaniamg(list.vrimage)" :src="img+list.vrimage"
						mode="aspectFit">
					</image>
					<view class="fdjksfhdsjk cet" @click="goVR(list.url)">
						<view class="fsds">
							点击VR
							100%所见所得
						</view>
					</view>
				</swiper-item>
				<swiper-item v-if="list.video != ''">
					<video id="video" @play="bofang" @pause="pause" @ended="ended" style="width: 100%;height: 450rpx;"
						:src="img+list.video"></video>
				</swiper-item>
			</swiper>
		</view>
		<!-- <u-cdata :list="list.shop"></u-cdata> -->
		<view v-for="(item,index) in list.shop" :key="index">
			<view class="" v-if="item.content">
				<image class="imgs" :src="item.content" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				autoplay: true,
				img: this.$imgPath,
				current: "",
				video: "",
				vr_image: "",
				title: "详情",
				list: {}, //轮播
				go_shop: {},
			};
		},
		onLoad(ev) {
			let go_shop = uni.getStorageSync("go_shop")
			this.title = go_shop.name
			go_shop.image = go_shop.image.split(",")
			go_shop.shop.forEach(item=>{
				item.content=this.img+item.content
			})
			this.list = go_shop
			console.log(this.list,111);
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
			goVR(ev) {
				uni.navigateTo({
					url: "../Home/URL/URL?url=" + ev
				})
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
	.imgs{
		display: inline-block;
		max-width: 100%;
		height: 100%;
	}
	.lunbo {
		width: 100%;
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
</style>
