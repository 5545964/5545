<template>
	<view style="width: 100%;height: 100%;">
		<u-popup v-model="show" mode="center" :maskCloseAble="false" border-radius="20">
			<view class="popimgsss cet">
				<view class="">
					<view class="tetx-cet cde">
						您还未登录
					</view>
					<view class="tetx-cet">
						请登录后在进行操作
					</view>
					<view @click="denglu" class="tetx-cet login">
						立即登录
					</view>
					<view @click="budenglu" class="tetx-cet" style="color: #c2c2c2;">
						暂不登录
					</view>
				</view>
				<image @click="budenglu" style="width: 50rpx;height: 50rpx;position: absolute;top: 20rpx;right: 20rpx;"
					src="@/static/icon_close_ico.png" mode="aspectFit"></image>
			</view>
		</u-popup>
		<u-popup :maskCloseAble="false" width="640" border-radius="20" v-model="phone" mode="center">
			<view class="popup">
				<view class="top"> 提示 </view>
				<view class="cets"> 确认获取手机号</view>
				<view class="xian"> </view>
				<view class="bottoms">
					<view class="sdasas" @click="xuanzhe()"> 取消 </view>
					<button class="czcxc" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">确定</button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	/**
	 * logins 登录弹窗
	 * @property {Boolean} showssss 是否显示遮罩（默认true）
	 */
	export default {
		name: 'u-logins',
		props: {
			showssss: {
				type: Boolean,
				default: true
			},
		},
		data() {
			return {
				show: this.showssss,
				phone: false
			};
		},
		watch: {
			showssss(e, v) {
				this.show = e
			}
		},

		methods: {
			getPhoneNumber(e) {
				let key = uni.getStorageSync("key")
				let WXBizDataCrypt = require("@/utils/cryptojs/RdWXBizDataCrypt.js")
				var pc = new WXBizDataCrypt(key)
				var data = pc.decryptData(e.detail.encryptedData, e.detail.iv)
				let datas = JSON.parse(data)
				if (uni.getStorageSync("user_info").mobile == datas.phoneNumber) {
					this.phone = false
					uni.showToast({
						title: '已有手机号',
						icon: "none",
						duration: 1000
					});
					return
				}
				this.$api.mobile({
					user_id: uni.getStorageSync("user_info").id,
					mobile: datas.phoneNumber
				}).then(data => {
					if (data.data.code == 1) {
						this.phone = false
						uni.showToast({
							title: "获取成功",
							icon: "none"
						})
					}else{
						uni.showToast({
							title: data.data.msg,
							icon: "none"
						})
					}
					
				})
			},
			xuanzhe() {
				this.phone = false;
			},
			async denglu() {
				if (await this.$login()) {
					this.$emit("denglu")
					this.show = false
					this.phone = true
				} else {
					uni.showToast({
						title: "登陆失败，请重试",
						duration: 1000,
						icon: "none"
					})
				}
			},
			budenglu() {
				this.$emit("budenglu")
				this.show = false
			},
		}
	};
</script>

<style lang="scss" scoped>
	.popup {
		.xcvb {
			height: 100%;
			width: 2rpx;
			background: #efefef;
		}

		.czcxc {
			background: #ffffff;
			border: 0;
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

	.popimgsss {
		position: relative;
		width: 542rpx;
		height: 564rpx;
		background-image: url(@/static/logo.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;

		.login {
			padding: 10rpx;
			background: #00688e;
			color: #ffffff;
			border-radius: 10rpx;
			margin: 10rpx;
		}

		.cde {
			padding-top: 200rpx;
			font-size: 30rpx;
			font-weight: bold;
		}

		.tetx-cet {
			text-align: center;
			line-height: 50rpx;
		}
	}
</style>
