<template>
	<view>
		<view class="shop_main">
			<!-- 轮播 -->
			<view class="wrap">
				<!-- <u-swipers @click="lunbochang" img-mode="scaleToFill" :list="lun_list" :border-radius="20"
					:autoplay="false" :height="300" indicator-pos="bottomLeft"></u-swipers> -->
				<swiper @change="gaizhi" :current="current" :indicator-dots="true"
					:circular="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="(item,index) in lun_list" :key="index" style="border-radius: 20rpx;">
						<video v-if="item.video !=null && item.video != ''" style="width: 100%;height: 300rpx;"
							:src="imgurl + item.video"></video>
						<image v-if="item.image !=''" @click="lunbochang" style="width: 100%;height: 300rpx;"
							:src="item.image" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
			<!-- 分类 -->
			<view class="shop_cls">
				<view class="shop_cls_item" v-for="item in clsList" :key="item.id" @click="topage(item)">
					<image :src="item.src" style="width: 90rpx;height: 90rpx;margin-bottom: 16rpx;" mode=""></image>
					<view class="">
						{{item.name}}
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
				<view class="lookmore" @click="more(index)">
					查看更多<image src="../../static/icon_shop_hsmore.png"
						style="width: 10rpx;height: 18rpx;margin-left: 10rpx;" mode=""></image>
				</view>
			</view>
			<view class="">
				<view class="">
					<u-adata @click="toproduct($event,index)" :list="item.data_list"></u-adata>
				</view>
			</view>
		</view>
		<view class="shopcar" @click="tocar">

			<image src="../../static/icon_car_ico.png" style="width: 42rpx;height: 42rpx;" mode=""></image>
			购物车
			<view class="cart-num" v-if="cart_num !=0">
				{{cart_num}}
			</view>
		</view>
		<tab-bar @tabbers="dsad"></tab-bar>
	</view>
</template>

<script>
	export default {

		onLoad() {
			// if (uni.getStorageSync("cart_num")) {
			// 	this.cart_num = uni.getStorageSync("cart_num")
			// }
		},
		onShow() {
			this.cart_num = uni.getStorageSync("cart_num")
			this.alls()
		},
		data() {
			return {
				imgurl:this.$imgPath,
				current: 0,
				cart_num: uni.getStorageSync("cart_num"),
				list: [{
						id: 0,
						name: "产品中心",
						data_list: []
					},
					{
						id: 1,
						name: "楼盘设计",
						data_list: []
					},
					{
						id: 2,
						name: "旗舰套系",
						data_list: []
					}
				],
				lun_list: [],
				clsList: [{
						id: 0,
						name: "限时抢购",
						src: "../../static/icon_shop_naozhong.png"
					},
					{
						id: 1,
						name: "产品中心",
						src: "../../static/icon_shop_cpzx.png"
					},
					{
						id: 2,
						name: "楼盘设计",
						src: "../../static/icon_shop_sheji.png"
					},
					{
						id: 3,
						name: "旗舰套系",
						src: "../../static/icon_shop_shafa.png"
					},
					{
						id: 4,
						name: "我的直播",
						src: "../../static/icon_shop_zhibo.png"
					}
				]
			};
		},
		methods: {
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
			},
			dsad() {

			},
			more(index) {
				let url = ""
				if (index == 0) {
					url = "../pagesC/ProductCate"
				} else if (index == 1) {
					url = "../pagesC/HouseDesign"
				} else {
					url = "../pagesC/FlagshipSet"
				}

				uni.navigateTo({
					url: url
				});
			},
			linkOthers(ev) {
				uni.navigateTo({
					url: "./URL/URL?url=" + ev
				});
			},
			// lunbochang(ev) {
			// 	let aa = this.lun_list[ev]
			// 	this.gosss(aa)
			// },
			// gosss(ev) {

			// 	switch (Number(ev.link)) {
			// 		case 0:
			// 			// 网页跳转
			// 			this.linkOthers(ev.head)
			// 			break;
			// 		case 1:
			// 			// 产品pages/pagesC/Shopping
			// 			uni.navigateTo({
			// 				url: "../pagesC/Shopping?shopid=" + ev.shopid
			// 			})
			// 			break;
			// 		case 2:
			// 			// 套餐
			// 			break;
			// 		case 3:
			// 			// 关于宝芸邸
			// 			uni.switchTab({
			// 				url: "/pages/Home/About"
			// 			})
			// 			break;
			// 		default:
			// 	}
			// },
			alls() {
				//lunbotu
				this.$api.banner().then(data => {
					if (data.data.code == 1) {
						let aa = [];
						data.data.data.status.forEach(item => {
							item.image = this.$imgPath + item.image
							if(item.position == 1){
								aa.push(item)
							}
						})
						this.lun_list = aa;
					}
				})
				//lunbotu
				// 推荐商品
				this.list.forEach(item => {
					if (item.id == 0) {
						this.$api.shopindex().then(data => {
							if (data.data.code == 1) {
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
			tocar() {
				uni.navigateTo({
					url: "../pagesC/shopcart"
				})
			},
			topage(item) {
				// 限时抢购
				if (item.id == 0) {
					uni.navigateTo({
						url: "../pagesC/promotion"
					})
				}
				// 产品设计
				if (item.id == 1) {
					uni.navigateTo({
						url: "../pagesC/ProductCate"
					})
				}
				// 楼盘设计
				if (item.id == 2) {
					uni.navigateTo({
						url: "../pagesC/HouseDesign"
					})
				}
				// 旗舰套系
				if (item.id == 3) {
					uni.navigateTo({
						url: "../pagesC/FlagshipSet"
					})
				}
				// 我的直播
				if (item.id == 4) {
					uni.navigateTo({
						url: "../pagesC/zhibo"
					})
				}
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
		right: 30rpx;
		top: 850rpx;

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
