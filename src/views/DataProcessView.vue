<template>
  <div>
    <div style="margin-top:20px ">
      <div class="data-container">
        <div class="data-box" v-for="i in 20" :key="i"
             v-loading="loading"
             element-loading-text="正在处理中"
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgba(0, 0, 0, 0.8)">
          <div class="data-box-title">
            <h3>标题标题标题标题标题</h3>
          </div>
          <div class="data-box-desc">
            <h5 >这里是内容描述这里是内容描述这里是内容描述这里是内容描述这里是内容描述</h5>
          </div>
          <div class="data-box-time">
            <span style="display:block">上传时间：2022-10-12 10:00:01</span>
            <span style="display:block">处理时间：2022-10-12 10:00:01</span>
          </div>
          <div class="data-box-btn">
            <el-button type="info">重新处理</el-button>
            <el-button type="success">下载结果</el-button>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "DataProcessView",
  data(){
    return {
      loading:true
    }
  },
  created(){
    console.log("process")
  }
}
</script>

<style scoped>
.data-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 10px;
  justify-content: center;

}

.data-box {
  width: 300px;
  height: 300px;
  box-shadow: 2px 2px 12px #d1d1d1;
  border-radius: 10px;
  margin: 10px
}

.data-box-title{
  max-height:67px;
  overflow: hidden;
}

.data-box-desc {
  height:70px;
  overflow: hidden;
  padding: 0 10px;
  text-align: left;
  color:#8e8e8e;
}

.data-box-time {
  color: #8e8e8e;
  font-size:13px;
  font-weight:600;
}
.data-box-btn{
  padding-top:30px;
}
</style>