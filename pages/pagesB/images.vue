<template>
	<view style="width: 100%;height: 50%;">
		<view class="navbar">
			<u-navbar :is-back="false" :title="title">
				<view class="navbar_top">
					<view class="dsds cet" @click="back(0)">
						<image class="fanhui" src="@/static/icon_navigation_fanhui.png" mode=""></image>
					</view>
					<view class="hang"></view>
					<view class="dsds cet" @click="back(1)">
						<image class="souye" src="@/static/icon_navigation_house.png" mode=""></image>
					</view>
				</view>
			</u-navbar>
		</view>
		<view class="home">
			<u-cropper :src="u_croppersrc" :zoom="1" :angle="0" :boundDetect="true" @cropped="cropped" @afterDraw="afterDraw"
				@beforeDraw="beforeDraw"></u-cropper>
		</view>
		<image style="width: 500rpx;height: 500rpx;" :src="imgs" mode=""></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgs:"",
				u_croppersrc: "",
				title: "图片处理",
			};
		},
		onLoad(ev) {
			if(ev.img){
				this.u_croppersrc = ev.img
			}
			if(ev.title){
				this.title = ev.title;
			}
		},
		methods: {
			beforeDraw(context, transform) {
				context.setFillStyle('yellow')
				transform.zoom = 2
			},
			afterDraw(ctx, info) {
				ctx.fillText('我是一行文字水印', 20, 20)
				console.log(`当前画布大小：${info.width}*${info.height}`)
			},
			cropped(imagePath, imageInfo) {
				this.imgs = imagePath
				console.log(imagePath, imageInfo)
			},
			back(ev) {
				switch (ev) {
					case 0:
						uni.navigateBack(-1)
						break;
					case 1:
						uni.switchTab({
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
	.home{
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
</style>
