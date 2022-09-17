import axios from 'axios'


const instance = axios.create({
    baseURL: '/api',
    timeout: 8000
})

// 添加请求拦截器
instance.interceptors.request.use(
    function (config) {
        // axios请求前的逻辑处理
        config.headers = {
            'Content-Type':'application/json' //配置请求头
        }
        return config
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

// 添加响应拦截器
instance.interceptors.response.use(
    function (response) {
        // 对响应数据做点什么
        return response.data
    },
    function (error) {
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)
export default instance