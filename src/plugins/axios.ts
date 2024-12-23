import axios, { type AxiosInstance } from 'axios'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import example from '@/service/example'

let http: AxiosInstance

export default () => {
    const authStore = useAuthStore()
    const { accessToken } = storeToRefs(authStore)
    const { clientId } = storeToRefs(authStore)

    http = axios.create({
        baseURL: process.env.API_URL,
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 60 * 1000,
        transitional: {
          clarifyTimeoutError: true //區分 ECONNABORTED 跟 ETIMEDOUT
        },
        validateStatus: function (status) {
          return status >= 200 && status < 300 // default 值，範圍以外都進 catch
        }
    })
    Object.assign(http, { isPassError: false, isLoading: true });

    http.interceptors.request.use(
      (request) => {
        request.headers['Authorization'] = accessToken.value
          ? `Bearer ${accessToken.value}`
          : ''
        request.headers['Client-ID'] = clientId.value
          ? clientId.value
          : ''
  
        return request
      },
      (error) => {
        return Promise.reject(error)
      }
    )

      // 全局設定 Response 攔截器
    http.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      if (error.response) {
        switch (error.response.status) {
        case 401:
          if (
          // 不是 toekn 的 url 發生 401 才需要更新 accessToken
          // 驗證 url 是否正確
            error.config.url != '/api/v1/refreshToken'
          ) {
            if (!error.config._isRetry) {
              await example.refreshToken({
                refreshToken: authStore.refreshToken
              })
              return await http
                .request({
                  url: error.config.url,
                  baseURL: error.config.baseURL,
                  data: error.config.data,
                  params: error.config.params,
                  headers: error.config.headers,
                  method: error.config.method
                })
                .finally(() => {
                })
            } else {
              // console.log('retry');
            }
          }
          break
        default:
          break
        }
      } else {
      }
      return Promise.reject(error)
    }
  )
}

export { http }