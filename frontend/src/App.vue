<script lang="ts" setup>
  import TheHeader from '@/components/Desktop/TheHeader.vue'
  import TheFooter from '@/components/Desktop/TheFooter.vue'
</script>

<template>
  <div>
    <div class="bg-[#011627]">
      <header class="">
        <TheHeader />
      </header>
      <main class="my-height w-full">
        <router-view />
      </main>
      <footer>
        <TheFooter />
      </footer>
    </div>
  </div>
</template>

<style scoped>
  .my-height {
    height: calc(100vh - 128px);
  }

  .my-width {
    width: calc(16.666667% + 2px);
  }
</style>
