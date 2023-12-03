<script setup lang="ts">
  import GitHubIcon from '@/components/Icons/GithubIcon.vue'
  import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'

  const title = '_find_me_in:'
</script>

<template>
  <div class="flex h-16 items-center text-[#607b96] border-t border-[#1e2d3d] rounded-b-lg">
    <div
      class="p-4"
      style="
        font:
          400 16px 'Fira Code',
          sans-serif;
      "
    >
      <router-link to="/">
        {{ title }}
      </router-link>
    </div>
    <div class="flex h-full border-x border-[#1e2d3d]">
      <div class="px-6 flex items-center text-[#607b96] border-r border-[#1e2d3d]">
        <a href=""><GitHubIcon class="w-6 h-6" /></a>
      </div>
      <div class="px-6 flex items-center text-[#607b96]">
        <a href=""><LinkedinIcon class="w-6 h-6" /></a>
      </div>
    </div>
  </div>
</template>
