<template>
  <components :is="tag" v-bind="attrs" :class="classes"><slot /></components>
</template>
<script lang="ts">
// eslint-disable-next-line
import { defineComponent, computed, PropType } from 'nuxt-composition-api'

export default defineComponent({
  name: 'TChip',
  props: {
    to: {
      type: String as PropType<string>,
      default: '',
    },
    color: {
      type: String as PropType<string>,
      default: '',
    },
    textColor: {
      type: String as PropType<string>,
      default: '',
    },
  },
  setup(props) {
    const tag = computed(() =>
      props.to === '' ? 'span' : props.to.startsWith('http') ? 'a' : 'nuxt-link'
    )
    const classes = computed(() => {
      const color = props.color || 'white'
      const textColor = props.textColor || 'black'
      return 'shadow rounded-full border-black leading-relax inline-block px-2 font-bold'.concat(
        tag.value === 'span' ? ' ' : ` bg-${color}-700 `,
        `bg-${color}-600 `,
        `text-${textColor}`
      )
    })
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
      classes,
      attrs,
    }
  },
})
</script>
