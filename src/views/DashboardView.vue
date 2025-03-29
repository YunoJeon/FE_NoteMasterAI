<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import SummaryInputArea from "@/components/summary/SummaryInputArea.vue";
import NicknameModal from "@/components/modal/NicknameModal.vue";
import apiClient from "@/api";
import {ref, watchEffect} from "vue";
import {useAuthStore} from "@/stores/auth";

const auth = useAuthStore();
const showNicknameModal = ref(false);

watchEffect (async () => {
  console.log('auth.is logged in: ', auth.isLoggedIn)
  if (!auth.isLoggedIn || showNicknameModal.value) return;

  try {
    const {data} = await apiClient.get('/api/members/nickname-exists')
    if (!data) showNicknameModal.value = true;
  } catch (error) {
    console.error('닉네임 존재 여부 확인 실패', error);
  }
});
</script>

<template>
  <AppLayout>
    <div class="flex justify-center items-center min-h-[calc(100vh-4rem)] p-6">
      <SummaryInputArea />
    </div>
    <NicknameModal v-if="showNicknameModal" @complete="showNicknameModal = false" />
  </AppLayout>
</template>
