<template>
	<view>
		<view class="navbar">
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
		<view class="cet" style="justify-content: space-between;background: #ffffff;padding: 20rpx 0;">
			<view class="cate" @click="shows(0)">
				风格分类
				<image src="../../static/icon_home_sanjiao.png" style="width: 16rpx;height: 10rpx;margin-left: 12rpx;"
					mode="aspectFit"></image>
			</view>
			<view class="cate" @click="shows(1)">
				色调分类
				<image src="../../static/icon_home_sanjiao.png" style="width: 16rpx;height: 10rpx;margin-left: 12rpx;"
					mode="aspectFit"></image>
			</view>
			<view class="cate" @click="shows(2)">
				户型分类
				<image src="../../static/icon_home_sanjiao.png" style="width: 16rpx;height: 10rpx;margin-left: 12rpx;"
					mode="aspectFit"></image>
			</view>
		</view>
		<view class="home">
			<u-video :scrollTop="scrollTop" v-if="video.length != 0" @play="bofang" @ended="ended" :vlist="video"
				@collection="collection" @pinglun="pinglunaa" @dianzhan="dianzhan"></u-video>
			<u-empty v-else></u-empty>
		</view>
		<view>
			<!-- 弹窗 -->
			<u-popup v-model="show" @close="guan" mode="bottom" length="60%" :closeable="true" border-radius="8">
				<view class="klks">全部筛选</view>
				<view class="mids">
					<view class="type_list">
						<view :class="[item.check ? 'active' : 'type_item']" @click="xunhuan(index)"
							v-for="(item,index) in fenleis" :key="index">
							{{item.title||""}}
						</view>
					</view>
				</view>
				<view class="clos">
					<view class="reset" @click="re">
						重置
					</view>
					<view class="on" @click="changesssss">
						确定选择
					</view>
				</view>
			</u-popup>
			<u-pinglun :show="showComment" @zipingjia="pingjia" @fupingjia="pingjia" @chang="chang"
				:pinglun_list="pinglun_list" @guanbi="guanbi"></u-pinglun>
		</view>
		<u-back-top :bottom="200" :scroll-top="scrollTop"></u-back-top>
		<u-heigth />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				style: [],
				color: [],
				huxincategory: [],
				fenleis: [],
				show: false,
				current: 0,
				list: [{
						name: "风格分类"
					},
					{
						name: "色调分类"
					},
					{
						name: "户型分类"
					}
				],
				title: "",
				pinglun_list: [],
				video: [],
				showComment: false,
				dianzhansssss: false,
				sel_list: [],
				itemsss: {},
				lkjh: "",
				dsaa: {},
				indexdas: "",
				pages: 1,
				scrollTop: 0,
				mmkm: {}
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
			this.alls()
			this.$api.style().then(data => {
				if (data.data.code == 1) {
					data.data.data.status.forEach(item => {
						item["check"] = false;
						this.style.push(item)
					})
				}
			})
			this.$api.color().then(data => {
				if (data.data.code == 1) {
					data.data.data.status.forEach(item => {
						item["check"] = false;
						this.color.push(item)
					})
				}
			})
			this.$api.huxincategory().then(data => {
				if (data.data.code == 1) {
					data.data.data.status.forEach(item => {
						item["check"] = false;
						this.huxincategory.push(item)
					})
				}
			})
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onReachBottom(ev) {
			this.pages = this.pages + 1
			this.alls()
		},
		methods: {
			ended(ev) {

			},
			bofang(ev) {

			},
			async pinglunaa(ev, index) {
				if (await this.$login()) {
					this.mmkm = ev
					this.pinglunshuju()
				}
			},
			pinglunshuju() {
				this.$api.videopl({
					id: this.mmkm.id
				}).then(data => {
					if (data.data.code == 1) {
						this.pinglun_list = [...data.data.data.status]
					} else {
						this.pinglun_list = []
					}
					this.showComment = true;
				})
			},
			pingjia(item) {
				this.dsaa = item
			},
			alls() {
				this.$api.enjoy({
					user_id: uni.getStorageSync("user_info").id,
					type: 1,
					page: this.pages,
					limit: 10,
					state: 0
				}).then(data => {
					let aa = []
					this.pages = data.data.data.status.current_page
					if (data.data.data.status.data.length != 0) {
						data.data.data.status.data.forEach(item => {
							item["iszan"] = false
							item["isfollow"] = false
							item["isimg"] = true
							if (item.zans) {
								item.iszan = true
							}
							if (item.follow) {
								item.isfollow = true
							}
							item.video = this.$imgs(item.video)
							item.videos = this.$imgs(item.videos)
							aa.push(item)
						})
						this.video = [...this.video, ...aa]
						if (this.dianzhansssss) {
							this.pinglunaa(this.video[this.indexdas], this.indexdas)
						}
					}

				})
			},
			xunhuan(ev) {
				let aa = this.fenleis
				aa[ev].check = !aa[ev].check;
				if (aa[ev].check) {
					this.sel_list[ev] = aa[ev].title
				} else {
					this.sel_list[ev] = ""
				}
				this.fenleis = aa
			},
			guan() {
				this.show = false;
			},
			shows(ev) {
				if (ev == 0) {
					this.fenleis = this.style
				} else if (ev == 1) {
					this.fenleis = this.color
				} else {
					this.fenleis = this.huxincategory
				}
				this.show = true
			},
			re() {
				this.fenleis.forEach(item => {
					item.check = false
				})
				this.sel_list = []
			},
			changesssss() {
				let aa = []
				this.sel_list.forEach(item => {
					if (item !== "") {
						aa.push(item)
					}
				})

				this.show = false;
			},
			change(ev) {
				this.current = ev
			},
			chang(text, pla) {
				if (pla == "发表评论请文明用语") {
					this.$api.indexpl({
						userid: uni.getStorageSync("user_info").id,
						content: text,
						image: "#",
						state: 1,
						id: this.mmkm.id
					}).then(data => {
						if (data.data.code == 1) {
							this.pinglunshuju()
							this.mmkm.plnum++
						} else {
							uni.showToast({
								title: "评论失败",
								icon: "none"
							})
						}
					})
				} else {
					this.$api.indexplhf({
						pl_id: this.dsaa.pl_id,
						pl_user_id: this.dsaa.pl_user_id,
						userid: uni.getStorageSync("user_info").id,
						content: text,
						image: "#",
						state: 1,
						id: this.mmkm.id
					}).then(data => {
						if (data.data.code == 1) {
							this.pinglunshuju()
							this.mmkm.plnum++
						} else {
							uni.showToast({
								title: "评论失败",
								icon: "none"
							})
						}
					})
				}
			},
			guanbi() {
				this.showComment = false;
			},
			pinglun() {
				this.showComment = true;
			},

			async dianzhan(ev) {
				if (await this.$login()) {
					this.dianzhansssss = false
					let type = ev.zans ? 1 : 0;
					this.$api.zan({
						state: 0,
						video_id: ev.id,
						user_id: uni.getStorageSync("user_info").id,
						type: type
					}).then(data => {
						if (data.data.code == 1) {
							ev.iszan = !ev.iszan
							this.alls()
						}
					})
				}
			},

			async collection(ev) {
				if (await this.$login()) {
					let state = ev.isfollow ? 1 : 0;
					this.$api.addfollow({
						type: 1,
						user_id: uni.getStorageSync("user_info").id,
						shop_id: 0,
						video_id: ev.id,
						state: state
					}).then(data => {

						if (data.data.code == 1) {
							ev.isfollow = !ev.isfollow
						}
					})
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
	.active {
		background: #007399;
		padding: 0 40rpx;


		border-radius: 35rpx;
		font-size: 26rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 70rpx;
		margin-top: 30rpx;
	}

	.cate {
		padding: 0 30rpx;
		background: #FFFFFF;
		color: #007399;
		text-align: center;
	}

	.home {
		width: 100%;
		height: 100%;
	}

	.navbar {
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

	.klks {
		text-align: center;
		line-height: 100rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: #000000;
	}

	.mids {
		padding: 0 30rpx;
		border-top: 2rpx solid #e9e9e9;

		.kongjian {
			margin-top: 40rpx;
			margin-bottom: 30rpx;
		}

		.type_list {
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
		}

		.type_item {
			padding: 0 40rpx;
			background: #F6F6F6;
			border-radius: 35rpx;
			font-size: 26rpx;
			color: #333;
			text-align: center;
			line-height: 70rpx;
			margin-top: 30rpx;
		}
	}

	.clos {
		position: fixed;
		bottom: 40rpx;
		left: 0;
		right: 0;
		margin: 0 30rpx;
		padding: 20rpx 0;
		display: flex;
		align-items: center;
		justify-content: space-between;

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
