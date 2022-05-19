<template>
	<view class="main">
		<view class="search">
			<view class="seath">
				<u-search bg-color="#F2F2F2" @search="seach_go" v-model="keyword"></u-search>
			</view>
			<view class="choose">
				<view class=""
					style="display: flex;align-items: center;justify-content: space-between;flex-wrap: wrap;">
					<view :class="index%2==0? 'drop_item1':'drop_item'" @click="showSelect(item.id)"
						v-for="(item,index) in dropList" :key="item.id">
						{{item.name}}
						<image src="../../../static/icon_home_heisexiala.png" style="width: 22rpx;height: 12rpx;"
							mode="aspectFit" />
					</view>
				</view>
			</view>
		</view>
		<u-select v-model="show" :label-name="labelName" @confirm="confirm" :list="options"></u-select>
		<view class="design_list">
			<view class="" v-for="(item,index) in lou_list" :key="index">
				<u-design-card :list="item" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "design",
		props: {
			pages: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {
				pagess: 1,
				show: false,
				labelName: "", //自定义属性名
				lou_list: [],
				lou_lists: [], //楼盘数据备份
				keyword: "", //搜索
				dropList: [{
						id: 0,
						name: "选择省份",
						saixuanname: "",
						seachname: "省份",
						keys: "sf"
					},
					{
						id: 1,
						name: "选择城市",
						saixuanname: "",
						seachname: "城市",
						keys: "city"
					},
					{
						id: 2,
						name: "选择区县",
						saixuanname: "",
						seachname: "区县",
						keys: "county"
					},
					{
						id: 3,
						name: "选择楼盘",
						saixuanname: "",
						seachname: "楼盘",
						keys: "loupan"
					},
					{
						id: 4,
						name: "选择户型",
						saixuanname: "",
						seachname: "户型",
						keys: "huxin"
					},
					{
						id: 5,
						name: "选择楼层",
						saixuanname: "",
						seachname: "楼层",
						keys: "lc"
					},
					{
						id: 6,
						name: "选择栋号",
						saixuanname: "",
						seachname: "栋号",
						keys: "dh"
					},
					{
						id: 7,
						name: "选择期数",
						saixuanname: "",
						seachname: "期数",
						keys: "qs"
					}
				],
				options: [], //弹出数据
				arrs: [], //筛选列表
				selindex: 0, //选的第几个
				sousuosuo: true //滚动加载
			};
		},
		mounted() {
			this.$emit("pageB", 1)
			this.pagess = this.pages
			this.alls()
			this.getChooseData()
		},
		watch: {
			pages(val) {
				if (this.sousuosuo) {
					this.pagess = this.pages
					this.alls()
				}
			},
		},
		methods: {
			alls() {
				this.$api.loupanden({
					page: this.pagess,
					limit: 10
				}).then(data => {
					if (data.data.code == 1) {
						if (data.data.data.status.data.length != 0) {
							data.data.data.status.data.forEach(item => {
								item.lc = item.lc + "楼"
								item.dh = item.dh + "栋"
								item.qs = item.qs + "期"
							})
							this.lou_list = [...this.lou_list, ...data.data.data.status.data];
							this.lou_lists = [...this.lou_lists, ...data.data.data.status.data];
						} else {
							this.checks()
							uni.showToast({
								title: "暂无数据",
								duration: 1000,
								icon: "none"
							})
						}
					}
				})
			},
			checks() {
				this.$emit("pageA", this.pagess)
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
						this.arrs = data.data.data.status
					}
				})
			},
			// 选项回调
			confirm(e) {
				this.dropList[this.selindex].name = e[0].label
				this.dropList[this.selindex].saixuanname = e[0].label
				this.$api.idlikelp({
					sf: this.dropList[0].saixuanname,
					city: this.dropList[1].saixuanname,
					county: this.dropList[2].saixuanname,
					loupan: this.dropList[3].saixuanname,
					huxin: this.dropList[4].saixuanname,
					lc: this.dropList[5].saixuanname,
					dh: this.dropList[6].saixuanname,
					qs: this.dropList[7].saixuanname
				}).then(data => {
					if (data.data.code == 1) {
						this.lou_list = data.data.data.status
					} else {
						this.lou_list = []
						uni.showToast({
							title: data.data.msg,
							icon: "none"
						})
					}
				})
			},
			// 搜索
			seach_go() {
				this.dropList.forEach((item, index) => {
					item.name = "选择" + item.seachname
				})
				this.$api.loupanlike({
					name: this.keyword
				}).then(data => {
					if (data.data.code == 1) {
						this.sousuosuo = false
						this.lou_list = data.data.data.status
					} else {
						this.lou_list = [...this.lou_lists];
						uni.showToast({
							title: data.data.msg,
							duration: 1000,
							icon: "none"
						})
					}
				})
			},
			// 选择
			showSelect(index) {
				let key = ""
				let arr = []
				// 点的第几个
				this.selindex = index
				// 弹出自定义属性名称
				this.labelName = this.dropList[index].keys
				// 没选择上一个直接结束
				if (index > 0) {
					key = this.dropList[index - 1].name
					if (this.dropList[index - 1].name.indexOf("选择") != -1) {
						return
					}
				}
				// 点的第一个,初始化数据
				if (index == 0) {
					key = 1
					this.sousuosuo = true
					this.lou_list = this.lou_lists
				}
				this.deletesame(key, index)
			},
			// 去重
			deletesame(key, index) {
				let keys = ""
				let arr = []
				let mm = []
				// 选择之后的选项还原
				this.dropList.forEach((item, indexs) => {
					if (indexs > index) {
						if (item.name.indexOf("选择") == -1) {
							item.name = "选择" + item.seachname
							item.saixuanname = ""
						}
					}
				})
				// 获取下一项的keys				
				if (index > 0) {
					keys = this.dropList[index - 1].keys
				}
				// 找出下一个选项
				this.arrs.forEach((item, indexs) => {
					if (index > 0) {
						if (this.arrs[indexs][`${keys}`] == this.dropList[index - 1].name) {
							arr.push(item)
						}
					}
					if (key == 1) {
						arr.push(item)
					}
				})
				// 渲染的数据
				for (let i = 0; i < arr.length; i++) {
					if (i > 0 && arr[i][`${this.labelName}`] == arr[i - 1][`${this.labelName}`]) {
						continue
					} else {
						mm.push(arr[i])
					}
				}
				// 去重
				this.options = this.unique(mm)
				this.sousuosuo = false
				this.show = true
			},
			// 去重
			unique(arr) {
				for (var i = 0; i < arr.length; i++) {
					for (var j = i + 1; j < arr.length; j++) {
						if (arr[i][this.labelName] == arr[j][this.labelName]) {
							arr.splice(j, 1);
							j--;
						}
					}
				}
				return arr;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.seath {
		margin: 0 30rpx 30rpx;
	}

	.search {
		width: 690rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 20rpx;
		padding-top: 30rpx;
	}

	.drop_item {
		width: 50%;
		border-top: 1rpx solid #e9e9e9;
		height: 105rpx;
		border-left: 1rpx solid #e9e9e9;
	}

	.drop_item1 {
		width: 50%;
		border-top: 1rpx solid #e9e9e9;
		height: 105rpx;
	}

	.design_list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;
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
</style>
