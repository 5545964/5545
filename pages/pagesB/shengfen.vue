<template>
	<view style="height: inherit;">
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
		<view class="home">
			<view class="text">
				身份选择
			</view>
			<swiper v-if="list.length != 0" indicator-active-color="#D8AE5F" indicator-color="#000000"
				:style="'height: '+hei+'px;'" @change="lunbo" :indicator-dots="true" :circular="true" :duration="500">
				<swiper-item v-for="(item,index) in list" :key="index">
					<view :id="'id'+ index" class="fdsfhks">
						<view class="fdjlkfsjd">
							<view class="textsda">
								<!-- {{item.name}} -->
							</view>
							<image class="img" src="../../static/xunzhang.png" mode=""></image>
						</view>
						<view class="dsdadreawdew">
							<view class="dasdsadsxzcz">
								{{item.type}}特权：
							</view>
							<view class="" v-html="item.content">

							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
			<u-empty v-else></u-empty>
		</view>
		<view class="boyyty cet" v-if="usershengfen < id" @click="topay">
			<view class="tetx">
				￥{{jiage}}元升级
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: "",
				jiage: 0,
				hei: 10000,
				list: [],
				title: "身份专区",
				userinfo: {},
				isdes: 0,
				usershengfen: "",
				types: "",
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title
			}
			if (ev.isdes) {
				this.isdes = 1
			}
			if (uni.getStorageSync("user_info").bbs !='' && uni.getStorageSync("user_info").bbs !=null) {
				if (this.isdes == 0) {
					this.usershengfen = uni.getStorageSync("user_info").bbs.id
				} else {
					this.usershengfen = uni.getStorageSync("des_info").bbs.id
				}
			}

			this.getdata()
		},
		methods: {
			topay() {
				this.$api.buylevel({
					id: this.id,
					user_id: uni.getStorageSync("user_info").id
				}).then(res => {
					if (res.data.code == 200) {
						let that = this;
						uni.requestPayment({
							timeStamp: res.data.data.timeStamp, //当前的时间
							nonceStr: res.data.data.nonceStr, //随机字符串
							package: res.data.data.package, //统一下单接口返回的 prepay_id 参数值
							signType: res.data.data.signType, //签名算法，暂支持 MD5。
							paySign: res.data.data.paySign, //签名
							success: function(res) {
								uni.showToast({
									title: "购买" + that.types + "成功",
									icon: "success"
								})
								setTimeout(() => {
									uni.navigateBack(-1)
								}, 1000)

							},
							fail: function(err) {

								uni.showToast({
									title: "支付失败",
									icon: "none"
								})
							}
						})
					}
				})
			},
			getdata() {
				this.$api.shenfen({
					type: this.isdes,
					id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							item["name"] = item.type.split("（")[0]
						})
						this.list = [...data.data.data.status]
						this.jiage = this.list[0].money;
						this.id = this.list[0].id
						setTimeout(() => {
							this.gaodu(0)
						}, 500)
					}
				})
			},
			gaodu(ev) {
				if (this.list.length != 0) {
					const query = uni.createSelectorQuery().in(this);
					let id = '#id' + ev
					query.select(id).boundingClientRect(data => {
						this.hei = data.height + 57

					}).exec();
				}
			},
			lunbo(ev) {
				this.jiage = this.list[ev.detail.current].money;
				this.id = this.list[ev.detail.current].id;
				this.types = this.list[ev.detail.current].type
				this.gaodu(ev.detail.current)
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
	.boyyty {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 110rpx;
		background: #FFFFFF;
		padding: 20rpx 30rpx;

		.tetx {
			width: 100%;
			height: 70rpx;
			text-align: center;
			line-height: 70rpx;
			background: linear-gradient(0deg, #F2D5A3, #D8AE5E);
			border-radius: 35rpx;
			font-size: 26rpx;
			font-weight: 800;
			color: #333333;
		}
	}

	.home {
		height: inherit;

		.dsdadreawdew {
			padding: 30rpx;

			.dadvccvx {
				margin-bottom: 30rpx;
				font-size: 26rpx;
				font-weight: 400;
				color: #434242;
				line-height: 40rpx;
			}

			.dasdsadsxzcz {
				padding-bottom: 60rpx;
				font-size: 30rpx;
				font-weight: 400;
				color: #434242;
			}
		}

		.fdsfhks {
			margin: 30rpx;
			background: linear-gradient(0deg, #F2D5A3, #D8AE5E);
			border-radius: 20rpx;
		}

		.fdjlkfsjd {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.textsda {
				text-align: center;
				background-image: url(../../static/xunzhang1.png);
				background-size: cover;
				background-repeat: no-repeat;
				width: 174rpx;
				height: 124rpx;
				line-height: 96rpx;
				font-size: 48rpx;
				font-weight: 400;
				color: #434242;
				margin-left: 40rpx;
				text-overflow: ellipsis;
				word-wrap: normal;
				overflow: hidden;
			}

			.img {
				width: 193rpx;
				height: 247rpx;
			}
		}

		.text {
			padding: 30rpx 30rpx 0 30rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #333333;
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
