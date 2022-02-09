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
			<!-- 收货地址 -->
			<view class="centers cet" style="justify-content: space-between;" @click="seleadd">
				<image class="img" src="../../static/icon_me_blueaddress.png" mode="aspectFit"></image>
				<view style="width: 84%;" v-if="address != ''">
					<view class="cet" style="justify-content: flex-start;">
						<view class="name">
							{{address_name}}
						</view>
						<view class="phone">
							{{address_phone}}
						</view>
					</view>
					<view class="text liangdiandain">
						{{address}}
					</view>
				</view>
				<view v-else style="margin-right: 150px;">
					请选择收货地址
				</view>
			</view>
			<!-- 商品 -->
			<view class="swiper-item">
				<view class="centre" v-for="(itemc,indexc) in goodsdata" :key="indexc">
					<view class="">
						<image class="img" :src="img+itemc.simage" mode="aspectFit"></image>
					</view>
					<view class="" style="margin-left:20rpx;">
						<view class="name">
							{{itemc.name}}
						</view>
						<view class="name">
							规格：{{itemc.specidsize}}
						</view>
						<view class="">
							<text class="fdsds">共{{itemc.num}}件 合计：</text><text
								class="fsdfsfs fdsds">￥{{itemc.xc_price * itemc.num}}</text>
						</view>
					</view>
				</view>
				<view style="">
					<view class="text kfhkjsdh">
						<view class="">
							商品总价：
						</view>
						<view class="red">
							￥{{zjia}}
						</view>
					</view>
					<view class="text kfhkjsdh">
						<view class="">
							数量
						</view>
						<view class="reds">
							共{{znum}}件
						</view>
					</view>
					<view class="text kfhkjsdh">
						<view class="">
							运费
						</view>
						<view class="red">
							￥{{yf}}
						</view>
					</view>
					<view class="text kfhkjsdh" @click="youhuijuan">
						<view class="">
							优惠券
						</view>
						<view class="cet">
							<view class="red">
								<text v-if="youhuijuan_num != 0">-￥{{youhuijuan_num}}</text><text v-else>暂无可用优惠卷</text>
							</view>
							<image style="width: 8rpx;height: 14rpx;margin-left: 10rpx;"
								src="../../static/icon_home_heiseyoufan.png" mode="aspectFit"></image>
						</view>
					</view>
				</view>
				<view style="height: 2rpx;background: #F6F6F6;">

				</view>
				<view class="text kfhkjsdh">
					<view class="">
						总金额：<text class="red">￥{{zjia}}</text>
					</view>
					<view class="red">
						未支付
					</view>
				</view>
			</view>
			<view class="tuikuan">
				<view class="text">
					订单备注(选填)：
				</view>
				<view class="xians">
				</view>
				<view class="ipnu">
					<input type="text" placeholder="订单备注" v-model="value" value="" />
				</view>
			</view>
		</view>
		<view style="height: 110rpx;"></view>
		<u-kehu style="position: relative;z-index: 10000;" url="../Home/booking/AppointmentDesign"></u-kehu>
		<view class="annius">
			<view class="anniu">
				<view class="">
					<text class="heji">合计:<text style="color: #DB0E1E;">￥</text></text><text
						class="hejimony">{{tijiaozjia.toFixed(2)}}</text>
				</view>
				<view v-if="buyanzheng" class="button" @click="xianshi">
					提交订单
				</view>
				<view v-else class="button" @click="annui()">
					提交订单
				</view>
			</view>
		</view>
		<!-- <view class="annius">
			<view class="anniu">
				<view class="">
					<text class="heji">合计:<text style="color: #DB0E1E;">￥</text></text><text
						class="hejimony">{{tijiaozjia.toFixed(2)}}</text>
				</view>
				<view class="button" @click="annui()">
					提交订单
				</view>
			</view>
		</view> -->
		<u-popup width="500" border-radius="30" v-model="shoujiyanzheng" mode="center">
			<view class="yueduwo">
				<view class="text">
					确保是你本人操作
				</view>
				<view class="textss">
					<input type="number" value="" placeholder="请输入手机号" v-model="shoujihao" />
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
						<view class="mingcheng" @click="fuwenben">
							《{{item.name}}{{index}}》
						</view>
					</view>
				</view>
				<view class="anniusss">
					<view class="hkhnij" @click="tongyi(0)">
						暂不使用
					</view>
					<view class="hkhnij jjhgj" @click="annui()">
						同意
					</view>
				</view>
			</view>
		</u-popup>
		<u-popup width="640" :closeable="true" border-radius="30" v-model="show" mode="bottom">
			<view class="popup">
				<view class="top">
					订单支付
				</view>
				<view class="jine">
					金额
				</view>
				<view class="yue" style="padding: 20rpx 0;">
					<text style="font-size:30rpx;">￥</text><text>558.00</text>
				</view>
				<view class="hahahahahah cet" style="padding: 20rpx 0;">
					<view class="hhhh">
						请及时支付，预期订单将自动取消
					</view>
				</view>
				<view class="bottoms">
					<view class="zhifu" @click="xuanzhe(0)">
						支付
					</view>
				</view>
			</view>
		</u-popup>
		<u-popup width="640" :closeable="true" border-radius="30" v-model="showa" mode="bottom">
			<view class="popup">
				<view class="top">
					提示
				</view>
				<view class="cets">
					确认取消该订单么？
				</view>
				<view class="xian">

				</view>
				<view class="bottoms">
					<view class="sdasas" @click="xuanzhe(0)">
						取消
					</view>
					<view class="czcxc" @click="xuanzhe(1)">
						确定
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				buyanzheng: true,
				time: 0,
				huoqu: "获取验证码",
				code: "",
				shoujihao: "",
				shoujiyanzheng: false,
				xieyi: [],
				yuedu: false,
				youhuijuan_num: 0,
				tijiaozjia: 0,
				yf: 0,
				zjia: 0,
				znum: 0,
				img: this.$imgPath,
				alls_address: {},
				address_name: "",
				address_phone: "",
				address: "",
				value: "",
				show: false,
				shows: false,
				showa: false,
				title: "确认订单",
				goodsdata: [],
				cartid: 0,
				orderid: "",
				iscartid: true
			};
		},
		onLoad(ev) {
			let that = this;
			if (uni.getStorageSync("address")) {
				that.alls_address = uni.getStorageSync("address");
				that.address = that.alls_address.title + that.alls_address.address
				that.address_name = that.alls_address.username
				that.address_phone = that.alls_address.phone
			}
			uni.$on('address', function(data) {
				that.alls_address = data;
				that.address = data.title + data.address
				that.address_name = data.username
				that.address_phone = data.phone
			})
			uni.$on('youhuijuan', function(data) {
				that.youhuijuan_num = data.id
			})
			if (ev.yf) {
				that.yf = ev.yf;
			}
			if (ev.iscartid) {
				that.iscartid = false;
			}
			if (ev.goodsdata) {
				let aa = JSON.parse(ev.goodsdata)
				console.log(aa, "ss");
				let arr = []
				that.goodsdata = [...aa];
				that.goodsdata.forEach(item => {
					that.zjia = that.zjia + item.num * item.xc_price
					that.znum = that.znum + item.num
					arr.push(item.id)
				})
				that.zjia = that.zjia.toFixed(2)
				that.cartid = arr.join(",")
				that.tijiaozjia = Number(that.zjia) + Number(that.yf)
			}
			if (ev.title) {
				that.title = ev.title;
			}
			this.$api.agreement({
				state: 4
			}).then(data => {
				if (data.data.code == 1) {
					data.data.data.status.forEach(item => {
						item["check"] = false
					})
					this.xieyi = data.data.data.status
				} else {
					this.buyanzheng = false
				}
			})
		},
		methods: {
			go_code() {
				if (this.time == 0) {
					this.time = 60
					let aa = setInterval(() => {
						this.time--
						this.huoqu = this.time + "s后获取"
						if (this.time == 0) {
							clearInterval(aa)
							this.huoqu = '获取验证码'
						}
					}, 1000)
				}
			},
			xianshi() {
				this.shoujiyanzheng = true;
			},
			tongyis(ev) {
				if (ev == 1) {
					if (this.code != "") {
						this.tongyi(1)
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
			fuwenben() {
				uni.navigateTo({
					url: "./fuwenben"
				})
			},
			hahaha(item) {
				console.log(item);
				item.check = !item.check
			},
			aaaaaa() {
				this.showaaaaaa = !this.showaaaaaa
			},
			youhuijuan() {
				uni.navigateTo({
					url: "#"
				})
			},
			seleadd() {
				uni.navigateTo({
					url: "../pagesA/gongju0?xuanzhe=1"
				})
			},
			xuanzhea(ev) {
				switch (ev) {
					case 0:
						this.showa = false;
						break;
					case 1:
						this.showa = false;
						break;
					default:
				}
			},
			xuanzhes(ev) {
				switch (ev) {
					case 0:
						this.shows = false;
						break;
					case 1:
						this.shows = false;
						break;
					default:
				}
			},
			xuanzhe(ev) {
				switch (ev) {
					case 0:
						this.show = false;
						break;
					case 1:
						this.show = false;
						break;
					default:
				}
			},
			annui() {
				if (this.buyanzheng) {
					let mm = 0
					this.xieyi.forEach(item => {
						if (item.check) {
							mm++
						}
					})
					if (this.xieyi.length != mm) {
						return uni.showToast({
							title: "请阅读并同意协议",
							icon: "none"
						})
					}
					this.shoujiyanzheng = false;
					this.yuedu = false
				}
				let shopids = []
				let specidsizes = []
				let specids = []
				let cartids = []
				this.goodsdata.forEach(item => {
					shopids.push(item.shopid)
					specidsizes.push(item.specidsize)
					specids.push(item.specid)
					cartids.push(item.id)
				})
				if (this.iscartid) {
					cartids = 0
				}
				if (this.address != '') {
					this.$api.cartpay({
						swj: 0,
						orderid: 0,
						content: this.value,
						shopid: shopids,
						cartid: cartids,
						user_id: uni.getStorageSync("user_info").id,
						num: [this.znum],
						addressid: this.alls_address.id,
						type: 0,
						specidsize: specidsizes,
						specid: specids,
						price: this.tijiaozjia
					}).then(res => {
						if (res.data.code == 200) {
							this.orderid = res.data.orderid
							let that = this;
							//购物车数量
							this.$api.shopcart({
								id: uni.getStorageSync("user_info").id
							}).then(data => {
								let aa = 0
								if (data.data.code == 1) {

									data.data.data.status.forEach(item => {
										aa = aa + 1
									})
								}
								if (aa >= 99) {
									aa = "..."
								}
								uni.setStorageSync("cart_num", aa)
							})
							uni.requestPayment({
								timeStamp: res.data.data.timeStamp, //当前的时间
								nonceStr: res.data.data.nonceStr, //随机字符串
								package: res.data.data.package, //统一下单接口返回的 prepay_id 参数值
								signType: res.data.data.signType, //签名算法，暂支持 MD5。
								paySign: res.data.data.paySign, //签名
								success: function(res) {
									that.goss()
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
				} else {
					uni.showToast({
						title: "请选择地址",
						duration: 1000,
						icon: "none"
					})
				}

			},
			goss() {
				//购物车数量
				this.$api.shopcart({
					id: uni.getStorageSync("user_info").id
				}).then(data => {
					let aa = 0
					if (data.data.code == 1) {

						data.data.data.status.forEach(item => {
							aa = aa + Number(item.num)
						})
					}
					if (aa >= 99) {
						aa = "..."
					}
					uni.setStorageSync("cart_num", aa)
				})
				uni.navigateTo({
					url: "../pagesA/goods_data?order_id=" + this.orderid
				})
				uni.showToast({
					title: "支付成功",
					icon: "success",
					duration: 1000
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
	.annius {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100000;
	}

	.anniu {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background-color: #FFFFFF;
		padding: 20rpx 30rpx;

		.button {
			padding: 15rpx 25rpx;
			border-radius: 30rpx;
			font-weight: 400;
			margin-left: 20rpx;
			background: #007399;
			font-size: 26rpx;
			color: #FFFFFF;
		}

	}

	.popup {
		.hahahahahah {
			.hhhh {
				border-radius: 20rpx;
				width: fit-content;
				font-size: 24rpx;
				font-weight: 400;
				color: #666666;
				background: #F6F6F6;
				padding: 10rpx 20rpx;
			}

		}

		.yue {
			text-align: center;
			font-size: 44rpx;
			font-weight: 400;
			color: #DB0E1E;
		}

		.jine {
			padding: 20rpx 0;
			text-align: center;
			font-size: 30rpx;
			font-weight: bold;
			color: #333333;
		}

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

		.zhifu {
			width: 100%;
			text-align: center;
			padding: 25rpx;
			font-size: 26rpx;
			font-weight: 400;
			color: #FFFFFF;
			background: #007399;
			margin: 10rpx 30rpx;
			border-radius: 20rpx;
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
			background: #FFFFFF;
			font-size: 30rpx;
			font-weight: 400;
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
				align-items: center;
				padding: 30rpx 0;
			}

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

	.heji {
		font-size: 20rpx;
		font-weight: 400;
		color: #333333;
	}

	.hejimony {
		font-size: 26rpx;
		font-weight: 400;
		color: #DB0E1E;
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
			margin-right: 10rpx;
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
