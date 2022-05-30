<template>
	<view>
		<!-- 导航 -->
		<view class="navbar">
			<u-navbar :is-back="false" :title="title">
				<view class="sssss">
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
		<!-- 填写基础资料 -->
		<view class="write_msg">
			<view class="write_item">
				<view>
					姓名
				</view>
				<input style="text-align: right;" v-model="names" type="text" value="" placeholder="请输入姓名" />
			</view>
			<view class="write_item">
				<view>
					性别
				</view>
				<u-radio-group v-model="value" @change="radioGroupChange" activeColor="#007399">
					<u-radio v-for="(item, index) in list" :key="index" :name="item.name" :disabled="item.disabled">
						{{item.name}}
					</u-radio>
				</u-radio-group>
			</view>
			<view class="write_item">
				<view>
					手机号
				</view>
				<input style="text-align: right;" v-model="phone" type="number" value="" placeholder="请输入手机号" />
			</view>
			<view class="write_item" v-if="phone!=''">
				<view>
					验证码
				</view>
				<view class="cet" style="justify-content: space-between;width: 60%;">
					<view class="djkshfks" style="background-color: #e5e5e5;padding: 0 30rpx;">
						<u-input inputAlign="left" size="200" v-model="code" maxlength="6" placeholder="请输入验证码"
							type="number" />
					</view>
					<button class="annuyt" @click="go_code">{{huoqu||""}}</button>
				</view>
			</view>
			<view class="write_item">
				<view>
					身份证号码
				</view>
				<input style="text-align: right;" v-model="idcard" type="text" value="" placeholder="请输入身份证号码" />
			</view>
			<view class="write_item">
				<view>
					电子邮箱
				</view>
				<input style="text-align: right;" v-model="emal" type="text" value="" placeholder="请输入电子邮箱" />
			</view>
			<view class="write_item" @click="show = true">
				<view>
					所在地区
				</view>
				<input style="text-align: right;" disabled v-model="address" type="text" value=""
					placeholder="请选择所在地区" />
			</view>
			<view class="write_item">
				<view>
					详细地址
				</view>
				<input style="text-align: right;" v-model="addressxq" type="text" value="" placeholder="请输入详细地址" />
			</view>
		</view>
		<view style="height: 100rpx;">

		</view>
		<!-- 底部提交按钮 -->
		<view class="foot_reg">
			<view class="submit" @click="submit">
				提交
			</view>
		</view>
		<u-city-select v-model="show" @city-change="cityChange" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: "",
				sex: "",
				names: "",
				name: "",
				level: "",
				addressxq: "",
				address: "",
				emal: "",
				idcard: "",
				code: "",
				huoqu: '获取验证码',
				phone: "",
				show: false,
				title: "注册美居合伙人",
				timea: 0,
				list: [{
						name: '男',
						disabled: false
					},
					{
						name: '女',
						disabled: false
					}
				],
				value: '',
				des: 0
			};
		},
		onLoad(ev) {
			this.level = ev.level
			this.name = ev.name
			if (ev.mlml == 1) {
				this.des = 1
				this.title = "注册设计师合伙人"
			}
			let aa = uni.getStorageSync("user_info")
			if (aa) {
				this.phone = aa.mobile
			}
			let bb = uni.getStorageSync("shengfen")
			if (bb != null) {
				this.user = bb
				this.names = this.user.name
				if (this.user.sex == 0) {
					this.sex = 0
					this.value = "男"
				} else if (this.user.sex == 1) {
					this.sex = 1
					this.value = "女"
				}
				this.idcard = this.user.idcart
				this.emal = this.user.email
				this.address = this.user.address
				this.addressxq = this.user.addressxq
			}
		},
		methods: {


			radioGroupChange(ev) {
				if (ev == "男") {
					this.sex = "0";
				} else {
					this.sex = "1";
				}
				this.value = ev
			},
			go_code() {
				if (this.timea == 0) {
					this.$api.emsphone({
						phone: this.phone,
						user_id: uni.getStorageSync("user_info").id
					}).then(data => {
						if (data.data.code == 1) {
							this.timea = 60
							uni.showToast({
								title: "发送成功",
								duration: 1000,
								icon: "none"
							})
							let aa = setInterval(() => {
								this.timea--
								this.huoqu = this.timea + "s后获取"
								if (this.timea == 0) {
									clearInterval(aa)
									this.huoqu = '获取验证码'
								}
							}, 1000)
						} else {
							uni.showToast({
								title: "发送失败",
								duration: 1000,
								icon: "none"
							})
						}
					})
				}
			},
			cityChange(ev) {
				this.address = ev.province.label + ev.city.label + ev.area.label;
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
			},
			// 判断是否移动手机
			isMobile(e) {
				if (null == e || "" == e) return false;
				return /^1[3456789][0-9]{9}$/.test(e);
			},
			// 判断邮箱
			checkEmail(e) {
				return;
			},
			submit() {
				if (!/^1[3-9]\d{9}$/.test(this.phone)) {
					return uni.showToast({
						title: "请检查手机号",
						icon: "none"
					})
				}
				if (!/^\w+((-\w+)|(\.\w+))*@\w+(\.\w{2,3}){1,3}$/.test(this.emal)) {
					return uni.showToast({
						title: "请检查邮箱",
						icon: "none"
					})
				}
				let _IDRe18 =
					/^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
				let _IDre15 = /^([1-6][1-9]|50)\d{4}\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}$/
				if (_IDRe18.test(this.idcard) || _IDre15.test(this.idcard)) {} else {
					return uni.showToast({
						title: "请检查身份证号码",
						icon: "none"
					})
				}
				console.log("pppppppp");
				if (this.code == "" || this.address == "" ||
					this.addressxq == "" || this.level == "" || this.name == "" || this.sex === "") {
					return uni.showToast({
						title: "请检查资料",
						icon: "none"
					})
				}
				this.$api.emsyzphone({
					phone: this.phone,
					yzm: this.code
				}).then(data => {
					if (data.data.code == 1) {
						if (this.des == 0) {
							this.$api.sqb({
								user_id: uni.getStorageSync("user_info").id,
								idcart: this.idcard,
								address: this.address,
								email: this.emal,
								mobile: this.phone,
								level: this.level,
								levelname: this.name,
								addressxq: this.addressxq,
								name: this.names,
								sex: this.sex
							}).then(data => {
								uni.showToast({
									title: data.data.msg,
									duration: 1000,
									icon: "none"
								})
								if (data.data.code == 1) {
									setTimeout(() => {
										uni.reLaunch({
											url: "/pages/Home/User"
										})
									}, 1000)
								}
							})
						}

					} else {
						uni.showToast({
							title: "验证码错误",
							duration: 1000,
							icon: "none"
						})
					}
				})

			}
		}
	}
</script>

<style lang="scss" scoped>
	// 导航
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

	// 填写基本信息
	.write_msg {
		width: 100%;
		background: #FFFFFF;
		padding: 0 30rpx;
		box-sizing: border-box;
		margin: 20rpx 0;

		.write_item {
			padding: 40rpx 0;
			border-bottom: 2rpx solid #eeeeee;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 32rpx;
			color: #333;
		}
	}

	// 上传设计师资质
	.upload_des {
		width: 100%;
		background-color: #FFFFFF;
		padding: 40rpx 30rpx;
		box-sizing: border-box;

		.upload_title {
			font-size: 30rpx;
			color: #333;
		}

		.imgs {
			width: 160rpx;
			height: 160rpx;
			margin-top: 40rpx;
			margin-left: 12rpx;
		}

		.allimg {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
		}

		.closeImg {
			width: 28rpx;
			height: 28rpx;
			position: absolute;
			top: 0;
			right: 0;
		}
	}

	// 底部提交按钮
	.foot_reg {
		width: 100%;
		height: 110rpx;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 0;
		z-index: 10;

		.submit {
			width: 600rpx;
			height: 70rpx;
			background: #007399;
			border-radius: 35rpx;
			font-size: 26rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 70rpx;
		}
	}

	.djkshfks {
		background-color: #e5e5e5;
		height: 100%;
		border-radius: 10rpx;
		width: 200rpx;
	}

	.annuyt {
		font-size: 28rpx;
		margin: 0;
	}
</style>
