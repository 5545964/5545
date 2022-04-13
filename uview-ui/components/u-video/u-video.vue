<template>
	<view class="home">
		<view class="hahahaaa" v-for="(item,index) in list" :key="index">
			<view class="" style="width: 690rpx;height: 390rpx;margin-bottom: 20rpx;position: relative;">

				<view style="height: 100%;width: 100%;position: absolute;top: 0;left: 0;" class="cet"
					@click="bofang(item)" v-if="item.videos !=0 && item.isimg">
					<view class="">
						<view class="">
							<image src="../../../static/play_one.png" style="width: 100rpx;height: 100rpx;" />
						</view>
						<!-- <view style="text-align: center;color: #FFFFFF;">
							10:39
						</view> -->
					</view>
				</view>


				<image v-if="item.videos !=0 && item.isimg" class="vide" :src="item.videos" @click="bofang(item)" />
				<video v-else :page-gesture="false" :http-cache="false" :title="item.title" :id="'video' + item.id"
					class="vide" :src="item.video" @play="playing" @error="videoErrorCallback"
					play-btn-position="center" enable-auto-rotation />





			</view>
			<view class="dadas" @click="share(item)" v-if="!item.is_hf">
				<button open-type="share" class="dasdxz" style="margin: 0;padding: 0;background-color: #FFFFFF;">
					<image class="img" :src="'../../../static/shiping0.png'" mode="aspectFit"></image>
					<view class="text">
						分享
					</view>
				</button>
				<view class="dasdxz" @click="collection(item)">
					<image class="img" v-show="!item.isfollow" :src="'../../../static/shiping1.png'" mode="aspectFit">
					</image>
					<image class="img" v-show="item.isfollow" :src="'../../../static/shiping1true.png'"
						mode="aspectFit"></image>
					<view class="text">
						收藏
					</view>
				</view>
				<view class="dasdxz" @click="pinglun(item,index)">
					<image class="img" :src="'../../../static/shiping2.png'" mode="aspectFit"></image>
					<view class="text">
						{{item.plnum||0}}
					</view>
				</view>
				<view class="dasdxz" @click="dianzhan(item,index)">
					<image class="img" v-show="!item.iszan" :src="'../../../static/shiping3.png'" mode="aspectFit">
					</image>
					<image class="img" v-show="item.iszan" :src="'../../../static/shiping3true.png'" mode="aspectFit">
					</image>
					<view class="text">
						{{item.zan||0}}
					</view>
				</view>
				<button open-type="contact" class="dasdxz" style="margin: 0;padding: 0;background-color: #FFFFFF;">
					<image class="img" :src="'../../../static/shiping4.png'" mode="aspectFit"></image>
					<view class="text">
						咨询
					</view>
				</button>
			</view>
			<view v-else>
				<button @click="del(item)" class="dasdxz"
					style="margin: 0;padding: 0;background-color: #FFFFFF;justify-content:flex-end">
					<view class="text" style="padding: 0rpx 10rpx;border-radius:10rpx;border:1px solid #606266">
						删除
					</view>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * waterfall 视频播放
	 * @description 这是一个视频播放的组件。
	 * @property Array vlist 视频数据。
	 * @event {Function} collection 收藏回调
	 * @event {Function} pinglun 评论回调
	 * @event {Function} dianzhan 点赞回调
	 * @event {Function} del 删除
	 */

	export default {
		name: "u-video",
		props: {
			vlist: {
				type: Array,
				default () {
					return [];
				}
			},
			scrollTop: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				videoContent: "",
				list: [],
				dijige: 0,
				ghgh: true,
				xuan: {},
				vide: {},
				scrollTops: 0
			}
		},
		watch: {
			vlist(val) {
				this.list = [...this.vlist];
				if (this.list[this.dijige].showComment) {
					this.$emit("pinglun", this.list[this.dijige], this.dijige);
				}
			},
			scrollTop(val) {
				let aa = this.scrollTops + 600
				let bb = this.scrollTops - 600
				// if (aa < val) {
				// 	uni.createVideoContext("video" + this.xuan.id, this).pause()
				// 	uni.createVideoContext(this.vide, this).pause()
				// }
				// if (aa > val) {
				// 	uni.createVideoContext("video" + this.xuan.id, this).pause()
				// 	uni.createVideoContext(this.vide, this).pause()
				// }
			},
		},
		mounted() {
			this.list = [...this.vlist]
		},
		methods: {
			bofang(ev) {
				this.xuan = ev
				this.videoContent = uni.createVideoContext("video" + ev.id, this);
				this.videoContent.play()
				this.scrollTops = this.scrollTop
				ev.isimg = !ev.isimg
			},
			playing(e) {
				let that = this
				that.videoContent = uni.createVideoContext(e.currentTarget.id, that);
				that.vide = e.currentTarget.id
				that.list.forEach(function(item, index) {
					if (item.video != null && item.video != "") {
						let temp = "video" + item.id
						if (temp != e.currentTarget.id) {
							uni.createVideoContext('video' + item.id, that).pause();
							item.isimg = true
						}
					}
				})
				that.videoContent.requestFullScreen();
			},
			share(ev) {
				this.$emit("share", ev);
			},
			collection(ev) {
				this.$emit("collection", ev);
			},
			pinglun(ev, index) {
				this.dijige = index;
				this.$emit("pinglun", ev, index);

			},
			dianzhan(ev, index) {
				if (this.list[index].iszan) {
					this.list[index].zan = this.list[index].zan - 1
				} else {
					this.list[index].zan = this.list[index].zan + 1
				}
				this.$emit("dianzhan", ev);
			},
			del(ev) {
				this.$emit("del", ev);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.hahahaaa {
		background-color: #FFFFFF;
		margin-bottom: 40rpx;
		padding: 30rpx;
	}

	.vide {
		width: 100%;
		// height: 390rpx;
		border-radius: 20rpx;
	}

	.dasdxz {
		display: flex;
		align-items: center;
	}

	.dadas {
		margin-top: 30rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.text {
		margin-left: 5rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: #666666;
	}

	.img {
		width: 40rpx;
		height: 40rpx;
	}

	.home {
		padding: 20rpx 0;
	}
</style>
