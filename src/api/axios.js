// import { ErrorPageNameMap } from '@/enums/pageEnum'

import { ResultEnum } from '@/enums/httpEnum'
import axios from 'axios'

// import { redirectErrorPage } from '@/utils'

const axiosInstance = axios.create({
  baseURL: import.meta.env.DEV ? import.meta.env.VITE_DEV_PATH : import.meta.env.VITE_PRO_PATH,
  timeout: ResultEnum.TIMEOUT
})

axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (res) => {
    const { code } = res.data
    if (code === undefined || code === null) return Promise.resolve(res.data)
    if (code === ResultEnum.DATA_SUCCESS) return Promise.resolve(res.data)
    // 重定向
    // if (ErrorPageNameMap.get(code)) redirectErrorPage(code)
    return Promise.resolve(res.data)
  },
  (err) => {
    Promise.reject(err)
  }
)

export default axiosInstance
