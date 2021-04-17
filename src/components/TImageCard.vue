<template>
  <components
    :is="tag"
    :title="title"
    :link="link"
    :to="to"
    :class="$style.card"
  >
    <t-img :lazy="lazy" :img="img" :height="height" :width="width" :alt="title">
      <p :class="$style.title">
        <slot name="title" />
      </p>
    </t-img>
    <slot />
  </components>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@nuxtjs/composition-api'
import TLink from '~/components/TLink/index.vue'
import TImg from '~/components/TImg.vue'
export default defineComponent({
  name: 't-image-card',
  components: {
    TLink,
    TImg,
  },

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
    lazy: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  setup(props: { to: string; link: string }) {
    return {
      tag: computed(() =>
        props.to === '' && props.link === '' ? 'div' : 't-link'
      ),
    }
  },
})
</script>
<style lang="scss" module>
.card {
  @apply shadow-xl;
  @apply m-2;
  &:hover {
    @apply shadow-2xl;
  }
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
</style>
