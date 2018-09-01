<template>
	<div id="select">
		
			<div class="selectPick">
				<div class="l selectPickBox">
					<a class="selectPickText"> {{ selects[index].title }} </a>
					<i v-bind:class="selectShow ? 'on' : '' "
						 v-on:click="changeShow"	
					></i>
				</div>
				<div class="r selectPickCount">
					{{ selects[index].main.length}} 条
				</div>
			</div>

			<div class="selectOptions" v-show="selectShow">
				<div class="selectItem" 
						v-for="(opt , i) in selects"
						v-bind:key="i"
						v-on:click="changeIndex(i)">
					<a>
						<img v-bind:src="opt.icon" />
						<span> {{ opt.title }} </span>
					</a>
				</div>
			</div>
		
		<!-- {{ msg }}
		{{ selects }}
		{{ index }} -->
	</div>
</template>

<script>
	export default {
		props :{
			selects : {
				type : Array,
				default : () => []
			}
		},
		data () {
			return {
				msg : " select.vue",
				index : 0,
				selectShow : false
			}
		},
		methods : {
			changeShow () {
				this.selectShow = !this.selectShow
			},
			changeIndex (i) {
				this.index = i 
				this.selectShow = false
				this.$emit('getRadSelect',this.selects[this.index])
			}	
		},
		mount () {
			console.log( this.selects)
		} 
	}
</script>

<style scoped>
	#select{
		color:red;
		padding:.5rem 1.5rem;
		position:relative;
	}
	#select .selectPick{
		height:2.6rem;
		padding:1rem 1.5rem;
		background:white;
	}
	#select .selectPick .selectPickBox ,#select .selectPick .selectPickCount{
		height:2.6rem;
		line-height:2.6rem;
	}
	#select .selectPick .selectPickBox{
		padding:0 3rem 0 1.6rem;
		border:1px solid #999;
		border-radius:1.5rem;
		position:relative;
	}
	
	#select .selectPick .selectPickBox i,
	#select .selectPick .selectPickBox i.on{
		width:2rem;
		height:2rem;
		position:absolute;
		right:.5rem;
		top:.5rem;
		display:inline-block;
		background: ;
	}
	#select .selectPick .selectPickBox i::before{
		content:"";
		border:.6rem solid transparent;
		border-top:.8rem solid #666;
		position:absolute;
		z-index:1;
		left:.4rem;
		top:.5rem;
	}
	#select .selectPick .selectPickBox i::after{
		content:"";
		border:.6rem solid transparent;
		border-top:.8rem solid white;
		position:absolute;
		z-index:1;
		left:.4rem;
		top:.2rem;
	}
	#select .selectPick .selectPickBox i.on::before{
		content:"";
		border:.6rem solid transparent;
		border-bottom:.8rem solid #666;
		position:absolute;
		z-index:1;
		left:.4rem;
		top:-0.3rem;
	}
	#select .selectPick .selectPickBox i.on::after{
		content:"";
		border:.6rem solid transparent;
		border-bottom:.8rem solid white;
		position:absolute;
		z-index:1;
		left:.4rem;
		top:0;
	}
	#select .selectOptions{
		position:absolute;
		right: 1.5rem;
    left: 1.5rem;
		height:auto;
		background:white;
		overflow:hidden;
		border:1px solid #999;
		border-right:none;
	}
	#select .selectOptions .selectItem{
		width:33%;
		float:left;
		border-bottom:1px solid #999;
		border-right:1px solid #999;
		padding:1.5rem 0;
	}
	#select .selectOptions .selectItem:nth-last-child(1),
	#select .selectOptions .selectItem:nth-last-child(2),
	#select .selectOptions .selectItem:nth-last-child(3){
		border-bottom:none;
	}
	#select .selectOptions .selectItem img{
		width:50%;
		height:auto;
	}
	#select .selectOptions .selectItem span{
		display: inline-block;
    width: 100%;
    line-height: 2rem;
	}
</style>