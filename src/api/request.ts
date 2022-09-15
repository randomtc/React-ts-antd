/* axios全局配置*/
import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'antd'
import qs from "qs"

const http: AxiosInstance = axios.create({
  timeout: 4000,
})

//配置请求拦截器
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    /*发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加*/
    //   const token = localStorage.getItem('operationToken')
    //   config.headers.Authorization = `Bearer ${token}`
    // config.url = "/proxy" + config.url
    return config
  },
  (error: any) => {
    // 对请求错误做些什么
    return Promise.reject(error) 
  }
)

//配置响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    if (response.data.code === 0) {
      return response.data
    } else {
      //对响应错误做点什么
      message.error(`${response.data.message}`)
    }
  },
  (error: any) => {
    //错误处理
    message.error(httpErrorStatusHandle(error))

    //如果不需要错误处理，以上的处理过程都可省略
    // return Promise.resolve(error.response)
  }

);

export const get = (url: string = '', data = {}, timeout: number = 5000) => {
  if (qs.stringify(data)) {
    url += url.includes('?') ? '&' + qs.stringify(data) : '?' + qs.stringify(data);
  }
  return http.get(url, { timeout })
}

export const post = (url: string = '', data = {}, timeout: number = 5000) => {
  return http.post(url, data, { timeout })
}

/**
 * 处理异常
 * @param {*} error 
 */
function httpErrorStatusHandle(error: any): string {
  let message: string = '';
  if (error && error.response) {
    switch (error.response.status) {
      case 302: message = '接口重定向了！'; break;
      case 400: message = '参数不正确！'; break;
      case 401: message = '您未登录，或者登录已经超时，请重新登录！'; break;
      case 403: message = '您没有权限操作！'; break;
      case 404: message = `请求地址出错: ${error.response.config.url}`; break; // 在正确域名下
      case 408: message = '请求超时！'; break;
      case 409: message = '系统已存在相同数据！'; break;
      case 500: message = '服务器内部错误！'; break;
      case 501: message = '服务未实现！'; break;
      case 502: message = '网关错误！'; break;
      case 503: message = '服务不可用！'; break;
      case 504: message = '服务暂时无法访问，请稍后再试！'; break;
      case 505: message = 'HTTP版本不受支持!'; break;
      default: message = '异常问题，请联系管理员！'; break
    }
  }
  if (error.message.includes('timeout')) message = '网络请求超时！'
  if (error.message.includes('Network')) message = window.navigator.onLine ? '服务端异常！' : '您断网了！'
  return message
}

