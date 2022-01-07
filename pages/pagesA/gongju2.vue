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
		<view class="dskdk">
			<view class="hahaha" v-for="(item,indexs) in mydesigner" :key="indexs" @click="changePage(item)">
				<view class="jdhfd">
					<view>
						<view class="hhi">
							<image class="img imgs" src="../../static/icon_zbout_yuanhuan.png" mode=""></image>
							<image class="img imgd" :src="img + item.avatar" mode=""></image>
						</view>
						<view class="dadasdad">
							{{item.username}}
						</view>
					</view>
					<view class="bottom">
						<view class="top-ss">
							<view class="top" v-for="(items,indexs) in item.list" :key="indexs">
								{{items}}
							</view>
						</view>
						<view class="fsfds">
							<view class="top-ss sss" v-for="(it,ind) in item.list_s" :key="ind">
								<view class="dasjbash">
									{{it.name}}
								</view>
								<u-line-progress style="width: 75%;height:50rpx ;" active-color="#479ABB" :height="10"
									:show-percent="false" :percent="it.num" />
							</view>
						</view>
					</view>
				</view>
				<view class="dsdads">
					<image style="width: 100%;height: 190rpx;" src="../../static/12345.jpg" mode=""></image>
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
		data() {
			return {
				img:this.$imgPath,
				value: 4,
				title: "我的关注",
				list: ['个性创新', "个性", "个性创"],
				mydesigner: [],
				list_s: [{
						name: "满意值",
						num: 70
					},
					{
						name: "满意值",
						num: 60
					},
					{
						name: "满意值",
						num: 50
					}
				],
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title
			}
			this.$api.mydesigner({
				user_id: uni.getStorageSync('user_info').id,
				page: 1,
				limit: 10000
			}).then(data => {
				//todo 数据为空

				data.data.data.status.data.forEach((item, index) => {
					var labels = item.des.label
					this.mydesigner.push({
						id: item.des.id,
						avatar: item.des.avatar,
						username: item.des.username,
						list: labels.split(','),
						list_s: [{
								name: "满意",
								num: item.des.manyi
							},
							{
								name: "创意",
								num: item.des.cy
							},
							{
								name: "业绩",
								num: item.des.yj
							},
							{
								name: "专业",
								num: item.des.zy
							}
						],
						work: item.des.work,
						star: item.star,
						createtime: item.createtime
					})
				});
			})


		},
		methods: {
			changePage(ev) {
				uni.navigateTo({
					url: "/pages/pagesC/ClubStar?id=" + ev.id
				})
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
			position: relative;
		}

		.imgd {
			border-radius: 50%;
		}

		.imgs {
			position: absolute;
			left: 0;
			top: 0;
		}

		.img {
			width: 80rpx;
			height: 80rpx;
		}
	}

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
