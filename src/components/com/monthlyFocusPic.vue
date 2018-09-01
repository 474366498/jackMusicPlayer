<template>
	<div class="monthlyFocusPic m_f_p">
		<h2> {{ lists[0].heading }} </h2>
		<div class="m_f_pItem" 
		v-for="(list,index) in lists[0].main"
		v-bind:key="index"
		v-bind:class=" 'm_f_pItem-'+ list.className ">
			<div class="m_f_pItemText">
				<p> {{ list.title }} </p>
				<span> {{ list.update }} </span>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		props :{
			lists : {
				type : Array ,
				default : () => [] 
			}
		},
		data (){
			return {
				msg : "monthlyFocusPic.vue"
			}
		}
	}
</script>

<style>
.m_f_p{
	color:white;
	margin: .5rem 1rem;
  width: calc(100% - 2rem);
  padding:1rem 0;
  overflow:hidden;
}
.m_f_p h2{
	padding:.6rem 0;
}

.m_f_p .m_f_pItem-usa{
	background-color:#0C0201;
	background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531744819524&di=0bd03418347877ab9c6992a711a5658b&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Fradio_cover%2F2014%2F08%2F18%2F13796681844465410_320x320.jpg);
}
.m_f_p .m_f_pItem-hito{
	background-color:#CC1D2C ;
	background-image:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2294933801,440333202&fm=27&gp=0.jpg);
}
.m_f_p .m_f_pItem-hong{
	background-color:#273468 ;
	background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531803360128&di=c122430052d4e8a2f939f3c654195545&imgtype=0&src=http%3A%2F%2Fimg.xiami.net%2Fimages%2Fcollect%2F982%2F82%2F39288982_1420204976_v7kJ.jpg);
}
.m_f_p .m_f_pItem-uk{
	background-color:#140D31 ;
	background-image:url(http://img.25pp.com/uploadfile/soft/images/2015/0329/20150329032334475.jpg);
}
.m_f_p .m_f_pItem-japan{
	background-color:#27398F  ;
	background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531745154266&di=91be8967e038d44e019e43911f58db8a&imgtype=0&src=http%3A%2F%2Fimg.xiami.net%2Fimages%2Fcollect%2F391%2F91%2F48880391_1430045466_TKiz.jpg);
}
.m_f_p .m_f_pItem-korea{
	background-color:#E30278 ;
	background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531745198036&di=8d6edd0d6e2c213368ae63d541c1c990&imgtype=0&src=http%3A%2F%2Fpic.xiami.net%2Fimages%2Fcollect%2F389%2F89%2F36501389_1414515919_2KCW.jpg);
}
.m_f_p .m_f_pItem-a{
	background-color:#FF6702;
	background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531800149983&di=ebe08161c0167cf6988783d8d9dfc02d&imgtype=0&src=http%3A%2F%2Fis4.mzstatic.com%2Fimage%2Fthumb%2FPurple69%2Fv4%2F2d%2F70%2Fc6%2F2d70c651-f3c3-a821-312d-a6ead888d64b%2Fsource%2F512x512bb.jpg);
}
.m_f_p .m_f_pItem-b{
	background-color:#667609 ;
	background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531800335114&di=f045939c61618cdecc55fee1a601bef8&imgtype=0&src=http%3A%2F%2Fimg.mymusic.net.tw%2Fmms%2Falbum%2FL%2F644%2F415644.jpg);
}
.m_f_p .m_f_pItem-c{
	background-color:#F40390;
	background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531802412290&di=89f79bece7c6ef2cf50544b37cdb725b&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fapp%2Ficon%2F20160202%2F1454359030852020.jpg);
}
.m_f_p .m_f_pItem-d{
	background-color:#B92E33 ;
	background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531800469638&di=4dbc03a496fcb8cfaca31232d6be4c27&imgtype=0&src=http%3A%2F%2Fis4.mzstatic.com%2Fimage%2Fpf%2Fus%2Fr30%2FPurple%2Fv4%2Fc4%2F95%2F0b%2Fc4950b0a-cc77-ba79-09e7-3c134508a80c%2Fmzl.pxtipoud.png);
}
.m_f_p .m_f_pItem{
	width:32%;
	float:left;
	min-height:13rem;
	margin:2% 0 0;
	background-size:100% auto;
	background-repeat:no-repeat;
	position:relative;
}
.m_f_p .m_f_pItem:nth-child(3n){
	margin:2% 2% 0;
}
.m_f_p .m_f_pItem .m_f_pItemText{
	position:absolute;
	bottom:0.5rem;
	left:0;
	right:0;
	padding:0 .5rem;
	text-align:center;
}

.m_f_p .m_f_pItem .m_f_pItemText span {
	font-size:.8rem;
	color:rgba(255,255,255,.6);
}
</style>