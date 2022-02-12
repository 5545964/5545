<template>
	<view class="are">
		<view class="datas">
			<view class="dsaada" v-for="(item,index) in list" :key="index" @click="xuanzhong(item)">
				<view class="img">
					<image :src="imgPath+item.simage" mode="aspectFit"></image>
				</view>
				<view>
					<view class="cet">
						<view class="ssj"> <text v-if="item.title">{{item.title}}</text><text
								v-else>{{item.name}}</text> </view>
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
			}
		}
	};
</script>
<style lang="scss" scoped>
	.dsaada {
		height: fit-content;
		background-color: #fff;
		border-radius: 20rpx;
		overflow: hidden;
		margin-bottom: 20rpx;
	}

	.ssj {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: center;
		margin: 20rpx 0;
		width: 400rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: #000000;
	}

	.datas {
		width: 100%;
	}

	.img {
		height: 350rpx;
	}

	.are {
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
	}
</style>
