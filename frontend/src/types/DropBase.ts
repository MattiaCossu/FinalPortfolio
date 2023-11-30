import type { Ref } from 'vue'

export interface DropBase {
  position: {
    x: Ref<number>
    y: Ref<number>
  }
  velocity: {
    x: Ref<number>
    y: Ref<number>
  }
  color: string
  radius: number
  updateBase: () => void
  timeToLive: number
  value: string
  rotation: Ref<number>
  bounces: Ref<number>
}
