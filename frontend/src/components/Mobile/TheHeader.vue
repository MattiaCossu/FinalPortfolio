<script setup lang="ts">
  import { ref } from 'vue'
  import TheFooter from '@/components/Mobile/TheFooter.vue'

  const title = '_MattiaCossu'
  const isMenuOpen = ref(false)

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
    if (isMenuOpen.value) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.add('overflow-hidden')
    }
  }

  const menuItems = [
    {
      name: '_hello',
      link: 'Home',
    },
    {
      name: '_whoami',
      link: 'WhoamiInfo',
    },
    {
      name: '_ctf',
      link: 'Ctf',
    },
    {
      name: '_knowledge',
      link: 'Home',
    },
  ]
</script>

<template>
  <div class="relative text-white">
    <div
      class="flex items-center justify-between h-16 px-4 border-b border-[#1e2d3d] border-[#1e2d3d]"
    >
      <div class="flex items-center">
        <span class="mr-4 text-[#607b96]">{{ title }}</span>
      </div>
      <button
        id="toggle_header"
        :aria-expanded="isMenuOpen.valueOf()"
        aria-controls="collapse_header"
        class="block lg:hidden focus:outline-none"
        @click="toggleMenu"
      >
        <svg
          class="w-6 h-6 text-[#607b96]"
          :class="{ 'rotate-icon': isMenuOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'"
          ></path>
        </svg>
      </button>
    </div>

    <base-collapse
      id="collapse_header"
      :aria-hidden="!isMenuOpen.valueOf()"
      aria-labelledby="toggle_header"
      :when="isMenuOpen"
      :base-height="0"
      class="flex flex-col absolute overflow-hidden"
    >
      <div class="flex flex-col h-full bg-[#011627] z-10 rounded-lg">
        <div
          class="pb-3 space-y-1 sm:px-3 text-white rounded-b-lg z-10 bg-[#011627]"
          style="width: calc(100vw - 10px)"
        >
          <div
            v-for="(item, index) in menuItems"
            :key="index"
            class="flex p-4 text-[#607b96] border-b border-[#1e2d3d] border-[#1e2d3d]"
            style="
              font:
                400 16px 'Fira Code',
                sans-serif;
            "
          >
            <router-link :to="{ name: item.link }">
              {{ item.name }}
            </router-link>
          </div>
        </div>
        <div style="margin-top: calc(100vh - 22rem - 14px)">
          <the-footer />
        </div>
      </div>
    </base-collapse>
  </div>
</template>

<style scoped>
  .rotate-icon {
    transition: transform 0.3s ease-in-out;
  }

  .rotate-icon:hover {
    transform-origin: center;
    transform: rotate(90deg);
  }
</style>
