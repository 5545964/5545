<template>
	<view class="card" @click="topage()">
		<image :src="img+list.simage" style="border-radius: 20rpx;" mode="aspectFit"></image>
		<view class="gghGG" style="margin-top: 24rpx;">
			{{list.name}}
		</view>
	</view>
</template>

<script>
	export default {
		name: "design-card",
		data() {
			return {
				img: this.$imgPath
			};
		},
		props: {
			list: {
				type: Object,
				default () {
					return {}
				}
			},
			tiaozhuan: {
				type: String,
				default: "./DesignDetail"
			}
		},
		methods: {
			topage() {
				// let aa = this.list
				// console.log(aa);
				// uni.navigateTo({
				// 	url: "./DesignDetail?id=" + JSON.stringify(aa)
				// })
				uni.setStorageSync("fdklfjdsfjsfhks", this.list)
				uni.navigateTo({
					url: this.tiaozhuan
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.gghGG {
		width: 100%;
		overflow: hidden;
		/*超出的部分隐藏起来。*/
		white-space: nowrap;
		/*不显示的地方用省略号...代替*/
		text-overflow: ellipsis;
		/* 支持 IE */
	}

	.card {
		width: 335rpx;
		height: 420rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-top: 20rpx;
		font-size: 24rpx;
		color: #000000;
		text-align: center;
		padding: 10rpx;
	}
</style>
