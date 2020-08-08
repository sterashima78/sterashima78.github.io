<template>
  <div
    class="rounded-full border-grey border m-2 bg-contain bg-center avatar"
    :style="sizeStyle"
  ></div>
</template>
<script lang="ts">
// eslint-disable-next-line
import { defineComponent, PropType, computed } from 'nuxt-composition-api'
export default defineComponent({
  name: 'TAvatar',
  props: {
    size: {
      type: String as PropType<string>,
      default: '128px',
    },
  },
  setup(props) {
    return {
      sizeStyle: computed((): { height: string; width: string } => ({
        height: props.size,
        width: props.size,
      })),
    }
  },
})
</script>
<style lang="scss" scoped>
.avatar {
  background-image: url('https://res.cloudinary.com/sterashima78/image/upload/c_fit,h_128,w_128/v1596863610/blog/github-user-image.png');
}
</style>
