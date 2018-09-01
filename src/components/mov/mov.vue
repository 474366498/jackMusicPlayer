<template>
	<div id="mContent" v-on:click="closeSelect()">
		<div class="movTab">
			<div class="movTabItem" 
				v-for="(item, index) in movTabs"
				v-bind:class="{'active':index===tabIndex}"
				v-bind:key="index"
				v-on:click="changeTabIndex(index)"
			>
				<a> {{ item.title }} </a>
			</div>
		</div>
		<div class="movFiltrate">
			<transition name="fade">
				<div class="movWuli" v-show="!tabIndex">
					<div class="movWuliItem"
						v-for="(item , index) in wuli"
						v-bind:key="index" 
					>
						<a v-bind:href="item.http">
							<div class="movWuliItemPic">
								<img v-bind:src="item.pic" />
							</div>
							<div class="movWuliItemTxt">
								<p v-bind:title="item.title"> {{ item.title }} </p>
								<p>演唱: {{ item.author }}</p>
							</div>	
						</a>
					</div>
				</div>
			</transition>
			<transition name="fade">
				<div class="movWv" v-show="tabIndex">
					<div class="movWvTabs">
						<div class="tab l">
							<ul>
								<li 
									v-for="(item , index) in mv"
									v-bind:key="index"
									v-bind:class="{'on':index===mvIndex}"
									v-on:click="changeMvIndex(index)"
								> <a> {{ item.explain }} </a></li>
							</ul>
						</div>
						<div class="select r">
							<a v-on:click.stop="changeMvSorts($event)" v-html="mvSortsFlg ? '筛选<i></i>' : '收起<i class=on></i>'"> 
							</a>
						</div>
						<div class="selectMain" v-show="mvSortsFlg">
							<a v-for="(ele,ind) in mvSorts"
								 v-bind:key="ind"
								 v-on:click="filterMv(ele)"
							>
								{{ ele.explain }}
							</a>
						</div>
					</div>
					<div class="movWvTabsView">
						<div class="movWvItem" 
							v-for="(el,index) in filterMves"
							v-bind:key="index"
							v-show="el.show" 
						>
			
							<a>
								<div class="movWvItemPic">
									<img v-bind:src="el.pic" />
								</div>
								<div class="movWvItemTxt">
									<p v-bind:title="el.title">{{ el.title }} </p>
									<p>演唱: {{ el.singer }} </p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				msg : "mov.vue",
				movTabs : [
					{"id":"1","title":"小视频","class":"wuli"},
					{"id":"2","title":"音乐MV","class":"mv"}
				],
				tabIndex:1,
				wuli : [  // 小视频
					{
						"id":"1",
						"title":"《次元声放送》晋级赛开始！相约二次元配音！",
						"pic":"https://cs-op.douyucdn.cn/vod-cover/2018/07/19/355e3315ec292479a62f7b9ddd515444.jpg",
						"duration":"110",
						"hots":"5411",
						"author":"机智的紫逸君",
						"http":"https://v.douyu.com/show/0Q8mMYajbmLM49Ad",
						"mv":""
					},
					{
						"id":"2",
						"title":"【亮声Open】粤语《最爱》香港玉女周慧敏经典老歌 ❤",
						"pic":"https://cs-op.douyucdn.cn/vod-cover/2018/07/19/5017f820b1aff804b6bc657e859af4d3.jpg",
						"duration":"257",
						"hots":"6699",
						"author":"岩盐芝士baby",
						"http":"https://v.douyu.com/show/jNBdvnp6BLBME2yw",
						"mv":""
					},
					{
						"id":"3",
						"title":"不同凡响LiveMusic - 《往后余生》",
						"pic":"https://cs-op.douyucdn.cn/vod-cover/2018/07/13/7be6fd4a93d54e177bcc91134f17866a.jpg",
						"duration":"237",
						"hots":"5381",
						"author":"不同凡响LiveMusic",
						"http":"https://v.douyu.com/show/n8GzMXGELGD76qyP",
						"mv":""
					},
					{
						"id":"4",
						"title":"【纳豆nado】川普版《火》 糟了！是心肌梗塞的感觉",
						"pic":"https://cs-op.douyucdn.cn/vod-cover/2018/07/24/d3218d8d6a2bdb083f949128c3ac8b5f.jpg",
						"duration":"227",
						"hots":"1702",
						"author":"daturababy",
						"http":"https://v.douyu.com/show/XqeO74xVqBX7xywG",
						"mv":""
					},
					{
						"id":"5",
						"title":"今天开播时间待定吧 楼上装修六点多就开始了 噪音太大中午他们",
						"pic":"https://cs-op.douyucdn.cn/vod-cover/2018/07/27/4b5be591dc78f9ded58f39bcafe7d91d.jpeg",
						"duration":"16",
						"hots":"1591",
						"author":"DY烁哥",
						"http":"https://v.douyu.com/show/JmbBMkYOoDYv40XA",
						"mv":""
					},
					{
						"id":"6",
						"title":"最近洗脑神曲【SOLO】练习片段，大概三个课程可以出成品舞。",
						"pic":"https://cs-op.douyucdn.cn/vod-cover/2018/07/26/367dde7d826f247c398f8ea6ded4e9b0.jpeg",
						"duration":"26",
						"hots":"14007",
						"author":"软妹小九九丶",
						"http":"https://v.douyu.com/show/LDBbMA4lmZy7yJRP",
						"mv":""
					},
					{
						"id":"7",
						"title":"今天峰哥和任老师吃独食，学跳舞去了",
						"pic":"https://cs-op.douyucdn.cn/vod-cover/2018/07/26/4330832fc2b849fbaf4fb6220840ee79.jpg",
						"duration":"42",
						"hots":"9089",
						"author":"三号丶小浩",
						"http":"https://v.douyu.com/show/EO0XvNplGaoMDrBd",
						"mv":""
					},
					{
						"id":"8",
						"title":"想吃糖，那就不要眨眼睛[调皮][调皮][调皮]今天的作业",
						"pic":"https://cs-op.douyucdn.cn/vod-cover/2018/07/27/a3c489b748de6d8e7a587ea56e2fbc56.jpeg",
						"duration":"15",
						"hots":"1340",
						"author":"酱油之神千亿",
						"http":"https://v.douyu.com/show/0zZVvPzgo02MO4E2",
						"mv":""
					}
				],
				mvSorts:[
					{"id":"1","acronym":"c","explain":"华语"},
					{"id":"2","acronym":"ea","explain":"欧美"},
					{"id":"3","acronym":"j","explain":"日本"},
					{"id":"4","acronym":"k","explain":"韩国"},
					{"id":"5","acronym":"ms","explain":"音乐人"},
					{"id":"6","acronym":"o","explain":"其它"}
				],
				mvSortsFlg:false,
				mv:[
					{
						"id":"1",
						"acronym":"r",
						"explain":"推荐",
						"childrens":[
							{
								"id":"1001",
								"title":"My Dear You",
								"singer":"未知",
								"pic":"https://vthumb.ykimg.com/054202015A0C77FD8B78D21F0307B77D",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMTkxOTg3MTg3Ng==.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"o"
							},
							{
								"id":"1002",
								"title":"爱我别走 北京演唱会现场版",
								"singer":"未知",
								"pic":"https://vthumb.ykimg.com/054201015682AF7D6A0A4804E1BA5785",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMTQyOTQwODk1Mg==.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"c"
							},
							{
								"id":"1003",
								"title":"Excuse Me 音乐中心现场版",
								"singer":"韩国mm",
								"pic":"https://vthumb.ykimg.com/05420708588F186A6F0A889CC4A2F286",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMTkzMDQ1NzMwNA==.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"k"
							},
							{
								"id":"1004",
								"title":"I Got You",
								"singer":"碧碧·雷克萨",
								"pic":"https://vthumb.ykimg.com/054202015A0C78D18B78D21F01023402",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMTk0NDE2OTAwMA==.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"ea"
							},
							{
								"id":"1005",
								"title":"You Belong With Me NFL开季典礼现场版",
								"singer":"泰勒·斯威夫特",
								"pic":"https://vthumb.ykimg.com/05420208526AF7AC6A0A4D3E26E8B0D9",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMjA1MTk0NDUy.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"ea"
							},
							{
								"id":"1006",
								"title":"夏奇拉巴黎演唱会",
								"singer":"音乐人",
								"pic":"https://vthumb.ykimg.com/054202015A0CEFF88B78D21F0300C173",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XNTE5NzgyNzky.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"ms"
							},
							{
								"id":"1007",
								"title":"La La La",
								"singer":"未知",
								"pic":"https://vthumb.ykimg.com/05420508537E0F2E6A0A42506D3E05B3",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XNzE1NjY2MDIw.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"ea"
							}
						]
					},
					{
						"id":"2",
						"acronym":"h",
						"explain":"最热",
						"childrens":[
							{
								"id":"2001",
								"title":"兄弟",
								"singer":"五月天",
								"pic":"https://vthumb.ykimg.com/054201015A4914EE8B7B44962990C0A2",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMzI4MDgyMzgyMA==.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"c"
							},
							{
								"id":"2002",
								"title":"Turn口罩 现场版",
								"singer":"谢金燕",
								"pic":"https://vthumb.ykimg.com/054204085A4916A000000153F506BD5A",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMzI4MDgzMTgwMA==.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"c"
							},
							{
								"id":"2003",
								"title":"Wolf Baby",
								"singer":"TRCNG",
								"pic":"http://vthumb.ykimg.com/054201015A4AF01AADD0169ED7BA53DD",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMzI4NDA0MzI0MA==.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"k"
							},
							{
								"id":"2004",
								"title":"Toxic ABC现场版",
								"singer":"布兰妮·斯皮尔斯",
								"pic":"https://vthumb.ykimg.com/054204085A4CC6871E59877B03020018",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMzI4ODU1NjQ4NA==.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"ea"
							},
							{
								"id":"2005",
								"title":"Bonita",
								"singer":"J Balvin",
								"pic":"https://vthumb.ykimg.com/054204085A4D94760000012A4609B319",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMzI4OTg1OTc4MA==.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"ea"
							},
							{
								"id":"2006",
								"title":"YES 音乐银行现场版",
								"singer":"Live High",
								"pic":"https://vthumb.ykimg.com/054201015A4F3FB7ADCA619AD6D287CC",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMzI5MzUwMjYwMA==.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"k"
							},
							{
								"id":"2007",
								"title":"Fly high 亚洲梦想演唱会现场版",
								"singer":"Dreamcatcher",
								"pic":"https://vthumb.ykimg.com/054201015A4FC0F1ADCA619AD66741CA",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMzI5NDYxMzQxMg==.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"k"
							},
							{
								"id":"2008",
								"title":"BBoom BBoom 冠军秀现场版",
								"singer":"MOMOLAND",
								"pic":"https://vthumb.ykimg.com/054202015A5F39D00000011CCC067409",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMzMyNzE3NzMwMA==.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"k"
							},
							{
								"id":"2009",
								"title":"Ти Мій Всесвіт",
								"singer":"Sonya Kay",
								"pic":"https://vthumb.ykimg.com/054204085A4F2A1A0000017D0306668B",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMzI5MzI1NjgxNg==.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"o"
							},
							{
								"id":"2010",
								"title":"Coming-Home",
								"singer":"Sheppard",
								"pic":"https://vthumb.ykimg.com/054202015A6C648200000176E50198ED",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMzM1ODQ2MDQ2MA==.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"o"
							},
							{
								"id":"2011",
								"title":"《曾经我也想过一了百了》现场版",
								"singer":"中岛美嘉",
								"pic":"http://vthumb.ykimg.com/054201015A8945AD8B7B44A0D0A3C70A",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMzQwOTU1MzEwOA==.html?spm=a2h0k.11417342.soresults.dposter",
								"show":true,
								"sort":"j"
							},
							{
								"id":"2012",
								"title":"Galaxy Supernova 演唱会现场版",
								"singer":"少女时代",
								"pic":"https://vthumb.ykimg.com/054208085338DCF06A0A4C050C1BEB83",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XNjkyNDc5MzA0.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"j"
							}
						]
					},
					{
						"id":"3",
						"acronym":"n",
						"explain":"最新",
						"childrens":[
							{
								"id":"3001",
								"title":"忍ぶ雨",
								"singer":"伍代夏子",
								"pic":"https://vthumb.ykimg.com/054202015A1866F88B78D21F020C0F73",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMzAwNjg0NTYw.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"j"
							},
							{
								"id":"3002",
								"title":"First Love 原音重现演唱会现场版",
								"singer":"宇多田光",
								"pic":"https://vthumb.ykimg.com/0542050851A7E9206A0A480458E70F8D",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMzA2NDE4ODky.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"j"
							},
							{
								"id":"3003",
								"title":"外婆的澎湖湾",
								"singer":"蔡琴",
								"pic":"https://vthumb.ykimg.com/0542030851A107E16A0A470A28A32348",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XNTAzNjMyMzgw.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"c"
							},
							{
								"id":"3004",
								"title":"当爱已成往事 十年回顾暂别演唱会现场版",
								"singer":"林忆莲",
								"pic":"https://vthumb.ykimg.com/05420608530E68816A0A47449C0783B0",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XNTQyMDgwNjg4.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"c"
							},
							{
								"id":"3005",
								"title":"新鸳鸯蝴蝶梦",
								"singer":"费玉清",
								"pic":"https://vthumb.ykimg.com/0542020851DAF3706A0A43632B245F80",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMjA4OTQ4NTIw.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"c"
							},
							{
								"id":"3006",
								"title":"祝你一路顺风",
								"singer":"小虎队",
								"pic":"https://vthumb.ykimg.com/0542030851A911466A0A470A264AFB59",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMjk4MjIwNTIw.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"ms"
							},
							{
								"id":"3007",
								"title":"kareuma 现场版",
								"singer":"李贞贤",
								"pic":"https://vthumb.ykimg.com/054202015A0BFC438B78D21F040AAD02",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMzM2OTA5Mzcy.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"k"
							},
							{
								"id":"3008",
								"title":"We Are The Future 歌谣大战现场版 ",
								"singer":"H.O.T",
								"pic":"https://vthumb.ykimg.com/0542070851A3AEC46A0A3F1858B76B41",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMzg3MzQ1NTY0.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"k"
							},
							{
								"id":"3009",
								"title":"Dangerous 历史之旅世界巡演现场版",
								"singer":"迈克尔·杰克逊",
								"pic":"https://vthumb.ykimg.com/054202015A0BF76E8B78D21F0103F0C3",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMzE5NjEzNjA0.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"ea"
							},
							{
								"id":"3010",
								"title":"When You Believe 官方版",
								"singer":"惠特尼·休斯顿 / 玛丽亚·凯莉",
								"pic":"https://vthumb.ykimg.com/0542080851AA57F96A0A4A045E52A0FA",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMjk1NjIzODY0.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"ea"
							},
							{
								"id":"3011",
								"title":"I Don't Want To Miss A Thing",
								"singer":"空中铁匠乐队",
								"pic":"https://vthumb.ykimg.com/054202015A0D970D8B78D21F01090BBF",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XNTU4MTMxMzk2.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"ea"
							},
							{
								"id":"3012",
								"title":"No Bull演唱会",
								"singer":"AC/DC",
								"pic":"https://vthumb.ykimg.com/0542070851F8F37F6A0A4071DD77A6F2",
								"mv":"",
								"http":"http://v.youku.com/v_show/id_XMTUxOTUyODM2MA==.html?spm=a2h1n.8251845.0.0",
								"show":true,
								"sort":"o"
							}
						]
					}
				],
				mvIndex:0
			}
		},
		computed : {
			filterMves () {
				this.mv[this.mvIndex].childrens.forEach( (o) => {
					o.show = true 
				})
				return this.mv[this.mvIndex].childrens
			} 
		},
		methods : {
			changeTabIndex (num) {
				this.tabIndex = num
			},
			changeMvSorts () {  // 显示/隐藏
				this.mvSortsFlg = !this.mvSortsFlg
			},
			closeSelect () {
				this.mvSortsFlg = false
			},
			filterMv (el) {
				let mvKey = el.acronym
				this.filterMves.forEach( (obj,i) => {
					if (mvKey !== obj.sort) {
						obj.show = false
					} else {
						obj.show = true
					}
				})
				this.mvSortsFlg = false
			},
			changeMvIndex (num) {
				this.mvIndex = num
			}
		}
	}

	/*
小视频 
	一排两个
音乐MV
   推荐 最热 最新   在子内容中做标记(类别--华语 欧美 日本 韩国 音乐人 其它)
   类别 
   		华语 欧美 日本 韩国 音乐人 其它
	*/
</script>

<style>
.movTab{
	padding:0 1.5rem;
	overflow:hidden;
}
.movTab .movTabItem {
	width:50%;
	float:left;
}
.movTab .movTabItem a{
  padding: .7rem 0;
  width:100%;
  background: #dfdfdf;
  font-size:1.4rem;
  font-weight:900;
  color:#696969;
  display: inline-block;
  background-size: 2rem auto;
  background-repeat: no-repeat;
  background-position: 1rem center;
  border-bottom:2px solid transparent;
}
.movTab .movTabItem.active a{
	border-bottom:2px solid #CDCD00;
	color:#CDCD00;
	background:#fff;
}

.movFiltrate{
	color:white;
	padding:2rem 1.5rem 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.movWuli {
	width:100%;
	overflow:hidden;
}
.movWuliItem{
	width:50%;
	float:left;
	overflow:hidden;
	box-sizing:border-box;
}
.movWuliItem:nth-child(2n){
	padding:.5rem 0 .5rem .5rem ;
}
.movWuliItem:nth-child(2n+1){
	padding:.5rem .5rem .5rem 0;
}
.movWuliItemPic {
	width:100%;
}
.movWuliItemPic img{
	width:100%;
	height:auto;
}
.movWuliItemTxt{

}
.movWuliItemTxt p{
	color:#fff;
	line-height:1.6rem;
	height:1.6rem;
	text-align:left;
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
	text-indent:.5rem;
}

.movWv .movWvTabs{
	overflow:hidden;
	background:#fff;
	color:#333;
	padding:.6rem 0 0;
}
.movWv .movWvTabs .tab , .movWv .movWvTabs .select{
	display:flex;
	margin-bottom:.5rem;
}
.movWv .movWvTabs .tab li{
	float:left;
	padding:.5rem 0;
}
.movWv .movWvTabs .tab li a{
	border-right:1px solid #999;
	padding:0 1rem;
}
.movWv .movWvTabs .tab li.on a{
	color:#333;
	font-weight:900;
}
.movWv .movWvTabs .tab li:last-child > a{
	border-right-color:transparent;
}
.movWv .movWvTabs .select a{
	padding:.5rem 2rem .5rem .5rem;
	border:1px solid red;
	border-radius:.5rem;
	margin-right:.5rem;
	position:relative;
}
.movWv .movWvTabs .select a i::before{
	content:'';
	border:.5rem solid transparent;
	border-top:.7rem solid red;
	position:absolute;
	display:block;
	top:.2rem;
}
.movWv .movWvTabs .select a i::after{
	content:'';
	border:.5rem solid transparent;
	border-top:.7rem solid white;
	position:absolute;
	display:block;
	top:-0.1rem;
}
.movWv .movWvTabs .select a i.on::before{
	content:'';
	border:.5rem solid transparent;
	border-bottom:.7rem solid red;
	position:absolute;
	display:block;
	top:-0.4rem;
}
.movWv .movWvTabs .select a i.on::after{
	content:'';
	border:.5rem solid transparent;
	border-bottom:.7rem solid white;
	position:absolute;
	display:block;
	top:-0.2rem;
}
.movWv .movWvTabs .select a i{
	width:1rem;
	height:1rem;
	display:block;
	background:;
	position:absolute;
	right:.5rem;
	top:.75rem;
}
.movWv .movWvTabs .selectMain{
	width:100%;
	clear:left;
	display:inline-flex;
	padding:.5rem 0;
	margin-top:.5rem;
	text-align:left;
	overflow:hidden;
	background:#f0f0f0;
}
.movWv .movWvTabs .selectMain a{
	float:left;
	padding:.5rem 1rem;
}
.movWv .movWvTabsView {
	padding-top:1.5rem;
	overflow:hidden;
}
.movWv .movWvTabsView .movWvItem{
	width:50%;
	float:left;
	overflow:hidden;
	box-sizing:border-box;
}
.movWv .movWvTabsView .movWvItem:nth-child(2n){
	padding:.5rem 0 .5rem .5rem;
}
.movWv .movWvTabsView .movWvItem:nth-child(2n+1){
	padding:.5rem .5rem .5rem 0;	
}
.movWv .movWvTabsView .movWvItem img{
	width:100%;
	height:auto;
}
.movWv .movWvTabsView .movWvItem p{
	height:1.6rem;
	line-height:1.6rem;
	text-align:left;
	text-indent:.5rem;
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
}
</style>
