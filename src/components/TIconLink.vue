<template>
  <t-link :to="to" :title="title" :href="link" :class="$style.wrapper">
    <div :class="$style.icon">
      <svg :height="size" :width="size">
        <path :d="icon" />
      </svg>
    </div>
    <span><slot /></span>
  </t-link>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'TIconLink',
  components: {
    TLink: () => import('~/components/TLink/index.vue'),
  },
  props: {
    icon: {
      type: String as PropType<string>,
      default: '',
    },
    size: {
      type: String as PropType<string>,
      default: '24px',
    },
    to: {
      type: String as PropType<string>,
      default: '',
    },
    title: {
      type: String as PropType<string>,
      default: '',
    },
    link: {
      type: String as PropType<string>,
      default: '',
    },
  },
})
</script>
<style lang="scss" module>
.wrapper {
  @apply flex;
  @apply justify-center;
  @apply content-center;
  @apply flex-col;
  @apply text-center;
  @apply mx-1;
}
.icon {
  @apply flex;
  @apply justify-center;
}
</style>
