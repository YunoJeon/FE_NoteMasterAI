<script setup lang="ts">
import {ArrowDownTrayIcon, MicrophoneIcon, ArrowTurnDownRightIcon} from '@heroicons/vue/24/solid'
import {ref} from 'vue'
import BaseButton from "@/components/common/buttons/BaseButton.vue";
import apiClient from "@/api";
import SummaryResultModal from "@/components/modal/SummaryResultModal.vue";
import {Vue3Lottie} from "vue3-lottie";

const text = ref('')

const isModalOpen = ref(false);
const result = ref<{ title: string, summary: string, noteId: number } | null>(null);

const isLoading = ref(false);

const requestSummary = async () => {
  if (!text.value.trim()) return;

  isLoading.value = true;

  try {
    // 로딩 테스트
    // await new Promise((resolve) => setTimeout(resolve, 10000));
    //
    // result.value = {
    //   title: '제목',
    //   summary: '내용',
    //   noteId: 0,
    // }
    const {data} = await apiClient.post('/api/summary', {
      text: text.value
    })
    result.value = {
      title: data.title,
      summary: data.summaryResponse,
      noteId: data.noteId
    }
    isModalOpen.value = true
  } catch (error) {
    alert('요약 요청에 실패했습니다.')
    console.error('요약 실패', error)
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div v-if="isLoading" class="fixed inset-0 z-50 bg-white/80 flex flex-col items-center justify-center">
    <Vue3Lottie
      :animation-link="'/animations/ai-loading.json'"
      :loop="true"
      :autoplay="true"
      style="width: 120px; height: 120px;"
    />
    <p class="text-blue-500 text-xl font-bold typing-animation">AI 가 빠르게 요약중!</p>
  </div>
  <div class="w-full max-w-3xl mx-auto text-center">
    <h2 class="text-3xl font-bold mb-6">
      긴 텍스트, 문서 및 음성파일을 쉽고 빠르게 요약해 보세요!
    </h2>
    <div class="relative w-full">
      <textarea
        v-model="text"
        class="w-full p-4 pr-2 border-2 border-solid border-[#00A8E8] rounded-2xl resize-none shadow-xl"
        rows="5"
        placeholder="언어 상관없이 텍스트로 요약 해보세요!"
      ></textarea>
    </div>
    <div class="mt-2 flex justify-between">
      <div class="flex gap-2">
        <BaseButton
          :icon="ArrowDownTrayIcon"
          sizeClass="px-3 py-1 bg-[#82AAD4] hover:bg-[#007BFF]"
        >
          문서 업로드
        </BaseButton>
        <BaseButton
          :icon="MicrophoneIcon"
          sizeClass="px-3 py-1 bg-[#82AAD4] hover:bg-[#007BFF]"
        >
          음성 변환
        </BaseButton>
      </div>
      <BaseButton
        :icon="ArrowTurnDownRightIcon"
        sizeClass="px-6 py-2.5 text-lg font-bold rounded-md bg-[#82AAD4] hover:bg-[#007BFF]"
        @click="requestSummary"
      >
        요약하기
      </BaseButton>

      <SummaryResultModal
        v-if="isModalOpen"
        :title="result?.title || ''"
        :summary="result?.summary || ''"
        :note-id="result?.noteId || 0"
        @close="isModalOpen = false"
      />
    </div>
  </div>
</template>

<style scoped>
.typing-animation {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #3B82F6;
  animation: typing 2s steps(100) infinite;
  max-width: fit-content;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
</style>
