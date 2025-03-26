<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import SummaryInputArea from "@/components/summary/SummaryInputArea.vue";
</script>

<template>
  <AppLayout>
    <div class="flex justify-center items-center min-h-[calc(100vh-4rem)] p-6">
      <SummaryInputArea />
    </div>
  </AppLayout>
</template>
