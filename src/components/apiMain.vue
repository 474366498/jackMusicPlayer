<template>
	<div> 
		<nav>
			<div class="nav-item" 
			    v-for='(item,index) in items'
			    v-bind:key="item.name"
			    v-on:click='tabToggle(index)' >
			 <router-link v-bind:to="{path:'/'+item.link,query:{title:item.name},activeClass:'route-link-active bottom-nav-active'}">
			    {{ item.name }}
			 </router-link>
			</div>
		</nav>
		
		<main>
			<router-view> </router-view>	
		</main>
	</div>
</template>

<script>
	export default {
		created () {
			this.$emit('viewIn',this.items[this.nowIndex].name)
		},
		data () {
			return {
				items :[
			        {"id":0,"name":"推荐","link":"rem"},
			        {"id":1,"name":"排行","link":"rak"},
			        {"id":2,"name":"歌单","link":"sos"},
			        {"id":3,"name":"电台","link":"rad"},
			        {"id":4,"name":"M V","link":"mov"}
			      ],
			  nowIndex : 0    
			}
		},
		methods :{
			tabToggle (ind){
				this.nowIndex = ind
				this.$emit('viewIn',this.items[this.nowIndex].name)
			}
		}
	}
</script>

<style>
#apiMain nav{
  min-height:3rem;
}
#apiMain nav .nav-item{
   width:20%;
   float:left;
   text-align:center;
}
#apiMain nav .nav-item a{
   color:white;
   font-size:120%;
   line-height:3rem;
}
#apiMain nav .nav-item a.router-link-exact-active.router-link-active{
   color:skyBlue;
}
#apiMain main{
	padding:.5rem;
}
</style>