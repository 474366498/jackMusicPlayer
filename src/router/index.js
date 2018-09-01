import Vue from 'vue'
import Router from 'vue-router'

import musicApi from '@/components/api'
import musicMain from '@/components/apiMain'
	import musicApiRem from '@/components/rem/rem.vue'
	import musicApiRak from '@/components/rak/rak.vue'
	import musicApiSos from '@/components/sos/sos.vue'
		import musicSosCategoresAll from '@/components/sos/sosCategoresAll.vue'	
		import musicSosCategoresOther from '@/components/sos/sosCategoresOther.vue'
	import musicApiRad from '@/components/rad/rad.vue'
	import musicApiMov from '@/components/mov/mov.vue'
import musicPlay from '@/components/play'
import musicSet from '@/components/set/set.vue'


import musicAdmin from '@/components/admin'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,	
  routes: [
  	{
	    path: '/',
	    name: '前台',
	    component: musicApi,
	    redirect:'/rem',
	    children : [
	    	{
			    path: '/api',
			    name: '前台',
			    component: musicMain,
			    children:[
					{
				    	path:'/rem',
				    	name:'推荐',
				    	component:musicApiRem
				    },
				    {
				    	path:'/rak',
				    	name:'排行',
				    	component:musicApiRak
				    },
				    {
				    	path:'/sos',
				    	name:'歌单',
				    	component:musicApiSos
				    },
				    {
				    	path:'/musicSos/all',
					    name:'歌单',
					    component:musicSosCategoresAll
					},
					{
						path:'/musicSos/:name',
						name:'歌单',
						component:musicSosCategoresOther
					},
				    {
				    	path:'/rad',
				    	name:'电台',
				    	component:musicApiRad
				    },
				    {
				    	path:'/mov',
				    	name:'M V',
				    	component:musicApiMov
				    }
			    ]
		    },
		    {
		    	path:'/play:id',
		    	name:'正在播放',
		    	component:musicPlay
		    },
		    {
		    	path:'/set',
		    	name:'个人设置',
		    	component:musicSet
		    }
	    ]
    },
    {
    	path:'/admin',
    	name:"后台",
    	component:musicAdmin
    }
  ]
})
