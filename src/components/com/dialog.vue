<template>
	<div id="halfDialog" class="dialog">
		<div class="dialogHead">
			<p>播放列表 <span> (共{{ lists.length}}首)</span> </p>
		</div>
		<div class="dialogCont">
			<div class="dialogItem"
				v-for="(list , index) in lists"
				v-bind:key="index"
				v-bind:class="{'active':index===order}"
				v-on:click="closeDialog()"
			>
				<router-link v-bind:to="{path:'play:' ,query:{id:index} }">
					<div class="dialogIcon left"
						v-html="index===order ? '<span style=width:.5rem;height:1rem;margin-top:2.5rem;background:red;display:block;float:left;margin-left:0.5rem;></span><span style=width:.5rem;height:2rem;margin-top:1.5rem;background:red;display:block;float:left;margin-left:0.5rem;></span><span style=width:.5rem;height:3rem;margin-top:0.5rem;background:red;display:block;float:left;margin-left:0.5rem;></span>' : '<img class=aa style=width:100%;height:100% src=' + list.pic + ' />'"
					></div>
					<div class="dialogInfo left">
						<p> {{ list.song }} </p>
						<p><span> {{ list.singer }} </span></p>
					</div>
					<div class="dialogBtn right">
						<span></span>
					</div>
				</router-link>
			</div>
		</div>
		<code> {{ lists }} </code> 
		<code> {{ order }} </code> 
	  <code> {{ msg }} </code> 
	
	</div>
</template>

<script>
	export default {
		props : {
			lists : {
				type : Array ,
				default : () => []
			},
			order : {
				type : Number
			}
		},
		data () {
			return {
				msg :'dialog vue'
			}
		},
		methods : {
			closeDialog () {
				//console.log(this.$emit('getChildFlg'))
				this.$emit('getChildFlg',false)
			}
		}
	}	
</script>

<style scoped>
	#halfDialog{
		width:100%;
		position:absolute;
		right:0;
		top:40%;
		bottom:0;
		background:rgba(0,0,0,.9);
		border-radius:1rem 1rem 0 0;
	}
	.dialogHead{
		border-radius:1rem 1rem 0 0;
		background:#efefef;
		border-bottom:1px solid #cecece;
		box-sizing:border-box;
		height:4.2rem;
	}
	.dialogHead p{
		line-height:4.2rem;
		font-size:1.5rem;
		color:#333;
		text-align:left;
		text-indent:1.6rem;
	}
	.dialogHead p span{
		color:#666;
	}
	.dialogCont {
		overflow-y:auto;
		height:calc(100% - 4.2rem);
		background:white;
	}
	.dialogCont .dialogItem{
		overflow:hidden;
		padding:.5rem 1rem;
		border-bottom:1px solid #cecece;
	}
	.dialogCont .dialogItem.active{
		background:#efefef;
	}
	.dialogCont .dialogItem .dialogIcon{
		width:4rem;
		height:4rem;
		overflow:hidden;	
	} 
	.dialogCont .dialogItem .dialogBtn{
		width:3rem;
		height:3rem;
		margin:.5rem;
		background:transparent;
		border-radius:1.5rem;
		border:.15rem solid #999;
		box-sizing:border-box;	
	} 
	.dialogCont .dialogItem .dialogBtn span{
		border:.8rem solid transparent;
		border-left:1rem solid #999;
		display:block;
		margin:.4rem 0 0 1rem;
	}
	.dialogCont .dialogItem .dialogIcon img.aa{
		width:4rem;
		height:4rem;
	}
	.dialogCont .dialogInfo {
		width:calc(100% - 10rem);
	}
	.dialogCont .dialogInfo p{
		line-height:2rem;
		text-align:left;
		padding-left:.5rem;
		color:#333;
		width:100%;
		overflow:hidden;
		height:2rem;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.dialogCont .dialogInfo p span{
		color:#666;
	}
</style>