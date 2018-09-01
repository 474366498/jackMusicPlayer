<template>
	<div id="mContent"><!-- recommended 推荐-->
		<banner-component 
			v-bind:lists="bannerList"
			v-bind:time="bannerTime"
			>		
		</banner-component>

		<div class="newSongs">
			<vue-carrousel v-bind:items="CarrouselList"></vue-carrousel>
		</div>
		<div class="newSongs">
			<h2>推荐歌单 <a class="r"><span>></span></a></h2>
			<ul>
				<li class="remLi" v-for="remPlay in RecommendThePlaylist" v-bind:key="remPlay.id">
					<div class="remItem">
						<a v-bind:href="remPlay.source">
							<div class="remItemPic">
								<img v-bind:src="remPlay.src" />
								<p class="remItemPicBg"></p>
								<span class="remItemHot"> {{ remPlay.hot }}</span>
							</div>
							<p> {{ remPlay.title }} </p>
						</a>
					</div>
				</li>
			</ul>
		</div>

		<div class="newSongs">
			<h2>最近播放 <a class="r"><span>></span></a></h2>
			<ul class="songsList">
				<li v-for="(song, index) in songsList" v-bind:key="index">
					<router-link v-bind:to="{path:'play:' ,query:{id:index} }"> <!--play 还没有进行设置 -->
						<div class="songLine">
							<div class="songFl l">
								<h4> {{ song.song }} </h4>
								<p>
									<span> {{ song.singer }} </span>
									&nbsp;-&nbsp;
									<span> {{ song.special }} </span>
								</p>
								<span> {{ song.mp3 }} </span>
							</div>
							<div class="songPlay r">
								<span title="播放"><i></i></span>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		</div>

	</div>
</template>
<script>
//import Axios from 'axios'

import bannerComponent from '../com/bannerComponent.vue'
import vueCarrousel from '../com/vueCarrousel.vue'

	export default {
		created (){
			this.$ajax.get('/music/songsList')
				.then((res) => {
					this.songsList = res.data.data
				})	
		},
		data () {
			return {
				bannerList:[
					{"id":"1","title":"lade gaga","src":"http://wap.yesky.com/uploadImages/2012/335/4MVAF5MWZ3E8.JPG"},
					{"id":"2","title":"凤凰传奇","src":"http://www.zhonghuihotel.cn/uploadfile/2018/2/11/1518358328612.jpeg"},
					{"id":"3","title":"王丽坤","src":"http://service.cicphoto.com/yxwh/sjyd/ylbg/201407/W020140718500046326130.jpg"},
					{"id":"4","title":"林忆莲","src":"http://3cmusic.com/home/wp-content/uploads/2016/01/sandylam.jpg"},
					{"id":"5","title":"李宗盛","src":"http://5b0988e595225.cdn.sohucs.com/images/20180612/09259c8f880a4892adaf0fea21b81ab6.jpeg"},
					{"id":"6","title":"张学友","src":"http://www.wownews.tw/upload_images_b/2013/07/11/001/51dd854f61c7a.jpg"},
					{"id":"7","title":"周华健","src":"http://5b0988e595225.cdn.sohucs.com/images/20180702/d9da1fcdea114f6d9fbd87ac0dda703b.jpeg"},
					{"id":"8","title":"黄家驹","src":"http://dynamic-image.yesky.com/1080x-/uploadImages/2016/344/04/6410ODE87E55.jpg"}
				],
				bannerIndex:0,
				bannerTime:5000,
				RecommendThePlaylist:[
					{"id":"1","title":"心被填满，因为有你","src":"http://p1.music.126.net/zahbI50wLp8GrGLtjnKDog==/109951163390318292.webp?imageView&thumbnail=252x0&quality=75&tostatic=0&type=webp","hot":"160.8万","to":"","source":"https://music.163.com/m/playlist?id=2293013759"},
					{"id":"2","title":"电子情书丨万事俱备，只欠BGM","src":"http://p1.music.126.net/0zgNzzbeWf8NOFqPmivw8Q==/109951163380887301.webp?imageView&thumbnail=252x0&quality=75&tostatic=0&type=webp","hot":"65万","to":"","source":"https://music.163.com/m/playlist?id=2101683089"},
					{"id":"3","title":"核苟必备金属核精选！(Modern Metal/Core)","src":"http://p1.music.126.net/vzLkCs5NR5kRKD_SImOLVA==/18615831371992767.webp?imageView&thumbnail=252x0&quality=75&tostatic=0&type=webp","hot":"25万","to":"","source":"https://music.163.com/m/playlist?id=1984943793"},
					{"id":"4","title":"『梦境』在喧嚣繁闹的城市里沉浮","src":"http://p1.music.126.net/mGEQ3I-dnfWCBgXC0G_wmQ==/18736777650849051.webp?imageView&thumbnail=252x0&quality=75&tostatic=0&type=webp","hot":"93402","to":"","source":"https://music.163.com/m/playlist?id=2001920470"},
					{"id":"5","title":"【BGM】凯尔特Celtic&中世纪Medieval元素","src":"http://p1.music.126.net/jcaL_OOXuayJaL-E9DVszw==/3305131956029213.webp?imageView&thumbnail=252x0&quality=75&tostatic=0&type=webp","hot":"39.6万","to":"","source":"https://music.163.com/m/playlist?id=158632953"},
					{"id":"6","title":"『古风•歌名对诗』荏苒冬春去 未见青山老","src":"http://p1.music.126.net/vebEvoEZ3822-kQION3kmQ==/18503681186046936.webp?imageView&thumbnail=252x0&quality=75&tostatic=0&type=webp","hot":"78.9万","to":"","source":"https://music.163.com/m/playlist?id=2117469139"}
				],
				CarrouselList: [
					{"id":"1","title":"磁性男低音","src":"https://pic.xiami.net//images/collect/390/90/408446390_1530288007_HcMi.jpg@!c-185-185","href":""},
					{"id":"2","title":"古装的天下","src":"https://pic.xiami.net//images/collect/257/57/242951257_586bc5f75c3a0_0ALB_1483458039.jpg@!c-185-185","href":""},
					{"id":"3","title":"双重人格","src":"https://pic.xiami.net/images/collect/615/15/269280615_1488096513_uJIa.png@!c-185-185","href":""},
					{"id":"4","title":"粤听粤知味","src":"https://pic.xiami.net//images/collect/384/84/393734384_5b34d1572a674_TLPb_1530188119.jpg@!c-185-185","href":""},
					{"id":"5","title":"撩动心弦","src":"https://pic.xiami.net//images/collect/275/75/21637275_1436579988_ISiX.jpg@!c-185-185","href":""}
				],
				songsList:null
			}
		},
		components:{
			bannerComponent,
			vueCarrousel
		}
	}
</script>

<style>

	.secondNavs{
		background:rgba(0,0,0,.5);
		height:3rem;
	} 
	.secondNavs li{
		float:left;
		width:33.3%;
		text-align:center;
		line-height:3rem;
		font-size:200%;
		color:white;
	}
	.secondNavs li.secondNavClass{

	}
	.secondNavs li.secondNavSinges{

	}
	.secondNavs li.secondNavAlbum{

	}
	.newSongs h2{
		border-bottom:1px solid white;
		text-align:left;
		color:white;
		line-height:4rem;
		padding:0 1.5rem;
	}
	.newSongs ul{
		width:100%;
		padding:.5rem ;
		overflow:hidden;
		box-sizing:border-box;
	}
	.newSongs li.remLi{
		width:33.33%;
		padding:.5rem 0;
		float:left;
	}
	.newSongs li:nth-child(3n) .remItem{
		padding-right:.5rem;
	}
	.newSongs li:nth-child(3n-2) .remItem{
		padding-left:.5rem;
	}
	.newSongs li:nth-child(3n+2) .remItem{
		padding:0 .25rem;
	}
	.newSongs li .remItem a{
		color:white;
	}
	.newSongs .remLi .remItemPic{
		position:relative;
		box-shadow:.1rem .1rem .3rem rgba(0,0,0,.3);
	}
	.newSongs .remLi .remItemPic + p{
		width:100%;
		height:1.6rem;
		line-height:1.6rem;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.newSongs .remLi .remItemPic img{
		width:100%;
		height:auto;
	}
	.newSongs .remLi .remItemPic .remItemPicBg{
		width:100%;
		height:4rem;
		position:absolute;
		left:0;
		top:0;
		background:linear-gradient(to bottom,rgba(0,0,0,.4) 0, rgba(0,0,0,.1) 60% ,rgba(0,0,0,0) 100% );
	}
	.newSongs .remLi .remItemPic .remItemHot::before{
		content:"";
		width:1.6rem;
		height:1.6rem;
		display:inline-flex;
		background-image:url(../../assets/common/images/earpiece.svg);
		background-size:1.6rem 1.6rem;
	}
	.newSongs .remLi .remItemPic .remItemHot{
		line-height:1.6rem;
		display:inline-flex;
		position:absolute;
		right:.5rem;
		top:.6rem;
	}

	.songsList li {
		padding:.5rem 1.5rem;
		overflow:hidden;
		display:block;
		text-align:left;
	}
	.songsList li .songLine{
		display:flex;
		flex:1 1 auto;
		border-bottom:1px solid white;
		padding-bottom:.8rem;
	}
	.songsList li .songLine .songFl {
		width:0;
		box-flex:1;
		flex:1 1 auto;
	}
	.songsList li .songLine .songFl h4,.songsList li .songLine .songFl p{
		overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    word-break: normal;
	}
	.songsList li .songLine .songFl h4{
		font-size:140%;
		line-height:2.1rem;
		text-shadow:1px 1px 2px #000;
		color:white;
	}
	.songsList li .songLine .songFl p{
		color:white;
	}
	.songsList li .songLine .songPlay{
		display:flex;
		align-items:center;
		padding:0 .8rem;
	}
	.songsList li .songLine .songPlay span{
		width:2rem;
		height:2rem;
		border-radius:2rem;
		border:.2rem solid white;
		display:flex;
		opacity:.7;
	}
	.songsList li .songLine .songPlay span i{
		width:0;
		height:0;
		border:.6rem solid transparent;
		border-left:.8rem solid white;
		margin:.4rem 0 0 .7rem;
	}
</style>