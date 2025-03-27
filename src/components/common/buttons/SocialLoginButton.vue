<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps<{
  provider: 'kakao'| 'naver' | 'google'
  label: string
  iconSrc: string
  bgColorClass: string
  textColorClass?: string
}>();

const handleClick = () => {
  window.location.href = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_OAUTH_LOGIN_URI}/${props.provider}`;
};
</script>

<template>
  <button
    @click="handleClick"
    :class="['w-full h-12 rounded-full font-bold flex items-center justify-center gap-2 shadow-xl', bgColorClass, textColorClass]">
    <img :src="iconSrc" :alt="`${provider} 아이콘`" :class="provider === 'kakao' ? 'w-8 h-8' : 'w-10 h-10'"/>
    {{label}}
  </button>
</template>
