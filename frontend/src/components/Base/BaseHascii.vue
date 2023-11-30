<script setup lang="">
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  const A = ref(0)
  const B = ref(0)
  const intervalId = ref(null)
  const animationOutput = ref(null)

  const asciiframe = () => {
    let b = []
    let z = []
    A.value += 0.05
    B.value += 0.07
    const cA = Math.cos(A.value)
    const sA = Math.sin(A.value)
    const cB = Math.cos(B.value)
    const sB = Math.sin(B.value)

    for (let k = 0; k < 1760; k++) {
      b[k] = k % 80 === 79 ? '\n' : ' '
      z[k] = 0
    }

    for (let j = 0; j < 6.28; j += 0.07) {
      const ct = Math.cos(j)
      const st = Math.sin(j)

      for (let i = 0; i < 6.28; i += 0.02) {
        const sp = Math.sin(i),
          cp = Math.cos(i)
        const h = ct + 2
        const D = 1 / (sp * h * sA + st * cA + 5)
        const t = sp * h * cA - st * sA
        const x = (40 + 30 * D * (cp * h * cB - t * sB)) | 0
        const y = (12 + 15 * D * (cp * h * sB + t * cB)) | 0
        const o = x + 80 * y
        const N = (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB)) | 0

        if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
          z[o] = D
          b[o] = '.,-~:;=!*#$@'[N > 0 ? N : 0]
        }
      }
    }

    // Aggiorna il contenuto del ref con l'output dell'animazione
    animationOutput.value.textContent = '' + b.join('')
  }

  onMounted(() => {
    // Avvia l'animazione al momento del montaggio del componente
    intervalId.value = setInterval(asciiframe, 50)
  })

  onBeforeUnmount(() => {
    // Pulisci l'intervallo quando il componente viene distrutto
    clearInterval(intervalId.value)
  })
</script>

<template>
  <div>
    <pre ref="animationOutput" />
  </div>
</template>
