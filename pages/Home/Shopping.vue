<template>
	<view>
		<view class="shop_main">
			<!-- 轮播 -->
			<view class="wrap">
				<swiper style="height: 300rpx;width: 100%;" @change="gaizhi" :indicator-dots="true" :circular="true"
					:autoplay="autoplay" :interval="3000" :duration="1000">
					<swiper-item v-for="(item,index) in lun_list" :key="index">
						<view  style="border-radius: 20rpx;height: 100%;">
							<video :enable-play-gesture="true" :page-gesture="true" :http-cache="false" codec="software"
								:play-strategy="1" id="video" @play="bofang" @pause="pause" @ended="ended"
								v-if="item.video !=null && item.video != ''" :src="imgurl + item.video"></video>
							<image :lazy-load="true" v-if="item.image !=''" @click="lunbochang" :src="imgurl+'/index/index/show?url='+item.image+'&width=750&height=300'" mode="aspectFit"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 分类 -->
			<view class="shop_cls">
				<view class="shop_cls_item" v-for="item in clsList" :key="item.id" @click="topage(item)"
					v-if="item.switch == 1">
					<image :lazy-load="true" :src="imgurl + item.image" style="width: 90rpx;height: 90rpx;margin-bottom: 16rpx;"
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
					查看更多<image :lazy-load="true" src="../../static/icon_shop_hsmore.png"
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
			<image :lazy-load="true" src="../../static/icon_car_ico.png" style="width: 42rpx;height: 42rpx;" mode="aspectFit"></image>
			购物车
			<view class="cart-num" v-if="cart_num !=0 && cart_num">
				{{cart_num}}
			</view>
		</view>
		<u-dianji></u-dianji>
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
				system: {},
				px: 0,
				widthwidth: 0,
				tabberheigth: 0,
				navbarheigth: 0,
				bianright: 0,
				bianliang: 0,
				bianheigth: 600,
				imgsss: '<img src=\"' + this.$imgPath,
				xinxi: []
			};
		},
		onLoad() {
			this.alls()
		},
		onPullDownRefresh() {
			this.alls()
		},
		onShow() {
			this.videoContext = uni.createVideoContext('video')
			this.cart_num = uni.getStorageSync("cart_num")
			this.system = uni.getSystemInfoSync()
			let windows = parseInt(this.system.windowHeight / (uni.upx2px(100) / 100));
			let nn = parseInt((uni.getStorageSync("bottomheigth") + uni.getStorageSync("setheigth")) / (uni.upx2px(100) /
				100));
			this.px = parseInt(uni.upx2px(100))
			this.px = parseInt(this.px / (uni.upx2px(100) / 100))
			this.widthwidth = parseInt(this.system.windowWidth / (uni.upx2px(100) / 100)) - this.px
			this.tabberheigth = windows - nn - this.px;
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
						if (this.bianright >= this.widthwidth - 20) {
							this.bianright = this.widthwidth - 20
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

						this.linkOthers(ev.head)
						break;
					case 1:

						uni.navigateTo({
							url: "../pagesC/Shopping?shopid=" + ev.shopid
						})
						break;
					case 2:

						uni.navigateTo({
							url: "../pagesC/FlagshipDetail?id=" + ev.tc
						})
						break;
					case 3:
						uni.switchTab({
							url: "/pages/Home/About"
						})
						break;
					case 4:
						uni.setStorageSync("youhuijuan", ev)
						uni.navigateTo({
							url: "../pagesC/youhuijuan"
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
								url: "../pagesC/fuwenben?title=" + aa.title
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

				} else {
					this.videoContext.pause()
				}
			},
			more(url) {
				uni.navigateTo({
					url: url.url
				});
			},
			linkOthers(ev) {
				uni.navigateTo({
					url: "./URL/URL?url=" + ev
				});
			},
			alls() {
				this.clsList = uni.getStorageSync("icon").shop
				this.$api.banner().then(data => {
					if (data.data.code == 1) {
						let aa = [];
						data.data.data.status.forEach(item => {
							// item.image = this.$imgPath + item.image
							if (item.position == 1) {
								aa.push(item)
							}
						})
						this.lun_list = aa;
						uni.stopPullDownRefresh();
					} else {
						this.lun_list = [];
					}
				})
				this.list.forEach(item => {
					if (item.id == 0) {
						this.$api.shopindex().then(data => {
							if (data.data.code == 1) {
								item.data_list = []
								data.data.data.status.forEach((items, index) => {
									if (index <= 5) {
										item.data_list.push({
											id: items.id,
											isgo: false,
											price: items.xc_price,
											title: items.name,
											image: items.simage,
											alls: items
										})
									}

								})
								uni.stopPullDownRefresh();
							}
						})
					} else if (item.id == 1) {
						this.$api.loupanden({
							pages: 1,
							limit: 4
						}).then(data => {
							if (data.data.code == 1) {
								item.data_list = []
								data.data.data.status.data.forEach((items, index) => {
									if (index <= 7) {
										item.data_list.push({
											id: items.id,
											isgo: false,
											price: items.xc_price,
											title: items.name,
											image: items.simage,
											alls: items
										})
									}

								})
								uni.stopPullDownRefresh();
							}
						})
					} else if (item.id == 2) {
						this.$api.qjset({
							pages: 1,
							limit: 4,
							setid: 13
						}).then(data => {
							if (data.data.code == 1) {
								item.data_list = []
								data.data.data.status.data.forEach((items, index) => {
									if (index <= 7) {
										item.data_list.push({
											id: items.id,
											isgo: false,
											price: 0,
											title: items.name,
											image: items.simage,
											alls: items
										})
									}

								})
								uni.stopPullDownRefresh();
							}
						})
					}
				})

			},
			toproduct(ev, index) {
				if (index == 0) {
					uni.navigateTo({
						url: "../pagesC/Shopping?shopid=" + ev.id
					})
				} else if (index == 1) {
					uni.setStorageSync("fdklfjdsfjsfhks", ev.alls)
					uni.navigateTo({
						url: "../pagesC/DesignDetail"
					})
				} else if (index == 2) {
					uni.navigateTo({
						url: "../pagesC/FlagshipDetail?id=" + ev.alls.id
					})
				}

			},

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
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {}

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
