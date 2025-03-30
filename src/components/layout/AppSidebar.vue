<script setup lang="ts">
import {BookOpenIcon, UserGroupIcon, ArrowLeftEndOnRectangleIcon, HomeIcon, CreditCardIcon, UserCircleIcon} from '@heroicons/vue/24/solid'
import {useAuthStore} from "@/stores/auth";

const auth = useAuthStore();

defineEmits(['open-login'])
</script>

<template>
  <aside class="hidden md:flex w-55 h-screen bg-[#BFDBFE] border-r shadow-md flex-col justify-between">
    <router-link to="/"
                 class="p-6 font-medium text-2xl text-[#072055] tracking-tighter hover:opacity-50 transition">
      Note Master
      <span class="font-bold tracking-normal">
        AI
      </span>
    </router-link>
    <nav class="px-4">
      <ul class="space-y-2">
        <li>
          <router-link to="/notes"
                       class="flex items-center gap-2 p-2 hover:bg-blue-100 rounded font-bold">
            <BookOpenIcon class="w-5 h-5"/>
            내 노트 보기
          </router-link>
        </li>
        <li>
          <router-link to="/groups"
                       class="flex items-center gap-2 p-2 hover:bg-blue-100 rounded font-bold">
            <UserGroupIcon class="w-5 h-5"/>
            내 그룹 보기
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="mt-auto px-4 py-6 space-y-2">
      <button class="px-4 py-2 text-white rounded-full mx-auto block bg-[#007BFF] hover:dark:bg-blue-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300">
        멤버쉽 혜택 보기
      </button>
      <button
        @click="$emit('open-login')"
        class="px-4 py-2 text-white rounded-full w-fit mx-auto block bg-[#82AAD4] hover:bg-[#007BFF] shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300">
        {{ auth.isLoggedIn ? '내 정보 보기' : '로그인 / 회원가입' }}
      </button>
    </div>
  </aside>

  <nav class="fixed bottom-0 left-0 right-0 bg-[#BFDBFE] md:hidden flex justify-around items-center py-2 shadow-t z-50">
    <button @click="$emit('open-login')">
      <UserCircleIcon v-if="auth.isLoggedIn" class="w-6 h-6"/>
      <ArrowLeftEndOnRectangleIcon v-else class="w-6 h-6"/>
    </button>
    <router-link to="/notes">
      <BookOpenIcon class="w-6 h-6"/>
    </router-link>
    <router-link to="/">
      <HomeIcon class="w-6 h-6"/>
    </router-link>
    <router-link to="/payment">
      <CreditCardIcon class="w-6 h-6"/>
    </router-link>
    <router-link to="/groups">
      <UserGroupIcon class="w-6 h-6"/>
    </router-link>
  </nav>
</template>
