<template>
	<view style="background-color: #FFFFFF;">
		<view style="height: 40rpx;">
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		</view>
		<view class="">
			<swiper :style="'height: '+heigth+'px;'" :circular="true" :duration="300" @change="lun_change"
				:current="current">
				<swiper-item v-for="(item,index) in lists" :key="index">
					<scroll-view style="height: 100%;" scroll-y="true">
						<view class="swiper-item">
							<view class="top">
								<view class="text">
									{{item.name||""}}
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
									<u-search bgColor="#f6f6f6" placeholder="输入关键字搜索" v-model="keyword"
										@search="like()">
									</u-search>
								</view>

								<view
									style="width: 100%;text-align: center;height: 60rpx;line-height: 60rpx;display: flex;align-items: center;justify-content: center;"
									@click="show = true">
									<view class="">
										{{xuanzhe}}
									</view>
									<image src="../../static/icon_home_sanjiao.png"
										style="width: 30rpx;height: 20rpx;margin-left: 20rpx;" />
								</view>

								<view style="height: 30rpx;width: 100%;" />
								<view style="height: 100%;">
									<!-- <view class="papapa" v-if="lickc.length!=0"
										style="margin-bottom:30rpx;border-bottom: 1px solid #007399;padding-bottom:10rpx;">
										<view class="mian_left">
											<scroll-view scroll-y="true" style="height: 100%;">
												<view style="margin-bottom:20rpx;">
													<view class="mian_left_item cet">
														<view style="width:100rpx;text-align: left;line-height:35rpx;">
															{{lickc[0].title||""}}
														</view>
													</view>
												</view>
											</scroll-view>
										</view>
										<view class="mian_left">
											<scroll-view scroll-y="true" style="height: 100%;">
												<view style="margin-bottom:20rpx;">
													<view class="mian_left_item cet">
														<view style="width:100rpx;text-align: left;line-height:35rpx;">
															{{lickc[1].title||""}}
														</view>
													</view>
												</view>
											</scroll-view>
										</view>
										<view class="mian_left">
											<scroll-view scroll-y="true" style="height: 100%;">
												<view style="margin-bottom:20rpx;">
													<view class="mian_left_item cet">
														<view style="width:100rpx;text-align: left;line-height:35rpx;">
															{{lickc[2].title||""}}
														</view>
													</view>
												</view>
											</scroll-view>
										</view>
										<view class="mian_left">
											<scroll-view scroll-y="true" style="height: 100%;">
												<view style="margin-bottom:20rpx;" v-for="(item,index) in lickc[3]"
													:key="index" @click="lidsadsa(index,item)">
													<view :class="active22==index?'mian_left_item':'mian_left_item1'"
														class="cet">
														<view style="width:100rpx;text-align: left;line-height:35rpx;">
															{{item.title||""}}
														</view>
													</view>
												</view>
											</scroll-view>
										</view>
									</view> -->
									<view class="papapa" style="height: 100%;">
										<view class="mian_left" v-for="(item,index) in datalist" :key="index">
											<scroll-view scroll-y="true" style="height: 100%;">
												<view style="margin-bottom:20rpx;" v-for="(items,indexs) in item"
													:key="indexs" @click="changeTokens(index,indexs)">
													<view
														:class="items.active==indexs?'mian_left_item':'mian_left_item1'"
														class="cet">
														<view style="width:100rpx;text-align: left;line-height:35rpx;">
															{{items.title||""}}
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
											{{item.title||""}}
										</view>
										<view class="timess">
											{{item.refreshtime_text||""}}
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
		</view>
		<view>
			<u-select v-model="show" :list="columns" @confirm="confirm"></u-select>
			<!-- 服务协议和隐私政策 -->
			<u-popup width="500" border-radius="30" v-model="yuedu" mode="center">
				<view class="yueduwo">
					<view class="text">
						服务协议和隐私政策
					</view>
					<view class="textss">
						感谢您使用宝芸邸，我们会严格按照法律规定存储和使用您的个人信息。您可以阅读以下协议了解详细信息。如您同意，请勾选协议并点击”同意”开始接受我们的服务。
					</view>
					<view style="padding:20rpx 0;" v-if="tanchaung.quxian">
						<view class="cet" style="margin:10rpx 0;justify-content: center;">
							<view style="display:flex;align-items: center;" v-for="(item,index) in xieyi" :key="index">
								<view>
									<view class="yuan" @click="hahaha(item)">
										<u-icon v-if="item.check" name="checkbox-mark" color="#2979ff" size="28">
										</u-icon>
									</view>
								</view>
								<view style="padding: 0 10rpx;">
									<view class="mingcheng" @click="shouURls(item)">
										《{{item.name||""}}》
									</view>
								</view>
							</view>
						</view>
					</view>
					<view style="padding:20rpx 0;" v-else>
						<view class="cet" style="margin:10rpx 0;justify-content: center;">
							<view style="display:flex;align-items: center;">
								<view>
									<view class="yuan" @click="hahaha(tanchaung)">
										<u-icon v-if="tanchaung.check" name="checkbox-mark" color="#2979ff" size="28">
										</u-icon>
									</view>
								</view>
								<view style="padding: 0 10rpx;">
									<view class="mingcheng" @click="shouURls(tanchaung)">
										《{{tanchaung.name||""}}》
									</view>
								</view>
							</view>
						</view>
					</view>

					<view class="anniusss">
						<view class="hkhnij" @click="yuedu = false">
							取消
						</view>

						<view class="hkhnij jjhgj" @click="tongyixieyi(0)" v-if="tanchaung.quxian">
							同意
						</view>
						<view class="hkhnij jjhgj" @click="tongyixieyi(tanchaung)" v-else>
							同意
						</view>
					</view>
				</view>
			</u-popup>
			<!-- b1推广权 -->
			<u-popup width="500" border-radius="30" v-model="shengqings" mode="center">
				<view class="yueduwo">
					<view class="text">
						楼盘推广权申请
					</view>
					<view class="textss" style="padding: 30rpx;">
						是否申请<text class="mingcheng">{{shengqing}}</text>的推广权
					</view>

					<view class="anniusss">
						<view class="hkhnij" @click="shengqings = false">
							否
						</view>
						<view class="hkhnij jjhgj" @click="tuihuang(tanchaung)">
							是
						</view>
					</view>
				</view>
			</u-popup>
			<!-- 成为设计师或美居会员 -->
			<!-- 跳转楼盘设计或户型攻略 -->
			<u-popup width="500" border-radius="30" v-model="yuedus" mode="center">
				<view class="yueduwo">
					<view class="texts">
						{{qianyue||""}}
					</view>
					<view class="textsss">
						{{huxing||""}}
					</view>
					<view class="" v-if="!cduan">
						<view class="llll" @click="llll()">
							楼盘设计
						</view>
						<view class="kkkk" @click="kkkk()">
							户型攻略
						</view>
					</view>
					<view class="" v-else>
						<view class="llll" @click="duan(0)">
							成为设计师
						</view>
						<view class="kkkk" @click="duan(1)">
							成为美居会员
						</view>
					</view>
				</view>
			</u-popup>

			<u-popup width="500" border-radius="30" v-model="shenghe" mode="center">
				<view class="yueduwo">
					<view class="texts">
						{{mnmn||""}}
					</view>
					<view class="textsss" style="margin:30px 0;">
						{{nmnm||""}}
					</view>
					<view class="lllls" v-if="shenghebut" @click="shenghe = false">
						确定
					</view>
					<view class="anniusss" v-else>
						<view class="hkhnij" @click="shenghe = false">
							取消
						</view>
						<view class="hkhnij jjhgj" @click="chongxin()">
							重新申请
						</view>
					</view>
				</view>
			</u-popup>


			<u-popup width="500" border-radius="30" v-model="shenghevv" mode="center">
				<view class="yueduwo">
					<view class="texts">
						{{mnmn||""}}
					</view>
					<view class="textsss" style="margin:30px 0;">
						{{nmnm||""}}
					</view>
					<view class="lllls" v-if="shenghebutvv" @click="shenghevv = false">
						确定
					</view>
					<view class="anniusss" v-else>
						<view class="hkhnij" @click="shenghevv = false">
							取消
						</view>
						<view class="hkhnij jjhgj" @click="chongxing()">
							重新申请
						</view>
					</view>
				</view>
			</u-popup>
			<u-kehu url="./booking/AppointmentDesign" heigth="1000"></u-kehu>
			<u-toast ref="uToast" />
			<u-back-top :scroll-top="0"></u-back-top>
		</view>
		<u-dianji v-show="!yuedu"></u-dianji>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shengqings: "",
				shengqing: false,
				user_infos: "",
				des_infos: "",
				mm: [],
				zhuangtai: 0,
				xuanzhe: "",
				show: false,
				columns: [],
				cduan: false,
				nmnm: "",
				mnmn: "",
				shenghe: false,
				shenghevv: false,
				loupanid: "",
				qianyue: "",
				huxing: "",
				yuedus: false,
				yuedu: false,
				xieyi: [],
				keyword: "",
				heigth: 0,
				mobanid: [
					'qFe_Sxyot4g5R2qJhpo5ECIp6TvRjYFY3g-WIVAgjXU',
				],
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
						name: '方黄股份',
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
						name: '方黄股份',
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
				active22: 0,
				datalist2: [],
				tanchaung: {},
				agid: "",
				lickc: [],
				klklkl: 0,
				lickid: 0,
				jiji: "",
				idid: 0,
				// idid 0是楼盘B端协议
				// idid 1是楼盘D端协议
				idids: 0,
				// idids 0是楼盘B端协议
				// idids 1是楼盘D端协议
				shenghebut: true, //重新申请按钮
				shenghebuts: true, //重新申请按钮
				Bsan: false,
				shenghebutvv: true, //重新申请按钮
				diyici: 1
			};
		},
		onLoad(ev) {
			if (ev.titit) {
				this.current = 4
			}
			this.columns = []
			this.xuanzhe = ""
			this.allls()
		},
		onShow() {
			this.xuanzhe = ""
			this.columns = []
			this.current = 0
			this.user_infos = uni.getStorageSync("user_info")
			this.des_infos = uni.getStorageSync("des_info")
			this.idid = 0
			uni.setStorageSync("idid", this.idid)
			this.alls()
			this.shenghebuts = true
			this.Bsan = false
			const res = uni.getSystemInfoSync();
			this.heigth = res.windowHeight;
		},
		methods: {
			// 申请推广
			tuihuang() {
				this.$api.blp({
					lpid: this.tanchaung.id,
					user_id: this.user_infos.id
				}).then(data => {
					uni.showToast({
						title: data.data.msg,
						icon: "none"
					})
					this.shengqings = false
				})
			},
			// 成为设计师
			duan(ev) {
				if (ev == 0) {
					uni.reLaunch({
						url: "./Investment?is_re=1"
					})
				} else {
					uni.navigateTo({
						url: "../pagesB/shengfen"
					})
				}
			},
			// 搜索
			like() {
				this.$api.likelp({
					title: this.keyword,
					id: this.lickid
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							item["check"] = false
							item["name"] = item.title + "的相关协议"
						})
						this.datalist2 = data.data.data.status
						this.active2 = 0
					} else {
						this.datalist2 = []
						uni.showToast({
							title: "暂无数据",
							icon: "none"
						})
					}
				})
			},
			// 户型攻略
			kkkk() {
				uni.navigateTo({
					url: "../pagesC/HouseDesign?current=2"
				})
			},
			// 楼盘设计
			llll() {
				if (this.klklkl == 1) {
					uni.navigateTo({
						url: "../pagesD/uploadCase"
					})
				} else {
					uni.navigateTo({
						url: "../pagesC/HouseDesign"
					})
				}
			},
			// 点击协议圆圈
			hahaha(item) {
				item.check = !item.check
				this.$forceUpdate();
			},
			// 同意协议
			tongyixieyi(ev) {
				// 签约区域
				if (ev == 0) {
					let aa = []
					this.xieyi.forEach(item => {
						if (item.check) {
							aa.push(item)
						}
					})
					if (aa.length != this.xieyi.length) {
						return uni.showToast({
							title: "请阅读并同意协议",
							icon: "none"
						})
					}
					aa.forEach(item => {
						this.$api.userag({
							userid: uni.getStorageSync("user_info").id,
							agid: item.id,
							title: item.name
						})
					})
					this.$api.tjsq({
						user_id: uni.getStorageSync("user_info").id,
						bid: this.xieyi[0].datalist.id,
						sole_type: 2,
						cate: 1
					}).then(data => {
						if (data.data.code == 1) {
							this.Bsan = false
							this.shenghebutvv = true
							this.$refs.uToast.show({
								title: '区域申请成功，请留意系统消息查看审核结果。',
								type: 'default'
							})
						} else {
							this.$refs.uToast.show({
								title: data.data.msg,
								type: 'default'
							})
						}
						this.yuedu = false
					})
					return
				}
				// 签约楼盘
				if (ev.check) {
					let aa = 0
					if (this.idids == 1) {
						aa = 48
					}
					if (this.idids == 0) {
						aa = 49
					}
					this.$api.userag({
						userid: uni.getStorageSync("user_info").id,
						agid: aa,
						lpid: this.tanchaung.id,
						title: this.tanchaung.title
					})
					this.$api.tjsq({
						user_id: uni.getStorageSync("user_info").id,
						bid: this.loupanid,
						sole_type: this.idids,
						cate: 0
					}).then(data => {
						if (data.data.code == 1) {
							this.$refs.uToast.show({
								title: '楼盘申请成功，请留意系统消息查看审核结果。',
								type: 'default'
							})
						} else {
							this.$refs.uToast.show({
								title: data.data.msg,
								type: 'default'
							})
						}
						this.yuedu = false
					})
				} else {
					uni.showToast({
						title: "请阅读并同意协议",
						icon: "none"
					})
				}
			},
			// 弹窗
			confirm(ev) {
				this.xuanzhe = ev[0].label
				this.mao(ev[0].value, 0, 0)
			},

			// 切换选项，签约区县
			changeTokens(index, indexs) {
				let data = this.datalist[index][indexs]
				console.log(data, "第" + index + "排第" + indexs + "个");
				// 选中颜色
				this.datalist[index].forEach(item => {
					item.active = indexs
				})
				// 下一级数据处理
				let del = []
				this.datalist.forEach((item, indexa) => {
					if (indexa > index) {
						del.push(indexa)
					}
				})
				del.forEach(item => {
					this.datalist.splice(item, 1)
				})
				this.mao(data.id, index + 1, indexs)
				if (this.user_infos.bbs.typesk == "yiji" && index == 0) {
					return
				}
				this.changeTokens2(data)






				if (false) {
					if (this.datalist[index][indexs].address) {
						// 楼盘
						if (this.user_infos.bbs.id != 3 || this.user_infos.des != 0) {
							this.changeTokens2(this.datalist[index][indexs])
						} else {
							return this.$refs.uToast.show({
								title: '您不能签约楼盘',
								type: 'default'
							})
						}
					} else {

						// B3签约区县
						if (this.Bsan) {
							if (this.user_infos.bbs.id == 3 && this.datalist[index][indexs].did == 0 && this
								.datalist[index][
									indexs
								].level >= 3) {
								this.tanchaung["quxian"] = true
								let aa = uni.getStorageSync("xieyi")
								let cc = []
								aa.forEach(item => {
									if (item.state == 12) {
										item["datalist"] = this.datalist[index][indexs]
										item["quxian"] = true
										item.name = this.datalist[index][indexs].title + "的相关协议"
										cc.push(item)
									}
								})
								this.xieyi = [...cc]
								this.yuedu = true
							} else {
								if (this.user_infos.bbs.id == 3) {
									let text = "此区域已被其他美居会员签约,请选择其他区域"
									this.$refs.uToast.show({
										title: text,
										type: 'default'
									})
								}

							}
							return
						}
						this.$api.mapstation({
							user_id: this.user_infos.id,
							bid: this.datalist[index][indexs].id,
							type: 2
						}).then(data => {
							// 提交签约
							if (data.data.code == 0) {
								// 审核拒绝
								if (data.data.data.code == 3) {
									this.mnmn = "美居独家区域经营权"
									this.nmnm = data.data.data.reason
									this.shenghebutvv = false
									this.shenghevv = true;
									return
								}

								if (this.user_infos.bbs.id == 3 && this.datalist[index][indexs].did == 0 && this
									.datalist[index][
										indexs
									].level >= 3) {
									this.tanchaung["quxian"] = true
									let aa = uni.getStorageSync("xieyi")
									let cc = []
									aa.forEach(item => {
										if (item.state == 12) {
											item["datalist"] = this.datalist[index][indexs]
											item["quxian"] = true
											item.name = this.datalist[index][indexs].title + "的相关协议"
											cc.push(item)
										}
									})
									this.xieyi = [...cc]
									this.yuedu = true
								} else {
									if (this.user_infos.bbs.id == 3) {
										let text = "此区域已被其他美居会员签约,请选择其他区域"
										this.$refs.uToast.show({
											title: text,
											type: 'default'
										})
									}
								}
							}
							// 已经签约
							if (data.data.code == 1) {
								if (this.user_infos.bbs.id == 3 && this.datalist[index][indexs].level >= 3) {
									this.shenghebutvv = true
									let text = ""
									if (this.datalist[index][indexs].did == this.user_infos.id) {
										text = "此区域已被您签约"
									} else {
										text = "此区域已被其他美居会员签约,请选择其他区域"
									}
									this.$refs.uToast.show({
										title: text,
										type: 'default'
									})
								}
							}
							// 审核中
							if (data.data.code == 2) {
								this.shenghebutvv = true
								this.mnmn = "美居独家区域经营权"
								this.nmnm = data.data.msg
								this.shenghevv = true;
							}
						})
					}
				}

			},
			// 楼盘签约
			async changeTokens2(item) {
				console.log(item);
				// this.idid = 0
				this.lickc = []
				this.shenghebut = true;
				if (await this.$login()) {
					this.loupanid = item.id
					item.check = false
					this.tanchaung = item
					// // 判断会员
					let aa = this.user_infos

					if (!aa.bbs.id && aa.des == 0) {
						this.qianyue = "您还不是设计师或美居会员"
						this.huxing = "点击前往成为美居设计师或美居会员"
						this.cduan = true
						this.yuedus = true
					}
					if (this.user_infos.bbs.id == 3 && item.address) {
						return;
						this.$refs.uToast.show({
							title: '您不能签约楼盘',
							type: 'default'
						})
					}
					if (this.user_infos.bbs.id == 3 && item.level < 3) {
						return
					}
					if (this.user_infos.bbs.id != 3 && !item.address) {
						return
					}

					// 有设计师就切换身份
					if (item.address) {
						if (aa.des == 4 && item.diyici == 1) {
							item.diyici++
							// if (this.idid == 1) {
							// 	this.idid = 0
							// } else {							}
							this.idid = 1
						}
					} else {
						this.idid = 2
					}



					uni.setStorageSync("idid", this.idid)
					this.$api.mapstation({
						user_id: aa.id,
						bid: item.id,
						type: this.idid
					}).then(data => {
						if (true) {
							console.log("------------------------------------");
							console.log(data.data.code, "data.data.code");
							console.log("------------------------------------");
							console.log(item.sign_bid, "item.sign_bid");
							console.log(item.sign_did, "item.sign_did");
							console.log("------------------------------------");
							console.log(this.idid, "this.idid");
							console.log("------------------------------------");
							console.log(aa.bbs.id, "aa.bbs.id");
							console.log(aa.des, "aa.des");
							console.log("------------------------------------");
							console.log(this.shenghebuts, "this.shenghebuts");
							console.log("------------------------------------");
							console.log("------------------------------------");
							console.log("------------------------------------");
						}
						if (false) {} else if (data.data.code == 0) {
							if (this.idid == 1) {
								this.mnmn = "美居独家设计权申请正在审核"
							} else {
								this.mnmn = "美居独家经营权申请正在审核"
							}
							this.nmnm = "楼盘申请成功，请留意系统消息查看审核结果"
							this.shenghe = true;
						} else if (data.data.code == 1) {
							item.diyici = 1
							this.idids = 1
							this.klkl(item.id, 0)
							this.yuedu = true
						} else if (data.data.code == 3) {
							this.idid = 0
							this.qianyue = "美居独家设计权申请已通过"
							this.klklkl = 1
							this.huxing = "您的申请已通过，请及时上传对应楼盘方案及户型攻略。"
							this.yuedus = true;
						} else if (data.data.code == 4) {
							this.idid = 1
							this.mnmn = "美居独家设计权申请被拒绝"
							this.nmnm = data.data.data
							this.shenghe = true;
							this.shenghebut = false;
							this.shenghebuts = false;
						} else if (data.data.code == 5) {
							this.idid = 1
							this.shengqing = this.tanchaung.names
							this.shengqings = true
						} else if (data.data.code == 6) {
							console.log("");
						} else if (data.data.code == 7) {
							this.mnmn = "美居独家经营权申请正在审核"
							this.nmnm = "楼盘申请成功，请留意系统消息查看审核结果"
							this.shenghe = true;
						} else if (data.data.code == 8) {
							this.qianyue = "美居独家经营权申请已通过"
							this.klklkl = 0
							this.huxing = "您的申请已通过！" //，请及时上传对应楼盘方案及户型攻略。
							this.yuedus = true;
						} else if (data.data.code == 9) {
							this.mnmn = "美居独家经营权申请被拒绝"
							this.nmnm = data.data.data
							this.shenghe = true;
							this.shenghebut = false;
							this.shenghebuts = false;

						} else if (data.data.code == 10) {
							// B2签约
							if (this.idid == 0 && item.sign_bid == 0 && aa.bbs.id == 2) {
								// 签约时候的协议ID
								this.idids = 0
								// 协议
								this.klkl(item.id, 1)
								this.yuedu = true
								return
							}
							// 设计师
							if (this.idid == 1 && item.sign_did == 0 && aa.des == 4) {
								// 签约时候的协议ID
								this.idids = 1
								// 协议
								this.klkl(item.id, 0)
								this.yuedu = true
								return
							}
							if (item.sign_bid != 0 || item.sign_did != 0) {
								// B2,D2签约楼盘状态
								if (aa.bbs.id != 1 && aa.bbs.id != 3) {
									this.qianyue = "该楼盘已被签约"
									if (item.sign_bid == aa.id || item.sign_did == aa.id) {
										this.huxing = "该楼盘已被您签约，您可签约其他楼盘或查看楼盘设计和户型攻略。"
									} else {
										this.huxing = "该楼盘已被其他人签约，您可签约其他楼盘或查看楼盘设计和户型攻略。"
									}
									this.yuedus = true;
								}
							}
						} else if (data.data.code == 11) {
							this.$refs.uToast.show({
								title: data.data.msg,
								type: 'default'
							})
						} else if (data.data.code == 12) {
							let text = "此区域已被您签约"
							this.$refs.uToast.show({
								title: text,
								type: 'default'
							})
						} else if (data.data.code == 13) {
							this.mnmn = "美居独家区域经营权"
							this.nmnm = data.data.data
							this.shenghebutvv = false
							this.shenghevv = true;

						} else if (data.data.code == 14) {
							this.tanchaung["quxian"] = true
							let aa = uni.getStorageSync("xieyi")
							let cc = []
							aa.forEach(items => {
								if (items.state == 12) {
									items["datalist"] = item
									items["quxian"] = true
									items.name = item.title + "的相关协议"
									cc.push(items)
								}
							})
							this.xieyi = [...cc]
							this.yuedu = true
						} else if (data.data.code == 20) {
							let text = "此区域已被别人签约"
							this.$refs.uToast.show({
								title: text,
								type: 'default'
							})
						}



























						if (false) {
							if (data.data.code == 0) {
								// 重新购买
								if (this.shenghebuts && data.data.data.code == 3) {
									// B，D端被拒绝
									if (this.idid == 1) {
										this.mnmn = "美居独家设计权申请被拒绝"
									} else {
										this.mnmn = "美居独家经营权申请被拒绝"
									}
									this.nmnm = data.data.data.reason
									this.shenghe = true;
									this.shenghebut = false;
									this.shenghebuts = false;
									return
								}
								// B1签约推广
								if (aa.bbs.id == 1) {
									if (aa.des == 4) {
										if (item.sign_did == aa.id) {
											this.shengqing = this.tanchaung.names
											this.shengqings = true
										}
									} else {
										this.shengqing = this.tanchaung.names
										this.shengqings = true
									}
								}
								// B2签约
								if (item.sign_bid == 0 && aa.bbs.id == 2) {
									// 签约时候的协议ID
									this.idids = 0
									// 协议
									this.klkl(item.id, 1)
									this.yuedu = true
									return
								}
								// 设计师
								if (this.idid == 1 && item.sign_did == 0 && aa.des == 4) {
									// 签约时候的协议ID
									this.idids = 1
									// 协议
									this.klkl(item.id, 0)
									this.yuedu = true
									return
								}
								if (item.sign_bid != 0 || item.sign_did != 0) {
									// B2,D2签约楼盘状态
									if (aa.bbs.id != 1 && aa.bbs.id != 3) {
										this.qianyue = "该楼盘已被签约"
										if (item.sign_bid == aa.id || item.sign_did == aa.id) {
											this.huxing = "该楼盘已被您签约，您可签约其他楼盘或查看楼盘设计和户型攻略。"
										} else {
											this.huxing = "该楼盘已被其他设计师签约，您可签约其他楼盘或查看楼盘设计和户型攻略。"
										}
										this.yuedus = true;
									}
								}
								// 申请已通过
							} else if (data.data.code == 1) {
								if (this.idid == 1) {
									this.qianyue = "美居独家设计权申请已通过"
									this.klklkl = 1
								} else {
									this.qianyue = "美居独家经营权申请已通过"
									this.klklkl = 0
								}
								this.huxing = "您的申请已通过，请及时上传对应楼盘方案及户型攻略。"
								this.yuedus = true;
								// 申请正在审核
							} else if (data.data.code == 2) {
								if (this.idid == 1) {
									this.mnmn = "美居独家设计权申请正在审核"
								} else {
									this.mnmn = "美居独家经营权申请正在审核"
								}
								this.nmnm = "楼盘申请成功，请留意系统消息查看审核结果"
								this.shenghe = true;
								// 楼盘已被申请
							} else if (data.data.code == 3) {
								if (this.user_infos.bbs.id != 1) {
									if (this.idid == 1) {
										this.mnmn = "美居独家设计权"
									} else {
										this.mnmn = "美居独家经营权"
									}
									this.nmnm = "楼盘已被申请，请选择其他楼盘"
									this.shenghe = true;
								}
							}
						}
					})
				}
			},
			chongxing() {
				this.shenghevv = false;
				this.tanchaung.quxian = true
				let aa = uni.getStorageSync("xieyi")
				let cc = []
				aa.forEach(items => {
					if (items.state == 12) {
						items.datalist = this.tanchaung
						items.quxian = true
						items.name = this.tanchaung.title + "的相关协议"
						cc.push(items)
					}
				})
				this.xieyi = [...cc]
				this.yuedu = true
			},
			// 列表数据加载
			mao(ev, index, indexs) {
				this.$api.map({
					pid: ev
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							item["active"] = 0
						})
						if (data.data.data.status.length != 0) {
							this.datalist0 = []
							this.datalist0 = [...this.datalist]
							this.datalist0[index] = [...data.data.data.status]
							this.datalist = [...this.datalist0]
							this.mao(this.datalist[index][0].id, index + 1, 0)
							this.zhuangtai = index + 1
						} else {
							let bb = this.datalist.length
							this.lp(ev, index)
						}
					}
				})
			},
			// 楼盘列表
			lp(ev, index) {
				this.$api.lpmap({
					id: ev
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							item["check"] = false
							item["name"] = item.title + "的相关协议"
							item["names"] = item.title
							item["active"] = 0
							item["quxian"] = false
							item["diyici"] = 1
						})
						this.datalist0 = [...this.datalist]
						this.datalist0[index] = [...data.data.data.status]
						this.datalist = [...this.datalist0]
					}
				})
			},
			allls() {
				// 咨询中心
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
				// 前三项
				for (let i in this.lists) {
					this.$api.bydadout({
						state: this.lists[i].id
					}).then(data => {
						if (data.data.code == 1) {
							this.lists[i].content = data.data.data.status[0].content.replace(/\<img src=\"/gi, this
								.imgsss);
						}
					})
				}
			},
			alls() {
				// 用户信息
				this.$api.myuser({
					user_id: uni.getStorageSync("user_info").id || 0
				}).then(data => {
					if (data.data.code == 1) {
						uni.setStorageSync("user_info", data.data.data.myuser)
					}
				})
				// 业务地图
				this.$api.map({
					pid: this.pid
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach((item, index) => {
							item["value"] = item.id
							item["label"] = item.title
							item["active"] = 0
						})
						this.columns = [...data.data.data.status]
						this.xuanzhe = this.columns[0].title
						this.mao(this.columns[0].id, 0, 0)
						uni.stopPullDownRefresh();
					}
				})
			},
			klkl(ev, index) {
				// 0是D,1是B
				this.$api.lpagreement({
					id: ev
				}).then(data => {
					if (data.data.code == 1) {
						if (index == 0) {
							this.jiji = data.data.data.status.dcontents
						}
						if (index == 1) {
							this.jiji = data.data.data.status.bcontents
						}
					}
				})
			},
			// 重新申请
			chongxin() {
				this.shenghe = false;
				this.shenghebuts = false;
				if (this.idid == 0) {
					// 签约时候的协议ID
					this.idids = 0
					// 协议
					this.klkl(this.tanchaung.id, 1)
					this.yuedu = true
					return
				}
				if (this.idid == 1) {
					// 签约时候的协议ID
					this.idids = 1
					// 协议
					this.klkl(this.tanchaung.id, 0)
					this.yuedu = true
					return
				}
			},
			shouURl(ev) {
				uni.setStorageSync("fuwenbeng", ev.content)
				uni.navigateTo({
					url: "../pagesC/fuwenben?title=" + ev.title
				})
			},
			shouURls(ev) {
				if (ev.quxian) {
					uni.setStorageSync("fuwenbeng", ev.content)
					uni.navigateTo({
						url: "../pagesC/fuwenben?title=" + ev.name
					})
				} else {
					uni.setStorageSync("fuwenbeng", this.jiji)
					uni.navigateTo({
						url: "../pagesC/fuwenben?title=" + ev.title
					})
				}

			},
			lun_change(index) {
				this.current = index.detail.current;
			},
			change(index) {
				if (index == 3) {
					let that = this
					uni.requestSubscribeMessage({
						provider: 'weixin',
						tmplIds: that.mobanid,
						complete: function(e) {
							that.current = index;
						}
					});
				} else {
					this.current = index;
				}
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


		.lllls {
			margin: 30rpx;
			height: 60rpx;
			line-height: 60rpx;
			background: #007399;
			border-radius: 10rpx;
			text-align: center;
			font-size: 24rpx;
			font-weight: 400;
			color: #FFFFFF;
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
		align-items: flex-start;
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
