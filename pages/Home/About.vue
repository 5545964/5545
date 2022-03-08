<template>
	<view style="background-color: #FFFFFF;">
		<view style="height: 40rpx;">
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		</view>
		<swiper :style="'height: '+heigth+'px;'" :circular="true" :duration="300" @change="lun_change"
			:current="current">
			<swiper-item v-for="(item,index) in lists" :key="index">
				<scroll-view :style="'height: '+heigth+'px;'" scroll-y="true">
					<view class="swiper-item">
						<view class="top">
							<view class="text">
								{{item.name}}
							</view>
							<view class="xian"></view>
							<view style="height: 20rpx;"></view>
							<view class="content">
								<u-parse :html="item.content"></u-parse>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view :style="'height: '+heigth+'px;'" scroll-y="true">
					<view class="swiper-item" style="height: 100%;">
						<view class="top" style="height: 100%;">
							<view class="text">
								业务地图
							</view>
							<view class="xian"></view>
							<view style="height: 20rpx;"></view>
							<view style="height: 100%;">
								<view class="">
									<u-search bgColor="#f6f6f6" placeholder="输入关键字搜索" v-model="keyword"></u-search>
								</view>
								<view class="papapa" style="height: 100%;">
									<!-- <picker-view @change="columnChange" style="height: 100%;" :value="defaultSelector"
										@pickstart="pickstart" @pickend="pickend">
										<picker-view-column v-for="(item, index) in columnData" :key="index">
											<view class="picker" @click="picker(item1)" v-for="(item1, index1) in item"
												:key="index1">
												<view class="">{{ item1[labelName] }}</view>
											</view>
										</picker-view-column>
									</picker-view> -->
									
									
									
									<!-- <view class="" v-for="(item,index) in datalist" :key="index">
										<view class="">
											{{item.title}}
										</view>
										<view class="" v-for="(item1,index1) in item.child" :key="index1">
											{{item1.title}}
										</view>
										<view class="" v-for="(item2,index2) in item.child.child" :key="index2">
											{{item2.title}}
										</view>
										<view class="" v-for="(item3,index3) in item.child.child.child" :key="index3">
											{{item3.title}}
										</view>
									</view> -->



								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view :style="'height: '+heigth+'px;'" scroll-y="true">
					<view class="swiper-item">
						<view class="top">
							<view class="text">
								资讯中心
							</view>
							<view class="xian"></view>
							<view style="height: 20rpx;"></view>
							<view class="hahah" @click="shouURl(item)" v-for="(item,index) in xinxi" :key="index">
								<view class="">
									<view class="hnjh">
										{{item.title}}
									</view>
									<view class="timess">
										{{item.refreshtime_text}}
									</view>
								</view>
								<view class="">
									<image class="imghjk" :src="imgPath+item.simage" mode="aspectFit">
									</image>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<u-kehu url="./booking/AppointmentDesign" heigth="1000"></u-kehu>
		<u-back-top :scroll-top="0"></u-back-top>
		<tab-bar></tab-bar>
	</view>
</template>

<script>
	import dayjs from "@/dayjs"
	export default {
		data() {
			return {
				// // 提供的默认选中的下标
				// defaultValue: [0],
				// // 自定义label属性名
				// labelName: 'title',
				// // 自定义value属性名
				// valueName: 'value',
				// // 自定义多列联动模式的children属性名
				// childName: 'child',
				// // picker-view的数据
				// columnData: [],
				// // 列数
				// columnNum: 0,
				// // 用于列改变时，保存当前的索引，下一次变化时比较得出是哪一列发生了变化
				// defaultSelector: [0],
				// // 上一次列变化时的index
				// lastSelectIndex: [],
				// // 模式选择，mutil-column-auto-多列联动
				// mode: 'mutil-column-auto',
				// // 每次队列发生变化时，保存选择的结果
				// selectValue: [],
				// // "取消"按钮的颜色
				// cancelColor: "#606266",
				// // "确定"按钮的颜色
				// confirmColor: '#2979ff',
				// moving: false,
				keyword: "",
				heigth: 0,
				list: [{
						id: 0,
						name: '品牌故事',
						content: ""
					},
					{
						id: 2,
						name: '创始人',
						content: ""
					},
					{
						id: 3,
						name: '方黄集团',
						content: ""
					},
					{
						id: 1,
						name: '业务地图',
						content: ""
					},
					{
						name: '资讯中心'
					}
				],
				lists: [{
						id: 0,
						name: '品牌故事',
						content: ""
					},
					{
						id: 2,
						name: '创始人',
						content: ""
					},
					{
						id: 3,
						name: '方黄集团',
						content: ""
					}
				],
				current: 3,
				xinxi: [],
				imgPath: this.$imgPath,
				imgsss: '<img src=\"' + this.$imgPath,
				datalist: []
			};
		},
		onReachBottom(ev) {
			console.log(ev);
		},
		onShow() {
			this.lists.forEach(item => {
				this.$api.bydadout({
					state: item.id
				}).then(data => {
					if (data.data.code == 1) {
						item.content = data.data.data.status[0].content.replace(/\<img src=\"/gi, this
							.imgsss);
					}
				})
			})
			this.$api.map().then(data => {
				if (data.data.code == 1) {
					this.datalist = [...data.data.data.status]
					// this.init()
				}
			})
			this.$api.pots({
				limit: 1000
			}).then(data => {
				if (data.data.code == 1) {
					data.data.data.status.data.forEach(item => {
						item.content = item.content.replace(/\<img src=\"/gi, this.imgsss);
					})
					this.xinxi = data.data.data.status.data
				}
			})
			const res = uni.getSystemInfoSync();
			this.heigth = res.windowHeight;

		},
		methods: {
			picker(ev) {
				console.log(ev);
			},
			// init() {
			// 	// 计算列数
			// 	this.setColumnNum();

			// 	this.setDefaultSelector();
			// 	this.setColumnData();
			// 	this.setSelectValue();
			// },
			// // 获取默认选中的值，如果没有设置defaultValue，就默认选中每列的第一个
			// setSelectValue() {
			// 	let tmp = null;
			// 	for (let i = 0; i < this.columnNum; i++) {
			// 		tmp = this.columnData[i][this.defaultSelector[i]];
			// 		let data = {
			// 			value: tmp ? tmp[this.valueName] : null,
			// 			label: tmp ? tmp[this.labelName] : null
			// 		};
			// 		// 判断是否存在额外的参数，如果存在，就返回
			// 		if (tmp && tmp.extra) data.extra = tmp.extra;
			// 		this.selectValue.push(data)
			// 	}
			// },
			// // 获取需要展示在picker中的列数据
			// setColumnData() {
			// 	let data = [];
			// 	this.selectValue = [];
			// 	// 获得所有数据中的第一个元素
			// 	let column = this.datalist[this.defaultSelector.length ? this.defaultSelector[0] : 0];
			// 	console.log(column);
			// 	// 通过循环所有的列数，再根据设定列的数组，得出当前需要渲染的整个列数组
			// 	for (let i = 0; i < this.columnNum; i++) {
			// 		// 第一列默认为整个datalist数组
			// 		if (i == 0) {
			// 			data[i] = this.datalist;
			// 			column = column[this.childName];
			// 		} else {
			// 			// 大于第一列时，判断是否有默认选中的，如果没有就用该列的第一项
			// 			data[i] = column;
			// 			column = column[this.defaultSelector[i]][this.childName];
			// 		}
			// 	}
			// 	console.log(data);
			// 	this.columnData = data;
			// },
			// setDefaultSelector() {
			// 	// 如果没有传入默认选中的值，生成长度为columnNum，用0填充的数组
			// 	this.defaultSelector = this.defaultValue.length == this.columnNum ? this.defaultValue : Array(this
			// 		.columnNum).fill(0);
			// 	this.lastSelectIndex = this.$u.deepClone(this.defaultSelector);
			// },
			// // 计算列数
			// setColumnNum() {
			// 	let num = 1;
			// 	let column = this.datalist;
			// 	// 只要有元素并且第一个元素有children属性，继续历遍
			// 	while (column[0][this.childName]) {
			// 		column = column[0] ? column[0][this.childName] : {};
			// 		num++;
			// 	}
			// 	this.columnNum = num;
			// },
			// // 标识滑动结束
			// pickend() {
			// 	this.moving = false;
			// },
			// // 标识滑动开始
			// pickstart() {
			// 	this.moving = true;
			// },
			// // 列选项
			// columnChange(e) {
			// 	let index = null;
			// 	let columnIndex = e.detail.value;
			// 	// 由于后面是需要push进数组的，所以需要先清空数组
			// 	this.selectValue = [];
			// 	if (this.mode == 'mutil-column-auto') {
			// 		// 对比前后两个数组，寻找变更的是哪一列，如果某一个元素不同，即可判定该列发生了变化
			// 		this.lastSelectIndex.map((val, idx) => {
			// 			if (val != columnIndex[idx]) index = idx;
			// 		});
			// 		this.defaultSelector = columnIndex;
			// 		for (let i = index + 1; i < this.columnNum; i++) {
			// 			// 当前变化列的下一列的数据，需要获取上一列的数据，同时需要指定是上一列的第几个的children，再往后的
			// 			// 默认是队列的第一个为默认选项
			// 			this.columnData[i] = this.columnData[i - 1][i - 1 == index ? columnIndex[index] : 0][this
			// 				.childName
			// 			];
			// 			// 改变的列之后的所有列，默认选中第一个
			// 			this.defaultSelector[i] = 0;
			// 		}
			// 		// 在历遍的过程中，可能由于上一步修改this.columnData，导致产生连锁反应，程序触发columnChange，会有多次调用
			// 		// 只有在最后一次数据稳定后的结果是正确的，此前的历遍中，可能会产生undefined，故需要判断
			// 		columnIndex.map((item, index) => {
			// 			let data = this.columnData[index][columnIndex[index]];
			// 			let tmp = {
			// 				value: data ? data[this.valueName] : null,
			// 				label: data ? data[this.labelName] : null,
			// 			};
			// 			// 判断是否有需要额外携带的参数
			// 			if (data && data.extra !== undefined) tmp.extra = data.extra;
			// 			this.selectValue.push(tmp);

			// 		})
			// 		// 保存这一次的结果，用于下次列发生变化时作比较
			// 		this.lastSelectIndex = columnIndex;
			// 	}
			// },
			shouURl(ev) {
				uni.setStorageSync("fuwenbeng", ev.content)
				uni.navigateTo({
					url: "../pagesC/fuwenben?title=" + ev.title
				})
			},
			lun_change(index) {
				this.current = index.detail.current;
			},
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.papapa {}

	.imghjk {
		width: 100rpx;
		height: 100rpx;
	}

	.timess {
		font-size: 20rpx;
		color: #aaaaa9;
		padding-top: 10rpx;
	}

	.hnjh {
		color: #070302;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 25rpx;
	}

	.hahah {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #fafafa;
		margin-bottom: 30rpx;
		padding: 20rpx;
	}


	.swiper-item {
		padding: 0 30rpx;

		.top {
			background-color: #FFFFFF;

			.text {
				text-align: center;
				padding-top: 50rpx;
				padding-bottom: 40rpx;
				font-size: 30rpx;
				font-weight: 400;
				color: #000000;
			}

			.xian {
				width: 100%;
				height: 2rpx;
				background: #F0F0F0;
			}
		}
	}

	.content {
		padding: 0rpx;
		font-size: 0rpx;
	}
</style>
