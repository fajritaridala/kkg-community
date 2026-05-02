import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { API_URL } from '../../env'

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  // headers: {
  //   'Content-Type': 'application/json',
  //   Accept: 'application/json',
  // },
})

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error(`[API Error]: ${error.message}`)

    return Promise.reject(error)
  }
)

export default api
