import axios from "axios";
import router from "@/router";
import {useAuthStore} from "@/stores/auth";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
})

apiClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config;
})

apiClient.interceptors.response.use((response) => response,
  async (error) => {
    const originalRequest = error.config
    const errorCode = error.response?.data?.errorCode

    if (errorCode === 'INVALID_TOKEN') {
      originalRequest._retry = true

      try {
        const {data} = await apiClient.post('/api/auth/token')
        localStorage.setItem('accessToken', data.accessToken)
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`

        return apiClient(originalRequest);
      } catch (error) {
        console.error('토큰 갱신 실패', error);
      }
    }

    if (errorCode === 'INVALID_REFRESH_TOKEN') {
      const auth = useAuthStore();

      localStorage.removeItem('accessToken');
      auth.logout();

      alert('로그인이 만료되어 재로그인이 필요합니다.');

      router.push('/');
    }
    return Promise.reject(error);
  })

export default apiClient
