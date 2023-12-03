<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import { useElementSize } from '@vueuse/core'
  import DesktopHeader from '@/components/Desktop/TheHeader.vue'
  import TheFooter from '@/components/Desktop/TheFooter.vue'
  import MobileHeader from '@/components/Mobile/TheHeader.vue'

  const element = ref<HTMLElement | null>(null)
  const size = useElementSize(element)

  const isDesktop = ref<boolean>(true)

  watchEffect(() => {
    isDesktop.value = size.width.value > 768
  })
</script>

<template>
  <div class="bg-[#010c15]">
    <div ref="element" class="element bg-[#011627] rounded-lg">
      <header>
        <desktop-header v-if="isDesktop" />
        <mobile-header v-else />
      </header>
      <main class="my-height w-full md:border-x md:border-[#1e2d3d]">
        <router-view :is-desktop="isDesktop" />
      </main>
      <footer>
        <TheFooter v-if="isDesktop" />
      </footer>
    </div>
  </div>
</template>

<style>
  html {
    scroll-behavior: smooth;
    background-color: #010c15;
  }
  .my-height {
    height: calc(100vh - 176px);
  }

  .element {
    margin: 24px;
  }

  @media (max-width: 768px) {
    .element {
      margin: 4px !important;
      border-radius: 8px !important;
      border: 1px solid #1e2d3d !important;
    }
    .my-height {
      height: calc(100vh - 74px);
    }
  }
</style>
