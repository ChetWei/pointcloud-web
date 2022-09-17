<template>
  <div>
    <div style="margin-top:20px ">
      <div class="data-container">
        <div class="data-box" v-for="item in dataList" :key="item"
             v-loading="item.is_predict==2"
             element-loading-text="正在处理中"
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgba(0, 0, 0, 0.8)">
          <div class="data-box-title">
            <h3>{{ item.name }}</h3>
          </div>
          <!--          <div class="data-box-desc">-->
          <!--            <h5>这里是内容描述这里是内容描述这里是内容描述这里是内容描述这里是内容描述</h5>-->
          <!--          </div>-->
          <div class="data-box-time">
            <span style="display:block">上传时间：{{ item.create_time }}</span>
            <span style="display:block">处理时间：{{ item.finished_time }}</span>
          </div>
          <div class="data-box-btn">

            <el-button type="primary" disabled v-if="item.is_predict===1" @click="processData(item.id)">处理数据</el-button>
            <el-button type="primary" v-if="item.is_predict===0" @click="processData(item.id)">处理数据</el-button>
            <el-button type="success" v-if="item.is_predict===1" @click="downloadFile(item.id,1)">下载结果</el-button>
            <el-button type="success" disabled v-if="item.is_predict===2" @click="downloadFile(item.id,1)">下载结果</el-button>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>

import {getResultData, predictData} from "@/api/api";

export default {
  name: "DataProcessView",
  data() {
    return {
      loading: true,
      dataList: []
    }
  },
  created() {
    this.getAll()
  },
  methods: {
    getAll() {
      getResultData().then(res => {
            this.dataList = res
          }
      ).catch(err => {
        console.log(err)
      })
    },
    //处理数据
    processData(id) {
      let that = this
      this.$confirm('提交处理需要一段时间, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        predictData(id).then(res => {
              this.$message({
                message: '正在处理，请勿重复提交',
                type: 'success',
                offset: 60
              });
              that.getAll()
            }
        ).catch(err => {
          console.log(err)
        })
      }).catch(() => {

      });
    },
    //下载文件
    downloadFile(id, resultType) {
      let api = "/api/download?id=" + id + "&resultType=" + resultType
      window.open(api)
    },
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

.data-box-title {
  max-height: 67px;
  overflow: hidden;
}

.data-box-desc {
  height: 70px;
  overflow: hidden;
  padding: 0 10px;
  text-align: left;
  color: #8e8e8e;
}

.data-box-time {
  color: #8e8e8e;
  font-size: 13px;
  font-weight: 600;
}

.data-box-btn {
  padding-top: 60px;
}
</style>