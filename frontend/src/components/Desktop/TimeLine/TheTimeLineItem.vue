<script setup lang="ts">
  import type { PropType } from 'vue'

  interface Props {
    groupedActivity: GroupedActivity
  }

  interface Activity {
    date: string
    date_diff: string
    object_type: string
    type: string
    first_blood: boolean
    id: number
    name: string
    point: number
    challenge_category?: string
    machine_avatar?: string
  }

  interface GroupedActivity {
    [date: string]: Activity[]
  }

  const props: Props = defineProps({
    groupedActivity: {
      type: Object as PropType<GroupedActivity>,
      required: true,
    },
  })

  function getAvatarSrc(item: Activity) {
    switch (item.object_type) {
      case 'machine':
        if (item.machine_avatar) {
          return 'https://www.hackthebox.com' + item.machine_avatar
        }
        break
      case 'challenge':
        return 'url_statica_per_la_challenge'
      default:
        return 'url_default_per_le_altre_attività'
    }
  }
</script>

<template>
  <div v-for="(group, date) in props.groupedActivity" :key="date" class="relative">
    <h2 class="text-white px-4 border-0">{{ date }}</h2>
    <div v-for="(item, index) in group" :key="item.date" class="relative">
      <div class="flex gap-6 h-14 m-4 relative">
        <!-- Avatar -->
        <div class="flex items-center">
          <img
            :src="getAvatarSrc(item)"
            style="background-position: center center"
            class="h-12 max-w-full bg-cover bg-center rounded-full border border-[#1e2d3d] z-20"
          />
        </div>
        <div class="h-full flex flex-col justify-center w-full">
          <!-- Arrow -->
          <div class="absolute top-1/2 transform -translate-y-1/2" style="left: 65px">
            <div class="w-6 h-6 bg-slate-800 transform rotate-45"></div>
          </div>
          <!-- Line -->
          <div class="bg-slate-800 relative rounded-md p-4">
            <div class="flex flex-row text-[#607b96]">
              <span class="text-white">Owned&nbsp;</span>
              <span>{{ item.type }}</span>
              <span class="text-white">&nbsp;-&nbsp;</span>
              <span>{{ item.name }}&nbsp;</span>
              <span>{{ item.object_type }}</span>
              <span class="ml-auto">{{ item.date_diff }}</span>
            </div>
            <!-- Vertical line -->
            <div
              class="absolute top-1.5 -left-12 bottom-0 w-0.5 bg-slate-800 opacity-50"
              :style="{ height: `${(group.length - index) * 40}px` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
