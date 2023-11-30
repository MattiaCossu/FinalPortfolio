<script setup lang="ts">
  import { watch, onMounted, ref } from 'vue'
  import { useLinkStore } from '@/store/link'
  import FullArrowIcon from '@/components/Icons/FullArrowIcon.vue'

  import type { Link } from ' @/types/Link'
  import type { Ref } from 'vue'

  onMounted(() => {
    if (props.receivedLink) {
      const defaultItems: Link = { title: 'Whoami', link: 'WhoamiInfo', isActive: true }
      linkStore.addMenuItem(defaultItems)
    }
  })

  const props = defineProps({
    receivedLink: {
      type: Object as () => Link,
      required: true,
      default: null,
    },
  })

  const linkStore = useLinkStore()

  const menuItems: Ref<Link[]> = ref(linkStore.menuItems)

  const toggleRemove = (item: Link) => {
    linkStore.removeMenuItem(item)
  }

  /* const toggleLink = (item: Link) => {
    item.isActive = !item.isActive
    linkStore.setLinkStatus(item)
  } */

  watch(
    () => props.receivedLink,
    (newValue: Link) => {
      const exists = menuItems.value.some((el: Link) => el.title === newValue.title)
      if (newValue && !exists) {
        linkStore.addMenuItem(newValue)
      }
    },
  )
</script>

<template>
  <div
    v-if="menuItems && menuItems.length > 0"
    class="h-12 border border-[#1e2d3d] border-x-0 border-t-0"
  >
    <div class="flex w-3/6">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        class="px-2 h-12 flex items-center text-[#607b96] border-r border-[#1e2d3d] border-t-0"
        style="
          font:
            400 16px 'Fira Code',
            sans-serif;
        "
      >
        <div
          class="flex gap-2 item-center p-2 px-4"
          :class="{ 'border-dashed border': item.isActive }"
        >
          <div>
            <router-link :to="{ name: item.link }">
              {{ item.title }}
            </router-link>
          </div>
          <div>
            <full-arrow-icon
              class="h-full cursor-pointer hover:border-dashed hover:border"
              @click="toggleRemove(item)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
