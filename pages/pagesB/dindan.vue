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
			<view class="search">
				<u-search bg-color="#f6f6f6" placeholder="输入关键字搜索"></u-search>
			</view>
			<view class="swiper">
				<u-tabs :list="lists" :is-scroll="false" :weizhi="false" :current="current" @change="change"></u-tabs>
				<swiper :style="'height: ' + height + 'px;'" :circular="true" duration="200" :current="current"
					@change="lun_change">
					<swiper-item v-for="(item, index) in list" :key="index">
						<scroll-view :style="'height: ' + height + 'px;'" scroll-y="true">
							<view class="swiper-item" v-for="(items, indexs) in item.data_list" :key="indexs">
								<view class="top" @click="goods(items)">
									<view class="text"> 订单编号：{{ items.orderid }} </view>
									<view class="status" v-show="items.state == 0"> 待付款 </view>
									<view class="status" v-show="items.state == 1"> 待发货 </view>
									<view class="status" v-show="items.state == 2"> 发货中 </view>
									<view class="status" v-show="items.state == 3"> 已收货 </view>
									<view class="status" v-show="items.state == 4"> 已完成 </view>
									<view class="status" v-show="items.state == 5"> 退款审核中 </view>
									<view class="status" v-show="items.state == 6"> 退款成功 </view>
									<view class="status" v-show="items.state == 7"> 退款已驳回 </view>
									<view class="status" v-show="items.state == 9"> 已取消 </view>
									<block
										v-if="items.state == 10 || items.state == 11 || items.state == 12 || items.state == 13 || items.state == 14 || items.state == 15">
										<view class="status" v-show="items.states == 0"> 退换货审核中 </view>
										<view class="status" v-show="items.states == 1"> 同意退换货 </view>
										<view class="status" v-show="items.states == 2"> 退换货已驳回 </view>
										<view class="status" v-show="items.states == 3"> 退换货完成 </view>
									</block>
									<view class="status" v-show="items.state == 16"> 报装中 </view>
									<view class="status" v-show="items.state == 17"> 已安装 </view>
								</view>
								<view class="centre" v-for="(itemc, indexc) in items.shop" :key="indexc"
									@click="goods(items)">
									<view class="">
										<image class="img" :src="imgtitle + itemc.simage" mode="aspectFit"></image>
									</view>
									<view style="margin-left: 10rpx;">
										<view class="name">
											{{ itemc.name }}
										</view>
										<text class="fdsds">共{{itemc.num}}件 合计：</text><text
											class="fsdfsfs fdsds">￥{{itemc.sonprice}}</text>
									</view>
								</view>
								<view class="kfhkjsdh" @click="goods(items)">
									<view class="text">
										总金额：<text class="reds">￥{{ items.price }}</text>
									</view>
									<view class="status" v-show="items.state == 0"> 未支付 </view>
									<view class="status" v-show="items.state != 0 && items.state != 9">
										已支付￥{{ items.price }}
									</view>
								</view>
								<view class="anniu">
									<!-- 待支付 -->
									<view class="button" @click="annui(0, items)" v-if="items.state == 0">
										取消订单
									</view>
									<view class="button" @click="annui(1, items)" v-if="items.state == 0">
										立即支付
									</view>
									<!-- 带发货 -->
									<view class="button" @click="annui(5, items)" v-if="items.state == 1">
										申请退款
									</view>
									<!-- 待收货 -->
									<view class="button" @click="annui(3, items)" v-if="items.state == 2">
										查看物流
									</view>
									<view class="button" @click="annui(4, items)" v-if="items.state == 2">
										确认签收
									</view>

									<view class="button" @click="annui(7, items)"
										v-if="items.state == 3 || items.state == 4 || items.states == 2">
										申请售后
									</view>
									<view class="button" @click="annui(8, items)"
										v-if="items.state == 10 || items.state == 11 || items.state == 12 || items.state == 13 || items.state == 14 || items.state == 15">
										取消售后
									</view>

									<view class="button" @click="kuaidiwo(items)"
										v-if="items.states === 1 && items.sqexpressorder ==0">
										填写快递单号
									</view>
									<view class="button" @click="annui(2, items)" v-if="items.state == 5">
										取消退款
									</view>
									<view class="button" @click="delorder(items)"
										v-if="items.state == 9 || items.state == 4 || items.state == 17 || items.states == 3 ||items.state == 6">
										删除订单
									</view>
									<view class="button" v-if="items.state == 8">
										已申请退款
									</view>
									<view class="button" v-if="items.state == 3 || items.states == 2"
										@click="baozhaung(items)">
										是否安装
									</view>
									<view class="button" v-if="items.state == 16" @click="jiesubaozhaung(items)">
										完成安装
									</view>
									<view class="button" v-if="items.state == 16&&items.bz==1"
										@click="lookdetails(items)">
										查看安装详情
									</view>
									<view class="button" @click="baozhuangpngji(0, items)" v-if="items.state == 17">
										立即评价
									</view>
									<view class="button" @click="baozhuangpngji(1, items)" v-if="items.state == 17">
										报装评价
									</view>
								</view>
							</view>
							<u-empty v-if="item.data_list.length == 0" text="暂无订单" mode="list"></u-empty>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 查看安装详情 -->
		<u-popup width="500" border-radius="30" v-model="anzhuang" mode="center">
			<view class="yueduwo">
				<view class="text">
					安装详情
				</view>
				<view style="padding: 0 30rpx;">
					<view class="">
						姓名
					</view>
					<view style="background:#f6f6f6;border-radius:10rpx;margin: 10rpx;">
						<u-input disabled inputAlign="left" placeholder-style="color: #999999;" v-model="bzxq.aname"
							placeholder="请填写快递公司" />
					</view>
					<view class="">
						电话
					</view>
					<view style="background:#f6f6f6;border-radius:10rpx;margin: 10rpx;">
						<u-input disabled inputAlign="left" placeholder-style="color: #999999;" v-model="bzxq.aphone"
							placeholder="请填写快递单号" type="number" />
					</view>
					<view v-if="bzxq.abh" class="">
						<view class="">
							安装人员编号
						</view>
						<view style="background:#f6f6f6;border-radius:10rpx;margin: 10rpx;">
							<u-input disabled inputAlign="left" placeholder-style="color: #999999;" v-model="bzxq.abh"
								placeholder="请填写快递单号" type="number" />
						</view>
					</view>
					<view class="">
						预计上门时间
					</view>
					<view style="background:#f6f6f6;border-radius:10rpx;margin: 10rpx;">
						<u-input disabled inputAlign="left" placeholder-style="color: #999999;" v-model="bzxq.atime"
							placeholder="请填写快递单号" type="number" />
					</view>
				</view>
				<!-- <view class="anniusss">
					<view class="hkhnij" @click="anzhuang=false">
						取消
					</view>
					<view class="hkhnij jjhgj" @click="anzhuang=false">
						同意
					</view>
				</view> -->
			</view>
		</u-popup>
		<!-- 填写快递单号 -->
		<u-popup width="500" border-radius="30" v-model="kuaidi" mode="center">
			<view class="yueduwo">
				<view class="text">
					填写快递单号
				</view>
				<view style="padding: 0 30rpx;">
					<view class="">
						快递公司
					</view>
					<view style="background:#f6f6f6;border-radius:10rpx;margin: 10rpx;">
						<u-input inputAlign="left" placeholder-style="color: #999999;" v-model="kuaidigongsi"
							placeholder="请填写快递公司" />
					</view>
					<view class="">
						快递单号
					</view>
					<view style="background:#f6f6f6;border-radius:10rpx;margin: 10rpx;">
						<u-input inputAlign="left" placeholder-style="color: #999999;" v-model="kuaididanhao"
							placeholder="请填写快递单号" type="number" />
					</view>
				</view>
				<view class="anniusss">
					<view class="hkhnij" @click="kuaidiwow(0)">
						取消
					</view>
					<view class="hkhnij jjhgj" @click="kuaidiwow(1)">
						同意
					</view>
				</view>
			</view>
		</u-popup>
		<!-- 确认取消该订单 -->
		<u-popup width="640" :closeable="true" border-radius="10" v-model="show" mode="center">
			<view class="popup">
				<view class="top"> 提示 </view>
				<view class="cets"> 确认取消该订单么？ </view>
				<view class="xian"> </view>
				<view class="bottoms">
					<view class="sdasas" @click="xuanzhe(0)"> 取消 </view>
					<view class="czcxc" @click="xuanzhe(1)"> 确定 </view>
				</view>
			</view>
		</u-popup>
		<!-- 确认取消退款 -->
		<u-popup width="640" :closeable="true" border-radius="10" v-model="showa" mode="center">
			<view class="popup">
				<view class="top"> 提示 </view>
				<view class="cets"> 确认取消退款？ </view>
				<view class="xian"> </view>
				<view class="bottoms">
					<view class="sdasas" @click="xuanzhea(0)"> 取消 </view>
					<view class="czcxc" @click="xuanzhea(1)"> 确定 </view>
				</view>
			</view>
		</u-popup>
		<!-- quxiaoshouhou -->
		<u-popup width="640" :closeable="true" border-radius="10" v-model="quxiaoshouhou" mode="center">
			<view class="popup">
				<view class="top"> 提示 </view>
				<view class="cets"> 确认取消售后？ </view>
				<view class="xian"> </view>
				<view class="bottoms">
					<view class="sdasas" @click="shouhoou(0)"> 取消 </view>
					<view class="czcxc" @click="shouhoou(1)"> 确定 </view>
				</view>
			</view>
		</u-popup>
		<u-kehu po_hei="100" url="../Home/booking/AppointmentDesign"></u-kehu>
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
					<view class="hkhnij" @click="tongyi(0)">
						暂不使用
					</view>
					<view class="hkhnij jjhgj" @click="tongyixieyi()">
						同意协议
					</view>
				</view>
			</view>
		</u-popup>
		<!-- 确认安装完成 -->
		<u-popup width="640" :closeable="true" border-radius="10" v-model="qurren" mode="center">
			<view class="popup">
				<view class="top"> 提示 </view>
				<view class="cets"> 是否安装完成 </view>
				<view class="xian"> </view>
				<view class="bottoms">
					<view class="sdasas" @click="qurren = false"> 取消 </view>
					<view class="czcxc" @click="dakaishouji(2)" v-if="yianzhaungkaiguan"> 确定 </view>
					<view class="czcxc" @click="anzhaungwancheng()" v-else> 确定 </view>
				</view>
			</view>
		</u-popup>
		<!-- 是否需要安装 -->
		<u-popup width="640" :closeable="true" border-radius="10" v-model="baozhuangshow" mode="center">
			<view class="popup">
				<view class="top"> 提示 </view>
				<view class="cets"> 是否需要安装？</view>
				<view class="xian"> </view>
				<view class="bottoms">
					<view class="sdasas" @click="baozhuangshow = false"> 否 </view>
					<view class="czcxc" @click="dakaishouji(1)" v-if="shifouanzhaungkaiguan"> 是 </view>
					<view class="czcxc" @click="shifouanzhuangdsadas" v-else> 是</view>
				</view>
			</view>
		</u-popup>
		<!-- 确认收到商品 -->
		<u-popup width="640" :closeable="true" border-radius="10" v-model="shows" mode="center">
			<view class="popup">
				<view class="top"> 提示 </view>
				<view class="cets"> 确认签收该订单商品？ </view>
				<view class="xian"> </view>
				<view class="bottoms">
					<view class="sdasas" @click="shows = false"> 取消 </view>
					<view class="czcxc" v-if="querenqianshoukaiguan" @click="dakaishouji(0)">
						确定
					</view>
					<view class="czcxc" v-else @click="querenshouhuo"> 确定 </view>
				</view>
			</view>
		</u-popup>

	</view>
</template>

<script>
	import dayjs from "dayjs";
	export default {
		data() {
			return {
				shouhouitem: "",
				quxiaoshouhou: false,
				shoujihao: uni.getStorageSync("user_info").mobile,
				// 已安装
				yianzhaungkaiguan: true,
				yianzhaungxieyi: [],
				// 是否安装
				shifouanzhaungkaiguan: true,
				shifouanzhaungxieyi: [],
				// 确认收货
				querenqianshoukaiguan: true,
				querenqianshouxieyi: [],
				bzxq: {},
				anzhuang: false,
				kuaididata: {},
				kuaididanhao: "",
				kuaidigongsi: "",
				kuaidi: false,
				zhuangtai: 0, //0确认收货，1是否安装，2安装完成
				qurrsaen: "",
				qurren: false,
				code: "",
				buyanzheng: true,
				timea: 0,
				huoqu: "获取验证码",
				shoujiyanzheng: false,
				yuedu: false,
				xieyi: [],
				//
				//
				mnbv: "",
				baozhuangshow: false,
				hahahaxuanzhe: {},
				imgtitle: this.$imgPath,
				show: false,
				shows: false,
				showa: false,
				height: 0,
				current: 0,
				title: "",
				lists: [{
						name: "全部",
					},
					{
						name: "待发货",
					},
					{
						name: "发货中",
					},
					{
						name: "已收货",
					},
					{
						name: "报装中",
					},
					{
						name: "已安装",
					}
				],
				list: [{
						status: "all",
						data_list: [],
					},
					{
						status: 1,
						data_list: [],
					},
					{
						status: 2,
						data_list: [],
					},
					{
						status: 3,
						data_list: [],
					},
					{
						status: 4,
						data_list: [],
					},
					{
						status: 5,
						data_list: [],
					}
				],
				time: "",
				pingjiaok: 0
			};
		},
		onLoad(ev) {
			uni.$on("number", () => {
				// this.current = 6
			})
			uni.$on("yuwancheng", () => {
				this.current = 5
			})
			this.title = ev.title;
			if (ev.current) {
				this.current = ev.current;
			}
			this.$api.orderset().then(data => {
				if (data.data.code == 1) {
					this.time = data.data.data.status.ordertime
				}
			})
		},
		onShow() {
			this.system();
			this.allsss();


			let aa = uni.getStorageSync("xieyi")
			// // 已安装3
			// yianzhaungkaiguan: true,
			// yianzhaungxieyi: [],
			// // 是否安装5
			// shifouanzhaungkaiguan: true,
			// shifouanzhaungxieyi: [],
			// // 确认收货2
			// querenqianshoukaiguan: true,
			// querenqianshouxieyi: [],

			if (aa) {
				this.yiwanchengxieyi = [];
				this.yianzhaungxieyi = [];
				this.shifouanzhaungxieyi = [];
				this.querenqianshouxieyi = [];
				aa.forEach(item => {
					if (item.state == 3) {
						this.yianzhaungxieyi.push(item)
					}
					if (item.state == 5) {
						this.shifouanzhaungxieyi.push(item)
					}
					if (item.state == 2) {
						this.querenqianshouxieyi.push(item)
					}
				})
				if (this.yianzhaungxieyi.length > 0) {
					this.yianzhaungkaiguan = true
				} else {
					this.yianzhaungkaiguan = false
				}
				if (this.shifouanzhaungxieyi.length > 0) {
					this.shifouanzhaungkaiguan = true
				} else {
					this.shifouanzhaungkaiguan = false
				}
				if (this.querenqianshouxieyi.length > 0) {
					this.querenqianshoukaiguan = true
				} else {
					this.querenqianshoukaiguan = false
				}

			} else {
				this.yianzhaungkaiguan = false
				this.shifouanzhaungkaiguan = false
				this.querenqianshoukaiguan = false
			}


		},
		watch: {
			shoujiyanzheng(ev, el) {
				if (!ev) {
					this.code = ""
				}
			}
		},
		methods: {
			shouhoou(ev) {
				if (ev == 1) {
					this.$api.xqsh({
						orderid: this.shouhouitem.orderid
					}).then(data => {
						if (data.data.code == 1) {
							this.allsss()
							this.quxiaoshouhou = false
						}
						uni.showToast({
							title: data.data.msg,
							icon: "none"
						})
					})
				} else {
					this.quxiaoshouhou = false
				}
			},
			baozhuangpngji(okj, ev) {
				this.pingjiaok = okj
				this.annui(6, ev)
			},
			// 切换协议内容
			dakaishouji(ev) {
				this.zhuangtai = ev
				if (ev == 0) {
					this.xieyi = this.querenqianshouxieyi
					this.buyanzheng = this.querenqianshoukaiguan
					this.shows = false
				}
				if (ev == 1) {
					this.xieyi = this.shifouanzhaungxieyi
					this.buyanzheng = this.shifouanzhaungkaiguan
					this.baozhuangshow = false
				}
				if (ev == 2) {
					this.xieyi = this.yianzhaungxieyi
					this.buyanzheng = this.yianzhaungkaiguan
					this.qurren = false
				}
				this.shoujiyanzheng = true
			},
			// 查看安装详情 
			lookdetails(item) {
				this.$api.bzxq({
					id: item.bzid
				}).then(data => {
					if (data.data.code == 1) {
						this.bzxq = data.data.data.status
						this.anzhuang = true
					}
				})
			},
			// 填写快递单号
			kuaidiwow(ev) {
				if (ev == 0) {
					this.kuaidi = false
				} else {
					this.$api.sqexpress({
						orderid: this.kuaididata.orderid,
						sqexpress: this.kuaidigongsi,
						sqexpressorder: this.kuaididanhao,
					}).then(data => {
						uni.showToast({
							title: data.data.msg,
							icon: "none"
						})
						if (data.data.code == 1) {
							this.kuaidi = false
							this.allsss();
						}
					})
				}
			},
			// 打开快递弹窗
			kuaidiwo(ev) {
				this.kuaididata = ev
				this.kuaidi = true
			},
			// 完成安装
			jiesubaozhaung(ev) {
				this.qurrsaen = ev
				this.qurren = true
			},
			// 同意协议
			tongyixieyi() {
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
				if (this.zhuangtai == 0) {
					this.querenshouhuo()
				}
				if (this.zhuangtai == 1) {
					this.shifouanzhuangdsadas()
				}
				if (this.zhuangtai == 2) {
					this.anzhaungwancheng()
				}
			},
			// 去报装
			shifouanzhuangdsadas() {
				this.baozhuangshow = false
				uni.setStorageSync("baozhaung", this.mnbv.shop)
				uni.navigateTo({
					url: "./baozhaung?orderid=" + this.mnbv.orderid + "&tiao=1"
				})
			},
			//确认收货
			querenshouhuo() {
				this.shows = false
				this.$api.sureorder({
					id: this.order_id
				}).then(data => {
					if (data.data.code == 1) {
						this.shows = false
						uni.showToast({
							title: "收货成功",
							icon: "none",
						});
						this.allsss();
						this.current = 3
					}
				})
			},
			// 已安装
			anzhaungwancheng() {
				this.$api.successloading({
					orderid: this.qurrsaen.orderid
				}).then(data => {
					if (data.data.code == 1) {
						uni.showToast({
							title: "安装完成",
							icon: "success"
						})
						this.qurren = false
						this.allsss();
					} else {
						uni.showToast({
							title: data.data.msg,
							icon: "success"
						})
					}
				})
			},
			// 报装是否安装
			baozhaung(ev) {
				this.mnbv = ev
				this.baozhuangshow = !this.baozhuangshow
			},
			// 删除此订单
			delorder(ev) {
				let that = this;
				uni.showModal({
					title: '是否删除此订单',
					content: ev.orderid,
					success: function(res) {
						if (res.confirm) {
							that.$api.deleorder({
								orderid: ev.orderid
							}).then(data => {
								uni.showToast({
									title: data.data.msg,
									duration: 1000,
									icon: "success"
								});
								if (data.data.code == 1) {
									that.allsss()
								}
							})
						}
					}
				});
			},
			// 初始化数据
			allsss() {
				this.$api.myorder({
					user_id: uni.getStorageSync("user_info").id,
				}).then((data) => {
					this.list.forEach((item, index) => {
						item.data_list = [];
					});
					if (data.data.code == 1) {
						this.list[0].data_list = data.data.data.status;
						data.data.data.status.forEach((item) => {
							switch (item.state) {
								case "1":
									this.list[1].data_list.push(item);
									break;
								case "2":
									this.list[2].data_list.push(item);
									break;
								case "3":
									this.list[3].data_list.push(item);
									break;
								case "16":
									this.list[4].data_list.push(item);
									break;
								case "17":
									this.list[5].data_list.push(item);
									break;
								default:
							}
						});
					}
				});
			},
			//订单详情
			goods(ev) {
				uni.navigateTo({
					url: "../pagesA/goods_data?order_id=" + ev.orderid,
				});
			},
			//退款
			xuanzhea(ev) {
				if (ev == 1) {
					this.$api.qxorder({
						orderid: this.order_id
					}).then(data => {
						if (data.data.code == 1) {
							uni.showToast({
								title: data.data.msg,
								icon: "none",
							});
							this.allsss();
						}
					})
				}
				this.showa = false;
			},
			// 取消订单
			xuanzhe(ev) {
				if (ev == 1) {
					this.$api.orderdzf({
						id: this.hahahaxuanzhe.id,
					}).then((data) => {
						if (data.data.code == 1) {
							uni.showToast({
								title: "订单取消成功",
								duration: 1000,
								icon: "success",
							});
							this.show = false;
							this.current = 0
							this.allsss();
						} else {
							uni.showToast({
								title: data.data.msg,
								duration: 1000,
								icon: "success",
							});
						}
					});
				}
				this.show = false;
			},
			annui(ev, item) {
				//0取消订单
				//1立即支付
				//2取消退款
				//3查看物流

				//5申请退款
				//6立即评价
				switch (ev) {
					case 0:
						this.order_id = item.id;
						this.show = true;
						this.hahahaxuanzhe = item;
						break;
					case 1:
						this.$api.orderpay({
							prepay_id: item.id,
							id: item.id,
						}).then((res) => {
							if (res.data.code == 200) {
								let that = this;
								uni.requestPayment({
									timeStamp: res.data.data.timeStamp, //当前的时间
									nonceStr: res.data.data.nonceStr, //随机字符串
									package: res.data.data.package, //统一下单接口返回的 prepay_id 参数值
									signType: res.data.data.signType, //签名算法，暂支持 MD5。
									paySign: res.data.data.paySign, //签名
									success: function(res) {
										uni.showToast({
											title: "支付成功",
											icon: "none",
										});
										that.allsss();
										that.current = 1
									},
									fail: function(err) {
										uni.showToast({
											title: "支付失败",
											icon: "none",
										});
									},
								});
							} else {
								uni.showToast({
									title: res.data.msg,
									icon: "none",
								});
							}
						});
						break;
					case 2:
						this.order_id = item.orderid;
						this.showa = true;
						break;
					case 3:
						uni.navigateTo({
							url: "../pagesC/wuliu?id=" + item.id + "&express=" + item.express + "&expressorder=" +
								item
								.expressorder,
						});
						break;
						//4确认收货
					case 4:
						this.order_id = item.id
						this.shows = true;
						break;
					case 5:
						let type = ""
						if (this.current == 2) {
							type = 0
						} else {
							type = 1
						}
						uni.navigateTo({
							url: "../pagesA/tuikuan?orderid=" + item.orderid + "&type=" + type
						});
						break;
					case 6:
						uni.navigateTo({
							url: "../pagesC/pingjia?item=" + JSON.stringify(item) + "&okj=" + this.pingjiaok
						});
						break;
					case 7:
						uni.navigateTo({
							url: "../pagesC/shouhou?item=" + JSON.stringify(item)
						});
						break;
					case 8:
						this.shouhouitem = item
						this.quxiaoshouhou = true
						break;
					default:
				}
			},
			// 轮播图高
			system() {
				let system = uni.getSystemInfoSync();
				this.height = system.windowHeight;
			},
			// 轮播图切换
			lun_change(ev) {
				this.current = ev.detail.current;
			},
			// 切换
			change(ev) {
				this.current = ev;
				this.title = this.lists[ev].name
			},
			// 返回
			back(ev) {
				switch (ev) {
					case 0:
						uni.navigateBack(-1);
						break;
					case 1:
						uni.reLaunch({
							url: "/pages/Home/Home",
						});
						break;
					default:
				}
			},
			// 同意协议
			hahaha(item) {
				item.check = !item.check
			},
			// 康复文本
			fuwenben(ev) {
				uni.setStorageSync("fuwenbeng", ev.content)
				uni.navigateTo({
					url: "../pagesC/fuwenben?title=" + ev.name
				})
			},
			// 检测验证码
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
								this.shoujiyanzheng = false
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
			// 打开阅读
			tongyi(ev) {
				if (ev == 1) {
					this.yuedu = true;
				} else {
					this.shoujiyanzheng = false;
					this.yuedu = false;
				}
			},
			// 验证手机号
			hahahaa(ev) {
				let phoneCodeVerification = /^[1][3,4,5,7,8][0-9]{9}$/;
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
		},
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
			border-left: 1px solid #efefef;
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

	.home {
		.swiper {
			.swiper-item {
				margin-bottom: 30rpx;
				border-radius: 10rpx;
				background-color: #ffffff;
				padding: 30rpx;
				margin: 30rpx;

				.anniu {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					margin-top: 30rpx;

					.button:last-child {
						padding: 15rpx 25rpx;
						background: #e8f2f4;
						border: 2rpx solid #007399;
						border-radius: 30rpx;
						font-size: 20rpx;
						font-weight: 400;
						color: #007399;
						margin-left: 20rpx;
					}

					.button {
						padding: 15rpx 25rpx;
						background: #efefef;
						border-radius: 30rpx;
						font-size: 20rpx;
						font-weight: 400;
						color: #333333;
						margin-left: 20rpx;
					}
				}

				.kfhkjsdh {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.text {
						font-size: 24rpx;
						font-weight: 400;
						color: #333333;
					}

					.red {
						font-size: 24rpx;
						font-weight: 400;
						color: #db1625;
					}

					.status {
						font-size: 24rpx;
						font-weight: 400;
						color: #db0e1e;
					}
				}

				.centre {
					display: flex;
					align-items: center;
					justify-content: end;
					margin-bottom: 20rpx;

					.fsdfsfs {
						color: #000000;
					}

					.fdsds {
						font-size: 22rpx;
						font-weight: 400;
						color: #666666;
					}

					.name {
						margin-bottom: 40rpx;
						font-size: 24rpx;
						font-weight: 400;
						color: #333333;
					}

					.img {
						border-radius: 20rpx;
						width: 160rpx;
						height: 160rpx;
					}
				}

				.top {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 30rpx 0;
					margin-bottom: 30rpx;
					border-bottom: 1px solid #f6f6f6;

					.status {
						padding: 5rpx 10rpx;
						background: #fc716a;
						border-radius: 4rpx;
						font-size: 20rpx;
						font-weight: 400;
						color: #ffffff;
					}

					.text {
						font-size: 24rpx;
						font-weight: 400;
						color: #333333;
					}
				}
			}
		}

		.search {
			padding: 30rpx;
			background-color: #ffffff;
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
