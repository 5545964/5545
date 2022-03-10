<template>
	<view style="height: 100%;">
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
		<!-- 切换 -->
		<view class="">
			<u-tabss :list="list" :weizhi="false" :show-bar="false" :is-scroll="true" :current="current"
				@change="change"></u-tabss>
		</view>
		<!-- 热门栏目 -->
		<view class="" style="height: 100%;" v-if="current==12">
			<u-video v-if="video.length != 0" :vlist="video" @collection="collection" @pinglun="pinglunaa"
				@dianzhan="dianzhan">
			</u-video>
			<u-empty text="数据更新中，敬请期待！" v-else></u-empty>
		</view>
		<!-- 设计大咖 -->
		<view class="" style="height: 100%;" v-if="current==13">
			<u-empty text="数据更新中，敬请期待！"></u-empty>
		</view>
		<!-- 整装设计师 -->
		<view style="height: 100%;" v-if="current==14">
			<!-- 排序 -->
			<view class="paixu">
				<view class="paxi">
					<u-dropdown :mask="true" style="position: relative;z-index: 100;">
						<u-dropdown-item v-model="value1" :title="tit" :options="options1" @change="xuanzhedsa">
						</u-dropdown-item>
					</u-dropdown>
				</view>
				<view class="item" @click="show=true">
					筛选<image src="../../static/icon_about_shaixuan.png"
						style="width: 30rpx;height: 30rpx;margin-left: 10rpx;" mode="aspectFit"></image>
				</view>
			</view>
			<view class="" style="position: relative;z-index: 2;" v-if="designerList.length !=0">
				<u-club @navgate="navgepage" :rows="designerList"></u-club>
			</view>
			<u-empty text="数据更新中，敬请期待！" v-else></u-empty>
		</view>
		<!-- 定制家具设计师 -->
		<view class="" style="height: 100%;" v-if="current==15">
			<u-empty text="数据更新中，敬请期待！"></u-empty>
		</view>
		<!-- 成为设计师 -->
		<view style="height: 100%;" v-if="current==16">
			<view class="be_main" style="height: 100%;" v-if="state<0">
				<view class="be_designer">
				</view>
				<image style="width: 100%;" :src="dasdsdas+mmmmmm" mode="widthFix">
				</image>
				<view class="be_foot" v-if="yanzhengtanchaung">
					<view class="pay" @click="ananana(0)">
						成为1级设计师会员
					</view>
					<view class="pay" @click="ananana(1)">
						成为2级设计师会员
					</view>
				</view>
				<view class="be_foot" v-else>
					<view class="pay" @click="getcontein(0)">
						成为1级设计师会员
					</view>
					<view class="pay" @click="getcontein(1)">
						成为2级设计师会员
					</view>
				</view>

			</view>

			<!-- 驳回 -->
			<view class="reject" v-if="state==2">
				<image src="../../static/icon_me_reject.png" class="imgrej" mode="aspectFit"></image>
				<view class="">
					你的申请已驳回
				</view>
				<view class="reason">
					<view class="">
						驳回原因：
					</view>
					<view class="reason_text">
						{{desinfo.bhnew}}
					</view>
				</view>
				<view class="resest" @click="resss">
					重新提交
				</view>
			</view>
			<!-- 审核中 -->
			<view class="reject" v-if="state==0">
				<image src="../../static/icon_me_review.png" class="imgrej" mode="aspectFit"></image>
				<view class="">
					你的资料平台正在加紧审核中，请留意站内信或电话
				</view>
			</view>
			<!-- 审核成功 -->
			<view class="reject" v-if="state==1">
				<image src="../../static/icon_me_success.png" class="imgrej" mode="aspectFit"></image>
				<view class="">
					恭喜你，你已成为设计师
				</view>
				<view class="resest" @click="lookcont" style="margin-top: 250rpx;">
					查看电子合同
				</view>
			</view>
		</view>
		<!-- 招募令 -->
		<view class="tokens" style="height: 100%;" v-if="current==17">
			<view class="mian" style="height: 100%;">
				<view class="mian_left" id="mianleft">
					<scroll-view scroll-y="true" style="height: 100%;">
						<view :class="index%2==0? 'mian_left_item':'mian_left_item1'"
							:style="active==index?'border-left: 4rpx solid #FD7904;':''"
							v-for="(item,index) in recruit_all" :key="index" @click="changeTokens(index,item)">
							{{item.category}}
						</view>
					</scroll-view>
				</view>
				<view style="width: 86%;overflow: hidden;">
					<scroll-view scroll-y="true" style="height:100%;font-size: 0;">
						<u-parse :html="parsesssss"></u-parse>
					</scroll-view>
				</view>
			</view>
		</view>
		<!-- 合同弹窗 -->
		<u-popup v-model="showContract" mode="center" :closeable="true" border-radius="8">
			<view class="contract_main">
				<!-- 合同pdf -->
				<view class="" style="height: 700rpx; width: 100%;">
					<scroll-view @scrolltolower="rre" scroll-y="true" style="height: 100%;">
						<image style="width: 100%;" :src="tupianwo" mode="widthFix">
						</image>
					</scroll-view>
				</view>
				<!-- <view class="agree_xieyi" @click="toReg"> -->
				<view class="agree_xieyi" @click="pays">
					我已阅读并同意上述协议,{{pay}}
				</view>
			</view>
		</u-popup>
		<!-- 筛选弹窗 -->
		<u-popup v-model="show" mode="bottom" length="60%" :closeable="true" border-radius="8">
			<view class="klks">全部筛选</view>
			<view class="mids">
				<view class="type_list">
					<view style="width: 33.3%;" v-for="(item,index) in modeList" :key="index">
						<view :class="item.check? 'type_item1':'type_item'" @click="xuanzhesssss(item)">
							{{item.title}}
						</view>
					</view>
				</view>
			</view>
			<view class="clos">
				<view class="reset" @click="zhongzhi(0)">
					重置
				</view>
				<view class="on" @click="zhongzhi(1)">
					确定选择
				</view>
			</view>
		</u-popup>
		<!-- 评论弹窗 -->
		<u-pinglun :show="showComment" @zipingjia="pingjia" @fupingjia="pingjia" @chang="chang"
			:pinglun_list="pinglun_list" @guanbi="guanbi"></u-pinglun>
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
							<u-input inputAlign="left" size="200" v-model="code" placeholder="请输入验证码" type="number" />
						</view>
						<button class="annuyt" @click="go_code">{{huoqu}}</button>
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
					感谢您使用宝芸邸，我们会严格
					按照法律规定存储和使用您的个人
					信息。您可以阅读以下几项条款了
					解详细信息。如您同意，请勾选以
					下几项条款并点击”同意”开始接受
					我们的服务。
				</view>
				<view style="padding:20rpx 0;">
					<view class="cet" style="margin:10rpx 0;justify-content: end;" v-for="(item,index) in xieyi"
						:key="index">
						<view style="width:30%;display:flex;justify-content: flex-end;">
							<view class="yuan" @click="hahaha(item)">
								<u-icon v-if="item.check" name="checkbox-mark" color="#2979ff" size="28"></u-icon>
							</view>
						</view>
						<view class="mingcheng" @click="fuwenben(item)">
							《{{item.name}}》
						</view>
					</view>
				</view>
				<view class="anniusss">
					<view class="hkhnij" @click="xieyitongyi(0)">
						暂不使用
					</view>
					<view class="hkhnij jjhgj" @click="xieyitongyi(1)">
						同意协议
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import dayjs from "dayjs"
	export default {
		data() {
			return {
				mmmmmm: "",
				dasdsdas: this.$imgPath,
				tupianwo: "",
				// 验证弹窗
				yanzhengtanchaung: true,
				yuedu: false,
				xieyi: [],
				timea: 0,
				shoujiyanzheng: false,
				shoujihao: uni.getStorageSync("user_info").mobile,
				code: "",
				huoqu: "获取验证码",
				// 验证弹窗
				diandedijige: 0,
				modeList: [],
				mobanid: [
					'gJOe99DzrAoxLlotExdkNH56NuEr3_3MyMhtKywE83c',
					'ag6I4iIgY1yo9QDaLolhH-D1e7Rpl_Tszw1SqYZzBDA',
				],
				heigths: 580,
				parsesssss: "",
				recruit_all: [],
				tit: "综合排序",
				allssssss: [],
				indexdas: "",
				pinglun_list: [],
				video: [],
				showComment: false,
				dianzhansssss: false,
				active: 0,
				desinfo: {},
				state: -1, //  0未审核  1审核通过   2已驳回
				showContract: false,
				pay: "",
				value1: "",
				show: false,
				title: "设计师club",
				list: [
					// {
					// 	name: '网红佳作',
					// 	id: 0
					// },
					// {
					// 	name: '设计大咖',
					// 	id: 1
					// },
					// {
					// 	name: '整装设计师',
					// 	id: 2
					// },
					// {
					// 	name: '定制家具设计师',
					// 	id: 3
					// },
					// {
					// 	name: '成为设计师',
					// 	id: 4
					// },
					// {
					// 	name: '招募令',
					// 	id: 5
					// }
				],
				current: 12,
				designerList: [],
				options1: [{
						label: '智能排序',
						value: 1,
					},
					{
						label: '星级排序',
						value: 2,
					},
					{
						label: '设计单量排序',
						value: 3,
					},
					{
						label: '好评排序',
						value: 4,
					},
					{
						label: '点赞量排序',
						value: 5,
					},
					{
						label: '关注量排序',
						value: 6,
					}
				],
				dsaa: {},
				pages: 1,
			}
		},
		onLoad() {},
		onShow() {
			this.list = uni.getStorageSync('icon').wanghong
			this.list.forEach(item => {
				if (item.id == 16) {
					this.mmmmmm = item.image
				}
			})
			this.tupianwo = this.$imgPath + "/uploads/20220216/bffc5626e75b83e170690335b0fec8fb.png"
			this.change(uni.getStorageSync("ggug"))
			// this.current = uni.getStorageSync("ggug")
			//验证弹窗
			let aa = uni.getStorageSync("xieyi")
			this.xieyi = []
			aa.forEach(item => {
				if (item.state == 1) {
					this.xieyi.push(item)
				}
			})
			if (this.xieyi.length > 0) {
				this.yanzhengtanchaung = true;
			} else {
				this.yanzhengtanchaung = false;
			}
			// 验证弹窗
			this.getstate();
			this.enjoy()
			this.enjoys()
			this.getdesproMoenys()
		},
		onReachBottom(ev) {
			if (this.current == 12) {
				this.pages = this.pages + 1
				this.enjoy()
			}
		},
		methods: {
			rre(ev) {

			},
			// 验证弹窗
			// 协议同意按钮
			xieyitongyi(ev) {
				if (ev == 1) {
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
					this.shoujiyanzheng = true;
					this.yuedu = false
				} else {
					this.yuedu = false
				}

			},
			// 看协议内容
			fuwenben(ev) {
				uni.setStorageSync("fuwenbeng", ev.content)
				uni.navigateTo({
					url: "../pagesC/fuwenben?title=" + ev.name
				})
			},
			// 同意协议
			hahaha(item) {
				item.check = !item.check
			},
			// 同意后选择协议state
			// 0销售员注册
			// 1设计师注册
			// 2已收货
			// 3已安装
			// 4支付前
			tongyixieyi(ev) {
				if (this.xieyi.length > 0) {
					this.yuedu = true;
				} else {
					this.shoujiyanzheng = false;
					this.yuedu = false;
				}
			},
			// 手机验证按钮取消0同意1
			tongyis(ev) {
				if (ev == 1) {
					if (this.code != "") {
						// 验证验证码
						this.$api.emsyzphone({
							phone: this.shoujihao,
							yzm: this.code
						}).then(data => {
							// if (data.data.code == 1) {
							if (true) {
								this.shoujiyanzheng = false
								this.getcontein(this.diandedijige)
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
							icon: "none"
						})
					}
				} else {
					this.shoujiyanzheng = false;
				}
			},
			// 获取验证码倒计时
			go_code() {
				if (this.timea == 0) {
					this.$api.emsphone({
						phone: this.shoujihao,
						user_id:uni.getStorageSync("user_info").id
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
			// 判断手机号
			hahahaa(ev) {
				let phoneCodeVerification = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (!phoneCodeVerification.test(ev.detail.value)) {
					uni.showToast({
						title: "手机号不正确",
						icon: "none"
					})
				}
			},
			// 验证弹窗
			ananana(ev) {
				this.diandedijige = ev
				this.yuedu = true
			},
			zhongzhi(ev) {
				if (ev == 0) {
					this.modeList.forEach(item => {
						item.check = false
					})
					this.dessel(0)
				} else {
					let aa = []
					this.modeList.forEach(item => {
						if (item.check) {
							aa.push(item.title)
						}
					})
					if (aa.length == 0) {
						this.dessel(0)
						this.show = false
						return
					}
					this.$api.deslabel({
						label: aa
					}).then(data => {
						if (data.data.code == 1) {
							data.data.data.status.forEach((item, index) => {
								item.createtime = item.createtime * 1000
								item.createtime = dayjs(item.createtime).format('YYYY/MM/DD')
								item.label = item.label ? item.label.split(",") : ""
								item.work = item.work ? item.work.split(",") : ""
							})
							this.designerList = data.data.data.status
							this.show = false
						} else {
							this.designerList = []
							this.show = false
						}
					})
				}

			},
			xuanzhesssss(ev) {
				ev.check = !ev.check
			},
			chongzhi() {
				this.active = -1
			},
			shaixuan() {
				this.show = false
			},
			xuanzhedsa(ev) {
				let aa = ev - 1
				this.tit = this.options1[aa].label
				this.dessel(aa)
				// 0为智能排序1星级排序2为设计师单量排序3为好评排序4为点赞两排序5为关注量排序
			},
			getdesproMoenys() {
				this.$api.desproMoenys({
					user_id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						if (data.data.data) {
							this.allssssss = data.data.data.status
							// this.pay = '支付￥' + data.data.data.status.money
						}
					}
				})
			},
			pingjia(item) {
				this.dsaa = item
			},
			guanbi() {
				this.showComment = false
			},
			chang(text, pla) {
				if (pla == "发表评论请文明用语") {
					this.$api.indexpl({
						userid: uni.getStorageSync("user_info").id,
						content: text,
						image: "#",
						state: 1,
						id: this.itemsss.id
					}).then(data => {
						if (data.data.code == 1) {
							this.enjoy(1)
						} else {
							uni.showToast({
								title: "评论失败",
								icon: "none"
							})
						}
					})
				} else {
					this.$api.indexplhf({
						pl_id: this.dsaa.pl_id,
						pl_user_id: this.dsaa.pl_user_id,
						userid: uni.getStorageSync("user_info").id,
						content: text,
						image: "#",
						state: 1,
						id: this.itemsss.id
					}).then(data => {
						if (data.data.code == 1) {
							this.enjoy(1)
						} else {
							uni.showToast({
								title: "评论失败",
								icon: "none"
							})
						}
					})
				}

			},
			async pinglunaa(ev, index) {
				if (await this.$login()) {
					this.indexdas = index
					this.pinglun_list = []
					this.pinglun_list = ev.pl
					this.pinglun_list.forEach(item => {
						item["checked"] = false
					})
					this.itemsss = ev;
					if (!this.dianzhansssss && !this.showComment) {
						this.video[index].showComment = true
						return this.showComment = true;
					}
					this.showComment = true;
					this.dianzhansssss = false
				}
			},
			// 跳转设计师详情
			navgepage(item) {
				uni.navigateTo({
					url: `../pagesC/ClubStar?id=${item.id}`
				})
			},
			resss() {
				uni.navigateTo({
					url: "../pagesD/regDesigner/regDesigner"
				})
			},

			pinglun() {
				this.showComment = true;
			},
			// 点赞
			async dianzhan(ev) {
				if (await this.$login()) {
					let type = ev.zans ? 1 : 0;
					this.$api.zan({
						state: 0,
						video_id: ev.id,
						user_id: uni.getStorageSync("user_info").id,
						type: type
					}).then(data => {
						if (data.data.code == 1) {
							ev.iszan = !ev.iszan
							// this.enjoy()
						}
					})
				}
			},
			// 收藏
			async collection(ev) {
				if (await this.$login()) {
					let state = ev.isfollow ? 1 : 0;
					this.$api.addfollow({
						type: 1,
						user_id: uni.getStorageSync("user_info").id,
						shop_id: 0,
						video_id: ev.id,
						state: state
					}).then(data => {
						if (data.data.code == 1) {
							ev.isfollow = !ev.isfollow
						}
					})
				}
			},
			// 跳转填写资料
			toReg() {
				this.showContract = false;
				let aa = 0
				if (this.diandedijige == 0) {
					aa = 5
				} else {
					aa = 3
				}
				uni.navigateTo({
					// url: "./regDesigner/regDesigner?nageid=" + this.allssssss[this.diandedijige].id
					url: "./regDesigner/regDesigner?nageid=" + aa
				})
			},
			changeTokens(index, item) {
				this.active = index
				this.parsesssss = item.content

			},
			// 查看合同模板
			async getcontein(ev) {
				if (await this.$login()) {
					let that = this;
					uni.requestSubscribeMessage({
						provider: 'weixin',
						tmplIds: that.mobanid,
						complete: function(res) {
							// 选的哪一个
							that.diandedijige = ev;
							// 看合同
							// that.looks(that.allssssss[ev].doc_url)
							// 查看价格是否大于0
							if (Number(that.allssssss[ev].money) > 0) {
								// 查看是否支付
								that.$api.ispay({
									id: that.allssssss[ev].id,
									user_id: uni.getStorageSync("user_info").id
								}).then(data => {
									// that.pay = '去填写资料'
									// 不支付，支付取消注释
									if (data.data.code == 1) {
										// that.pay = '去填写资料'
										that.toReg()
									} else {
										// that.pay = '支付￥' + that.allssssss[ev].money
										that.pays()
									}
									// 协议弹窗
									// that.showContract = true
								})
							} else {
								that.toReg()
							}

						}
					});

				}
			},
			// 查看模板
			looks(url) {
				if (url.indexOf("http") == -1) {
					url = this.$imgPath + url
				}
				uni.downloadFile({
					// e.target.dataset.name 是文件的地址
					url: url,
					success(res) {
						const filePath = res.tempFilePath;
						uni.openDocument({
							filePath,
							success(res) {}
						})
					}
				})
			},
			// 支付填写资料
			pays() {
				let that = this
				let aa = 0
				if (that.diandedijige == 0) {
					aa = 5
				} else {
					aa = 3
				}
				that.$api.buylevel({
					// id: that.allssssss[that.diandedijige].id,
					id: aa,
					user_id: uni.getStorageSync("user_info").id
				}).then(res => {
					if (res.data.code == 400) {
						that.toReg()
					}
					// 支付
					if (res.data.code == 200) {
						uni.requestPayment({
							timeStamp: res.data.data.timeStamp, //当前的时间
							nonceStr: res.data.data.nonceStr, //随机字符串
							package: res.data.data.package, //统一下单接口返回的 prepay_id 参数值
							signType: res.data.data.signType, //签名算法，暂支持 MD5。
							paySign: res.data.data.paySign, //签名
							success: function(res) {
								uni.showToast({
									title: "支付成功",
									icon: "none"
								})
								that.toReg()
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
				// }
			},
			// 热门栏目
			enjoys() {
				this.$api.recruit().then(data => {
					if (data.data.code == 1) {
						this.recruit_all = data.data.data.status
						this.parsesssss = this.recruit_all[0].content
					}
				})
				this.$api.desmode().then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							item["check"] = false
						})
						this.modeList = data.data.data.status
					}
				})
			},
			enjoy() {
				this.$api.enjoy({
					user_id: uni.getStorageSync("user_info").id,
					type: 1,
					page: this.pages,
					limit: 10,
					state: 1
				}).then(data => {
					let aa = []
					this.pages = data.data.data.status.current_page
					if (data.data.data.status.data.length != 0) {
						data.data.data.status.data.forEach(item => {
							item["iszan"] = false
							item["isfollow"] = false
							item["showComment"] = this.showComment
							if (item.zans) {
								item.iszan = true
							}
							if (item.follow) {
								item.isfollow = true
							}
							item.video = this.$imgPath + item.video
							aa.push(item)
						})
						this.video = aa
					}
				})

			},
			// 设计师列表
			dessel(ev) {
				this.$api.dessel({
					order: ev
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							item.createtime = item.createtime * 1000
							item.createtime = dayjs(item.createtime).format('YYYY/MM/DD')
							item.label = item.label ? item.label.split(",") : ""
							item.work = item.work ? item.work.split(",") : ""
						})
						this.designerList = data.data.data.status
					}
				})
			},
			change(index) {
				console.log(index);
				this.pages = 1
				this.current = index
				uni.setStorageSync("ggug", index)
				if (index == 12) {
					this.enjoy()
				}
				if (index > 12 && index < 16) {
					this.dessel(0)
				}
				if (index == 16) {
					this.getstate()
				}
			},
			// 成为设计师状态
			getstate() {
				this.$api.despro({
					user_id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						if (data.data.data) {
							this.desinfo = data.data.data.status
							this.state = data.data.data.status.state
						}
					}
				})
			},
			// 查看合同
			lookcont() {
				this.$api.desmyuser({
					user_id: uni.getStorageSync("user_info").id,
				}).then(data => {
					if (data.data.code == 1) {
						uni.setStorageSync("des_info", data.data.data.myuser)
						uni.navigateTo({
							url: "./hetong"
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

	// 排序
	.paixu {
		background: #FFFFFF;
		display: flex;
		box-sizing: border-box;
		align-items: center;
		justify-content: space-between;
		position: relative;
		height: 80rpx;

		.paxi {
			width: 100%;
		}

		.item {
			display: flex;
			align-items: center;
			position: absolute;
			top: 0;
			right: 0;
			padding: 20rpx;
			z-index: 1000;
		}
	}

	// 筛选
	.klks {
		text-align: center;
		line-height: 100rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: #000000;
	}

	.clos {
		position: fixed;
		bottom: 40rpx;
		left: 0;
		right: 0;
		margin: 0 30rpx;
		padding: 20rpx 0;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.reset {
			width: 335rpx;
			height: 70rpx;
			background: #E6F1F5;
			border-radius: 35rpx;
			border: 1rpx solid #007399;
			font-size: 26rpx;
			color: #007399;
			text-align: center;
			line-height: 70rpx;
			box-sizing: border-box;
		}

		.on {
			width: 335rpx;
			height: 70rpx;
			background: #007399;
			border-radius: 35rpx;
			font-size: 26rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 70rpx;
		}
	}

	.mids {
		padding: 0 30rpx;
		border-top: 2rpx solid #e9e9e9;

		.kongjian {
			margin-top: 40rpx;
			margin-bottom: 30rpx;
		}

		.type_list {
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
		}

		.type_item {
			width: 210rpx;
			height: 70rpx;
			background: #F6F6F6;
			border-radius: 35rpx;
			font-size: 26rpx;
			color: #333;
			text-align: center;
			line-height: 70rpx;
			margin: 20rpx 0;
		}

		.type_item1 {
			width: 210rpx;
			height: 70rpx;
			background: #007399;
			border-radius: 35rpx;
			font-size: 26rpx;
			text-align: center;
			line-height: 70rpx;
			color: #FFFFFF;
			margin: 20rpx 0;
		}
	}

	.seath {
		margin: 40rpx 30rpx 30rpx;
		padding-bottom: 20rpx;
	}

	// 成为设计师
	.be_designer {
		// background-image: url(../../static/ad9537b694af6b87cc7f8e51cbca1cf.jpg);
		// background-size: 100% 100%;
		// width: 100%;
		// height: 100%;
		// position: fixed;
		// top: 0;
		// z-index: -1;
	}

	.be_foot {
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: #FFFFFF;
		width: 100%;
		height: 110rpx;
		// position: fixed;
		// bottom: 0;
	}

	.pay {
		// width: 600rpx;
		// height: 70rpx;
		// background: #007399;
		// border-radius: 35rpx;
		// font-size: 26rpx;
		// color: #FFFFFF;
		// text-align: center;
		// position: relative;
		// z-index: 100;
		// line-height: 70rpx;
		padding: 20rpx 40rpx;
		background: #007399;
		border-radius: 35rpx;
		font-size: 26rpx;
		color: #FFFFFF;
		text-align: center;
		position: relative;
		z-index: 100;
	}

	.imgrej {
		width: 300rpx;
		height: 222rpx;
		margin-bottom: 60rpx;
		margin-top: 145rpx;
	}

	.reject {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		width: 100%;

		.reason {
			padding: 30rpx;
			width: 690rpx;
			background: #FFFFFF;
			border-radius: 10rpx;
			box-sizing: border-box;
			color: #333;
			margin-top: 30rpx;
			margin-bottom: 60rpx;
		}

		.reason_text {
			margin-top: 20rpx;
			color: #666;
		}

		.resest {
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

	// 合同弹窗
	.contract_main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 690rpx;
		height: 900rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		padding: 40rpx 45rpx;
		box-sizing: border-box;

		.agree_xieyi {
			width: 600rpx;
			height: 70rpx;
			background: #007399;
			color: #FFFFFF;
			border-radius: 35rpx;
			font-size: 26rpx;
			text-align: center;
			line-height: 70rpx;
		}
	}

	// 招募令
	.tokens {
		.mian {
			display: flex;
			justify-content: space-between;
			margin-bottom: 40rpx;
			margin-top: 20rpx;

			.mian_left {
				width: 100rpx;
				// background: #305166;
				max-height: 1900rpx;
				overflow: hidden;
			}

			.mian_left_item {
				font-size: 26rpx;
				color: #FFFFFF;
				padding: 20rpx;
				box-sizing: border-box;
				width: 100rpx;
				background: #305166;
				border-left: 4rpx solid #305166;
			}

			.mian_left_item1 {
				font-size: 26rpx;
				color: #FFFFFF;
				padding: 20rpx;
				box-sizing: border-box;
				width: 100rpx;
				background: #376379;
				border-left: 4rpx solid #376379;
			}
		}
	}


	/* 评论 */
	.comment {
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		margin-bottom: 200rpx;
	}

	.avator {}

	.new {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 800;
		color: #333333;
		text-align: center;
	}

	.avator {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}

	.commentRight {
		border-bottom: 2rpx solid #F4F4F4;
		padding-top: 10rpx;
		padding-bottom: 30rpx;
	}

	.commentView {
		display: flex;
		align-items: center;
	}

	.contentView {
		/* height: 300rpx; */
		display: flex;
		padding-top: 20rpx;
		background-color: #FFFFFF;
		margin-top: 40rpx;
	}

	.username {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #333333;
	}

	.lv {
		width: 90rpx;
		height: 24rpx;
		background: linear-gradient(90deg, #FF4B3C, #FF841D);
		border-radius: 12rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 10rpx;
	}

	.lvText {
		font-size: 18rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
	}

	.commentTime {
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #999999;
		margin-top: 12rpx;
		margin-bottom: 30rpx;
	}

	.commentContent {
		width: 574rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #333333;
	}

	.replys {
		width: 590rpx;
		/* height: 348rpx; */
		background: #FAF8F5;
		border-radius: 10rpx;
		margin-top: 20rpx;
		padding: 20rpx;
	}

	.replay_item {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #333333;
		margin-bottom: 10rpx;
	}

	.users1 {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #007399;
	}

	.users2 {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #999999;
	}

	.huifu {
		display: inline-block;
		margin-left: 10rpx;
		margin-right: 10rpx;
	}

	.all {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #007399;
	}

	/* 底部 */
	.foot {
		width: 750rpx;
		height: 120rpx;
		background: #FFFFFF;
		box-shadow: 0px -2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.foot1 {
		width: 750rpx;
		height: 120rpx;
		background: #FFFFFF;
		box-shadow: 0px -2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		/* justify-content: center; */
	}

	.footInp {
		width: 500rpx;
		height: 80rpx;
		background: #F4F4F4;
		border-radius: 40rpx;
		padding-left: 40rpx;
		box-sizing: border-box;
		margin-right: 30rpx;
		margin-left: 10rpx;
	}

	.footInp1 {
		width: 470rpx;
		height: 80rpx;
		background: #F4F4F4;
		border-radius: 40rpx;
		padding-left: 40rpx;
		line-height: 80rpx;
		box-sizing: border-box;
		margin-right: 20rpx;
		margin-left: 30rpx;
		color: #999999;
		font-size: 30rpx;
	}

	.footImg {
		width: 60rpx;
		height: 60rpx;
		margin-right: 20rpx;
	}

	.pl_text {
		width: 300rpx;
		height: 80rpx;
		font-size: 28rpx;
		background-color: #FF4B3C;
		color: #FFFFFF;
		text-align: center;
		line-height: 80rpx;
		border-radius: 36rpx;
	}

	.foot_btn {
		width: 120rpx;
		height: 60rpx;
		background: #007399;
		border-radius: 10rpx;
		text-align: center;
		line-height: 60rpx;
		color: #FFFFFF;
	}

	// 验证弹窗
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

	// 验证弹窗
</style>
