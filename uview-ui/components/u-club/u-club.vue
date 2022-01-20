<template>
	<view>
		<view class="dskdk">
			<view class="hahaha" v-for="(item,indexs) in alls" @click="changePage(item)" :key="indexs">
				<view class="jdhfd">
					<view>
						<view class="hhi">
							<!-- <image class=" imgs" src="@/static/icon_zbout_yuanhuan.png" mode="aspectFit"></image> -->
							<image class=" imgd" :src="item.avatar" mode="aspectFit"></image>
							<!-- {{item.avatar}} -->
						</view>
						<!-- <view class="dadasdad">
							宝芸邸
						</view> -->
					</view>
					<view class="bottom">
						<view class="top-ss">
							<view class="top" v-for="(item1,index) in item.label" :key="index">
								{{item1}}
							</view>
						</view>
						<view class="fsfds">
							<view class="top-ss sss">
								<view class="dasjbash">
									满意度
								</view>
								<u-line-progress style="width: 75%;height:50rpx ;" active-color="#479ABB" :height="10"
									:show-percent="false" :percent="item.manyi" />
							</view>
							<view class="top-ss sss">
								<view class="dasjbash">
									成单率
								</view>
								<u-line-progress style="width: 75%;height:50rpx ;" active-color="#479ABB" :height="10"
									:show-percent="false" :percent="item.yj" />
							</view>
							<view class="top-ss sss">
								<view class="dasjbash">
									专业度
								</view>
								<u-line-progress style="width: 75%;height:50rpx ;" active-color="#479ABB" :height="10"
									:show-percent="false" :percent="item.cy" />
							</view>
							<view class="top-ss sss">
								<view class="dasjbash">
									创意度
								</view>
								<u-line-progress style="width: 75%;height:50rpx ;" active-color="#479ABB" :height="10"
									:show-percent="false" :percent="item.zy" />
							</view>
						</view>
					</view>
				</view>
				<view class="dsdads">
					<image style="width: 100%;height: 190rpx;" :src="imgtitle+item.work[0]" mode="aspectFit"></image>
				</view>
				<view class="name">
					设计师-{{item.username}}
				</view>
				<view class="time">
					{{item.createtime}}
				</view>
				<u-rate v-model="item.star" active-color="#FD7904" :disabled="true"></u-rate>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			rows: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				alls: [],
				imgtitle: this.$imgPath,
				value: 4,
				title: "",
				list: ['个性创新', "个性", "个性创"],
				list_s: [{
						name: "满意",
						num: 70
					},
					{
						name: "业绩",
						num: 60
					},
					{
						name: "专业",
						num: 50
					},
					{
						name: "创意",
						num: 50
					}
				],
			};
		},
		watch: {
			rows(ev) {
				this.alls = [...this.rows]
				console.log(this.alls);
			},
		},
		mounted() {
			this.alls = [...this.rows]
			console.log(this.alls, "this.allsthis.alls");
		},
		methods: {
			// 跳转设计师详情
			changePage(item) {
				this.$emit("navgate", item)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dskdk {
		padding: 20rpx 30rpx;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.hahaha {
		width: 48%;
		background: #FFFFFF;
		border-radius: 20rpx;
		padding: 50rpx 20rpx;
		margin-bottom: 20rpx;


		.time {
			margin-bottom: 20rpx;
			font-size: 20rpx;
			font-weight: 400;
			color: #999999;
		}

		.name {
			margin-bottom: 10rpx;
			margin-top: 40rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #000000;
		}

		.jdhfd {
			display: flex;
			justify-content: space-around;
			align-items: center;
		}

		.dsdads {
			padding: 10rpx;
			margin-top: 40rpx;
			background: #E4E4E4;
			box-shadow: 0rpx 1rpx 7rpx 0rpx rgba(0, 0, 0, 0.3);
			border-radius: 10rpx;
		}

		.dadasdad {
			text-align: center;
			font-size: 12rpx;
			font-weight: 400;
			color: #000000;
		}

		.bottom {
			width: 100%;
			margin-left: 20rpx;

			.fsfds {
				margin-top: 20rpx;
			}

			.sss {
				height: 20rpx;
			}

			.dasjbash {
				width: 25%;
				font-size: 12rpx;
				font-weight: 400;
				color: #333333;
			}

			.top-ss {
				display: flex;
				align-items: center;
			}

			.top {
				padding: 3rpx 6rpx;
				background: #007399;
				border-radius: 4rpx;
				font-size: 12rpx;
				font-weight: 400;
				color: #FFFFFF;
				margin: 0 4rpx;
			}
		}

		.dasdczcz {
			background: #007399;
			border-radius: 4rpx;
			padding: 2rpx 5rpx;
			font-size: 12rpx;
			font-weight: 400;
			color: #FFFFFF;
		}

		.hhi {
			width: 80rpx;
			height: 80rpx;
			border: 5rpx solid transparent;
			border-radius: 50%;
			background-clip: padding-box, border-box;
			background-origin: padding-box, border-box;
			background-image: linear-gradient(to bottom, #007399, #007399), linear-gradient(135deg, #8ebfce, #3391b0);
		}

		.imgd {
			border-radius: 50%;
		}
	}
</style>
