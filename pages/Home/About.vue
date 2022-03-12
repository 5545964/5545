<template>
	<view style="background-color: #FFFFFF;">
		<view style="height: 40rpx;">
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		</view>
		<swiper :style="'height: '+heigth+'px;'" :circular="true" :duration="300" @change="lun_change"
			:current="current">
			<swiper-item v-for="(item,index) in lists" :key="index">
				<scroll-view style="height: 100%;" scroll-y="true">
					<view class="swiper-item">
						<view class="top">
							<view class="text">
								{{item.name}}
							</view>
							<view class="xian"></view>
							<view style="height: 20rpx;"></view>
							<view class="content">
								<u-parse :html="item.content"></u-parse>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view :style="'height: '+heigth+'px;'" scroll-y="true">
					<view class="swiper-item" style="height: 100%;padding: 0;">
						<view class="top" style="height: 100%;">
							<view class="text">
								业务地图
							</view>
							<view class="xian" style="margin: 0 30rpx;"></view>
							<view style="height: 20rpx;padding: 0 30rpx;"></view>
							<view style="padding: 0 30rpx;">
								<u-search bgColor="#f6f6f6" placeholder="输入关键字搜索" v-model="keyword"></u-search>
							</view>
							<view style="height: 30rpx;width: 100%;" />
							<view style="height: 100%;">
								<view class="papapa" style="height: 100%;">
									<view class="mian_left">
										<scroll-view scroll-y="true" style="height: 100%;">
											<view style="margin: 40rpx 0;" v-for="(item,index) in datalist" :key="index"
												@click="changeTokens(index,item)">
												<view :class="active==index?'mian_left_item':'mian_left_item1'"
													class="cet">
													<view style="width:100rpx;text-align: left;line-height:35rpx;">
														{{item.title}}
													</view>
												</view>
											</view>
										</scroll-view>
									</view>
									<view class="mian_left">
										<scroll-view scroll-y="true" style="height: 100%;">
											<view style="margin: 40rpx 0;" v-for="(item,index) in datalist0"
												:key="index" @click="changeTokens0(index,item)">
												<view :class="active0==index?'mian_left_item':'mian_left_item1'"
													class="cet">
													<view style="width:100rpx;text-align: left;line-height:35rpx;">
														{{item.title}}
													</view>
												</view>
											</view>
										</scroll-view>
									</view>
									<view class="mian_left">
										<scroll-view scroll-y="true" style="height: 100%;">
											<view style="margin: 40rpx 0;" v-for="(item,index) in datalist1"
												:key="index" @click="changeTokens1(index,item)">
												<view :class="active1==index?'mian_left_item':'mian_left_item1'"
													class="cet">
													<view style="width:100rpx;text-align: left;line-height:35rpx;">
														{{item.title}}
													</view>
												</view>
											</view>
										</scroll-view>
									</view>
									<view class="mian_left">
										<scroll-view scroll-y="true" style="height: 100%;">
											<view style="margin: 40rpx 0;" v-for="(item,index) in datalist2"
												:key="index" @click="changeTokens2(index,item)">
												<view :class="active2==index?'mian_left_item':'mian_left_item1'"
													class="cet">
													<view style="width:100rpx;text-align: left;line-height:35rpx;">
														{{item.title}}
													</view>
												</view>
											</view>
										</scroll-view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view :style="'height: '+heigth+'px;'" scroll-y="true">
					<view class="swiper-item">
						<view class="top">
							<view class="text">
								资讯中心
							</view>
							<view class="xian"></view>
							<view style="height: 20rpx;"></view>
							<view class="hahah" @click="shouURl(item)" v-for="(item,index) in xinxi" :key="index">
								<view class="">
									<view class="hnjh">
										{{item.title}}
									</view>
									<view class="timess">
										{{item.refreshtime_text}}
									</view>
								</view>
								<view class="">
									<image class="imghjk" :src="imgPath+item.simage" mode="aspectFit">
									</image>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
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
					<view class="cet" style="margin:10rpx 0;justify-content: end;">
						<view style="width:30%;display:flex;justify-content: flex-end;">
							<view class="yuan" @click="hahaha(tanchaung)">
								<u-icon v-if="tanchaung.check" name="checkbox-mark" color="#2979ff" size="28"></u-icon>
							</view>
						</view>
						<view class="mingcheng" @click="shouURl(tanchaung)">
							《{{tanchaung.name}}》
						</view>
					</view>
				</view>
				<view class="anniusss">
					<view class="hkhnij" @click="yuedu = false">
						取消
					</view>
					<view class="hkhnij jjhgj" @click="tongyixieyi(tanchaung)">
						同意
					</view>
				</view>
			</view>
		</u-popup>
		<u-popup width="500" border-radius="30" v-model="yuedus" mode="center">
			<view class="yueduwo">
				<view class="texts">
					{{qianyue}}
				</view>
				<view class="textsss">
					{{huxing}}
				</view>
				<view class="llll" @click="llll">
					楼盘设计
				</view>
				<view class="kkkk" @click="kkkk">
					户型攻略
				</view>
			</view>
		</u-popup>
		<u-kehu url="./booking/AppointmentDesign" heigth="1000"></u-kehu>
		<u-back-top :scroll-top="0"></u-back-top>
		<tab-bar v-if="!yuedu"></tab-bar>
	</view>
</template>

<script>
	import dayjs from "@/dayjs"
	export default {
		data() {
			return {
				idid: "",
				loupanid: "",
				qianyue: "",
				huxing: "",
				yuedus: false,
				yuedu: false,
				xieyi: [],
				keyword: "",
				heigth: 0,
				list: [{
						id: 0,
						name: '品牌故事',
						content: ""
					},
					{
						id: 2,
						name: '创始人',
						content: ""
					},
					{
						id: 3,
						name: '方黄集团',
						content: ""
					},
					{
						id: 1,
						name: '业务地图',
						content: ""
					},
					{
						name: '资讯中心'
					}
				],
				lists: [{
						id: 0,
						name: '品牌故事',
						content: ""
					},
					{
						id: 2,
						name: '创始人',
						content: ""
					},
					{
						id: 3,
						name: '方黄集团',
						content: ""
					}
				],
				current: 0,
				xinxi: [],
				imgPath: this.$imgPath,
				imgsss: '<img src=\"' + this.$imgPath,
				active: 0,
				datalist: [],
				active0: 0,
				datalist0: [],
				active1: 0,
				datalist1: [],
				active2: 0,
				datalist2: [],
				tanchaung: {}
			};
		},
		onLoad() {
			this.alls()
		},
		onShow() {
			this.active = 0
			this.active0 = 0
			this.active1 = 0
			this.active2 = 0
			const res = uni.getSystemInfoSync();
			this.heigth = res.windowHeight;
		},
		onPullDownRefresh() {
			this.alls()
		},
		methods: {
			kkkk() {
				uni.navigateTo({
					url: "../pagesC/HouseDesign?current=2"
				})
			},
			llll() {
				uni.navigateTo({
					url: "../pagesC/HouseDesign"
				})
			},
			// 康复文本
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
			// 同意协议
			tongyixieyi(ev) {
				if (ev.check) {
					this.$api.tjsq({
						user_id: uni.getStorageSync("user_info").id,
						bid: this.loupanid,
						sole_type: this.idid
					}).then(data => {
						if (data.data.code == 1) {

						}
					})
				} else {
					uni.showToast({
						title: "请阅读并同意协议",
						icon: "none"
					})
				}

			},
			lp(ev) {
				console.log(ev);
				this.$api.lpmap({
					id: ev
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							item["check"] = false
							item["name"] = item.title + "的相关协议"
						})
						this.datalist2 = data.data.data.status
					} else {
						this.datalist2 = []
					}
				})
			},
			alls() {
				this.$api.map().then(data => {
					if (data.data.code == 1) {
						this.datalist = [...data.data.data.status]
						if (this.datalist[0].child) {
							this.datalist0 = [...this.datalist[0].child]
							if (this.datalist0[0].child) {
								this.datalist1 = [...this.datalist0[0].child]
								this.lp(this.datalist1[0].id)
							}
						}
						uni.stopPullDownRefresh();
					}
				})
				this.$api.pots({
					limit: 1000
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.data.forEach(item => {
							item.content = item.content.replace(/\<img src=\"/gi, this.imgsss);
						})
						this.xinxi = data.data.data.status.data
						uni.stopPullDownRefresh();
					}
				})
				this.lists.forEach(item => {
					this.$api.bydadout({
						state: item.id
					}).then(data => {
						if (data.data.code == 1) {
							item.content = data.data.data.status[0].content.replace(/\<img src=\"/gi, this
								.imgsss);
						}
					})
				})

			},
			changeTokens2(index, item) {
				this.loupanid = item.id
				let aa = uni.getStorageSync("user_info")
				item.check = false
				this.tanchaung = item
				if (aa) {
					if (item.sign_did == 0) {
						if (aa.des != 0) {
							this.yuedu = true
							this.idid = 1
						}
						return
					}
					if (item.sign_bid == 0) {
						if (aa.bbs.id != 0) {
							this.yuedu = true
							this.idid = 0
						}
						return
					}
					if (item.sign_bid == aa.id || item.sign_did == aa.id) {
						this.qianyue = "您的申请已通过"
						this.huxing = "您的申请已通过，请及时上传对应楼盘方案及户型攻略。"
						this.yuedus = true;
						return
					}
					this.qianyue = "该楼盘已被签约"
					this.huxing = "该楼盘已被其他设计师签约，您可签约其他楼盘或查看楼盘设计和户型攻略。"
					this.yuedus = true;
				}
				this.active2 = index
			},
			changeTokens1(index, item) {
				this.lp(item.id)

				this.active1 = index
			},
			changeTokens0(index, item) {
				console.log(index, item);
				if (item.child) {
					this.datalist1 = [...item.child]
					this.lp(this.datalist1[0].id)
				} else {
					this.datalist1 = []
					this.datalist2 = []
				}
				this.active0 = index

			},
			changeTokens(index, item) {
				this.active0 = 0
				this.active1 = 0
				this.active2 = 0
				if (item.child) {
					this.datalist0 = [...item.child]
					if (this.datalist0[0].child.length != 0) {
						this.datalist1 = [...this.datalist0[0].child]
						this.lp(this.datalist1[0].id)
					}
				} else {
					this.datalist0 = []
					this.datalist1 = []
					this.datalist2 = []
				}
				this.active = index
			},
			shouURl(ev) {
				uni.setStorageSync("fuwenbeng", ev.content)
				uni.navigateTo({
					url: "../pagesC/fuwenben?title=" + ev.title
				})
			},
			lun_change(index) {
				this.current = index.detail.current;
			},
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.yueduwo {
		background-color: #FFFFFF;

		.kkkk {
			margin: 30rpx;
			height: 70rpx;
			line-height: 70rpx;
			background: #E6F1F5;
			border: 2rpx solid #007399;
			border-radius: 35rpx;
			font-size: 26rpx;
			font-weight: 400;
			color: #007399;
			text-align: center;
		}

		.llll {
			margin: 30rpx;
			height: 70rpx;
			line-height: 70rpx;
			background: #007399;
			border-radius: 35rpx;
			text-align: center;
			font-size: 26rpx;
			font-weight: 400;
			color: #FFFFFF;
		}

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

		.textsss {
			padding: 0 26rpx;
			text-align: center;
			font-size: 28rpx;
			font-weight: 400;
			color: #333333;
		}

		.text {
			text-align: center;
			line-height: 100rpx;
			font-weight: bold;
			font-size: 30rpx;
		}

		.texts {
			text-align: center;
			line-height: 100rpx;
			font-weight: bold;
			font-size: 36rpx;
		}
	}

	.papapa {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.mian_left {
		height: 100%;
		width: 25%;
		border-left: 2rpx solid #f0f0f0;
	}

	.mian_left_item {
		font-size: 24rpx;
		font-weight: 400;
		color: #007399;
		font-weight: bold;
		padding: 0 30rpx;
		border-left: 4rpx solid #007399;
	}

	.mian_left_item1 {
		font-size: 24rpx;
		font-weight: 400;
		color: #333333;
		padding: 0 30rpx;
		border-left: 4rpx solid #FFFFFF;
	}

	.imghjk {
		width: 100rpx;
		height: 100rpx;
	}

	.timess {
		font-size: 20rpx;
		color: #aaaaa9;
		padding-top: 10rpx;
	}

	.hnjh {
		color: #070302;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 25rpx;
	}

	.hahah {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #fafafa;
		margin-bottom: 30rpx;
		padding: 20rpx;
	}


	.swiper-item {
		padding: 0 30rpx;

		.top {
			background-color: #FFFFFF;

			.text {
				text-align: center;
				padding-top: 50rpx;
				padding-bottom: 40rpx;
				font-size: 30rpx;
				font-weight: 400;
				color: #000000;
			}

			.xian {
				width: 100%;
				height: 2rpx;
				background: #F0F0F0;
			}
		}
	}

	.content {
		padding: 0rpx;
		font-size: 0rpx;
	}
</style>
