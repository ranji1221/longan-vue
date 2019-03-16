<template>
	<div class="userMgr">
		<el-row>
			<el-col :span="24">
			<div>
				<el-table
				  :data="users"
				  stripe
				  border
				  style="width: 100%">
				  <el-table-column
					prop="username"
					label="姓名"
					width="180">
				  </el-table-column>
				  <el-table-column
					prop="password"
					label="密码">
				  </el-table-column>
				   <el-table-column
					prop="createTime"
					label="创建时间"
					:formatter="dateFormat">
				  </el-table-column>
				  <el-table-column
					prop="locked"
					label="是否启动"
					:formatter="isEnable">
				  </el-table-column>
					   <el-table-column label="操作">
						    <template slot-scope="scope">
							<el-button
							  size="mini"
							  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button
							  size="mini"
							  type="danger">删除</el-button>
							</template>	
						</el-table-column>
				</el-table>
			</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>

export default {
      data() {
        return {
          users: []
        }
      },
	  mounted() {
	  	this.getUsers();
	  },
	  methods:{
		 getUsers(){
			var that = this;
			that.axios.get(
				"/jersey/longan-api/users"
			).then(res=>{
				console.log(res.data);
				this.users = res.data;
			}); 
		 },
		 dateFormat(row, column){
			var date = row[column.property];
          	if (date == undefined) {
             	return "";
          	}
	        return this.moment(date).format("YYYY-MM-DD HH:mm:ss");
		 },
		 isEnable(row,column){
			var locked = row[column.prototype];
			return locked ? '禁用':'启用';
		 },
		 handleEdit(index,row){
			 console.log(index);
			 console.log(row);
		 }
	  }
}
</script>


<style>
	
</style>
