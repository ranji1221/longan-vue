import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './plugins/axios.js'
import './plugins/moment.js'
import store from './plugins/store.js'
import router from './plugins/router.js'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
	router,
	store
}).$mount('#app')
