import { useLinkStore } from '@/store/link'
import { computed } from 'vue'

export function useActiveLink() {
  const linkStore = useLinkStore()
  const link = computed(() => linkStore.menuItems)

  function getActiveLink() {
    const activeLink = link.value.find((el) => el.isActive)
    return activeLink ? activeLink.link : ''
  }

  return { getActiveLink }
}
