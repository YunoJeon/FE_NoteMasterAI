<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
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
    await new Promise((resolve) => setTimeout(resolve, 10000));

    result.value = {
      title: '📄 장기전세주택 예비입주자 모집 공고',
      summary: '📄 장기전세주택 예비입주자 모집 공고 요약\n\n⸻\n\n📅 모집 공고일\n	•	2025년 2월 19일(수)\n\n⸻\n\n🏠 모집 개요\n	•	청약 대상: 안양, 광명, 안산, 의정부 지역의 장기전세주택\n	•	주택의 특성: 분양전환되지 않으며, 입주자격 충족 시 최대 20년까지 거주 가능\n	•	입주자격: 무주택 세대구성원, 소득 및 자산 기준 충족\n\n⸻\n\n🔑 입주자 모집 관련 중요 사항\n	•	1세대 1주택 원칙: 중복 신청 시 전부 무효 처리\n	•	청약 신청 방법: 주택청약 종합저축을 통한 인터넷 신청 원칙\n	•	청약 접수일: 순위별로 다르므로 각 순위별 날짜에 맞춰 신청 필요\n	•	1순위: 2025.03.10. (월)\n	•	2순위: 2025.03.11. (화)\n	•	3순위: 2025.03.12. (수)\n	•	청약 통장 순위 확인: GH주택청약센터에서 확인 가능\n\n⸻\n\n📅 주요 일정\n	•	청약 접수: 2025년 3월 10일부터 3월 12일까지 순위별로 진행\n	•	서류 제출: 2025년 3월 14일(금) 발표 후 3월 24일(월)까지\n	•	당첨자 발표: 2025년 6월 5일(목)\n\n⸻\n\n🏡 주택 세부사항\n\n석수두산위브\n	•	위치: 경기도 안양시 만안구\n	•	호수: 66호 (59형)\n	•	임대보증금: 155,705,000원\n	•	입주 가능일: 2010년 11월\n\n광명해모로이연\n	•	위치: 경기도 광명시\n	•	호수: 112호 (59형)\n	•	임대보증금: 168,850,000원\n	•	입주 가능일: 2011년 10월\n\n⸻\n\n💡 입주자격\n	1.	무주택 세대구성원: 주택을 소유하지 않은 세대구성원만 신청 가능\n	2.	소득 기준: 월평균 소득이 70% 이하인 경우 우선 공급\n	•	예시: 1인 가구의 경우 3,134,668원 이하\n	3.	자산 기준: 부동산 및 자동차 가액 기준 내에 있어야 함\n\n⸻\n\n📄 청약 신청 서류\n	•	주민등록표등본 및 가족관계증명서\n	•	청약통장 순위 확인서 및 기타 자격 증명 서류\n\n⸻\n\n📝 결론\n\n2025년 2월 19일에 공고된 장기전세주택 예비입주자 모집은 안양과 광명 지역을 포함한 4개의 주택단지에 대한 모집입니다. 신청자들은 각 순위별 접수 날짜를 철저히 준수해야 하며, 모든 서류 제출 및 자격 요건을 충족해야 당첨될 수 있습니다. 중요한 사항은 주택청약 통장 순위와 소득 및 자산 기준을 확인한 후, 청약 신청 시 모든 서류를 정확히 제출하는 것입니다.\n\n⸻\n\n⚡ 포인트 정리\n	•	청약 순위별 접수 날짜: 1순위(2025.03.10.), 2순위(2025.03.11.), 3순위(2025.03.12.)\n	•	서류 제출 기한: 2025.03.24.(월)까지 등기우편 제출\n	•	당첨자 발표: 2025.06.05.(목)\n	•	청약 신청 방법: 인터넷을 통한 신청, 고령자 및 장애인은 현장 신청 가능\n\n⸻\n\n📝 단락별 요약\n\n📅 모집 공고일 및 청약접수\n	•	2025년 2월 19일 공고, 청약 순위별 접수는 2025년 3월 10일부터 시작.\n\n🏠 주택 세부사항\n	•	석수두산위브: 66호, 임대보증금 155,705,000원\n	•	광명해모로이연: 112호, 임대보증금 168,850,000원\n\n🔑 입주자격 및 신청방법\n	•	무주택 세대구성원이여야 하며, 소득 및 자산 기준을 충족해야함.\n	•	청약통장 순위 확인서 필요\n\n📅 일정 및 서류\n	•	서류 제출 기한: 2025년 3월 24일\n	•	당첨자 발표: 2025년 6월 5일\n\n⸻',
      noteId: 0,
    }
    // const {data} = await apiClient.post('/api/summary', {
    //   text: text.value
    // })
    // result.value = {
    //   title: data.title,
    //   summary: data.summaryResponse,
    //   noteId: data.noteId
    // }
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
  <div v-if="isLoading"
       class="fixed inset-0 z-50 bg-white/80 flex flex-col items-center justify-center">
    <Vue3Lottie
      :animation-link="'/animations/ai-loading.json'"
      :loop="true"
      :autoplay="true"
      style="width: 120px; height: 120px;"
    />
    <p class="text-blue-500 text-xl font-bold typing-animation">AI 가 빠르게 요약중!</p>
  </div>
  <div class="w-full max-w-3xl mx-auto text-center">
    <h2 class="text-3xl font-bold mb-6 md:text-left">
      <span class="hidden md:inline">
      긴 텍스트, 문서 및 음성파일을 쉽고 빠르게 요약해 보세요!
      </span>

      <span class="block md:hidden text-left leading-relaxed">
        긴 텍스트,<br/>
        문서 및 음성 파일을<br/>
        쉽고 빠르게<br/>
        요약해 보세요!

      </span>
    </h2>
    <div class="relative w-full">
      <textarea
        v-model="text"
        class="w-full p-4 pr-2 border-2 border-solid border-[#00A8E8] rounded-2xl resize-none shadow-xl"
        rows="5"
        placeholder="언어 상관없이 텍스트로 요약 해보세요!"
      ></textarea>
    </div>
    <div class="grid grid-cols-2 sm:flex justify-between gap-2">
      <div class="flex flex-col gap-2 sm:flex-row sm:gap-2 sm:w-auto w-full">
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
      <div class="w-full sm:w-auto flex sm:items-center justify-end">
        <BaseButton
          :icon="ArrowTurnDownRightIcon"
          sizeClass="px-6 py-2.5 text-lg font-bold rounded-md bg-[#82AAD4] hover:bg-[#007BFF]"
          @click="requestSummary"
        >
          요약하기
        </BaseButton>
      </div>
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
  from {
    width: 0
  }
  to {
    width: 100%
  }
}
</style>
