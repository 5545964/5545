<template>
	<view class="are" :style="'margin-top: '+height+'rpx;'">
		<view class="datas">
			<view class="dsaada" v-if="index%2==0" v-for="(item,index) in list" :key="index" @click="xuanzhong(item)">
				<view class="img">
					<image :lazy-load="true" v-if="item.image != ''"
						:src="imgPath+'/index/index/show?url='+item.image+'&width=335&height=350'" mode="widthFix">
					</image>
					<video :enable-play-gesture="true" :page-gesture="true" :http-cache="false" codec="software"
						:play-strategy="1" :title="item.title" :id="'video'+item.id" v-else @play="playing"
						:src="item.video" controls></video>
					<!-- imgPath+ -->
				</view>
				<view class="cet">
					<view class="ssj gghGG">
						<text v-if="item.title">{{item.title}}</text><text v-else>{{item.name}}</text>
					</view>
				</view>
				<view style="padding: 20rpx 30rpx;" v-if="item.isgo">
					<view class="fgfg">
						￥{{item.xc_price}}
					</view>
					<view class="cxzcxz">
						秒杀
					</view>
				</view>
				<view class="llkl" v-if="item.jifen">
					<view class="fgfg">
						{{item.xc_price}}
					</view>
					<view class="fgfgs">
						￥{{item.cb_price}}
					</view>
				</view>
			</view>
		</view>
		<view class="datas">
			<view class="dsaada" v-if="index%2!=0" v-for="(item,index) in list" :key="index" @click="xuanzhong(item)">
				<view class="img">

					<image :lazy-load="true" v-if="item.image != ''"
						:src="imgPath+'/index/index/show?url='+item.image+'&width=335&height=350'" mode="widthFix">
					</image>
					<video :enable-play-gesture="true" :page-gesture="true" :http-cache="false" codec="software"
						:play-strategy="1" :title="item.title" :id="'video'+item.id" v-else @play="playing"
						:src="item.video" controls></video>
					<!-- imgPath+ -->
				</view>
				<view class="cet">
					<view class="ssj gghGG">
						<text v-if="item.title">{{item.title}}</text><text v-else>{{item.name}}</text>
					</view>
				</view>
				<view style="padding: 20rpx 30rpx;" v-if="item.isgo">
					<view class="fgfg">
						￥{{item.xc_price}}
					</view>
					<view class="cxzcxz">
						秒杀
					</view>
				</view>
				<view class="llkl" v-if="item.jifen">
					<view class="fgfg">
						{{item.xc_price}}
					</view>
					<view class="fgfgs">
						￥{{item.cb_price}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'u-adata',
		props: {
			list: {
				type: Array
			},
			height: {
				type: Number,
				default: 70
			}
		},
		data() {
			return {
				imgPath: this.$imgPath
			};
		},
		methods: {
			xuanzhong(ev) {
				this.$emit('click', ev);
			},
			playing(e) {
				let that = this;
				let currentId = e.currentTarget.id; // 获取当前视频id

				that.videoContent = uni.createVideoContext(currentId);
				let trailer = that.list;
				trailer.forEach(function(item, index) { // 获取json对象并遍历, 停止非当前视频
					if (item.video != null && item.video != "") {
						let temp = 'video' + item.id;
						if (temp != currentId) {
							uni.createVideoContext(temp, that).pause(); //暂停视频播放事件
						}
					}

				})

			},
		}
	};
</script>

<style lang="scss" scoped>
	.llkl {
		padding: 20rpx 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.cxzcxz {
		margin: 20rpx 0;
		width: fit-content;
		padding: 8rpx 14rpx;
		background: #FF716D;
		border-radius: 6rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: #FFFFFF;
	}

	.fgfg {
		font-size: 30rpx;
		font-weight: 400;
		color: #E11915;
	}

	.fgfgs {
		font-size: 20rpx;
		font-weight: 400;
		text-decoration: line-through;
		color: #999999;
		line-height: 30rpx;
	}

	.xccxcc {
		font-size: 18rpx;
		font-weight: 400;
		color: #FFFFFF;
		padding: 7rpx 10rpx;
	}

	.dsadsdxz {
		background: #FF716D;
		border-radius: 6rpx;
	}

	.kjhkjh {
		display: flex;
		justify-content: flex-start;
		padding: 10rpx 20rpx;
		align-items: center;
	}

	.left_mony {
		padding-right: 30rpx;
		width: auto;
		font-size: 30rpx;
		font-weight: 400;
		color: #E11915;
	}

	.rigth_monys {
		width: auto;
	}

	.rigth_mony {
		font-size: 24rpx;
		font-weight: 400;
		text-decoration: line-through;
		color: #999999;
	}

	.dsaada {
		height: fit-content;
		background-color: #fff;
		border-radius: 20rpx;
		overflow: hidden;
		margin-bottom: 20rpx;
	}

	.gghGG {
		// overflow: hidden;
		// /*超出的部分隐藏起来。*/
		// white-space: nowrap;
		// /*不显示的地方用省略号...代替*/
		// text-overflow: ellipsis;
		// /* 支持 IE */
	}

	.ssj {
		text-align: center;
		margin: 20rpx 0;
		width: 270rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: #000000;
		overflow: hidden;
	}

	.datas {
		width: 335rpx;
		// display: flex;
		// flex-wrap: wrap;
		// justify-content: space-between;
	}

	.img {
		width: 335rpx;
		height: 350rpx;
	}

	.are {
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
	}
</style>
