import axios, {
  type InternalAxiosRequestConfig,
  type AxiosResponse,
  type AxiosInstance, AxiosError
} from 'axios'

// 创建 axios 实例
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.reject()
  },
  (error: AxiosError) => {
    return Promise.reject(error.message)
  }
)
