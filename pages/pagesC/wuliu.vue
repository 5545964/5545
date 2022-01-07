<template>
	<view>
		<view class="navbar">
			<u-navbar :is-back="false" :title="title">
				<view class="sssss">
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
		<view style="padding: 30rpx;" class="">
			<view v-if="list.length<=0" style="margin-top: 200rpx;" class="">
				<u-empty text="数据为空" mode="list"></u-empty>
			</view>
			<u-time-line>
				<u-time-line-item v-for="(item,index) in list" :key="index">
					<template v-slot:node>
						<view class="u-node" style="background: #FF4B3C;order-radius: 50%;">
						</view>
					</template>
					<template v-slot:content>
						<view>
							<view class="time">
								{{item.time}}
							</view>
							<view class="toutiao_item">
								<view style="font-size: 32rpx;margin-bottom: 10rpx;font-weight: 800;" class="">
									{{item.status}}
								</view>
								<view style="color: #999999;width: 470rpx;" class="">
									{{item.context}}
								</view>
							</view>
						</view>
					</template>
				</u-time-line-item>
			</u-time-line>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(e) {

			this.$api.lookexpress({
				id:e.id
			}).then(data=>{

				this.list=data.data.data.status.data
			})
		},
		data() {
			return {
				list:[],
				title:"查看物流"
			}
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

<style lang="scss">
.u-node {
		width: 20rpx;
		height: 20rpx;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #FF4B3C;
	}

	.u-order-title {
		color: #FF4B3C;
		font-weight: bold;
		font-size: 32rpx;
	}

	.u-order-desc {
		color: #FF4B3C;
		font-size: 28rpx;
		margin-bottom: 6rpx;
	}

	.u-order-time {
		color: #FF4B3C;
		font-size: 26rpx;
	}

	.time {
		color: #999999;
		margin-bottom: 20rpx;
	}

	.toutiao_item {
		background-color: #f5f5f5;
		padding: 20rpx;
		width: 600rpx;
		border-radius: 20rpx;
		/* margin-left: 20rpx; */
	}
	// 导航
	.navbar {
		.sssss {
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
