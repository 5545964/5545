<template>
	<view>
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
			<view class="dfhkjdsh">
				<view class="jiben">
					基本信息
				</view>
				<view class="dsadsa">
					<view class="name">
						真实姓名
					</view>
					<view class="name">
						<u-input inputAlign="right" size="200" v-model="name" placeholder="请填写真实姓名" type="text" />
					</view>
				</view>
				<view class="dsadsa">
					<view class="name">
						手机号码
					</view>
					<view class="name">
						<u-input inputAlign="right" size="200" v-model="pgone" placeholder="请填写您的手机号码" type="number" />
					</view>
				</view>
				<view class="dsadsa">
					<view class="name">
						短信验证码
					</view>
					<view class="yanzhengma">
						<view class="cet" style="justify-content: space-around;width: 100%;">
							<view class="djkshfks" style="background-color: #e5e5e5;padding: 0 30rpx;">
								<u-input inputAlign="left" size="200" v-model="code" placeholder="请输入验证码"
									type="number" />
							</view>
							<button class="annuyt" @click="go_code">{{huoqu}}</button>
						</view>
					</view>
				</view>
				<view class="dsadsa">
					<view class="name">
						身份证号码
					</view>
					<view class="name" style="width: 70%;">
						<u-input inputAlign="right" size="200" v-model="card_id" placeholder="请填写您的身份证号码"
							type="number" />
					</view>
				</view>
			</view>
			<view class="shangchuan">
				<view class="jiben">
					上传身份证<text class="dasad">（确保证件清晰完整、属于本人）</text>
				</view>
				<view class="dsadsa">
					<view class="renxiang cet">
						<u-upload :action="action" @on-remove="remove" @on-success="success" BackColor="#FFFFFF"
							:imgUrl="renxiang_bg" width="600" height="480" max-count="1" :header="header"
							:form-data="formData" :name="upname" size-type="compressed">
						</u-upload>
					</view>
					<view class="guohui cet">
						<u-upload :action="action" @on-remove="removes" @on-success="successs" BackColor="#FFFFFF"
							:imgUrl="guohui_bg" width="600" height="480" max-count="1" :header="header"
							:form-data="formData" :name="upname" size-type="compressed">
						</u-upload>
					</view>
				</view>
			</view>
			<view class="dfhkjdsh">
				<view class="jiben">
					银行卡信息
				</view>
				<view class="dsadsa">
					<view class="name">
						银行卡号
					</view>
					<view class="name" style="width: 70%;">
						<u-input inputAlign="right" size="200" v-model="yinghangka" placeholder="请填写银行卡号"
							type="number" />
					</view>
				</view>
				<view class="dsadsa">
					<view class="name">
						银行卡开户行
					</view>
					<view class="name">
						<u-input inputAlign="right" size="200" v-model="kaihuhang" placeholder="请填写您的银行卡开户行"
							type="text" />
					</view>
				</view>
			</view>
		</view>
		<u-toast ref="uToast" />
		<!-- <view style="height: 110rpx;">
		</view> -->
		<view class="bottomssss cet">
			<view class="dasdasdxzxcx" @click="tijiao">
				提交
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				huoqu: "获取验证码",
				timea: 0,
				code: "",
				zhen: "/uploads/20220225/aa244369646aea5b3024e9491760f969.jpg",
				bei: "/uploads/20220225/736b8b68834b200ae90d2e6d9178c122.jpg",
				renxiang_bg: require('../../static/renxiang_bg.png'),
				guohui_bg: require('../../static/guohui_bg.png'),
				upname: "image", //上传
				formData: {}, //上传
				header: {}, //上传
				action: this.$shangchuan + "/api/byd_user/addpostspic", //图片上传接口
				name: "",
				pgone: "",
				card_id: "",
				yinghangka: "",
				kaihuhang: "",
				title: "上传身份信息",
				aa: {},
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
		},
		methods: {
			successs(ev) {
				this.bei = ev.data.status
				uni.showToast({
					title: "背面上传成功",
					icon: "success"
				})
			},
			removes(ev) {
				this.bei = ''
			},
			success(ev) {
				this.zhen = ev.data.status
				uni.showToast({
					title: "正面上传成功",
					icon: "success"
				})
			},
			remove(ev) {
				this.zhen = ''
			},
			dsada() {
				this.$api.realname({
					user_id: uni.getStorageSync("user_info").id,
				}).then(data => {
					if (data.data.code == 1) {
						let list = {
							title: "提交成功",
							text: "你的提佣申请已提交成功",
							botton: "我知道了",
							navbar: "提交成功"
						}
						uni.navigateTo({
							url: "../pagesD/regSuccess?list=" + JSON.stringify(list) + "&tiao=2"
						})
					} else {
						this.$refs.uToast.show({
							title: data.data.data.data
						})
					}
				})
			},
			tijiao() {
				let user_id = uni.getStorageSync("user_info").id
				if (this.yinghangka == "" || this.kaihuhang == "" || this.card_id == "" || this.name == "" || this.pgone ==
					"" || this.zhen == "" || this.bei == "" || this.code == "") {
					return uni.showToast({
						title: "请检查资料",
						icon: "error"
					})
				}
				// 验证验证码
				this.$api.emsyzphone({
					phone: this.pgone,
					yzm: this.code
				}).then(data => {
					if (data.data.code != 1) {
						return uni.showToast({
							title: "验证码错误",
							icon: "none"
						})
					}
					if (data.data.code == 1) {
						uni.showLoading({
							title: '上传中',
							mask: true
						});
						// 先注册
						this.$api.myreg({
							phone: this.pgone,
							user_id: user_id
						}).then(data => {
							if (data.data.code == 1) {
								// 上传身份证正面
								this.$api.userupload({
									user_id: user_id,
									image: this.zhen,
									type: 0
								}).then(data => {
									if (data.data.code == 1) {
										// 请上传身份证背面
										this.$api.userupload({
											user_id: user_id,
											image: this.bei,
											type: 1
										}).then(data => {
											if (data.data.code == 1) {
												// 上传银行卡信息
												this.$api.zhxmy({
													userid: user_id,
													bankid: this.yinghangka,
													bankname: this.kaihuhang,
													idcardnum: this.card_id,
													realname: this.name
												}).then(data => {
													uni.hideLoading();
													if (data.data.code == 1) {
														this.dsada()
													} else {
														this.$refs.uToast.show({
															title: data
																.data.msg
														})
													}
												})
											} else {
												uni.hideLoading();
												this.$refs.uToast.show({
													title: data.data.msg + "重试"
												})
											}
										})
									} else {
										uni.hideLoading();
										this.$refs.uToast.show({
											title: data.data.msg
										})
									}
								})
							} else {
								uni.hideLoading();
								this.$refs.uToast.show({
									title: "请修改信息重试!"
								})
								this.yinghangka == ""
								this.kaihuhang == ""
								this.card_id == ""
								this.name == ""
								this.pgone == ""
								this.zhen == ""
								this.bei == ""
								this.code == ""
							}
						})
					}
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
			},
			// 获取验证码
			go_code() {
				if (this.pgone != "") {
					if (this.timea == 0) {
						this.$api.emsphone({
							phone: this.pgone,
							user_id: uni.getStorageSync("user_info").id
						}).then(data => {
							if (data.data.code == 1) {
								this.code = ""
								uni.showToast({
									title: "发送成功",
									duration: 1000,
									icon: "none"
								})
								this.timea = 60
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
				} else {
					uni.showToast({
						title: "请输入手机号",
						duration: 1000,
						icon: "none"
					})
				}

			},
		}
	}
</script>

<style lang="scss" scoped>
	.bottomssss {
		// z-index: 1000;
		// position: fixed;
		// bottom: 0;
		// left: 0;
		// right: 0;
		height: 110rpx;
		background: #FFFFFF;

		.dasdasdxzxcx {
			width: 600rpx;
			height: 70rpx;
			line-height: 70rpx;
			text-align: center;
			background: #007399;
			border-radius: 35rpx;
			font-size: 26rpx;
			font-weight: 400;
			color: #FFFFFF;
		}
	}

	.home {
		padding: 30rpx;
		width: 100%;
		height: 100%;

		.shangchuan {
			padding: 30rpx;
			background-color: #FFFFFF;
			border-radius: 20rpx;
			margin-bottom: 30rpx;

			.renxiang {
				margin-bottom: 30rpx;
			}

			.dasad {
				font-size: 24rpx;
				font-weight: 400;
				color: #666666;
			}

			.jiben {
				padding: 40rpx 0;
				font-size: 30rpx;
				font-weight: 800;
				color: #000000;
			}
		}


		.dfhkjdsh {
			padding: 30rpx;
			background-color: #FFFFFF;
			border-radius: 20rpx;
			margin-bottom: 30rpx;

			.jiben {
				padding: 40rpx 0;
				font-size: 30rpx;
				font-weight: 800;
				color: #000000;
			}

			.dsadsa {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			.name {
				padding: 40rpx 0;
				font-size: 30rpx;
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

	.yanzhengma {
		margin: 40rpx 0px;
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
			margin-left: 20rpx;
		}
	}
</style>
