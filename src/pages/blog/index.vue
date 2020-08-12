<template>
  <BlogMain :posts="posts" />
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  components: {
    BlogMain: () => import('~/components/BlogMain.vue'),
  },
  async asyncData({ $content }) {
    const posts = await $content('blog', { deep: true })
      .only(['title', 'path', 'description', 'tags', 'image'])
      .sortBy('date', 'desc')
      .fetch()
    return {
      posts,
    }
  },
})
</script>
