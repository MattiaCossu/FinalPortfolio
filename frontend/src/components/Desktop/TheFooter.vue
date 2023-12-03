<script setup lang="ts">
  import GitHubIcon from '@/components/Icons/GithubIcon.vue'
  import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'

  const title = '_find_me_in:'
</script>

<template>
  <div class="flex items-center h-16 text-[#607b96] border border-[#1e2d3d] rounded-b-lg">
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
    <div class="flex">
      <div class="px-6 h-16 flex items-center text-[#607b96] border border-[#1e2d3d]">
        <a href=""><GitHubIcon class="w-6 h-6" /></a>
      </div>
      <div class="px-6 h-16 flex items-center text-[#607b96] border border-[#1e2d3d]">
        <a href=""><LinkedinIcon class="w-6 h-6" /></a>
      </div>
    </div>
    <div
      class="p-4 ml-auto h-full flex items-center border-l border-[#1e2d3d]"
      style="
        font:
          400 16px 'Fira Code',
          sans-serif;
      "
    >
      <router-link to="/"> @MattiaCossu </router-link>
    </div>
  </div>
</template>
