<script setup lang="ts">
import {onMounted} from "vue";
import apiClient from "@/api";
import {useAuthStore} from "@/stores/auth";

const auth = useAuthStore();

onMounted(async () => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    try {
      const {data} = await apiClient.post('/api/auth/token')
      localStorage.setItem('accessToken', data.accessToken)
      auth.login()
    } catch (error) {
      console.error('엑세스 토큰 발급 실패', error)
    }
  } else {
    auth.login()
  }
})
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
