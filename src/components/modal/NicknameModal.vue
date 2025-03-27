<script setup lang="ts">
import {ref, watch} from "vue";
import apiClient from "@/api";
import ModalTransition from "@/components/common/ModalTransition.vue";
import type {AxiosError} from "axios";

const emit = defineEmits(['complete'])
const nickname = ref('');
const error = ref('');

watch(nickname, (newValue) => {
  if (newValue && error.value) {
    error.value = '';
  }
})

const handleBackgroundClick = () => {
  error.value = '닉네임을 입력해 주세요.'
}

const submitNickname = async () => {
  if (!nickname.value.trim()) {
    handleBackgroundClick()
    return;
  }

  try {
    await apiClient.put('/api/members/nickname', {nickname: nickname.value})
    emit('complete')
    alert('닉네임 설정이 완료되었습니다.')
  } catch (err: unknown) {
    const axiosError = err as AxiosError<{ name: string; message: string; }>
    const errorCode = axiosError.response?.data?.name

    switch (errorCode) {
      case 'ALREADY_SET_NICKNAME':
        error.value = '이미 닉네임이 설정된 계정입니다.'
        break;
      case 'EXISTS_NICKNAME':
        error.value = '이미 사용 중인 닉네임입니다.'
        break;
      default:
        error.value = axiosError.response?.data?.message || '닉네임 저장 중 오류가 발생했어요.';
    }
  }
}
</script>

<template>
  <ModalTransition>
    <div
      class="fixed inset-0 backdrop-blur-sm bg-black/70 z-50 flex justify-center items-center"
      @click.self="handleBackgroundClick"
    >
      <div class="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg text-center">
        <h2 class="text-xl font-bold mb-4">닉네임을 설정후 회원가입을 완료해 주세요</h2>
        <input
          v-model="nickname"
          type="text"
          maxlength="10"
          placeholder="닉네임 입력"
          class="w-full border-2 border-solid border-blue-400 px-4 py-2 rounded-md text-lg focus:outline-none focus:ring-1 focus:ring-blue-900"
        />
        <p class="text-m text-center text-gray-500 mt-1">최대 10글자까지 입력 가능합니다.</p>
        <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
        <button
          @click="submitNickname"
          class="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-bold">저장
        </button>
      </div>
    </div>
  </ModalTransition>
</template>
