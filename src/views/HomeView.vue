<template>
  <div>
    <el-row>
      <el-col>
        <h1>首页</h1>
<!--        <div style="margin-top:10px">-->
<!--          <el-button @click="createProject()" type="primary" style="width:100%">新建项目</el-button>-->
<!--        </div>-->
      </el-col>
    </el-row>

    <el-dialog  title="新建项目" :visible.sync="dialogFormVisible" class="createDialog">
      <el-form :model="myform" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="myform.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="myform.description" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addProject()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      dialogFormVisible:false,
      myform:{
        name:'',
        description:''
      }
    }
  },
  methods:{
    createProject(){
      this.dialogFormVisible = true
    },
    addProject(){

    }
  },
  created() {
    console.log("home")
  }
}
</script>