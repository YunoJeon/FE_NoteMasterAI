<script setup lang="ts">
import type {Component} from "vue";

defineProps<{
  icon: Component
  sizeClass?: string
  iconSizeClass?: string
}>()
</script>

<template>
  <button
    :class="[
      'flex items-center gap-1 text-white rounded-full drop-shadow-2xl transition-all',
      sizeClass
    ]"
    >
    <component :is="icon" :class="iconSizeClass ?? 'w-4 h-4'"/>
    <slot />
  </button>
</template>
