<script setup lang="ts">
import AppSidebar from "@/components/layout/AppSidebar.vue";
import BaseButton from "@/components/common/buttons/BaseButton.vue";
import {ChatBubbleBottomCenterTextIcon} from "@heroicons/vue/24/solid";
import {ref} from "vue";
import LoginModal from "@/components/modal/LoginModal.vue";

const isLoginModalOpen = ref(false)
</script>

<template>
  <div class="flex">
    <AppSidebar @open-login="isLoginModalOpen = true"/>

    <main class="flex-1 p-6 bg-gray-50 min-h-screen">
      <slot/>
    </main>

    <LoginModal v-if="isLoginModalOpen" @close="isLoginModalOpen = false"/>
    <BaseButton
      :icon="ChatBubbleBottomCenterTextIcon"
      iconSizeClass="w-6 h-6"
      sizeClass="fixed bottom-20 md:bottom-4 right-4 p-5 shadow-lg bg-[#82AAD4] hover:bg-[#007BFF]"
    />
  </div>
</template>
