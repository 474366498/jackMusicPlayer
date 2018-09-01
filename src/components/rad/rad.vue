<template>
	<div id="mContent"><!-- recommended 电台-->
		<div id="rad" class="rad">
			<div class="radControl">
				<div 
				  v-for="(radItem , radI) in radControl"
				  v-bind:key="radI"
					v-bind:class="'radControlItem '+ radItem.className"
				>
					<a> {{ radItem.title }} </a>
				</div>
			</div>
			<div class="radSelect">
				<div class="radSelectHead">
					<rad-select-com 
						v-bind:selects="radSelect"				
						v-on:getRadSelect="changeIndex"
						v-if="radSelect"
					></rad-select-com>
				</div>
			</div>

			<div class="radOptions">
				<div class="radOptionItem"
						 v-for="(item , num) in radOption.main"
						 v-bind:key="num"
				>
					<a>
						<img v-bind:src="item.pic" />
						<p> <strong>{{ item.title }} </strong> <br> 当前热度<span class="hot"> {{ item.hot | wan }} </span> </p>	
					</a>
				</div>
			</div>
		</div>	
		<!-- <code style="color:white;"> {{ JSON.stringify(radOption) }} </code> -->
	</div>	
</template>

<script>
	import Vue from 'vue'
	import radSelectCom from '../com/select.vue'
	export default {
		created () {
			this.$ajax.get('/rad/select')
				.then((res) => {
					//console.log(res.data.data)
					this.radSelect = res.data.data
					this.radOption = res.data.data[this.radControlIndex]
				})
		},
		data () {
			return {
				msg : "rad.vue",
				radControl:[
					{
						"id":"1",
						"title":"猜你喜欢",
						"className":"radLike",
						"link":"直接进入播放界面",
						"children":[
								{   "id":"1",
									"singer":"李宗盛",
									"song":"山丘 (Live)",
									"pic":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1214654864,1865719270&fm=15&gp=0.jpg",
									"music":"../../static/music/1-safdjlsfjadla.66e015a.mp3",
									"duration":"349",
									"special":"跨年演唱会2013-2014 华语篇",
									"source":"https://music.163.com/#/artist?id=3683"
								},

								{   "id":"2",
										"singer":"李宗盛",
										"song":"给自己的歌",
										"pic":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530870009198&di=5711cf80612d70b945eee96f3c63dd6a&imgtype=0&src=http%3A%2F%2Fwww.sonarmusic.cn%2Fcatalog%2F6b3f7a9b04.jpg",
										"music":"../../static/music/2-lakjflksajkflkdsja.mp3",
										"duration":"280",
										"special":"南下专线",
										"source":"https://music.163.com/#/artist?id=3683"
								},

								{   "id":"3",
										"singer":"李宗盛",
										"song":"鬼迷心窍 - (电视剧《末代皇孙》主题曲)",
										"pic":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530870121898&di=7d6737ddfa0e62a7a07c1d7f83a8771d&imgtype=0&src=http%3A%2F%2Fimages.miiqu.com%2Fuploads%2Fimages%2Fs%2Fs_b%2Fs_1411412737_1552348885.jpg",
										"music":"../../static/music/3-kfdroeuio.mp3",
										"duration":"237",
										"special":"李宗盛 (与他们) 的凡人歌",
										"source":"https://music.163.com/#/artist?id=3683"
								}
									]
					},
					{
						"id":"2",
						"title":"私人电台",
						"className":"radPrivate",
						"link":"直接进入播放界面",
						"children":[
							  {   "id":"12",
									"singer":"李宗盛",
									"song":"你走你的路",
									"pic":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4067560142,1800606457&fm=27&gp=0.jpg",
									"music":"http://m10.music.126.net/20180705164740/83af1e33753ff805a34c18c96f23a78a/ymusic/ca80/ed51/c0de/f885ca4864bb6a44debc47eba7de5a2a.mp3",
									"duration":"257",
									"special":"滚石香港黄金十年 陈淑桦精选",
									"source":"https://music.163.com/#/artist?id=3683"
								},

								{   "id":"13",
										"singer":"邓丽君",
										"song":"采红菱",
										"pic":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530871121533&di=2402015d710a45e20d8f45fbef1ac9e1&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2F1%2F118%2F11867%2F1186797_750x750_0.jpg",
										"music":"../../static/music/13-sgtimg.mp3",
										"duration":"149",
										"special":"热门华语271",
										"source":"https://music.163.com/#/artist?id=3683"
								},

								{   "id":"14",
										"singer":"李宗盛",
										"song":"最爱(Live) - live",
										"pic":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530871144648&di=47d08c1f8ceb3a996e72899d2df2eafc&imgtype=0&src=http%3A%2F%2Feasyread.ph.126.net%2FTHmGPLjlUvNafKPvFJ0uZg%3D%3D%2F7916515605827792848.jpg",
										"music":"../../static/music/14-eadfg.mp3",
										"duration":"427",
										"special":"卢冠廷 2050 演唱会",
										"source":"https://music.163.com/#/artist?id=3683"
								}
						]
					}
				],
				radControlIndex:0,
				/*radSelect:[
					{
						"id":"1",
						"title":"主播",
						"icon":"http://cdns2.freepik.com/free-photo/microphone-radio-voice_318-30126.jpg",
						"main":[
							{
								"id":"1001",
								"title":"陈一发儿",
								"pic":"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4191920981,2564262770&fm=179&app=42&f=JPEG?w=121&h=140",
								"hot":"47785210",
								"production":[

								]
							},
							{
								"id":"1002",
								"title":"郭韵(艺名郭MINI）",
								"pic":"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3519632572,1702557648&fm=179&app=42&f=JPEG?w=121&h=140",
								"hot":"410654",
								"production":[

								]
							},
							{
								"id":"1003",
								"title":"尹素婉",
								"pic":"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3633113326,3252890007&fm=58&bpow=411&bpoh=503",
								"hot":"7845105",
								"production":[

								]
							}
						]
					},
					{
						"id":"2",
						"title":"场景",
						"icon":"http://www.cmske.com/images/201603/goods_img/170_G_1459401435731.jpg",
						"main":[
							{
								"id":"2001",
								"title":"起床",
								"pic":"http://img1.imgtn.bdimg.com/it/u=2844866100,1952130797&fm=27&gp=0.jpg",
								"hot":"545012",
								"production":[

								]
							},
							{
								"id":"2002",
								"title":"工作学习",
								"pic":"http://img.zcool.cn/community/012c85571987b232f8759bff3ffc64.png",
								"hot":"7850125",
								"production":[]
							},
							{
								"id":"2003",
								"title":"在路上",
								"pic":"http://img.weixinyidu.com/151127/49fde246.jpg",
								"hot":"578495420",
								"production":[]
							},
							{
								"id":"2004",
								"title":"阅读",
								"pic":"http://pkimg.b0.upaiyun.com/upload/20141106/0db40f756cb227110f12f2455e2f38a4.jpeg",
								"hot":"47859620",
								"production":[]
							},
							{
								"id":"2005",
								"title":"午后",
								"pic":"http://img3.imgtn.bdimg.com/it/u=1806501703,1226452016&fm=27&gp=0.jpg",
								"hot":"985205213",
								"production":[]
							},
							{
								"id":"2006",
								"title":"咖啡",
								"pic":"http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1410/22/c0/39984487_1413959580123_800x800.jpg",
								"hot":"",
								"production":[]
							},
							{
								"id":"2007",
								"title":"旅行",
								"pic":"http://p2.gexing.com/G1/M00/BD/40/rBACE1KLEH3xo8GBAACGxhLV-YY668.jpg",
								"hot":"5478120",
								"production":[]
							},
							{
								"id":"2008",
								"title":"健身",
								"pic":"http://img4.imgtn.bdimg.com/it/u=4134864368,713191956&fm=27&gp=0.jpg",
								"hot":"7854102",
								"production":[]
							},
							{
								"id":"2009",
								"title":"晚安",
								"pic":"http://img.itmop.com/upload/2018-6/20186261658232846.png",
								"hot":"65412110",
								"production":[]
							},
							{
								"id":"2010",
								"title":"夜猫子不睡觉",
								"pic":"http://imgfs.oppo.cn/data/attachment/forum/201505/16/023552no3v107zx3zxmlo7.jpg",
								"hot":"785412210",
								"production":[]
							}
						]
					},
					{
						"id":"3",
						"title":"流派",
						"icon":"http://pic.90sjimg.com/design/00/07/85/23/5931626692fdf.png",
						"main":[
							{
								"id":"3001",
								"title":"流行",
								"pic":"http://cdn.lizhi.fm/radio_cover/2014/05/24/11803573604038020.jpg",
								"hot":"8745120",
								"production":[]
							},
							{
								"id":"3002",
								"title":"摇滚",
								"pic":"http://pic.qiantucdn.com/58pic/18/88/50/565bd8eb2f834_1024.jpg",
								"hot":"450125445",
								"production":[]
							},
							{
								"id":"3003",
								"title":"嘻哈",
								"pic":"http://business.cdn.qianqian.com/qianqian/pic/bos_client_f2b51ee88fbab5ab87ca5795fd9e94bf.jpg",
								"hot":"78415890",
								"production":[]
							},
							{
								"id":"3004",
								"title":"电子",
								"pic":"http://img1.imgtn.bdimg.com/it/u=2919712080,3662410649&fm=27&gp=0.jpg",
								"hot":"475810",
								"production":[]
							},
							{
								"id":"3005",
								"title":"爵士",
								"pic":"http://pic33.photophoto.cn/20141104/0006019024050416_b.jpg",
								"hot":"7854102",
								"production":[]
							},
							{
								"id":"3006",
								"title":"乡村",
								"pic":"http://p4.music.126.net/zJMIXJDozRDrYie6WtN80A==/5980243743924877.jpg",
								"hot":"78541210",
								"production":[]
							},
							{
								"id":"3007",
								"title":"古典",
								"pic":"http://s15.sinaimg.cn/mw690/9019ecb5tdce009cb6a9e&690",
								"hot":"8971230",
								"production":[]
							},
							{
								"id":"300",
								"title":"中国风",
								"pic":"http://p2.qhimgs4.com/t018a00369fcac95e2e.jpg",
								"hot":"8745010",
								"production":[]
							}
						]
					},
					{
						"id":"4",
						"title":"心情",
						"icon":"http://img.mp.itc.cn/upload/20170630/9e5355882f5b4e91adca355bccdc98ea_th.jpg",
						"main":[
							{
								"id":"4001",
								"title":"安静",
								"pic":"https://cdn.duitang.com/uploads/item/201511/09/20151109081436_ewrRt.jpeg",
								"hot":"45121451",
								"production":[]
							},
							{
								"id":"4002",
								"title":"清新",
								"pic":"http://tupian.aladd.net/2016/9/2508.jpg",
								"hot":"89754612",
								"production":[]
							},
							{
								"id":"4003",
								"title":"治愈",
								"pic":"http://p3.wmpic.me/article/2015/05/22/1432259300_LjnVsPzB.jpg",
								"hot":"87942015489",
								"production":[]
							},
							{
								"id":"4004",
								"title":"温暖",
								"pic":"http://img1.2345.com/duoteimg/qqTxImg/2013/12/wm/14-031947_498.jpg",
								"hot":"451202",
								"production":[]
							},
							{
								"id":"4005",
								"title":"感动",
								"pic":"http://p1.qzone.la/upload/20150122/dyse4xkm.jpg",
								"hot":"7854102",
								"production":[]
							},
							{
								"id":"4006",
								"title":"快乐",
								"pic":"http://img3.imgtn.bdimg.com/it/u=1549516948,3981251877&fm=27&gp=0.jpg",
								"hot":"5642130",
								"production":[]
							},
							{
								"id":"4007",
								"title":"幸福",
								"pic":"http://p1.wmpic.me/article/2017/04/06/1491458595_VNqtEdDb.jpg",
								"hot":"561461560",
								"production":[]
							},
							{
								"id":"4008",
								"title":"励志",
								"pic":"https://img4.duitang.com/uploads/item/201512/17/20151217191911_rynPd.thumb.700_0.jpeg",
								"hot":"8974102",
								"production":[]
							},
							{
								"id":"4009",
								"title":"回忆",
								"pic":"http://p3.gexing.com/shaitu/20121020/1702/5082689f7772e.jpg",
								"hot":"47518623",
								"production":[]
							},
							{
								"id":"4010",
								"title":"寂寞",
								"pic":"https://a-ssl.duitang.com/uploads/item/201504/05/20150405H1646_vfL5V.thumb.700_0.jpeg",
								"hot":"6521025",
								"production":[]
							}
						]
					},
					{
						"id":"5",
						"title":"年代",
						"icon":"http://img.zcool.cn/community/016ba75542802c0000019ae9dd0fc4.jpg@1280w_1l_2o_100sh.png",
						"main":[
							{
								"id":"5001",
								"title":"00后",
								"pic":"http://mvimg1.meitudata.com/5635b397c064e2208.jpg",
								"hot":"211230",
								"production":[]
							},
							{
								"id":"5002",
								"title":"90",
								"pic":"http://www.yingkounews.com/caijing/cjsd/201409/W020140912505313715300.jpg",
								"hot":"9874150",
								"production":[]
							},
							{
								"id":"5003",
								"title":"80",
								"pic":"http://image.game.uc.cn/2015/7/3/10654697.jpg",
								"hot":"87954610",
								"production":[]
							},
							{
								"id":"5004",
								"title":"70",
								"pic":"http://i2.w.yun.hjfile.cn/doc/201505/9e1a7396-15b6-46ec-8e24-8be8574d1de4_02.gif",
								"hot":"9856410",
								"production":[]
							},
							{
								"id":"5005",
								"title":"60",
								"pic":"http://img1.imgtn.bdimg.com/it/u=4269579960,2723026115&fm=27&gp=0.jpg",
								"hot":"451125461",
								"production":[]
							},
							{
								"id":"5006",
								"title":"50",
								"pic":"http://fdfs.xmcdn.com/group7/M04/04/C8/wKgDWlVUUxeAqcrfAAC229Cr31U326_mobile_large.jpg",
								"hot":"58476920",
								"production":[]
							}
						]
					},
					{
						"id":"6",
						"title":"星座",
						"icon":"http://pic.58pic.com/58pic/15/98/86/35w58PICx6H_1024.jpg",
						"main":[
							{
								"id":"6001",
								"title":"白羊座",
								"pic":"https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=a750ef39ce8065387feaa311a7dda115/95eef01f3a292df5d4bdc662b8315c6034a8734e.jpg",
								"hot":"5420020",
								"production":[]
							},
							{
								"id":"6002",
								"title":"金牛座",
								"pic":"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=793e57bde2cd7b89ed6c3d813f244291/2f738bd4b31c87010cb2e591237f9e2f0708ff45.jpg",
								"hot":"415012",
								"production":[]
							},
							{
								"id":"6003",
								"title":"双子座",
								"pic":"https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=f11394ffa0014c081d3b2fa73a7a025b/8644ebf81a4c510fc1cefb4c6959252dd42aa559.jpg",
								"hot":"41002125",
								"production":[]
							},
							{
								"id":"6004",
								"title":"巨蟹座",
								"pic":"https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=0d0c14d525738bd4c021b533918a876c/91529822720e0cf3007225f30146f21fbe09aa35.jpg",
								"hot":"45120512",
								"production":[]
							},
							{
								"id":"6005",
								"title":"狮子座",
								"pic":"https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=cf66c09e134c510faac4e51850592528/7dd98d1001e93901691d936872ec54e736d1964c.jpg",
								"hot":"562301402",
								"production":[]
							},
							{
								"id":"6006",
								"title":"处女座",
								"pic":"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=ba13066e7f3e6709ba0042fd0bc69fb8/d833c895d143ad4bcc86bc8982025aafa50f06ca.jpg",
								"hot":"24514152",
								"production":[]
							},
							{
								"id":"6007",
								"title":"天秤座",
								"pic":"https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=20fc7b78524e9258a23481ecac83d1d1/8694a4c27d1ed21b272bbdf9a96eddc450da3fcf.jpg",
								"hot":"542106985",
								"production":[]
							},
							{
								"id":"6008",
								"title":"天蝎座",
								"pic":"https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=7ba6bc2ed443ad4ba22e41c2b2035a89/060828381f30e9241a0cddba49086e061c95f795.jpg",
								"hot":"45101425",
								"production":[]
							},
							{
								"id":"6009",
								"title":"射手座",
								"pic":"https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=0f94b4ad77cb0a4681228c3b5b62f63e/b3b7d0a20cf431adc888156e4736acaf2edd980a.jpg",
								"hot":"01544152",
								"production":[]
							},
							{
								"id":"6010",
								"title":"魔羯座",
								"pic":"https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=3d98922d0923dd542573a06ae108b3df/d788d43f8794a4c28b9509620ef41bd5ac6e39c1.jpg",
								"hot":"7845200",
								"production":[]
							},
							{
								"id":"6011",
								"title":"水瓶座",
								"pic":"https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=967c476ca6cc7cd9fe2d33db09002104/d009b3de9c82d158f66c0530850a19d8bd3e4240.jpg",
								"hot":"14154150",
								"production":[]
							},
							{
								"id":"6012",
								"title":"双鱼座",
								"pic":"https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=6c32d78b06087bf479ec50ebc2d1575e/d62a6059252dd42a5993e96b073b5bb5c8eab85c.jpg",
								"hot":"874520",
								"production":[]
							}
						]
					}
				],*/
				radSelect:null,
				radOption:{},
				radSelectIndex:0
			}
		},
		watch : {
			radOption (old,val){
				//console.log(old,val)
			}
		},
		methods : {
			changeIndex (obj) {
				this.radOption = obj
				//console.log('changeIndex',obj)
			}
		},
		mounted () {
			
			// 钩子函数
		},
		components : {
			radSelectCom
		}
	}

	Vue.filter('wan',function (val) {
		return (val / 10000).toFixed(2) + '万'
	})
</script>

<style>
	.radControl::before{
		content:'';
		border-right:1px solid #999;
		position:absolute;
		height:2rem;
		top:1.6rem;
	}
	.radControl{
		overflow:hidden;
		padding:1rem 0 ;
		position:relative;
	}
	.radControl .radControlItem {
		width:50%;
		float:left;
	    color: #666;
	}
	.radControl .radControlItem a{
		padding:1rem 1.5rem 1rem 4rem;
		background:white;
		display:inline-block;
		background-size:2rem auto;
		background-repeat:no-repeat;
		background-position:1rem center;
	}
	.radControl .radLike a{
		float:right;
		border-radius:1rem 0 0 1rem;
		background-image:url(../../assets/common/images/like.png);
		color: skyblue;
	}
	.radControl .radPrivate a{
		float:left;
		border-radius:0 1rem 1rem 0;
		background-image:url(../../assets/common/images/private.png);
	}
	.radOptions{
		padding:2rem 1.5rem 0;
		overflow:hidden;
	}
	.radOptionItem{
		width:46%;
		margin:2%;
		height:14rem;
		float:left;
		background:white;
		padding:.5rem 0;
	}
	.radOptionItem img{
		width:80%;
		height:80%;
		background:black;
	}
	.radOptionItem img+p{
		text-align:left;
		padding-left:1.8rem;
		line-height:1.5rem;
		color:#666;
	}
	.radOptionItem img+p > span{
		font-weight:900;
	}
</style>

