import type { DropBase } from './DropBase'

export interface Droplet extends DropBase {
  timeToLive: number
  update: () => void
  draw: (ctx: CanvasRenderingContext2D) => void
}
