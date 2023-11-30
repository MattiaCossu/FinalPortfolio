<script setup lang="ts">
  import { ref } from 'vue'

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: Object,
      required: true,
    },
    // eslint-disable-next-line vue/require-default-prop
    subIcon: {
      type: Object,
      required: false,
    },
    color: {
      type: String,
      required: false,
      default: 'white',
    },
    isExpanded: {
      type: Boolean,
      required: false,
      default: false,
    },
    index: {
      type: Number,
      required: true,
    },
  })

  const isExpanded = ref(props.isExpanded)

  const toggleAccordion = () => {
    isExpanded.value = !isExpanded.value
  }
</script>

<template>
  <div>
    <button
      :id="'toggle_' + props.index"
      :aria-expanded="props.isExpanded"
      :aria-controls="'collapse_' + props.index"
      class="cursor-pointer"
      @click="toggleAccordion"
    >
      <div class="flex gap-2">
        <div>
          <component
            :is="props.icon"
            class="h-full transform transition-all duration-500"
            :class="{
              'rotate-90': isExpanded,
              'rotate-0': !isExpanded,
            }"
          />
        </div>
        <div v-if="!subIcon">
          {{ props.title }}
        </div>
        <div v-else>
          <base-icon-and-string :icon="props.subIcon" :string="props.title" :color="props.color" />
        </div>
      </div>
    </button>
    <base-collapse
      :id="'collapse_' + props.index"
      :aria-hidden="!props.isExpanded"
      :aria-labelledby="'toggle_' + props.index"
      :when="isExpanded.valueOf()"
    >
      <slot />
    </base-collapse>
  </div>
</template>
