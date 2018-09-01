<template>
	<div class="sosCategoresOther"> 
		<div class="sosCategoresMain">
			<h2> {{ msg }} </h2>
			<div class="sosCategoresItem" 
				v-bind:class="'s_c_i-'+index"
				v-for="(item , index ) in items"
				v-bind:key="index">
				<div class="l item-special">
					<img 
						v-bind:src="item.pic" 
						v-bind:alt="item.title" 
					/>
					<span class="play"></span>
				</div>
				<div class="l item-songInfo">
					<ul class="item-songLists">
						<li 
							v-for="(ms , index) in item.child"
							v-bind:key="index"
						>
							<a class="ms-info">
								<strong> {{ ms.id }}</strong>
								<label> {{ ms.song }} </label>
								<span> -- {{ ms.singer }}</span>
							</a>
						</li>
					</ul>
				</div>
				
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		created () {
			this.$ajax.get('/sos/cat')
				.then((res) => {
					res.data.data.forEach( (item) => {
						if (item.id === this.id) {
							this.items = item.main
							this.msg = item.title
						}
					})
				})
		},
		data () {
			return {
				msg : null,
				items:null,
				id:this.$route.query.id
			}
		},
		mounted () {
			console.log(this.$route.query.id)
		}
	}
</script>

<style>
	.sosCategoresOther {
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
	.sosCategoresOther .sosCategoresItem {
		overflow:hidden;
		padding:1rem;
	}
	.sosCategoresOther .sosCategoresItem .item-special{
		width:10rem;
		height:10rem;
		position:relative;
	}
	.sosCategoresOther .sosCategoresItem .item-special img{
		width:10rem;
		height:10rem;
	}
	.sosCategoresOther .sosCategoresItem .item-special .play::before{
		content:'';
		position:absolute;
		border:.6rem solid transparent;
		border-left:.8rem solid #222;
		left:.8rem;
		top:.4rem;
	}
	.sosCategoresOther .sosCategoresItem .item-special .play{
		position:absolute;
		border-radius:1rem;
		width:2rem;
		height:2rem;
		display:block;
		bottom:1rem;
		right:1rem;
		background:radial-gradient(rgba(255,255,255,.8),rgba(255,255,255,.6));
		box-shadow:1px 1px 2px white inset;
	}

	.sosCategoresOther .sosCategoresItem .item-songInfo{
		width:calc(100% - 11rem);
		padding:2rem 0;
		padding-left:.5rem;
	}
	.sosCategoresOther .sosCategoresItem .item-songInfo li{
		text-align:left;
	}
	
	.sosCategoresOther .sosCategoresItem .item-songInfo li strong,
	.sosCategoresOther .sosCategoresItem .item-songInfo li label{
		float:left;
		padding:0 .2rem;
	}
	.sosCategoresOther .sosCategoresItem .item-songInfo li strong,
	.sosCategoresOther .sosCategoresItem .item-songInfo li label,
	.sosCategoresOther .sosCategoresItem .item-songInfo li span{
		line-height:2rem;
		height:2rem;
		display:inline-block;
	}
	.sosCategoresOther .sosCategoresItem .item-songInfo li label {
		max-width: calc(100% - 8rem);
		display:inline-block;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
</style>