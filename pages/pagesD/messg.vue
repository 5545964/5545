<template>
	<view style="height: 100%;">
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
		<view class="home">
			<view>
				<view v-for="(item,index) in data_list" :key="index">
					<view class="haha" @click="go(item)">
						<view class="xunhuan">
							<view class="texdasdsas">
								系统派单通知
							</view>
							<view class="cet">
								<view class="daasa">
									查看详情
								</view>
								<image class="img" src="../../static/icon_home_heiseyoufan.png" mode="aspectFit">
								</image>
							</view>
						</view>
						<view class="win">

						</view>
						<view class="neitong">
							<view class="ndjshfks">
								<view class="textsdsa">
									客户姓名：{{item.name||""}}
								</view>
								<view class="textsdsa">
									客户性别：<text v-if="item.sex == 0">男</text><text v-else>女</text>
								</view>
							</view>
							<view class=ndjshfks>
								<view class="textsdsa">
									联系方式：{{item.phone||""}}
								</view>
								<view class="textsdsa">
									项目地址：{{item.city?item.city+item.dire:""}}
								</view>
							</view>
						</view>
					</view>
					<view class="hahahadadda" v-if="item.jdtime =='' || item.jdtime ==null">
						<view class="text qwe" @click="jiedan(index,0)">
							拒绝
						</view>
						<view class="text asd" @click="jiedan(index,1)">
							接单
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-popup width="640" :closeable="true" border-radius="10" v-model="jujue" mode="center">
			<view class="popup">
				<view class="top">
					拒绝该订单说明
				</view>
				<!-- <input type="text" v-model="jujueliyou" /> -->
				<view style="width: 100%;padding: 20rpx;">
					<textarea style="width: 100%;" value="" placeholder="请填写拒绝理由" v-model="jujueliyouss" />
				</view>
				<view class="xian">

				</view>
				<view class="bottoms">
					<view class="sdasas" @click="jujueshanshu(0)">
						取消
					</view>
					<view class="czcxc" @click="jujueshanshu(1)">
						确定
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hhjh: "",
				jujueliyouss: "",
				jujue: false,
				data_list: [],
				title: "站内信息"
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
		},
		onShow() {
			this.getdata()

		},
		methods: {
			jujueshanshu(ev) {
				if (ev != 0) {
					this.$api.desorder({
						bhnew: this.jujueliyouss,
						id: this.data_list[this.hhjh].id,
						state: 0
					}).then(data => {
						if (data.data.code == 1) {
							uni.showToast({
								title: "拒绝成功"
							})
							this.jujue = false;
							this.getdata()
						}
					})
				} else {
					this.jujue = false;
				}
			},
			getdata() {
				this.data_list = []
				this.$api.addnews({
					id: uni.getStorageSync("des_info").id
				}).then(data => {
					if (data.data.code == 1) {
						this.data_list = data.data.data.status
						uni.setStorageSync("addnews", data.data.data.status.length)
					} else {
						uni.setStorageSync("addnews", 0)
					}
				})
			},
			jiedan(index, state) {
				this.hhjh = index;
				if (state == 0) {
					return this.jujue = true;
				} else {
					this.$api.desorder({
						id: this.data_list[index].id,
						state: state
					}).then(data => {
						if (data.data.code == 1) {
							if (state == 1) {
								let aa = {
									title: "接单成功",
									text: "请及时点击美居设计群链接进入业务沟通群进行沟通",
									botton: "我知道了"
								}
								uni.navigateTo({
									url: "./regSuccess?list=" + JSON.stringify(aa)
								})
							}
							if (state == 0) {
								uni.showToast({
									title: "拒绝成功"
								})
								this.data_list.splice(index, 1)
							}
						}
					})
				}

			},
			go(ev) {
				uni.setStorageSync("des_order", ev)
				// let data=ev
				uni.navigateTo({
					url: "./shejishixiangqing?isdes=1&jiedan=1"
				})
			},
			back(ev) {
				switch (ev) {
					case 0:
						uni.navigateBack(-1)
						break;
					case 1:
						uni.reLaunch({
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
	.popup {
		.xcvb {
			height: 100%;
			width: 2rpx;
			background: #EFEFEF;
		}

		.czcxc {
			border-left: 1px solid #EFEFEF;
			text-align: center;
			width: 50%;
			padding: 25rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #007399;
		}

		.sdasas {
			border-right: 1px solid #EFEFEF;
			text-align: center;
			width: 50%;
			padding: 25rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #333333;
		}

		.xian {
			height: 2rpx;
			background: #EFEFEF;
		}

		.bottoms {
			display: flex;
			justify-content: space-around;
			align-items: center;
		}

		.cets {
			text-align: center;
			padding: 50rpx;
			font-size: 26rpx;
			font-weight: 400;
			color: #333333;
		}

		.top {
			height: 90rpx;
			line-height: 90rpx;
			text-align: center;
			background: #007399;
			font-size: 30rpx;
			font-weight: 400;
			color: #FEFEFE;
		}
	}

	.hahahadadda {
		display: flex;
		margin-bottom: 20rpx;

		.qwe {
			background: #E8F2F4;
			border: 2rpx solid #007399;
			border-radius: 0 0 0 10rpx;
			color: #007399;
		}

		.asd {
			color: #FFFFFF;
			background: #007399;
			border-radius: 0 0 10rpx 0;
		}

		.text {
			font-size: 20rpx;
			font-weight: 400;
			width: 100%;
			text-align: center;
			padding: 20rpx;
		}
	}

	.home {
		height: 100%;
		padding: 30rpx;

		.haha {
			padding: 30rpx;
			background: #FFFFFF;
			border-radius: 10rpx 10rpx 0 0;



			.neitong {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.ndjshfks {
					width: 50%;
				}

				.textsdsa {
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					font-size: 26rpx;
					font-weight: 400;
					color: #666666;
					line-height: 36px;
				}
			}

			.win {
				margin: 30rpx 0;
				height: 1rpx;
				background: #DEDEDE;
			}

			.neirong {
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				font-size: 26rpx;
				font-weight: 400;
				color: #666666;
				line-height: 36rpx;
			}

			.texts {
				margin-bottom: 20rpx;
				font-size: 26rpx;
				font-weight: 400;
				color: #333333;
			}
		}

		.jhbkhjjh {
			text-align: center;
			font-size: 20rpx;
			font-weight: 400;
			color: #999999;
			padding-bottom: 20rpx;
		}

		.xunhuan {
			text-align: center;
			font-size: 20rpx;
			font-weight: 400;
			color: #999999;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.img {
				width: 10rpx;
				height: 16rpx;
				margin-left: 10rpx;
			}

			.daasa {
				font-size: 24rpx;
				font-weight: 400;
				color: #999999;
			}

			.texdasdsas {
				font-size: 26rpx;
				font-weight: 400;
				color: #333333;
			}
		}

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
