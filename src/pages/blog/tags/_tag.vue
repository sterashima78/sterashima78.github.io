<template>
  <BlogMain :posts="posts">Tag: {{ title }}</BlogMain>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  components: {
    BlogMain: () => import('~/components/BlogMain.vue'),
  },
  async asyncData({ $content, params }) {
    const posts = await $content('blog', { deep: true })
      .where({ tags: { $contains: params.tag } })
      .sortBy('date', 'desc')
      .fetch()
    return {
      posts,
      title: params.tag,
    }
  },
})
</script>
