<template>
  <a
    class="rounded-2xl border-black shadow-lg m-2 hover:shadow-xl block relative bg-no-repeat bg-center bg-contain"
    :href="link"
    target="__blank"
    :style="style"
  >
    <h3
      class="absolute bottom-0 inset-x-0 font-bold text-xl text-white leading-relaxed bg-black bg-opacity-75 p-2"
    >
      <slot />
    </h3>
  </a>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  props: {
    link: {
      type: String as PropType<string>,
      default: '',
    },
    imgSrc: {
      type: String as PropType<string>,
      default: '',
    },
  },
  computed: {
    style(): any {
      return {
        height: '15em',
        width: '15em',
        'background-image': `url(${this.imgSrc})`,
      }
    },
  },
})
</script>
<style lang="scss" scoped>
.portfolio-item {
  width: 15em;
  margin: 1em;
  > .img {
    width: 15em;
  }
}
</style>
