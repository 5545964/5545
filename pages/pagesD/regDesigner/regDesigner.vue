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
			<block v-for="item in inpList" :key="item.id">
				<view class="write_item" v-if="item.aa != 'phone' &&item.aa != 'sex'">
					<view class="">
						{{item.name||""}}
					</view>
					<input v-if="item.id!=5" style="text-align: right;" v-model="item.text" type="text" value=""
						:placeholder="item.placeholder" />
					<view class="" @click="show=true" v-if="item.id==5" style="text-align: right;">
						{{item.text||"请选择地区"}}
					</view>
				</view>
				<view class="write_item" v-if="item.aa == 'sex'">
					<view class="">
						{{item.name||""}}
					</view>
					<u-radio-group v-model="value" @change="radioGroupChange" activeColor="#007399">
						<u-radio v-for="(item, index) in list" :key="index" :name="item.name" :disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
				<view class="write_item" v-if="item.aa == 'phone'">
					<view class="">
						{{item.name||""}}
					</view>
					<input v-if="item.id!=4" style="text-align: right;" v-model="item.text" type="text" value=""
						:placeholder="item.placeholder" />
					<view class="" @click="show=true" v-if="item.id==4" style="text-align: right;">
						{{item.text||"请选择地区"}}
					</view>
				</view>
				<view class="write_item" v-if="item.aa == 'phone'">
					<view class="">
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
			</block>
		</view>
		<!-- 上传设计师资质 -->
		<view class="upload_des">
			<view class="upload_title">
				上传设计师资质
			</view>
			<view class="allimg">
				<u-upload width="160" :fileList="kanimg" height="160" :action="action" max-count="9" :header="header"
					@on-success="shangchuan" @on-remove="deleteimg" :form-data="formData" name="image"
					size-type="compressed">
				</u-upload>
			</view>
		</view>
		<view class="" style="height: 100rpx;" />
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
		onLoad(ev) {
			if (ev.nageid) {
				this.ididiidid = ev.nageid
			} else {
				this.ididiidid = uni.getStorageSync("level")
			}
			this.inpList[3].text = uni.getStorageSync("user_info").mobile
			this.action = this.$shangchuan + '/api/byd_user/addpostspic'
			// 驳回后修改信息
			let info = uni.getStorageSync("inpList");
			if (info) {
				this.inpList[0].text = info[0].text;//姓名
				this.inpList[1].text = info[1].text;//性别
				this.inpList[2].text = info[2].text;//身份证号码
				this.inpList[3].text = info[3].text;//手机号码
				this.inpList[4].text = info[4].text;//电子邮箱
				this.inpList[5].text = info[5].text;//所在地区
				this.inpList[6].text = info[6].text;//详细地址
				if (info[1].text == 0) {
					this.value = "男"
				} else {
					this.value = "女"
				}
			}
			// 驳回后修改照片
			let info_img = uni.getStorageSync("upimgs");
			if (info_img) {
				this.upimgs = info_img
				info_img.forEach(item => {
					this.kanimg.push({
						url: this.$imgPath + item,
					})
				})
			}

		},
		data() {
			return {
				value: "",
				ididiidid: 0,
				huoqu: '获取验证码',
				time: 0,
				code: "",
				kanimg: [],
				header: {},
				formData: {},
				action: "",
				show: false,
				title: "注册设计师合伙人",
				inpList: [{
						id: 0,
						name: "姓名",
						placeholder: "请输入您的姓名",
						text: "",
						aa: ""
					},
					{
						id: 1,
						name: "性别",
						placeholder: "街道、小区门牌等详细地址",
						text: "",
						aa: "sex"
					},
					{
						id: 2,
						name: "身份证号码",
						placeholder: "请输入您的身份证号码",
						text: "",
						aa: ""
					},
					{
						id: 3,
						name: "手机号码",
						placeholder: "请输入您的手机号码",
						text: "",
						aa: "phone"
					},
					{
						id: 4,
						name: "电子邮箱",
						placeholder: "请输入您的电子邮箱",
						text: "",
						aa: ""
					},
					{
						id: 5,
						name: "所在地区",
						placeholder: "请选择您的所在地区",
						text: "请选择您的所在地区",
						aa: ""
					},
					{
						id: 6,
						name: "详细地址",
						placeholder: "街道、小区门牌等详细地址",
						text: "",
						aa: ""
					}
				],
				imgList: [],
				upimgs: [],
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
			};
		},
		methods: {
			radioGroupChange(ev) {
				this.value = ev
				if (ev == "男") {
					this.inpList[1].text = "0";
				} else {
					this.inpList[1].text = "1";
				}
			},
			go_code() {
				if (this.timea == 0) {
					this.$api.emsphone({
						phone: this.inpList[3].text,
						user_id: uni.getStorageSync("user_info").id
					}).then(data => {
						if (data.data.code == 1) {
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
			},
			shangchuan(ev) {
				this.upimgs.push(ev.data.status)
			},
			cityChange(e) {
				this.inpList[5].text = e.province.label + e.city.label + e.area.label;
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
			// 删除图片
			deleteimg(index) {
				this.upimgs.splice(index, 1)
			},
			submit() {
				uni.setStorageSync("level", this.ididiidid)
				uni.setStorageSync("inpList", this.inpList)
				uni.setStorageSync("upimgs", this.upimgs)
				if (this.code != "") {
					// 验证验证码
					this.$api.emsyzphone({
						phone: this.inpList[3].text,
						yzm: this.code
					}).then(data => {
						console.log(this.inpList);
						if (data.data.code == 1) {
							this.submits()
						} else {
							uni.showToast({
								title: "验证码错误",
								duration: 1000,
								icon: "none"
							})
						}
					})
				} else {
					uni.showToast({
						title: "请输入验证码",
						duration: 1000,
						icon: "none"
					})
				}
			},
			// 提交
			submits() {
				//检查资料是否填完
				let bb = []
				this.inpList.forEach(item => {
					if (item.text === '') {
						return false
					} else {
						bb.push("1")
					}
				})

				if (this.inpList.length == bb.length) {
					//检查上传的照片
					if (this.upimgs != '') {
						this.$api.adddes({
							user_id: uni.getStorageSync("user_info").id,
							username: this.inpList[0].text,
							idcart: this.inpList[2].text,
							address: this.inpList[5].text,
							email: this.inpList[4].text,
							mobile: this.inpList[3].text,
							desimage: this.upimgs,
							addressxq: this.inpList[6].text,
							sex: this.inpList[1].text,
							level: this.ididiidid
						}).then(data => {
							if (data.data.code == 1) {
								let list = {
									title: "提交成功",
									text: "你的资料平台正在加紧审核中，请留意站内信息",
									botton: "我知道了",
									navbar: "注册设计师"
								}
								uni.navigateTo({
									url: "../regSuccess?list=" + JSON.stringify(list)
								})
							} else {
								uni.showToast({
									title: data.data.msg,
									icon: "none"
								})
							}
						})
					} else {
						uni.showToast({
							title: "请检查资料",
							icon: "none"
						})
					}
				} else {
					uni.showToast({
						title: "请检查资料",
						icon: "none"
					})
				}
			},
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
