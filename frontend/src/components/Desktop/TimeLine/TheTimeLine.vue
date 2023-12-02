<script setup lang="ts">
  import { ref, onMounted, computed, type ComputedRef } from 'vue'
  import HTBService from '../../../services/HTBService'
  import TheTimeLineItem from './TheTimeLineItem.vue'

  interface Activity {
    date: string
    date_diff: string
    object_type: string
    type: string
    first_blood: boolean
    id: number
    name: string
    point: number
    challenge_category: string
  }

  interface GroupedActivity {
    [date: string]: Activity[]
  }

  const data = ref<Activity[]>([])

  onMounted(() => {
    HTBService.getActivity().then((res) => {
      data.value = res.data
    })
  })

  const groupedActivity: ComputedRef<GroupedActivity> = computed(() => {
    const grouped: GroupedActivity = {}
    data.value.forEach((item) => {
      const date = formatDate(item.date)
      if (!grouped[date]) {
        grouped[date] = []
      }
      grouped[date].push(item)
    })

    return grouped
  })

  function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })
  }
</script>

<template>
  <div>
    <the-time-line-item :grouped-activity="groupedActivity" />
  </div>
</template>
