<template>
  <t-link :to="to" :title="title" :link="link">
    <t-img :height="height" :width="width" :alt="alt" :img="img"></t-img>
  </t-link>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'nuxt-composition-api'
export default defineComponent({
  name: 'img-link',
  props: {
    alt: {
      type: String as PropType<string>,
      default: '',
    },
    height: {
      type: String as PropType<string>,
      default: '',
    },
    width: {
      type: String as PropType<string>,
      default: '',
    },
    img: {
      type: String as PropType<string>,
      default: '',
    },
    // t-link
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
