import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.withCredentials=true	//--解决跨域的问题
Vue.use(VueAxios, axios)