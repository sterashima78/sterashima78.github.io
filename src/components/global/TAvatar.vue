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
  background-image: url(https://avatars2.githubusercontent.com/u/45279563);
}
</style>
