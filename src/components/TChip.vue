<template>
  <components :is="tag" v-bind="attrs" :class="$style.chip"
    ><slot
  /></components>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'TChip',
  props: {
    to: {
      type: String as PropType<string>,
      default: '',
    },
  },
  setup(props) {
    const tag = computed(() =>
      props.to === '' ? 'span' : props.to.startsWith('http') ? 'a' : 'nuxt-link'
    )
    const attrs = computed(() => {
      switch (tag.value) {
        case 'span':
          return {}
        case 'a':
          return {
            href: props.to,
          }
        default:
          return {
            to: props.to,
          }
      }
    })
    return {
      tag,
      attrs,
    }
  },
})
</script>
<style lang="scss" module>
.chip {
  @apply shadow;
  @apply rounded-full;
  @apply border-black;
  @apply inline-block;
  @apply px-2;
  @apply font-bold;
  @apply mx-1;
}
</style>
