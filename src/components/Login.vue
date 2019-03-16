<template>
	<div class="login">
		<el-form :model="user" ref="userForm" :rules="rules" label-width="80px">
				<el-form-item label="用户名" prop="username">
						<el-input v-model="user.username"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
						<el-input v-model="user.password" type="password"></el-input>
				</el-form-item>
				<el-form-item>
								<el-button type="primary"  @click="submitForm('userForm')">登录</el-button>
								<el-button @click="resetForm('userForm')">重置</el-button>
				</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
	  name: 'Login',
		data(){
			return{
				user : {
					username : '',
					password : ''
				},
				rules : {
					username : [
						{required: true, message: "请输入用户名", trigger: "blur"}
					],
					password : [
						{required: true, message: "请输入密码", trigger: "blur"}
					]
				}
			}
		},
		methods: {
			//-- 提交表单
			submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				var that = this;
			  if (valid) {	//-- 校验成功提交表单
							/*构造表单数据的方法
							console.log(that.user);
							console.log(this)
							var fd = new FormData();
							fd.append('username',that.user.username);
							fd.append('password',that.user.password);*/
							that.axios.post(
								"/jersey/longan-api/login",
								that.user
							).then(res=>{
								if(res.status == 200 && res.data.login == "success"){
									that.$store.commit('login',true);
									that.$router.push({path : '/admin'});
								}
							});
			  } else {
				return false;
			  }
			});
		  },
			//-- 重置表单
			resetForm(formName) {
        this.$refs[formName].resetFields();
      }
		}
	}
</script>
	
<style>
	
</style>
