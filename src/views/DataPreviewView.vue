<template>
  <div>
    <el-row>
      <div>
        <el-col :span="11" :offset="1">
          <div class="demo-image__placeholder">
            <div class="block">
              <span class="demonstration">原始</span>
              <el-image :src="raw_src">
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
            </div>
          </div>
        </el-col>

        <el-col :span="11">
          <div class="demo-image__placeholder">
            <div class="block">
              <span class="demonstration">分割结果</span>
              <el-image :src="result_src">
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
            </div>
          </div>
        </el-col>
      </div>
    </el-row>
    <el-row>
      <el-col :offset="12" :span="11">
        <div style="margin-left: 20px;display: flex ">
          <ColorMarker category="棚房" typeColor="#ffdf44"></ColorMarker>
          <ColorMarker category="混凝土房" typeColor="#FFB1B4"></ColorMarker>
          <ColorMarker category="绿地" typeColor="#ff0f1b"></ColorMarker>
          <ColorMarker category="荒地" typeColor="#69ff2e"></ColorMarker>
          <ColorMarker category="路" typeColor="#B46364"></ColorMarker>
          <ColorMarker category="车" typeColor="#5ed2ff"></ColorMarker>
          <ColorMarker category="其他" typeColor="#ff7700"></ColorMarker>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>

import ColorMarker from "@/components/ColorMarker"
export default {
  name: "DataPreviewView",
  components:{
    ColorMarker
  },
  data() {
    return {
      raw_src: require('@/assets/raw/raw.jpg'),
      result_src: require('@/assets/result/result.jpg')
    }
  },
  created() {
    console.log("preview")
  }

}
</script>

<style scoped>
.demo-image__placeholder {
  padding: 2px;
}

.demonstration{
  font-weight: 700;
}

</style>