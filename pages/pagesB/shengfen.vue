<template>
	<view style="height: inherit;">
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
			<view class="text">
				身份选择
			</view>
			<swiper v-if="list.length != 0" indicator-active-color="#D8AE5F" indicator-color="#000000"
				:style="'height: '+hei+'px;'" @change="lunbo" :indicator-dots="true" :current="current" :circular="true"
				:duration="500">
				<swiper-item v-for="(item,index) in list" :key="index">
					<view :id="'id'+ index" class="fdsfhks">
						<view class="fdjlkfsjd">
							<view class="textsda">
								<!-- {{item.name||""}} -->
							</view>
							<image class="img" src="../../static/xunzhang.png" mode="aspectFit"></image>
						</view>
						<view class="dsdadreawdew">
							<view class="dasdsadsxzcz">
								{{item.type||""}}特权：
							</view>
							<view v-html="item.content">

							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
			<u-empty v-else></u-empty>
		</view>
		<view class="boyyty cet" v-if="pd==1">
			<view class="tetx">
				申请提交，请等待审核
			</view>
		</view>
		<view v-if="!xuyue">
			<view class="boyyty cet" v-if="usershengfen < id && pd==0">
				<view class="tetx" @click="shoujiyanzheng=true" v-if="buyanzheng">
					￥{{jiage||""}}升级
				</view>
				<view class="tetx" @click="topay" v-else>
					￥{{jiage||""}}升级
				</view>
			</view>
		</view>
		<view v-else>
			<view class="boyyty cet">
				<view class="tetx" @click="shoujiyanzheng=true" v-if="buyanzheng">
					￥{{jiage||""}}续约
				</view>
				<view class="tetx" @click="topay" v-else>
					￥{{jiage||""}}续约
				</view>
			</view>
		</view>
		<view class="">
			<!-- 确保是你本人操作 -->
			<u-popup width="500" border-radius="30" v-model="shoujiyanzheng" mode="center">
				<view class="yueduwo">
					<view class="text">
						确保是你本人操作
					</view>
					<view class="textss">
						<input type="number" value="" @blur="hahahaa" placeholder="请输入手机号" v-model="shoujihao" />
					</view>
					<view class="yanzhengma">
						<view class="cet" style="justify-content: space-around;width: 100%;">
							<view class="djkshfks" style="background-color: #e5e5e5;padding: 0 30rpx;">
								<u-input inputAlign="left" size="200" v-model="code" placeholder="请输入验证码"
									type="number" />
							</view>
							<button class="annuyt" @click="go_code">{{huoqu||""}}</button>
						</view>
					</view>
					<view class="anniusss">
						<view class="hkhnij" @click="tongyis(0)">
							取消
						</view>
						<view class="hkhnij jjhgj" @click="tongyis(1)">
							同意
						</view>
					</view>
				</view>
			</u-popup>
			<!-- 服务协议和隐私政策 -->
			<u-popup width="500" border-radius="30" v-model="yuedu" mode="center">
				<view class="yueduwo">
					<view class="text">
						服务协议和隐私政策
					</view>
					<view class="textss">
						感谢您使用宝芸邸，我们会严格按照法律规定存储和使用您的个人信息。您可以阅读以下几项条款了解详细信息。如您同意，请勾选以下几项条款并点击”同意”开始接受我们的服务。
					</view>
					<view style="padding:20rpx 0;">
						<view class="cet" style="margin:10rpx 0;" v-for="(item,index) in xieyi" :key="index">
							<view style="display:flex;justify-content: flex-end;align-items:center;">
								<view class="yuan" @click="hahaha(item)">
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
					<view class="anniusss">
						<view class="hkhnij" @click="tongyi(0)">
							暂不使用
						</view>
						<view class="hkhnij jjhgj" @click="tanchuanbaozhuang()">
							同意
						</view>
					</view>
				</view>
			</u-popup>
			<!-- 驳回原因 -->
			<u-popup width="500" border-radius="30" v-model="bohui" mode="center">
				<view class="yueduwo">
					<view class="text">
						驳回原因
					</view>
					<view class="textss" style="padding:30rpx;" v-if="mlml==0">
						{{bohuidata.bhly}}
					</view>
					<view class="textss" style="padding:30rpx;" v-else>
						{{bohuidata.bhnew}}
					</view>

					<view class="anniusss">
						<view class="hkhnij" @click="bohui=false">
							取消
						</view>
						<view class="hkhnij jjhgj" @click="chongxin">
							重新申请
						</view>
					</view>
				</view>
			</u-popup>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mnmn: 0,
				current: 0,
				bohuidata: {},
				bohui: false,
				//
				//
				//
				name: "",
				mnbv: "",
				jshdsfdfs: false,
				shoujihao: uni.getStorageSync("user_info").mobile,
				code: "",
				buyanzheng: true,
				timea: 0,
				huoqu: "获取验证码",
				shoujiyanzheng: false,
				yuedu: false,
				xieyi: [],
				//
				//
				//
				id: "",
				desid: "",
				jiage: 0,
				hei: 10000,
				list: [],
				title: "身份专区",
				userinfo: {},
				usershengfen: "",
				types: "",
				mlml: 0, //0销售员1是设计师
				pd: 0,
				agid: "",
				xuyue: false, //false升级，true续约
				xuyuestate: "",
				xuyuecontent: ""
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title
			}
			if (ev.isdes) {
				this.mlml = 1
			}
			if (ev.agid) {
				this.agid = ev.agid
				this.xuyue = true
				let aa = uni.getStorageSync("xieyi")
				aa.forEach(item => {
					if (this.agid == item.id) {
						this.xuyuestate = item.state
					}
				})
				if (this.xuyuestate == 0) {
					this.xuyuecontent = 0
				}
				if (this.xuyuestate == 8) {
					this.xuyuecontent = 1
				}
				if (this.xuyuestate == 9) {
					this.xuyuecontent = 2
				}
				if (this.xuyuestate == 1) {
					this.xuyuecontent = 2
				}
				if (this.xuyuestate == 10) {
					this.xuyuecontent = 0
				}
				if (this.xuyuestate == 11) {
					this.xuyuecontent = 1
				}
				console.log(this.xuyuestate, this.xuyuecontent);
				if (this.xuyuestate == 0 || this.xuyuestate == 8 || this.xuyuestate == 9) {
					this.mlml = 0
				} else if (this.xuyuestate == 1 || this.xuyuestate == 11 || this.xuyuestate == 10) {
					this.mlml = 1
				}
			}
			let user_info = uni.getStorageSync("user_info").bbs
			let des_info = uni.getStorageSync("des_info").bbs
			if (this.mlml == 0) {
				if (user_info != '' && user_info != null) {
					this.usershengfen = user_info.id || 0
				}
			} else {
				if (des_info != '' && des_info != null) {
					if (des_info.id == 5) {
						this.usershengfen = 1
					}
					if (des_info.id == 3) {
						this.usershengfen = 2
					}
					if (des_info.id == 4) {
						this.usershengfen = 3
					}
				}
			}
			this.getdata()
		},
		watch: {
			shoujiyanzheng: function(val, oldVal) {
				if (!val) {
					this.code = ""
				}
			},
		},
		methods: {
			chongxin() {
				this.bohui = false
				setTimeout(() => {
					if (this.buyanzheng) {
						this.shoujiyanzheng = true
					} else {
						this.topay()
					}
				}, 100);
			},
			xieyis(ev) {
				let bb = ""
				let kk = []
				let cc = uni.getStorageSync("xieyi")
				if (this.mlml == 1) {
					// 1 = D1注册
					// 10 = D2注册
					// 11 = D3注册
					if (ev == 1) {
						bb = 1
					}
					if (ev == 2) {
						bb = 10
					}
					if (ev == 3) {
						bb = 11
					}
				} else {
					// 0 = B1注册
					// 8 = B2注册
					// 9 = B3注册
					if (ev == 1) {
						bb = 0
					}
					if (ev == 2) {
						bb = 8
					}
					if (ev == 3) {
						bb = 9
					}
				}
				cc.forEach(item => {
					if (item.state == bb) {
						kk.push(item)
					}
				})
				this.xieyi = [...kk]
				if (this.xieyi.length > 0) {
					this.buyanzheng = true
				} else {
					this.buyanzheng = false
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
			},
			tongyis(ev) {
				if (ev == 1) {
					if (this.code != "") {
						// 验证验证码
						this.$api.emsyzphone({
							phone: this.shoujihao,
							yzm: this.code
						}).then(data => {
							if (data.data.code == 1) {
								this.tongyi(1)
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
				} else {
					this.time = 0
					this.code = ''
					this.shoujihao = ''
					this.shoujiyanzheng = false;
				}


			},
			tongyi(ev) {
				if (ev == 1) {
					this.xieyi.forEach(item => {
						item.check = false
					})
					this.yuedu = true;
				} else {
					this.shoujiyanzheng = false;
					this.yuedu = false;
				}
			},
			hahahaa(ev) {
				let phoneCodeVerification = /^1[3-9]\d{9}$/;
				if (!phoneCodeVerification.test(ev.detail.value)) {
					uni.showToast({
						title: "手机号不正确",
						icon: "none"
					})
				}
			},
			// 获取验证码
			go_code() {
				if (this.timea == 0) {
					this.$api.emsphone({
						phone: this.shoujihao,
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
			tanchuanbaozhuang() {
				if (this.buyanzheng) {
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
							agid: item.id
						})
					})
					this.shoujiyanzheng = false;
					this.yuedu = false
				}
				this.topay()
			},
			//
			//
			//
			topay() {
				let id = ""
				if (this.mlml == 0) {
					id = this.id
				}
				if (this.mlml == 1) {
					id = this.desid
				}
				this.$api.buylevel({
					id: id,
					user_id: uni.getStorageSync("user_info").id,
					level: this.mlml,
					type: this.xuyue,
					mm: this.mnmn
				}).then(res => {
					if (res.data.code == 1) {
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						})
						setTimeout(() => {
							if (this.mlml == 0) {
								uni.navigateTo({
									url: "./redsuccess?level=" + this.id + "&name=" + this.name +
										"&mlml=" + this.mlml + "&mm=" + this.mnmn
								})
							} else {
								uni.navigateBack({
									delta: 1
								})
							}
						}, 1000)
					}
					if (res.data.code == 200) {
						let that = this;
						uni.requestPayment({
							timeStamp: res.data.data.timeStamp, //当前的时间
							nonceStr: res.data.data.nonceStr, //随机字符串
							package: res.data.data.package, //统一下单接口返回的 prepay_id 参数值
							signType: res.data.data.signType, //签名算法，暂支持 MD5。
							paySign: res.data.data.paySign, //签名
							success: function(res) {
								that.$refs.uToast.show({
									title: "购买" + that.types + "成功",
									type: 'default'
								})
								uni.setStorageSync("yanzheng", true)
								if (that.mlml == 0) {
									setTimeout(() => {
										uni.navigateTo({
											url: "./redsuccess?level=" + that.id +
												"&name=" + that.name + "&mm=" + this
												.mnmn
										})
									}, 1000)
								} else {
									uni.navigateBack({
										delta: 1
									})
								}
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
					type: this.mlml,
					id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							item["name"] = item.type.split("（")[0]
						})
						this.list = [...data.data.data.status]
						// data.data.data.status.forEach(item => {
						// 	this.list.push(item)
						// 	if (item.id == 1 || item.id == 2) {
						// 		this.list.push({
						// 			...item,
						// 			type: item.oneb,
						// 			money: item.bmoney,
						// 			name: item.oneb,
						// 			mm: 1
						// 		})
						// 	}
						// })
						if (this.mlml == 1) {
							if (this.list[0].id == 5) {
								this.xieyis(1)
								this.id = 1
								this.desid = 5
							}
							if (this.list[0].id == 3) {
								this.xieyis(2)
								this.id = 2
								this.desid = 3
							}
							if (this.list[0].id == 4) {
								this.xieyis(3)
								this.id = 3
								this.desid = 4
							}
						} else {
							this.xieyis(this.list[0].id)
							this.id = this.list[0].id
						}
						this.jiage = this.list[0].money + "元";
						if (this.list[0].money == "0.00") {
							this.jiage = "免费"
						}
						this.pd = this.list[0].pd
						this.types = this.list[0].type
						this.name = this.list[0].type
						this.bohuidata = data.data.data.user || ""
						if (this.bohuidata != "") {
							if (this.bohuidata.state == 2) {
								this.bohui = true
								setTimeout(() => {
									if (this.mlml == 0) {
										this.current = this.bohuidata.level - 1
										// if (this.bohuidata.type == 1) {
										// 	if (this.bohuidata.level == 1) {
										// 		this.current = 1
										// 	} else if (this.bohuidata.level == 2) {
										// 		this.current = 3
										// 	}
										// } else {
										// 	if (this.bohuidata.level == 1) {
										// 		this.current = 0
										// 	}
										// 	if (this.bohuidata.level == 2) {
										// 		this.current = 2
										// 	}
										// 	if (this.bohuidata.level == 3) {
										// 		this.current = 4
										// 	}
										// }
									} else {
										if (this.bohuidata.level == 3) {
											this.current = 0
										} else if (this.bohuidata.level == 4) {
											this.current = 1
										} else if (this.bohuidata.level == 5) {
											this.current = 2
										}
									}
								}, 100);
							}
						}
						if (this.xuyue) {
							setTimeout(() => {
								this.current = this.xuyuecontent
							}, 100);
						}
						uni.setStorageSync("shengfen", data.data.data.user)
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
				this.jiage = this.list[ev.detail.current].money + "元";
				if (this.list[ev.detail.current].money == "0.00") {
					this.jiage = "免费"
				}
				if (this.mlml == 1) {
					if (this.list[ev.detail.current].id == 5) {
						this.id = 1;
						this.desid = 5
					}
					if (this.list[ev.detail.current].id == 3) {
						this.id = 2;
						this.desid = 3
					}
					if (this.list[ev.detail.current].id == 4) {
						this.id = 3;
						this.desid = 4
					}
				} else {
					this.id = this.list[ev.detail.current].id;
				}
				this.mnmn = this.list[ev.detail.current].mm
				this.pd = this.list[ev.detail.current].pd;
				this.types = this.list[ev.detail.current].type;
				this.name = this.list[ev.detail.current].name;
				this.xieyis(this.id)
				this.gaodu(ev.detail.current)
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

	//
	// 
	// 
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
