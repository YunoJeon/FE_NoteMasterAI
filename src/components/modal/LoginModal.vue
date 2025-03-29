<script setup lang="ts">
import ModalTransition from "@/components/common/ModalTransition.vue";
import SocialLoginButton from "@/components/common/buttons/SocialLoginButton.vue";
import kakaoIcon from '@/assets/icons/kakao.png'
import naverIcon from '@/assets/icons/naver.png'
import googleIcon from '@/assets/icons/google.png'

const emit = defineEmits(['close']);
</script>

<template>
  <ModalTransition>
    <div class="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
         @click.self="emit('close')"
    >
      <div class="bg-white w-[90%] max-w-md p-10 rounded-3xl shadow-xl text-center border-2 border-solid border-[#00A8E8]">
        <h2 class="text-6xl font-medium text-[#072055] mb-2 tracking-tighter">Note Master <span class="font-extrabold tracking-normal">AI</span>
        </h2>
        <p class="text-lg bg-[#B8EAFC] text-blue-600 px-2 py-1 rounded-full w-fit mx-auto mb-6">
          업무 효율 UP! 공부 능률 UP!
        </p>
        <p class="text-3xl font-normal leading-[1.5] mb-8">
          <span class="font-bold">AI</span> 가 문서와 파일을<br/>
          한눈에 정리해 드립니다!<br/>
          업무 효율을 늘려보세요
        </p>
        <p class="text-xl text-[#6F6F6F] mb-4">쉽고 빠르게 로그인 / 회원가입</p>

        <div class="space-y-5">
          <SocialLoginButton
            provider="kakao"
            :icon-src="kakaoIcon"
            label="카카오 로그인"
            bg-color-class="bg-[#FEE500]"
            text-color-class="text-black"
          />
          <SocialLoginButton
            provider="naver"
            :icon-src="naverIcon"
            label="네이버 로그인"
            bg-color-class="bg-[#03C75A]"
            text-color-class="text-white"
          />
          <SocialLoginButton
            provider="google"
            :icon-src="googleIcon"
            label="구글 로그인"
            bg-color-class="bg-[#F2F2F2]"
            text-color-class="text-black"
          />
        </div>
      </div>
    </div>
  </ModalTransition>
</template>
