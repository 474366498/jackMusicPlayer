<template>
	<div id="mContent"><!-- recommended 推荐-->
		<banner-component 
			v-bind:lists="bannerList"
			v-bind:time="bannerTime"
			>		
		</banner-component>
		<section id="monthlyFocus">
			<seo-songs-list v-bind:lists="seoSongsList"></seo-songs-list>
			<global-songs-list v-bind:lists="globalSongsList"></global-songs-list>
			<feature-songs-list v-bind:lists="featureSongsList"> </feature-songs-list>
		</section>
	</div>	
</template>

<script>
import Vue from 'vue'
import bannerComponent from '../com/bannerComponent.vue'
import seoSongsList from '../com/monthlyFocusList.vue'
import monthlyFocusPic from '../com/monthlyFocusPic.vue'
// 注册monthlyFocusPic为全局组件
Vue.component('monthlyFocusPic',{
	render : monthlyFocusPic.render
})

/*import globalSongsList from '../com/monthlyFocusPic.vue'
import featureSongsList from '../com/monthlyFocusPic.vue'*/

	export default {
		data () {
			return {
				bannerList :[
					{"id":"1","title":"lade gaga","src":"http://wap.yesky.com/uploadImages/2012/335/4MVAF5MWZ3E8.JPG"},
					{"id":"2","title":"凤凰传奇","src":"http://www.zhonghuihotel.cn/uploadfile/2018/2/11/1518358328612.jpeg"},
					{"id":"3","title":"王丽坤","src":"http://service.cicphoto.com/yxwh/sjyd/ylbg/201407/W020140718500046326130.jpg"},
					{"id":"4","title":"林忆莲","src":"http://3cmusic.com/home/wp-content/uploads/2016/01/sandylam.jpg"},
					{"id":"5","title":"李宗盛","src":"http://5b0988e595225.cdn.sohucs.com/images/20180612/09259c8f880a4892adaf0fea21b81ab6.jpeg"},
					{"id":"6","title":"张学友","src":"http://www.wownews.tw/upload_images_b/2013/07/11/001/51dd854f61c7a.jpg"},
					{"id":"7","title":"周华健","src":"http://5b0988e595225.cdn.sohucs.com/images/20180702/d9da1fcdea114f6d9fbd87ac0dda703b.jpeg"},
					{"id":"8","title":"黄家驹","src":"http://dynamic-image.yesky.com/1080x-/uploadImages/2016/344/04/6410ODE87E55.jpg"}
				],
				bannerTime:5500,
				seoSongsList:[{			//站内官方榜单
					heading:"站内官方榜单",
					main:[		
						{
							id:"1",
							className:"fashion",
							title:"流行榜",
							update:"天天更新",
							songs:[
								{ "id":"1",
									"singer":"铃声之家",
									"song":"Algels_铃声之家cnwav",
									"pic":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1214654864,1865719270&fm=15&gp=0.jpg",
									"music":"../../static/music/cs/1.mp3",
									"duration":"349",
									"special":"跨年演唱会2013-2014 华语篇",
									"source":"https://music.163.com/#/artist?id=3683"
								},
								{ "id":"2",
									"singer":"华语群星",
									"song":"华语群星-【热播铃声】别把最疼爱你的人弄丢了",
									"pic":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530870009198&di=5711cf80612d70b945eee96f3c63dd6a&imgtype=0&src=http%3A%2F%2Fwww.sonarmusic.cn%2Fcatalog%2F6b3f7a9b04.jpg",
									"music":"../../static/music/cs/2.mp3",
									"duration":"280",
									"special":"南下专线",
									"source":"https://music.163.com/#/artist?id=3683"
								},
								{ "id":"3",
									"singer":"黄祖波",
									"song":"黄祖波-平凡之路 (铃声版)",
									"pic":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530870121898&di=7d6737ddfa0e62a7a07c1d7f83a8771d&imgtype=0&src=http%3A%2F%2Fimages.miiqu.com%2Fuploads%2Fimages%2Fs%2Fs_b%2Fs_1411412737_1552348885.jpg",
									"music":"../../static/music/cs/3.mp3",
									"duration":"237",
									"special":"李宗盛 (与他们) 的凡人歌",
									"source":"https://music.163.com/#/artist?id=3683"
								}
							]
						},
						{
							id:"2",
							className:"boom",
							title:"畅销榜",
							update:"天天更新",
							songs:[
								{ "id":"1",
									"singer":"铃声之家",
									"song":"Algels_铃声之家cnwav",
									"pic":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1214654864,1865719270&fm=15&gp=0.jpg",
									"music":"../../static/music/cs/1.mp3",
									"duration":"349",
									"special":"跨年演唱会2013-2014 华语篇",
									"source":"https://music.163.com/#/artist?id=3683"
								},
								{ "id":"2",
									"singer":"华语群星",
									"song":"华语群星-【热播铃声】别把最疼爱你的人弄丢了",
									"pic":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530870009198&di=5711cf80612d70b945eee96f3c63dd6a&imgtype=0&src=http%3A%2F%2Fwww.sonarmusic.cn%2Fcatalog%2F6b3f7a9b04.jpg",
									"music":"../../static/music/cs/2.mp3",
									"duration":"280",
									"special":"南下专线",
									"source":"https://music.163.com/#/artist?id=3683"
								},
								{ "id":"3",
									"singer":"黄祖波",
									"song":"黄祖波-平凡之路 (铃声版)",
									"pic":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530870121898&di=7d6737ddfa0e62a7a07c1d7f83a8771d&imgtype=0&src=http%3A%2F%2Fimages.miiqu.com%2Fuploads%2Fimages%2Fs%2Fs_b%2Fs_1411412737_1552348885.jpg",
									"music":"../../static/music/cs/3.mp3",
									"duration":"237",
									"special":"李宗盛 (与他们) 的凡人歌",
									"source":"https://music.163.com/#/artist?id=3683"
								}
							]
						},
						{
							id:"3",
							className:"hot",
							title:"热歌榜",
							update:"天天更新",
							songs:[
								{ "id":"1",
									"singer":"铃声之家",
									"song":"Algels_铃声之家cnwav",
									"pic":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1214654864,1865719270&fm=15&gp=0.jpg",
									"music":"../../static/music/cs/1.mp3",
									"duration":"349",
									"special":"跨年演唱会2013-2014 华语篇",
									"source":"https://music.163.com/#/artist?id=3683"
								},
								{ "id":"2",
									"singer":"华语群星",
									"song":"华语群星-【热播铃声】别把最疼爱你的人弄丢了",
									"pic":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530870009198&di=5711cf80612d70b945eee96f3c63dd6a&imgtype=0&src=http%3A%2F%2Fwww.sonarmusic.cn%2Fcatalog%2F6b3f7a9b04.jpg",
									"music":"../../static/music/cs/2.mp3",
									"duration":"280",
									"special":"南下专线",
									"source":"https://music.163.com/#/artist?id=3683"
								},
								{ "id":"3",
									"singer":"黄祖波",
									"song":"黄祖波-平凡之路 (铃声版)",
									"pic":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530870121898&di=7d6737ddfa0e62a7a07c1d7f83a8771d&imgtype=0&src=http%3A%2F%2Fimages.miiqu.com%2Fuploads%2Fimages%2Fs%2Fs_b%2Fs_1411412737_1552348885.jpg",
									"music":"../../static/music/cs/3.mp3",
									"duration":"237",
									"special":"李宗盛 (与他们) 的凡人歌",
									"source":"https://music.163.com/#/artist?id=3683"
								}
							]
						}
					]
			  }],
				globalSongsList:[		//地区媒体榜单
					{
						heading:"全球媒体榜单",
						main:[
							{
								id:"1",
								className:"usa",
								title:"美国Billboard排行榜",
								update:"每周五更新",
								songs:[]
							},
							{
								id:"2",
								className:"hito",
								title:"Hito 中文排行榜",
								update:"每周一更新",
								songs:[]
							},
							{
								id:"3",
								className:"hong",
								title:"劲歌金榜",
								update:"每周一更新",
								songs:[]
							},
							{
								id:"4",
								className:"uk",
								title:"英国UK单曲榜",
								update:"每周一更新",
								songs:[]
							},
							{
								id:"5",
								className:"japan",
								title:"oricon公信单曲榜",
								update:"每周三更新",
								songs:[]
							},
							{
								id:"6",
								className:"korea",
								title:"韩国MNET音乐排行榜",
								update:"每周一更新",
								songs:[]
							}
						]
					}
				],
				featureSongsList:[	//特色音乐榜单
					{
						heading:"特色音乐榜单",
						main:[
							{
								id:"1",
								className:"a",
								title:"大虾试听榜",
								update:"每天更新",
								songs:[]
							},
							{
								id:"2",
								className:"b",
								title:"歌单收录榜",
								update:"每天更新",
								songs:[]
							},
							{
								id:"3",
								className:"c",
								title:"K歌榜",
								update:"每天气更新",
								songs:[]
							},
							{
								id:"4",
								className:"d",
								title:"虾米分享榜",
								update:"每天更新",
								songs:[]
							}
						]
					}
				]
			}
		},
		components:{
			bannerComponent,
			seoSongsList,
			'globalSongsList' : monthlyFocusPic,
			'featureSongsList' : monthlyFocusPic
		}
	}
</script>

<style scoped>
#monthlyFocus{
	color:white;
}
</style>
