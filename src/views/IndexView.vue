<template>
  <div>
    <div class="nav">
      <el-row>
        <el-col :span="24">
          <div class="line"></div>
          <el-menu
              :default-active="this.$route.path" :router="true"
              class="el-menu-demo"
              mode="horizontal"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">

            <el-menu-item index="/index/home">
              首页<i class="el-icon-s-home"></i>
            </el-menu-item>

            <el-menu-item index="/index/upload">
              上传数据 <i class="el-icon-upload"></i>
            </el-menu-item>

            <el-menu-item index="/index/process">
              数据处理<i class="el-icon-data-analysis"></i>
            </el-menu-item>

            <el-menu-item index="/index/download">
              结果预览<i class="el-icon-view"></i>
            </el-menu-item>


          </el-menu>
        </el-col>
      </el-row>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>


</template>

<script>
export default {
  name: "IndexView",
  data() {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  background-color: #545c64;
  width:100%;
  z-index: 2001;
}

.content {
  margin-top: 61px;
}
</style>