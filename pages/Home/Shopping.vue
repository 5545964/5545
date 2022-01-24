<template>
	<view>
		<view class="shop_main">
			<!-- 轮播 -->
			<view class="wrap">
				<!-- <u-swipers @click="lunbochang" img-mode="scaleToFill" :list="lun_list" :border-radius="20"
					:autoplay="false" :height="300" indicator-pos="bottomLeft"></u-swipers> -->
				<swiper style="height: 300rpx;width: 100%;" @change="gaizhi" :current="current" :indicator-dots="true"
					:circular="true" :autoplay="autoplay" :interval="3000" :duration="1000">
					<swiper-item v-for="(item,index) in lun_list" :key="index" style="border-radius: 20rpx;">
						<video id="video" @play="bofang" @pause="pause" @ended="ended"
							v-if="item.video !=null && item.video != ''" :src="imgurl + item.video"></video>
						<image v-if="item.image !=''" @click="lunbochang" :src="item.image" mode="aspectFit"></image>
					</swiper-item>
				</swiper>
			</view>
			<!-- 分类 -->
			<view class="shop_cls">
				<view class="shop_cls_item" v-for="item in clsList" :key="item.id" @click="topage(item)">
					<image :src="imgurl + item.image" style="width: 90rpx;height: 90rpx;margin-bottom: 16rpx;"
						mode="aspectFit">
					</image>
					<view class="">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
		<!-- 商品列表 -->
		<view class="shop_list" v-for="(item,index) in list" :key="item.id">
			<view class="title">
				<view class="name">
					{{item.name}}
					<view class="bor_bot">

					</view>
				</view>
				<view class="lookmore" @click="more(item)">
					查看更多<image src="../../static/icon_shop_hsmore.png"
						style="width: 10rpx;height: 18rpx;margin-left: 10rpx;" mode="aspectFit"></image>
				</view>
			</view>
			<view class="">
				<view class="">
					<u-adata @click="toproduct($event,index)" :list="item.data_list"></u-adata>
				</view>
			</view>
		</view>
		<view class="shopcar" :style="'left: '+bianright+'rpx;top: '+bianheigth+'rpx;'" @touchend="end"
			@touchmove.stop="move" @click="tocar">
			<image src="../../static/icon_car_ico.png" style="width: 42rpx;height: 42rpx;" mode="aspectFit"></image>
			购物车
			<view class="cart-num" v-if="cart_num !=0 && cart_num">
				{{cart_num}}
			</view>
		</view>
		<tab-bar></tab-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				videoContext: "",
				autoplay: true,
				imgurl: this.$imgPath,
				current: 0,
				cart_num: uni.getStorageSync("cart_num"),
				list: [{
						id: 0,
						name: "产品中心",
						url: "../pagesC/ProductCate",
						data_list: []
					},
					{
						id: 1,
						name: "楼盘设计",
						url: "../pagesC/HouseDesign",
						data_list: []
					},
					{
						id: 2,
						name: "旗舰套系",
						url: "../pagesC/FlagshipSet",
						data_list: []
					}
				],
				lun_list: [],
				clsList: [],
				//
				//移动
				//
				system: {},
				px: 0,
				widthwidth: 0,
				tabberheigth: 0,
				navbarheigth: 0,
				bianright: 0,
				bianheigth: 600,
			};
		},
		onShow() {
			this.videoContext = uni.createVideoContext('video')
			this.cart_num = uni.getStorageSync("cart_num")
			this.alls()
			// 
			// 移动
			// 
			this.system = uni.getSystemInfoSync() //系统参数
			let windows = parseInt(this.system.windowHeight / (uni.upx2px(100) / 100)); //屏幕高转rpx
			let nn = parseInt((uni.getStorageSync("bottomheigth") + uni.getStorageSync("setheigth")) / (uni.upx2px(100) /
				100)); //获取底部tabber和系统留白的高rpx
			this.px = parseInt(uni.upx2px(100))
			this.px = parseInt(this.px / (uni.upx2px(100) / 100)) //移动物体高rpx
			this.widthwidth = parseInt(this.system.windowWidth / (uni.upx2px(100) / 100)) - this.px //最宽边距
			this.bianright = this.widthwidth-20
			this.tabberheigth = windows - nn - this.px; //最大下边距
		},
		methods: {
			end() {
				if (this.bianliang < this.system.screenWidth / 2) {
					var bb = setInterval(() => {
						this.bianright = this.bianright - 10;
						if (this.bianright <= 0) {
							this.bianright = 0;
							clearInterval(bb);
						}
					}, 10)
				} else {
					var bb = setInterval(() => {
						this.bianright = this.bianright + 10;
						if (this.bianright >= this.widthwidth-20) {
							this.bianright = this.widthwidth-30
							clearInterval(bb);
						}
					}, 10)
				}
			},
			move(ev) {
				let touch = ev.touches[0];
				this.bianliang = touch.clientX
				let aa = parseInt(touch.clientX / (uni.upx2px(100) / 100)) - (this.px / 2);
				let bb = parseInt(touch.clientY / (uni.upx2px(100) / 100)) - (this.px / 2);
				if (aa >= 0 && aa <= this.widthwidth) {
					this.bianright = aa
				}
				if (bb >= this.navbarheigth && bb <= this.tabberheigth) {
					this.bianheigth = bb
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
			gosss(ev) {
				switch (Number(ev.link)) {
					case 0:
						// 网页跳转
						this.linkOthers(ev.head)
						break;
					case 1:
						// 产品pages/pagesC/Shopping
						uni.navigateTo({
							url: "../pagesC/Shopping?shopid=" + ev.shopid
						})
						break;
					case 2:
						// 套餐
						uni.navigateTo({
							url: "../pagesC/FlagshipDetail?id=" + ev.tc
						})
						break;
					case 3:
						// 关于宝芸邸
						uni.switchTab({
							url: "/pages/Home/About"
						})
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
					this.videoContext.play()
				} else {
					this.videoContext.pause()
				}
			},
			more(url) {
				console.log(url);
				uni.navigateTo({
					url: url
				});
			},
			linkOthers(ev) {
				uni.navigateTo({
					url: "./URL/URL?url=" + ev
				});
			},
			alls() {
				//shopicon
				this.$api.shopicon().then(data => {
					if (data.data.code == 1) {
						this.clsList = data.data.data.data;
					}
				})
				//lunbotu
				this.$api.banner().then(data => {
					if (data.data.code == 1) {
						let aa = [];
						data.data.data.status.forEach(item => {
							item.image = this.$imgPath + item.image
							if (item.position == 1) {
								aa.push(item)
							}
						})
						this.lun_list = aa;
					}
				})
				// 推荐商品
				this.list.forEach(item => {
					if (item.id == 0) {
						this.$api.shopindex().then(data => {
							if (data.data.code == 1) {
								item.data_list = []
								data.data.data.status.forEach((items, index) => {
									item.data_list.push({
										id: items.id,
										isgo: false,
										price: items.xc_price,
										title: items.name,
										image: items.simage,
										alls: items
									})
								})
							}
						})
					} else if (item.id == 1) {
						this.$api.loupanden().then(data => {
							if (data.data.code == 1) {
								item.data_list = []
								data.data.data.status.forEach((items, index) => {
									item.data_list.push({
										id: items.id,
										isgo: false,
										price: items.xc_price,
										title: items.name,
										image: items.simage,
										alls: items
									})
								})
							}
						})
					} else if (item.id == 2) {
						this.$api.qjset().then(data => {
							if (data.data.code == 1) {
								item.data_list = []
								data.data.data.status.data.forEach((items, index) => {
									item.data_list.push({
										id: items.id,
										isgo: false,
										price: 0,
										title: items.name,
										image: items.simage,
										alls: items
									})
								})
							}
						})
					}

				})

				// 推荐商品
			},
			toproduct(ev, index) {
				if (index == 0) {

					uni.navigateTo({
						url: "../pagesC/Shopping?shopid=" + ev.id
					})
				} else if (index == 1) {
					let aa = ev.alls
					uni.navigateTo({
						url: "../pagesC/DesignDetail?id=" + JSON.stringify(aa)
					})
				} else if (index == 2) {

					uni.navigateTo({
						url: "../pagesC/FlagshipDetail?id=" + ev.alls.id
					})
				}

			},
			// 购物车
			async tocar() {
				if (await this.$login()) {
					uni.navigateTo({
						url: "../pagesC/shopcart"
					})
				}
			},
			topage(item) {
				uni.navigateTo({
					url: item.page
				})
				// // 限时抢购
				// if (item.id == 0) {
				// 	uni.navigateTo({
				// 		url: "../pagesC/promotion"
				// 	})
				// }
				// // 产品设计
				// if (item.id == 1) {
				// 	uni.navigateTo({
				// 		url: "../pagesC/ProductCate"
				// 	})
				// }
				// // 楼盘设计
				// if (item.id == 2) {
				// 	uni.navigateTo({
				// 		url: "../pagesC/HouseDesign"
				// 	})
				// }
				// // 旗舰套系
				// if (item.id == 3) {
				// 	uni.navigateTo({
				// 		url: "../pagesC/FlagshipSet"
				// 	})
				// }
				// // 我的直播
				// if (item.id == 4) {
				// 	uni.navigateTo({
				// 		url: "../pagesC/zhibo?title=的咔叽顺口溜"
				// 	})
				// }
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		// padding: 0 40rpx;
		// margin-top: 20rpx;
	}

	.cart-num {
		width: 50rpx;
		height: 50rpx;
		border-radius: 50%;
		background-color: #e25c5c;
		color: #ffffff;
		position: absolute;
		top: -5px;
		right: -10px;
		line-height: 50rpx;
		text-align: center;
		font-weight: 400;
		font-size: 26rpx;
	}

	.shopcar {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100rpx;
		height: 100rpx;
		background: #007399;
		box-shadow: 0px 0px 7rpx 3rpx rgba(0, 0, 0, 0.3);
		border-radius: 50%;
		font-size: 20rpx;
		color: #FFFFFF;
		position: fixed;


	}

	.shop_main {
		background-color: #FFFFFF;
		padding: 20rpx 30rpx 40rpx;
		box-sizing: border-box;

		.shop_cls {
			margin-top: 100rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.shop_cls_item {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}

	// 商品列表 
	.shop_list {
		box-sizing: border-box;

		.title {
			padding: 0 30rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 40rpx;
			margin-bottom: 30rpx;
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

		.lookmore {
			margin-bottom: 10rpx;
		}
	}
</style>
