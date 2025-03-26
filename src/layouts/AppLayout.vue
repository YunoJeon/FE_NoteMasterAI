<script setup lang="ts">
import AppSidebar from "@/components/layout/AppSidebar.vue";
import BaseButton from "@/components/common/BaseButton.vue";
import {ChatBubbleBottomCenterTextIcon} from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="flex">
    <AppSidebar />
    <main class="flex-1 p-6 bg-gray-50 min-h-screen">
      <slot />
    </main>
    <BaseButton
      :icon="ChatBubbleBottomCenterTextIcon"
      iconSizeClass="w-6 h-6"
      sizeClass="fixed bottom-4 right-4 p-5 shadow-lg bg-[#82AAD4] hover:bg-[#007BFF]"
    />
  </div>
</template>
