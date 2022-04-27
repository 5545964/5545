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
			setTimeout(() => {
				let routes = getCurrentPages() //获取当前页面栈
				let curRoute = routes[routes.length - 1].route
				if (curRoute != "pages/pagesB/tanchuang") {
					this.time = setTimeout(() => {
						this.ended()
					}, 6500)
					this.xianshi = true
				}
			}, 3000)
		},
		data() {
			return {
				xianshi: false,
				time: "",
				videoContext: "",
				path: "",
				// https://wawu-house.oss-cn-shenzhen.aliyuncs.com/api/77b0e5c3c6ee5f8174fa72bb3a399d4d9124e811.m4v
				videosrc: "https://fongwonghk.oss-cn-shenzhen.aliyuncs.com/%E5%AE%9D%E8%8A%B8%E9%82%B8%E5%AE%B6%E5%B1%85%E5%85%AC%E5%8F%B8/%E6%96%B0%E5%AA%92%E4%BD%93%E8%BF%90%E8%90%A5%E9%83%A8/09.%EF%BC%88%E5%85%B7%E4%BD%93%E5%B7%A5%E4%BD%9C%E7%B1%BB%EF%BC%89%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%BC%80%E5%B1%8F%E5%8A%A8%E7%94%BB/01.%EF%BC%88%E5%85%B7%E4%BD%93%E5%B7%A5%E4%BD%9C%E7%B1%BB%EF%BC%89%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%BC%80%E5%B1%8F%E5%8A%A8%E7%94%BB/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%BC%80%E5%B1%8F%E5%8A%A8%E7%94%BBBD-171-005-22110-001.m4v"
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
