<template>
	<view>
		<view class="navbarssss" v-if="!navber">
			<u-navbar :is-back="false" :title="title">
				<view class="navbar_top">
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
		<view class="home">
			<view class="top" :style="'background-image: url('+backsss+')'">
				<image class="img" src="../../static/login.png" mode="aspectFit"></image>
				<view class="tops">
					<view class="name pad" v-if="userinfo.bbs.id">
						{{userinfo.username||""}}
					</view>
					<view class="name pad" v-else>
						{{userinfo.mpname||""}}
					</view>
					<view class="name" style="font-size:30rpx;margin-bottom:30rpx;" v-if="userinfo.bbs.id">
						{{userinfo.bbs.mpname||""}}
					</view>
					<view class="name" style="font-size:30rpx;margin-bottom:30rpx;" v-else>
						{{userinfo.mpzc||""}}
					</view>
					<view class="text pad">
						{{userinfo.biaoti||"设计师买手整装平台"}}
					</view>
					<view class="add pad">
						{{cardinfo.city||""}}
					</view>
				</view>
			</view>
			<view class="yuan">
				<scroll-view :scroll-x="true">
					<view class="dasds">
						<view class="cet vxcvx" @click="copy(item)" v-for="(item,index) in rinima" :key="index"
							v-if="item.text!=''">
							<image class="img" :src="'../../static/icons'+item.img+'.png'" mode="aspectFit"></image>
							<view class="text" style="width: 100rpx;" v-if="item.js!=''">
								{{item.js}}
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view style="margin: 0 30rpx;">
				<u-parse :html="cardinfo.content"></u-parse>
			</view>
			<view style="padding: 30rpx;background-color: #FFFFFF;" v-if="state==0">
				<u-swiper height="400" :effect3d="true" img-mode="aspectFit" @click="goss" :list="imgList"></u-swiper>
			</view>
		</view>
		<view class="anniuss">
			<view class="kuang">
				<button open-type="share" class="annuiwwww" type="default">
					<image class="img" src="../../static/icon_me_fenxiang.png" mode="aspectFit"></image>
				</button>
			</view>
			<view class="kuang" @click="gohome">
				<image class="img" src="../../static/icon_me_shouye.png" mode="aspectFit"></image>
			</view>
		</view>
		<view class="works"
			style="display:flex;flex-flow:column;justify-content:center;align-items: center;margin-bottom: 60rpx;">
			<view class="title">
				<view class="name">
					小程序二维码
					<view class="bor_bot">

					</view>
				</view>
			</view>
			<view class="homeewm cet">
				<image class="img" @click="kan(ewmsrc)" :src="ewmsrc" mode="widthFix"></image>
			</view>
		</view>
		<view class="works">
			<view class="title">
				<view class="name">
					整装套系
					<view class="bor_bot">

					</view>
				</view>
			</view>
			<u-adata :list="tuijian" @click="go_shop"></u-adata>
		</view>
		<view class="navbar" v-if="navber">
			<u-navbar :is-back="false" title-color="#FFFFFF" :title="title" :background="background">
				<view class="navbar_top">
					<view class="dsds cet" @click="back(0)">
						<image class="fanhui" src="@/static/icon_navigation_fanhuibai.png" mode="aspectFit"></image>
					</view>
					<view class="hang"></view>
					<view class="dsds cet" @click="back(1)">
						<image class="souye" src="@/static/icon_navigation_housebai.png" mode="aspectFit"></image>
					</view>
				</view>
			</u-navbar>
		</view>
		<!-- <view style="position:fixed;top:1000px;">
			<canvas canvas-id="mini_poster" :style="{ width: canvasW + 'rpx', height: canvasH + 'rpx' }"></canvas>
		</view> -->
		<!-- <canvas canvas-id="mini_poster" :style="{ width: canvasW + 'rpx', height: canvasH + 'rpx' }"></canvas> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				canvasW: 750,
				canvasH: 600,
				backsss: this.$imgPath + "/uploads/20220221/7999ee50b489c9084c7861cc5192a74f.jpg",
				tuijian: [],
				imgList: [],
				rinima: [{
						img: "0",
						text: "13800138000",
						state: "phone",
						js: ""
					},
					{
						img: "1",
						text: "109333333@qq.com",
						state: "email",
						js: ""
					},
					{
						img: "2",
						text: "13800138000",
						state: "wechat",
						js: ""
					},
					{
						img: "3",
						text: "13800138000",
						state: "map",
						js: "导航到我的公司！"
					}
				],
				imgtitle: this.$imgPath,
				userinfo: "",
				list: {},
				background: {
					background: ''
				},
				title: "电子名片",
				state: 0,
				cardinfo: {},
				desinfo: {},
				ewmsrc: "",
				latitude: 30.602673,
				longitude: 103.975896,
				wancheng: false,
				imgdown: "",
				navber: true,
				uniup: uni.upx2px(725),
				level: 0
			};
		},
		// 来自页面内分享按钮
		onShareAppMessage(res) {

			if (false) {
				console.log("");
				// let userinfo = {
				// 	mobile: this.userinfo.mobile,
				// 	email: this.userinfo.email,
				// 	wechat: this.userinfo.wechat,
				// 	bewm: this.userinfo.bewm,
				// 	username: this.userinfo.username,
				// 	bbs: {
				// 		id: this.userinfo.bbs.id,
				// 		mpname: this.userinfo.bbs.mpname,
				// 	},
				// 	mpzc: this.userinfo.mpzc,
				// 	biaoti: this.userinfo.biaoti,
				// 	city: this.userinfo.city
				// }
			}
			return {
				title: "宝云邸家居",
				imageUrl: this.imgdown,
				path: "/pages/pagesB/card?share=1&userinfo=" + JSON.stringify(this.userinfo) + "&states=" + this.state +
					"&uid=" + this.userinfo.id + "&level=" + this.level
			}
		},
		onPageScroll(ev) {
			if (ev.scrollTop >= this.uniup) {
				this.navber = false
			} else {
				this.navber = true
			}
		},
		onLoad(ev) {
			// 启动Canvas
			// this.toDrawCanvas()
			if (ev.title) {
				this.title = ev.title;
			}
			if (ev.state) {
				this.state = 1;
			}
			if (ev.share) {
				console.log(JSON.parse(ev.userinfo));
				console.log(ev);
				this.state = ev.states
				this.userinfo = JSON.parse(ev.userinfo)
			} else {
				this.userinfo = uni.getStorageSync("user_info")
			}
			if (this.userinfo.bbs != null) {
				this.level = this.userinfo.bbs.id || 0
			}
			this.getcard()
			if (this.userinfo.mobile != "") {
				this.rinima[0].text = this.userinfo.mobile
			} else if (this.userinfo.email != "") {
				this.rinima[1].text = this.userinfo.email
			} else if (this.userinfo.wechat != "") {
				this.rinima[2].text = this.userinfo.wechat
			}
			this.$api.setcategory().then(data => {
				if (data.data.code == 1) {
					data.data.data.status.forEach(item => {
						if (item.image != null && item.image != "") {
							this.imgList.push({
								image: this.$imgPath + item.image,
								id: item.id
							})
						}

					})
				}
			})
			this.$api.indexcontent().then(data => {
				if (data.data.code == 1) {
					data.data.data.status.sort(function() {
						return Math.random() - 0.5;
					});
					this.tuijian = [];
					data.data.data.status.forEach((item, index) => {
						if (index <= 1) {
							this.tuijian.push({
								id: item.id,
								title: item.name,
								image: item.image,
								video: "",
								alls: item
							})
						}
					})
				} else {
					this.data_list = []
				}
			})
			if (this.userinfo.bewm != "") {
				this.ewmsrc = this.userinfo.bewm
			} else {
				this.$api.ewm({
					id: this.userinfo.id,
					level: this.level,
					type: 0 //B0,D1
				}).then(data => {
					if (data.data.code == 1) {
						this.ewmsrc = data.data.data.status
					}
				})
			}
		},
		methods: {
			toSaveImage() {
				const that = this
				uni.canvasToTempFilePath({
					canvasId: 'mini_poster',
					success: (res) => {
						// uni.downloadFile({
						// 	url: res.tempFilePath,
						// 	success: (res) => {
						// 		this.imgdown = res.tempFilePath
						// 		console.log(res);
						// 	}
						// });
						// uni.saveFile({
						// 	tempFilePath: res.tempFilePath,
						// 	success: function(res) {
						// 		that.imgdown = res.savedFilePath
						// 	}
						// });
						// uni.saveImageToPhotosAlbum({
						// 	filePath: res.tempFilePath,
						// 	success: (res) => {
						// 		console.log(res);
						// 		uni.showToast({
						// 			title: '保存成功'
						// 		})
						// 	},
						// 	fail() {
						// 		uni.showToast({
						// 			icon: 'none',
						// 			title: '保存名片码失败'
						// 		})
						// 	}
						// })
					}
				})
			},
			async toDrawCanvas() {
				let bgPicturePath = await this.downloadImage(this.backsss)
				let ctx = uni.createCanvasContext('mini_poster', this)
				ctx.drawImage(bgPicturePath.tempFilePath, 0, 0, this.canvasW, this.canvasH)
				const imgw = uni.upx2px(555)
				const imgh = uni.upx2px(66)
				const padding60 = uni.upx2px(60)
				const paddingqw = uni.upx2px(70)
				ctx.drawImage("../../static/login.png", padding60, paddingqw, imgw, imgh)
				let top = 180
				const padding100 = uni.upx2px(top)
				const fz48 = uni.upx2px(48)
				ctx.setTextBaseline('top')
				ctx.setTextAlign("left")
				ctx.fillStyle = '#ffffff'
				ctx.setFontSize(fz48)
				ctx.fillText("名片展示姓名", padding60, padding100)
				const padding190 = uni.upx2px(top + 90)
				const fz30 = uni.upx2px(30)
				ctx.setTextBaseline('top')
				ctx.setTextAlign("left")
				ctx.fillStyle = '#ffffff'
				ctx.setFontSize(fz30)
				ctx.fillText("名片展示职务", padding60, padding190)
				const padding280 = uni.upx2px(top + 80 + 80)
				const fz24 = uni.upx2px(24)
				ctx.setTextBaseline('top')
				ctx.setTextAlign("left")
				ctx.fillStyle = '#ffffff'
				ctx.setFontSize(fz24)
				ctx.fillText("名片展示标题", padding60, padding280)
				ctx.draw()
				this.toSaveImage()
			},
			downloadImage(url) {
				return new Promise((resolve, reject) => {
					uni.downloadFile({
						url: url,
						success: (res) => {
							return resolve(res)
						},
						fail: (err) => {
							return reject(err)
						}
					})
				})
			},
			kan(ev) {
				uni.previewImage({
					urls: [ev],
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {},
						fail: function(err) {}
					}
				});
			},
			goss(ev) {
				uni.navigateTo({
					url: "../pagesC/FlagshipSet?id=" + this.imgList[ev].id
				})
			},
			go_shop(ev) {
				uni.navigateTo({
					url: "../pagesC/FlagshipDetail?id=" + ev.id
				})
			},
			// 获取电子名片
			getcard() {
				this.$api.business({
					state: this.state
				}).then(data => {
					if (data.data.code == 1) {
						this.cardinfo = data.data.data.status
					}
				})
			},
			gohome() {
				uni.reLaunch({
					url: "/pages/Home/Home"
				})
			},
			go() {
				let that = this;
				uni.openLocation({
					latitude: Number(that.latitude),
					longitude: Number(that.longitude),
					name: "宝芸邸生活家居(成都体验中心)",
					address: "四川省成都市武侯区成双大道585号旭耀鞋业4栋",
					success: function() {

					},
					fail: function(error) {

					}
				});
			},
			copy(item) {
				switch (item.state) {
					case "map":
						this.go()
						break;
					case "phone":
						uni.makePhoneCall({
							phoneNumber: item.text,
							success: (res) => {},
							fail: (res) => {}
						});
						break;
					default:
						uni.setClipboardData({
							data: item.text.toString(),
							success: function() {}
						});
						break;
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
	.anniuss {
		width: 80rpx;
		height: 180rpx;
		background: #007399;
		border-radius: 40rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: fixed;
		right: 0rpx;
		top: 800rpx;
		z-index: 10000;

		.annuiwwww {
			background-color: #007399;
			padding: 0;
			margin: 0;
			display: flex;
			flex-direction: column;

		}

		.img {
			width: 38rpx;
			height: 38rpx;
		}

		.kuang {
			width: fit-content;
			padding: 20rpx 0;
		}


	}

	.home {
		.yuan {
			overflow: hidden;
			margin: -64rpx 30rpx 30rpx 30rpx;
			background: #FFFFFF;
			box-shadow: 0 0 10rpx 0 rgba(0, 0, 0, 0.2);
			border-radius: 70rpx;

			.vxcvx {
				margin: 0 20rpx;
			}

			.text {
				margin-left: 10rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #666666;
			}

			.dasds {
				padding: 30rpx;
				display: flex;
				align-items: center;
			}

			.img {
				width: 70rpx;
				height: 70rpx;
			}
		}

		.top {
			width: 100%;
			height: 725rpx;
			background-size: cover;
			background-repeat: no-repeat;
			padding: 30rpx;

			.tops {
				padding: 30rpx;

				.pad {
					padding: 30rpx 0;
				}

				.name {
					font-size: 48rpx;
					font-weight: 400;
					color: #FFFFFF;
				}

				.text {
					width: fit-content;
					padding: 15rpx 20rpx;
					background: #FFFFFF;
					opacity: 0.5;
					border-radius: 100rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #007399;
				}

				.add {
					font-size: 24rpx;
					font-weight: 400;
					color: #FFFFFF;
				}
			}

			.img {
				margin-top: 100rpx;
				padding-top: 60rpx;
				width: 555rpx;
				height: 66rpx;
			}
		}
	}

	.navbar {
		height: 1rpx;
		overflow: hidden;

		.navbar_top {
			border: 1px solid #FFFFFF;
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
				background-color: #FFFFFF;
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

	// 优享作品
	.works {
		// padding: 0 30rpx;
		// margin-top: -120rpx;

		.title {
			padding: 50rpx 30rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: center;
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

		.question {
			width: 30rpx;
			height: 30rpx;
			color: #F5625D;
			font-size: 24rpx;
			border: 2rpx solid #F5625D;
			box-sizing: border-box;
			text-align: center;
			line-height: 30rpx;
			border-radius: 50%;
			margin-left: 10rpx;
			margin-top: 10rpx;
		}

		.design_list {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			justify-content: space-between;
		}
	}

	.homeewm {
		width: 690rpx;
		height: 690rpx;
		background: #FFFFFF;
		border-radius: 20rpx;

		.img {
			width: 490rpx;
			height: 490rpx;
			border-radius: 10rpx;
		}
	}

	.navbarssss {
		.navbar_top {
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
