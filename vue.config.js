const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        pathRewrite: {'^/api': ''},
        target: 'http://127.0.0.1:8000', //代理到本地的端口
        changeOrigin: true, //允许跨域
        ws: true
      },
    }
  }
})
