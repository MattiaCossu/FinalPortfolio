<script setup lang="ts">
  import { defineProps } from 'vue'
  import type { Component } from 'vue'

  const props = defineProps({
    string: {
      type: String as () => string,
      required: true as const,
      default: '' as const,
    },
    icon: {
      type: Object as () => Component,
      required: true as const,
      default: null as Component | null,
    },
    color: {
      type: String as () => string,
      required: false as const,
      default: 'white' as string,
    },
    link: {
      type: String as () => string,
      required: true as const,
      default: '' as string,
    },
  })
</script>

<template>
  <router-link :to="{ name: props.link }">
    <div class="flex gap-2 item-center">
      <div>
        <component
          :is="props.icon"
          :style="{
            color: props.color,
          }"
        />
      </div>
      <div>
        {{ props.string }}
      </div>
    </div>
  </router-link>
</template>
