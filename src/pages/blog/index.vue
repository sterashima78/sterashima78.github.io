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
      .only(['title', 'path', 'description', 'tags', 'image', 'date'])
      .sortBy('date', 'desc')
      .fetch()
    const qiitaPosts = await fetch(
      'https://qiita.com/api/v2/items?query=user:sterashima78'
    )
      .then((res) => res.json())
      .then((d) =>
        d.map((d) => ({
          type: 'qiita',
          title: d.title,
          url: d.url,
          created: d.created_at,
        }))
      )
    const newPosts = (Array.isArray(posts) ? posts : [posts])
      .concat(qiitaPosts)
      .sort(
        (a, b) =>
          Date.parse(b.date || b.created) - Date.parse(a.date || a.created)
      )
    return {
      posts: newPosts,
    }
  },
})
</script>
