<script setup lang="ts">
  import TheNav from '@/components/Desktop/TheNav.vue'
  import TheDynamicNav from '@/components/Desktop/TheDynamicNav.vue'

  import { ref } from 'vue'
  import { useLinkStore } from '@/store/link'
  import type { Ref } from 'vue'
  import type { Link } from '@/types/Link'

  const linkStore = useLinkStore()

  const menuItems: Ref<Link[]> = ref(linkStore.menuItems)

  const receivedLink: Ref<Link> = ref({
    title: 'whoami',
    link: 'whoamiInfo',
  })

  const handleClickLink = (link: Link) => {
    receivedLink.value = link
  }
</script>

<template>
  <div class="item-center flex h-full text-[#607b96] border-x border-[#1e2d3d]">
    <div class="w-1/6 border-r border-[#1e2d3d]">
      <the-nav @click-link="handleClickLink" />
    </div>
    <div class="flex justify-center w-5/6">
      <div class="w-full">
        <the-dynamic-nav :received-link="receivedLink" />
        <div v-if="menuItems.length !== 0" class="overflow-y-auto h-[calc(100%-48px)]">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .my-width {
    width: calc(16.666667% + 2px);
  }

  .my-height {
    height: calc(100% - 16px);
  }
</style>
