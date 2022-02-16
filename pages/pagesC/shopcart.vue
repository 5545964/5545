<template>
	<view class="">
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
		<view class="huadong">
			<view class="" v-if="yuyuecarList.length != 0">
				预约订单
			</view>
			<view v-if="yuyuecarList.length != 0" v-for="(item,shopIndex) in yuyuecarList" :key="shopIndex"
				class="car-list" @touchstart="drawStarts" @touchmove="drawMoves" @touchend="drawEnds"
				:data-index="shopIndex" :style="'right:'+item.right+'px'">
				<view class="list" :class="{ 'aaaaaaaaaa': item.right == 0 }">
					<view class="btn centerboth" v-if="item.selected==true" @click="selThiss(shopIndex)">
						<text class="iconfont car-sel"></text>
					</view>
					<view class="btn centerboth" v-else @click="selThiss(shopIndex)">
						<text class="iconfont car-unsel"></text>
					</view>
					<image class="car-img" :src="img+item.shop.simage" mode="aspectFill"></image>
					<view class="car-mes centerboth">
						<view class="mes-box">
							<view class="g-name line2">{{item.shop.name}}</view>
							<view class="price-change-num clearfix">
								<view class="price">￥<text class="yj-price">{{item.price}}</text></view>
								<view class="num-box centerboth">
									<text class="iconfont car-sub" @click="changeNum(0,shopIndex)"></text>
									<view>{{item.num}}</view>
									<text class="iconfont car-add" @click="changeNum(1,shopIndex)"></text>
								</view>
							</view>
							<text class="fdsds"> 合计：</text><text
								class="fsdfsfs fdsds">￥{{(item.num * item.price).toFixed(2)}}</text>
						</view>
					</view>
				</view>
				<view class="hdjsah">
					<view class="remove" @click="delDatas(item,shopIndex)">删除</view>
				</view>
			</view>
			<view class="" v-if="carList.length != 0">
				普通商品
			</view>
			<view v-if="carList.length != 0" v-for="(item,shopIndex) in carList" :key="shopIndex" class="car-list"
				@touchstart="drawStart" @touchmove="drawMove" @touchend="drawEnd" :data-index="shopIndex"
				:style="'right:'+item.right+'px'">
				<view class="list" :class="{ 'aaaaaaaaaa': item.right == 0 }">
					<view class="btn centerboth" v-if="item.selected==true" @click="selThis(shopIndex)">
						<text class="iconfont car-sel"></text>
					</view>
					<view class="btn centerboth" v-else @click="selThis(shopIndex)">
						<text class="iconfont car-unsel"></text>
					</view>
					<image class="car-img" :src="img+item.shop.simage" mode="aspectFill"></image>
					<view class="car-mes centerboth">
						<view class="mes-box">
							<view class="g-name line2">{{item.shop.name}}</view>
							<view class="price-change-num clearfix">
								<view class="price">￥<text class="yj-price">{{item.price}}</text></view>
								<view class="num-box centerboth">
									<text class="iconfont car-sub" @click="changeNum(0,shopIndex)"></text>
									<view>{{item.num}}</view>
									<text class="iconfont car-add" @click="changeNum(1,shopIndex)"></text>
								</view>
							</view>
							<text class="fdsds"> 合计：</text><text
								class="fsdfsfs fdsds">￥{{(item.num * item.price).toFixed(2)}}</text>
						</view>
					</view>
				</view>
				<view class="hdjsah">
					<view class="remove" @click="delData(item,shopIndex)">删除</view>
				</view>
			</view>
			<view style="height: 100rpx;">

			</view>
		</view>
		<view class="car_foot">
			<view class="all-sel-btn centerboth">
				<text v-if="allSel==true" class="iconfont car-sel" @click="allSelBtn"></text>
				<text v-else class="iconfont car-unsel" @click="allSelBtn"></text>
				<text @click="allSelBtn">全选</text>
				<text v-if="cartssss" style="color: #E11915;display: inline-block;margin-left: 10rpx;"
					@click="sanchu">删除</text>
			</view>
			<view class="foot_right">
				<view class="">
					<view class="all_price">
						合计：<text style="color: #E11915;">￥{{allAmount.toFixed(2)}}</text>
					</view>
					<view class="acitvity">
						(不含运费，优惠金额见结算页面)
					</view>
				</view>
				<view class="submit_btn" @click="jsCars">
					结算
				</view>
			</view>
		</view>
		<mask-model ref="askmodel" btnType="1" @confirm="confirm" @cancel="cancel" titleColoe="#666666"
			cancelColor="#666666" confirmColor="#007AFF" :maskTitle="maskTitle"></mask-model>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				yunfei: 0,
				cartssss: false,
				title: "购物车",
				maskTitle: '',
				allSel: false,
				allAmount: 0,
				allNumber: 0,
				delIds: '', //要删除的购物车id
				btnType: 0, //0删除  1结算
				carList: [],
				yuyuecarList: [],
				img: this.$imgPath,
				delBtnWidth: 65
			}
		},
		onShow() {
			this.allsss();
			this.getAllMount();
		},
		methods: {
			allsss() {
				this.$api.shopcart({
					id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						let aa = []
						let cc = []
						this.yunfei = 0
						data.data.data.status.forEach((item, index) => {
							item["selected"] = false
							item["right"] = 0
							if (item.orderid != null && item.orderid != 0) {
								aa.push(item)
							} else {
								cc.push(item)
							}
							// // 算运费
							// if (index > 0 && item.shop.id == data.data.data.status[index - 1].shop.id) {

							// } else {
							// 	this.yunfei = this.yunfei + Number(item.shop.yf)
							// }
						})
						this.yuyuecarList = [...aa]
						this.carList = [...cc]
						let bb = 0
						data.data.data.status.forEach(item => {
							bb = bb + 1
						})
						if (bb >= 99) {
							bb = "..."
						}
						uni.setStorageSync("cart_num", bb)
					} else {
						this.carList = [];
						this.yuyuecarList = []
						this.allAmount = 0;
						uni.setStorageSync("cart_num", 0)
					}
				})
			},
			sanchu() {
				let aa = []
				this.carList.forEach(item => {
					if (item.selected) {
						aa.push(item.id)

					}
				})
				if(aa.length == 0){
					this.yuyuecarList.forEach(item => {
						if (item.selected) {
							aa.push(item.id)
					
						}
					})
				}
				this.$api.cartdel({
					id: aa
				}).then(data => {
					uni.showToast({
						title: data.data.msg,
						duration: 1000,
						icon: "none"
					})
					if (data.data.code == 1) {
						this.allsss()
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
					}
				})
			},
			confirm: function() { //确定按钮
				var that = this;

				if (that.btnType == 0) {
					that.$emit('delbtn', that.delIds, that.carList);
				} else {
					let ids = that.getCarIds();
					this.$emit('jsbtn', ids)
				}
			},
			cancel: function() { //取消按钮

			},
			jsCars: function() {
				let data = []
				this.carList.forEach(item => {
					if (item.selected) {
						data.push({
							id: item.id,
							simage: item.shop.simage,
							name: item.shop.name,
							shopid: item.shopid,
							specid: item.specid,
							specidsize: item.specidsize,
							num: Number(item.num),
							xc_price: Number(item.price),
							orderid: item.orderid,
							swj: 0
						})
					}
				})
				if (data.length == 0) {
					this.yuyuecarList.forEach(item => {
						if (item.selected) {
							data.push({
								id: item.id,
								simage: item.shop.simage,
								name: item.shop.name,
								shopid: item.shopid,
								specid: item.specid,
								specidsize: item.specidsize,
								num: Number(item.num),
								xc_price: Number(item.price),
								orderid: item.orderid,
								swj: 1
							})
						}
					})
				}
				if (data.length == 0) {
					return uni.showToast({
						title: "请选择商品",
						icon: "none"
					})
				}
				uni.navigateTo({
					url: "./quzhifu?goodsdata=" + JSON.stringify(data) + "&iscartid=0&yf=" + this.yunfei
				})

			},
			delCars: function() {
				var that = this;
				that.delIds = ''; //清除上次删除记录
				var delIds = that.getCarIds();

				if (!delIds) {
					uni.showToast({
						title: '请选择要删除的商品',
						icon: 'none'
					})
					return false;
				}

				that.delIds = delIds;
				that.btnType = 0;
				that.$refs.askmodel.show();
				that.maskTitle = '是否将选中商品移除购物车?'
			},
			selThis: function(shopIndex) { //选择商品
				this.yuyuecarList.forEach(item => {
					item.selected = false
				})
				let that = this
				let carList = that.carList;
				carList[shopIndex].selected = !carList[shopIndex].selected
				that.carList = []
				that.carList = [...carList]
				let aa = 0;
				that.carList.forEach((item, index) => {
					if (item.selected) {
						aa += 1
					} else {}
				})

				if (aa != 0) {
					that.cartssss = true
				} else {
					that.cartssss = false
				}
				if (aa == that.carList.length) {
					that.allSel = true
				} else {
					that.allSel = false
				}
				that.getAllMount();
			},
			selThiss: function(shopIndex) { //选择商品
				this.carList.forEach(item => {
					item.selected = false
				})
				let that = this
				let carList = that.yuyuecarList;
				carList[shopIndex].selected = !carList[shopIndex].selected
				that.yuyuecarList = []
				that.yuyuecarList = [...carList]
				let aa = 0;
				that.yuyuecarList.forEach((item, index) => {
					if (item.selected) {
						aa += 1
					} else {}
				})

				if (aa != 0) {
					that.cartssss = true
				} else {
					that.cartssss = false
				}
				if (aa == that.yuyuecarList.length) {
					that.allSel = true
				} else {
					that.allSel = false
				}
				that.getAllMounts();
			},
			selShop: function(shopIndex) {
				var that = this;
				let carList = that.carList;
				if (carList[shopIndex].selected == false) {
					carList[shopIndex].selected = true;
					for (let i = 0; i < carList[shopIndex].glist.length; i++) {
						carList[shopIndex].glist[i].selected = true;
					}
				} else {
					carList[shopIndex].selected = false;
					for (let i = 0; i < carList[shopIndex].glist.length; i++) {
						carList[shopIndex].glist[i].selected = false;
					}
				}
				that.setAllSel();
				that.$emit('selShop', carList);
			},
			setAllSel: function() { //是否全选
				let that = this
				let shopNum = 0;
				for (let i = 0; i < that.carList.length; i++) {
					if (that.carList[i].selected == true) {
						shopNum = shopNum + 1;
					}
				}
				if (shopNum == that.carList.length && shopNum > 0) {
					that.allSel = true;
					that.cartssss = true;
				} else {
					that.allSel = false;
					that.cartssss = false;
				}

				that.getAllMount();
			},
			allSelBtn: function() { //全选
				var that = this;
				that.allSel = !that.allSel;
				var carList = that.carList;
				for (let i = 0; i < carList.length; i++) {
					if (that.allSel) {
						that.allSel = true;
						carList[i].selected = true;
						that.cartssss = true;
					} else {
						carList[i].selected = false;
						that.cartssss = false;
					}
				}
				that.yuyuecarList.forEach(item => {
					item.selected = false
				})
				that.$emit('allSelBtn', carList);
				that.getAllMount();
			},
			getAllMounts: function() { //计算选中总价
				var that = this;
				let allPrice = 0;
				var selNum = 0;
				let carList = that.yuyuecarList;
				for (let i = 0; i < carList.length; i++) {
					if (carList[i].selected == true) {
						selNum = selNum + Number(carList[i].num);
						// allPrice = allPrice + (Number(carList[i].num) * Number(carList[i].shop.xc_price));
						allPrice = allPrice + (Number(carList[i].num) * Number(carList[i].price));
					}
				}
				that.allNumber = selNum;
				that.allAmount = allPrice;
			},
			getAllMount: function() { //计算选中总价
				var that = this;
				let allPrice = 0;
				var selNum = 0;
				let carList = that.carList;
				for (let i = 0; i < carList.length; i++) {
					if (carList[i].selected == true) {
						selNum = selNum + Number(carList[i].num);
						// allPrice = allPrice + (Number(carList[i].num) * Number(carList[i].shop.xc_price));
						allPrice = allPrice + (Number(carList[i].num) * Number(carList[i].price));
					}
				}
				that.allNumber = selNum;
				that.allAmount = allPrice;
			},
			getCarIds: function() { //获取要结算的商品
				var that = this;
				var carList = that.carList;
				var haveSel = [];
				for (let i = 0; i < carList.length; i++) {
					for (let k = 0; k < carList[i].glist.length; k++) {
						if (carList[i].glist[k].selected == true) {
							haveSel.push(carList[i].glist[k].id);
						}
					}
				}
				if (haveSel.length == 0) {
					uni.showToast({
						title: '请选择要结算的商品',
						icon: 'none'
					})
					return false;
				}
				let cartIds = haveSel.join(',');
				return cartIds;
			},
			changeNum: function(type, index) { //适用于根据数量改变购物车
				var that = this;
				var carList = that.carList;
				let aa = Number(carList[index].num)
				if (type == 0) {
					if (aa <= 1) {
						return false;
					}
					aa = aa - 1
				} else {
					if (aa >= carList[index].shop.shopkucun) {
						uni.showToast({
							title: '库存不足',
							icon: 'none'
						})
						return false;
					}
					aa = aa + 1
				}
				carList[index].num = aa;
				this.carList = []
				this.carList = [...carList]
				that.getAllMount();
			},
			//开始触摸滑动
			drawStarts(e) {
				var touch = e.touches[0];
				this.startX = touch.clientX;
			},
			//触摸滑动
			drawMoves(e) {
				for (var index in this.yuyuecarList) {
					this.$set(this.yuyuecarList[index], 'right', 0);
				}
				var touch = e.touches[0];
				var item = this.yuyuecarList[e.currentTarget.dataset.index];
				var disX = this.startX - touch.clientX;
				if (disX >= 20) {
					if (disX > this.delBtnWidth) {
						disX = this.delBtnWidth;
					}
					this.$set(this.yuyuecarList[e.currentTarget.dataset.index], 'right', disX);
				} else {
					this.$set(this.yuyuecarList[e.currentTarget.dataset.index], 'right', 0);
				}
			},
			//触摸滑动结束
			drawEnds(e) {
				var item = this.yuyuecarList[e.currentTarget.dataset.index];
				if (item.right >= this.delBtnWidth / 2) {
					this.$set(this.yuyuecarList[e.currentTarget.dataset.index], 'right', this.delBtnWidth);
				} else {
					this.$set(this.yuyuecarList[e.currentTarget.dataset.index], 'right', 0);
				}
			},
			//删除方法
			delDatas(item, index) {
				this.$api.cartdel({
					id: item.id
				}).then(data => {
					uni.showToast({
						title: data.data.msg,
						duration: 1000,
						icon: "none"
					})
					if (data.data.code == 1) {
						this.allsss()
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
					}
				})
			},




			//开始触摸滑动
			drawStart(e) {
				var touch = e.touches[0];
				this.startX = touch.clientX;
			},
			//触摸滑动
			drawMove(e) {
				for (var index in this.carList) {
					this.$set(this.carList[index], 'right', 0);
				}
				var touch = e.touches[0];
				var item = this.carList[e.currentTarget.dataset.index];
				var disX = this.startX - touch.clientX;
				if (disX >= 20) {
					if (disX > this.delBtnWidth) {
						disX = this.delBtnWidth;
					}
					this.$set(this.carList[e.currentTarget.dataset.index], 'right', disX);
				} else {
					this.$set(this.carList[e.currentTarget.dataset.index], 'right', 0);
				}
			},
			//触摸滑动结束
			drawEnd(e) {
				var item = this.carList[e.currentTarget.dataset.index];
				if (item.right >= this.delBtnWidth / 2) {
					this.$set(this.carList[e.currentTarget.dataset.index], 'right', this.delBtnWidth);
				} else {
					this.$set(this.carList[e.currentTarget.dataset.index], 'right', 0);
				}
			},
			//删除方法
			delData(item, index) {
				this.$api.cartdel({
					id: item.id
				}).then(data => {
					uni.showToast({
						title: data.data.msg,
						duration: 1000,
						icon: "none"
					})
					if (data.data.code == 1) {
						this.allsss()
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
					}
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
	@font-face {
		font-family: 'iconfont';
		/* project id 1143282 */
		src: url('https://at.alicdn.com/t/font_1143282_zy7677qexck.eot');
		src: url('https://at.alicdn.com/t/font_1143282_zy7677qexck.eot?#iefix') format('embedded-opentype'),
			url('https://at.alicdn.com/t/font_1143282_zy7677qexck.woff2') format('woff2'),
			url('https://at.alicdn.com/t/font_1143282_zy7677qexck.woff') format('woff'),
			url('https://at.alicdn.com/t/font_1143282_zy7677qexck.ttf') format('truetype'),
			url('https://at.alicdn.com/t/font_1143282_zy7677qexck.svg#iconfont') format('svg');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.car-add:before {
		content: "\e8a6";
	}

	.car-sub:before {
		content: "\e8a7";
	}

	.car-no:before {
		content: "\e64d";
	}

	.car-unsel:before {
		content: "\e63a";
	}

	.car-sel:before {
		content: "\e639";
	}

	.car-del:before {
		content: "\e622";
	}

	.car-count {
		width: 100%;
		padding-bottom: 120rpx;
	}

	.manage-btn {
		width: 100%;
		height: 75rpx;
		background: #FFFFFF;
		text-align: right;
	}

	.manage-btn text {
		font-size: 30rpx;
		color: #76a28c;
		line-height: 75rpx;
		padding: 0 24rpx;
	}



	.all-sel-btn {
		height: 100%;
		float: left;
	}

	.all-sel-btn .iconfont {
		margin-right: 10rpx;
		color: #76a28c;
	}

	.car-list {
		width: 100%;
		display: flex;
		position: relative;
		align-items: right;
		flex-direction: row;
		padding: 12rpx 0;
	}

	.aaaaaaaaaa {
		border-radius: 20rpx;
	}

	.car-list .list {
		width: 100%;
		padding: 20rpx 20rpx 20rpx 0;
		display: flex;
		background: #FFFFFF;
		border-bottom: 1px solid #F5F5F5;
	}

	// .car-list .list:nth-child(1) {
	// 	border-top-left-radius: 0;
	// 	border-top-right-radius: 0;
	// }

	// .car-list .list:nth-last-child(1) {
	// 	margin: 0;
	// }

	.car-list .list .btn {
		width: 70rpx;
		height: 190rpx;
	}

	.car-list .list .btn .iconfont {
		color: #76a28c;
		font-size: 38rpx;
	}

	.car-list .list .car-img {
		width: 190rpx;
		height: 190rpx;
		border-radius: 10rpx;
	}

	.car-list .list .car-mes {
		flex: 1;
		margin-left: 20rpx;
	}

	.car-list .g-name {
		font-size: 28rpx;
		color: #2a2a2a;
		/* height: 38rpx; */
	}

	.car-list .mes-box {
		width: 100%;
	}

	.car-list .gz-box {
		font-size: 26rpx;
		color: #999999;
		margin: 10rpx 0;
	}

	.car-list .mes-box .price {
		color: #ff5621;
		font-weight: bold;
		font-size: 24rpx;
	}

	.car-list .mes-box .yj-price {
		font-size: 36rpx;
	}

	.car-list .price .num {
		color: #2a2a2a;
		font-size: 28rpx;
		font-weight: normal;
		float: right;
	}

	.car-list .num-box {
		float: right;
	}

	.car-list .num-box .iconfont {
		font-size: 50rpx;
		color: #999999;
	}

	.car-list .num-box view {
		width: 60rpx;
		text-align: center;
		height: 50rpx;
		line-height: 50rpx;
		font-size: 30rpx;
		color: #2A2A2A;
		margin: 0 10rpx;
	}

	.price-change-num .price {
		float: left;
	}

	.car-bottom-btn {
		position: fixed;
		width: 100%;
		height: 100rpx;
		background: #FFFFFF;
		left: 0;
		bottom: 0;
		z-index: 6;
		box-shadow: 0px -5px 10px -5px #d0d0d0;
		padding: 0 300rpx 0 40rpx;
		display: flex;
		justify-content: space-between;
	}

	.car-bottom-btn .all-cost {
		margin-right: 10rpx;
	}

	.car-bottom-btn .all-cost .icon {
		font-size: 28rpx;
		margin-top: 5rpx;
	}

	.car-bottom-btn text {
		color: #ff5621;
		font-size: 38rpx;
		line-height: 80rpx;
	}

	.car-btn-box {
		position: absolute;
		right: 0;
		height: 100%;
		z-index: 9;
		top: 0;
	}

	.car-btn-box view {
		width: 150rpx;
		height: 100%;
		cursor: pointer;
	}

	.del-btn {
		background: red;
		color: #FFFFFF;
	}

	.js-btn {
		background: #76a28c;
		color: #FFFFFF;
	}

	.shop-mes {
		padding: 20rpx;
		background: #FFFFFF;
		border-bottom: 1px solid #F5F5F5;
	}

	.shop-mes .iconfont {
		font-size: 38rpx;
		margin-right: 20rpx;
		color: #76a28c;
	}

	.shop-mes .name-mes {
		float: left;
	}

	// 底部合计
	.car_foot {
		width: 100%;
		height: 100rpx;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		padding: 0 30rpx;
		justify-content: space-between;

		.foot_right {
			display: flex;
			align-items: center;
		}

		.all_price {
			font-size: 26rpx;
			color: #000000;
			text-align: right;
		}

		.acitvity {
			font-size: 18rpx;
			color: #999;
		}

		.submit_btn {
			width: 160rpx;
			height: 70rpx;
			background: #007399;
			border-radius: 35rpx;
			font-size: 30rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 70rpx;
			margin-left: 20rpx;
		}

	}

	.dksjahk {
		font-size: 24rpx;
		font-weight: 400;
		color: #000000;
		line-height: 30rpx;
	}

	.fsdfsfs {
		color: #000000;
	}

	.fdsds {
		font-size: 22rpx;
		font-weight: 400;
		color: #666666;
	}

	page {
		background: #f5f5f5;
	}

	view,
	textarea,
	input,
	text,
	button {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-size: 28rpx;
		font-family: "微软雅黑";
	}

	.uni-checkbox-input {
		border-radius: 50% !important;
	}

	.submit_btn {
		width: 160rpx;
		height: 70rpx;
		background: #007399;
		border-radius: 35rpx;
		font-size: 30rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 70rpx;
		margin-left: 20rpx;
	}

	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		background: #f5f5f5;
		overflow: hidden;
	}

	.line1 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: box;
		display: -webkit-box;
		line-clamp: 1;
		box-orient: vertical;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		word-break: break-all;
		/* 英文换行问题 */
	}

	.line2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: box;
		display: -webkit-box;
		line-clamp: 2;
		box-orient: vertical;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-all;
		/* 英文换行问题 */
	}

	.centerboth {
		display: flex;
		display: -webkit-flex;
		align-items: center;
		-webkit-align-items: center;
		justify-content: center;
		-webkit-justify-content: center;
	}

	.clearfix:after {
		content: "";
		display: block;
		visibility: hidden;
		height: 0;
		clear: both;
	}

	.clearfix {
		zoom: 1;
	}

	image {
		padding: 0;
		margin: 0;
	}

	textarea {
		width: 300rpx;
		height: 75rpx;
		display: block;
		position: relative;
		font-size: 28rpx;
	}

	button::after {
		border: none;
	}

	input:-ms-input-placeholder {
		color: #808080;
	}

	car-list {
		width: 100%;
	}





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

	//滑动
	.huadong {
		margin: 20rpx;
		overflow: hidden;

		.order-item {}

		.content {
			width: 100%;
			height: 180rpx;
			background: #FFFFFF;
			border-radius: 10rpx;
			display: flex;
			align-items: center;
			padding: 0 30rpx;

			.dasdas {
				margin-left: 30rpx;
			}

			.texts {
				margin-top: 40rpx;
				font-size: 22rpx;
				font-weight: 400;
				color: #999999;
			}

			.text {
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}

			.img {
				width: 140rpx;
				height: 140rpx;
				border-radius: 20rpx;
			}
		}

		.hdjsah {
			position: absolute;
			top: 0;
			right: -130rpx;
			width: 130rpx;
			margin: 12rpx 0;
			padding: 20rpx 0;
			background-color: #FB716E;
			border-radius: 0rpx 10rpx 10rpx 0rpx;
		}

		.remove {
			width: 100%;
			height: 190rpx;
			line-height: 190rpx;
			text-align: center;
			font-size: 30rpx;
			font-weight: 400;
			color: #FFFFFF;
		}

	}
</style>
