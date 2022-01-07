<template>
	<view style="height: 100%;">
		<!-- 导航 -->
		<view class="navbar">
			<u-navbar :is-back="false" :title="title">
				<view class="sssss">
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
		<view class="">
			<u-tabs :list="list" :weizhi="false" :show-bar="false" :is-scroll="true" :current="current"
				@change="change"></u-tabs>
		</view>
		<!-- 热门栏目 -->
		<view class="" style="height: 100%;" v-if="current==0">
			<u-video v-if="video.length != 0" :vlist="video" @collection="collection" @pinglun="pinglunaa" @dianzhan="dianzhan">
			</u-video>
			<u-empty v-else></u-empty>
		</view>
		<view class="" style="height: 100%;" v-if="current==1">
			<u-empty></u-empty>
		</view>
		<!-- 设计师列表 -->
		<view class="" v-if="current==2">
			<!-- 排序 -->
			<view class="paixu">
				<!-- <view class="item">
					综合排序<image src="../../static/icon_home_sanjiao.png" style="width: 16rpx;height: 10rpx;margin-left: 12rpx;" mode=""></image>
				</view> -->
				<view class="paxi">
					<u-dropdown :mask="true" style="position: relative;z-index: 100;">
						<u-dropdown-item v-model="value1" :title="tit" :options="options1" @change="xuanzhedsa">
						</u-dropdown-item>
					</u-dropdown>
				</view>
				<view class="item" @click="show=true">
					筛选<image src="../../static/icon_about_shaixuan.png"
						style="width: 30rpx;height: 30rpx;margin-left: 10rpx;" mode=""></image>
				</view>
			</view>
			<view class="" style="position: relative;z-index: 2;">
				<u-club @navgate="navgepage" :rows="designerList"></u-club>
			</view>
		</view>
		<view class="" style="height: 100%;" v-if="current==3">
			<u-empty></u-empty>
		</view>
		<!-- 成为设计师 -->
		<view style="height: 100%;" v-if="current==4">
			<view class="be_main" style="height: 100%;" v-if="state<0">
				<view class="be_designer">
				</view>
				<image style="width: 100%;height: 1500rpx;" src="../../static/ad9537b694af6b87cc7f8e51cbca1cf.jpg"
					mode=""></image>
				<view class="be_foot">
					<!-- <view class="pay" @click="pays">
						{{pay}}
					</view> -->
					<view class="pay" @click="getcontein(0)">
						成为设计师
					</view>
					<view class="pay" @click="getcontein(1)">
						成为设计师合伙人
					</view>
				</view>
			</view>
			<!-- 驳回 -->
			<view class="reject" v-if="state==2">
				<image src="../../static/icon_me_reject.png" class="imgrej" mode=""></image>
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
				<image src="../../static/icon_me_review.png" class="imgrej" mode=""></image>
				<view class="">
					你的资料平台正在加紧审核中，请留意电话
				</view>
			</view>
			<!-- 审核成功 -->
			<view class="reject" v-if="state==1">
				<image src="../../static/icon_me_success.png" class="imgrej" mode=""></image>
				<view class="">
					恭喜你，你已成为设计师
				</view>
				<view class="resest" @click="lookcont" style="margin-top: 250rpx;">
					查看电子合同
				</view>
			</view>
		</view>
		<!-- 招募令 -->
		<view class="tokens" style="height: 100%;" v-if="current==5">
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
					<scroll-view scroll-y="true" style="height: 100%;">
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
					<scroll-view scroll-y="true" style="height: 100%;">
						<image style="width: 100%;height: 4444rpx;"
							:src="imgsss+'/uploads/20220107/2921aa0aa63746e12c453c46e965c795.png'" mode=""></image>
					</scroll-view>
				</view>
				<!-- <view class="agree_xieyi" @click="toReg"> -->
				<view class="agree_xieyi" @click="pays">
					我已阅读并同意上述协议,{{pay}}
				</view>
			</view>
		</u-popup>
		<!-- 筛选弹窗 -->
		<u-popup v-model="show" mode="bottom" length="40%" :closeable="true" border-radius="8">
			<view class="klks">全部筛选</view>
			<view class="mids">
				<view class="seath">
					<u-search bg-color="#F2F2F2" @focus="seach_go(888)" v-model="keyword"></u-search>
				</view>
				<view class="type_list">
					<view :class="active==index? 'type_item1':'type_item'" v-for="(item,index) in 3" :key="item"
						@click="active=index">
						个性创新
					</view>
				</view>
			</view>
			<view class="clos">
				<view class="reset" @click="chongzhi">
					重置
				</view>
				<view class="on" @click="shaixuan">
					确定选择
				</view>
			</view>
		</u-popup>
		<!-- 评论弹窗 -->
		<u-pinglun :show="showComment" @zipingjia="pingjia" @fupingjia="pingjia" @chang="chang"
			:pinglun_list="pinglun_list" @guanbi="guanbi"></u-pinglun>
	</view>
</template>

<script>
	import dayjs from "dayjs"
	export default {
		onLoad(ev) {
			this.enjoy()
			this.getdesproMoenys()
		},
		onShow() {

		},
		data() {
			return {
				imgsss: this.$imgPath,
				heigths: 580,
				parsesssss: "",
				recruit_all: [],
				tit: "综合排序",
				fenleideid: "",
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
				list: [{
					name: '热门栏目'
				}, {
					name: '设计大咖'
				}, {
					name: '整装设计师',
				}, {
					name: '定制家具设计师',
				}, {
					name: '成为设计师',
				}, {
					name: '招募令',
				}],
				current: 0,
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
				dsaa: {}
			}
		},
		onShow() {
			this.getstate();
			// this.$api.shenfen({
			// 	id: uni.getStorageSync("user_info").id
			// }).then(data => {
			// 	if (data.data.code == 1) {
			// 	}
			// })
		},
		methods: {
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

							this.enjoy()
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

							this.enjoy()
						} else {
							uni.showToast({
								title: "评论失败",
								icon: "none"
							})
						}
					})
				}

			},
			pinglunaa(ev, index) {
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
			},
			//
			//
			//
			//
			// 跳转设计师详情
			navgepage(item) {
				uni.navigateTo({
					url: `../pagesC/ClubStar?id=${item.id}`
				})
			},
			resss() {
				uni.setStorageSync("reg_des", this.desinfo)
				uni.navigateTo({
					url: "../pagesD/regDesigner/regDesigner"
				})
			},

			pinglun() {
				this.showComment = true;
			},
			// 点赞
			dianzhan(ev) {
				// if(this.$log){
				// 	return
				// }
				let type = ev.zans ? 1 : 0;
				this.$api.zan({
					state: 0,
					video_id: ev.id,
					user_id: uni.getStorageSync("user_info").id,
					type: type
				}).then(data => {
					if (data.data.code == 1) {
						ev.iszan = !ev.iszan
						this.enjoy()
					}
				})
			},
			// 收藏
			collection(ev) {
				// if(this.$log){
				// 	return
				// }
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
			},
			// 跳转填写资料
			toReg() {
				this.showContract = false;
				uni.navigateTo({
					url: "./regDesigner/regDesigner"
				})
			},
			changeTokens(index, item) {
				this.active = index
				this.parsesssss = item.content

			},
			// 查看合同模板
			getcontein(ev) {
				this.fenleideid = ev;
				this.$api.ispay({
					id: this.allssssss[ev].id,
					user_id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						this.pay = '去填写资料'
					} else {
						this.pay = '支付￥' + this.allssssss[ev].money
					}
					this.showContract = true
					this.looks(this.allssssss[ev].doc_url)
				})
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
				// this.getcontein()
				let that = this
				if (this.pay == "填写资料") {
					that.showContract = true
				} else {
					that.$api.buylevel({
						id: that.allssssss[that.fenleideid].id,
						user_id: uni.getStorageSync("user_info").id
					}).then(res => {
						if (res.data.code == 1) {
							that.showContract = false
							setTimeout(() => {
								that.resss()
							}, 1000)
						}
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
									that.showContract = false
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
				}
			},
			// 热门栏目
			enjoy() {
				// if(this.$login){
				// 	return
				// }
				this.$api.enjoy({
					user_id: uni.getStorageSync("user_info").id,
					type: 1
				}).then(data => {
					let aa = []
					data.data.data.status.data.forEach(item => {
						item["iszan"] = false
						item["isfollow"] = false
						if (item.zans) {
							item.iszan = true
						}
						if (item.follow) {
							item.isfollow = true
						}
						item.video = this.$imgPath + item.video
						if (item.state == "1") {
							aa.push(item)
						}
					})
					data.data.data.status.data.forEach(item => {
						item["showComment"] = this.showComment
					})
					this.video = aa
				})
				this.$api.recruit().then(data => {
					if (data.data.code == 1) {
						this.recruit_all = data.data.data.status
						this.parsesssss = this.recruit_all[0].content
					}
				})

			},
			// 设计师列表
			dessel(ev) {
				this.$api.dessel({
					order: ev
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.data.forEach(item => {
							item.createtime = item.createtime * 1000
							item.createtime = dayjs(item.createtime).format('YYYY/MM/DD')
							item.label = item.label ? item.label.split(",") : ""
							item.work = item.work ? item.work.split(",") : ""
						})
						this.designerList = []
						this.designerList = data.data.data.status.data
					}
				})
			},
			change(index) {
				this.current = index
				if (index == 0) {
					this.enjoy()
				}
				if (index > 0 && index < 4) {
					this.dessel(0)
				}
				if (index == 4) {
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
				// this.looks(this.desinfo.contrin)
				uni.navigateTo({
					url: "./hetong"
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
		width: 750rpx;
		height: 82rpx;
		background: #FFFFFF;
		display: flex;
		margin-top: 20rpx;
		padding-left: 80rpx;
		// padding-right: 30rpx;
		box-sizing: border-box;
		align-items: center;
		// justify-content: space-between;
		justify-content: flex-end;
		position: relative;

		.item {
			display: flex;
			align-items: center;
			position: relative;
			z-index: 101;
			margin-right: 30rpx;
		}

		.paxi {
			position: absolute;
			width: 100%;
			// z-index: 2;
			// left:100rpx
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
		}

		.type_item1 {
			width: 210rpx;
			height: 70rpx;
			background: #007399;
			border-radius: 35rpx;
			font-size: 26rpx;
			color: #333;
			text-align: center;
			line-height: 70rpx;
			color: #FFFFFF;
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
			border-radius: 35rpx;
			font-size: 26rpx;
			color: #FFFFFF;
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
			}

			.mian_left_item1 {
				font-size: 26rpx;
				color: #FFFFFF;
				padding: 20rpx;
				box-sizing: border-box;
				width: 100rpx;
				background: #376379;
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
</style>
