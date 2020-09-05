<template>
  <amp-img
    v-if="$isAMP"
    alt="it's me"
    src="https://res.cloudinary.com/sterashima78/image/upload/c_fit,h_128,w_128/v1596863610/blog/github-user-image.png"
    width="128"
    height="128"
    :class="$style.avatar"
  >
  </amp-img>
  <t-img
    v-else
    alt="it's me"
    :class="$style.avatar"
    :lazy="lazy"
    :height="size"
    :width="size"
    img="https://res.cloudinary.com/sterashima78/image/upload/c_fit,h_128,w_128/v1596863610/blog/github-user-image.png"
  ></t-img>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'nuxt-composition-api'
export default defineComponent({
  name: 'TAvatar',
  components: {
    TImg: () => import('~/components/TImg.vue'),
  },
  props: {
    size: {
      type: String as PropType<string>,
      default: '128px',
    },
    lazy: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
})
</script>
<style module lang="scss">
.avatar {
  @apply rounded-full;
  @apply border-gray-100;
  @apply border;
  @apply m-2;
  @apply bg-contain;
  @apply bg-center;
}
</style>
