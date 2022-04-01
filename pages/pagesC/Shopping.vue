<template>
	<view>
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
		<!-- 轮播 -->
		<view class="lunbo">
			<u-swiper height="750" :border-radius="0" @click="kansss" :list="list" :img-mode="'scaleToFill'"></u-swiper>
		</view>
		<!-- 轮播 -->
		<view class="datas">
			<view class="">
				<view class="cet" style="justify-content: space-between;">
					<view style="width: 90%;">
						<view class="title">
							{{alls.name||""}}
						</view>
						<view class="text">
							{{alls.set||""}}
						</view>
					</view>
					<view class="">
						<button type="default"
							style="background-color: #FFFFFF;padding: 0;margin: 0;display: flex;flex-direction: column;"
							open-type="share">
							<image class="imgs" src="../../static/icon_shop_share.png" mode="aspectFit"></image>
							<view class="share">
								分享
							</view>
						</button>
					</view>
				</view>
				<view class="cet" style="justify-content: space-between;margin-top: 30rpx;">
					<view class="cet" style="justify-content: space-between;">
						<view class="mony">
							￥{{xiaoshoujiage||""}}
						</view>
						<view class="monys">
							￥{{alls.cb_price||""}}
						</view>
					</view>
					<view class="yue">
						月销{{alls.xl||""}}
					</view>
				</view>
			</view>
		</view>
		<view class="duo" @click="open(10)">
			<view class="cet">
				<view class="fahuo">
					发货
				</view>
				<view class="cet" style="margin: 0 40rpx;">
					<!-- <view class="yunfei">
						{{shifa||""}}
					</view>
					<view class="yunfei">
						至
					</view>
					<view class="yunfei">
						{{shouhuo||""}}
					</view>
					<view class="shu">
					</view> -->
					<view class="yunfei">
						运费：<text v-if="alls.yf != 0">{{alls.yf||""}}</text><text v-else>包邮</text>
					</view>
				</view>
			</view>
			<!-- <image class="backimg" src="../../static/icon_shop_huiseyoufan.png" mode="aspectFit"></image> -->
		</view>
		<view class="duo" @click="open(1)">
			<view class="cet">
				<view class="fahuo">
					参数
				</view>
				<view class="cet" style="margin: 0 40rpx;">
					<view class="yunfei" v-if="isSize === 10000">
						请选择
					</view>
					<view class="yunfei" v-else>
						{{alls.son[isSize].spections||""}}
					</view>
				</view>
			</view>
			<image class="backimg" src="../../static/icon_shop_huiseyoufan.png" mode="aspectFit"></image>
		</view>
		<view class="duo" @click="open(20)">
			<view class="cet">
				<view class="fahuo">
					保障
				</view>
				<view class="cet" style="margin: 0 40rpx;">
					<!-- <view class="yunfei" v-for="(item,index) in baozhang" :key="index">
						{{item||""}}<text v-if="index < baozhang.length - 1"> · </text>
					</view> -->
					<view class="yunfei">
						{{alls.bz||""}}
					</view>
				</view>
			</view>
			<!-- <image class="backimg" src="../../static/icon_shop_huiseyoufan.png" mode="aspectFit"></image> -->
		</view>
		<view class="pinglun">
			<view class="pingluns">
				最新评价
			</view>
			<view class="" v-if="pinglun_list.length !=0" style="padding: 30rpx 0;">
				<view class="dsaascc">
					<image class="img" v-if="pinglun_list[0].head != ''" :src="pinglun_list[0].head" mode="aspectFit">
					</image>
					<image class="img" v-else src="../../static/icon_me_avatar.png" mode="aspectFit"></image>
					<view class="skfksdfsd">
						<view class="">
							<view class="name">
								{{pinglun_list[0].name||""}}
							</view>
							<view class="time">
								{{pinglun_list[0].create_at||""}}
							</view>
						</view>
						<view class="text">
							{{pinglun_list[0].content||""}}
						</view>
						<block class="" v-for="(item,index) in pinglun_list[0].image" :key="index">
							<image @click="kan(item)" style="width: 100rpx;height: 100rpx;margin: 20rpx;"
								:src="img+item" mode="aspectFit"></image>
						</block>
					</view>
				</view>
				<view class="cet dasdsad" @click="kanpinglun">
					<view class="textssss">
						查看全部评价
					</view>
					<image class="scsfd" src="../../static/icon_shop_lamsemore.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="" v-else style="padding: 30rpx 0;">
				<view class="dsaascc">
					<view class="skfksdfsd">
						<view class="name" style="font-size: 30rpx;text-align: center;">
							暂无评论
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="tuijian">
			<view class="text">
				热门推荐搭配
			</view>
			<view class="zxcv"></view>
			<u-adata :list="data_list" @click="goodstuijian"></u-adata>
		</view>
		<view class="data_shop">
			<view class="text">
				商品详情
			</view>
			<view class="xian"></view>
			<view class="bai"></view>
			<view class="content">
				<view class="" v-for="(item,index) in alls.content" :key="index">
					<image style="height: 600rpx;" :src="img+item" mode="widthFix"></image>
				</view>
			</view>


		</view>
		<view style="height: 110rpx;margin-top: 20rpx;"></view>
		<view class="kjshfjsdk">
			<view class="tijiao">
				<view class="cet">
					<view class="" @click="soucang">
						<view class="img">
							<image v-if="sc" src="../../static/icon_shop_act_shoucang.png" mode="aspectFit"></image>
							<image v-else src="../../static/icon_shop_shoucang.png" mode="aspectFit"></image>
						</view>
						<view class="text">
							收藏
						</view>
					</view>
					<view class="cat" @click="gocart">
						<view class="cart-num" v-if="cart_num != 0">
							{{cart_num||""}}
						</view>
						<image class="img" src="../../static/icon_shop_gouwuche.png" mode="aspectFit"></image>
						<view class="text">
							购物车
						</view>
					</view>
				</view>
				<view class="cet">
					<view class="add" @click="addcarts(0)">
						加入购物车
					</view>
					<view class="shop" @click="addcarts(1)">
						立即购买
					</view>
				</view>
			</view>
			<view :style="'height: '+height+'rpx;background-color: #FFFFFF;'">

			</view>
		</view>
		<u-pinglun :show="showComment" :huifu="huifu" @chang="chang" :imgurl="img" :pinglun_list="pinglun_list"
			@guanbi="chang">
		</u-pinglun>
		<u-popup v-model="show[0]" @close="guan" mode="bottom" length="60%" :closeable="true" border-radius="8">
			<view class="klks">请选择地区</view>
			<view class="bjhk">
				<u-tabs :list="diqu" :weizhi="false"></u-tabs>
				<!-- <view v-for="(item,index) in xuanzhes" :key="index">
					<view class="xuanzhe">
						<view :class="[xuanzhed==index?'dashfdshf':'xuanzhe_q']">
							{{item.title||""}}
						</view>
					</view>
					<view class="cxczc">
						<view class="daasdzxcxzcz" v-for="(items,indexs) in item.list" :key="indexs"
							@click="tan(indexs)">
							{{items.title||""}}
						</view>
					</view>
				</view> -->
			</view>
		</u-popup>
		<!-- 选择规格 -->
		<u-popup v-model="show[1]" @close="guan" mode="bottom" length="60%" :closeable="true" border-radius="8">
			<view class="produce_all">
				<view class="top_img">
					<image :src="list[0]" style="width: 140rpx;height: 140rpx;margin-right: 20rpx;" mode="aspectFit">
					</image>
					<view style="width: 70%;">
						<view
							style="font-size: 35rpx;font-weight: 800;color: #FF4B3C;overflow: hidden; white-space: nowrap;text-overflow: ellipsis;">
							{{alls.name||""}}{{'-'+alls.son[isSize].spections||''}}
						</view>
						<view class="" style="font-size: 44rpx;font-weight: 800;color: #FF4B3C;margin-top: 20rpx;">
							￥{{alls.son[isSize].xc_price||"请选择"}}
						</view>
					</view>
				</view>
				<!-- <view class="">
					<view class="" style="font-size: 24rpx;font-weight: 800;margin-top: 40rpx;">
						颜色
					</view>
					<view class="color_ul">
						<view :class="isType==item.id?'color_li':'.color_li1'" @click="chooseType(item)"
							v-for="item in typeArr" :key="item.id">
							{{item.spections||""}}
						</view>
					</view>
				</view> -->
				<view class="">
					<view class="" style="font-size: 24rpx;font-weight: 800;margin-top: 40rpx;">
						规格
					</view>
					<view class="color_ul">
						<view :class="isSize==index?'color_li':'.color_li1'" @click="chooseSize(index)"
							v-for="(item,index) in alls.son" :key="item.id">
							{{item.spections||""}}
						</view>
					</view>
				</view>
				<view
					style="display: flex;align-items: center;justify-content: space-between;margin-bottom: 150rpx;margin-top: 20rpx;">
					<view style="font-size: 24rpx;font-weight: 800;">
						数量
					</view>
					<view class="num_add">
						<view class="add_btn" @click="minus">
							-
						</view>
						<view class="num_view">
							{{value||""}}
						</view>
						<view class="add_btn" @click="add">
							+
						</view>
					</view>
				</view>
			</view>
			<view class="kjshfjsdk">
				<view class="tijiao">
					<view class="cet">
						<view class="" @click="soucang">
							<view class="img">
								<image v-if="sc" src="../../static/icon_shop_act_shoucang.png" mode="aspectFit"></image>
								<image v-else src="../../static/icon_shop_shoucang.png" mode="aspectFit"></image>
							</view>
							<view class="text">
								收藏
							</view>
						</view>
						<view class="cat" @click="gocart">
							<view class="cart-num" v-if="cart_num != 0">
								{{cart_num||""}}
							</view>
							<image class="img" src="../../static/icon_shop_gouwuche.png" mode="aspectFit"></image>
							<view class="text">
								购物车
							</view>
						</view>
					</view>
					<view class="cet">
						<view class="add" @click="addresss(0)">
							加入购物车
						</view>
						<view class="shop" @click="addresss(1)">
							立即购买
						</view>
					</view>
				</view>
				<view :style="'height: '+height+'rpx;background-color: #FFFFFF;'">

				</view>
			</view>
		</u-popup>
		<u-popup v-model="show[2]" @close="guan" mode="bottom" length="60%" :closeable="true" border-radius="8">
			<view class="klks">保障</view>
			<view class="">

			</view>
			<view class="clos">
				关闭
			</view>
		</u-popup>
		<u-kehu url="../Home/booking/AppointmentDesign"></u-kehu>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderid: 0,
				height: uni.getStorageSync("bottomheigth"),
				cart_num: uni.getStorageSync("cart_num"),
				huifu: false,
				xiaoshoujiage: 0,
				value: 1,
				diqu: [{
					name: "请选择"
				}],
				showComment: false, //评论
				data_list: [],
				baozhang: ['官方正品', '正品保障', '售后无忧'],
				guige: "",
				xuanzhed: 0,
				xuanzhes: [{
					title: "请选择",
					list: [{
							id: 0,
							title: "四川省",
							data: ["川一", '川二', '川三', '川四', '川五', '川六']
						},
						{
							id: 0,
							title: "四川省1",
							data: ["川一1", '川二1', '川三1', '川四1', '川五1', '川六1']
						},
						{
							id: 0,
							title: "四川省2",
							data: ["川一2", '川二2', '川三2', '川四2', '川五2', '川六2']
						},
						{
							id: 0,
							title: "四川省3",
							data: ["川一3", '川二3', '川三3', '川四3', '川五3', '川六3']
						},
						{
							id: 0,
							title: "四川省4",
							data: ["川一4", '川二4', '川三4', '川四4', '川五4', '川六4']
						},
						{
							id: 0,
							title: "四川省5",
							data: ["川一5", '川二5', '川三5', '川四5', '川五5', '川六5']
						},
						{
							id: 0,
							title: "四川省6",
							data: ["川一6", '川二6', '川三6', '川四6', '川五6', '川六6']
						}
					]
				}],
				show: [false, false, false],
				shifa: "广东广州",
				shouhuo: "四川成都",
				yunfei: 0,
				title: "产品详情",
				list: [],
				alls: {},
				shopid: "",
				pinglun_list: [],
				isSize: 0, //规格
				sc: false, //收藏
				img: this.$imgPath
			};
		},
		onLoad(ev) {
			// 商品id
			this.shopid = ev.shopid;
			// 商品id
			if (ev.orderid) {
				this.orderid = ev.orderid
			}
			this.GoodsdataAlls();
		},
		// 来自页面内分享按钮
		onShareAppMessage(res) {
			let aa = 0;
			if (uni.getStorageSync("user_info").bbs != null) {
				aa = uni.getStorageSync("user_info").bbs.id
			}
			return {
				title: this.alls.name,
				imageUrl:this.list[0],
				path: '/pages/pagesC/Shopping?shopid=' + this.shopid + "&uid=" + uni.getStorageSync("user_info").id +
					"&level=" + aa
			}
		},
		methods: {
			kansss(ev) {

				let that = this;
				uni.previewImage({
					urls: this.list,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {},
						fail: function(err) {}
					}
				});
			},
			kan(ev) {
				let that = this;
				uni.previewImage({
					urls: [that.$imgPath + ev],
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {},
						fail: function(err) {}
					}
				});
			},
			async gocart() {
				if (await this.$login()) {
					uni.navigateTo({
						url: "./shopcart"
					})
				}
			},
			add() {
				this.value++
			},
			minus() {
				if (this.value == 1) {
					return
				}
				this.value--
			},
			addresss(ev) {
				if (this.isSize == 10000) {
					return uni.showToast({
						title: "请选择规格",
						duration: 1000,
						icon: "none"
					})
				}
				if (this.value == 0) {
					return uni.showToast({
						title: "请选择数量",
						duration: 1000,
						icon: "none"
					})
				}
				if (ev == 0) {
					let aa = uni.getStorageSync("user_info").id
					this.$api.addcart({
						user_id: aa,
						shopid: this.alls.id,
						specid: this.alls.son[this.isSize].id,
						specidsize: this.alls.son[this.isSize].spections,
						num: this.value,
						price: this.alls.son[this.isSize].xc_price,
						orderid: this.orderid
					}).then(data => {
						if (data.data.code == 1) {
							let aa = this.show
							aa[1] = false;
							this.show = [];
							this.show = [...aa]
							this.$api.shopcart({
								id: uni.getStorageSync("user_info").id
							}).then(data => {
								let aa = 0
								if (data.data.code == 1) {

									data.data.data.status.forEach(item => {
										aa = aa + 1
									})
								} else {
									aa = 0
								}
								if (aa >= 99) {
									aa = "..."
								}

								uni.setStorageSync("cart_num", aa)
								this.cart_num = uni.getStorageSync("cart_num")
							})

						}
						uni.showToast({
							title: data.data.msg,
							duration: 1000,
							icon: "none"
						})
					})
				} else {
					if (this.orderid == 0) {
						let aa = [{
							simage: this.alls.simage,
							name: this.alls.name,
							num: this.value,
							xc_price: this.alls.son[this.isSize].xc_price,
							shopid: this.alls.id,
							specid: this.alls.son[this.isSize].id,
							specidsize: this.alls.son[this.isSize].spections,
						}]

						uni.navigateTo({
							url: "./quzhifu?goodsid=" + this.alls.id + "&goodsdata=" + JSON.stringify(aa) +
								"&yf=" +
								this.alls.yf
						})
					} else {
						uni.showToast({
							title: "此商品只能加入购物车",
							icon: "none"
						})
					}

				}
			},
			async addcarts() {
				if (await this.$login()) {
					this.open(1)
				}
			},
			async soucang() {
				if (await this.$login()) {
					let state = ""
					if (this.sc) {
						state = 1
					} else {
						state = 0
					}
					this.$api.addfollow({
						user_id: uni.getStorageSync("user_info").id,
						type: 0,
						state,
						shop_id: this.alls.id,
						video_id: 0
					}).then(data => {
						if (data.data.code == 1) {
							this.sc = !this.sc;
						}
					})
				}
			},
			chooseSize(item) {
				this.isSize = item;


				this.xiaoshoujiage = this.alls.son[item].xc_price
			},
			// chooseType(item) {
			// 	this.type = item.spections
			// 	this.isType = item.id
			// },
			//全部数据
			GoodsdataAlls() {
				let aaaaa = 0
				let aa = uni.getStorageSync("user_info").id
				if (aa) {
					aaaaa = aa
				}
				//商品详情
				this.$api.shopxq({
					user_id: aaaaa,
					id: this.shopid
				}).then(data => {
					if (data.data.code == 1) {
						this.alls = {};
						this.list = [];
						this.pinglun_list = [];
						this.alls = data.data.data.status[0];
						this.xiaoshoujiage = this.alls.xc_price
						if (Object.prototype.toString.call(this.alls.follow) === '[object Object]') {
							this.sc = true;

						}
						// // 富文本图片加域名
						// if (this.alls.content != '') {
						// 	this.alls.content = this.alls.content.replace(/\<img src=\"/gi,
						// 		'<img src=\"' + this.$imgPath);
						// }
						let pp = this.alls.content.split(",");
						this.alls.content = []
						pp.forEach(item => {
							this.alls.content.push(item)
						})
						let image = data.data.data.status[0].image.split(",");
						// 图片加域名
						image.forEach(item => {
							this.list.push(this.$imgPath + item)
						})
						if (data.data.data.status[0].pll != '') {
							// 评论数据处理
							if (Array.isArray(data.data.data.status[0].pll)) {
								this.pinglun_list.push(data.data.data.status[0].pll)
							} else {
								data.data.data.status[0].pll = [data.data.data.status[0].pll]
								this.pinglun_list.push(...data.data.data.status[0].pll)
							}

							let nn = this.pinglun_list[0].image
							this.pinglun_list[0].image = nn.split(",")
							this.pinglun_list.forEach(item => {
								item['checked'] = false
							})
						} else {
							this.pinglun_list = []
						}
					} else {
						uni.showToast({
							title: data.data.msg,
							duration: 1000,
							icon: "none"
						})
					}
				})
				//商品详情
				// 推荐商品
				this.$api.shopindex().then(data => {
					if (data.data.code == 1) {
						this.data_list = [];
						data.data.data.status.forEach((item, index) => {
							if (index <= 1) {
								this.data_list.push({
									id: item.id,
									isgo: false,
									price: item.xc_price,
									title: item.name,
									image: item.simage,
									alls: item
								})
							}

						})
					} else {
						uni.showToast({
							title: data.data.msg,
							duration: 1000,
							icon: "none"
						})
					}
				})
				// 推荐商品
			},
			//商品推荐
			goodstuijian(ev) {
				this.shopid = ev.alls.id;
				this.GoodsdataAlls();
			},
			//评论回调
			chang() {
				this.showComment = false;
			},
			//评论
			async kanpinglun() {
				if (await this.$login()) {
					this.showComment = true;
				}
			},
			// 规格状态
			guan() {
				this.show = [false, false, false]
			},
			// 选择地区
			tan(ev) {
				this.xuanzhed = ev;
			},
			// 打开规格弹窗
			open(ev) {
				var aa = this.show
				switch (ev) {
					case 0:
						aa[0] = true;
						break;
					case 1:
						aa[1] = true;
						break;
					case 2:
						aa[2] = true;
						break;
					default:
				}
				this.show = [];
				this.show = [...aa]
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
	.data_shop {
		background-color: #FFFFFF;

		.bai {
			width: 100%;
			height: 30rpx;
		}

		.text {
			padding-top: 40rpx;
			padding-bottom: 30rpx;
			text-align: center;
			font-size: 28rpx;
			font-weight: 400;
			color: #000000;
		}

		.xian {
			width: 100%;
			height: 2rpx;
			background: #F6F6F6;
		}
	}

	.tuijian {
		margin: 40rpx 0;

		.zxcv {
			width: 180rpx;
			height: 14rpx;
			background: #79B6C7;
			margin: 0 auto;
			margin-top: -16rpx;
		}

		.text {
			text-align: center;
			font-size: 28rpx;
			font-weight: 400;
			color: #000000;
		}
	}

	.pinglun {
		margin-top: 20rpx;
		padding: 0 30rpx;
		background-color: #FFFFFF;

		.time {
			margin-top: 10rpx;
			font-size: 20rpx;
			font-weight: 400;
			color: #999999;
		}

		.name {
			font-size: 24rpx;
			font-weight: 400;
			color: #333333;
		}

		.dasdsad {
			padding: 50rpx 0;
		}

		.textssss {
			font-size: 22rpx;
			font-weight: 400;
			color: #007399;
		}

		.scsfd {
			margin-left: 10rpx;
			width: 10rpx;
			height: 18rpx;
		}

		.skfksdfsd {
			width: 84%;
			margin-left: 20rpx;
		}

		.dsaascc {
			display: flex;
		}

		.img {
			width: 78rpx;
			height: 78rpx;
			border-radius: 50%;
		}

		.text {
			margin-top: 30rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #333333;
		}

		.pingluns {
			padding: 40rpx 0;
			font-size: 28rpx;
			font-weight: 400;
			color: #000000;
		}
	}

	.kjshfjsdk {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.tijiao {

		height: 110rpx;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;

		.add {
			font-size: 26rpx;
			font-weight: 400;
			color: #007399;
			text-align: center;
			line-height: 70rpx;
			width: 190rpx;
			height: 70rpx;
			background: #E6F1F5;
			border: 1px solid #007399;
			border-radius: 35rpx;
		}

		.shop {
			font-size: 26rpx;
			font-weight: 400;
			color: #FFFFFF;
			text-align: center;
			line-height: 70rpx;
			width: 190rpx;
			height: 70rpx;
			background: #007399;
			border-radius: 35rpx;
			margin-left: 20rpx;
		}

		.cat {
			position: relative;
			margin-left: 70rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.text {
			font-size: 20rpx;
			font-weight: 400;
			color: #666666;
		}

		.img {
			width: 38rpx;
			height: 38rpx;
		}
	}

	.duo {
		margin-top: 20rpx;
		padding: 40rpx 30rpx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.shu {
			margin: 0 40rpx;
			width: 2rpx;
			height: 24rpx;
			background: #C5C5C5;
		}

		.yunfei {
			font-size: 24rpx;
			font-weight: 400;
			color: #333333;
		}

		.fahuo {
			font-size: 24rpx;
			font-weight: 400;
			color: #999999;
		}

		.backimg {
			width: 10rpx;
			height: 16rpx;
		}
	}

	.datas {
		padding: 30rpx;
		background: #FFFFFF;


		.yue {
			font-size: 20rpx;
			font-weight: 400;
			color: #999999;
		}

		.mony {
			font-size: 28rpx;
			font-weight: 400;
			color: #D71312;
		}

		.monys {
			margin-left: 20rpx;
			font-size: 22rpx;
			font-weight: 400;
			text-decoration: line-through;
			color: #999999;
		}

		.share {
			font-size: 20rpx;
			font-weight: 400;
			color: #999999;
		}

		.title {
			font-size: 26rpx;
			font-weight: 400;
			color: #000000;
		}

		.text {
			margin-top: 20rpx;
			font-size: 22rpx;
			font-weight: 400;
			color: #666666;
		}

		.imgs {
			width: 36rpx;
			height: 36rpx;
		}
	}

	.lunbo {
		width: 100%;
	}

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

	.xuanzhe_q {
		padding: 30rpx 20rpx;
		display: inline-block;
		font-size: 22rpx;
		color: #000000;
		border-bottom: 1px solid #000000;

	}

	.dashfdshf {
		padding: 30rpx 20rpx;
		display: inline-block;
		font-size: 22rpx;
		color: #ff0000;
		border-bottom: 1px solid #ff0000;
	}

	.bjhk {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.xuanzhe {
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1px solid #ff55ff;
	}

	.klks {
		text-align: center;
		line-height: 100rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: #000000;
	}

	.daasdzxcxzcz {
		margin: 20rpx;
		width: 200rpx;
		height: 70rpx;
		line-height: 70rpx;
		background-color: #19BE6B;
		text-align: center;
		border-radius: 100rpx;
	}

	.cxczc {
		align-items: center;
		flex-wrap: wrap;
		display: flex;
		justify-content: space-between;
	}

	.clos {
		position: fixed;
		bottom: 40rpx;
		left: 0;
		right: 0;
		background-color: #007399;
		color: #FFFFFF;
		border-radius: 4rpx;
		margin: 0 30rpx;
		padding: 20rpx 0;
		text-align: center;
	}

	/* 选择规格 */
	.top_img {
		display: flex;
		align-items: flex-end;
	}

	.produce_all {
		padding: 30rpx;
	}

	.color_ul {
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
		flex-wrap: wrap;
	}

	.color_li {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		background-color: rgba(255, 75, 60, 0.2);
		border-radius: 36rpx;
		padding: 15rpx 50rpx;
		box-sizing: border-box;
		margin-top: 20rpx;
		color: #FF4B3C;
		margin-right: 16rpx;
	}

	.color_li1 {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		background-color: #eeeeee;
		border-radius: 36rpx;
		padding: 15rpx 50rpx;
		box-sizing: border-box;
		margin-top: 20rpx;
		color: #333;
		margin-right: 16rpx;
	}

	.num_add {
		width: 160rpx;
		height: 50rpx;
		background: #FFFFFF;
		border: 1rpx solid #999999;
		border-radius: 25rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.num_view {
		width: 60rpx;
		height: 50rpx;
		background: #FFFFFF;
		border: 1rpx solid #999999;
		box-sizing: border-box;
		text-align: center;
		line-height: 50rpx;
		font-size: 24rpx;
	}

	.add_btn {
		width: 50rpx;
		height: 50rpx;
		text-align: center;
		line-height: 50rpx;
		font-size: 24rpx;
	}

	.cart-num {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		background-color: #e25c5c;
		color: #ffffff;
		position: absolute;
		top: -10px;
		right: -8px;
		line-height: 40rpx;
		text-align: center;
		font-weight: 400;
		font-size: 26rpx;
	}

	.content {
		padding: 0rpx;
		font-size: 0rpx;
	}
</style>
