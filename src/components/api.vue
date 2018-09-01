<template>
  <div id="Api">
    <header id="apiHead">
     <router-link class="l" 
      v-bind:title="headLeftBtn" 
      v-bind:class="headLeftBtn"
      v-bind:to="headLeftLink"
     ></router-link>
        {{ msg }} 
     <router-link class="r music" title="我的音乐" v-bind:to="{path:'play:',query:{id:index} }"></router-link>
    </header>

    <main id="apiMain">
      <router-view 
        v-on:viewIn="changeTitle" 
      ></router-view>
    </main>

    <footer id="apiFoot" v-show="apiFootFlg">
       <router-link class="mPlay" v-bind:to="{path:'play:',query:{id:index} }">
          <div class="albumArt l">
            <div class="center">
              <img v-bind:src="ms.pic" />
            </div>
          </div>
          <div class="cover l">
            <div class="info l">
              <p> {{ ms.song }} </p>
              <p> {{ ms.singer }} </p>
            </div> 
            <button class="r play">
                 
            </button>
          </div>
       </router-link>
    </footer>

  </div>
</template>
<script>
export default {
  created (){
    this.msg = this.$route.name
    //console.log(this.$route.name) 
  },
  data () {
    return {
      msg : ' ',
      headLeftBtn:'menu',
      headLeftLink:{name:'个人设置',params:{userId:123} },
      songsList:[],
      index:null,
      ms:{},
      apiFootFlg:true
    }
  },
  beforeRouteEnter (to,from,next){
    console.log(to.path)
    next(vm => {
      if (to.path ==='/set' || to.path === '/play:') {  // 按钮class重置
        vm.headLeftBtn = 'back'
        vm.headLeftLink = {path:'/'}
        vm.apiFootFlg = false
      }
      vm.$ajax.get('/music/songsList')
        .then((res) => {
        vm.songsList = res.data.data
        vm.index = Math.floor(Math.random() * vm.songsList.length)
        vm.ms = vm.songsList[vm.index]
        console.log(vm.songsList,vm.index,vm.ms)
      })
    })
  },
  beforeRouteUpdate (to,from,next) {
    console.log(to.path,from)
    if (to.path === '/play:') {
      this.apiFootFlg = !this.apiFootFlg
      this.headLeftBtn = 'back'
      next()
    } else {
      this.apiFootFlg = true
      this.headLeftBtn = 'menu'
      next()
    }
    if (to.path ==='/set' || to.path === '/play:') {  // 按钮class重置
      this.headLeftBtn = 'back'
      this.headLeftLink = {path:'/'}
    } else {
      this.headLeftLink = {name:'个人设置',params:{userId:123} }
    }
  },
  beforeRouteLeave (to,from,next) {
    console.log(to,from)
    console.log(this)
  },
  watch : {
    $route (to , from) {
      this.msg = this.$route.name
    }
  },
  methods :{
    changeTitle (str) {
      // this.msg = str 
    }
  },
  mounted () {
    // this.msg = this.$route.name
  },
  components : {
    
  }
}
</script>

<style>
@import '../assets/common/css/index.css';
#Api {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  width:100%;
  height:100%;
  display:block;
  background:url(../assets/common/images/index-bg.png) no-repeat;
  background-size:cover;
  overflow-y:auto;
}
#apiHead{
   position:absolute;
   left:0;
   right:0;
   padding-left:1.5rem;
   padding-right:1.5rem;
   top:0;
   height:5rem;
   line-height:5rem;
   font-size:200%;
   color:white;
   z-index:10;
   background:linear-gradient(to bottom,#5b5dce , #4d7ab1);
}

#apiHead .menu::before , #apiHead .menu::after{
  content:'';
  width:2.5rem;
  position:absolute;
  display:block;
  left:0;
  box-sizing:border-box;
  border-top:.25rem solid white;
  border-bottom:.25rem solid white;
}
#apiHead .menu::before{
  height:2rem;
} 
#apiHead .menu::after{
  height:.8rem;
  top:50%;
  margin-top:-.4rem;
}
#apiHead .back::before , #apiHead .back::after {
  position:absolute;
  content:'';
  position:absolute;
  left:1rem;
}
#apiHead .back::before {
  width:.6rem;
  background:white;
  height:1rem;
  display:block;
  transform:skew(-30deg);
  top:0;
} 
#apiHead .back::after {
  width:.6rem;
  background:white;
  height:1rem;
  display:block;
  transform:skew(30deg);
  top:1rem;
}

#apiHead .menu , #apiHead .back {
   //background:url(../assets/common/images/menu.png) no-repeat;
   background-size:cover;
   width:2.5rem;
   height:2rem;
   display:block;
   margin-top:1.5rem;
   position:relative;
}


#apiHead .music {
   background:url(../assets/common/images/headset.png) no-repeat;
   background-size:cover;
   width:2.5rem;
   height:2rem;
   display:block;
   margin-top:1.5rem;
}
#apiMain {
  position:absolute;
  top:5rem;
  bottom:5.5rem;
  width:100%;
  overflow-y:auto;
}
#apiFoot{
   position:absolute;
   left:0;
   right:0;
   padding-left:0.3rem;
   padding-right:0.3rem;
   bottom:0;
   height:5rem;
   z-index:10;
   box-shadow:0px -1px 3px white;
   background:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,.8));
}
.albumArt{
   width:7rem;
   height:7rem;
   background:pink;
   border-radius:3.5rem;
   margin-top:-2rem;
   display:flex;
   flex-wrap:wrap;
}
.albumArt.l{
  -webkit-box-pack:center;
  -webkit-justify-content:center;
  -ms-flex-pack:center;
  justify-content:center;
  align-items:center;
}
.albumArt , .albumArt *, .albumArt:after , .albumArt:before{
  box-sizing:border-box;
}
.albumArt .center{
  border-radius:3.5rem;
  overflow:hidden;
}
.albumArt img{
  width:7rem;
  height:7rem;
}
.albumArt + .cover {
   width: calc(100% - 8.4rem);
   padding-left:1rem;
   box-sizing:border-box;
}
.albumArt + .cover .info{
  width:calc(100% - 3.2rem);
}
.albumArt + .cover  p{
  line-height:3rem;
  font-size:140%;
  text-align:left;
  color:white;
  width:calc(100% - .2rem);
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.albumArt + .cover p + p{
  font-size:120%;
  line-height:2rem;
}
.cover .play::before{
  content:'';
  border:.8rem solid transparent;
  border-left:1rem solid white;
  display:block;
  position:absolute;
  left:1.1rem;
  top:.55rem;
}
.albumArt + .cover .play{
  width:3rem;
  height:3rem;
  display:inline-block;
  padding:0;
  margin:1rem 0 0;
  border-radius:1.5rem;
  background:rgba(255,255,255,0);
  border:1px solid rgba(255,255,255,1);
  position:relative;
}
</style>