<template>
	<view>
		<u-navbar :is-back="false">
			<view class="sssss">
				<image src="../../../static/icon_home_logo.png" mode="aspectFit"></image>
			</view>
		</u-navbar>
		<view class="alldes">
			<!-- 搜索 -->
			<view class="search">
				<view class="seath">
					<u-search bg-color="#fff" @focus="seach_go(888)" v-model="keyword"></u-search>
				</view>
				<view class="upCase" @click="uploadCase">
					上传方案
				</view>
			</view>
			<!-- 设计师 -->
			<view class="designer">
				<view class="designer_left">
					<view class="asdfghjkl">
						<image :src="imgtitle+desinger.avatar" class="imgs" mode=""></image>
					</view>
					<view style="text-align: center;">
						{{desinger.username||''}}
					</view>
				</view>
				<view style="width: 60%;margin-right: 40rpx;">
					<view class="type_list">
						<view class="type_item" v-for="(item,index) in list1" :key="index">
							{{item||""}}
						</view>
					</view>
					<view class="top-ss sss" v-for="(item,index) in list_s" :key="index">
						<view class="dasjbash">
							{{item.name||""}}
						</view>
						<u-line-progress style="width: 100%;height:50rpx ;" active-color="#479ABB" :height="10"
							:show-percent="false" :percent="item.num" />
					</view>
				</view>
			</view>
			<!-- 设计列表 -->
			<view class="design_list">
				<view class="card" style="position: relative;" v-for="(item,index) in desinger.zp" :key="index">
					<image @click="todetails(item)" :src="imgtitle+item.simage" style="border-radius: 20rpx;"
						mode="aspectFit"></image>
					<view @click="todetails(item)" class="gghGG" style="margin-top: 24rpx;">
						{{item.name||""}}
					</view>
					<image v-if="!aaa" @click="sanchu(item)" class="imgss" src="../../../static/icon_close_ico.png"
						mode="aspectFit"></image>
				</view>
				<!-- desinger.zp.length!=0 -->
				<view class="daddasdass" v-if="guanli" @click="aaa = !aaa">
					<text v-if="aaa">管理作品</text><text v-else>完成</text>
				</view>
			</view>
		</view>
		<u-kehu url="../../Home/booking/AppointmentDesign"></u-kehu>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				guanli: false,
				aaa: true,
				imgtitle: this.$imgPath,
				desinger: {},
				list_s: [{
						name: "创意度",
						num: 0
					},
					{
						name: "专业度",
						num: 0
					},
					{
						name: "成单率",
						num: 0
					},
					{
						name: "满意度",
						num: 0
					}
				],
			};
		},
		created() {
			this.alls()
		},
		computed: {
			list1() {
				let list = []
				list = this.desinger.label ? this.desinger.label.split(",") : ""
				return list
			}
		},
		methods: {
			alls() {
				let user_id = uni.getStorageSync("user_info").id
				this.$api.des({
					user_id
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.zp.forEach(item => {
							item.image = item.image.split(",")[0]
						})
						this.desinger = data.data.data.status
						this.list_s[3].num = this.desinger.manyi
						this.list_s[2].num = this.desinger.zy
						this.list_s[1].num = this.desinger.yj
						this.list_s[0].num = this.desinger.cy
						if (this.desinger.zp.length == 0) {
							this.aaa = false
							this.guanli = false
						} else {
							this.aaa = true
							this.guanli = true
						}
						this.$api.desmyuser({
							user_id
						}).then(data => {
							if (data.data.code == 1) {
								let aa = data.data.data.myuser
								uni.setStorageSync("des_info", data.data.data.myuser)
								if (aa.nickname == null || aa.wechat == null || aa.work == null || aa.yb ==
									null) {
									uni.navigateTo({
										url: "../../pagesB/my?isdesign=1"
									})
								}
							}
						})
					} else {
						uni.reLaunch({
							url: "/pages/Home/Investment?is_re=1"
						})
					}
				})
			},
			sanchu(item) {
				let that = this;
				uni.showModal({
					title: '提示',
					content: '是否删除此作品',
					success: function(res) {
						if (res.confirm) {
							that.$api.delefa({
								id: item.id,
								user_id: uni.getStorageSync("des_info")
							}).then(data => {
								if (data.data.code == 1) {
									that.alls()
									uni.showToast({
										title: data.data.msg,
										icon: "success"
									})
								}
							})
						}
					}
				});
			},
			todetails(item) {
				uni.setStorageSync("fdklfjdsfjsfhks", item)
				uni.navigateTo({
					url: "../../pagesC/DesignDetail"
				})
			},
			uploadCase() {
				uni.navigateTo({
					url: "../uploadCase"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.alldes {
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.sssss {
		height: 34rpx;
		width: 290rpx;
		padding: 0 30rpx;
	}

	// 搜索
	.search {
		display: flex;
		align-items: center;
		padding: 30rpx 0rpx;
		box-sizing: border-box;
		justify-content: space-between;

		.seath {
			width: 450rpx;
		}

		.upCase {
			width: 220rpx;
			height: 70rpx;
			background: #007399;
			border-radius: 35rpx;
			font-size: 26rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 70rpx;
		}
	}

	// 设计师
	.designer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		padding: 40rpx 0;

		.imgs {
			border-radius: 50%;
		}

		.designer_left {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-left: 50rpx;
		}

		.type_list {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
		}

		.type_item {
			width: 82rpx;
			height: 26rpx;
			background: #007399;
			border-radius: 8rpx;
			font-size: 16rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 26rpx;
			margin: 6rpx;
		}

		.fsfds {
			margin-top: 20rpx;
		}

		.sss {
			height: 20rpx;
			margin-top: 26rpx;
		}

		.dasjbash {
			width: 24%;
			font-size: 16rpx;
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
			font-size: 16rpx;
			font-weight: 400;
			color: #FFFFFF;
			margin: 0 4rpx;
		}

	}

	.design_list {
		padding-top: 20rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-bottom: 100rpx;

		.imgss {
			width: 50rpx;
			height: 50rpx;
			position: absolute;
			right: -15rpx;
			top: -20rpx;
		}
	}

	.asdfghjkl {
		width: 150rpx;
		height: 150rpx;
		border: 10rpx solid transparent;
		border-radius: 50%;
		background-clip: padding-box, border-box;
		background-origin: padding-box, border-box;
		background-image: linear-gradient(to bottom, #007399, #007399), linear-gradient(135deg, #8ebfce, #3391b0);
	}

	.card {
		width: 335rpx;
		height: 420rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-top: 40rpx;
		font-size: 24rpx;
		color: #000000;
		text-align: center;
		padding: 10rpx;
	}

	.daddasdass {
		margin-top: 160rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background: #e25c5c;
		border-radius: 10rpx;
		font-size: 30rpx;
		font-weight: 400;
		color: #FFFFFF;
		width: 100%;
	}
</style>
