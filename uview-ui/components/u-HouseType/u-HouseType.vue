<template>
	<view style="height: 100%;background: #fff;">
		<!-- <view class="cate" @click="show=true">
			筛选分类<image src="../../../static/icon_home_sanjiao.png"
				style="width: 16rpx;height: 10rpx;margin-left: 12rpx;" mode=""></image>
		</view> -->
		<!-- 设计列表 -->
		<!-- <view class="design_list" v-if="cad.length != 0">
			<view class="" v-for="item in cad" :key="item">
				<u-design-card :list="item" />
			</view>
		</view> 
		<u-empty v-else></u-empty> -->
		<u-video v-if="video.length != 0" :vlist="video" @collection="collection" @pinglun="pinglunaa"
			@dianzhan="dianzhan"></u-video>
		<u-empty v-else></u-empty>
		<!-- 弹窗 -->
		<u-pinglun :show="showComment" @zipingjia="pingjia" @fupingjia="pingjia" @chang="changd"
			:pinglun_list="pinglun_list" @guanbi="guanbi"></u-pinglun>
		<u-popup v-model="show" @close="guan" mode="bottom" length="60%" :closeable="true" border-radius="8">
			<view class="klks">全部筛选</view>
			<view class="mids">
				<view class="type_list">
					<view :class="[item.check ? 'active' : 'type_item']" @click="xunhuan(index)"
						v-for="(item,index) in list" :key="index">
						{{item.title}}
					</view>
				</view>
			</view>
			<view class="clos">
				<view class="reset" @click="re">
					重置
				</view>
				<view class="on" @click="change">
					确定选择
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name: "HouseType",
		props: {
			pages: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				dsaa: {},
				pinglun_list: [],
				showComment: false,
				dianzhansssss: false,
				video: [],
				hahah: [],
				show: false,
				sel_list: [],
				list: [],
				cad: [],
				pagess: 0,
				videoindex: 0,
			};
		},
		watch: {
			pages(val) {
				this.pagess = this.pages
				this.alls()
			},
		},
		mounted() {
			this.pagess = this.pages
			this.alls()
			this.$api.huxincategory().then(data => {
				if (data.data.code == 1) {
					data.data.data.status.forEach(item => {
						item["check"] = false;
					})
					this.list = data.data.data.status;
					this.list.forEach(item => {
						this.sel_list.push("")
					})
				}
			})
		},
		methods: {
			// 发表评论
			allsa() {
				this.$api.enjoy({
					user_id: uni.getStorageSync("user_info").id,
					type: 3,
					page: this.pagess,
					limit: 10,
					state: 2
				}).then(data => {
					let aa = []
					data.data.data.status.data.forEach(item => {
						item["iszan"] = false
						item["isfollow"] = false
						if (item.zans) {
							item.iszan = true
						}
						if (item.follow) {
							item.isfollow = true
						}
						item.video = this.$imgs(item.video)
						if (item.state == "2") {
							aa.push(item)
						}
					})
					this.video[this.videoindex].pl = ["",""]
					this.video[this.videoindex].pl = [...aa[this.videoindex].pl]
					if (this.dianzhansssss) {
						this.pinglunaa(this.video[this.indexdas], this.indexdas)
					}
				})
			},
			alls() {
				this.$api.enjoy({
					user_id: uni.getStorageSync("user_info").id,
					type: 3,
					page: this.pages,
					limit: 10,
					state: 2
				}).then(data => {
					if (data.data.data.status.data.length != 0) {
						let aa = []
						data.data.data.status.data.forEach(item => {
							item["iszan"] = false
							item["isfollow"] = false
							// 点赞
							if (item.zans) {
								item.iszan = true
							}
							// 收藏
							if (item.follow) {
								item.isfollow = true
							}
							item.video = this.$imgs(item.video)
							aa.push(item)
						})
						this.video = [...this.video, ...aa]
					}
				})
			},
			async pinglunaa(ev, index) {
				this.videoindex = index
				if (await this.$login()) {
					this.pagess = this.pages
					this.dianzhansssss = true
					this.indexdas = index
					this.pinglun_list = []
					this.pinglun_list = ev.pl
					this.pinglun_list.forEach(item => {
						item["checked"] = false
					})
					this.showComment = true;
					this.itemsss = ev;
				}
			},
			// 点赞
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
							// this.alls()
						}
					})
				}
			},
			// 收藏
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
			guanbi() {
				this.showComment = false;
			},
			changd(text, pla) {
				if (pla == "发表评论请文明用语") {
					this.$api.indexpl({
						userid: uni.getStorageSync("user_info").id,
						content: text,
						image: "#",
						state: 1,
						id: this.itemsss.id
					}).then(data => {
						if (data.data.code == 1) {
							this.allsa()
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
						id: this.itemsss.id
					}).then(data => {
						if (data.data.code == 1) {

							this.alls()
						} else {
							uni.showToast({
								title: "评论失败",
								icon: "none"
							})
						}
					})
				}
			},
			pingjia(item) {
				this.dsaa = item
			},
			guan() {
				this.show = false;
			},
			change() {
				let aa = []
				this.sel_list.forEach(item => {
					if (item !== "") {
						aa.push(item)
					}
				})
				this.chang(aa)
				this.show = false;
			},
			chang(ev) {
				this.$api.huxin({
					id: ev
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							this.cad.push({
								simage: item.image,
								name: item.title,
								id: item.id
							})
						})
					} else {

					}
				})
			},
			re() {
				this.list.forEach(item => {
					item.check = false
				})
			},
			xunhuan(ev) {
				this.list[ev].check = !this.list[ev].check;
				if (this.list[ev].check) {
					this.sel_list[ev] = this.list[ev].id
				} else {
					this.sel_list[ev] = ""
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	.active {
		background: #007399;
		padding: 0 40rpx;
		// width: 210rpx;
		// height: 70rpx;
		border-radius: 35rpx;
		font-size: 26rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 70rpx;
		margin-top: 30rpx;
	}

	.cate {
		width: 750rpx;
		height: 82rpx;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #007399;
	}

	.design_list {
		padding: 0 30rpx;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.klks {
		text-align: center;
		line-height: 100rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: #000000;
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
			// width: 210rpx;
			// height: 70rpx;
			background: #F6F6F6;
			border-radius: 35rpx;
			font-size: 26rpx;
			color: #333;
			text-align: center;
			line-height: 70rpx;
			margin-top: 30rpx;
		}
	}
</style>
