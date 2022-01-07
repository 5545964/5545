<template>
	<view class="start_page">
		<video id="video_play" :src="videosrc" 
		:vslide-gesture-in-fullscreen="false" 
		:loop="false" 
		:autoplay="true"
		object-fit="cover" 
		:page-gesture="false" 
		:controls="false" 
		style="height: 100%;width: 100%"></video>


		<view class="skip" @click="skipPage">
			跳过 {{num}}
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.setInterval = setInterval(() => {
				this.num--
				if (this.num == 0) {
					clearInterval(this.setInterval)
					uni.switchTab({
						url: "/pages/Home/Home"
					})
				}
			}, 1000)
		},
		onUnload() {
			clearInterval(this.setInterval)
		},
		data() {
			return {
				videosrc: "https://wawu-house.oss-cn-shenzhen.aliyuncs.com/api/77b0e5c3c6ee5f8174fa72bb3a399d4d9124e811.m4v",
				num: 10,
				url:"https://wawu-house.oss-cn-shenzhen.aliyuncs.com/api/b3959f61a6554fd89c6364781032c0c76a92a018.mp4",
				setInterval: "",
			};
		},
		methods: {
			skipPage() {
				clearInterval(this.setInterval)
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
			// border: 2rpx solid #8e5656;
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
