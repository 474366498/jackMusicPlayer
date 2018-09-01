<template>
	<div class="playing" id="playing" v-on:click="close()">
		<div> <h2> {{ msg }} </h2> </div>
		<div class="playingPic">
			<div class="playingDial">
				<div 
					v-for="(list , i) in songsList"
					v-bind:key="i">
					<img 
						v-show="i == index" 
						v-bind:src="list.pic"
						v-bind:class="{'rotatePic rotate':i===index}"  />
					<!-- <audio v-bind:autoplay="i == index">
						<source v-bind:src="list.music" type="audio/mpeg" />
					</audio>  -->
				</div>
			</div>
		</div>
		<div>			
		<!-- 
		<audio src="http://m10.music.126.net/20180801180054/0f96b9441ee5d5848e274207b31e0771/ymusic/da34/d876/2e5b/e7136b9a0d08d745777dd78be2456de7.mp3" id="audio" autoplay="autoplay" controls="controls"></audio> -->

			<!-- <audio id="audio" ref="player" autoplay="autoplay"  >
				 
			</audio> 
		-->
		</div>
		<div class="playSlip">
			<div class="hightLight" v-bind:style="'width:'+ (ms.startTime/ms.endTime)*100+'%'"></div>
			<span class="time-s"> {{ ms.startTime | timeConversion }}</span>
			<span class="time-e"> {{ ms.endTime | timeConversion }} </span>
			
		</div>
		
		<div class="playingBtns">
			<button class="prev" v-on:click.stop="goPrev()"> </button>
			<button class="pause" v-on:click.stop="offOn()"> </button>
			<button class="next" v-on:click.stop="goNext()" > </button>
			<button class="openList" v-on:click.stop="open()"> </button>
		</div>
		<dialog-list 
			v-show="flg" 
			v-bind:lists="songsList"
			v-bind:order="index"
			v-on:getChildFlg="changeFlg" 
		></dialog-list>
	 <!-- 	<code> {{ songsList[index] }} {{ index }} </code>  -->
	</div>
</template>
<script>

import Vue from 'vue'
import dialogList from './com/dialog.vue'

const App = Vue.extend({})
App.audio = new Audio()
var player = App.audio

	export default {
		created () {
			/*document.getElementById('apiFoot').style.display='none'
			console.log(document.getElementById('apiFoot').style.display)*/
		},
		data () {
			return {
				msg : 'play',
				songsList:[],
				ms : {
					startTime:0,
					playing:false,
					endTime:null,
					random:false
				},
				flg:false
			}
		},
		beforeRouteEnter (to,from,next) {
	    next(vm => {
	    	vm.$ajax.get('/music/songsList')
	    		.then((res) => {
						vm.songsList = res.data.data
						player.src = vm.songsList[vm.index].music
						player.autoplay = true
						vm.msg = vm.songsList[vm.index].song
						player.addEventListener('loadedmetadata', () => {
								vm.ms.endTime = player.duration
						})
						player.addEventListener('timeupdate', () => {
		            vm.ms.startTime = player.currentTime
		        })
		        player.addEventListener('play', () => {
		            vm.ms.playing = true
		        })
		        player.addEventListener('pause', () => {
		            vm.ms.playing = false
		        })
					})
	    })
	  },
	  beforeRouteLeave (to,from,next) {
	  	next(vm => {
	  		vm.apiFootFlg = !vm.apiFootFlg
	  	})
	  },
		computed : {
			index () {
				return parseInt(this.$route.query.id)
			},
			next () {
				if (this.index + 1 < this.songsList.length ){
					return this.index + 1
				}
				return 0
			},
			prev () {
				if (this.index === 0){
					return this.songsList.length - 1
				}
				return this.index - 1
			}
		},
		methods : {
			goAjax (nowInd) {
				this.$ajax.get('/music/songsList')
					.then((res) => {
						this.msg = this.songsList[nowInd].song
						player.src = this.songsList[nowInd].music
						//console.log(player.src)
						player.autoplay = true 
				})
			},
			goNext () {
				this.goAjax(this.next)
				this.$router.push({path:'play:',query:{id:this.next}})
			},
			goPrev () {
				this.goAjax(this.prev)
				this.$router.push({path:'play:',query:{id:this.prev}})
			},
			offOn () {
				var rotatePic = document.getElementsByClassName('rotatePic')[0]  /// 不如用js写旋转角度
				if (this.ms.playing) {
					player.pause()
					removeClass(rotatePic,'rotate')
				} else {
					player.play()
					addClass(rotatePic,'rotate')
				}
				this.ms.playing = !this.ms.playing
			},
			auto () {
				setInterval(() => {
					if (this.ms.startTime === this.ms.endTime) {
						this.goNext()		
					}
				},5000)	
			},
			open () {
				this.flg = !this.flg	
			},
			close () {
				this.flg = false
			},
			changeFlg (flg) {
				this.flg = flg
			}
		},
		components : {
			dialogList
		},
		mounted () {
			this.auto()
		},
		updated () {
			//this.init()
		}
	}	


function hasClass (el,str) {
	console.log(el)
	return !!el.className.match(new RegExp("(\\s|^)" + str + "(\\s|$)"))
}

function addClass (el,str) {
	if (!hasClass(el,str)) el.className += " " + str
}

function removeClass (el,str) {
	console.log(hasClass(el,str))
	if (hasClass(el,str)) {
		var reg = new RegExp("(\\s|^)" + str + "(\\s|$)")
		el.className = el.className.replace(reg," ")
	}
}

Vue.filter('timeConversion',function (value) {
	var v = parseInt(value).toFixed(0)
	if (value < 60){
		if ( v < 10 ){
			return '00:0' + v
		}
		return '00:' + v
	} else {
		if ( v % 60 < 10) {
			return '0' + Math.floor(v / 60) + ':0' + (v % 60)
		}
		return '0' + Math.floor(v / 60) + ':' + (v % 60)
	}
})

</script>
<style>
#apiMain{
	bottom:0;
}
#apiFoot{
	
}
	.playing {
		padding:.5rem;
		height:calc(100% - 1rem);
		overflow:hidden;
		position:relative;
	}
	.playing > div{
		width:80%;
		margin:0 auto;
	}
	.playing .playingPic{
		margin-top:5rem;
	}
		.playing .playingDial{
			width:24rem;
			height:24rem;
			border-radius:12rem;
			margin:0 auto;
			overflow:hidden;
			background:radial-gradient(rgba(255,255,255,.1),rgba(255,255,255,.5) );
			border:.4rem solid transparent;
			box-sizing:border-box;
			box-shadow:.15rem .15rem .3rem black,
								 -.15rem -.15rem .3rem black,
								 -.15rem .15rem .3rem black,
								 .15rem -.15rem .3rem black;	
			justify-content:center;
			align-items:center;	
			display: -webkit-box !important;
			display: -webkit-flex !important;
			display: -ms-flexbox !important;
			display: flex !important;
			-webkit-flex-wrap: wrap;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			position: relative;				 
		}
		.playing .playingDial,.playing .playingDial * ,.playing .playingDial::after,.playing .playingDial::before{
			box-sizing:border-box;
		}
		.playing .playingDial div{
			
		}
		.playing .playingDial img{
			height:24rem;
			width: auto;
		}

.playing .playingDial img.rotate{
  -webkit-transition-property: -webkit-transform;
  -webkit-transition-duration: 1s;
  -moz-transition-property: -moz-transform;
  -moz-transition-duration: 1s;
  -webkit-animation: rotate 10s linear infinite;
  -moz-animation: rotate 10s linear infinite;
  -o-animation: rotate 10s linear infinite;
  animation: rotate 10s linear infinite;
}
@-webkit-keyframes rotate{from{-webkit-transform: rotate(0deg)}
    to{-webkit-transform: rotate(360deg)}
}
@-moz-keyframes rotate{from{-moz-transform: rotate(0deg)}
    to{-moz-transform: rotate(359deg)}
}
@-o-keyframes rotate{from{-o-transform: rotate(0deg)}
    to{-o-transform: rotate(359deg)}
}
@keyframes rotate{from{transform: rotate(0deg)}
    to{transform: rotate(359deg)}
}
	.playing .playSlip{
		position:absolute;
		bottom:12rem;
		left:10%;
		border-top:.15rem solid #999;
	}
	.playing .playSlip .hightLight{
		border-top:.15rem solid white;
		position:absolute;
		top:-0.15rem;
		left:0;
	}
	.playing .playSlip span{
		position:absolute;
	}
	.playing .playSlip span.time-s{
		left:0;
	}
	.playing .playSlip span.time-e{
		right:0;
	}
	.playing .playingBtns{
		position:absolute;
		bottom:3rem;
		left:10%;
	}
	.playing .playingBtns button.prev,
	.playing .playingBtns button.next{
		width:4rem;
		height:4rem;
		border-radius:2rem;
		border:0;
		padding:0;
		display:inline-table;
		background:white;
		position:relative;
	}

	.playing .playingBtns .prev::before,
	.playing .playingBtns .prev::after{
		content:'';
		border:1rem solid transparent;
		border-right:1.4rem solid red;
		display:block;
		position:absolute;
		top:1rem;
	}
	.playing .playingBtns .prev::before{
		left:-0.3rem;
	}
	.playing .playingBtns .prev::after{
		left:.6rem;
	}

	.playing .playingBtns .next::before,
	.playing .playingBtns .next::after{
		content:'';
		border:1rem solid transparent;
		border-left:1.4rem solid red;
		display:block;
		position:absolute;
		top:1rem;
	}
	.playing .playingBtns .next::before{
		right:-0.3rem;
	}
	.playing .playingBtns .next::after{
		right:.6rem;
	}
	.playing .playingBtns button.play::before{
		content:'';
		border:2rem solid transparent;
		border-left:2.8rem solid red;
		display:block;
		position:absolute;
		top:1rem;
		left:2rem;
	}
	.playing .playingBtns button.pause::before,
	.playing .playingBtns button.pause::after{
		content:'';
		width:1.2rem;
		height:3.2rem;
		background:red;
		display:block;
		position:absolute;
		top:1.4rem;
	}
	.playing .playingBtns button.pause::before{
		left:1.4rem;
	}
	.playing .playingBtns button.pause::after{
		right:1.4rem;
	}
	.playing .playingBtns button.play,
	.playing .playingBtns button.pause{
		width:6rem;
		height:6rem;
		padding:1rem;
		border-radius:3rem;
		margin:0 1.5rem;
		margin-bottom:0;
		position:relative;
	}
	.playing .playingBtns button.openList {
		width: 4rem;
    height: 4rem;
    border: 0;
    padding: 0;
    display: inline-table;
    background: transparent;
    position:relative;
    margin-left:1rem;
	}
	.playing .playingBtns button.openList::before{
		content:'';
		height:2.4rem;
		width:2.8rem;
		border-top:.3rem solid red;
		border-bottom:.3rem solid red;
		display:block;
		box-sizing:border-box;
		position:absolute;
		left:.6rem;
		top:.8rem;
	}
	.playing .playingBtns button.openList::after{
		content:'';
		height:.3rem;
		width:2.8rem;
		background:red;
		display:block;
		box-sizing:border-box;
		position:absolute;
		left:.6rem;
		top:1.85rem;
	}
</style>