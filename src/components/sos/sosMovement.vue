<template>
	<div id="movement">
		<div class="movementHead">
			<ul class="movementUl" 
				ref="movementUl" 
				v-on:touchstart="touchStart"
				v-on:touchmove="touchMove"
				v-on:touchend="touchEnd">
				<router-link class="movementItem" 
					v-for="(list , index ) in lists"
					v-bind:key="index" 
					v-on:tap="prit(list)"
					v-bind:to="{path:'sos/'+list.link}" >
					{{ list.title }}
				</router-link> <!-- 通过点击事件 返回父级了？？？？ -->
			</ul>
		</div>
	</div>
</template>

<script>

var screenWidth = document.body.clientWidth

	export default {
		props : {
			lists : {
				type : Array,
				default : () => []
			},
			initial : {
				type : Number ,
				default : () => 0
			}
		},
		created () {
			
		},
		data () {
			return {
				msg:'movement vue',
				touch : {} ,
		  	touchLeft : 0
			}
		},
		computed : {
		},
		watch :{
				
		},
		methods :{
			touchStart (e){
				e.stopPropagation()
				const touch = e.touches[0]
				this.touch.startX = touch.pageX
			},
			touchMove (e){
				e.stopPropagation()
				const touch = e.touches[0]
				const deltaX = touch.pageX - this.touch.startX
				if ( isNaN(this.touchLeft) ){
					this.touchLeft = 0
				}
				var left = this.touchLeft + deltaX

				if (left > 0 ){
					left = 0
				} else if (left < screenWidth - parseInt(this.$refs.movementUl.clientWidth)){
					left = screenWidth - parseInt(this.$refs.movementUl.clientWidth)
				}
				this.$refs.movementUl.style.marginLeft = left + 'px'
			},
			touchEnd (){
				this.touchLeft = parseInt( this.$refs.movementUl.style.marginLeft )
			},
			prit () {
				console.log("vue")
			}
		},
		mounted () {
			this.$refs.movementUl.style.width = this.lists.length * 8 + 'rem'
			this.$refs.movementUl.style.height = '3rem'
		}/*,
		components : {
			sosCategoresAll
		}*/
	}

</script>

<style scoped>
	#movement{
		color:white;
		margin:.5rem 1rem;
		overflow:hidden;
	}
	#movement ul{
	}
	.movementItem{
		width:6rem;
		height:2rem;
		line-height:2rem;
		background:skyblue;
		border-radius:1rem;
		display:inline-table;
		float:left;
		margin:.5rem 1rem;
		color:white;
	}
</style>
