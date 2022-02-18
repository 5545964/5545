<template>
	<view>
		<!-- 导航 -->
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
		<!-- 选择分类 -->
		<!-- <button type="default" @click="selectImg">1234</button>
		<button type="default" @click="gossss">456</button> -->
		<view class="choose">
			<view class="" style="display: flex;align-items: center;justify-content: space-between;flex-wrap: wrap;">
				<view :class="index%2==0? 'drop_item1':'drop_item'" v-for="(item,index) in dropList" :key="item.id">
					<!-- <u-input v-if="index == 0" @click="open()" input-align="left" :disabled="true" v-model="item.value"
						:placeholder="item.name" type="text" /> -->
					<view v-if="index == 0" @click="open()">
						{{item.name}}
					</view>
					<u-input v-else @blur="fcun" v-model="item.value" input-align="left" :placeholder="item.name"
						type="text" />
					<!-- {{item.name}} -->
					<!-- <image src="../../static/icon_home_heisexiala.png" style="width: 22rpx;height: 12rpx;" mode="aspectFit">
					</image> -->
					<!-- <u-dropdown :border-bottom="true">
						<u-dropdown-item v-model="value1" :title="item.name" :options="options1"></u-dropdown-item>
					</u-dropdown> -->
				</view>
			</view>
		</view>
		<!-- 方案详情填写 -->
		<view class="case_write">
			<view class="title">
				方案详情填写
			</view>
			<view class="inputitem">
				<input style="width: 100%;" @blur="fcun" v-model="name" type="text" value="" placeholder="输入名称" />
			</view>
			<view class="areaitem">
				<textarea style="width: 100%;" @blur="fcun" v-model="content" value="" placeholder="输入介绍" />
			</view>
		</view>
		<!-- 上传封面 -->
		<view class="upload_des" style="margin-bottom: 20rpx;">
			<view class="upload_title">
				上传封面
			</view>
			<view class="allimg">
				<!-- <view class="" style="position: relative;" v-if="fenmian !=''">
					<image :src="fenmian" class="imgs" mode="aspectFit"></image>
					<image src="../../static/icon_close_ico.png" @click="sanchufenmian()" class="closeImg" mode="aspectFit">
					</image>
				</view>
				<image v-else @click="fenmianssss" src="../../static/icon_up_ico.png" class="imgs" mode="aspectFit"></image> -->
				<u-upload style="margin: 10rpx;" :fileList="fenleiimgs" @on-uploaded="suolv_uploaded($event)"
					@on-remove="suolv_remove" :action="action" max-count="1" width="140rpx" height="140rpx"
					:header="header" :form-data="formData" :name="namess" size-type="compressed">
				</u-upload>
			</view>
		</view>
		<!-- 上传详情轮播图 -->
		<view class="upload_des" style="margin-bottom: 20rpx;">
			<view class="upload_title">
				上传详情轮播图
			</view>
			<view class="allimg">
				<!-- <view class="" v-for="(item,index) in imgList" :key="index" style="position: relative;">
					<image :src="item" class="imgs" mode="aspectFit"></image>
					<image src="../../static/icon_close_ico.png" @click="deleteimg(index)" class="closeImg" mode="aspectFit">
					</image>
				</view>
				<image @click="chooseImg" src="../../static/icon_up_ico.png" class="imgs" mode="aspectFit"></image> -->
				<u-upload style="margin: 10rpx;" :fileList="upimgss" @on-uploaded="uploaded($event)" @on-remove="remove"
					:action="action" max-count="4" width="140rpx" height="140rpx" :header="header" :form-data="formData"
					:name="namess" size-type="compressed">
				</u-upload>
			</view>
		</view>
		<!-- 上传VR -->
		<view class="upload_des" style="margin-bottom: 20rpx;">
			<view class="upload_title">
				上传VR封面
			</view>
			<view class="allimg">
				<u-upload style="margin: 10rpx;" :fileList="vr_fenleiimgs" @on-uploaded="vr_uploaded($event)"
					@on-remove="vr_remove" :action="action" max-count="1" width="140rpx" height="140rpx"
					:header="header" :form-data="formData" :name="namess" size-type="compressed">
				</u-upload>
			</view>
			<view class="" style="display: flex;justify-content: space-between;align-items: center;">
				<view class="upload_title">
					上传VR链接
				</view>
				<u-input style="width: 70%;text-align: left;" @blur="fcun" placeholder="请输入VR链接" v-model="vrurl">
				</u-input>
			</view>


		</view>
		<!-- 上传期旗舰套系相关视频 -->
		<view class="upload_des" style="margin-bottom: 20rpx;">
			<view class="upload_title">
				上传期旗舰套系相关视频
			</view>
			<view class="allimg" style="position: relative;">
				<image v-if="videoList !=''" src="../../static/icon_close_ico.png" @click="sanchuvideo()"
					class="closeImg" mode="aspectFit">
				</image>
				<video style="width: 100%;margin: 30rpx 0;height: 400rpx;" v-if="videoList !=''"
					:src="vider+videoList"></video>
				<image v-else src="../../static/icon_up_ico.png" @click="shanghcuanvideo" class="imgs" mode="aspectFit">
				</image>
			</view>
		</view>
		<view class="" style="height: 110rpx;">
		</view>
		<!-- 底部提交按钮 -->
		<view class="foot_reg">
			<view class="submit" @click="submit">
				提交
			</view>
		</view>
		<u-city-select v-model="showcity" @city-change="cityChange" />
	</view>
</template>

<script>
	import city from "@/uview-ui/libs/util/city.js"
	import area from "@/uview-ui/libs/util/area.js"
	import province from "@/uview-ui/libs/util/province.js"
	export default {
		data() {
			return {
				sheng: "",
				shi: "",
				qu: "",
				shengshiqu: "",
				showcity: false,
				vider: this.$imgPath,
				namess: "image", //上传
				formData: {}, //上传
				header: {
					"token": uni.getStorageSync("token")
				}, //上传
				action: this.$shangchuan + "/api/byd_user/addpostspic", //图片上传接口
				name: "",
				content: "",
				labelName: "sf",
				selindex: -1,
				show: false,
				title: "上传方案",
				fenmian: [],
				imgList: [],
				dropList: [{
						id: 0,
						name: "请选择省市区",
						keys: "sf",
						value: ""
					},
					{
						id: 3,
						name: "请输入楼盘",
						keys: "loupan",
						value: ""
					},
					{
						id: 4,
						name: "请输入户型",
						keys: "huxin",
						value: ""
					},
					{
						id: 5,
						name: "请输入楼层",
						keys: "lc",
						value: ""
					},
					{
						id: 6,
						name: "请输入栋号",
						keys: "dh",
						value: ""
					},
					{
						id: 7,
						name: "请输入期数",
						keys: "qs",
						value: ""
					}
				],
				options1: [],
				options2: [],
				upimgs: [],
				upimgss: [],
				fenleiimg: [],
				fenleiimgs: [],
				suolv_fenleiimg: [],
				suolv_fenleiimgs: [],
				vr_fenleiimg: [],
				vr_fenleiimgs: [],
				arrs: [],
				vrurl: "",
				videoList: "",
			};
		},
		onLoad() {
			this.getChooseData()
			let ll = uni.getStorageSync("chengshi")
			if (ll) {
				this.sheng = ll[0]
				this.shi = ll[1]
				this.qu = ll[2]
			}
			let aa = uni.getStorageSync("dropList")
			if (aa) {
				this.dropList = aa
			}
			let bb = uni.getStorageSync("fanganname")
			if (bb) {
				this.name = bb
			}
			let cc = uni.getStorageSync("fangancontent")
			if (cc) {
				this.content = cc
			}
			let dd = uni.getStorageSync("fanganvrurl")
			if (dd) {
				this.vrurl = dd
			}
			let ee = uni.getStorageSync("videoList")
			if (ee) {
				this.videoList = ee
			}
			let ff = uni.getStorageSync("fenleiimg")
			if (ff) {
				this.fenleiimg = [...ff]
				ff.forEach(item => {
					this.fenleiimgs.push({
						url: this.$imgPath + item
					})
				})
			}
			let gg = uni.getStorageSync("upimgs")
			if (gg) {
				this.upimgs = [...gg]
				gg.forEach(item => {
					this.upimgss.push({
						url: this.$imgPath + item
					})
				})

			}
			let hh = uni.getStorageSync("vr_fenleiimg")
			if (hh) {
				this.vr_fenleiimg = [...hh]
				hh.forEach(item => {
					this.vr_fenleiimgs.push({
						url: this.$imgPath + item
					})
				})

			}
		},
		methods: {
			fcun() {
				uni.setStorageSync("dropList", this.dropList)
				uni.setStorageSync("fanganname", this.name)
				uni.setStorageSync("fangancontent", this.content)
				uni.setStorageSync("fanganvrurl", this.vrurl)
			},
			gossss() {
				uni.navigateTo({
					url: "../pagesB/images"
				})
			},
			selectImg() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original'],
					sourceType: ['album', 'camera'],
					success: res => {
						var tempFilePaths = res.tempFilePaths
						uni.navigateTo({
							url: "../pagesB/images?img=" + tempFilePaths[0]
						})
					}
				})
			},
			open() {
				this.showcity = true
			},
			cityChange(e) {
				this.sheng = e.province.label;
				this.shi = e.city.label;
				this.qu = e.area.label
				uni.setStorageSync("chengshi", [this.sheng, this.shi,this.qu])
				this.shengshiqu = e.province.label + e.city.label + e.area.label;
				this.dropList[0].name = this.shengshiqu
				this.dropList[0].value = this.shengshiqu
			},
			shanghcuanvideo() {
				let that = this;
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: function(res) {
						uni.showLoading({
							title: '上传中',
							mask: true
						});
						uni.uploadFile({
							url: that.action, //接口地址
							filePath: res.tempFilePath,
							name: 'image',
							formData: {},
							success: (uploadFileRes) => {
								let data = JSON.parse(uploadFileRes.data)
								that.videoList = data.data.status
								uni.setStorageSync("videoList", that.videoList)
								uni.hideLoading();
							},
							fail: () => {
								uni.hideLoading();
							}
						});
					}
				});
			},
			vr_remove(ev) {
				this.vr_fenleiimg.splice(ev, 1)
				uni.setStorageSync("vr_fenleiimg", this.vr_fenleiimg)
			},
			vr_uploaded(ev) {
				let aa = ev;
				let bb = []
				aa.forEach(item => {
					{
						bb.push(item.response.data.status)
					}
				})
				this.vr_fenleiimg = [...bb]
				uni.setStorageSync("vr_fenleiimg", this.vr_fenleiimg)
			},
			suolv_remove(ev) {
				this.fenleiimg.splice(ev, 1)
				uni.setStorageSync("fenleiimg", this.fenleiimg)
			},
			suolv_uploaded(ev) {
				let aa = ev;
				let bb = []
				aa.forEach(item => {
					{
						bb.push(item.response.data.status)
					}
				})
				this.fenleiimg = [...bb]
				uni.setStorageSync("fenleiimg", this.fenleiimg)
			},
			remove(ev) {
				this.upimgs.splice(ev, 1)
				uni.setStorageSync("upimgs", this.upimgs)
			},
			uploaded(ev) {
				let aa = ev;
				let bb = []
				aa.forEach(item => {
					{
						bb.push(item.response.data.status)
					}
				})
				this.upimgs = [...bb]
				uni.setStorageSync("upimgs", this.upimgs)
			},
			// 获取筛选条件
			getChooseData() {
				this.$api.loupancategory().then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							item.lc = item.lc + "楼"
							item.dh = item.dh + "栋"
							item.qs = item.qs + "期"
						})
						this.options1 = data.data.data.status
						this.arrs = this.options1

					}
				})
			},
			// 去重
			deletesame(keyb, indexs) {
				let key = this.labelName
				let keys = ""
				if (indexs > 0) {
					keys = this.dropList[indexs - 1].keys
				}
				let arr = []
				this.arrs.forEach((item, index) => {
					if (indexs > 0) {
						if (this.arrs[index][`${keys}`] == this.dropList[indexs - 1].name) {
							arr.push(item)
						}
					}
					if (keyb == 1) {
						arr.push(item)
					}
				})
				this.arrs = arr
				this.options2 = []
				for (let i = 0; i < arr.length; i++) {
					if (i > 0 && arr[i][`${key}`] == arr[i - 1][`${key}`]) {
						continue
					} else {
						this.options2.push(arr[i])
					}
				}
			},
			confirm(e) {
				this.dropList[this.selindex].name = e[0].label
			},
			// 选择
			showSelect(index) {
				let key = ""
				if (index > 0) {
					key = this.dropList[index - 1].name
					if (this.dropList[index - 1].name.indexOf("选择") != -1) {
						return
					}
				}
				let arr = []
				if (index == 0) {
					key = 1
				}
				this.labelName = this.dropList[index].keys
				this.deletesame(key, index)
				this.show = true
				this.selindex = index
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
			// 上传封面
			fenmianssss() {
				let that = this
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						that.fenmian = res.tempFilePaths

						uni.uploadFile({
							url: 'http://bao.scwushen.com/index.php/api/byd_user/addpostspic', //仅为示例，非真实的接口地址
							filePath: that.fenmian[0],
							name: 'image',
							formData: {},
							success: (uploadFileRes) => {
								let data = JSON.parse(uploadFileRes.data)
								if (data.code == 1) {

									that.fenleiimg = data.data.status
								}
							}
						});
					}
				});
			},
			// 选择图片
			chooseImg() {
				let that = this
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {

						that.imgList = res.tempFilePaths
						res.tempFilePaths.forEach(item => {
							uni.uploadFile({
								url: 'http://bao.scwushen.com/index.php/api/byd_user/addpostspic', //仅为示例，非真实的接口地址
								filePath: item,
								name: 'image',
								formData: {},
								success: (uploadFileRes) => {
									let data = JSON.parse(uploadFileRes.data)
									if (data.code == 1) {
										that.upimgs.push(data.data.status)
									}
								}
							});
						})
					}
				});
			},
			//删除视频
			sanchuvideo() {
				this.videoList = ""
				uni.setStorageSync("videoList", '')
			},
			//删除封面
			sanchufenmian() {
				this.fenmian = ""
			},
			// 删除图片
			deleteimg(index) {
				this.imgList.splice(index, 1)
			},
			// 提交
			submit() {
				let aa = [
					this.sheng,
					this.shi,
					this.qu,
					this.dropList[1].value,
					this.dropList[2].value,
					this.dropList[3].value,
					this.dropList[4].value,
					this.dropList[5].value,
					this.name,
					this.content,
					this.upimgs,
					this.fenleiimg,
					this.vr_fenleiimg,
					this.vrurl,
					this.videoList,
				]
				console.log(aa);
				let bb = []
				aa.forEach(item => {
					if (item == '') {
						return uni.showToast({
							title: "请检查",
							icon: "none"
						})
					} else {
						bb.push("1")
					}
				})
				if (aa.length == bb.length) {
					this.$api.addprogramme({
						des_id: uni.getStorageSync("des_info").id,
						sf: this.sheng,
						city: this.shi,
						county: this.qu,
						loupan: this.dropList[1].value,
						huxin: this.dropList[2].value,
						lc: this.dropList[3].value,
						dh: this.dropList[4].value,
						qs: this.dropList[5].value,
						name: this.name,
						content: this.content,
						image: this.upimgs,
						simage: this.fenleiimg,
						vr_image: this.vr_fenleiimg,
						vr_rul: this.vrurl,
						video: this.videoList
					}).then(data => {
						if (data.data.code == 1) {
							let aa = {
								title: "提交成功",
								text: "你的资料平台正在加紧审核中，请留意电话",
								botton: "我知道了"
							}
							uni.navigateTo({
								url: "./regSuccess?list=" + JSON.stringify(aa)
							})
						}
					})
				}
			},
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

	// 选择分类
	.choose {
		background-color: #FFFFFF;
		margin-top: 20rpx;
		margin-bottom: 20rpx;

		.drop_item {
			width: 50%;
			border-top: 1rpx solid #e9e9e9;
			height: 105rpx;
			border-left: 1rpx solid #e9e9e9;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 30rpx;
			box-sizing: border-box;
		}

		.drop_item1 {
			width: 50%;
			border-top: 1rpx solid #e9e9e9;
			height: 105rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 30rpx;
			box-sizing: border-box;
		}
	}

	// 方案详情填写
	.case_write {
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		margin-bottom: 20rpx;

		.title {
			font-size: 30rpx;
			color: #000000;
		}

		.inputitem {
			padding: 0 30rpx;
			box-sizing: border-box;
			background: #F6F6F6;
			border-radius: 10rpx;
			height: 88rpx;
			width: 100%;
			margin-top: 40rpx;
			margin-bottom: 20rpx;
			display: flex;
			align-items: center;
		}

		.areaitem {
			padding: 30rpx;
			box-sizing: border-box;
			width: 100%;
			height: 300rpx;
			background: #F6F6F6;
			border-radius: 10rpx;
		}
	}

	.imgs {
		width: 160rpx;
		height: 160rpx;
	}

	.closeImg {
		width: 28rpx;
		height: 28rpx;
		position: absolute;
		top: 0;
		right: 0;
	}

	// 上传详情轮播图
	.upload_des {
		width: 100%;
		background-color: #FFFFFF;
		padding: 40rpx 30rpx;
		box-sizing: border-box;
		margin-bottom: 200rpx;

		.upload_title {
			font-size: 30rpx;
			color: #333;
		}

		.imgs {
			width: 160rpx;
			height: 160rpx;
			margin-top: 40rpx;
			margin-left: 12rpx;
		}

		.allimg {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
		}

		.closeImg {
			width: 28rpx;
			height: 28rpx;
			position: absolute;
			top: 0;
			right: 0;
		}
	}

	// 底部提交按钮
	.foot_reg {
		width: 100%;
		height: 110rpx;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 0;
		z-index: 1000;

		.submit {
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
</style>
