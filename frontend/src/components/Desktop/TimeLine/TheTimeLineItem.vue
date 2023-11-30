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

  function getAvatarSrc(item: Activity): string {
    if (item.object_type === 'machine' && item.machine_avatar) {
      return 'https://www.hackthebox.com' + item.machine_avatar // Se è una machine e ha un machine_avatar, restituisci il percorso dell'immagine
    } else if (item.object_type === 'challenge') {
      return 'url_statica_per_la_challenge' // Se è una challenge, restituisci l'URL statico per la challenge
    } else {
      return 'url_default_per_le_altre_attività' // Altrimenti, restituisci un URL di default per altre attività
    }
  }
</script>

<template>
  <div v-for="(group, date) in props.groupedActivity" :key="date">
    <h2>{{ date }}</h2>
    <div v-for="(item, index) in group" :key="item.date">
      <div class="flex gap-6 h-14 m-4 relative">
        <div class="flex items-center">
          <img
            :src="getAvatarSrc(item)"
            style="background-position: center center"
            class="h-12 max-w-full bg-cover bg-center rounded-full border border-[#1e2d3d]"
          />
        </div>
        <div class="h-full flex flex-col">
          <div
            v-if="index !== group.length - 1"
            class="absolute top-1/2 transform -translate-y-1/2"
            style="left: 65px"
          >
            <div class="w-6 h-6 bg-slate-800 transform rotate-45"></div>
          </div>
          <div class="bg-slate-800 relative rounded-md">
            <div class="text-[#607b96] p-4">
              <span class="text-white">Owned&nbsp;</span>
              <span>{{ item.type }}</span>
              <span class="text-white">&nbsp;-&nbsp;</span>
              <span>{{ item.name }}&nbsp;</span>
              <span>{{ item.object_type }}</span>
              <span class="ml-24">{{ item.date_diff }}</span>
            </div>
            <!-- Aggiunta della freccia -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .my-before::before {
    content: '';
    height: 0;
    position: absolute;
    width: 0;
    left: 69px;
    top: 98px;
    border: 10px solid transparent;
    border-right-color: rgb(30 41 59 / var(--tw-bg-opacity));
  }
</style>
