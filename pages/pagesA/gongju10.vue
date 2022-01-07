<template>
	<view style="height: 100%;">
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
		<view class="search">
			<u-search bg-color="#f6f6f6" placeholder="输入关键字搜索"></u-search>
		</view>
		<u-tabs :list="list" :weizhi="false" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<view class="home">
			<view style="height: 100%;" class="" v-if="current == 0">
				<u-empty></u-empty>
			</view>
			<view style="height: 100%;" class="" v-if="current == 1">
				<u-empty></u-empty>
			</view>
			<view style="height: 100%;" class="" v-if="current == 2">
				<u-empty></u-empty>
			</view>
			<view style="height: 100%;" class="" v-if="current == 3">
				<u-empty></u-empty>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				title: "我的报装",
				list: [{
						name: "全部"
					},
					{
						name: "带安排"
					},
					{
						name: "安装中"
					},
					{
						name: "已完成"
					}
				]
			};
		},
		onLoad(ev) {
			this.title = ev.title
		},
		methods: {
			change(ev) {
				this.current = ev
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
	.search {
		padding: 30rpx;
		background-color: #FFFFFF;
	}

	.home {
		height: 100%;
		padding: 30rpx;

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
