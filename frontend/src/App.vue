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
    <div v-if="isDesktop" class="h-6 relative z-50 bg-[#010c15]" />
    <div v-else class="h-1 relative z-50 bg-[#010c15]" />
    <div ref="element" class="element px-6 rounded-lg">
      <header>
        <desktop-header v-if="isDesktop" />
        <mobile-header v-else />
      </header>
      <main class="my-height">
        <router-view :is-desktop="isDesktop" />
      </main>
      <footer>
        <TheFooter v-if="isDesktop" />
      </footer>
    </div>
    <div v-if="isDesktop" class="h-6 relative z-50 bg-[#010c15]" />
    <div v-else class="h-1 relative z-50 bg-[#010c15]" />
  </div>
</template>

<style>
  .my-height {
    height: calc(100vh - 176px);
  }

  .element {
    background-color: #010c15;
  }

  @media (max-width: 768px) {
    .element {
      border-radius: 8px !important;
      border: 1px solid #1e2d3d !important;
      padding-inline: 0;
      margin-inline: 4px;
    }
    .my-height {
      height: calc(100vh - 74px);
    }
  }
</style>
