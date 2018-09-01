<template>
	<div id="miniDialog" v-bind:style="{top:eleTop+'px'}"> 
		<div class="dialogCont">
			<li 
				v-for="(item,i) in items.options"
				v-bind:key="i"
				v-on:click="change(i)"
			>
				<a> <span class="l">{{ item.text }} </span> <i class="r" v-bind:class="{'on':i==index}"></i></a>
			</li>
		</div>
		<code>
			{{ msg }} 
			{{ items }}
			{{ index }}
		</code>
	</div>
</template>
<script>
	export default {
		props :{
			index :{
				type : String
			},
			items :{
				type : Object ,
				default : () => {}
			},
			eleTop : {
				type : Number,
				default : 0
			}
		},
		data () {
			return {
				msg : " miniDialog"
			}
		},
		methods : {
			change (i) {
				this.index = i
				this.$emit('getMiniIndex',this.index)
			}
		}
	}
</script>
<style>
	#miniDialog{
		color:white;
		position:absolute;
		background:rgba(0,0,0,.8);
		padding:1rem 0;
	}
	.dialogCont li{
		overflow:hidden;
		padding:0 20%;
	}
	.dialogCont li a{
		display:block;
		line-height:3rem;
		font-size:140%;
	}
	
	.dialogCont li a i::before {
		content:'';
		width:.8rem;
		height:.8rem;
		border-radius:.4rem;
		display:inline-block;
		background:#c0c0c0;
		position:absolute;
		top:.6rem;
		left:.6rem;
		box-shadow:0px -1px 1px #333,
							 -1px 0px 1px #999,
							 0px 1px 2px white,
							 1px 0px 1px rgba(255,255,255,.5);
	}
	.dialogCont li a i.on::before {
		background:radial-gradient(#ff0000,#8b0000);
	}
	.dialogCont li a i{
		width:2rem;
		height:2rem;
		background:linear-gradient(to bottom,#e0e0e0,#ccc);
		display:inline-block;
		margin-top:.5rem;
		border-radius:1rem;
		box-shadow:0px -1px 1px #ccc,
							 0px 0px 0px transparent,	
							 1px 1px 3px #000,
							 -1px 0px 2px #333;
		position:relative;					 
	}
</style>