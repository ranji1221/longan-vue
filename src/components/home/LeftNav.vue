<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      unique-opened
      router
      text-color="#333" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>权限管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="userMgr()">用户管理</el-menu-item>
            <el-menu-item index="1-2" @click="roleMgr()">角色管理</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>文件管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="videoMgr()">视频管理</el-menu-item>
            <el-menu-item index="2-2" @click="voiceMgr()">音频管理</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-menu-item index="2-4">选项4</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      },
			userMgr(){
				this.$router.push({name : 'user'});
			},
			roleMgr(){
				this.$router.push({name : 'role'});
			},
			videoMgr(){
				this.$router.push({name : 'video'});
			},
			voiceMgr(){
				this.$router.push({name : 'voice'});
			}
    }
  }
</script>