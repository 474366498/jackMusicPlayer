<template>
	<div id="carrousel">
		<v-touch 
			v-on:swipeleft="next()" 
			v-on:swiperight="prev()"
			>
		<div class="carrouselInner" 
			v-bind:style="{'width':allWidth+'px','height':allHeight+'px'}">
			<div 
				class="carrouselItem"
				v-bind:class="'carrouselItem-'+index"
				v-for="(item,index) in temps"
				v-bind:key="index"
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
				<p> {{ item.title }} </p>
			</div>	
		</div>
		</v-touch>
	</div>
</template>
<script>

function copyArr (arr) {
	return arr.map((e) => {
		if (typeof (e) === 'object'){
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
				allHeight:0.8 * width,
				curWidth:width / 2,
				curHeight:width / 2,
				scale:0.8,
				dir:'left'
			}
		},
		watch :{
			items : {
				handler (val,old){
					
				}
			}
		},
		created (){
			this.setTimer()
		},
		methods :{
			setTimer (){
				var that = this
				this.clearTimer()
				function cb () {
					that.timer = setTimeout(function (){
						if (that.dir === "right"){
							var pop = that.items.shift()
							that.items.push(pop)
						} else {
							var pop = that.items.pop()
							console.log(pop)
							that.items.unshift(pop)
						}
						cb()
					},6000)
				}
				cb()
			},
			clearTimer (){
				if (this.timer){
					clearTimeout(this.timer)
				}
			},
			next (){
				var pop = this.items.shift()
				this.items.push(pop)
			},
			prev (){
				var pop = this.items.pop()
				this.items.unshift(pop)
			}
		},
		computed :{
			temps (){
				var temps = [] 
				var rItems = copyArr(this.items)
				var middle = Math.floor(this.items.length / 2)
				if (this.items.length % 2 === 0){
					var center = this.items[Math.floor(this.items.length / 2)]
					rItems.push(Object.assign({},center))
				}
				var listL = rItems.slice(0,middle)
				var listR = rItems.slice(middle)
				var that = this
				var leftGap = (this.allWidth - this.curWidth) / 2
				var gap = leftGap / middle

				listL.forEach(function (e,i){
					var obj = {}
					obj = e
					obj.left = i * gap
					obj.zIndex = i + 1
					obj.opacity = 1 / (middle + 1 - i)
					obj.width = that.curWidth * Math.pow(that.scale,middle - i)
					obj.height = that.curHeight * Math.pow(that.scale,middle - i)
					obj.top = that.allHeight - 3 / 2 * obj.height
					temps.push(obj)
				})
				listR.forEach(function (e,i){
					var obj = {}
					obj = e
					obj.width = that.curWidth * Math.pow(that.scale,i)
					obj.height = that.curHeight * Math.pow(that.scale,i)
					obj.left = that.allWidth - (middle - i) * gap - obj.width
					obj.zIndex = middle - i + 1
					obj.opacity = 1 / (i + 1)
					obj.top = that.allHeight - 3 / 2 * obj.height
					temps.push(obj)
				})
				return temps
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
.carrouselItem p {
	background:rgba(0,0,0,.5)
}
</style>