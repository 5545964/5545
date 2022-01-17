<template>
	<view class="main" style="width: 100%;">
		<!-- 头部 -->
		<view class="top">
			<view class="">
				<view class="top_name">
					<view class="name" style="text-align: center;">
						设计师-{{alls.username}}
					</view>
					<u-rate @change="xuanxinxin" :count="count" v-model="alls.star" active-color="#FD7904"></u-rate>
				</view>
				<view class="top_num">
					<view class="top_num_item">
						<image src="../../../static/icon_about_time.png" style="width: 24rpx;height: 24rpx;" mode="">
						</image>{{alls.createtime}}
					</view>
					<view class="top_num_item">
						<image src="../../../static/icon_about_eye.png"
							style="width: 24rpx;height: 24rpx;margin-right: 10rpx;" mode="">
						</image>{{alls.look||0}}
					</view>
					<view class="top_num_item">
						<image src="../../../static/icon_about_shou.png"
							style="width: 24rpx;height: 24rpx;margin-right: 10rpx;" mode="">
						</image>{{alls.zan||0}}
					</view>
				</view>
			</view>
			<view class="guanzhu" v-if="alls.follows != 0" @click="guanzhu">
				+关注
			</view>
			<view class="guanzhu" v-else @click="guanzhu">
				已关注
			</view>
		</view>
		<!-- 设计师 -->
		<view class="designer" @click="qushejishi">
			<view class="designer_left">
				<image class="imgd" :src="alls.avatar" mode="aspectFit"></image>
			</view>
			<view class="" style="width: 70%;">
				<view class="type_list">
					<view class="type_item" v-for="(item,index) in list1" :key="index">
						{{item}}
					</view>
				</view>
				<view class="top-ss sss">
					<view class="dasjbash">
						满意
					</view>
					<u-line-progress style="width: 100%;height:50rpx ;" active-color="#479ABB" :height="10"
						:show-percent="false" :percent="alls.manyi" />
				</view>
				<view class="top-ss sss">
					<view class="dasjbash">
						专业
					</view>
					<u-line-progress style="width: 100%;height:50rpx ;" active-color="#479ABB" :height="10"
						:show-percent="false" :percent="alls.zy" />
				</view>
				<view class="top-ss sss">
					<view class="dasjbash">
						业绩
					</view>
					<u-line-progress style="width: 100%;height:50rpx ;" active-color="#479ABB" :height="10"
						:show-percent="false" :percent="alls.yj" />
				</view>
				<view class="top-ss sss">
					<view class="dasjbash">
						创意
					</view>
					<u-line-progress style="width: 100%;height:50rpx ;" active-color="#479ABB" :height="10"
						:show-percent="false" :percent="alls.cy" />
				</view>
			</view>
		</view>
		<view class="dsdads">
			<u-swiper height="380" @click="kantupian" :border-radius="0" :current="currents" :list="swiperList"
				:img-mode="'aspectFit'">
			</u-swiper>
		</view>
		<view class="zan_list">
			<view class="zan_item" @click="pinglun">
				<image src="../../../static/shiping2.png" style="width: 34rpx;height: 34rpx;margin-right: 20rpx;"
					mode=""></image>
				{{alls.plcount||0}}
			</view>
			<view class="zan_item" @click="dianzhan">
				<image v-if="alls.zans !=null && alls.zans != ''" src="../../../static/shiping3true.png"
					style="width: 34rpx;height: 34rpx;margin-right: 20rpx;" mode=""></image>
				<image v-else src="../../../static/shiping3.png" style="width: 34rpx;height: 34rpx;margin-right: 20rpx;"
					mode=""></image>
				{{alls.zan||0}}
			</view>
		</view>
	</view>
</template>

<script>
	import dayjs from "dayjs"
	export default {
		name: 'u-designDet',
		props: {
			info: {
				type: Object,
				default () {
					return {}
				}
			},
			current: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				count: 5,
				swiperList: [],
				list1: [],
				alls: {},
				currents: 0,
				imgtitle: this.$imgPath,
			};
		},
		mounted() {
			this.alls = this.info
		},
		methods: {
			kantupian(ev) {
				let aa = [this.swiperList[ev]]
				uni.previewImage({
					urls: aa,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {},
						fail: function(err) {}
					}
				});
			},
			qushejishi() {
				console.log("跳设计师");
				this.$emit("qushejishi", this.alls)
			},
			xuanxinxin() {
				console.log("选星星");
				this.$emit("xuanxinxin", this.alls)
			},
			dianzhan() {
				console.log("点赞");
				this.$emit("dianzhan", this.alls)
			},
			pinglun() {
				console.log("评论");
				this.$emit("pinglun", this.alls)
			},
			guanzhu() {
				this.$emit("click", this.alls)
			}
		},
		watch: {
			info() {
				this.alls = this.info
				this.alls.createtime = this.alls.createtime * 1000
				this.alls.createtime = dayjs(this.alls.createtime).format('YYYY/MM/DD');
				this.alls.avatar = this.$imgPath + this.alls.avatar;
				if (this.alls.label) {
					this.list1 = [...this.alls.label.split(",")]
				}
				if (this.alls.work) {
					let arrsss = this.alls.work.split(",");
					for (let i = 0; i < arrsss.length; i++) {
						arrsss[i] = this.imgtitle + arrsss[i]
					}
					this.swiperList = [...arrsss];
				}

			},
			current(ev) {
				this.currents = this.current
			},
		},
	}
</script>

<style lang="scss" scoped>
	.main {
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #FFFFFF;

		.top {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.top_name {

			display: flex;
			align-items: center;
		}

		.name {
			font-size: 32rpx;
			color: #000000;
			margin-right: 20rpx;
		}

		.top_num {
			display: flex;
			align-items: center;
			margin-top: 30rpx;
		}

		.top_num_item {
			display: flex;
			align-items: center;
			margin-right: 50rpx;
			font-size: 24rpx;
			color: #999;
		}

		.guanzhu {
			width: 140rpx;
			height: 60rpx;
			background: #007399;
			border-radius: 30rpx;
			font-size: 24rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 60rpx;
		}
	}

	// 设计师
	.designer {
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding-top: 20rpx;
		border-top: 2rpx solid #F6F6F6;
		margin-top: 40rpx;

		.imgd {
			border-radius: 50%;
		}

		.designer_left {
			width: 150rpx;
			height: 150rpx;
			border: 10rpx solid transparent;
			border-radius: 50%;
			background-clip: padding-box, border-box;
			background-origin: padding-box, border-box;
			background-image: linear-gradient(to bottom, #007399, #007399), linear-gradient(135deg, #8ebfce, #3391b0);
		}

		.type_list {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
		}

		.type_item {
			background: #007399;
			border-radius: 8rpx;
			font-size: 16rpx;
			color: #FFFFFF;
			text-align: center;
			margin-right: 16rpx;
			padding: 6rpx 20rpx;
			margin-bottom: 20rpx;
		}

		.fsfds {
			margin-top: 20rpx;
		}

		.sss {
			height: 20rpx;
			margin-top: 26rpx;
		}

		.dasjbash {
			width: 20%;
			font-size: 16rpx;
			font-weight: 400;
			color: #333333;
			margin-right: 20rpx;
			text-align: center;
		}

		.top-ss {
			display: flex;
			align-items: center;
			justify-content: flex-start;
		}

		.top {
			padding: 3rpx 6rpx;
			background: #007399;
			border-radius: 4rpx;
			font-size: 16rpx;
			font-weight: 400;
			color: #FFFFFF;
			margin: 0 4rpx;
		}

	}

	.dsdads {
		padding: 10rpx;
		background: #E4E4E4;
		box-shadow: 0rpx 1rpx 7rpx 0rpx rgba(0, 0, 0, 0.3);
		border-radius: 10rpx;
		width: 100%;
		margin: auto;
		margin-top: 80rpx;
	}

	.zan_list {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-top: 40rpx;
		margin-bottom: 20rpx;

		.zan_item {
			display: flex;
			align-items: center;

		}
	}
</style>
