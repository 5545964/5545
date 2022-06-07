<template>
	<view style="width: 100%;height: 100%;">
		<u-popup v-model="show" mode="center" :maskCloseAble="false" border-radius="20" @close="budenglu()">
			<view class="popimgsss cet">
				<view class="">
					<view class="tetx-cet cde">
						您还未登录
					</view>
					<view class="tetx-cet">
						请登录后在进行操作
					</view>
					<view @click="denglu()" class="tetx-cet login">
						立即登录
					</view>
					<view @click="budenglu()" class="tetx-cet" style="color: #c2c2c2;">
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
		<u-popup width="640" border-radius="20" @close="tan=false" v-model="tan" mode="center">
			<view class="popup">
				<view class="top"> 请输入邀请人 </view>
				<view style="padding:40rpx 0 20rpx 0;">
					<u-input v-model="popetext" inputAlign="center" placeholder="请输入" />
				</view>
				<scroll-view scroll-y="true" style="max-height:500rpx;" @scrolltolower="dibu" v-if="pepepe">
					<view style="padding:20rpx 0;">
						<view class="cet" style="margin:10rpx 0;" v-for="(item,index) in peoplelist" :key="index">
							<view class="quanquan">
								<view class="yuan" @click="hahaha(index)">
									<u-icon v-if="item.check" name="checkbox-mark" color="#2979ff" size="28"></u-icon>
								</view>
							</view>
							<view class="cccc">
								{{item.username||""}}
							</view>
						</view>
					</view>
				</scroll-view>
				<view class="xian"> </view>
				<view class="bottoms">
					<view class="sdasas" @click="tan=false"> 取消 </view>
					<button class="czcxc" @click="pope()">确定</button>
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
				phone: false,
				tan: false,
				popetext: "",
				pages: 1,
				peoplelist: [],
				pepepe: true,
			};
		},
		watch: {
			showssss(e, v) {
				this.show = e
			},
			popetext(ev) {
				if (ev == "") {
					this.pepepe = true
				}
				this.pages = 1
				this.likeall()
			}
		},

		methods: {
			dibu(ev) {
				console.log(ev);
				this.pages++
				this.likeall()
			},
			likeall(ev) {
				this.$api.likeuser({
					name: this.popetext,
					page: this.pages
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.data.forEach(item => {
							item["check"] = false
						})
						this.peoplelist = [...this.peoplelist, ...data.data.data.status.data]
					}
				})
			},
			hahaha(item) {
				this.peoplelist[item].check = true
				this.popetext = this.peoplelist[item].username
				this.pepepe = false
			},
			pope() {
				this.$api.yqpeople({
					user_id: uni.getStorageSync("user_info").id,
					name: this.popetext
				}).then(data => {
					if (data.data.code == 1) {
						this.tan = false
					}
				})
			},
			getPhoneNumber(e) {
				console.log(e);
				if (e.detail.errMsg == "getPhoneNumber:fail user deny") {
					this.phone = false
					uni.showToast({
						title: "获取失败",
						icon: "none"
					})
					// setTimeout(() => {
					// 	this.tans()
					// }, 1000);
					return
				}
				let key = uni.getStorageSync("key")
				let WXBizDataCrypt = require("@/utils/cryptojs/RdWXBizDataCrypt.js")
				var pc = new WXBizDataCrypt(key)
				var data = pc.decryptData(e.detail.encryptedData, e.detail.iv)
				let datas = JSON.parse(data)
				if (uni.getStorageSync("user_info").mobile == datas.phoneNumber) {
					this.phone = false
					uni.showToast({
						title: "获取成功",
						icon: "none"
					})
					// setTimeout(() => {
					// 	this.tans()
					// }, 1000);
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
						// setTimeout(() => {
						// 	this.tans()
						// }, 1000);
					} else {
						uni.showToast({
							title: data.data.msg,
							icon: "none"
						})
					}

				})
			},
			tans() {
				if (uni.getStorageSync("token").tan == 1) {
					this.tan = true;
				}
			},
			xuanzhe() {
				this.phone = false;
				// this.tans()
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
	.cccc {
		padding: 0 10rpx;
		width: 70%;
	}

	.quanquan {
		width: 30%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
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
