<template>
  <div class="w-100">
    <nuxt-content :document="page" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content }) {
    const page = await $content('components').fetch()
    return {
      page: page[0],
    }
  },
})
</script>
<style lang="scss" scoped>
.nuxt-content {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-bold;
  }
}
</style>
