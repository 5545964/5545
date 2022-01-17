<template>
	<view>
		<view class="navbar">
			<u-navbar :is-back="false" :title="title">
				<view class="navbar_top">
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
		<view class="home">
			<view class="dadsda" v-for="(items,indexs) in list" :key="indexs">
				<!-- 禁止输入 -->
				<view class="inputs" v-if="items.status == 'disabled'">
					<view class="cxz">
						{{items.name}}
					</view>
					<view class="asd">
						<u-input style="width: 100%;height: 100%;" :disabled="true" v-model="items.inp" type="text" />
					</view>
				</view>
				<!-- 禁止输入 -->
				<!-- 单显示 -->
				<view class="design" v-if="items.status == 'select'  && isdes == 1">
					<view class="cxz">
						{{items.name}}
					</view>
					<view class="">
						<u-input style="width: 100%;height: 100%;" v-model="items.inp" type="text" disabled="" />
					</view>
				</view>
				<!-- 单显示 -->
				<!-- 单行输入框 -->
				<view class="inputs" v-if="items.status == 'text'" @click="showcitys(items)">
					<view class="cxz">
						{{items.name}}
					</view>
					<view class="asd">
						<template>
							<view class="" style="text-align: right;" v-if="items.id==9">
								{{items.inp}}
							</view>
							<u-input v-else style="width: 100%;height: 100%;" v-model="items.inp" type="text"
								:placeholder="items.placeholder" />
						</template>
					</view>
				</view>
				<!-- 单行输入框 -->
				<!-- 多行行输入框 -->
				<view class="inputs" v-if="items.status == 'textarea'">
					<view class="cxz">
						{{items.name}}
					</view>
					<view class="asd" style="width: 60%;">
						<textarea style="width: 100%;" placeholder-style="color: #999999;" v-model="items.inp"
							:placeholder="items.placeholder" :auto-height="true" />
					</view>
				</view>
				<!-- 多行行输入框 -->
				<!-- 上传 -->
				<view class="inputas" v-if="items.status == 'upload'">
					<view class="cxz">
						{{items.name}}<text class="khkkk">{{items.text}}</text>
					</view>
					<view class="asdsss">
						<template>
							<u-upload :fileList="avatar" width="100" height="100" :action="action" max-count="1"
								:header="header" @on-success="shangchuan" :form-data="formData" name="image"
								size-type="compressed">
							</u-upload>
						</template>
					</view>
				</view>
				<!-- 上传 -->
				<!-- 设计师手机号 -->
				<view class="inputs" v-if="items.status == 'phone' && isdes == 1" @click="showcitys(items)">
					<view class="cxz">
						{{items.name}}
					</view>
					<view class="asd">
						<u-input style="width: 100%;height: 100%;" v-model="items.inp" type="text"
							:placeholder="items.placeholder" />
					</view>
				</view>
				<!-- 设计师手机号 -->
				<!-- 设计师上传 -->
				<view class="design" v-if="items.status == 'designupload' && isdes == 1">
					<view class="cxz" style="padding: 30rpx 0;">
						{{items.name}}
					</view>
					<view class="img_list">
						<u-upload :fileList="imgList" :action="action" max-count="9" width="160" height="160"
							ref="uUpload" :form-data="formData" @on-success="asdfg" @on-remove="deleteimg" name="image"
							size-type="compressed"></u-upload>
					</view>
				</view>
				<!-- 设计师上传 -->
				<!-- 设计师标签 -->
				<view class="design" v-if="items.status == 'designbiao'  && isdes == 1" @click="show=true">
					<view class="cxz">
						{{items.name}}
					</view>
					<view class="type_list" v-if="actList.length>0">
						<view class="type_item1" v-for="(item,index) in actList" :key="item">
							{{item}}
						</view>
					</view>
					<view class="type_list" v-else>
						<view class="type_item1">
							请选择
						</view>
					</view>
					<!-- <view class="">
						<u-input style="width: 100%;height: 100%;" inputAlign="left" v-model="items.text" type="text" :disabled="true" />
					</view> -->
				</view>
				<!-- 设计师标签 -->
			</view>

			<view class="tijiao cet">
				<view class="ti" @click="tijiao">
					确认修改
				</view>
			</view>
		</view>
		<!-- 筛选弹窗 -->
		<u-popup v-model="show" mode="bottom" length="40%" :closeable="true" border-radius="8">
			<view class="klks">设计师标签</view>
			<view class="mids">
				<!-- <view class="seath">
					<u-search bg-color="#F2F2F2" @focus="seach_go(888)" v-model="keyword"></u-search>
				</view> -->
				<view class="type_list">
					<view :class="item.act?'type_item1':'type_item'" v-for="(item,index) in modeList" :key="item"
						@click="change(item)">
						{{item.title}}
					</view>
				</view>
			</view>
			<view class="clos">
				<view class="reset" @click="resest">
					重置
				</view>
				<view class="on" @click="activeMode">
					确定选择
				</view>
			</view>
		</u-popup>
		<u-city-select v-model="showcity" @city-change="cityChange" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showcity: false,
				header: {},
				formData: {},
				imgtitle: this.$imgPath,
				action: this.$shangchuan + '/api/byd_user/addpostspic',
				active: -1,
				show: false,
				data_list: [],
				list: [{
						id: 0,
						name: "头像上传",
						status: "upload"
					},
					{
						id: 1,
						name: "昵称",
						placeholder: "请填写昵称",
						status: "text",
						inp: "",
					},
					{
						id: 2,
						name: "个人编号",
						text: "",
						status: "disabled"
					},
					{
						id: 3,
						name: "真实姓名",
						placeholder: "请填写真实姓名",
						status: "text",
						inp: "",
					},
					{
						id: 4,
						name: "名片职务",
						text: "名片",
						status: "disabled",
						inp: "名片"
					},
					{
						id: 5,
						name: "微信号",
						placeholder: "请填写微信号",
						status: "text",
						inp: "",
					},
					{
						id: 6,
						name: "QQ号",
						placeholder: "请填写QQ号",
						status: "text",
						inp: "",
					},
					{
						id: 7,
						name: "邮编",
						placeholder: "请填写邮编",
						status: "text",
						inp: "",
					},
					{
						id: 8,
						name: "邮箱",
						placeholder: "请填写邮箱",
						status: "text",
						inp: "",
					},
					{
						id: 9,
						name: "所在地区",
						placeholder: "请填写所在地区",
						status: "text",
						inp: "请填写所在地区",
					},
					{
						id: 10,
						name: "详细地址",
						placeholder: "街道、小区门牌等详细地址",
						status: "textarea",
						inp: "",
					},
					{
						id: 13,
						name: "手机号",
						placeholder: "请填写手机号",
						status: "phone",
						inp: "",
					},
					{
						id: 11,
						name: "设计师标签",
						status: "designbiao"
					},
					{
						id: 12,
						name: "设计师代表作",
						status: "designupload"
					}
				],
				title: "个人资料编辑",
				desinfo: {},
				modeList: [],
				actList: [],
				isdes: "",
				imgList: [],
				imgListsss: [],
				avatar: "",
				avatarss: "",
				djsahkdjhaslk: "",
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title
			}
			if (ev.isdesign == 1) {
				this.isdes = ev.isdesign
				this.getmode()
				this.desinfo = uni.getStorageSync("des_info")
				this.avatarss = this.desinfo.avatar;
				if (this.desinfo.avatar.indexOf("https") == -1) {
					this.avatar = [{
						url: this.$imgPath + this.desinfo.avatar,
					}];
				} else {
					this.avatar = [{
						url: this.desinfo.avatar,
					}];
				}
				this.list[1].inp = this.desinfo.nickname;
				this.list[2].inp = this.desinfo.myself;
				this.list[3].inp = this.desinfo.username;
				this.list[4].inp = this.desinfo.bbs.type;
				this.list[5].inp = this.desinfo.wechat;
				this.list[6].inp = this.desinfo.qq;
				this.list[7].inp = this.desinfo.yb;
				this.list[8].inp = this.desinfo.email;
				this.list[9].inp = this.desinfo.address;
				this.list[10].inp = this.desinfo.addressxq;
				this.list[11].inp = this.desinfo.mobile;
				this.actList = this.desinfo.label.split(",");
				if (this.desinfo.work != '') {
					this.imgListsss = this.desinfo.work.split(",")
					this.desinfo.work.split(",").forEach(item => {
						this.imgList.push({
							url: this.$imgPath + item,
						})
					})
				}

			} else {
				this.desinfo = uni.getStorageSync("user_info")
				// this.avatar = this.desinfo.avatar
				this.avatar = [{
					url: this.desinfo.avatar,
				}];
				this.list[1].inp = this.desinfo.nickname
				this.list[2].inp = "暂未开通"
				this.list[3].inp = this.desinfo.username
				this.list[5].inp = this.desinfo.wechat
				this.list[6].inp = this.desinfo.qq
				this.list[7].inp = this.desinfo.yb
				this.list[8].inp = this.desinfo.email
				this.list[9].inp = this.desinfo.address
				this.list[10].inp = this.desinfo.addressxq
			}
		},
		methods: {
			asdfg(ev) {
				console.log(ev);
				this.imgListsss.push(ev.data.status)
			},
			// 删除图片
			deleteimg(index) {
				this.imgListsss.splice(index, 1)
				console.log(this.imgListsss);
			},
			shangchuan(ev) {
				if (this.isdes == 1) {
					this.avatarss = ev.data.status
					this.avatar = this.$imgPath + ev.data.status
				} else {
					this.avatar = ev.data.status
				}
			},
			// 选择城市
			showcitys(item) {
				if (item.id == 9) {
					this.showcity = true
				}
			},
			cityChange(e) {
				this.list[9].inp = e.province.label + e.city.label + e.area.label;
			},
			// 选择头像
			chooseavatar() {
				let that = this
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						// that.imgList = res.tempFilePaths
						res.tempFilePaths.forEach(item => {
							uni.uploadFile({
								url: that.$shangchuan +
									'/api/byd_user/addpostspic', //仅为示例，非真实的接口地址
								filePath: item,
								name: 'image',
								formData: {},
								success: (uploadFileRes) => {
									let data = JSON.parse(uploadFileRes.data)
									if (data.code == 1) {
										that.avatar = data.data.status
										if (data.data.status.indexOf("/uploads") != -1) {
											data.data.status = that.$imgPath + data.data
												.status
										}
										that.desinfo.avatar = data.data.status
									}
								}
							});
						})
					}
				});
			},
			// 重置选择
			resest() {
				this.modeList.forEach(item => {
					item.act = false
				})
			},
			// 确认选择标签
			activeMode() {
				this.actList = []
				this.modeList.forEach(item => {
					if (item.act) {
						this.actList.push(item.title)
					}
				})
				this.show = false
			},
			change(item) {
				item.act = !item.act
			},
			// 设计师个人资料
			// getdesData() {
			// 	this.$api.desindex({
			// 		id: uni.getStorageSync("des_info").id
			// 	}).then(data => {
			// 		if (data.data.code == 1) {
			// 			console.log(data.data.data.status);
			// 			this.desinfo = data.data.data.status
			// 			this.list[1].inp = this.desinfo.nickname
			// 			this.list[2].inp = this.desinfo.myself
			// 			this.list[3].inp = this.desinfo.username
			// 			this.list[4].inp = this.desinfo.zw.type
			// 			this.list[5].inp = this.desinfo.wechat
			// 			this.list[6].inp = this.desinfo.qq
			// 			this.list[7].inp = this.desinfo.yb
			// 			this.list[8].inp = this.desinfo.email
			// 			this.list[9].inp = this.desinfo.address
			// 			this.list[10].inp = this.desinfo.addressxq
			// 			this.avatarss = this.desinfo.avatar
			// 			this.avatar = this.$imgPath + this.desinfo.avatar
			// 			console.log(this.avatar);
			// 			this.actList = this.desinfo.label.split(",")
			// 			this.imgList = this.desinfo.work.split(",")
			// 		}
			// 	})
			// },
			// 设计师标签 desmode
			getmode() {
				this.$api.desmode().then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							item["act"] = false
						})
						this.modeList = data.data.data.status
					}
				})
			},
			tijiao(ev) {
				if (this.isdes == 1) {
					if (!this.list[1].inp || !this.list[3].inp || !this.list[5].inp ||
						!this.list[6].inp || !this.list[7].inp || !this.list[8].inp || !this.list[9].inp || !this.list[10]
						.inp
					) {
						uni.showModal({
							title: "请填写完整信息"
						})
						return
					}
					// let files = [];
					// // 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
					// files = this.$refs.uUpload[0].lists.filter(val => {
					// 	return val.progress == 100;
					// })
					// // 如果您不需要进行太多的处理，直接如下即可
					// // files = this.$refs.uUpload.lists;
					// files.forEach(item => {
					// 	this.imgList.push(item.response.data.status)
					// })
					if (this.actList.length == 0) {
						uni.showToast({
							title: "请检查标签",
							icon: "none"
						})
						return
					}
					this.$api.editdes({
						id: this.desinfo.id,
						nickname: this.list[1].inp,
						username: this.list[3].inp,
						level: this.list[4].text,
						wechat: this.list[5].inp,
						qq: this.list[6].inp,
						yb: this.list[7].inp,
						email: this.list[8].inp,
						address: this.list[9].inp,
						addressxq: this.list[10].inp,
						avatar: this.avatarss,
						label: this.actList,
						work: this.imgListsss,
						mobile: this.list[11].inp
					}).then(data => {
						if (data.data.code == 1) {
							uni.showToast({
								title: data.data.msg,
								duration: 1000,
								icon: "success"
							})
							this.$api.desmyuser({
								user_id: uni.getStorageSync("user_info").id,
							}).then(data => {
								if (data.data.code == 1) {
									uni.setStorageSync("des_info", data.data.data.myuser)
								}
							})
							setTimeout(() => {
								uni.navigateBack(-1)
							}, 500)
						}
					})
				} else {
					this.$api.edituser({
						id: uni.getStorageSync("user_info").id,
						avatar: this.avatar,
						nickname: this.list[1].inp,
						username: this.list[3].inp,
						wechat: this.list[5].inp,
						qq: this.list[6].inp,
						yb: this.list[7].inp,
						email: this.list[8].inp,
						address: this.list[9].inp,
						addressxq: this.list[10].inp,
					}).then(data => {
						uni.showToast({
							title: data.data.msg,
							duration: 1000,
							icon: "none"
						})
						if (data.data.code == 1) {


							uni.navigateBack(-1)
						} else {

						}
					})
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	.closeImg {
		width: 28rpx;
		height: 28rpx;
		position: absolute;
		// top: 0;
		// right: 0;
	}

	.img_list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;

		.img_item {
			width: 160rpx;
			height: 160rpx;
			margin-left: 20rpx;
			margin-top: 20rpx;
		}
	}


	.tijiao {
		margin-top: 150rpx;
		padding: 50rpx 0;

		.ti {
			width: 690rpx;
			height: 70rpx;
			line-height: 70rpx;
			text-align: center;
			background: #007399;
			border-radius: 10rpx;
			font-size: 26rpx;
			font-weight: 400;
			color: #FFFFFF;
		}
	}

	.home {
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-bottom: 20rpx;
		padding: 0 30rpx;



		.dadsda {
			.design {
				background: #red;

				.cxz {
					font-size: 30rpx;
					font-weight: 400;
					color: #333333;
				}


				.type_list {
					display: flex;
					align-items: center;
					justify-content: end;
					flex-wrap: wrap;
				}

				.type_item {
					background: #F6F6F6;
					border-radius: 35rpx;
					font-size: 26rpx;
					color: #333;
					text-align: center;
					margin: 20rpx 10rpx;
					padding: 10rpx 40rpx;
				}

				.type_item1 {
					background: #007399;
					border-radius: 35rpx;
					font-size: 26rpx;
					text-align: center;
					color: #FFFFFF;
					padding: 20rpx 30rpx;
					margin: 10rpx 20rpx;
				}
			}

			.inputas {
				padding: 40rpx 0;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.asdsss {
					width: 100rpx;
					height: 100rpx;
				}

				.cxz {
					font-size: 30rpx;
					font-weight: 400;
					color: #333333;
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
					padding-top: 30rpx;
					padding-bottom: 40rpx;
					border-bottom: 1px solid #DEDEDE;

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

				.asd {
					width: 70%;
				}

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
			justify-content: end;
			flex-wrap: wrap;
		}

		.type_item {
			background: #F6F6F6;
			border-radius: 35rpx;
			font-size: 26rpx;
			text-align: center;
			color: #333333;
			padding: 10rpx 40rpx;
			margin: 10rpx 18rpx;
		}

		.type_item1 {
			background: #007399;
			border-radius: 35rpx;
			font-size: 26rpx;
			text-align: center;
			color: #FFFFFF;
			padding: 10rpx 40rpx;
			margin: 10rpx 18rpx;
		}
	}

	.seath {
		margin: 40rpx 30rpx 30rpx;
		padding-bottom: 20rpx;
	}
</style>
