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
		<view v-if="isyuyue != 0">
			<view class="xunhuan" style="padding: 30rpx;">
				<view class="dshk">
					预约进度
				</view>
				<view class="dadsda">
					<view v-if="state == 0">
						<view class="cxz">
							已提交成功，等待平台审核
						</view>
					</view>
					<view v-if="state == 1&&states == 1">
						<view class="cxz">
							定金已支付，等待设计师设计完成
						</view>
					</view>
					<view v-if="state == 2&&states==1&&fans.wstate">
						<view class="cxz">
							您的预约已完成
						</view>
					</view>
					<view style="padding: 30rpx 0;" v-if="state == 2&&states==1&&!fans.wstate">
						<view class="cxz" style="text-align: center;">
							设计师已设计完成，请支付尾金￥{{fans.wprice||0}}
						</view>
						<view class="ndajs" @click="zhifuyuyue(1)">
							支付尾金￥{{fans.wprice||0}}
						</view>
					</view>
					<view style="padding: 30rpx 0;" v-if="state == 1&&states==0">
						<view class="cxz" style="text-align: center;">
							您的预约申请已通过审核，请支付定金￥{{mony||0}}
						</view>
						<view class="ndajs" @click="zhifuyuyue(0)">
							支付定金￥{{mony||0}}
						</view>
					</view>
				</view>
			</view>
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
						<view class="asd">
							<view class="textss">
								{{items.text}}
							</view>
						</view>
					</view>
					<!-- 显示数据 -->
					<!-- 单行输入框 -->
					<view class="inputs" v-if="items.type == 'input'">
						<view class="cxz">
							{{items.name}}
						</view>
						<view class="asd">
							<u-input style="width: 100%;height: 100%;" v-model="data_list[items.obj]" :type="type"
								:placeholder="items.text" />
						</view>
					</view>
					<!-- 单行输入框 -->
					<!-- 弹出选项 -->
					<view class="inputs" v-if="items.type == 'Picker'">
						<view class="cxz">
							{{items.name}}
						</view>
						<view class="asd">
							<u-input v-model="data_list[items.obj]" @click="open(items)" type="text" :disabled="true"
								:placeholder="items.text" />
						</view>
					</view>
					<!-- 弹出选项 -->
					<!-- 弹出选项 -->
					<view class="inputs" v-if="items.type == 'address'">
						<view class="cxz">
							{{items.name}}
						</view>
						<view class="asd" style="width: 65%;">
							<u-input v-model="data_list[items.obj]" @click="address(items)" type="text" :disabled="true"
								:placeholder="items.text" />
						</view>
					</view>
					<!-- 弹出选项 -->
					<!-- 单选框 -->
					<view class="inputs" v-if="items.type == 'checkbox'">
						<view class="cxz">
							{{items.name}}
						</view>
						<view class="asd cet">
							<view class="cet czczc" v-for="(itema,indexa) in items.select"
								@click="danxuan(indexa,items.id,items)" :key="indexa">
								<view :class="[numbers==indexa?'hhjhjh':'yuanquan']"></view>
								<view class="textss">
									{{itema}}
								</view>
							</view>
						</view>
					</view>
					<!-- 单选框 -->
					<!-- 多行行输入框 -->
					<view class="inputs" v-if="items.type == 'textarea'">
						<view class="cxz">
							{{items.name}}
						</view>
						<view class="asd" style="width: 60%;">
							<textarea style="width: 100%;" placeholder-style="color: #999999;"
								v-model="data_list[items.obj]" :placeholder="items.text" :auto-height="true" />
						</view>
					</view>
					<!-- 多行行输入框 -->
					<!-- 其他选项 -->
					<view class="inputss" v-if="items.type == 'xuan'">
						<view class="cxz" style="margin-bottom: 20rpx;">
							{{items.name}}
						</view>
						<view class="asd">
							<view v-if="items.list.length == 0">
								<view class="czccxz" v-for="(itemc,indexc) in man_data" :key="indexc">
									<view style="width: 25%;">
										成员{{indexc+1}}
									</view>
									<view class="jjj">
										<view class="cet" style="margin-bottom: 40rpx;margin-left: 40rpx;"
											v-for="(itema,indexa) in man_list"
											@click="danxuans(indexa,items.id,indexc,items)" :key="indexa">
											<view :class="[man_data[indexc].select==indexa?'hhjhjh':'yuanquan']"></view>
											<view class="textss">
												{{itema.text}}
											</view>
										</view>
									</view>
									<view class="cet">
										<u-input type="number" v-model="man_data[indexc].age" placeholder="输入年龄">
										</u-input>
										<view style="padding-left: 10rpx;">
											岁
										</view>
									</view>
									<image @click="sanchuhsuahsuhd(indexc)" v-if="itemc.del"
										style="width: 28rpx;height: 28rpx;position: absolute;top: 30rpx;right: 20rpx;"
										src="../../../static/icon_close_ico.png" mode=""></image>
								</view>
								<view class="czzxczx nbnbn" v-if="isadd" @click="add">
									+点击添加成员
								</view>
							</view>
							<view v-else>
								<view class="czccxz" v-for="(itemc,indexc) in items.list" :key="indexc">
									<view style="width: 25%;">
										成员{{indexc+1}}
									</view>
									<view style="display: flex;">
										<view class="jjj">
											<view class="cet">
												<view class="textss">
													<text v-if="itemc.sex == 0">先生</text>
													<text v-if="itemc.sex == 1">女士</text>
													<text v-if="itemc.sex == 2">男孩</text>
													<text v-if="itemc.sex == 3">女孩</text>
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
					<!-- 其他选项 -->
					<!-- 上传 -->
					<view class="inputas" v-if="items.type == 'upload'">
						<view class="cxz">
							{{items.name}}<text class="khkkk">{{items.text}}</text>
						</view>
						<view v-if="items.img_list.length == 0">
							<view class="asdsss">
								<u-upload @on-uploaded="uploaded($event,items)" :action="action" max-count="9"
									:header="header" :form-data="formData" :name="name" size-type="compressed">
								</u-upload>
							</view>
						</view>
						<view v-if="items.img_list.length != 0">
							<view class="asdssss">
								<image style="width: 200rpx;height: 200rpx;border-radius: 20rpx;margin-bottom: 20rpx;"
									:src="img+itemv" mode="" v-for="(itemv,indexv) in items.img_list" :key="indexv">
								</image>
							</view>
						</view>
					</view>
					<!-- 上传 -->
				</view>
			</view>
		</view>
		<view class="annui" v-if="isyuyue == 0" @click="tijiao">
			提交预约
		</view>
		<u-picker mode="time" v-model="shijianshow" @confirm="zhishizhege"></u-picker>
		<u-popup v-model="popshow" @close="guan" mode="bottom" length="60%" :closeable="true" border-radius="8">
			<view class="klks">{{chuanzhi.name}}</view>
			<view class="mids">
				<view class="type_list">
					<view :class="[item.check ? 'active' : 'type_item']" @click="xunhuan(index)"
						v-for="(item,index) in poplist" :key="index">
						{{item.name}}
					</view>
				</view>
			</view>
			<view class="clos">
				<view class="reset" @click="re">
					重置
				</view>
				<view class="on" @click="change">
					确定选择
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shijianshow: false,
				state: 1,
				fans: {},
				mony: "9980.00", //预约价格
				isyuyue: 0, //判断预约0还是显示预约1
				//弹出层选项数据
				poplist: [],
				sel_list: "", //弹出层单选传递
				popshow: "", //弹出层开关
				name: "image", //上传
				formData: {}, //上传
				header: {
					"token": uni.getStorageSync("token")
				}, //上传
				action: this.$shangchuan + "/api/byd_user/addpostspic", //图片上传接口
				isadd: true, //添加成员
				//成员结构
				man_data: [{
						id: 0,
						age: "",
						select: 10000,
						del: false

					},
					{
						id: 1,
						age: "",
						select: 10000,
						del: false
					},
					{
						id: 2,
						age: "",
						select: 10000,
						del: true
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
				title: "预约设计", //navbar
				data_list: {}, //提交的数组
				chuanzhi: {}, //用于数据传递
				//list为数组结构
				list: [{
						title: '基本信息',
						list: [{
								id: 0,
								name: '姓名',
								obj: "name",
								text: "请填写真实姓名",
								type: "input"
							},
							{
								id: 1,
								name: '性别',
								obj: "sex",
								select: ["先生", "女士"],
								type: "checkbox"
							},
							{
								id: 2,
								name: '联系电话',
								obj: "phone",
								text: "请填写您的联系电话",
								type: "input"
							},
						]
					},
					{
						title: '项目概括',
						list: [{
								id: 3,
								name: '所在地区',
								obj: "city",
								text: "请填写所在地区",
								// type: "Picker",
								type: "address",
								show: false
							},
							{
								id: 4,
								name: '详细地址',
								obj: "dire",
								text: "小区名字、栋号单元号等详细地址",
								type: "textarea"
							},
							{
								id: 5,
								name: '房屋户型',
								obj: "housetype",
								text: "请选择您的户型",
								type: "Picker",
								show: false
							},
							{
								id: 12,
								name: '交付时间',
								obj: "jf",
								text: "请选择交付时间",
								type: "Picker",
								show: false
							},
							{
								id: 12,
								name: '入住时间',
								obj: "rz",
								text: "请选择入住时间",
								type: "Picker",
								show: false
							},
							{
								id: 6,
								name: '装修现状',
								obj: "zx",
								text: "请选择装修现状",
								type: "Picker",
								show: false
							},
							{
								id: 7,
								name: '喜欢风格',
								obj: "style",
								text: "请选择喜欢风格",
								type: "Picker",
								show: false
							},
							{
								id: 8,
								name: '喜欢色调',
								obj: "color",
								text: "请选择装修色调",
								type: "Picker",
								show: false
							},
							{
								id: 9,
								name: '新房居住成员',
								obj: "people",
								type: "xuan",
								list: []
							},
						]
					},
					{
						title: '相关文件',
						list: [{
								id: 10,
								name: "平面图",
								obj: "aboveimage",
								text: "(手机拍照/购房宣传册)",
								type: "upload",
								img_list: []
							},
							{
								id: 11,
								name: "现场照片或视频",
								obj: "image",
								text: "",
								type: "upload",
								img_list: []
							}
						]
					}
				],
				img: this.$imgPath,
				states: "",
			};
		},
		onLoad(ev) {
			if (ev.yuyue) {
				this.isyuyue = ev.yuyue;
				this.gethomepage(this.yy_id);
			}
		},
		methods: {
			sanchuhsuahsuhd(ev) {
				console.log(ev);
				this.man_data.splice(ev, 1)
				this.isadd = true
			},
			zhishizhege(ev) {
				console.log(ev);
				this.data_list[this.chuanzhi.obj] = ev.year + '-' + ev.month + "-" + ev.day
			},
			address(ev) {
				let that = this;
				let aa = ''
				let bb = that.data_list
				uni.chooseLocation({
					success: function(res) {
						bb[ev.obj] = res.address;
						that.data_list = {}
						that.data_list = bb
					}
				});
			},
			zhifuyuyue(type) {
				this.$api.paymoney({
					type: type,
					user_id: uni.getStorageSync("user_info").id,
					id: this.fans.id
				}).then(res => {

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
								uni.navigateBack({
									delta: 1
								})
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
			gethomepage(yy_id) {
				this.fans = {}
				this.fans = uni.getStorageSync("yuyue_info");
				this.state = this.fans.state;
				this.states = this.fans.states;
				this.mony = this.fans.price
				let image = this.fans.image.split(",")
				let aboveimage = this.fans.aboveimage.split(",")
				let aa = this.fans.people.split(",")
				let bb = []
				let cc = []
				let sex = ""
				if (this.fans.sex == 0) {
					sex = "男"
				} else {
					sex = "女"
				}
				image.forEach(item => {
					item = this.$imgPath + item
				})
				aboveimage.forEach(item => {
					item = this.$imgPath + item
				})


				aa.forEach(item => {
					bb.push(item.split("_"))

				})
				bb.forEach(item => {
					cc.push({
						sex: item[1],
						age: item[0]
					})
				})
				this.list = [];
				this.list.push({
					title: '基本信息',
					list: [{
							id: 0,
							name: '姓名',
							obj: "name",
							text: this.fans.name,
							type: "Displays_data"
						},
						{
							id: 1,
							name: '性别',
							obj: "sex",
							text: sex,
							select: ["先生", "女士"],
							type: "Displays_data"
						},
						{
							id: 2,
							name: '联系电话',
							obj: "phone",
							text: this.fans.phone,
							type: "Displays_data"
						},
					]
				}, {
					title: '项目概括',
					list: [{
							id: 3,
							name: '所在地区',
							obj: "city",
							text: this.fans.city,
							type: "Displays_data",
							show: false
						},
						{
							id: 4,
							name: '详细地址',
							obj: "dire",
							text: this.fans.dire,
							type: "Displays_data"
						},
						{
							id: 5,
							name: '房屋户型',
							obj: "housetype",
							text: this.fans.housetype,
							type: "Displays_data",
							show: false
						},
						{
							id: 6,
							name: '交付时间',
							obj: "jf",
							text: this.fans.jf,
							type: "Displays_data",
							show: false
						},
						{
							id: 6,
							name: '装修现状',
							obj: "zx",
							text: this.fans.zx,
							type: "Displays_data",
							show: false
						},
						{
							id: 7,
							name: '喜欢风格',
							obj: "style",
							text: this.fans.style,
							type: "Displays_data",
							show: false
						},
						{
							id: 8,
							name: '喜欢色调',
							obj: "color",
							text: this.fans.color,
							type: "Displays_data",
							show: false
						},
						{
							id: 9,
							name: '新房居住成员',
							obj: "people",
							type: "xuan",
							list: [...cc]
						},
					]
				}, {
					title: '相关文件',
					list: [{
							id: 10,
							name: "平面图",
							obj: "aboveimage",
							text: "(手机拍照/购房宣传册)",
							type: "upload",
							img_list: [...aboveimage]
						},
						{
							id: 11,
							name: "现场照片或视频",
							obj: "image",
							text: "",
							type: "upload",
							img_list: [...image],
						}
					]
				})
			},
			uploaded(ev, oo) {
				let aa = ev;
				let bb = []
				aa.forEach(item => {
					{
						bb.push(item.response.data.status)
					}
				})
				this.data_list[oo.obj] = bb
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
				this.data_list[this.chuanzhi.obj] = this.sel_list;
				this.popshow = false;
			},
			//弹出层选项还原默认
			re() {
				this.poplist.forEach(item => {
					item.check = false
				})
			},
			//提交按钮
			async tijiao() {
				if (await this.$login()) {
					this.data_list["user_id"] = uni.getStorageSync("user_info").id
					let aa = this.data_list.people
					let bb = []
					// if(aa = ""){
					// 	return uni.showToast({
					// 		title:"请选择人员",
					// 		duration:1000,
					// 		icon:"none"
					// 	})
					// }
					aa.forEach((item, index) => {
						bb.push(item.age + "_" + item.id)
					})
					this.data_list.people = bb
					this.$api.yydes(this.data_list).then(data => {
						if (data.data.code == 1) {
							setTimeout(() => {
								uni.navigateBack(-1)
							}, 1000)
						}
						uni.showToast({
							title: data.data.msg,
							duration: 1000,
							icon: "none"
						})
					})
				}
			},
			//弹出层关闭
			guan() {
				this.popshow = false;
				this.shijianshow = false;
			},
			// 增加成员
			add() {
				let aa = this.man_data.length
				if (aa <= 10) {
					for (var i = 0; i < 1; i++) {
						this.man_data.push({
							id: aa + i,
							age: "",
							select: 10000,
							del: true
						})
					}
					if (this.man_data.length >= 10) {
						this.isadd = false
					}
				}
			},
			// 选择成员
			danxuans(ev, id, index, oo) {
				let aa = this.man_data;
				aa[index].select = ev;
				this.man_data = [];
				this.man_data.push(...aa)
				this.data_list[oo.obj] = this.man_data;
			},
			// 单选框
			danxuan(ev, id, oo) {
				this.numbers = ev
				this.data_list[oo.obj] = ev
			},
			// 打开弹出层
			open(ev) {
				if (ev.obj == "style") {
					this.poplist = [];
					this.poplist = [{
							check: false,
							name: "现代极简",
							id: 0
						},
						{
							check: false,
							name: "托斯卡纳（地中海）",
							id: 1
						},
						{
							check: false,
							name: "现代原木",
							id: 12
						},
						{
							check: false,
							name: "新北欧",
							id: 321
						},
						{
							check: false,
							name: "极简东方",
							id: 433
						},
						{
							check: false,
							name: "当代轻奢",
							id: 654
						},
						{
							check: false,
							name: "摩登",
							id: 756
						}
					]
					this.popshow = true;
				} else if (ev.obj == "color") {
					this.poplist = [];
					this.poplist = [{
							check: false,
							name: "黑",
							id: 0
						},
						{
							check: false,
							name: "白",
							id: 1
						},
						{
							check: false,
							name: "灰",
							id: 12
						},
						{
							check: false,
							name: "蓝",
							id: 321
						},
						{
							check: false,
							name: "绿",
							id: 433
						},
						{
							check: false,
							name: "红",
							id: 654
						},
						{
							check: false,
							name: "黄",
							id: 756
						},
						{
							check: false,
							name: "咖",
							id: 437
						}
					]
					this.popshow = true;
				} else if (ev.obj == "zx") {
					this.poplist = [];
					this.poplist = [{
							check: false,
							name: "精装房",
							id: 0
						},
						{
							check: false,
							name: "毛坯房",
							id: 1
						},
						{
							check: false,
							name: "旧房",
							id: 12
						}
					]
					this.popshow = true;
				} else if (ev.obj == "housetype") {
					this.poplist = [];
					this.poplist = [{
							check: false,
							name: "精装房",
							id: 0
						},
						{
							check: false,
							name: "毛坯房",
							id: 1
						},
						{
							check: false,
							name: "旧房",
							id: 12
						}
					]
					this.popshow = true;
				} else if (ev.obj == 'jf' || ev.obj == 'rz') {
					this.shijianshow = true
				}
				this.re();
				this.chuanzhi = ev;
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
					display: flex;
					justify-content: space-between;
					align-items: center;
					// padding-top: 30rpx;
					// padding-bottom: 40rpx;
					border-bottom: 1px solid #DEDEDE;
					position: relative;
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
			justify-content: end;
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
			margin-left: 10rpx;
			margin-right: 10rpx;
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
			margin-left: 10rpx;
			margin-right: 10rpx;
		}
	}

	.klks {
		text-align: center;
		line-height: 100rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: #000000;
	}
</style>
