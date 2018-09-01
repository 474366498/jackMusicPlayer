<template>
	<div id="carrousel">
		<div class="carrouselInner" 
			v-bind:style="{'width':allWidth+'px','height':allHeight+'px'}">
			<div 
				class="carrouselItem"
				v-for="(item,index) in layoutItems.temps"
				v-bind:style="{
					'width':item.width+'px',
					'height':item.height+'px',
					'left':item.left+'px',
					'top':item.top+'px',
					'z-index':item.zIndex
				}"
			>
				<img v-bind:src="item.src" v-bind:style="{
					'width':item.width+'px',
					'height':item.height+'px'
				}" />
			</div>
			
			
		</div>
		<!-- <code>
			{{ JSON.stringify(layoutItems) }}
		
		</code> -->
	</div>
</template>
<script>

function copyArr (arr) {
	return arr.map((e)=>{
		if (typeof(e) === 'object'){
			return Object.assign({},e)
		} else {
			return e
		}
	})
}

var width = document.body.clientWidth 

	export default {
		props : {
			items : {
				type : Array,
				default : () => []
			}
		},
		data (){
			return {
				msg:'vueCarrousel vue',
				timer:null,
				allWidth:width,
				allHeight:width,
				curWidth:width/2,
				curHeight:width/2,
				scale:0.8/*,
				temps (){
					var temps = [];
					var rItems = copyArr(this.items)
					var middle = Math.floor(this.items.length/2)
					if(this.items.length%2==0){
						var center = this.items[Math.floor(this.items.length/2)]
						rItems.push(Object.assign({},center))
					}
					var listL = rItems.slice(0,middle)
					var listR = rItems.slice(middle)
					var that = this
					var leftGap = (this.allWidth - this.curWidth)/2
					var gap = leftGap/middle

					listL.forEach(function (e,i){
						var obj = {}
						obj.content = e.content
						obj.left = i*gap
						obj.zIndex = i+1
						obj.opacity = 1/(middle+1-i)
						obj.width = that.curwidth*Math.pow(that.scale,middle-i)
						obj.width = that.curHeight*Math.pow(that.scale,middle-i)
						obj.bottom = (that.allHeight - obj.height) /2
						temps.push(obj)
					})
					listR.forEach(function (e,i){
						var obj = {}
						obj.content = e.content
						obj.width = that.curwidth*Math.pow(that.scale,i)
						obj.height = that.curHeight*Math.pow(that.scale,i)
						obj.left = that.allWidth - (middle-i)*gap - obj.width
						obj.zIndex = middle-i+1
						obj.opacity = 1/(i+1)
						obj.bottom = (that.allHeight - obj.height)/2
						temps.push(obj)
					})
					return {
						temps,
						listR,
						timer:null,
						dir:'right'
					}
				}*/
			}
		},
		watch :{
			
		},
		created (){
			this.setTimer()
		},
		methods :{
			setTimer (){
				var that = this
				this.clearTimer()
				function cb(){
					that.timer = setTimeout ( function (){
						if (that.layoutItems.dir =="right"){
							var pop = that.layoutItems.temps.shift()
							that.layoutItems.temps.push(pop)
						} else {
							var pop = that.layoutItems.temps.pop()
							that.layoutItems.temps.unshift(pop)
						}
						cb()
					},3000)
				}
				cb()
			},
			clearTimer (){
				if(this.timer){
					clearTimeout(this.timer)
				}
			}
		},
		computed :{
			layoutItems (){
				var temps = [] 
				var rItems = copyArr(this.items)
				var middle = Math.floor(this.items.length/2)
				if(this.items.length%2==0){
					var center = this.items[Math.floor(this.items.length/2)]
					rItems.push(Object.assign({},center))
				}
				var listL = rItems.slice(0,middle)
				var listR = rItems.slice(middle)
				var that = this
				var leftGap = (this.allWidth - this.curWidth)/2
				var gap = leftGap/middle

				listL.forEach(function (e,i){
					var obj = {}
					obj = e
					obj.left = i*gap
					obj.zIndex = i+1
					obj.opacity = 1/(middle+1-i)
					obj.width = that.curWidth*Math.pow(that.scale,middle-i)
					obj.height = that.curHeight*Math.pow(that.scale,middle-i)
					obj.top = (that.allHeight - obj.height) /2
					temps.push(obj)
				})
				listR.forEach(function (e,i){
					var obj = {}
					obj = e
					obj.width = that.curWidth*Math.pow(that.scale,i)
					obj.height = that.curHeight*Math.pow(that.scale,i)
					obj.left = that.allWidth - (middle-i)*gap - obj.width
					obj.zIndex = middle-i+1
					obj.opacity = 1/(i+1)
					obj.top = (that.allHeight - obj.height)/2
					temps.push(obj)
				})
				return {
						temps,
						listL,
						listR,
						timer:null,
						dir:'right'
					}
			}
		}
	}
</script>
<style scoped>
#carrousel{
	color:white;
}
.carrouselInner{
	color:white;
	position:relative;
	width:100%;
	height:100%;
}
.carrouselItem{
	position:absolute;
}
</style>