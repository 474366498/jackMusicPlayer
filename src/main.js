// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

var vueTouch = require('vue-touch')

Vue.config.productionTip = false

Vue.use(vueTouch,{name:'v-touch'})
Vue.prototype.$ajax = Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


Vue.filter('timeConversion',function (value) {
	var v = parseInt(value).toFixed(0)
	if (value < 60){
		if ( v < 10 ){
			return '00:0' + v
		}
		return '00:' + v
	} else {
		if ( v % 60 < 10) {
			return '0' + Math.floor(v / 60) + ':0' + (v % 60)
		}
		return '0' + Math.floor(v / 60) + ':' + (v % 60)
	}
})
