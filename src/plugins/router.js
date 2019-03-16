import Vue from 'vue'
import Router from 'vue-router'

//-- 组件模块
import Admin from '../components/home/Layout.vue'
import Home from '../components/home/Home.vue'
import User from '../components/permission/User.vue'
import Role from '../components/permission/Role.vue'
import Permission from '../components/permission/Permission.vue'
import Login from '../components/Login.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history', //-- 如果你不更改设置的话，vue会默认使用hash模式，该模式下会将路径格式化为#开头
	routes: [
		{
			path:'/login', 
			name:'login', 
			component:Login,
		},
		{
			path:'/', 
			component:Admin, 
			meta:{requireAuth:true}, 
			redirect: '/admin/home',
		},
		{	
			path:'/admin', 
			name:'admin', 
			component:Admin, meta:{requireAuth:true}, 
			redirect: '/admin/home',
			children : [
				{path:'home', name:'home', component:Home, meta:{requireAuth:true}},
				{path:'user', name:'user', component:User, meta:{requireAuth:true}},
				{path:'role', name:'role', component:Role, meta:{requireAuth:true}},
				{path:'permission', name:'permission', component:Permission, meta:{requireAuth:true}}
		]}
		
	]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
	
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if(JSON.parse(localStorage.getItem('islogin'))){ //判断本地是否存在access_token
      next();
    }else {
      next({
        path:'/login'
      })
    }
  }
  else {
    next();
  }
  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
  if(to.fullPath == "/login"){
    if(JSON.parse(localStorage.getItem('islogin'))){
      next({
        path:from.fullPath
      });
    }else {
      next();
    }
  }
});

export default router;
