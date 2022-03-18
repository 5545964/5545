<template>
	<view class="home">
		<view class="hahahaaa" v-for="(item,index) in list" :key="index">
			<view class="" style="width: 690rpx;height: 390rpx;margin-bottom: 20rpx;">
				<video :page-gesture="false" :http-cache="false" codec="software" :play-strategy="1" :title="item.title"
					:id="'video' + item.id" class="vide" :src="item.video" @play="playing"
					@error="videoErrorCallback" />
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
			}
		},
		data() {
			return {
				videoContent: "",
				list: [],
				dijige: 0,
			}
		},
		watch: {
			vlist(val) {
				if (process.env.NODE_ENV === 'production') {
					this.list = [...this.vlist];
					if (this.list[this.dijige].showComment) {
						this.$emit("pinglun", this.list[this.dijige], this.dijige);
					}
				}

			}
		},
		mounted() {
			if (process.env.NODE_ENV === 'production') {
				this.list = [...this.vlist]
			} else {
				this.list = [{
						title: "1234",
						id: 0,
						video: "https://v26-web.douyinvod.com/a40992880734c282dac22ddb95ab1791/623447d9/video/tos/cn/tos-cn-ve-15-alinc2/bc7ba1ea5c404eafaea66dd528249515/?a=6383&br=658&bt=658&cd=0%7C0%7C0%7C0&ch=26&cr=0&cs=0&dr=0&ds=3&er=&ft=VgcwUVIIL7ThWHZLek2GZ&l=021647589788149fdbddc0300fff0010a80cbd30000067e16852c&lr=all&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k6c2Y6Zjl1ODMzNGkzM0ApZjc3Z2k0Z2VmNzNpNmRlaGcyNXFscjRnLXNgLS1kLWFzc2BgYTRhL18zY2E1MWBjYV46Yw%3D%3D&vl=&vr="
					},
					{
						title: "1234",
						id: 1,
						video: "https://v26-web.douyinvod.com/9c46b5d43f1c29545cad88cd89970596/62344812/video/tos/cn/tos-cn-ve-15-alinc2/f803d7f7b99b4c279877bc74e520a542/?a=6383&br=718&bt=718&cd=0%7C0%7C0%7C0&ch=26&cr=0&cs=0&dr=0&ds=3&er=&ft=5q_lc5mmnPND2jh7HhWwkXAGfdH.CHz2VbZc&l=202203181550300101351601714501976C&lr=all&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzg7NWg6ZnJwODMzNGkzM0ApaTllZzQ4ZmVlNzU5ZTs1M2c0Mmc2cjRfa3FgLS1kLWFzc2EwNi81XzFeMDE1MzNfLi86Yw%3D%3D&vl=&vr="
					},
					{
						title: "1234",
						id: 2,
						video: "https://v26-web.douyinvod.com/d3a6742f52bc646e83733c4e70cce91c/62344821/video/tos/cn/tos-cn-ve-15-alinc2/4cb791a5bf9944d29d2493948ede0208/?a=6383&br=531&bt=531&cd=0%7C0%7C0%7C0&ch=26&cr=0&cs=0&dr=0&ds=3&er=&ft=5q_lc5mmnPND2jh7HhWwkXAGfdH.Cbz2VbZc&l=2022031815505101015119908348024CC0&lr=all&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k2bzQ6Zm45ODMzNGkzM0ApM2c7PDg6M2RoNzo5ZmkzZWdmLnA1cjRfc29gLS1kLS9zcy80Y2NgMS5gNjVfMGM1MGE6Yw%3D%3D&vl=&vr="
					},
					{
						title: "1234",
						id: 3,
						video: "https://v26-web.douyinvod.com/e37ca18177c68a160581366098fcefba/62344833/video/tos/cn/tos-cn-ve-15-alinc2/677cdfeb4353496ab93feac070a64492/?a=6383&br=521&bt=521&cd=0%7C0%7C0%7C0&ch=26&cr=0&cs=0&dr=0&ds=3&er=&ft=5q_lc5mmnPND2jh7HhWwkXAGfdH.C1z2VbZc&l=2022031815511701020801619419001097&lr=all&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajt0aWY6ZjU5ODMzNGkzM0ApPDRkaWlpNGQ6N2czPDtpO2dyY21kcjRnM21gLS1kLWFzc14uMi80MzIwL14vMi5iX2A6Yw%3D%3D&vl=&vr="
					},
					{
						title: "1234",
						id: 4,
						video: "https://v26-web.douyinvod.com/7951adb17a106a606dc78607edaff788/62344d1b/video/tos/cn/tos-cn-ve-15/3d420f12178e4b5ea0c82a8683f02008/?a=6383&br=729&bt=729&cd=0%7C0%7C0%7C0&ch=66&cr=0&cs=0&dr=0&ds=3&er=&ft=5q_lc5mmnPND2jh7HhWwkXAGfdH.CjT2VbZc&l=2022031816121901013301715907005393&lr=all&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzs6dmU6ZjxuNjMzNGkzM0ApNzhkZjk4PDxmNzU6NTg7OmdvZWhvcjRncG5gLS1kLWFzczAuMS9jMjE0Ly9jNWNhYjY6Yw%3D%3D&vl=&vr="
					},
					{
						title: "1234",
						id: 5,
						video: "https://v26-web.douyinvod.com/a2294174168a150903bd789f53dc5a1c/62344cc4/video/tos/cn/tos-cn-ve-15/bed828c2215b4fd7a03612f5d7137674/?a=6383&br=837&bt=837&cd=0%7C0%7C0%7C0&ch=26&cr=0&cs=0&dr=0&ds=3&er=&ft=5q_lc5mmnPND2jh7HhWwkXAGfdH.CUB2VbZc&l=202203181610590101402071454B001FBF&lr=all&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajhocWg6ZjZsNzMzNGkzM0ApOWc7Ojg6N2VlNzY7OmZoOWczZ2lfcjQwNGtgLS1kLWFzczVfXzY1Yi0uLmFiYF9iNDE6Yw%3D%3D&vl=&vr="
					},
					{
						title: "1234",
						id: 6,
						video: "https://v26-web.douyinvod.com/f1b12d70e0f00c85d9fc9d88ef44f497/62344ca4/video/tos/cn/tos-cn-ve-15/1d04edb5b21e43809518d1e5df263f2b/?a=6383&br=685&bt=685&cd=0%7C0%7C0%7C0&ch=26&cr=0&cs=0&dr=0&ds=3&er=&ft=5q_lc5mmnPND2jh7HhWwkXAGfdH.CaS2VbZc&l=202203181610020101940402240F002CA9&lr=all&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2toZDY6ZnNnODMzNGkzM0ApMztlZmRoaTs7N2QzODk7NGdvNDMycjRfMzJgLS1kLWFzczUvXy0tMS0wNTUyMjI2YjQ6Yw%3D%3D&vl=&vr="
					}
				]
			}
		},
		methods: {
			playing(e) {
				let that = this;
				that.vv = e.currentTarget.id; // 获取当前视频id
				that.videoContent = uni.createVideoContext(that.vv, that);
				that.videoContent.requestFullScreen();
				let trailer = that.list;
				trailer.forEach(function(item, index) { // 获取json对象并遍历, 停止非当前视频
					if (item.video != null && item.video != "") {
						let temp = 'video' + item.id;
						if (temp != that.vv) {
							uni.createVideoContext(temp, that).pause(); //暂停视频播放事件
						}
					}
				})
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
