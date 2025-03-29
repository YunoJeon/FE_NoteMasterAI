<script setup lang="ts">
import {computed, ref} from "vue";
import apiClient from "@/api";
import ModalTransition from "@/components/common/ModalTransition.vue";
import BaseButton from "@/components/common/buttons/BaseButton.vue";
import { PencilIcon, CheckCircleIcon } from "@heroicons/vue/24/outline";
import {marked} from "marked";

const props = defineProps<{
  title: string
  summary: string
  noteId: number
}>();

const renderedSummary = computed(() => marked(props.summary));

const emit = defineEmits(['close']);

const isEditing = ref(false);
const editedTitle = ref(props.title);
const editedSummary = ref(props.summary);

const submitEdit = async () => {
  try {
    await apiClient.put(`/api/notes/${props.noteId}`, {
      title: editedTitle.value,
      summary: editedSummary.value
    });
    alert('수정이 완료되었습니다.');
    isEditing.value = false;
  } catch (error) {
    alert('수정에 실패했습니다. 다시 시도해 주세요.');
    console.log('수정 실패', error);
  }
};
</script>

<template>
  <ModalTransition>
    <div
      class="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      @click.self="emit('close')"
    >
      <div class="bg-white w-full max-w-4xl p-6 rounded-2xl shadow-xl border-solid border-4 border-[#00A8E8] text-left max-h-[90vh] overflow-y-auto">
        <h2 class="text-3xl text-[#787878] mb-4 text-left">AI 요약본</h2>

        <div class="text-left space-y-4">
          <h3 v-show="!isEditing" class="text-4xl font-semibold">{{ props.title }}</h3>
          <input
            v-show="isEditing"
            v-model="editedTitle"
            class="text-4xl font-semibold w-full border-b border-gray-300 focus:outline-none focus:border-[#007BFF]"
          />

          <div v-show="!isEditing" v-html="renderedSummary" class="prose max-w-none"/>
          <textarea
            v-show="isEditing"
            v-model="editedSummary"
            class="mt-2 whitespace-pre-wrap w-full h-60 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#007BFF]"
          />

          <div class="flex justify-end mt-4">
            <BaseButton
              v-if="!isEditing"
              :icon="PencilIcon"
              iconSizeClass="w-5 h-5"
              sizeClass="p-4 shadow-lg bg-[#82AAD4] hover:bg-[#007BFF]"
              @click="isEditing = true"
            />
            <BaseButton
              v-else
              :icon="CheckCircleIcon"
              iconSizeClass="w-5 h-5"
              sizeClass="p-4 shadow-lg bg-[#82AAD4] hover:bg-[#007BFF]"
              @click="submitEdit"
            />
          </div>
        </div>
      </div>
    </div>
  </ModalTransition>
</template>
