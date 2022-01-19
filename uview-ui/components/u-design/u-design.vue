<template>
	<view class="main">
		<view class="search">
			<view class="seath">
				<u-search bg-color="#F2F2F2" @search="seach_go" v-model="keyword"></u-search>
			</view>
			<!-- 分类 -->
			<!-- <view class="">
				<view class=""
					style="display: flex;align-items: center;justify-content: space-between;flex-wrap: wrap;">
					<view :class="index%2==0?  'drop_item1':'drop_item'" v-for="(item,index) in dropList"
						:key="item.id">
						<u-dropdown :border-bottom="true">
							<u-dropdown-item v-model="value1" :title="item.name" :options="options1"></u-dropdown-item>
						</u-dropdown>
					</view>
				</view>
			</view> -->
			<!-- 选择分类 -->
			<view class="choose">
				<view class=""
					style="display: flex;align-items: center;justify-content: space-between;flex-wrap: wrap;">
					<view :class="index%2==0? 'drop_item1':'drop_item'" @click="showSelect(index)"
						v-for="(item,index) in dropList" :key="item.id">
						{{item.name}}
						<image src="../../../static/icon_home_heisexiala.png" style="width: 22rpx;height: 12rpx;"
							mode="aspectFit">
						</image>
						<!-- <u-dropdown :border-bottom="true">
							<u-dropdown-item v-model="value1" :title="item.name" :options="options1"></u-dropdown-item>
						</u-dropdown> -->
					</view>
				</view>
			</view>
		</view>
		<u-select v-model="show" :label-name="labelName" @confirm="confirm" :list="options2"></u-select>
		<!-- 设计列表 -->
		<view class="design_list">
			<view class="" v-for="item in lou_list" :key="item">
				<u-design-card :list="item" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "design",
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			}
		},
		watch: {
			list(val) {
				this.lou_list = [...this.list]
			}
		},
		mounted() {
			this.lou_list = [...this.list];
			this.getChooseData()
		},
		data() {
			return {
				show: false,
				labelName: "sf",
				lou_list: [],
				keyword: "",
				dropList: [{
						id: 0,
						name: "选择省份",
						keys: "sf"
					},
					{
						id: 1,
						name: "选择城市",
						keys: "city"
					},
					{
						id: 2,
						name: "选择区县",
						keys: "county"
					},
					{
						id: 3,
						name: "选择楼盘",
						keys: "loupan"
					},
					{
						id: 4,
						name: "选择户型",
						keys: "huxin"
					},
					{
						id: 5,
						name: "选择楼层",
						keys: "lc"
					},
					{
						id: 6,
						name: "选择栋号",
						keys: "dh"
					},
					{
						id: 7,
						name: "选择期数",
						keys: "qs"
					}
				],
				options1: [],
				options2: [],
				arrs: []
			};
		},
		methods: {

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
						// this.options2=data.data.data.status
						// this.deletesame()
					}
				})
			},
			confirm(e) {
				console.log(e);
				this.dropList[this.selindex].name = e[0].label
				console.log(this.dropList);
			},
			seach_go() {
				this.$emit("click", this.keyword)
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
