<template>
	<view>
		<navbar :isHome="true" />
		<view style="margin-top: 130rpx;">
			<view class="weui-cell" style="background: #fff9eb;">
				<view class="weui-cell__hd">
					<image src="../../static/resource/images/ic_myapp.png"
						style="display: block;width: 40rpx;height: 40rpx;margin-right: 14rpx;"></image>
				</view>
				<view class="weui-cell__bd">
					<text style="color: #be9719;font-size: 13px;">点击右上角"添加到我的小程序"，方便下次找到!</text>
				</view>
				<view class="weui-cell__ft">
					<image src="../../static/resource/images/modal_closer.png"
						style="display: block;width: 15px;height: 15px;"></image>
				</view>
			</view>
		</view>

		<view v-if="slides && slides.length > 0" class="index-swiper">
			<swiper autoplay circular :interval="4000" :duration="500">
				<block v-for="(item,index) in slides" :key="index">
					<swiper-item>
						<image :src="item.pic_image_url" mode="widthFix" show-menu-by-longpress :data-index="index">
						</image>
					</swiper-item>
				</block>
			</swiper>
		</view>
		
		<view v-if="nav2s && nav2s.length > 0" class="nav2-list">
			<block v-for="(item,index) in nav2s" :key="index"> 
			<view class="nav2-item" :data-index="index">
				<view class="nav2-pic">
					<image :src="item.pic_image_url" mode="widthFix"></image>
					
				</view>
				
			</view>
			</block>
		</view>
	</view>
</template>

<script setup>
	import { ref, reactive, computed } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'

	const app = getApp()

	//定义轮播图数据
	const slides = ref([])
	
	//快捷入口2
	const nav2s = ref([])

	onLoad(() => {
		app.globalData.utils.getUserInfo()
		app.globalData.utils.request({
			url: '/app/init',
			success: res => {
				console.log(res.data);
				const { id } = res.data.area
				//通过id去获取当前地区的页面数据
				app.globalData.utils.request({
					url: '/Index/index',
					data: {
						aid: id
					},
					success: ({ data }) => {
						console.log(data);
						slides.value = data.slides
						nav2s.value = data.nav2s
					}
				})
			}
		})
	})
</script>

<style>
	page {
		background: #fff;
	}

	.index-swiper {
		padding: 20rpx 20rpx 0 20rpx;
		overflow: hidden;

	}

	.index-swiper swiper {
		height: 320rpx;
		overflow: hidden;
		border-radius: 10rpx;
	}

	.index-swiper swiper-item image {
		width: 100%;
		height: 100%;
	}
	
	.nav2-list{
		margin: 10rpx 20rpx 0 20rpx;
	}
	
	.nav2-list::after{
		content: '';
		display: block;
		height: 0;
		line-height: 0;
		clear: both;
		visibility: hidden;
	}
	
	.nav2-item{
		float: left;
		margin-top: 20rpx;
		width: 50%;
		text-align: center;
		box-sizing: border-box;
		padding: 0 5rpx;
	}
	
	.nav2-pic{
		width: 100%;
	}
	
	.nav2-pic image{
		display: block;
		width: 100%;
	}
</style>