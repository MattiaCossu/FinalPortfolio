<script lang="ts" setup>
  const props = defineProps<{
    title: string
  }>()
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-800">{{ props.title }}</h1>
  </div>
</template>
