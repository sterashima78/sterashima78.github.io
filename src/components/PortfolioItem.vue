<template>
  <t-image-card :link="link" :img="imgSrc" width="15em" height="15em">
    <template #title>
      <h3><slot /></h3>
    </template>
  </t-image-card>
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
