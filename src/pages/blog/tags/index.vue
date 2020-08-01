<template>
  <Layout>
    <h1>Tags</h1>
    <v-chip
      v-for="tag in tags"
      :key="tag"
      :to="`/blog/tags/${tag}`"
      v-text="tag"
    />
  </Layout>
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
