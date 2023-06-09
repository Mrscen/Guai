import axios from 'axios'

import store from '@/store'

/**
 * (1) request 相当于 axios 的实例对象
 * (2) 为什么要有 request, 而不是直接用 axios
 *     项目开发中，有可能会有两个及地址。不同的接口配置不同（右到要token, 有的不用）
 */

const request = axios.create({
    baseURL:'/xg', // 设置及地址
    timeout: 3000
})

// 添加请求拦截器
request.interceptors.request.use(
    function(config){
        // 发送请求前
        return config
    },
    function(error){
        //  请求错误时 
        return Promise.reject(error)
    }
)

// 添加响应拦截器
request.interceptors.response.use(
    function(response){
        // 对响应数据的操作
        return response.data
    },
    function(error){
        // 响应错误时的操作
        return Promise.reject(error)
    }
)

export default request