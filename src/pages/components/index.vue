<template>
  <nuxt-content :document="page" />
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'plain',
  async asyncData({ $content }) {
    const page = await $content('components').fetch()
    return {
      page: page[0],
    }
  },
})
</script>
<style lang="scss" scoped>
/* purgecss ignore current */
.nuxt-content {
  /* purgecss ignore current */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
}
</style>
