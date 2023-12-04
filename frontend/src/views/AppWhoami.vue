<script setup lang="ts">
  import TheDynamicNav from '@/components/Desktop/TheDynamicNav.vue'

  import { shallowRef, ref, watch, defineAsyncComponent, onMounted } from 'vue'
  import { useLinkStore } from '@/store/link'
  import type { Ref, Component } from 'vue'
  import type { Link } from '@/types/Link'

  const props = defineProps<{
    isDesktop: boolean
  }>()

  const navIs = shallowRef<Component | null>(null)

  onMounted(() => {
    if (props.isDesktop) {
      navIs.value = defineAsyncComponent(() => import('@/components/Desktop/TheNav.vue'))
    } else {
      navIs.value = defineAsyncComponent(() => import('@/components/Mobile/TheNav.vue'))
    }
  })

  watch(
    () => props.isDesktop,
    (isDesktop) => {
      if (isDesktop) {
        navIs.value = defineAsyncComponent(() => import('@/components/Desktop/TheNav.vue'))
      } else {
        navIs.value = defineAsyncComponent(() => import('@/components/Mobile/TheNav.vue'))
      }
    },
  )

  const linkStore = useLinkStore()

  const menuItems: Ref<Link[]> = ref(linkStore.menuItems)

  const receivedLink: Ref<Link> = ref({
    title: 'whoami',
    url: 'whoamiInfo',
    isActive: true,
  })

  const handleClickLink = (link: Link) => {
    receivedLink.value = link
  }
</script>

<template>
  <div
    class="item-center h-full text-[#607b96] border-x border-[#1e2d3d] flex flex-row justify-center"
    :class="{
      flex: !isDesktop,
      'flex-col': !isDesktop,
    }"
  >
    <div class="w-1/6 border-r border-[#1e2d3d]">
      <component :is="navIs" @click-link="handleClickLink" />
    </div>
    <div
      class="w-full flex h-full"
      :class="{
        'justify-center': !isDesktop,
      }"
    >
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
