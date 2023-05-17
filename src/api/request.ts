import axios, { type AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASEURL,
  timeout: 10 * 1000,
  responseType: 'json',
})
// 请求拦截器
request.interceptors.request.use((config) => {
  // 同意设置用户身份 token
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export function uploadFile(config: AxiosRequestConfig<any>) {
  const data = new FormData()
  const params = config.data
  Object.keys(params).forEach(key => data.append(key, params[key]))
  return request.request({
    ...config,
    data,
    headers: {
      'Content-Type': 'multipart/form-data;charset=UTF-8',
    },
  })
}

export default request
