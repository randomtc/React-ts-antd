/*
 * axios全局配置
 */
import axios from "axios"
import { message } from "antd"
import qs from "qs"

const instance = axios.create({
  timeout: 4000
})

//配置请求拦截器
instance.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem("access_token")
    if (token) {
      config.headers!.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

//配置响应拦截器
instance.interceptors.response.use(
  response => {
    if (response?.data?.code === 200) {
      return response?.data
    } else {
      message.error(response?.data?.message || "系统异常")
      return Promise.reject(response?.data)
    }
  },
  async error => {
    return Promise.reject(error)
  }
)

export const getRequest = (url = "", data = {}) => {
  if (qs.stringify(data)) {
    url += url.includes("?")
      ? "&" + qs.stringify(data)
      : "?" + qs.stringify(data)
  }
  return instance.get(url)
}

export const postRequest = (url = "", data = {}) => {
  return instance.post(url, data)
}
