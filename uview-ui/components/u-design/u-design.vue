<template>
	<view class="main">
		<view class="search">
			<view class="seath">
				<u-search bg-color="#F2F2F2" @search="seach_go" v-model="keyword"></u-search>
			</view>
			<!-- 选择分类 -->
			<view class="choose">
				<view class=""
					style="display: flex;align-items: center;justify-content: space-between;flex-wrap: wrap;">
					<view :class="index%2==0? 'drop_item1':'drop_item'" @click="showSelect(index)"
						v-for="(item,index) in dropList" :key="index">
						{{item.name}}
						<image src="../../../static/icon_home_heisexiala.png" style="width: 22rpx;height: 12rpx;"
							mode="aspectFit">
						</image>
					</view>
				</view>
			</view>
		</view>
		<u-select v-model="show" :label-name="labelName" @confirm="confirm" :list="options2"></u-select>
		<!-- 设计列表 -->
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
				labelName: "sf",
				lou_list: [],
				lou_lists: [],
				keyword: "",
				dropList: [{
						id: 0,
						name: "选择省份",
						name1: "省份",
						keys: "sf",
						save: [],
					},
					{
						id: 1,
						name: "选择城市",
						name1: "城市",
						keys: "city",
						save: [],
					},
					{
						id: 2,
						name: "选择区县",
						name1: "区县",
						keys: "county",
						save: [],
					},
					{
						id: 3,
						name: "选择楼盘",
						name1: "楼盘",
						keys: "loupan",
						save: [],
					},
					{
						id: 4,
						name: "选择户型",
						name1: "户型",
						keys: "huxin",
						save: [],
					},
					{
						id: 5,
						name: "选择楼层",
						name1: "楼层",
						keys: "lc",
						save: [],
					},
					{
						id: 6,
						name: "选择栋号",
						name1: "栋号",
						keys: "dh",
						save: [],
					},
					{
						id: 7,
						name: "选择期数",
						name1: "期数",
						keys: "qs",
						save: [],
					}
				],
				options1: [],
				options2: [],
				arrs: [],
				selindex: 0
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
				this.pagess = this.pages
				this.alls()
			},
		},
		methods: {
			alls() {
				this.$api.loupanden({
					page: this.pagess,
					limit: 4
				}).then(data => {
					if (data.data.code == 1) {
						if (data.data.data.status.data.length != 0) {
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
						this.options1 = data.data.data.status
						this.arrs = data.data.data.status
						// this.options2=data.data.data.status
						// this.deletesame()
					}
				})
			},
			confirm(e) {
				this.dropList[this.selindex].name = e[0].label
				let aa = []
				if (this.selindex == 0) {
					this.lou_list = this.lou_lists
				}
				this.lou_list.forEach(item => {
					if (item[this.labelName] == e[0].label) {
						aa.push(item)
					}
				})
				console.log(aa);
				this.lou_list = aa
			},
			// 搜索
			seach_go() {
				this.$api.loupanlike({
					name: this.keyword
				}).then(data => {
					if (data.data.code == 1) {
						this.lou_list = data.data.data.status
					} else {
						this.lou_list = [];
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
			// 去重
			deletesame(keyb, indexs) {
				if (this.dropList[indexs].save.length != 0) {
					this.options2 = this.dropList[indexs].save
					this.dropList.forEach((item, index) => {
						if (index > indexs) {
							if (item.name.indexOf("选择") == -1) {
								item.name = "选择" + item.name1
								item.save = []
							}
						}
					})
					return
				}
				let key = this.labelName
				let keys = ""
				if (indexs > 0) {
					keys = this.dropList[indexs - 1].keys
				}
				let arr = []
				this.arrs = this.options1
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
				this.options2 = [] //

				// 渲染的数据
				for (let i = 0; i < arr.length; i++) {
					if (i > 0 && arr[i][`${key}`] == arr[i - 1][`${key}`]) {
						continue
					} else {
						this.options2.push(arr[i])
					}
				}
				this.dropList[indexs].save = this.options2
			},
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
