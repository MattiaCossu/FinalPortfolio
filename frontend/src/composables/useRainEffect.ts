import type { DropBase } from '@/types/DropBase'
import type { Droplet } from '@/types/Droplet'
import type { Drop } from '@/types/Drop'
import type { Ref } from 'vue'
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useDark, useElementSize } from '@vueuse/core'

const isDark = useDark()

const getColor = () => {
  // return getComputedStyle(document.documentElement).getPropertyValue('--secondary-color-accent').trim()
  return '#4d5bce'
}

export function useRainEffect(
  canvas: Ref<HTMLCanvasElement | null>,
  containerRef: Ref<HTMLElement | null>,
) {
  let animationFrameId = 0

  const containerSize = useElementSize(containerRef)

  watch(
    () => containerSize,
    ({ width, height }) => {
      if (canvas.value) {
        canvas.value.width = width.value
        canvas.value.height = height.value
      }
    },
    { immediate: true },
  )

  onMounted(() => {
    if (!canvas.value) return

    const ctx = canvas.value.getContext('2d')
    if (!ctx) return

    let drops: Drop[] = []
    const droplets: Droplet[] = []

    watch(isDark, () => {
      drops.forEach((drop) => {
        console.log(drop.color)
        drop.color = getColor()
      })
      droplets.forEach((droplet) => {
        console.log(droplet.color)
        droplet.color = getColor()
      })
    })

    let dropSpawnCounter = 0

    const update = () => {
      if (!ctx || !canvas.value) return

      ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

      drops.forEach((drop) => {
        drop.update()
        drop.draw(ctx)
      })

      droplets.forEach((droplet) => {
        droplet.update()
        droplet.draw(ctx)
      })

      drops = drops.filter((drop) => {
        const shouldRemove =
          drop.position.y.value - drop.radius <= (canvas.value?.height || 0) &&
          drop.bounces.value >= 3
        if (shouldRemove) {
          for (let i = 0; i < 3; i++) {
            const fragment = createDroplet(drop.position.x.value, drop.position.y.value)
            droplets.push(fragment)
          }
        }
        return !shouldRemove
      })

      dropSpawnCounter++

      const dropSpawnRate = 120

      if (dropSpawnCounter >= dropSpawnRate) {
        const x = Math.floor(Math.random() * (canvas.value?.width || 0))
        const y = 0
        const newDrop = createDrop(x, y, canvas, droplets)
        drops.push(newDrop)
        dropSpawnCounter = 0
      }

      animationFrameId = requestAnimationFrame(update)
    }

    animationFrameId = requestAnimationFrame(update)
  })

  onUnmounted(() => {
    cancelAnimationFrame(animationFrameId)
  })
}

const createDropBase = (x: number, y: number, options: Partial<DropBase> = {}): DropBase => {
  const position = {
    x: ref(x),
    y: ref(y),
  }

  const bounces = ref(0)

  const value = String.fromCharCode(0x30a0 + Math.round(Math.random() * 96))

  const rotation = ref(0)

  const velocity = {
    x: options.velocity?.x ? ref(options.velocity.x) : ref(0),
    y: options.velocity?.y ? ref(options.velocity.y) : ref(1),
  }

  const color = options.color || '#00ff00'
  const radius = options.radius || 2

  const updateBase = () => {
    position.x.value += velocity.x.value
    position.y.value += velocity.y.value
  }

  return {
    position,
    velocity,
    color,
    radius,
    value,
    bounces,
    timeToLive: 100,
    rotation,
    updateBase,
  }
}

const drawDrop = (ctx: CanvasRenderingContext2D, drop: DropBase) => {
  drop.color = getColor()
  ctx.font = `${drop.radius * 18}px Nintendoid1` // font size

  ctx.save()

  // Sposta il contesto al centro della goccia
  ctx.translate(drop.position.x.value, drop.position.y.value)

  // Move context to the left of the text (bottom of the drop)
  ctx.translate(-drop.radius, 0)

  // Ruota il contesto
  ctx.rotate(drop.rotation.value)

  // Disegna la goccia al centro del contesto ruotato
  ctx.fillStyle = drop.color
  ctx.fillText(drop.value, 0, 0) // now the position is at (0, 0)

  // Ripristina lo stato del contesto
  ctx.restore()
}

const createDrop = (
  x: number,
  y: number,
  canvasRef: Ref<HTMLCanvasElement | null>,
  droplets: Droplet[],
  options: Partial<DropBase> = {},
): Drop => {
  const drop = createDropBase(x, y, options)

  const update = () => {
    if (
      drop.position.y.value + drop.radius >= (canvasRef.value?.height ?? 0) &&
      drop.bounces.value < 3
    ) {
      drop.bounces.value++

      // resize every bounce
      drop.radius *= 0.7

      // rotation after bounce
      drop.rotation.value += (Math.random() - 0.5) * 0.8 * Math.PI // adjust this for a larger/smaller rotation

      // change direction every bounce to simulate a real jump
      drop.velocity.y.value = -drop.velocity.y.value * 0.7
    } else {
      drop.velocity.y.value += 0.1
    }

    // create fragments
    if (drop.bounces.value === 3) {
      const fragments: Droplet[] = []
      for (let i = 0; i < 3; i++) {
        const fragment = createDroplet(drop.position.x.value, drop.position.y.value)
        fragments.push(fragment)
      }
      droplets.push(...fragments)
      drop.bounces.value++
    }

    drop.updateBase()
  }

  return {
    ...drop,
    draw: (ctx) => drawDrop(ctx, drop),
    update,
  }
}

const createDroplet = (
  x: number,
  y: number,
  options: Partial<DropBase & { timeToLive: number }> = {},
): Droplet => {
  const droplet = createDropBase(x, y, {
    ...options,
    radius: options.radius || 0.5,
    velocity: {
      x: ref((Math.random() - 0.5) * 5),
      y: ref(Math.random() * -5),
    },
    color: options.color || '#00ff88',
  })
  const timeToLive = options.timeToLive || 100

  const update = () => {
    droplet.updateBase()
    droplet.timeToLive = droplet.timeToLive !== undefined ? droplet.timeToLive - 1 : 100
  }

  return {
    ...droplet,
    timeToLive,
    update,
    draw: (ctx) => drawDrop(ctx, droplet),
  }
}
