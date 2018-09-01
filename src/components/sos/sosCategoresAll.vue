<template>
	<div class="sosCategoresAll">
		
		<div class="sosCategoresMain">
			<h2> {{ items.title }} </h2>
			<div class="sosCategoresItem" v-for="(item , index) in items.main"
					 v-bind:key="index">
				<div class="l sosCatMainNav">
					 <a>
					 		<i v-bind:class="item.class"></i>
					 		<span>{{ item.title }}</span>
					 </a>
				</div>
				<div class="l sosCatMainCont">
					<router-link v-for="(unit , index) in item.child" 
						 v-bind:key="index"
						 v-bind:to="{path:unit.link,query:{id:unit.id}}">
						{{ unit.title }}
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		created () {
			//console.log(this.$route.query.id)
			this.$ajax.get('/sos/catAll')
				.then((res) => {
					this.items = res.data.data
				})
		},
		data () {
			return {
				msg : "all vue",
				items:[]
			}
		},
		mounted () {
			
		}
	}
	
</script>

<style>
.sosCategoresAll {
	padding:.5rem 1rem;
	padding-bottom:5rem;
	overflow:hidden;
	background:#f0f0f0;
}
.sosCategoresMain h2{
	background:white;
	padding:.5rem 0;
	color:#666;
	margin-bottom:1rem;
}
.sosCategoresMain .sosCategoresItem{
	padding:.5rem 0;
	overflow:hidden;
	width:100%;
	display:flex;
}
.sosCategoresMain .sosCatMainNav{
	width:6rem;
	background:white;
	min-height:5rem;
	display:flex;
	vertical-align:middle;
}
.sosCategoresMain .sosCatMainNav a{
	padding:2rem 1rem;
}
.sosCategoresMain .sosCatMainNav a i{
	width:4rem;
	height:4rem;
	display:block;
	background-size:cover;
}
.sosCategoresMain .sosCatMainNav a span{
	line-height:3rem;
}
.sosCategoresMain .sosCatMainNav a i.hot{
	background-image:url(../../assets/common/images/sosCategores/hot.png);
}
.sosCategoresMain .sosCatMainNav a i.language{
	background-image:url(../../assets/common/images/sosCategores/language.png);
}
.sosCategoresMain .sosCatMainNav a i.stylize{
	background-image:url(../../assets/common/images/sosCategores/stylize.png);
}
.sosCategoresMain .sosCatMainNav a i.mood{
	background-image:url(../../assets/common/images/sosCategores/mood.png);
}
.sosCategoresMain .sosCatMainNav a i.scene{
	background-image:url(../../assets/common/images/sosCategores/scene.png);
}
.sosCategoresMain .sosCatMainCont{
	width:calc(100% - 6rem);
	border-left:1px solid #999;
}
.sosCategoresMain .sosCatMainCont a{
	width:calc(33% - 1px);
	line-height:3rem;
	height:3rem;
	float:left;
	display:inline-block;
	background:white;
	border-top:1px solid #999;
	border-right:1px solid #999;
	color:blue;
}
.sosCategoresMain .sosCatMainCont a:nth-last-child(1),
.sosCategoresMain .sosCatMainCont a:nth-last-child(2),
.sosCategoresMain .sosCatMainCont a:nth-last-child(3){
	border-bottom:1px solid #999;
	height:calc(3rem - 1px);
}
</style>