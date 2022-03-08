<template>
	<view>
		<view class="tabber">
			<u-navbar id="navbar" :is-back="false">
				<image class="sssss" src="../../static/icon_home_logo.png" mode="widthFix"></image>
			</u-navbar>
			<view class="navlist cet" style="justify-content: space-between;">
				<view v-if="item.switch == 1" class="text" v-for="(item,index) in list" :key="index"
					@click="go(item.page,index)">
					<view class="color_text hhnhb">
						{{item.up}}
					</view>
					<view class="color_text hhnhb">
						{{item.down}}
					</view>
				</view>
			</view>
			<view class="seath">
				<u-search @click='seach_go' :disabled="true" v-model="keyword"></u-search>
			</view>
			<view class="wrap">
				<swiper @change="gaizhi" style="height: 300rpx;width: 100%;" :current="current" :indicator-dots="true"
					:circular="true" :autoplay="autoplay" :interval="3000" :duration="1000">
					<swiper-item v-for="(item,index) in lun_list" :key="index" style="border-radius: 20rpx;">
						<video id="video" @play="bofang" @pause="pause" @ended="ended"
							v-if="item.video !=null && item.video != ''" :src="imgurl + item.video"></video>
						<image v-if="item.image !=''" @click="lunbochang" :src="item.image" mode="aspectFit"></image>
					</swiper-item>
				</swiper>
			</view>
			<u-adata :list="data_list" @click="go_shop"></u-adata>
			<u-kehu :showsss='show'></u-kehu>
			<tab-bar @tabbers="dsad"></tab-bar>
		</view>
		<u-logins :showssss="showssss" @budenglu="budenglu()" @denglu="denglu()"></u-logins>
		<u-back-top :scroll-top="scrollTop"></u-back-top>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				//
				//
				//
				zhongjian: 0,
				system: 0,
				px: 0,
				widthwidth: 0,
				tabberheigth: 0,
				navbarheigth: 0,
				navbar: 0,
				//
				//
				//
				videoContext: "",
				autoplay: true,
				showssss: false,
				current: 0,
				show: false,
				data_list: [],
				lun_list: [],
				keyword: "",
				list: [],
				imgurl: this.$imgPath
			};
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		methods: {
			budenglugengxin() {
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
				// 默认地址
				this.$api.addressshow({
					id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							if (item.auto == 1) {
								uni.setStorageSync("address", item)
							} else {
								uni.removeStorageSync("address")
							}
						})
					}
				})
				this.$api.agreements().then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							item["check"] = false
						})
						uni.setStorageSync("xieyi", data.data.data.status)
					} else {
						uni.setStorageSync("xieyi", [])
					}
				})
			},
			denglu() {
				this.budenglugengxin()
			},
			budenglu() {
				console.log();
				// this.showssss = false
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
			gaizhi(ev) {
				this.current = ev.detail.current
				if (ev.detail.current == this.lun_list.length - 1) {
					// this.videoContext.play()
				} else {
					this.videoContext.pause()
				}
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
				if (ev.alls.video != "" && ev.alls.video != null) {
					return true;
				}
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
			go(ev, index) {
				uni.navigateTo({
					url: ev
				})
			},
			alls() {
				// 推荐商品
				this.$api.indexcontent().then(data => {
					if (data.data.code == 1) {
						this.data_list = [];
						data.data.data.status.forEach((item, index) => {
							if (item.video != "" && item.video != null) {
								this.data_list.push({
									id: item.id,
									title: item.name,
									image: "",
									video: item.video,
									alls: item
								})
							} else {
								this.data_list.push({
									id: item.id,
									title: item.name,
									image: item.image,
									video: "",
									alls: item
								})
							}

						})
						uni.stopPullDownRefresh();
					} else {
						this.data_list = []
					}
				})
				// icon
				this.$api.shopicon().then(data => {
					if (data.data.code == 1) {
						let aa = {
							shop: [],
							home: [],
							wanghong: []
						}
						data.data.data.data.forEach(item => {
							if (item.state == 0) {
								aa.shop.push(item)
							}
							if (item.state == 1) {
								aa.home.push(item)
							}
							if (item.state == 2) {
								aa.wanghong.push(item)
							}
						})
						let bb = 0
						aa.wanghong.forEach(item => {
							if (item.switch == 1 && bb == 0) {
								bb++
								uni.setStorageSync("ggug", item.id)
							}
						})
						if (bb == 0) {
							uni.setStorageSync("ggug", 0)
						}
						this.list = [...aa.home]
						uni.setStorageSync("icon", aa)

					}
				})
				//轮播图
				this.$api.banner().then(data => {
					if (data.data.code == 1) {
						this.islogin(data)
						this.lun_list = [];
						let aa = []
						data.data.data.status.forEach(item => {
							item.image = this.$imgPath + item.image
							if (item.position == 0) {
								aa.push(item)
							}
						})
						this.lun_list = aa;
						uni.stopPullDownRefresh();
					} else {
						this.lun_list = []
					}
				})
				// this.tabber()
			},
			tabber() {
				this.$api.indexbar().then(data => {
					if (data.data.code == 1) {
						let aa = []
						data.data.data.status.forEach(item => {
							aa.push({
								pagePath: item.url.url,
								iconPath: this.$imgPath + item.fimage,
								selectedIconPath: this.$imgPath + item.image,
								text: item.title
							})
						})
						uni.setStorageSync("tabber", aa)
					}
				}).catch(data => {
					this.tabber()
				})
			},
			islogin(data) {
				uni.setStorageSync("showssss", data.data.data.edit)
				uni.setStorageSync("edits", data.data.data.edits)
				uni.setStorageSync("kehu", data.data.data.kefu)
				this.showssss = data.data.data.edit
				if (uni.getStorageSync("user_info")) {
					this.showssss = false
				}
			},
			yidong() {
				uni.createSelectorQuery().in(this).select('#navbar').boundingClientRect(data => {
					uni.setStorageSync("navbarheigth", data.height)
				}).exec(); //顶部自定义navber高
				this.system = uni.getSystemInfoSync(); //系统参数
				this.zhongjian = parseInt(this.system.screenWidth / 2)
				let windows = parseInt(this.system.screenHeight / (uni.upx2px(100) / 100)); //屏幕高转rpx
				let nn = parseInt((uni.getStorageSync("bottomheigth") + uni.getStorageSync("setheigth")) / (uni.upx2px(
					100) / 100)); //获取底部tabber和系统留白的高rpx
				this.px = parseInt(uni.upx2px(90));
				this.px = parseInt(this.px / (uni.upx2px(100) / 100)); //移动物体高rpx
				this.widthwidth = parseInt(this.system.windowWidth / (uni.upx2px(100) / 100)) - this.px; //最宽边距
				this.tabberheigth = windows - nn - this.px; //最大下边距
				this.navbarheigth = parseInt(uni.getStorageSync("navbarheigth") / (uni.upx2px(100) / 100)); //最大上边距

			},
		},
		onLoad() {
			uni.createSelectorQuery().in(this).select('#navbar').boundingClientRect(data => {
				uni.setStorageSync("navbarheigth", data.height)
			}).exec(); //顶部自定义navber高
			uni.setStorageSync("shouzhi", 0)
			const res = uni.getSystemInfoSync()
			uni.setStorageSync("bottomheigth", res.safeAreaInsets.bottom)
			this.videoContext = uni.createVideoContext('video')
		},
		onShow() {
			this.budenglugengxin()
		},
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
		width: 290rpx;
		padding: 0 30rpx;
	}
</style>
