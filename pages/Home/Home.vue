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
				<swiper @change="gaizhi" style="height: 300rpx;width: 100%;" :indicator-dots="true" :circular="true"
					:autoplay="autoplay" :interval="3000" :duration="1000">
					<swiper-item v-for="(item,index) in lun_list" :key="index">
						<view style="border-radius: 20rpx;height: 100%;">
							<video :enable-play-gesture="true" :page-gesture="true" :http-cache="false" codec="software"
								:play-strategy="1" id="video" @play="bofang" @pause="pause" @ended="ended"
								v-if="item.video !=null && item.video != ''" :src="imgurl + item.video" />
							<image v-if="item.image !=''" @click="lunbochang" :src="imgurl+'/index/index/show?url='+item.image+'&width=750&height=300'" mode="widthFix"/>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<u-adata :list="data_list" @click="go_shop"></u-adata>
			<u-kehu :showsss='show'></u-kehu>
			<u-logins :showssss="showssss" @budenglu="budenglu()" @denglu="denglu()"></u-logins>
			<u-back-top :bottom="200" :scroll-top="scrollTop"></u-back-top>
			<u-dianji></u-dianji>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				zhongjian: 0,
				system: 0,
				px: 0,
				widthwidth: 0,
				tabberheigth: 0,
				navbarheigth: 0,
				navbar: 0,
				videoContext: "",
				autoplay: true,
				showssss: false,
				current: 0,
				show: false,
				data_list: [],
				lun_list: [],
				keyword: "",
				list: [],
				imgurl: this.$imgPath,
				imgsss: '<img src=\"' + this.$imgPath,
				xinxi: []
			};
		},
		onLoad() {
			this.alls()
			const res = uni.getSystemInfoSync()
			uni.setStorageSync("bottomheigth", res.safeAreaInsets.bottom)
		},
		onShow() {
			this.budenglugengxin()
			uni.setStorageSync("shouzhi", 0)
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
		onPullDownRefresh() {
			this.budenglugengxin()
			this.alls()
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		methods: {
			budenglugengxin() {
				this.showssss = uni.getStorageSync("showssss")
				uni.createSelectorQuery().in(this).select('#navbar').boundingClientRect(data => {
					uni.setStorageSync("navbarheigth", data.height)
				}).exec();
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
							} else {
								uni.removeStorageSync("address")
							}
						})
					}
				})
				// this.$api.agreements().then(data => {
				// 	if (data.data.code == 1) {
				// 		data.data.data.status.forEach(item => {
				// 			item["check"] = false
				// 		})
				// 		uni.setStorageSync("xieyi", data.data.data.status)
				// 	} else {
				// 		uni.setStorageSync("xieyi", [])
				// 	}
				// })
				this.$api.mymake({
					user_id: uni.getStorageSync("user_info").id,
					limit: 1000
				}).then(data => {
					if (data.data.code == 1) {
						let bb = 0
						data.data.data.status.data.forEach(item => {
							if (item.state == "1") {
								bb = bb + 1
							}
						})
						uni.setStorageSync("yuyuejilunum", data.data.data.status.data.length)
						uni.setStorageSync("yuyuele", bb)
					}
				})
				this.$api.letter({
					user_id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						uni.setStorageSync("letter", data.data.data.status.length)
					}
				})
				this.$api.activtz().then(data => {
					if (data.data.code == 1) {
						uni.setStorageSync("activtz", data.data.data.status.length)
					}
				})
			},
			denglu() {
				this.budenglugengxin()
			},
			budenglu() {
				uni.setStorageSync("showssss", false)
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
				if (ev.detail.current == this.lun_list.length - 1) {} else {
					this.videoContext.pause()
				}
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
						if (ev.head != "") {
							this.linkOthers(ev.head)
						} else {
							uni.previewImage({
								urls: [ev.image],
								longPressActions: {
									itemList: ['发送给朋友', '保存图片', '收藏'],
									success: function(data) {},
									fail: function(err) {}
								}
							});
						}
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
						uni.navigateTo({
							url: "../pagesC/youhuijuan?id=" + ev.cupons
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
			go_shop(ev) {
				if (ev.alls.video != "" && ev.alls.video != null) {
					return true;
				}
				switch (Number(ev.alls.link)) {
					case 0:
						if (ev.alls.head != "") {
							this.linkOthers(ev.alls.head)
						} else {
							uni.previewImage({
								urls: [this.$imgPath + ev.image],
								longPressActions: {
									itemList: ['发送给朋友', '保存图片', '收藏'],
									success: function(data) {},
									fail: function(err) {}
								}
							});
						}
						break;
					case 1:

						uni.navigateTo({
							url: "../pagesC/Shopping?shopid=" + ev.alls.shopid
						})
						break;
					case 2:
						uni.navigateTo({
							url: "../pagesC/FlagshipDetail?id=" + ev.alls.tc
						})

						break;
					case 3:

						uni.switchTab({
							url: "/pages/Home/About"
						})
						break;
					case 4:
						uni.navigateTo({
							url: "../pagesC/youhuijuan?id=" + ev.alls.cupons
						})
						break;
					default:
				}
			},
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
				this.$api.banner().then(data => {
					if (data.data.code == 1) {
						this.lun_list = [];
						let aa = []
						data.data.data.status.forEach(item => {
							// item.image = this.$imgPath + item.image
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
				this.videoContext = uni.createVideoContext('video')
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
				}).exec();
				this.system = uni.getSystemInfoSync();
				this.zhongjian = parseInt(this.system.screenWidth / 2)
				let windows = parseInt(this.system.screenHeight / (uni.upx2px(100) / 100));
				let nn = parseInt((uni.getStorageSync("bottomheigth") + uni.getStorageSync("setheigth")) / (uni.upx2px(
					100) / 100));
				this.px = parseInt(uni.upx2px(90));
				this.px = parseInt(this.px / (uni.upx2px(100) / 100));
				this.widthwidth = parseInt(this.system.windowWidth / (uni.upx2px(100) / 100)) - this.px;
				this.tabberheigth = windows - nn - this.px;
				this.navbarheigth = parseInt(uni.getStorageSync("navbarheigth") / (uni.upx2px(100) / 100));

			},
		},


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
