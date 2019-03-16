<template>
	<el-container>
	  <el-header class="header">
		<longan-head></longan-head>
	  </el-header>
	  <el-container>
		<el-aside width="200px">
          <longan-nav></longan-nav>
        </el-aside>
		<el-main>
			<router-view></router-view>
		</el-main>
	  </el-container>
	</el-container>
</template>

<script>
	import LeftNav from './LeftNav'
	import Header from './Header'
	
	export default {
		name: 'Admin',
		components: {
			'longan-nav' : LeftNav,
			'longan-head' : Header
		}
	}
</script>
	
<style>
	.header {
	  background-color: cornflowerblue;
	  color: #fff;
	  line-height: 60px;
	}
</style>
