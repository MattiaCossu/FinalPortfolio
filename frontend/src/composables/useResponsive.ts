import { ref, watch, computed } from 'vue'

export default function useResponsive() {
  const isMobile = ref(false)

  const checkIfMobile = () => {
    console.log('window.innerWidth changed')
    isMobile.value = window.innerWidth < 768
  }

  watch(
    () => window.innerWidth,
    () => {
      checkIfMobile()
    },
  )

  const isMobileDevice = computed(() => {
    return isMobile.value
  })

  return {
    isMobileDevice,
  }
}
