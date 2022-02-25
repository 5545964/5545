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
			<view class="tosp cet" v-show="data_list.state == 0">
				<view>
					<view class="cxcxdcdcdcd">
						待支付
					</view>
					<view class="cet cdsfsdfs">
						<image class="img" src="../../static/loudou.png" mode="aspectFit"></image>
						<view class="jhjk">
							{{daojishi}}后自动取消订单
						</view>
					</view>
				</view>
			</view>
			<view class="centers cet" style="justify-content: space-between;">
				<image class="img" src="../../static/icon_me_blueaddress.png" mode="aspectFit"></image>
				<view style="width: 86%;">
					<view class="cet" style="justify-content: flex-start;">
						<view class="name">
							{{data_list.username}}
						</view>
						<view class="phone">
							{{data_list.phone}}
						</view>
					</view>
					<view class="text lll">
						{{data_list.address}}{{data_list.addressxq}}
					</view>
				</view>
			</view>
			<view class="swiper-item">
				<view class="top">
					<view class="text"> 订单编号：{{ data_list.orderid }} </view>
					<view class="status" v-show="data_list.state == 0"> 待付款 </view>
					<view class="status" v-show="data_list.state == 1"> 待发货 </view>
					<view class="status" v-show="data_list.state == 2"> 发货中 </view>
					<view class="status" v-show="data_list.state == 3"> 已收货 </view>
					<view class="status" v-show="data_list.state == 4"> 已完成 </view>
					<view class="status" v-show="data_list.state == 5"> 退款审核中 </view>
					<view class="status" v-show="data_list.state == 6"> 退款成功 </view>
					<view class="status" v-show="data_list.state == 7"> 退款已驳回 </view>
					<view class="status" v-show="data_list.state == 9"> 已取消 </view>
					<block
						v-if="data_list.state == 10 || data_list.state == 11 || data_list.state == 12 || data_list.state == 13 || data_list.state == 14 || data_list.state == 15">
						<view class="status" v-show="data_list.states == 0"> 退换货审核中 </view>
						<view class="status" v-show="data_list.states == 1"> 同意退换货 </view>
						<view class="status" v-show="data_list.states == 2"> 退换货已驳回 </view>
						<view class="status" v-show="data_list.states == 3"> 退换货完成 </view>
					</block>
					<view class="status" v-show="data_list.state == 16"> 报装中 </view>
					<view class="status" v-show="data_list.state == 17"> 已安装 </view>

				</view>
				<view class="centre" v-for="(itemc,indexc) in data_list.shop" :key="indexc" @click="product(itemc)">
					<view class="">
						<image class="img" :src="img+itemc.simage" mode="aspectFit"></image>
					</view>
					<view class="" style="margin-left: 20rpx;">
						<view class="name">
							{{itemc.name}}
						</view>
						<text class="fdsds">共{{itemc.num}}件 合计：</text><text
							class="fsdfsfs fdsds">￥{{(itemc.num* itemc.sonprice).toFixed(2)}}</text>
					</view>
				</view>
				<view style="">
					<view class="text kfhkjsdh">
						<view class="">
							商品总价：
						</view>
						<view class="red">
							￥{{data_list.price}}
						</view>
					</view>
					<view class="text kfhkjsdh">
						<view class="">
							数量
						</view>
						<view class="reds">
							共{{data_list.num}}件
						</view>
					</view>
					<view class="text kfhkjsdh">
						<view class="">
							运费
						</view>
						<view class="red">
							<text v-if="data_list.yf !=0 && data_list.yf !==null">{{data_list.yf}}</text><text
								v-else>包邮</text>
						</view>
					</view>
					<!-- <view class="text kfhkjsdh" @click="youhuijuan">
						<view class="">
							优惠券
						</view>
						<view class="cet">
							<view class="red">
								<text v-if="youhuijuan_num != 0">-￥{{youhuijuan_num}}</text><text v-else>暂无优惠卷</text>
							</view>
							<image style="width: 8rpx;height: 14rpx;margin-left: 10rpx;"
								src="../../static/icon_home_heiseyoufan.png" mode="aspectFit"></image>
						</view>
					</view> -->
				</view>
				<view style="height: 2rpx;background: #F6F6F6;">

				</view>
				<view class="kfhkjsdh">
					<view class="text">
						总金额：<text class="reds">￥{{data_list.price}}</text>
					</view>
					<view class="status" v-show="data_list.state == 0">
						未支付
					</view>
					<view class="status" v-show="data_list.state != 0">
						已支付￥{{data_list.price}}
					</view>
				</view>
			</view>
			<view class="bottomsk">
				<view class="text">
					订单信息
				</view>
				<view class="xians">

				</view>
				<view class="kfosjd">
					<view class="dmskajd">订单编号：</view>
					<view class="djkshfk">{{data_list.orderid}}</view>

				</view>
				<view class="kfosjd">
					<view class="dmskajd">创建时间：</view>
					<view class="djkshfk">{{data_list.create_at}}</view>
				</view>
				<view class="kfosjd" v-if="data_list.paytime">
					<view class="dmskajd">支付时间：</view>
					<view class="djkshfk">{{data_list.paytime}}</view>
				</view>
				<view class="kfosjd">
					<view class="dmskajd">订单备注：</view>
					<view class="djkshfk">{{data_list.content||"无备注"}}</view>
				</view>
			</view>
			<view class="tuikuans" v-show="data_list.state == 5 || data_list.state == 6 || data_list.state == 7">
				<view class="text">
					退款信息
				</view>
				<view class="xians">

				</view>
				<view class="kfosjd">
					<view class="dmskajd">退款理由：</view>
					<view class="djkshfk">{{data_list.state_text}}</view>

				</view>
				<view class="kfosjd">
					<view class="dmskajd">补充说明：</view>
					<view class="djkshfk" v-if="data_list.tuik_ly">{{data_list.tuik_ly}}</view>
					<view class="djkshfk" v-else></view>
				</view>
				<view class="hahahahha">
					<view class="dmskajds">图片说明：</view>
					<view class="djkshfks">
						<image class="imgsa" :src="img+item" v-for="(item,index) in img_list" :key="index"
							mode="aspectFit">
						</image>
					</view>
				</view>
			</view>
			<view class="datass" v-show="data_list.state == 7">
				<view class="text">
					驳回理由
				</view>
				<view class="xians">

				</view>
				<view class="kfosjd">
					<view class="djkshfk">{{data_list.bohui}}</view>
				</view>
			</view>
		</view>
		<view style="height: 110rpx;"></view>
		<u-kehu po_hei="100" url="../Home/booking/AppointmentDesign"></u-kehu>
		<view class="annius">
			<view class="anniu">
				<view class="button" @click="annui(0)" v-if="data_list.state == 0">
					取消订单
				</view>
				<view class="button" @click="annui(1)" v-if="data_list.state == 0">
					立即支付
				</view>
				<view class="button" @click="annui(5)" v-if="data_list.state == 1">
					申请退款
				</view>
				<view class="button" @click="annui(3)" v-if="data_list.state == 2">
					查看物流
				</view>
				<view class="button" @click="annui(4)" v-if="data_list.state == 2">
					确认签收
				</view>
				<view class="button" @click="annui(7)"
					v-if="data_list.state == 3 || data_list.state == 4 || data_list.states == 2">
					申请售后
				</view>
				<view class="button" @click="annui(8)"
					v-if="data_list.state == 10 || data_list.state == 11 || data_list.state == 12 || data_list.state == 13 || data_list.state == 14 || data_list.state == 15">
					取消售后
				</view>
				<view class="button" @click="kuaidiwo()" v-if="data_list.states === 1 && data_list.sqexpressorder ==0">
					填写快递单号
				</view>
				<view class="button" @click="annui(2)" v-if="data_list.state == 5">
					取消退款
				</view>
				<view class="button" @click="delorder()"
					v-if="data_list.state == 9 || data_list.state == 4 || data_list.state == 17 || data_list.states == 3">
					删除订单
				</view>
				<view class="button" v-if="data_list.state == 8">
					已申请退款
				</view>
				<view class="button" v-if="data_list.state == 3 || data_list.states == 2" @click="baozhaung()">
					是否安装
				</view>
				<view class="button" v-if="data_list.state == 16" @click="jiesubaozhaung()">
					完成安装
				</view>
				<view class="button" v-if="data_list.state == 16&&data_list.bz==1" @click="lookdetails()">
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
				<view class="cets"> 确认收到该订单商品？ </view>
				<view class="xian"> </view>
				<view class="bottoms">
					<view class="sdasas" @click="xuanzhes(0)"> 取消 </view>
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
	import dayjs from 'dayjs'
	dayjs.extend(require('dayjs/plugin/duration'));
	export default {
		data() {
			return {
				quxiaoshouhou: false,
				dinshiqi: "",
				shoujihao: "",
				pingjiaok: 0,
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
				hahahaxuanzhe: {},
				//
				//
				zhuangtai: 0,
				mnbv: "",
				baozhuangshow: false,
				code: "",
				buyanzheng: true,
				timea: 0,
				huoqu: "获取验证码",
				shoujiyanzheng: false,
				yuedu: false,
				xieyi: [],
				qurrsaen: "",
				qurren: false,
				youhuijuan_num: 0,
				img: this.$imgPath,
				value: "",
				show: false,
				shows: false,
				showa: false,
				title: "订单详情",
				data_list: {},
				img_list: [],
				order_idsssss: "",
				daojishi: "",
			}
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
			this.order_idsssss = ev.order_id

		},
		onShow() {
			this.allsss()
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
						orderid: this.data_list.orderid
					}).then(data => {
						if (data.data.code == 1) {
							this.quxiaoshouhou = false
							uni.navigateBack(-1)
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
					id: this.data_list.bzid
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
						orderid: this.order_idsssss,
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
			jiesubaozhaung() {
				this.qurrsaen = this.data_list
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
					url: "../pagesB/baozhaung?orderid=" + this.mnbv.orderid + "&tiao=2"
				})
			},
			//确认收货
			querenshouhuo() {
				this.shows = false
				this.$api.sureorder({
					id: this.data_list.id
				}).then(data => {
					if (data.data.code == 1) {
						this.shows = false
						uni.showToast({
							title: "收货成功",
							icon: "none",
						});
						uni.navigateBack(-1)
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
						uni.navigateBack(-1)
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
				this.mnbv = this.data_list
				this.baozhuangshow = !this.baozhuangshow
			},
			// 删除此订单
			delorder() {
				let that = this;
				uni.showModal({
					title: '是否删除此订单',
					content: that.order_idsssss,
					success: function(res) {
						if (res.confirm) {
							that.$api.deleorder({
								orderid: that.order_idsssss
							}).then(data => {
								uni.showToast({
									title: data.data.msg,
									duration: 1000,
									icon: "success"
								});
								if (data.data.code == 1) {
									uni.navigateBack({
										delta: 2
									})
								}
							})
						}
					}
				});
			},
			countDown() {
				let that = this;
				let end = that.data_list.cretime * 1000
				that.dinshiqi = setInterval(() => {
					let aa = that.addtimes(end)
					that.daojishi = aa.hours + ":" + aa.minutes + ":" + aa.seconds
					if (aa.hours == "00" && aa.minutes == "00" && aa.seconds == "00") {
						clearInterval(that.dinshiqi)
					}
				}, 1000)
			},
			// 计算时间
			addtimes(time) {
				let dateNow = new Date();
				let timeDiff = time * 1000 - dateNow.getTime(); // 时间差的毫秒数
				let leavel1 = timeDiff % (24 * 3600 * 1000);
				let hours = Math.floor(leavel1 / (3600 * 1000));

				let leavel2 = timeDiff % (3600 * 1000);
				let minutes = Math.floor(leavel2 / (60 * 1000));

				let leavel3 = timeDiff % (60 * 1000);
				let seconds = Math.floor(leavel3 / 1000);
				if (hours < 10) {
					hours = "0" + hours
				}
				if (minutes < 10) {
					minutes = "0" + minutes
				}
				if (seconds < 10) {
					seconds = "0" + seconds
				}
				let aa = {
					hours,
					minutes,
					seconds
				}
				return aa
			},
			// 初始化数据
			allsss() {
				this.$api.myorder({
					user_id: uni.getStorageSync("user_info").id,
					id: this.order_idsssss
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							if (item.orderid == this.order_idsssss) {
								this.data_list = item;
								if (this.data_list.paytime) {
									this.data_list.paytime = dayjs(this.data_list.paytime * 1000).format(
										'YYYY-MM-DD HH:mm:ss')
								}
								if (this.data_list.image) {
									let img = this.data_list.image;
									this.img_list = img.split(",")
								}
								this.countDown()
							}
						})
					}
				})
			},
			//退款
			xuanzhea(ev) {
				if (ev == 1) {
					this.$api.qxorder({
						orderid: this.order_idsssss
					}).then(data => {
						if (data.data.code == 1) {
							uni.showToast({
								title: data.data.msg,
								icon: "none",
							});
							uni.navigateBack(-1)
						}
					})
				}
				this.showa = false;
			},
			product(ev) {
				uni.navigateTo({
					url: "/pages/pagesC/Shopping?shopid=" + ev.id,
				});
			},
			tongyiss(ev) {
				this.$api.agreement({
					state: ev
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							item["check"] = false
						})
						this.xieyi = data.data.data.status
					}
				})
			},
			// 点击弹窗确认打开手机验证
			//确认收货
			xuanzhes(ev) {
				if (ev == 1) {
					this.tongyiss(2)
					this.zhuangtai = 0
					this.shoujiyanzheng = true;
				}
				this.shows = false;
			},
			// 完成安装
			qurrere(ev) {
				if (ev == 1) {
					this.tongyiss(3)
					this.shoujiyanzheng = true
					this.zhuangtai = 2
				}
				this.qurren = false
			},
			//是否安装
			baozhaungshowss(ev) {
				if (ev == 1) {
					this.tongyiss(3) //错了，3是已安装
					this.zhuangtai = 1
					this.shoujiyanzheng = true
				}
				this.baozhuangshow = false
			},
			//取消订单
			xuanzhe(ev) {
				switch (ev) {
					case 0:
						this.show = false;
						break;
					case 1:
						this.$api.orderdzf({
							id: this.data_list.id,
						}).then(data => {
							if (data.data.code == 1) {
								uni.showToast({
									title: "订单取消成功",
									duration: 1000,
									icon: "success"
								})
								this.show = false;
								uni.navigateBack(-1);
							} else {
								uni.showToast({
									title: data.data.msg,
									duration: 1000,
									icon: "success"
								})
							}
						})
						break;
					default:
				}
			},
			annui(ev) {
				//0取消订单
				//1支付
				//2取消退款
				//3查看物流
				//4确认收货
				//5申请退款
				//6立即评价
				//7支付尾款
				switch (ev) {
					case 0:
						this.show = true;
						break;
					case 1:
						this.$api.orderpay({
							prepay_id: this.data_list.id,
							id: this.data_list.id,
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
										uni.navigateBack(-1)
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
						this.showa = true;
						break;
					case 3:
						uni.navigateTo({
							url: "../pagesC/wuliu?id=" + this.data_list.id + "&express=" + this.data_list.express + "&expressorder=" + this.data_list
								.expressorder,
						});
						break;
					case 4:
						this.shows = true;
						break;
					case 5:
						let type = ""
						if (this.data_list.state == 1) {
							type = 0
						} else {
							type = 1
						}
						uni.navigateTo({
							url: "../pagesA/tuikuan?orderid=" + this.data_list.orderid + "&type=" + type
						})
						break;
					case 6:
						uni.navigateTo({
							url: "../pagesC/pingjia?item=" + JSON.stringify(this.data_list) + "&okj=" + this
								.pingjiaok
						})
						break;
					case 7:

						uni.navigateTo({
							url: "../pagesC/shouhou?item=" + JSON.stringify(this.data_list)
						});
						break;
					case 8:
						this.quxiaoshouhou = true
						break;
					default:
				}
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
				let phoneCodeVerification = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (!phoneCodeVerification.test(ev.detail.value)) {
					uni.showToast({
						title: "手机号不正确",
						icon: "none"
					})
				}
			},
			go_code() {
				if (this.timea == 0) {
					this.$api.emsphone({
						phone: this.shoujihao
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
		}
	}
</script>

<style lang="scss" scoped>
	.annius {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.anniu {

		display: flex;
		align-data_list: center;
		justify-content: flex-end;
		background-color: #FFFFFF;
		padding: 20rpx 30rpx;

		.button:last-child {
			padding: 15rpx 25rpx;
			background: #E8F2F4;
			border: 2rpx solid #007399;
			border-radius: 30rpx;
			font-size: 20rpx;
			font-weight: 400;
			color: #007399;
			margin-left: 20rpx;
		}

		.button {
			padding: 15rpx 25rpx;
			background: #EFEFEF;
			border-radius: 30rpx;
			font-size: 20rpx;
			font-weight: 400;
			color: #333333;
			margin-left: 20rpx;
		}

	}

	.popup {
		.xcvb {
			height: 100%;
			width: 2rpx;
			background: #EFEFEF;
		}

		.czcxc {
			border-left: 1px solid #EFEFEF;
			text-align: center;
			width: 50%;
			padding: 25rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #007399;
		}

		.sdasas {
			border-right: 1px solid #EFEFEF;
			text-align: center;
			width: 50%;
			padding: 25rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #333333;
		}

		.xian {
			height: 2rpx;
			background: #EFEFEF;
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
			color: #FEFEFE;
		}
	}

	.xians {
		height: 2rpx;
		background: #F6F6F6;
	}

	.home {
		padding: 30rpx;

		.datass {
			margin-bottom: 30rpx;
			padding: 30rpx;
			background: #FFFFFF;
			border-radius: 10rpx;

			.kfosjd {
				padding: 20rpx 0;
				display: flex;
				align-items: center;



				.djkshfk {
					height: 80%;
					font-size: 24rpx;
					font-weight: 400;
					color: #666666;
				}
			}

			.text {
				padding-bottom: 20rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}
		}

		.tuikuans {
			margin-bottom: 30rpx;
			padding: 30rpx;
			background: #FFFFFF;
			border-radius: 10rpx;

			.hahahahha {
				.djkshfks {
					padding: 30rpx 0;
					display: flex;
					justify-content: space-around;
					align-items: center;
					flex-wrap: wrap;
					font-size: 24rpx;
					font-weight: 400;
					color: #333333;
				}

				.dmskajds {
					font-size: 24rpx;
					font-weight: 400;
					color: #333333;
				}

				.imgsa {
					border-radius: 20rpx;
					width: 160rpx;
					height: 160rpx;
					margin-bottom: 20rpx;
				}
			}

			.djkshfk {
				width: 80%;
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}

			.dmskajd {
				width: 20%;
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}

			.kfosjd {
				padding: 20rpx 0;
				display: flex;
				align-items: center;
			}

			.text {
				padding-bottom: 20rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}
		}

		.tuikuan {
			margin-bottom: 30rpx;
			padding: 30rpx;
			width: 690rpx;
			height: 178rpx;
			background: #FFFFFF;
			border-radius: 10rpx;

			.ipnu {
				padding: 30rpx 0;
			}

			.text {
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}
		}

		.bottomsk {
			margin-bottom: 30rpx;
			padding: 30rpx;
			background: #FFFFFF;
			border-radius: 10rpx;

			.kfosjd {
				padding: 20rpx 0;
				display: flex;
				align-items: center;

				.dmskajd {
					width: 20%;
					font-size: 24rpx;
					font-weight: 400;
					color: #333333;
				}

				.djkshfk {
					height: 80%;
					font-size: 24rpx;
					font-weight: 400;
					color: #666666;
				}
			}

			.text {
				padding-bottom: 20rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}
		}

		.centers {
			width: 690rpx;
			height: 160rpx;
			background: #FFFFFF;
			border-radius: 10rpx;
			margin-bottom: 30rpx;
			padding: 30rpx;

			.text {
				font-size: 24rpx;
				font-weight: 400;
				color: #666666;
			}

			.phone {
				margin-left: 20rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #999999;
			}

			.name {
				font-size: 26rpx;
				font-weight: 400;
				color: #333333;
			}

			.img {
				width: 60rpx;
				height: 60rpx;
			}
		}

		.tosp {
			background-image: url(../../static/me_payment_bg.png);
			background-size: cover;
			background-repeat: no-repeat;
			width: 690rpx;
			height: 170rpx;
			margin-bottom: 30rpx;

			.cxcxdcdcdcd {
				margin-bottom: 20rpx;
				font-size: 30rpx;
				font-weight: 400;
				color: #007399;
			}

			.cdsfsdfs {
				width: fit-content;
				padding: 10rpx 20rpx;
				background: #E4F2F4;
				border-radius: 100rpx;
			}

			.jhjk {
				font-size: 24rpx;
				font-weight: 400;
				color: #000000;
			}

			.img {
				margin-right: 10rpx;
				width: 18rpx;
				height: 22rpx;
			}
		}

		.swiper-item {
			margin-bottom: 30rpx;
			border-radius: 10rpx;
			background-color: #FFFFFF;
			padding: 30rpx;

			.kfhkjsdh {
				display: flex;
				justify-content: space-between;
				align-data_list: center;
				padding: 30rpx 0;

				.text {
					font-size: 24rpx;
					font-weight: 400;
					color: #333333;
				}

				.red {
					font-size: 24rpx;
					font-weight: 400;
					color: #DB1625;
				}

				.status {
					font-size: 24rpx;
					font-weight: 400;
					color: #DB0E1E;
				}
			}

			.centre {
				display: flex;
				align-data_list: center;
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
				align-data_list: center;
				padding: 30rpx 0;
				margin-bottom: 30rpx;
				border-bottom: 1px solid #F6F6F6;

				.status {
					padding: 5rpx 10rpx;
					background: #FC716A;
					border-radius: 4rpx;
					font-size: 20rpx;
					font-weight: 400;
					color: #FFFFFF;
				}

				.text {
					font-size: 24rpx;
					font-weight: 400;
					color: #333333;
				}
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
			align-data_list: center;
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

	.lll {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
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

	// 
	// 
	// 
</style>
