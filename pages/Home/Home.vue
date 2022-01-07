<template>
	<view>
		<view class="tabber">
			<u-navbar :is-back="false">
				<view class="sssss">
					<image src="../../static/icon_home_logo.png" mode=""></image>
				</view>
			</u-navbar>
			<view class="navlist cet" style="justify-content: space-between;">
				<view class="text" v-for="(item,index) in list" :key="index" @click="go(item.url)">
					<view class="color_text hhnhb">
						{{item.a}}
					</view>
					<view class="color_text hhnhb">
						{{item.b}}
					</view>
				</view>
			</view>
			<view class="seath">
				<u-search @click='seach_go' :disabled="true" v-model="keyword"></u-search>
			</view>
			<view class="wrap">
				<!-- <u-swipers @click="lunbochang" img-mode="scaleToFill" :list="lun_list" :border-radius="20"
					:autoplay="false" :height="300" indicator-pos="bottomLeft"></u-swipers> -->
				<swiper @change="gaizhi" style="width: 100%;height: 300rpx;" :current="current" :indicator-dots="true"
					:circular="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="(item,index) in lun_list" :key="index" style="border-radius: 20rpx;">
						<video v-if="item.video !=null && item.video != ''" style="width: 100%;height: 300rpx;"
							:src="imgurl + item.video"></video>
						<image v-if="item.image !=''" @click="lunbochang" style="width: 100%;height: 300rpx;"
							:src="item.image" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
			<u-adata :list="data_list" @click="go_shop"></u-adata>
			<u-kehu :showsss='show'></u-kehu>
			<tab-bar @tabbers="dsad"></tab-bar>
		</view>
	</view>
</template>
<script>
	export default {
		name: '',
		props: {},
		components: {},
		data() {
			return {
				current: 0,
				show: false,
				data_list: [],
				lun_list: [],
				keyword: "",
				list: [{
						a: "楼盘",
						b: "设计",
						url: "../pagesC/HouseDesign",
					},
					{
						a: "旗舰",
						b: "套系",
						url: "../pagesC/FlagshipSet",
					},
					{
						a: "设计师",
						b: "club ",
						url: "../pagesD/designClub",
					},
					{
						a: "工长",
						b: "club",
						url: "#",
					},
					{
						a: "社区生活",
						b: "club",
						url: "#",
					},
					{
						a: "佳作",
						b: "分享",
						url: "./jiazhuo",
					}
				],
				imgurl: this.$imgPath
			};
		},
		methods: {
			gaizhi(ev) {
				this.current = ev.detail.current
			},
			dsad() {
				this.show = false
			},
			linkOthers(ev) {
				uni.navigateTo({
					url: "./URL/URL?url=" + ev
				});
			},
			lunbochang() {

				let aa = this.lun_list[this.current]
				this.gosss(aa)
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
			go_shop(ev) {

				// uni.navigateTo({
				// 	url: "../pagesC/Shopping?shopid=" + ev.id
				// })
				switch (Number(ev.alls.link)) {
					case 0:
						// 网页跳转
						this.linkOthers(ev.alls.head)
						break;
					case 1:
						// 产品pages/pagesC/Shopping
						uni.navigateTo({
							url: "../pagesC/Shopping?shopid=" + ev.alls.shopid
						})
						break;
					case 2:
						uni.navigateTo({
							url: "../pagesC/FlagshipDetail?id=" + ev.alls.tc
						})
						// 套餐
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
			// 搜索
			seach_go() {
				uni.navigateTo({
					url: "./search/search"
				})
			},
			go(ev) {
				uni.navigateTo({
					url: ev
				})
			},
			goods() {
				// 推荐商品
				this.$api.indexcontent().then(data => {
					if (data.data.code == 1) {
						this.data_list = [];
						data.data.data.status.forEach((item, index) => {
							this.data_list.push({
								id: item.id,
								isgo: false,
								price: item.xc_price,
								title: item.name,
								image: item.image,
								alls: item
							})
						})
						uni.stopPullDownRefresh();
					} 
				})
				// 推荐商品
			},
			alls() {
				this.goods();
				//轮播图
				this.$api.banner().then(data => {
					if (data.data.code == 1) {
						this.lun_list = [];
						let aa = []
						data.data.data.status.forEach(item => {
							item.image = this.$imgPath + item.image
							if(item.position == 0){
								aa.push(item)
							}
						})
						this.lun_list = aa;
						uni.stopPullDownRefresh();
					}
				})
				//轮播图
			}
		},
		onLoad() {
			uni.setStorageSync("shouzhi", 0)
			const res = uni.getSystemInfoSync();
			uni.setStorageSync("bottomheigth", res.safeAreaInsets.bottom)
		},
		onShow() {
			this.alls()
			//购物车数量
			this.$api.shopcart({
				id: uni.getStorageSync("user_info").id
			}).then(data => {
				let aa = 0
				if (data.data.code == 1) {
					data.data.data.status.forEach(item => {
						aa = aa + 1
					})
				}
				if (aa >= 99) {
					aa = "..."
				}
				uni.setStorageSync("cart_num", aa)
			})

			this.$api.addressshow({
				id: uni.getStorageSync("user_info").id
			}).then(data => {
				if (data.data.code == 1) {
					data.data.data.status.forEach(item => {
						if (item.auto == 1) {
							uni.setStorageSync("address", item)
						}
					})
				}
			})
		},
		watch: {},
		computed: {},
		onReachBottom() {},
		onPullDownRefresh() {
			this.alls()
		}

	};
</script>
<style lang='scss' scoped>
	.wrap {
		padding: 0 40rpx;
	}

	.seath {
		margin: 30rpx;
	}

	.navlist {
		padding: 30rpx;
		background-color: #fff;

		.text {
			align-items: center;
		}

		.hhnhb {
			font-size: 28rpx;
			font-weight: 400;
		}
	}

	.sssss {
		height: 34rpx;
		width: 290rpx;
		padding: 0 30rpx;
	}
</style>
