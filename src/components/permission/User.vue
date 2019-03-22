<template>
	<div class="userMgr">
		<el-row>
			<el-col :span="24">
			<div>
				<el-table
				  :data="users"
				  stripe
				  border
				  highlight-current-row
				  @current-change="handleCurrentChange"
				  class="tb-edit" 
				  style="width: 100%">
				  <el-table-column
					prop="username"
					label="姓名"
					width="180">
					<template scope="scope">
						<span v-if="scope.row.isEdit">
							<el-input size="small" v-model="scope.row.username"></el-input>
						</span>
						<span v-else>{{scope.row.username}}</span>
					</template>
				  </el-table-column>
				  <el-table-column
					prop="password"
					label="密码">
					<template scope="scope">
						<span v-if="scope.row.isEdit">
							<el-input size="small" v-model="scope.row.password"></el-input>
						</span>
						<span v-else>{{scope.row.password}}</span>
					</template>
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
					<template scope="scope">
						<span v-if="scope.row.isEdit">
							<el-select v-model="scope.row.locked">
								<el-option
									v-for="item in isEnableOptions"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</span>
						<span v-else>{{scope.row.locked ? "禁用" : "启用"}}</span>
					</template>
					
				  </el-table-column>
					   <el-table-column label="操作">
						    <template slot-scope="scope">
							<span v-if="scope.row.isEdit">
								<el-button
								  size="mini"
								  type="success" 
								  icon="el-icon-check"
								  @click="handleSave(scope.$index, scope.row)">保存</el-button>
								<el-button
								  size="mini"
								  type="danger"
								  icon="el-icon-close"
								  @click="handleCancel(scope.$index, scope.row)">取消</el-button>
							</span>
							<span v-else>
								<el-button
									size="mini"
									type="primary" 
									icon="el-icon-edit"
									@click="handleEdit(scope.$index, scope.row)">编辑</el-button>
								<el-button
								  size="mini"
								  type="danger" 
								  icon="el-icon-delete">删除</el-button>
							  </span>
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
          users: [],
		  isEnableOptions: [
			  {value:false, label : "启动"},
			  {value:true, label : "禁用"}
		  ],
		  a: ''
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
				for (let user of this.users){
					//-- 坑一，给后台的对象添加属性，必须用这样的方法才能实现双向数据的绑定，否则会出现数据更新视图不更新的现象
					this.$set(user, 'isEdit', false); 
					//user.isEdit = false;
				} 
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
		 handleCurrentChange(row,oldrow) {
			if(oldrow != null) oldrow.isEdit = false;
		 },
		 handleEdit(index,row){
			row.isEdit = true;
		 },
		 handleSave(index, row){
			 
		 },
		 handleCancel(index, row){
			 row.isEdit = false;
		 }
	  }
}
</script>


<style>
</style>
