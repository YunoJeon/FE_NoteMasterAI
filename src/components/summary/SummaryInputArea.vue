<script setup lang="ts">
import {ArrowDownTrayIcon, MicrophoneIcon, ArrowTurnDownRightIcon} from '@heroicons/vue/24/solid'
import {ref} from 'vue'
import BaseButton from "@/components/common/buttons/BaseButton.vue";

const text = ref('')
</script>

<template>
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
        >
        요약하기
      </BaseButton>
    </div>
  </div>
</template>
