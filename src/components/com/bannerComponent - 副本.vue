<template>
	<div id="bannerComponent">
		<div class="bannerInner">
			<ul class="bannerPic">
		 	  <li class="pic"
		 	  	v-bind:class="index===nowIndex ? 'pic-show':'pic-hide'" 
			 	 	v-for="(pic,index) in lists" 
			 	 	v-bind:key="pic.id"
			 	 	v-show="index===nowIndex"
		 	 	>
		 	 		<img v-bind:src="pic.src" v-bind:title="nowIndex" />
		 	  </li>
		 	</ul>  
		 	<p class="info"> {{ lists[nowIndex].title }} </p>
		 	<ul class="bannerBtn">
			 	<li class="btn"
			 		v-bind:class="index === nowIndex ? 'on':''" 
			 		v-for="(pic,index) in lists" 
			 		v-bind:key="pic.id"
			 		v-on:tap="onChange(index)"
			 		v-on:click="onChange(index)"
			 	>
			 		{{ pic.id }}
			 	</li>
			</ul>
		</div>
	</div>
</template>

<script>


	export default {
		props:{
			lists:{
				type: Array,
				default: () => []
			},
			nowIndex:{
				type: Number,
				default: 0
			},
			time:{
				type: Number,
				default:0
			}
		},
		data () {
			return {
				msg:'bannerComponent component',
				timer:null
			}
		},
		watch : {
			
		},
		methods : {
			onChange (index){
				this.nowIndex = index
			},
			next (){
				var that = this 
				that.timer = setInterval ( function () {
					that.nowIndex++
					if( that.nowIndex >= that.lists.length ){
						that.nowIndex = 0
					}
				},that.time)
			}
		},
		mounted () {
			this.next()
		}
	}
</script>

<style scoped>
#bannerComponent{
	margin:.5rem 1rem;
} 
.bannerInner ul .pic-hide{
	width:100%;
	transition:all .1s ;
	transform:translateX(-90rem);
}
.bannerInner ul .pic-show{
	transition:transform .5s;
	transform:translateX(0rem);
}

.bannerInner ul .pic img{
	width:100%;
	height:auto;
}
.bannerInner ul .btn{
	width:1rem;
	height:1rem;
	background:white;
	display:inline-block;
	margin:0 .5rem;
	border-radius:.5rem;
}
.bannerInner ul .btn.on{
	background:red;
}
.bannerInner{
	position:relative;
}
.bannerInner .info{
	position:absolute;
	bottom:3rem;
	left:2rem;
	color:white;
}
</style>