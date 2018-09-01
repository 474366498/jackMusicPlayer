<template>
	<div id="bannerComponent">
		<div class="bannerInner">
			<div class="bannerPic">
				<v-touch 
					v-on:swipeleft="go(nextIndex)"
					v-on:swiperight="go(prevIndex)">
			 	  <div class="pic"
				 	 	v-for="(pic,index) in lists" 
				 	 	v-bind:key="pic.id"
				 	 	v-show="nowIndex === index"
				 	 	v-bind:class="{'pic-next':nextIndex === index , 'pic-prev':prevIndex === index}"
			 	 	>
			 	 		<img v-bind:src="pic.src" />
			 	  </div>
		 		</v-touch>
		 	</div>  
		 	<p class="info"> {{ lists[nowIndex].title }} </p>
		 	<ul class="bannerBtn">
			 	<li class="btn"
			 		v-bind:class="index === nowIndex ? 'on':''" 
			 		v-for="(pic,index) in lists" 
			 		v-bind:key="index"
			 		v-on:click="go(index)"
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
			time:{
				type: Number,
				default:0
			}
		},
		data () {
			return {
				msg:'bannerComponent component',
				nowIndex:0,
				old:0,
				timer:null
			}
		},
		computed : {
			nextIndex () {
				if (this.nowIndex < this.lists.length - 1){
					return this.nowIndex + 1
				} else {
					return 0 
				}
			},
			prevIndex () {
				if (this.nowIndex > 0){
					return this.nowIndex - 1
				} else {
					return this.lists.length - 1 
				}
			}
		},
		methods : {
			go (index) {
				setTimeout(() => {
					this.nowIndex = index
				},100)
			},
			run () {
				var t = this.time
				setInterval(() => {
					this.go(this.nextIndex)
				},t)
			}
		},
		mounted () {
			this.run()
		}
	}
</script>

<style scoped>
#bannerComponent{
	margin:.5rem 1rem;
	width: calc(100% - 2rem);
} 
.bannerInner{
	position:relative;
}
.bannerInner .info{
	position:absolute;
	left:1rem;
	bottom:2rem;
	text-align:left;
	text-indent:1rem;
	color:white;
}
.bannerInner , .bannerInner img {
	width:100%;
	height:auto;
}
.bannerInner .bannerPic .pic{
	transition: all .5s;
}
.bannerInner .bannerPic .pic-next {
  transform: translateX(0);
}
.bannerInner .bannerPic .pic-prev {
  transition: all .5s;
  transform: translateX(-900px);
}
.bannerInner .bannerBtn li{
	display:inline-table;
	width:1.2rem;
	height:1.2rem;
	background:white;
	border-radius:.6rem;
	margin:0 .5rem;
	text-indent:-1000rem;
}
.bannerInner .bannerBtn li.on{
	background:radial-gradient(rgba(255,0,0,1) 0%,rgba(255,0,0,.9) 10%, rgba(255,0,0,.5) 100%);
}

</style>