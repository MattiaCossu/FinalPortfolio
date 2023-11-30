import type { DropBase } from './DropBase'

export interface Drop extends DropBase {
  update: () => void
  draw: (ctx: CanvasRenderingContext2D) => void
}
