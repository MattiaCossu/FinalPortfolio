<script lang="ts" setup>
  import PhoneIcon from '@/components/Icons/PhoneIcon.vue'
  import EmailIcon from '@/components/Icons/EmailIcon.vue'
  import FullArrow from '@/components/Icons/FullArrowIcon.vue'
  import ForwardArrow from '@/components/Icons/ForwardArrowIcon.vue'
  import FolderIcon from '@/components/Icons/FolderIcon.vue'
  import SchoolIcon from '@/components/Icons/SchoolIcon.vue'
  import InfoIcon from '@/components/Icons/InfoIcon.vue'
  import type { Link } from '@/types/Link'

  const about = [
    {
      id: 1,
      class: 'p-4 border-b border-[#1e2d3d]',
      title: 'personal_info',
      icon: FullArrow,
      isExpanded: true,
      items: [
        {
          id: 2,
          class: 'mb-4',
          title: 'bio',
          icon: ForwardArrow,
          subIcon: FolderIcon,
          color: '#E99287',
          isExpanded: true,
          content: [
            {
              class: 'p-4 ml-2 pb-0',
              title: 'Whoami',
              icon: InfoIcon,
              url: 'WhoamiInfo',
            },
          ],
        },
        {
          id: 3,
          class: 'mb-4',
          title: 'interests',
          icon: ForwardArrow,
          subIcon: FolderIcon,
          color: '#43D9AD',
          content: [
            {
              class: 'p-4 ml-2 pb-0',
              title: 'info',
              icon: InfoIcon,
              url: 'WhoamiInfo',
            },
          ],
        },
        {
          id: 4,
          class: 'mb-4',
          title: 'education',
          icon: ForwardArrow,
          subIcon: FolderIcon,
          color: '#3A49A4',
          content: [
            {
              class: 'p-4 ml-2',
              title: 'Its',
              icon: SchoolIcon,
              url: 'WhoamiITS',
            },
            {
              class: 'p-4 ml-2',
              title: 'Itts',
              icon: SchoolIcon,
              url: 'WhoamiITTS',
            },
          ],
        },
      ],
    },
  ]
</script>

<template>
  <div>
    test
  </div>
</template>
