import { useConstantsCollapse } from './useConstantsCollapse'

import type { Ref } from 'vue'

const { DEFAULT_TRANSITION } = useConstantsCollapse()

type RefEl = Ref<HTMLElement | null>

export function useUtilsCollapse() {
  function getComputedHeight(el: RefEl) {
    if (!el.value) return 0
    return parseFloat(getComputedStyle(el.value).height)
  }

  function getHeightProp(el: RefEl) {
    return {
      height: `${el.value?.scrollHeight ?? 0}px`,
    }
  }

  function getTransitionProp(el: RefEl) {
    if (!el.value) return {}

    const { transition } = getComputedStyle(el.value)

    // If transition is not defined, return the default one
    if (transition === 'all 0s ease 0s') return { transition: DEFAULT_TRANSITION }

    return { transition }
  }

  function isReducedOrDisabled(el: RefEl) {
    if (!el.value) return true

    const { transition } = getComputedStyle(el.value)

    return (
      matchMedia('(prefers-reduced-motion: reduce)').matches ||
      transition.includes('none') ||
      transition.includes('height 0s')
    )
  }

  function getAutoDuration(height = 0) {
    if (height === 0) return 0

    const constant = height / 36
    const autoDuration = Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10)

    return Number.isFinite(autoDuration) ? autoDuration : 0
  }

  return {
    getComputedHeight,
    getHeightProp,
    getTransitionProp,
    isReducedOrDisabled,
    getAutoDuration,
  }
}
