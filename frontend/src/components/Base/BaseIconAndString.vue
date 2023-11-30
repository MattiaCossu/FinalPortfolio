<script setup lang="ts">
  import { defineProps } from 'vue'

  const props = defineProps({
    string: {
      type: String,
      required: true,
    },
    icon: {
      type: Object,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: 'white',
    },
  })
</script>

<template>
  <div class="flex gap-2 item-center">
    <div>
      <component
        :is="props.icon"
        class="h-full"
        :style="{
          color: props.color,
        }"
      />
    </div>
    <div>
      {{ props.string }}
    </div>
  </div>
</template>
