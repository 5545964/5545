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
		<view class="home" v-html="fuwenben">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fuwenben: '<div style="text-align:center;">是多么华<img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.klAQWsmPjEL4IUF7KmYxkwHaKY?w=149&h=209&c=7&r=0&o=5&dpr=1.25&pid=1.7" title="11111" alt="11111" />丽的可能看到河南省开封但是还是和社会离开了客户的空间和还大大大大<img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.TjFZjA8cVKYQCsL977m4EwHaHd?w=208&h=209&c=7&r=0&o=5&dpr=1.25&pid=1.7" title="水水水水" alt="水水水水" />是尽快恢复深刻较丰富空间的然后看见上海市科技大会的上课考试</div>',
				title: "详情",
			};
		},
		onLoad(ev) {
			if(ev.title){
				this.title = ev.title;
			}
			this.fuwenben = uni.getStorageSync("fuwenben")
		},
		methods: {
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
		padding: 30rpx;
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
