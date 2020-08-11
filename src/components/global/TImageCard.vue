<template>
  <t-link :title="title" :link="link" :to="to" class="t-image-card">
    <t-img :img="img" :height="height" :width="width" :alt="title">
      <p class="title">
        <slot name="title" />
      </p>
    </t-img>
    <slot />
  </t-link>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'nuxt-composition-api'
export default defineComponent({
  name: 't-image-card',
  props: {
    img: {
      type: String as PropType<string>,
      default: '',
    },
    height: {
      type: String as PropType<string>,
      default: '200px',
    },
    width: {
      type: String as PropType<string>,
      default: '200px',
    },
    title: {
      type: String as PropType<string>,
      default: '',
    },
    to: {
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
<style lang="scss" scoped>
.t-image-card {
  @apply shadow-xl;
  @apply m-2;
  &:hover {
    @apply shadow-2xl;
  }
  .title {
    @apply absolute;
    @apply bottom-0;
    @apply inset-x-0;
    @apply font-bold;
    @apply text-xl;
    @apply text-white;
    @apply leading-relaxed;
    @apply bg-black;
    @apply bg-opacity-75;
    @apply p-2;
  }
}
</style>
