<template>
		<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" class="banner">
			<!-- slides -->
			<swiper-slide v-for="(item,i) in items" :key="i"><img class="banner-img" :src="item" /></swiper-slide>
			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>
			<!--<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
		  <div class="swiper-scrollbar" slot="scrollbar"></div>-->
		</swiper>

</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	require('swiper/dist/css/swiper.css')
	
	export default {
		name: 'carrousel',
		data() {
			return {
				items:['/static/img/hxzise.png','/static/img/zzxiaochi.png','/static/img/d5niupai.png'],
				// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
				notNextTick: true,
				swiperOption: {
					// swiper options 所有的配置同swiper官方api配置
					autoplay: 3000,
					speed:300,
					loop:true,
					direction: 'horizontal',
					grabCursor: true,
					autoplayDisableOnInteraction:false,
					setWrapperSize: true,
					//autoHeight: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					//prevButton: '.swiper-button-prev',
					//nextButton: '.swiper-button-next',
					//scrollbar: '.swiper-scrollbar',
					mousewheelControl: true,
					observeParents: true,
					// 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
					//debugger: true,
					// swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
					onTransitionStart(swiper) {
						//console.log(swiper)
					}
					// more Swiper configs and callbacks...
					// ...
				}
			}
		},
		// 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		components: {
	    swiper,
	    swiperSlide
	  },
		mounted() {
			// 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
			this.swiper.slideTo(3, 1000, false)
		}
	}
</script>
<style lang="css" scoped="scoped">
	.swiper-pagination-bullet {
    background: #e5e5e5;
    opacity: 0.8;
    }
    .swiper-pagination-bullet-active {
	    opacity: 1;
	    background: #007aff;
		}
</style>