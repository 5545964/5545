<template>
	<view class="start_page">
		<video :enable-play-gesture="true" :http-cache="false" codec="software" :play-strategy="1" @ended="ended" id="video_play" :src="videosrc" :vslide-gesture-in-fullscreen="false" :loop="false"
			:autoplay="true" object-fit="cover" :page-gesture="false" :controls="false"
			style="height: 100%;width: 100%"></video>
		<view class="skip" @click="ended">
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
			setTimeout(()=>{
				this.ended()
			},1000)
		},
		data() {
			return {
				videoContext:"",
				path: "",
				videosrc: "https://wawu-house.oss-cn-shenzhen.aliyuncs.com/api/77b0e5c3c6ee5f8174fa72bb3a399d4d9124e811.m4v",
			};
		},
		methods: {
			ended() {
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
