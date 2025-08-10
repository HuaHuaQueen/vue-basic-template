import axios, {
  type InternalAxiosRequestConfig,
  type AxiosResponse,
  type AxiosInstance,
  type AxiosError
} from 'axios'
import { ResultCodeEnum } from '@/common/enums/ResultCodeEnum.ts'

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<AbstractResult>) => {
    // 如果响应是二进制流，则直接返回（用于文件下载、Excel 导出等）
    if (response.config.responseType === 'blob') {
      return response
    }
    const { code, data, msg } = response.data

    // 请求成功
    if (code === ResultCodeEnum.SUCCESS) {
      return data
    }

    return Promise.reject(new Error(msg || 'Error'))
  },
  (error: AxiosError) => {
    return Promise.reject(error.message)
  }
)
