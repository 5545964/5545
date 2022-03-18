<template>
	<view class="start_page">
		<video :http-cache="false" codec="software" :play-strategy="1" @ended="ended" id="video_play" :src="videosrc"
			:vslide-gesture-in-fullscreen="false" :autoplay="true" :muted="false" object-fit="cover" :controls="false"
			style="height: 100%;width: 100%" />
		<view class="skip" @click="ended" v-if="xianshi">
			跳过
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(ev) {
			if (ev.url) {
				this.path = ev.url
			}
			this.videoContext = uni.createVideoContext('video_play')
			this.time = setTimeout(() => {
				this.ended()
			}, 9500)
			setTimeout(() => {
				this.xianshi = true
			}, 3000)
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
					uni.setStorageSync("edits", data.data.data.edits)
					uni.setStorageSync("kehu", data.data.data.kefu)
					if (uni.getStorageSync("user_info")) {
						uni.setStorageSync("showssss", false)
						return
					}
					uni.setStorageSync("showssss", data.data.data.edit)
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
		data() {
			return {
				xianshi:false,
				time: "",
				videoContext: "",
				path: "",
				videosrc: "https://wawu-house.oss-cn-shenzhen.aliyuncs.com/api/77b0e5c3c6ee5f8174fa72bb3a399d4d9124e811.m4v",
			};
		},
		methods: {
			ended() {
				clearTimeout(this.time)
				this.videoContext.pause()
				uni.switchTab({
					url: "/pages/Home/Home"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.start_page {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;

		.swiper_img {
			width: 100%;
			height: 100%;
		}

		.skip {
			width: 120rpx;
			height: 64rpx;
			font-size: 26rpx;
			color: #FFFFFF;
			background-color: rgba(0, 0, 0, 0.3);
			position: absolute;
			left: 30rpx;
			top: 100rpx;
			box-sizing: border-box;
			text-align: center;
			line-height: 64rpx;
			border-radius: 20rpx;
		}
	}
</style>
