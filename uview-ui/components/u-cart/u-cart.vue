<template>
	<view class="main">
		<view v-for="(item, index) in csListArrl" :key="index" :data-index="index" class="order-item"
			@click="kanshangping(item)" @touchstart="drawStart" @touchmove="drawMove" @touchend="drawEnd"
			:style="'right:'+item.right+'px'">
			<view class="content">
				<image class="img" :src="item.img" mode=""></image>
				<view class="dasdas">
					<view class="text">
						{{item.title}}
					</view>
					<view class="texts">
						月销：{{item.num}}
					</view>
				</view>
			</view>
			<view class="remove" @click="delData(item,index)">删除</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'u-cart',
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			}
		},
		watch: {
			list(val) {
				this.csListArrl = [...this.list]
			}
		},
		data() {
			return {
				weizhi: 0,
				csListArrl: [],
				delBtnWidth: 65
			}
		},
		mounted() {
			this.csListArrl = [...this.list]
		},
		methods: {
			//开始触摸滑动
			drawStart(e) {
				var touch = e.touches[0];
				this.startX = touch.clientX;
			},
			//触摸滑动
			drawMove(e) {
				for (var index in this.csListArrl) {
					this.$set(this.csListArrl[index], 'right', 0);
				}
				var touch = e.touches[0];
				var item = this.csListArrl[e.currentTarget.dataset.index];
				var disX = this.startX - touch.clientX;
				if (disX >= 20) {
					if (disX > this.delBtnWidth) {
						disX = this.delBtnWidth;
					}
					this.$set(this.csListArrl[e.currentTarget.dataset.index], 'right', disX);
				} else {
					this.$set(this.csListArrl[e.currentTarget.dataset.index], 'right', 0);
				}
			},
			//触摸滑动结束
			drawEnd(e) {
				this.weizhi = e.currentTarget.dataset.index;
				var item = this.csListArrl[e.currentTarget.dataset.index];
				if (item.right >= this.delBtnWidth / 2) {
					this.$set(this.csListArrl[e.currentTarget.dataset.index], 'right', this.delBtnWidth);
				} else {
					this.$set(this.csListArrl[e.currentTarget.dataset.index], 'right', 0);
				}
			},
			//删除方法
			delData(item, index) {
				this.$emit("click", item, index)
			},
			kanshangping(item) {
				this.$emit("kan", item)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		overflow: hidden
	}

	.order-item {
		width: 100%;
		display: flex;
		position: relative;
		margin-bottom: 30rpx;
		align-items: right;
		flex-direction: row;
	}

	.content {
		width: 100%;
		height: 180rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
		padding: 0 30rpx;

		.dasdas {
			margin-left: 30rpx;
		}

		.texts {
			margin-top: 40rpx;
			font-size: 22rpx;
			font-weight: 400;
			color: #999999;
		}

		.text {
			font-size: 24rpx;
			font-weight: 400;
			color: #333333;
		}

		.img {
			width: 140rpx;
			height: 140rpx;
			border-radius: 20rpx;
		}
	}

	.remove {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		right: -130rpx;
		width: 130rpx;
		height: 100%;
		border-radius: 0rpx 10rpx 10rpx 0rpx;
		margin-left: -5%;
		background-color: #FB716E;
		font-size: 30rpx;
		font-weight: 400;
		color: #FFFFFF;
	}
</style>
