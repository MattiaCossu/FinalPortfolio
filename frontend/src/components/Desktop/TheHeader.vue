<script setup lang="ts">
  const title = '_MattiaCossu'

  const menuItems = [
    {
      name: '_hello',
      link: 'Home',
    },
    {
      name: '_whoami',
      link: 'WhoamiInfo',
    },
    {
      name: '_ctf',
      link: 'Ctf',
    },
    {
      name: '_knowledge',
      link: 'Home',
    },
  ]
</script>

<template>
  <div class="flex items-center h-16 text-[#607b96] border border-[#1e2d3d] rounded-t-lg">
    <div
      class="px-4 w-1/6 h-full flex items-center border-r border-[#1e2d3d]"
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
    <div class="flex w-3/6">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        class="px-12 h-16 flex items-center text-[#607b96] border-r border-[#1e2d3d]"
        style="
          font:
            400 16px 'Fira Code',
            sans-serif;
        "
      >
        <router-link :to="{ name: item.link }">
          {{ item.name }}
        </router-link>
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
      <router-link to="/"> _contact_me </router-link>
    </div>
  </div>
</template>
