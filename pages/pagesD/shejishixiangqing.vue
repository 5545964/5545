<template>
	<view class="dsada">
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
			<view class="xunhuan" v-for="(item,index) in list" :key="index">
				<view class="dshk">
					{{item.title}}
				</view>
				<view class="dadsda" v-for="(items,indexs) in item.list" :key="indexs">
					<!-- 显示数据 -->
					<view class="inputs" v-if="items.type == 'Displays_data'">
						<view class="cxz">
							{{items.name}}
						</view>
						<view class="asd" style="width: 76%;">
							<view class="textss">
								{{items.text}}
							</view>
						</view>
					</view>
					<!-- 显示数据 -->
					<!-- 其他选项 -->
					<view class="inputss" v-if="items.type == 'xuan'">
						<view class="cxz" style="margin-bottom: 20rpx;">
							{{items.name}}
						</view>
						<view class="asd">
							<view v-show="items.list.length != 0">
								<view class="" v-for="(itemc,indexc) in items.list" :key="indexc">
									<view class="czccxz" v-if="itemc.sex">
										<view style="width: 25%;">
											成员{{indexc+1}}
										</view>
										<view style="display: flex;justify-content: center;align-items: center;">
											<view class="jjj">
												<view class="cet">
													<view class="textss">
														{{itemc.sex}}
													</view>
												</view>
											</view>
											<view class="cet" style="margin-left: 50rpx;">
												<view class="textss">
													{{itemc.age}}
												</view>
												<view style="padding-left: 10rpx;">
													岁
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<!-- 其他选项 -->
					<!-- 上传 -->
					<view class="inputas" v-if="items.type == 'upload'">
						<view class="cxz">
							{{items.name}}<text class="khkkk">{{items.text}}</text>
						</view>
						<view v-if="items.img_list.length != 0">
							<view class="asdssss">
								<image @click="kan(indexv,indexs)"
									style="width: 200rpx;height: 200rpx;border-radius: 20rpx;margin-bottom: 20rpx;"
									:src="imgtitle+itemv" mode="" v-for="(itemv,indexv) in items.img_list"
									:key="indexv"></image>
							</view>
						</view>
					</view>
					<!-- 上传 -->
				</view>
			</view>
		</view>
		<view style="height: 100rpx;">

		</view>
		<view class="bngh" v-if="isyuyue == 0">
			<!-- <view class="annui" @click="tijiao(0)" style="background-color: #EFEFEF;color: #333333;">
				查看二维码
			</view> -->
			<!-- <view class="annui" @click="tijiao(1)" v-if="desOrder.state == 1">
				确认完成
			</view> -->
		</view>
		<view class="bngh" v-if="isyuyue != 0">
			<view class="annui" @click="tijiao(3)" style="background-color: #EFEFEF;color: #333333;">
				拒绝
			</view>
			<view class="annui" @click="tijiao(4)">
				接单
			</view>
		</view>
		<u-popup width="640" :closeable="true" border-radius="10" v-model="jujue" mode="center">
			<view class="popup">
				<view class="top">
					拒绝该订单说明
				</view>
				<!-- <input type="text" v-model="jujueliyou" /> -->
				<view style="width: 100%;padding: 20rpx;">
					<textarea style="width: 100%;" value="" placeholder="请填写拒绝理由" v-model="jujueliyouss" />
				</view>
				<view class="xian">

				</view>
				<view class="bottoms">
					<view class="sdasas" @click="jujueshanshu(0)">
						取消
					</view>
					<view class="czcxc" @click="jujueshanshu(1)">
						确定
					</view>
				</view>
			</view>
		</u-popup>
		<u-popup width="640" :closeable="true" border-radius="10" v-model="showa" mode="center">
			<view class="popup">
				<view class="top">
					提示
				</view>
				<view class="cets">
					确认完成该订单么？
				</view>
				<view class="xian">

				</view>
				<view class="bottoms">
					<view class="sdasas" @click="xuanzhea(0)">
						取消
					</view>
					<view class="czcxc" @click="xuanzhea(1)">
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
				jujueliyouss: "",
				jujue: false,
				imgtitle: this.$imgPath,
				showa: false,
				mony: "9980.00", //预约价格
				isyuyue: 0, //接单，完成
				//弹出层选项数据
				poplist: [],
				sel_list: "", //弹出层单选传递
				popshow: "", //弹出层开关
				name: "", //上传
				formData: {}, //上传
				header: {}, //上传
				action: "#", //图片上传接口
				isadd: true, //添加成员
				//成员结构
				man_data: [{
						id: 0,
						age: "",
						select: 10000
					},
					{
						id: 1,
						age: "",
						select: 10000
					},
					{
						id: 2,
						age: "",
						select: 10000
					}
				],
				//性别选项
				man_list: [{
						id: 0,
						text: "先生"
					},
					{
						id: 1,
						text: "女士"
					},
					{
						id: 2,
						text: "男孩"
					},
					{
						id: 3,
						text: "女孩"
					}
				],
				numbers: 1000, //单选判断
				title: "订单详情", //navbar
				data_list: [], //提交的数组
				chuanzhi: {}, //用于数据传递
				//list为数组结构
				list: [{
						title: '基本信息',
						list: [{
								id: 0,
								name: '姓名',
								text: "张三",
								type: "Displays_data"
							},
							{
								id: 0,
								name: '性别',
								text: "先生",
								type: "Displays_data"
							},
							{
								id: 0,
								name: '联系电话',
								text: "13800138000",
								type: "Displays_data"
							}
						]
					},
					{
						title: '项目概括',
						list: [{
								id: 3,
								name: '所在地区',
								text: "四川省成都市你妈家",
								type: "Displays_data"
							},
							{
								id: 4,
								name: '详细地址',
								text: "四川省成都市你妈家，哈哈哈哈哈",
								type: "Displays_data"
							},
							{
								id: 5,
								name: '房屋户型',
								text: "挖掘机类型",
								type: "Displays_data"
							},
							{
								id: 6,
								name: '交付时间',
								text: "2021.12.21",
								type: "Displays_data"
							},
							{
								id: 7,
								name: '入住时间',
								text: "2021.12.21",
								type: "Displays_data"
							},
							{
								id: 8,
								name: '喜欢风格',
								text: "伊拉克风格",
								type: "Displays_data"
							},
							{
								id: 9,
								name: '喜欢色调',
								text: "猛男粉",
								type: "Displays_data"
							},
							{
								id: 10,
								name: '新房居住成员',
								type: "xuan",
								list: [{
										sex: "先生",
										age: 20
									},
									{
										sex: "女士",
										age: 20
									},
									{
										sex: "蓝湖",
										age: 20
									},

									{
										sex: "女孩",
										age: 20
									}
								]
							}
						]
					},
					{
						title: '相关文件',
						list: [{
								id: 11,
								name: "平面图",
								text: "(手机拍照/购房宣传册)",
								type: "upload",
								img_list: []
							},
							{
								id: 12,
								name: "现场照片或视频",
								text: "",
								type: "upload",
								img_list: [

								]
							}
						]
					}
				],
				isdes: 0,
				desOrder: {},
			};
		},
		onLoad(ev) {
			if (ev.jiedan) {
				this.isyuyue = 1;
			}
			if (ev.isdes) {
				this.isdes = ev.isdes
				let arr = []
				this.desOrder = uni.getStorageSync("des_order");
				this.desOrder.people = this.desOrder.people.split(",")
				this.desOrder.people.forEach(item => {
					let obj = {
						sex: "",
						age: ""
					}
					let bb = item.split("_")[1]

					if (bb == 0) {
						obj.sex = "先生"
					} else if (bb == 1) {
						obj.sex = "女士"
					} else if (bb == 2) {
						obj.sex = "男孩"
					} else if (bb == 3) {
						obj.sex = "女孩"
					}

					obj.age = item.split("_")[0]
					arr.push(obj)
				})
				this.list[0].list[0].text = this.desOrder.name;
				this.list[0].list[1].text = this.desOrder.sex == 0 ? "先生" : "女士";
				this.list[0].list[2].text = this.desOrder.phone;
				this.list[1].list[0].text = this.desOrder.city || "";
				this.list[1].list[1].text = this.desOrder.dire || "";
				this.list[1].list[2].text = this.desOrder.housetype || "";
				this.list[1].list[3].text = this.desOrder.jf || "";
				this.list[1].list[4].text = this.desOrder.rz || "";
				this.list[1].list[5].text = this.desOrder.style || "";
				this.list[1].list[6].text = this.desOrder.color || "";
				this.list[1].list[7].list = arr;
				this.list[2].list[0].img_list = this.desOrder.aboveimage.split(",");
				this.list[2].list[1].img_list = this.desOrder.image.split(",");

			}
		},
		methods: {
			kan(ev, index) {
				let aa = this.list[2].list[index].img_list
				aa.forEach((item, index) => {
					aa[index] = this.$imgPath + item
				})
				uni.previewImage({
					urls: aa,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {

						},
						fail: function(err) {

						}
					}
				});
			},
			jujueshanshu(ev) {
				if (ev != 0) {
					this.$api.desorder({
						bhnew: this.jujueliyouss,
						id: this.desOrder.id,
						state: 0
					}).then(data => {

						if (data.data.code == 1) {
							uni.showToast({
								title: "拒绝成功"
							})
							uni.navigateBack({
								delta: 1
							})
						}
					})
				} else {
					this.jujue = false;
				}
			},
			xuanzhea(ev) {
				switch (ev) {
					case 0:
						this.showa = false;
						break;
					case 1:
						this.$api.desorder({
							id: this.desOrder.id,
							state: 2
						}).then(data => {
							if (data.data.code == 1) {
								uni.showToast({
									title: "确认成功"
								})
								uni.navigateBack(-1)
								this.showa = false;
							}
						})
						break;
					default:
				}
			},
			//弹出层单选
			xunhuan(ev) {
				this.poplist.forEach((item, index) => {
					if (index == ev) {
						this.poplist[ev].check = true;
						this.sel_list = this.poplist[ev].name;
					} else {
						this.poplist[index].check = false;
					}
				})
			},
			//弹出层选中之后赋值
			change() {
				this.data_list[this.chuanzhi.id] = this.sel_list;
				this.popshow = false;
			},
			//弹出层选项还原默认
			re() {
				this.poplist.forEach(item => {
					item.check = false
				})
			},
			//提交按钮
			tijiao(ev) {
				switch (ev) {
					case 0:
						uni.previewImage({
							urls: [this.$imgPath + this.desOrder.ewm],
							longPressActions: {
								itemList: ['发送给朋友', '保存图片', '收藏'],
								success: function(data) {},
								fail: function(err) {

								}
							}
						});
						// uni.navigateTo({
						// 	url: "./erweima?id=" + this.desOrder.id
						// })
						break;
					case 1:
						this.showa = true;

						break;
					case 3:

						this.jujue = true;


						break;
					case 4:

						this.$api.desorder({
							id: this.desOrder.id,
							state: 1
						}).then(data => {

							if (data.data.code == 1) {
								let aa = {
									title: "接单成功",
									text: "请前往进行中查看订单",
									botton: "我知道了"
								}
								uni.navigateTo({
									url: "./regSuccess?list=" + JSON.stringify(aa)
								})
							}
						})
						// let aa = {
						// 	title: "接单成功",
						// 	text: "请前往进行中订单上传项目沟通群 (例如QQ群或者微信群等)的群名称和二维码， 以方便客户添加~",
						// 	botton: "我知道了"
						// }
						// uni.navigateTo({
						// 	url: "./regSuccess?list=" + JSON.stringify(aa)
						// })
						break;
					default:
				}
			},
			//弹出层关闭
			guan() {
				this.popshow = false;
			},
			// 增加成员
			add() {
				let aa = this.man_data.length
				if (aa <= 10) {
					for (var i = 0; i < 3; i++) {
						this.man_data.push({
							id: aa + i,
							age: "",
							select: 10000
						})
					}
					if (this.man_data.length >= 10) {
						this.isadd = false
					}
				}
			},
			// 选择成员
			danxuans(ev, id, index) {
				let aa = this.man_data;
				this.man_data = [];
				aa[index].select = ev;
				this.man_data.push(...aa)
				this.data_list[id] = this.man_data;
			},
			// 单选框
			danxuan(ev, id) {
				this.numbers = ev
				this.data_list[id] = ev
			},
			// 打开弹出层
			open(ev) {
				this.re();
				this.chuanzhi = ev;
				this.popshow = true;
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
	.bngh {
		position: fixed;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: #ffffff;
		padding: 20rpx 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100rpx;
		z-index: 1000;
	}

	.xunhuan {
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-bottom: 20rpx;
		padding: 0 30rpx;



		.dadsda {
			.inputas {
				padding: 40rpx 0;

				.asdssss {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
				}

				.cxz {
					font-size: 30rpx;
					font-weight: 400;
					color: #333333;
					margin-bottom: 30rpx;
				}

				.khkkk {
					color: rgba(102, 102, 102, 1);
					font-size: 24rpx;
					font-weight: 300;
				}
			}

			.inputss {
				padding: 40rpx 0;

				.czccxz {
					padding: 20rpx;
					background: #F6F6F6;
					padding-top: 30rpx;
					padding-bottom: 40rpx;
					border-bottom: 1px solid #DEDEDE;
					display: flex;
					justify-content: space-between;
					align-items: center;

				}

				.czccxz:first-child {
					border-top-right-radius: 10rpx;
					border-top-left-radius: 10rpx;
				}

				.czzxczx {
					text-align: center;
					padding: 50rpx 0;
					background: #f6f6f6;
					color: #007399;
					font-size: 30rpx;
					font-weight: 400;

				}

				.nbnbn {
					border-bottom-left-radius: 10rpx;
					border-bottom-right-radius: 10rpx;
				}

				.jjj {
					display: flex;
					flex-wrap: wrap;
				}

				.textss {
					padding-left: 10rpx;
				}

				.czczcs {
					margin-left: 40rpx;

				}

				.yuanquan {
					width: 26rpx;
					height: 26rpx;
					background: #FFFFFF;
					border: 2px solid #999999;
					border-radius: 50%;

				}

				.hhjhjh {
					width: 26rpx;
					height: 26rpx;
					background: #007399;
					border-radius: 50%;
				}
			}

			.inputs {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 40rpx 0;

				.czczc {
					margin-left: 40rpx;
				}

				.textss {
					padding-left: 10rpx;
				}

				.yuanquan {
					width: 26rpx;
					height: 26rpx;
					background: #FFFFFF;
					border: 2px solid #999999;
					border-radius: 50%;

				}

				.hhjhjh {
					width: 26rpx;
					height: 26rpx;
					background: #007399;
					border-radius: 50%;
				}



				.cxz {
					font-size: 30rpx;
					font-weight: 400;
					color: #333333;
				}
			}
		}

		.dshk {
			font-size: 30rpx;
			font-weight: 800;
			color: #000000;
			padding: 40rpx 0;
		}
	}

	.dsada {
		padding: 30rpx;
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

	.ndajs {
		margin-top: 40rpx;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		background: #007399;
		border-radius: 10rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: #FFFFFF;
	}

	.annui {
		text-align: center;
		width: 50%;
		background: #007399;
		border-radius: 100rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: #FFFFFF;
		padding: 15rpx 70rpx;
		margin: 30rpx;
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
			padding: 0 40rpx;
			// width: 210rpx;
			// height: 70rpx;
			background: #F6F6F6;
			border-radius: 35rpx;
			font-size: 26rpx;
			color: #333;
			text-align: center;
			line-height: 70rpx;
			margin-top: 30rpx;
		}

		.active {
			background: #007399;
			padding: 0 40rpx;
			// width: 210rpx;
			// height: 70rpx;
			border-radius: 35rpx;
			font-size: 26rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 70rpx;
			margin-top: 30rpx;
		}
	}

	.klks {
		text-align: center;
		line-height: 100rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: #000000;
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

	.cxzcxzcxz {
		background-color: red;
	}
</style>
