<template>
  <components :is="tag" v-bind="attrs">
    <slot />
  </components>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from 'nuxt-composition-api'
import { Props } from './types'
export default defineComponent({
  name: 't-link',
  props: {
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
  setup(props: Props) {
    return {
      tag: computed(() => (props.to !== '' ? 'nuxt-link' : 'a')),
      attrs: computed(() =>
        props.to !== ''
          ? { to: props.to, title: props.title }
          : {
              href: props.link,
              title: props.title,
              rel: 'noreferrer',
              target: '_blank',
            }
      ),
    }
  },
})
</script>
