<template>
	<div id="m_f_l" class="monthlyFocusList m_f_l" >
		<h2> {{ lists[0].heading }} </h2>
		<div class="m_f_lItem" 
			v-for="(list,index) in lists[0].main"
			v-bind:key="index"
			v-bind:class="'m_f_lItem-'+list.className" >
			<div class="l m_f_l-icon">
				<a> {{ list.title }} </a>
				<span class="l"> {{list.update }} </span>
			</div>
			<div class="l m_f_l-cont">
				<!-- <route-link> -->
				<ul class="l">
					<li v-for="song in list.songs"
							v-bind:key="song.id">
						<span> {{ song.id }} </span>
						<a v-bind:title=" song.song "> {{ song.song | cut }} </a> -
						<a> {{ song.singer }} </a>
					</li>
				</ul>
				
				<a class="r play">to play</a>
			</div>
		</div>
	</div>

</template>

<script>
import Vue from 'vue'
	export default {
		props : {
			lists : {
				type : Array,
				default : () => []
			}
		},
		data (){
			return {
				msg : "monthlyFocusList"
			}
		}
	}

	
	Vue.filter('cut',function (val) {
		return val.substr(0,8) + '...'
	})

</script>

<style>
#m_f_l{
	color:white;
	margin: .5rem 1rem;
  width: calc(100% - 2rem);
  padding:1rem 0;
}
#m_f_l h2{
	padding:.6rem 0;
}
#m_f_l .m_f_lItem {
	width:100%;
	height:6rem;
	display:block;
	overflow:hidden;
	padding:1rem 0;
}
#m_f_l .m_f_lItem .m_f_l-icon{
	width:8rem;
	height:8rem;
}
#m_f_l .m_f_lItem .m_f_l-icon a{
	margin:1rem auto 0;
	line-height:4rem;
	width:4rem;
	height:4rem;
	display:block;
	border-radius:2rem;
	border:1px solid rgba(255,255,255,.1);
	background:linear-gradient(to top, rgba(0,0,0,.1) , rgba(255,255,255,.1));
	box-shadow:2px 2px 3px rgba(0,0,0,.4),
						 -2px -2px 3px rgba(255,255,255,.6);
						 transform:rotate(-10deg);	
}
#m_f_l .m_f_lItem .m_f_l-icon span{
	text-align:left;
	padding:.5rem 0 0 .5rem;
}
.m_f_lItem-fashion .m_f_l-icon{
  background:linear-gradient(to bottom,rgba(255 ,70 ,101 ,1) ,rgba(255 ,70 ,101 ,.8) );
}
.m_f_lItem-boom .m_f_l-icon{
	background:linear-gradient(to bottom,rgba(33 ,242 ,203 ,1) ,rgba(33 ,242 ,203 ,.8) );
}
.m_f_lItem-hot .m_f_l-icon{
	background:linear-gradient(to bottom,rgba(253 ,162 ,73 ,1) ,rgba(253 ,162 ,73 ,.8) );
}

#m_f_l .m_f_lItem .m_f_l-cont{
	width:calc(100% - 8rem);
}
#m_f_l .m_f_lItem .m_f_l-cont ul{
	height:6rem;
	width:calc(100% - 5.2rem);
	padding-left:1rem;
}
#m_f_l .m_f_lItem .m_f_l-cont li{
	height:2.4rem;
	line-height:2.4rem;
	text-align:left;
}
#m_f_l .m_f_lItem .m_f_l-cont .play::before{
	content:'';
	width:0;
	height:0;
	border:.8rem solid transparent;
	border-left:1.2rem solid white;
	display:block;
	position:absolute;
	left:1.2rem;
	top:.7rem;
}
#m_f_l .m_f_lItem .m_f_l-cont .play{
	width:3rem;
	height:3rem;
	display:block;
	margin:1.5rem 0;
	border-radius:2rem;
	border:0.1rem solid white;
	position:relative;
	text-indent:-200rem;	
}
</style>