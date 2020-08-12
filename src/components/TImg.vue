<template>
  <div
    ref="canvas"
    role="img"
    :class="$style.img"
    :aria-label="alt"
    :style="style"
  >
    <slot />
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  computed,
  PropType,
  ref,
  onMounted,
} from 'nuxt-composition-api'
export default defineComponent({
  name: 't-img',
  props: {
    img: {
      type: String as PropType<string>,
      default: '',
      required: true,
    },
    alt: {
      type: String as PropType<string>,
      default: '',
      required: true,
    },
    height: {
      type: String as PropType<string>,
      default: '200px',
    },
    width: {
      type: String as PropType<string>,
      default: '200px',
    },
    lazy: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  setup(
    props: { lazy: boolean; img: string; height: string; width: string },
    { root }
  ) {
    const canvas = ref<HTMLElement | undefined>(undefined)
    if (props.lazy) {
      onMounted(() => {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = new Image()
              img.onload = () => {
                loaded.value = true
                io.unobserve(entry.target)
              }
              img.src = props.img
            }
          })
        })
        root.$nextTick(() => {
          if (canvas.value) {
            io.observe(canvas.value)
          }
        })
      })
    }
    const loaded = ref(!props.lazy)
    return {
      loaded,
      canvas,
      style: computed(() => {
        const bg = loaded.value
          ? { 'background-image': `url(${props.img})` }
          : {
              'background-image':
                'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)',
            }
        return {
          height: props.height,
          width: props.width,
          ...bg,
        }
      }),
    }
  },
})
</script>
<style lang="scss" module>
.img {
  @apply relative;
  @apply bg-no-repeat;
  @apply bg-center;
}
</style>
