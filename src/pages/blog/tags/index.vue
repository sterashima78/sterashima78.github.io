<template>
  <div>
    <h1 class="text-2xl font-bold">Tags</h1>
    <t-chip
      v-for="tag in tags"
      :key="tag"
      :to="`/blog/tags/${tag}`"
      class="bg-teal-700 text-white"
      v-text="tag"
    />
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content }) {
    const posts = await $content('blog', { deep: true }).only(['tags']).fetch()
    const tags = posts
      .flatMap(({ tags }) => tags)
      .filter((v, i, arr) => arr.indexOf(v) === i)
    return {
      tags,
    }
  },
})
</script>
