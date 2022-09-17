<template>
  <div>
    <div style="padding-top:10px">
      <el-upload
          class="upload-demo"
          drag
          action="/api/upload"
          name="file"
          :limit="10"
          :on-success="uploadSuccess"
          multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">请上传 .las 文件，且单个文件不超过1GB</div>
      </el-upload>
    </div>


    <div style="margin-top:20px ">
      <div class="data-container">
        <div class="data-box" v-for="item in dataList" :key="item.id">
          <div class="data-box-title">
            <el-button type="text" @click="downloadFile(item.id,0)"><h4>{{ item.name }}</h4></el-button>
          </div>
          <!--          <div class="data-box-desc">-->
          <!--            <h5>这里是内容描述这里是内容描述这里是内容描述这里是内容描述这里是内容描述</h5>-->
          <!--          </div>-->
          <div class="data-box-time">
            <div>
              <span style="width:100px">上传时间：</span>
              <span style="width:128px">{{ item.create_time }}</span>
            </div>
            <div>
              <span style="width:100px">处理时间：</span>
              <span style="width:128px">{{ item.finished_time }}</span>
            </div>
          </div>
          <div class="data-box-btn">
            <el-button type="danger" @click="deleteData(item.id)">删除数据</el-button>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>

import {getUploadData, deleteData, predictData} from "@/api/api";

export default {
  name: "DataUploadView",
  data() {
    return {
      dataList: [],
    }
  },
  methods: {
    //加载所有数据
    getAllData() {
      getUploadData().then(res => {
            this.dataList = res
          }
      ).catch(err => {
        console.log(err)
      })
    },

    //下载文件
    downloadFile(id,resultType) {
      let api = "/api/download?id=" + id + "&resultType=" + resultType
      window.open(api)
    },
    //删除数据
    deleteData(id) {
      let that = this
      this.$confirm('这将删除数据和对应结果, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteData(id).then(res => {
              if (res.code === 200) {
                this.$notify({
                  duration: 2000,
                  title: '成功',
                  message: "删除成功!",
                  type: 'success',
                  offset: 60
                });
                that.getAllData();
              }
            }
        ).catch(err => {
          console.log(err)
        })
      }).catch(() => {

      });


    },
    //-----------------------上传成功---------------------------
    uploadSuccess(res, file, fileList) {
      let that = this;
      console.log("上传成功" + res)
      if (res.code === 200) {
        this.$notify({
          duration: 2000,
          title: '成功',
          message: file.name + "上传成功!",
          type: 'success',
          offset: 60
        });
        that.getAllData();
      } else {
        this.$notify({
          duration: 2000,
          title: '失败',
          message: file.name + res.message,
          type: 'error',
          offset: 60
        });
      }
    },
  },
  created() {
    this.getAllData(); //加载所有数据
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
  text-align: left;
  padding: 0 50px;
}

.data-box-btn {
  padding-top: 60px;
}

</style>