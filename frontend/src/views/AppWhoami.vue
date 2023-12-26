<script setup lang="ts">
  import { shallowRef, ref, watch, defineAsyncComponent, onMounted } from 'vue'
  import { useLinkStore } from '@/store/link'
  import type { Ref, Component } from 'vue'
  import type { Link } from '@/types/Link'

  const props = defineProps<{
    isDesktop: boolean
  }>()

  const navIs = shallowRef<Component | null>(null)
  const dynNav = shallowRef<Component | null>(null)

  onMounted(() => {
    if (props.isDesktop) {
      navIs.value = defineAsyncComponent(() => import('@/components/Desktop/TheNav.vue'))
      dynNav.value = defineAsyncComponent(() => import('@/components/Desktop/TheDynamicNav.vue'))
    } else {
      navIs.value = defineAsyncComponent(() => import('@/components/Mobile/TheNav.vue'))
    }
  })

  watch(
    () => props.isDesktop,
    (isDesktop) => {
      if (isDesktop) {
        navIs.value = defineAsyncComponent(() => import('@/components/Desktop/TheNav.vue'))
        dynNav.value = defineAsyncComponent(() => import('@/components/Desktop/TheDynamicNav.vue'))
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
    class="item-center flex flex-row h-full text-[#607b96]"
    :class="{
      flex: !isDesktop,
      'flex-col': !isDesktop,
      'border-x': isDesktop,
      'border-[#1e2d3d]': isDesktop,
    }"
  >
    <div
      :class="{
        'w-1/6': isDesktop,
        'border-r': isDesktop,
        'border-[#1e2d3d]': isDesktop,
      }"
    >
      <component :is="navIs" @click-link="handleClickLink" />
    </div>
    <div
      class="flex overflow-hidden"
      :class="{
        'w-5/6': isDesktop,
        'justify-center': isDesktop,
      }"
    >
      <div class="w-full">
        <component :is="dynNav" v-if="isDesktop" :received-link="receivedLink" />
        <div
          v-if="menuItems.length !== 0"
          class="overflow-y-auto"
          :class="{
            'h-[calc(100%-48px)]': isDesktop,
            'h-[calc(100%)]': !isDesktop,
          }"
        >
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
