<template>
	<el-row>
		<el-col :span="23"><div class="head-wrap" @click="home()"><b>Longan Cloud</b>云平台</div></el-col>
		<el-col :span="1"><span><b>老纪</b></span></el-col>
	</el-row>
	
</template>

<script>
	export default {
		name: 'Header',
		methods: {
			home(){
				this.$router.push({name : 'home'});
			}
		}
	}
</script>

<style>
	.head-wrap{

	}
</style>
