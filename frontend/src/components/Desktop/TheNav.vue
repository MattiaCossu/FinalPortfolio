<script setup lang="ts">
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

  const contacts = [
    {
      id: 5,
      class: 'p-4 border-b border-[#1e2d3d]',
      title: 'contacts',
      icon: FullArrow,
      isOpen: true,
      items: [
        {
          class: 'p-4 ml-2 pb-0',
          title: 'phone',
          icon: PhoneIcon,
          string: '+39 3474515338',
        },
        {
          class: 'p-4 ml-2 pb-0',
          title: 'email',
          icon: EmailIcon,
          string: 'contact@mattiacossu.it',
        },
      ],
    },
  ]

  const emits = defineEmits(['click-link'])

  const emitClick = (title: string, url: string) => {
    const receivedLink: Link = {
      title,
      url,
      isActive: true,
    }
    emits('click-link', receivedLink)
  }
</script>

<template>
  <div>
    <!-- Personal Info -->
    <base-accordion
      v-for="(header, index) in about"
      :key="index"
      :class="header.class"
      :title="header.title"
      :icon="header.icon"
      :is-expanded="header.isExpanded"
      :index="header.id"
    >
      <div class="p-4 ml-2 pb-0">
        <base-accordion
          v-for="(item, i) in header.items"
          :key="i"
          :class="item.class"
          :title="item.title"
          :icon="item.icon"
          :sub-icon="item.subIcon"
          :color="item.color"
          :is-expanded="item.isExpanded"
          :index="item.id"
        >
          <div class="p-4 ml-2 pb-0">
            <base-icon-and-route
              v-for="(content, j) in item.content"
              :key="j"
              :class="j >= 1 ? 'p-2' : 'p-0'"
              :string="content.title"
              :icon="content.icon"
              :link="content.url"
              @click="emitClick(content.title, content.url)"
            />
          </div>
        </base-accordion>
      </div>
    </base-accordion>
    <!-- Contacts -->
    <base-accordion
      v-for="(header, index) in contacts"
      :key="index"
      :class="header.class"
      :title="header.title"
      :icon="header.icon"
      :is-open="header.isOpen"
      :index="header.id"
    >
      <div class="p-4 ml-2 pb-0">
        <base-icon-and-string
          v-for="(item, i) in header.items"
          :key="i"
          :string="item.string"
          :icon="item.icon"
          class="mb-4"
        />
      </div>
    </base-accordion>
  </div>
</template>
