<template>
	<div id="musicSet" v-on:click="closeDialog">
		<div class="setOpts">
			<ul>
				<li class="setItem"
					v-for="(item,i) in setLists"
					v-bind:key="i"
					v-bind:class="'setItem-'+item.key"
				>
					<a>
						<div class="l"> {{ item.title }} </div>
						<div class="r" 
							v-bind:class="Array.isArray(item.options) ? 'dialogButton' : typeof item.options ==='string' ? 'linkButton' : 'switchButton'" 
							>
								<a class="dialog" v-if="Array.isArray(item.options)" v-on:click.stop="openDialog(i,$event)"><!-- dialog --> {{ item.options[item.optionDef].text }}</a>  <!-- dialog -->

								<a class="switch" 
									v-if="typeof item.options ==='boolean'" 
									v-text="item.options ? 'ON' : 'OFF' "
									v-bind:class="item.options ? 'on' :'' "
									v-on:click.stop="changeBoolean(i)"
								> switch </a>

								<span 
									v-if="typeof item.options ==='string'"
									v-on:click.stop="link"
								>link</span>
								

								<span style="display:none"> {{ item.options }} </span>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<mini-dialog v-show="miniDialogFlg"
			v-bind:index="setLists[floater].optionDef"
			v-bind:items ="setLists[floater]"
			v-bind:eleTop = "topNum"
			v-on:getMiniIndex = "getMiniIndex" 
		></mini-dialog>
	 {{ msg }} 
	</div>
</template>
<script>
	import miniDialog from '../com/miniDialog.vue'
	export default {
		data () {
			return {
				msg :'set.vue',
				floater:0, // dialog 临时序号
				liHeight:null,
				topNum:0, // dislog 出现位置top值
				setLists :[
					{
						"id":"1",
						"title":"在线听歌音质",
						"key":"quality",
						"options":[
							{"id":"1001","text":"128kbps"},
							{"id":"1002","text":"192kbps"},
							{"id":"1003","text":"320kbps"}
						],
						"optionDef":"0"
					},
					{
						"id":"2",
						"title":"使用2G/3G/4G流量播放",
						"key":"flow",
						"options":false
					},
					{
						"id":"3",
						"title":"使用2G/3G/4G流量下载",
						"key":"flow",
						"options":true
					},
					{
						"id":"4",
						"title":"会员专属曲库播放",
						"key":"vip",
						"options":'link'
					},
					{
						"id":"5",
						"title":"边听边存",
						"key":"flow",
						"options":false
					},
					{
						"id":"6",
						"title":"锁屏显示",
						"key":"flow",
						"options":false
					},
					{
						"id":"7",
						"title":"桌面歌词",
						"key":"outside",
						"options":false
					},
					{
						"id":"8",
						"title":"车载蓝牙播放器",
						"key":"outside",
						"options":[
							{"id":"8001","text":"车载蓝牙1"},
							{"id":"8002","text":"车载蓝牙2"},
							{"id":"8003","text":"车载蓝牙3"}
						],
						"optionDef":"2"
					},
					{
						"id":"9",
						"title":"歌单回收站",
						"key":"safety",
						"options":[
							{"id":"9001","text":"歌单回收1"},
							{"id":"9002","text":"歌单回收2"},
							{"id":"9003","text":"歌单回收3"}
						],
						"optionDef":"1"
					},
					{
						"id":"10",
						"title":"帐号绑定",
						"key":"safety",
						"options":'link'
					},
					{
						"id":"11",
						"title":"多语言",
						"key":"language",
						"options":[
							{"id":"11001","text":"国语"},
							{"id":"11002","text":"粤语"},
							{"id":"11003","text":"台语"},
							{"id":"11004","text":"英语"},
							{"id":"11005","text":"日语"},
							{"id":"11006","text":"韩语"},
							{"id":"11007","text":"闽南语"},
							{"id":"11008","text":"俄语"}
						],
						"optionDef":"5"
					},
					{
						"id":"12",
						"title":"消息通知",
						"key":"news",
						"options":[
							{"id":"12001","text":"消息通知一"},
							{"id":"12002","text":"消息通知二"},
							{"id":"12003","text":"消息通知三"},
							{"id":"12004","text":"消息通知四"}
						],
						"optionDef":"1"
					},
					{
						"id":"13",
						"title":"歌曲下载路径选择",
						"key":"download",
						"options":'link'
					},
					{
						"id":"14",
						"title":"清空缓存",
						"key":"download",
						"options":true
					},
					{
						"id":"15",
						"title":"关于musicPlayer",
						"key":"version",
						"options":'2.55.0'
					}
				],
				miniDialogFlg:false
			}
		},
		methods :{
			init () {
			this.liHeight = document.getElementsByClassName("setItem")[0].offsetHeight
			},
			openDialog (i,e) {
				this.init()
				this.floater = i 
				this.topNum = e.target.offsetTop + this.liHeight
				this.miniDialogFlg = !this.miniDialogFlg
				//console.log(i,e,this.liHeight)
			},
			closeDialog () {
				this.miniDialogFlg = false
			},
			getMiniIndex (str) {
				//this.floater = str 
				this.setLists[this.floater].optionDef = str
				this.floater = 0
				this.miniDialogFlg = false
				console.log(str)
			},
			changeBoolean (i) {
				this.setLists[i].options = !this.setLists[i].options
			},
			link () {
				alert ('占无内容添加意向')
			}
		},
		mount () {
			this.init()
		},
		components : {
			miniDialog
		}
	}
	/*
	{在线听歌音质
		使用2G/3G/4G流量播放
		使用2G/3G/4G流量下载
		会员专属曲库播放
		边听边存
		锁屏显示
		桌面歌词
		车载蓝牙播放器
		歌单回收站
		帐号绑定
		多语言
		消息通知
		歌曲下载路径选择
		清空缓存
		关于musicPlayer}
	*/
	
	
</script>
<style>
	#musicSet{
		padding:1.5rem 0 6rem;
		overflow:hidden;
		background:#e8e8e8;
	}
	#musicSet .setItem {
		padding:1rem;
		overflow:hidden;
		line-height:3rem;
		font-size:140%;
		color:black;
		background:white;
		margin-top:1.5rem;
	}
	#musicSet .setItem-quality{
		border-top:1px solid #ddd;
		border-bottom:1px solid #ddd;
	}
	#musicSet .setItem-quality + .setItem-flow{
		border-top:1px solid #ddd;
	}
	#musicSet .setItem-flow + .setItem-flow{
		margin-top:0;
	}
	#musicSet .setItem-flow + .setItem-vip{
		margin-top:0;
		border-bottom:1px solid #ddd;
	}
	#musicSet .setItem-vip + .setItem-flow{
		border-top:1px solid #ddd;
	}
	#musicSet .setItem-vip + .setItem-flow + .setItem-flow{
		border-bottom:1px solid #ddd;
	}

	#musicSet .setItem-outside{
		border-top:1px solid #ddd;
	}
	#musicSet .setItem-outside + .setItem-outside{
		border-top:none;
		border-bottom:1px solid #ddd;
		margin-top:0;
	}
	#musicSet .setItem-safety{
		border-top:1px solid #ddd;
	}
	#musicSet .setItem-safety + .setItem-safety{
		border-top:none;
		border-bottom:1px solid #ddd;
		margin-top:0
	}
	#musicSet .setItem-language{
		border-top:1px solid #ddd;
	}
	#musicSet .setItem-news{
		border-bottom:1px solid #ddd;
		margin-top:0;
	}
	#musicSet .setItem-download{
		border-top:1px solid #ddd;
	}
	#musicSet .setItem-download + .setItem-download{
		border-top:none;
		border-bottom:1px solid #ddd;
		margin-top:0;
	}
	#musicSet .setItem-version{
		border-top:1px solid #ddd;
		border-bottom:1px solid #ddd;
	}
	
	#musicSet .setItem .dialogButton a.dialog::before,
	#musicSet .setItem .dialogButton a.dialog::after{
		content:'';
		border:.8rem solid transparent;
		display:block;
		position:absolute;
		right:-.7rem;
		top:.7rem;
	}
	#musicSet .setItem .dialogButton a.dialog::before{
		border-left:1rem solid #666;
	}
	#musicSet .setItem .dialogButton a.dialog::after{
		border-left:1rem solid white;
		right:-.5rem;
	}
	#musicSet .setItem .dialogButton a.dialog{
		display:block;
		padding-right:2rem;
		position:relative;
		color:#999;
		cursor:pointer;
	}
	#musicSet .setItem .switchButton a.switch::before{
		content:'';
		width:4rem;
		height:calc(2.6rem - 2px);
		border-radius:1.2rem;
		padding:0 .5rem;
		display:inline-block;
		box-sizing:border-box;
		position:absolute;
		right:0;
		top:0;
		background:linear-gradient(to bottom,rgba(35,51,66,1),rgba(40,60,77));
		box-shadow:1px 0px 4px rgba(255,255,255,.6) inset,
							 0px 0px 2px black,
							 -1px 2px 2px rgba(255,255,255,.6) inset,
							 1px -1px 3px rgba(0,0,0,.6) inset;
	}
	#musicSet .setItem .switchButton a.switch{
		width:7rem;
		height:2.6rem;
		margin-top:.2rem;
		border-radius:1.3rem;
		display:inline-block;
		background:linear-gradient(to bottom,#c7473a,#d66e66);
		float:left;
		line-height:2.6rem;
		text-align:left;
		padding:0 .5rem;
		box-sizing:border-box;
		color:white;
		font-size:.6rem;
		font-weight:bolder;
		font-family:sans-serif, "Source Sans Pro", "Helvetica Neue", Arial;
		border:1px solid #333;
		box-shadow:0 0 1px #fff;
		position:relative;	
		box-shadow:-2px -3px 7px rgba(255,255,255,.2) inset,
							 3px 4px 9px rgba(0,0,0,.5) inset,
							 0px 0px 2px rgba(69,69,69,.5);
		text-shadow:0px 0px 1.5rem rgba(255,255,255,.6)	;
		cursor:pointer;	 
	}
	#musicSet .setItem .switchButton a.switch.on::before{
		left:0;
		box-shadow:0px 1px 2px rgba(255,255,255,.6) inset,
							 0px 0px 2px black,
							 -1px 2px 4px rgba(255,255,255,.6) inset,
							 0px -1px 3px rgba(0,0,0,.6) inset;
	}
	#musicSet .setItem .switchButton a.switch.on{
		text-align:right;
		background:#48D183;
		box-shadow:2px -3px 7px rgba(255,255,255,.5) inset,
							 -3px 4px 9px rgba(0,0,0,.5) inset;
	}
</style>

/*  #263645

*box-shadow:-2px -1px 5px rgba(255,255,255,.6) inset,
							 2px 1px 9px rgba(0,0,0,.5) inset;
		text-shadow:0px 0px 5px rgba(255,255,255,.6);