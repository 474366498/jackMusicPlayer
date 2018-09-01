<template>
	<div id="mContent"> <!-- 歌单  -->
		<div id="movement">
			<div class="movementHead">
				<ul class="movementUl" 
					ref="movementUl" 
					v-on:touchstart="touchStart"
					v-on:touchmove="touchMove"
					v-on:touchend="touchEnd">
					<router-link class="movementItem" 
						v-for="(list , index ) in categores"
						v-bind:key="index" 
						v-on:tap="prit(list)"
						v-bind:to="{path:'/musicSos/'+list.link,query:{id:list.id}}" >
						{{ list.title }}
					</router-link> 
				</ul>
			</div>
			<div class="movementContent">
				<router-view></router-view> 
			</div>
			<div class="Testimonial">
				<h2> {{ Testimonial.title }} </h2>
				<div class="TestimonialList">
					<div class="TestimonialItem"
						v-for="(item , index) in Testimonial.main"
						v-bind:key="index"
					>
						<a v-bind:title="item.title">
							<div class="TestimonialItemInfo">
								<img 
									v-bind:src="item.pic" 
									v-bind:alt="item.title" 
								/>
								<span class="hot"> {{ item.hots }} </span>
								<span class="createdate"> {{ item.createdate }} </span>
								<span class="play"></span>
							</div>
							<p>
								<a class="l"> {{ item.title }} </a>
								<a class="r"> {{ item.producer}} </a>
							</p>
						</a>
						
					</div>
				</div>
			</div>
		</div>
		

	</div>
</template>

<script>


var screenWidth = document.body.clientWidth
	export default {
		created (){
			this.$ajax.get('/sos/cat')
				.then((res) => {
					//this.categores = res.data.data
					var datas = res.data.data
					this.categoresArr.forEach((i) => {
						datas.forEach((item) => {
							if (item.id === i){
								this.categores.push(item)
							}	
						})
					})
					this.$refs.movementUl.style.width = this.categores.length * 8 + 'rem'
					this.$refs.movementUl.style.height = '3rem'
				})
		},
		data () {
			return {
				msg : "sos.vue",
				categores:[],
				categoresArr:["1","1107","1408","1402","1403","1409","1404","1306","1205","1505","1514"] ,
				touch : {} ,
		  	touchLeft : 0,
				tabs:[   // tabs 选项卡通 
					{id:"1",title:"推荐"},
					{id:"2",title:"精选"},
					{id:"3",title:"最热"},
					{id:"4",title:"最新"},
					{id:"5",title:"主题"}
				],
				Testimonial : {    //推荐歌单 
					"title":"musicPlayer推荐歌单",
					"main": [
						{
							"id":"1",
							"title":"第二故乡，是一首悲伤的歌",
							"pic":"https://pic.xiami.net//images/collect/201/1/416949201_1532230424_R9Vd.jpg@!c-100-100",
							"producer":"Livyx",
							"createdate":"2018-07-20",
							"hots":"8920516",
							"childrens":[
								{},{},{},{},{},{},{},{},{}
							]
						},
						{
							"id":"2",
							"title":"紫色“是个很特别的...颜色。” 特调夏夜慢热集~ (50)",
							"pic":"https://pic.xiami.net//images/collect/645/45/410176645_1529506702_Qpy0.jpg@!c-100-100",
							"producer":"Aymee",
							"createdate":"2018-06-20",
							"hots":"8742041",
							"childrens":[
								{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
							]
						},
						{
							"id":"3",
							"title":"【挚爱欧美节奏系】 精品节奏小曲 星级推荐 单曲循环 (40)",
							"pic":"https://pic.xiami.net//images/collect/432/32/414561432_1532059498_B8sd.jpg@!c-100-100",
							"producer":"King Tracy",
							"createdate":"2018-07-11",
							"hots":"897510",
							"childrens":[
								{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
							]
						},
						{
							"id":"4",
							"title":"【国风】身着白衣待你乘着琴声归来 (32)",
							"pic":"https://pic.xiami.net//images/collect/229/29/401972229_1527406143_wEzj.jpg@!c-100-100",
							"producer":"LULA酱 ",
							"createdate":"2018-05-21",
							"hots":"56462126",
							"childrens":[
								{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
							]
						},
						{
							"id":"5",
							"title":"听些欢乐的节奏愉悦自己",
							"pic":"https://pic.xiami.net//images/collect/177/77/398725177_5b437eddb4bea_r0ZA_1531150045.jpg@!c-100-100",
							"producer":"798044655",
							"createdate":"2018-05-14",
							"hots":"87981465",
							"childrens":[
								{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
							]
						},
						{
							"id":"6",
							"title":"虾米的独家记忆｜感谢人海中的相遇",
							"pic":"https://pic.xiami.net/images/appv5/common/39343/5b541defbf585_qSoY_1532239343.jpg@!c-100-100",
							"producer":"我是小毛驴",
							"createdate":"2018-05-02 ",
							"hots":"5646502",
							"childrens":[
								{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
							]
						}
					]
				}
			}
		},
		components : {
			//sosMoveMent
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
			prit (obj) {
				console.log("vue",obj)
			}
		},
		mounted () {
			/*this.$refs.movementUl.style.width = this.categores.length * 8 + 'rem'
			this.$refs.movementUl.style.height = '3rem'*/
		}
	}
</script>

<style>
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

	.Testimonial h2 {
		text-align:left;
		text-indent:2rem;
		line-height:4rem;
	}
	.TestimonialList .TestimonialItem{
		width:50%;
		float:left;
		position:relative;
		overflow:hidden;
	}
	.TestimonialList .TestimonialItem .TestimonialItemInfo span{
		position:absolute;
	}
	.TestimonialList .TestimonialItem img {
		width:calc(100% - 1rem);
		height:100%;
	}
	.TestimonialList .TestimonialItem .hot{
		left:1rem;
		top:1rem;
		color:white;
	}
	.TestimonialList .TestimonialItem .createdate{
		left:1rem;
		bottom:3rem;
	}
	.TestimonialList .TestimonialItem .play::before{
		content:'';
		border:1rem solid transparent;
		border-left:1.4rem solid white;
		position:absolute;
		left:1rem;
		top:.5rem;
	}
	.TestimonialList .TestimonialItem .play{
		width:3rem;
		height:3rem;
		border-radius:2rem;
		display:block;
		bottom:3rem;
		right:1rem;
		background:radial-gradient(rgba(0,0,0,.6) , rgba(0,0,0,.7));
	}
	.TestimonialList .TestimonialItem p{
		padding:0 .5rem;
	}
	.TestimonialList .TestimonialItem p >a{
		height:2rem;
		line-height:2rem;
		display:inline-block;
	}
	.TestimonialList .TestimonialItem p >a:first-child{
		width:8rem;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
</style>
