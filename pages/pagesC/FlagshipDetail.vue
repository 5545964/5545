<template>
	<view class="u-wrap">
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
			<swiper style="width: 100%;height: 450rpx;" :current="currents" :indicator-dots="true" :circular="true"
				:autoplay="autoplay" :interval="3000" :duration="1000" @change="gaizhi">
				<swiper-item v-for="(item,index) in alls.imagexq" :key="index" @click="kaniamgss(item)">
					<image :lazy-load="true" style="width: 100%;height: 450rpx;" :src="img+item.image" mode="aspectFit">
					</image>
				</swiper-item>
				<swiper-item v-if="vr_image != ''">
					<view style="position: relative;height: 100%;">
						<image :lazy-load="true" style="width: 100%;height: 450rpx;" @click="kaniamg(vr_image)"
							:src="img+vr_image" mode="aspectFit">
						</image>
						<view style="top:50%;left: 50%;" class="fdjksfhdsjk cet" @click="goVR(alls)">
							<view class="fsds">
								点击VR
								100%所见所得
							</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item v-if="video != ''">
					<video id="video" :http-cache="false" codec="software" :play-strategy="1" :title="title"
						@play="bofang" @pause="pause" @ended="ended" style="width: 100%;height: 450rpx;"
						:src="video"></video>
				</swiper-item>
			</swiper>
		</view>




		<view class="u-menu-wrap">
			<scroll-view style="height: 520px;" scroll-y scroll-with-animation class="u-tab-view menu-scroll-view"
				:scroll-top="scrollTop">
				<view v-for="(item,index) in tabbar" :key="index" class="u-tab-item"
					:class="index%2==0? 'mian_left_item':'mian_left_item1'"
					:style="current==index?'border-left: 4rpx solid #FD7904;':''" @tap.stop="swichMenu(index)">
					{{item.name||""}}
				</view>
			</scroll-view>
			<scroll-view style="height: 520px;" :scroll-top="scrollRightTop" scroll-y scroll-with-animation
				class="right-box u-tab-views" @scroll="rightScroll" :scroll-into-view="itemId">
				<view class="class-item" :id="'item' + index" v-for="(item,index) in tabbar" :key="index">
					<view :class="index%2==0? 'mian_left_items':'mian_left_item1s'"
						style="text-align:center;height:50rpx;line-height:50rpx;color: #fff;font-size:28rpx;">
						{{item.name||""}}
					</view>
					<view v-if="item.desdesdesdesde == 1">
						<u-designDet id="descard" :info="desInfo" @click="guanzhu" @dianzhan="dianzhan"
							@qushejishi="pinglun" @pinglun="pinglun" @xuanxinxin="xuanxinxin" />
					</view>
					<!-- <u-parse v-if="item.desdesdesdesde == 2" :html="alls.deslg"></u-parse> -->
					<view v-if="item.desdesdesdesde == 0" v-for="(items,indexs) in item.leftdata" :key="indexs">
						<view style="position: relative;">
							<!-- VR -->
							<view :style="'left: '+items.vzb[0]+'px;top: '+items.vzb[1]+'px;'" class="fdjksfhdsjk cet"
								v-if="items.url !='' && items.url !=null" @click="goVR(items)">
								<view class="fsds">
									点击VR
									100%所见所得
								</view>
							</view>
							<!-- 手指拇 -->
							<view class="mengban">
								<view class="kklm" style="width: 100%;height: 100%;" @click="dianjishouzhis(items)"
									v-if="items.fzb[0] && items.fzb[1] && shouzhi == 0">
								</view>
								<image :lazy-load="true" @click="dianjishouzhi(items)"
									:style="'left: '+items.fzb[0]+'px;top: '+items.fzb[1]+'px;'" class="imhjk"
									v-if="items.fzb[0] && items.fzb[1] && shouzhi == 0" src="../../static/gif.gif"
									mode="aspectFit" />
								{{items.shop.photo}}
								<image :lazy-load="true" :src="img+items.shop.photo" mode="widthFix" />
								<!-- <image
									src="https://wawu-house.oss-cn-shenzhen.aliyuncs.com/api/98a44083ef6cb32e2b60fa83d0309f900ba6843f.jpg"
									mode="widthFix"/> -->
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<u-toast ref="uToast" />
		<!-- 底部 -->
		<view class="flag_foot" :style="'height: '+heights+'rpx;'">
			<button class="reset" open-type="contact">咨询客服</button>
			<view class="on" @click="gosheji">
				预约设计
			</view>
		</view>
		<view :style="'height: '+heights+'rpx;'" />
	</view>
</template>
<script>
	export default {
		data() {
			return {
				mobanid: [
					'qFe_Sxyot4g5R2qJhpo5ECIp6TvRjYFY3g-WIVAgjXU'
				],
				autoplay: false,
				videoContext: "",
				desdesdesdesde: 0,
				shouzhi: uni.getStorageSync("shouzhi"),
				heights: "",
				img: this.$imgPath,
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
				heigths: 520,
				currents: 0,
				scrollTop: 0,
				oldScrollTop: 0,
				current: 0,
				menuHeight: 0,
				menuItemHeight: 0,
				itemId: '',
				tabbar: [],
				menuItemPos: [],
				arr: [],
				scrollRightTop: 0,
				timer: null
			}
		},
		onLoad(ev) {
			this.heights = uni.getStorageSync("bottomheigth") +110
			this.shenme_id = ev.id
			this.allss(this.shenme_id)
			this.videoContext = uni.createVideoContext('video')
			uni.showShareMenu({
				withShareTicket: true,
				menus: ['shareAppMessage', 'shareTimeline']
			})
		},
		onShow() {
			this.getMenuItemTop()
			setTimeout(() => {
				this.autoplay = true
			}, 7000)
		},
		methods: {
			gaizhi(ev) {
				let aa = this.alls.imagexq.length
				if (this.vr_image != "") {
					aa += 1
				}
				if (ev.detail.current == aa) {
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
			dianjishouzhi(ev) {
				this.shouzhi = 1
				uni.navigateTo({
					url: "./Shopping?shopid=" + ev.shop.id
				})
				uni.setStorageSync("shouzhi", 0)
			},
			dianjishouzhis(ev) {
				this.shouzhi = 1
				uni.setStorageSync("shouzhi", 0)
			},
			goshop(ev) {
				uni.navigateTo({
					url: "./Shopping?shopid=" + ev
				})
			},
			kaniamgss(ev) {
				if (ev.jump == 0) {
					let aa = [this.img + ev.image]
					uni.previewImage({
						urls: aa,
						longPressActions: {
							itemList: ['发送给朋友', '保存图片', '收藏'],
							success: function(data) {},
							fail: function(err) {}
						}
					});
				} else {
					this.gosheji()
				}

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
			async pinglun(ev) {
				if (await this.$login()) {
					uni.navigateTo({
						url: "./ClubStar?id=" + ev.id
					})
				}
			},
			async xuanxinxin(ev) {
				if (await this.$login()) {
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
				}
			},
			async dianzhan(ev) {
				if (await this.$login()) {
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

							if (aa == 0) {
								this.desInfo.zan = this.desInfo.zan + 1
								this.desInfo.zans = {
									name: 'kkkkkkk'
								}
							} else {
								this.desInfo.zan = this.desInfo.zan - 1
								this.desInfo.zans = null
							}
						}
					})
				}
			},
			async guanzhu(ev) {
				if (await this.$login()) {
					this.$api.desfollow({
						user_id: uni.getStorageSync("user_info").id,
						tes_id: ev.id
					}).then(data => {
						uni.showToast({
							title: data.data.msg,
							duration: 1000,
							icon: "none"
						})
						if (data.data.code == 1) {

							if (this.desInfo.follows != 0) {
								this.desInfo.follows = 0
							} else {
								this.desInfo.follows = 1
							}
						}
					})
				}
			},
			desDetails(ev) {
				this.$api.desxq({
					id: ev,
					user_id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						this.desInfo = []
						this.desInfo = data.data.data.status
						this.desdesdesdesde = 1
					}
				})
			},
			async goVR(ev) {
				if (await this.$login()) {
					uni.navigateTo({
						url: "../Home/URL/URL?url=" + ev.url
					})
					// this.$api.sendsvr({
					// 	user_id: uni.getStorageSync("user_info").id,
					// 	code: ev.url.split('https://720.3vjia.com/')[1],
					// 	mobile: uni.getStorageSync("user_info").mobile,
					// }).then(data => {
					// 	if (data.data.code == 1) {
					// 		// this.$refs.uToast.show({
					// 		// 	title: "购买请打开手机专属VR链接",
					// 		// 	duration: 2000,
					// 		// 	type:"warning",
					// 		// 	url:"/pages/Home/URL/URL?url=" + ev.url
					// 		// })
					// 		// setTimeout(() => {
					// 		// 	uni.navigateTo({
					// 		// 		url: "../Home/URL/URL?url=" + ev.url
					// 		// 	})
					// 		// }, 2000)
					// 	}

					// })

					// let that = this;
					// uni.requestSubscribeMessage({
					// 	provider: 'weixin',
					// 	tmplIds: that.mobanid,
					// 	success: function(res) {
					// 		that.$api.vrnews({
					// 			user_id: uni.getStorageSync("user_info").id,
					// 			news: ev.url
					// 		})
					// 	},
					// 	complete: function(res) {
					// 		uni.navigateTo({
					// 			url: "../Home/URL/URL?url=" + ev.url
					// 		})
					// 	},
					// });
					// uni.showModal({
					// 	title: '提示',
					// 	content: '如要购买，请在浏览器中打开！',
					// 	success: function(res) {
					// 		if (res.confirm) {
					// 			uni.setClipboardData({
					// 				data: ev.url,
					// 				showToast: false,
					// 				success: function() {}
					// 			});
					// 		} else if (res.cancel) {
					// 			uni.navigateTo({
					// 				url: "../Home/URL/URL?url=" + ev.url
					// 			})
					// 		}
					// 	}
					// });
				}
			},
			async gosheji() {
				if (await this.$login()) {
					uni.navigateTo({
						url: "../Home/booking/AppointmentDesign"
					})
				}
			},
			allss(ev) {
				this.$api.setxq({
					id: ev
				}).then(data => {
					if (data.data.code == 1) {
						this.title = data.data.data.status.name;
						data.data.data.status.xq.forEach(item => {
							if (item.fzb != null) {
								item.fzb = item.fzb.split(",")
							}
							if (item.pzb != null) {
								item.pzb = item.pzb.split(",")
							}
							if (item.vzb != null) {
								item.vzb = item.vzb.split(",")
							}
						})
						this.alls = data.data.data.status;
						let mm = data.data.data.left
						let kk = data.data.data.status.xq
						for (var i = 0; i < mm.length; i++) {
							mm[i]["leftdata"] = []
							mm[i]["desdesdesdesde"] = 0
							if (mm[i].id == 1 || mm[i].id == 2) {
								if (this.alls.designer == "") {
									for (var j = 0; j < kk.length; j++) {
										if (mm[i].id == kk[j].leftid) {
											mm[i].leftdata.push(kk[j])
										}
									}
								} else {
									// 设计师
									this.desDetails(this.alls.designer)
									mm[i].desdesdesdesde = 1
								}
							}
							// if (mm[i].id == 2) {
							// 	mm[i].desdesdesdesde = 2
							// }
							// if (mm[i].id != 2 && mm[i].id != 1) {
							if (mm[i].id != 1 && mm[i].id != 2) {
								for (var j = 0; j < kk.length; j++) {
									if (mm[i].id == kk[j].leftid) {
										mm[i].leftdata.push(kk[j])
									}
								}
							}
						}

						this.tabbar = [...mm];
						this.xq = data.data.data.status.xq;

						let img = this.alls.image.split(",")
						let aa = []
						img.forEach(item => {
							aa.push(this.$imgPath + item)
						})
						this.list = []
						this.list.push(...aa)
						if (data.data.data.status.vrimage != '' && data.data.data.status.vrimage != null) {
							// this.$imgPath + 
							this.vr_image = data.data.data.status.vrimage
						}
						if (data.data.data.status.video != '' && data.data.data.status.video != null) {
							this.video = this.$imgs(data.data.data.status.video)
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
			},
			// 点击左边
			async swichMenu(index) {
				if (this.arr.length == 0) {
					await this.getMenuItemTop();
				}
				if (index == this.current) return;
				this.scrollRightTop = this.oldScrollTop;
				this.$nextTick(function() {
					this.scrollRightTop = this.arr[index];
					this.current = index;
					this.leftMenuStatus(index);
				})
			},
			getElRect(elClass, dataVal) {
				new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.' + elClass).fields({
						size: true
					}, res => {
						if (!res) {
							setTimeout(() => {
								this.getElRect(elClass);
							}, 10);
							return;
						}
						this[dataVal] = res.height;
						resolve();
					}).exec();
				})
			},
			async observer() {
				this.tabbar.map((val, index) => {
					let observer = uni.createIntersectionObserver(this);
					observer.relativeTo('.right-box', {
						top: 0
					}).observe('#item' + index, res => {
						if (res.intersectionRatio > 0) {
							let id = res.id.substring(4);
							this.leftMenuStatus(id);
						}
					})
				})
			},
			async leftMenuStatus(index) {
				this.current = index;
				if (this.menuHeight == 0 || this.menuItemHeight == 0) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
					await this.getElRect('u-tab-item', 'menuItemHeight');
				}
				this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
			},
			getMenuItemTop() {
				new Promise(resolve => {
					let selectorQuery = uni.createSelectorQuery();
					selectorQuery.selectAll('.class-item').boundingClientRect((rects) => {
						let aa = []
						if (!rects.length) {
							setTimeout(() => {
								this.getMenuItemTop();
							}, 8000);
							return;
						}
						rects.forEach((rect) => {
							aa.push(rect.top.toFixed(2) - rects[0].top.toFixed(2));
							resolve();
						})
						this.arr = [...aa]

					}).exec()
				})

			},
			async rightScroll(e) {
				this.oldScrollTop = e.detail.scrollTop;
				if (this.arr.length == 0) {
					await this.getMenuItemTop();
				}
				if (this.timer) return;
				if (!this.menuHeight) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
				}
				setTimeout(() => {
					this.timer = null;
					let scrollHeight = e.detail.scrollTop + this.menuHeight / 2;
					for (let i = 0; i < this.arr.length; i++) {
						let height1 = this.arr[i];
						let height2 = this.arr[i + 1];
						if (!height2 || scrollHeight >= height1 && scrollHeight < height2) {
							this.leftMenuStatus(i);
							return;
						}
					}
				}, 10)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-wrap {
		display: flex;
		flex-direction: column;

		image {
			height: auto;
		}
	}

	.u-menu-wrap {
		flex: 1;
		display: flex;

		.mian_left_items {
			background: #305166;
		}

		.mian_left_item1s {
			background: #376379;
		}

		.mian_left_item {
			font-size: 26rpx;
			color: #FFFFFF;
			// padding: 20rpx;
			box-sizing: border-box;
			width: 100rpx;
			background: #305166;
			border-left: 4rpx solid #305166;
		}

		.mian_left_item1 {
			font-size: 26rpx;
			color: #FFFFFF;
			// padding: 20rpx;
			box-sizing: border-box;
			width: 100rpx;
			background: #376379;
			border-left: 4rpx solid #376379;
		}
	}

	.u-tab-view {
		width: 14%;
	}

	.u-tab-views {
		width: 86%;
	}

	.u-tab-item {
		background: #f6f6f6;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #444;
		font-weight: 400;
		padding: 20rpx;
		word-break: break-all;
	}

	.u-tab-item-active {
		position: relative;
		color: #000;
		font-size: 30rpx;
		font-weight: 600;
		background: #fff;
	}

	.u-tab-item-active::before {
		content: "";
		position: absolute;
		border-left: 4px solid $u-type-primary;
		height: 32rpx;
		left: 0;
		top: 39rpx;
	}



	.right-box {
		background-color: rgb(250, 250, 250);
	}

	.class-item {
		font-size: 0;
		// margin-bottom: 30rpx;
	}


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

			z-index: 111;
			margin-left: -60rpx;
			margin-bottom: -60rpx;
		}
	}

	.lunbo {
		width: 100%;
	}

	.fdjksfhdsjk {
		position: absolute;
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
