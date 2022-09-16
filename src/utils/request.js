import axios from 'axios'


const request = axios.create({
    baseURL: '/api',
    timeout: 5000
})

//请求拦截
request.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

//响应拦截
request.interceptors.response.use(
    response => {
        return res
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default request