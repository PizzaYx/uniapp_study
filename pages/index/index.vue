<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		
		</view>
		
			<button @click="handleClick"> 点击 </button>
		<view v-for="item in list" :key="item.name">
			<text>{{item.name}}</text>
			<text>{{item.num}}</text>
		</view>
		
	</view>
</template>

<script setup>
	import {ref,reactive} from 'vue'
	import {onLoad} from '@dcloudio/uni-app'
	const title = ref('Hello')
	
	const list = reactive([
		{name:'111',num:1},
		{name:'222',num:2},
		{name:'333',num:3},
	])
	
	onLoad(() => {
		console.log('onLoad生命周期1');
	})
	
	const handleClick = ()=>{
		list.forEach(item=>{
			item.num++
		})
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>