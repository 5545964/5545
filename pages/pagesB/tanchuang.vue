<template>
	<view>
		<u-popup width="500" border-radius="30" v-model="yuedu" mode="center">
			<view class="yueduwo">
				<view class="text">
					服务协议和隐私政策
				</view>
				<view class="textss" v-if="goumai">
					感谢您使用宝芸邸，我们会严格
					按照法律规定存储和使用您的个人
					信息。您可以阅读以下几项条款了
					解详细信息。如您同意，请勾选以
					下几项条款并点击”同意”开始接受
					我们的服务。
				</view>
				<view class="textss" v-else>
					感谢您使用宝芸邸，您的合约已到期， 请续约
				</view>
				<view style="padding:20rpx 0;">
					<view class="cet" style="margin:10rpx 0;" v-for="(item,index) in xieyi"
						:key="index">
						<view style="display:flex;justify-content: flex-end;align-items:center;">
							<view class="yuan" @click="hahaha(item)" v-if="goumai">
								<u-icon v-if="item.check" name="checkbox-mark" color="#2979ff" size="28"></u-icon>
							</view>
						</view>
						<view style="padding: 0 10rpx;">
							<view class="mingcheng" @click="fuwenben(item)">
								《{{item.name||""}}》
							</view>
						</view>
					</view>
				</view>
				<button class="djsa" open-type="contact">
					客服
				</button>
				<view class="anniusss">
					<navigator class="hkhnij" target="miniProgram" open-type="exit" @click="clea" v-if="goumai">
						退出小程序
					</navigator>
					<view class="hkhnij" target="miniProgram" open-type="exit" @click="quxiao" v-else>
						取消
					</view>
					<view class="hkhnij jjhgj" @click="tongyixieyi()" v-if="goumai">
						同意协议
					</view>
					<view class="hkhnij jjhgj" @click="go()" v-else>
						去购买续约
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
				yuedu: true,
				xieyi: [],
				agid: 0,
				lpid: 0,
				goumai: true,
				state: 999
			};
		},
		onLoad(ev) {
			this.yuedu = true
			uni.setStorageSync("yanzheng", false)
			this.agid = ev.agid;
			this.lpid = ev.lpid;
			let aa = uni.getStorageSync("xieyi")
			aa.forEach(item => {
				if (item.id == this.agid) {
					if (this.lpid == 22222) {
						this.state = item.state
					}
					this.xieyi.push(item)
				}
			})
			if (this.lpid == 22222) {
				this.goumai = false
			}
		},
		methods: {
			//合约到期
			quxiao() {
				let aa = 0
				if (this.state == 0 || this.state == 8 || this.state == 9) {
					aa = 0
				} else if (this.state == 1 || this.state == 11 || this.state == 10) {
					aa = 1
				}
				this.$api.qxment({
					state: aa,
					agid: this.agid,
					user_id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						uni.setStorageSync("yanzheng", true)
						this.yuedu = false
						uni.reLaunch({
							url: "/pages/Home/Home"
						})
					}
				})
			},
			go() {
				uni.reLaunch({
					url: "/pages/pagesB/shengfen"
				})
			},
			clea() {
				uni.clearStorageSync()
			},
			tongyixieyi() {
				let mm = 0
				let aa = []
				this.xieyi.forEach(item => {
					if (item.check) {
						mm++
						aa.push(item)
					}
				})
				if (this.xieyi.length != mm) {
					return uni.showToast({
						title: "请阅读并同意协议",
						icon: "none"
					})
				}
				aa.forEach(item => {
					this.$api.userag({
						userid: uni.getStorageSync("user_info").id,
						agid: item.id,
						lpid: this.lpid
					})
				})
				uni.setStorageSync("yanzheng", true)
				this.yuedu = false
				uni.reLaunch({
					url: "/pages/Home/Home"
				})
			},
			tongyi(ev) {
				if (ev == 1) {
					this.yuedu = true;
				} else {
					this.yuedu = false;
				}
			},
			hahaha(item) {
				item.check = !item.check
			},
			fuwenben(ev) {
				uni.setStorageSync("fuwenbeng", ev.content)
				uni.navigateTo({
					url: "../pagesC/fuwenben?title=" + ev.name
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.djsa {
		top: 40%;
		left: 2%;
		padding: 0;
		position: fixed;
		text-align: center;
		font-size: 30rpx;
		font-weight: 400;
		color: #666666;
		width: 100rpx;
		height: 100rpx;
		background: #ffffff;
		border-radius: 50%;
		line-height: 100rpx;
	}

	.popup {
		.xcvb {
			height: 100%;
			width: 2rpx;
			background: #efefef;
		}

		.czcxc {
			border-left: 1px solid #efefef;
			text-align: center;
			width: 50%;
			padding: 25rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #007399;
		}

		.sdasas {
			border-right: 1px solid #efefef;
			text-align: center;
			width: 50%;
			padding: 25rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #333333;
		}

		.xian {
			height: 2rpx;
			background: #efefef;
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
			color: #fefefe;
		}
	}

	.home {
		.swiper {
			.swiper-item {
				margin-bottom: 30rpx;
				border-radius: 10rpx;
				background-color: #ffffff;
				padding: 30rpx;
				margin: 30rpx;

				.anniu {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					margin-top: 30rpx;

					.button:last-child {
						padding: 15rpx 25rpx;
						background: #e8f2f4;
						border: 2rpx solid #007399;
						border-radius: 30rpx;
						font-size: 20rpx;
						font-weight: 400;
						color: #007399;
						margin-left: 20rpx;
					}

					.button {
						padding: 15rpx 25rpx;
						background: #efefef;
						border-radius: 30rpx;
						font-size: 20rpx;
						font-weight: 400;
						color: #333333;
						margin-left: 20rpx;
					}
				}

				.kfhkjsdh {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.text {
						font-size: 24rpx;
						font-weight: 400;
						color: #333333;
					}

					.red {
						font-size: 24rpx;
						font-weight: 400;
						color: #db1625;
					}

					.status {
						font-size: 24rpx;
						font-weight: 400;
						color: #db0e1e;
					}
				}

				.centre {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					margin-bottom: 20rpx;

					.fsdfsfs {
						color: #000000;
					}

					.fdsds {
						font-size: 22rpx;
						font-weight: 400;
						color: #666666;
					}

					.name {
						margin-bottom: 40rpx;
						font-size: 24rpx;
						font-weight: 400;
						color: #333333;
					}

					.img {
						border-radius: 20rpx;
						width: 160rpx;
						height: 160rpx;
					}
				}

				.top {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 30rpx 0;
					margin-bottom: 30rpx;
					border-bottom: 1px solid #f6f6f6;

					.status {
						padding: 5rpx 10rpx;
						background: #fc716a;
						border-radius: 4rpx;
						font-size: 20rpx;
						font-weight: 400;
						color: #ffffff;
					}

					.text {
						font-size: 24rpx;
						font-weight: 400;
						color: #333333;
					}
				}
			}
		}

		.search {
			padding: 30rpx;
			background-color: #ffffff;
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

	.yueduwo {
		background-color: #FFFFFF;

		.jjhgj {
			color: #2979ff;
			font-size: 30rpx;
			font-weight: bold;
			border-left: 1px solid #b9b9b9;
		}

		.hkhnij {
			width: 100%;
			height: 100%;
			padding: 26rpx 0;
			text-align: center;

		}

		.anniusss {
			display: flex;
			border-top: 1px solid #b9b9b9;
		}

		.mingcheng {
			color: #2979ff;
		}

		.yuan {
			width: 30rpx;
			height: 30rpx;
			border: 1px solid #000000;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
		}

		.textss {
			padding: 0 26rpx;
			text-align: center;
			font-weight: bold;
			font-size: 30rpx;
		}

		.text {
			text-align: center;
			line-height: 100rpx;
			font-weight: bold;
			font-size: 30rpx;
		}
	}

	.yanzhengma {
		margin: 50rpx 0px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.djkshfks {
			background-color: #e5e5e5;
			height: 100%;
			border-radius: 10rpx;
			width: 230rpx;
		}

		.annuyt {
			font-size: 28rpx;
			margin: 0;
		}
	}
</style>
