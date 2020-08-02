<template>
  <div class="divide-y divide-gray-400">
    <div class="relative bg-no-repeat bg-center bg-cover" :style="style">
      <div
        class="bg-black bg-opacity-75 p-2 text-white text-center absolute bottom-0 inset-x-0"
      >
        <h1 class="text-2xl font-bold">
          {{ post.title }}
        </h1>
        <h4 class="text-sm">
          {{ post.description }} <br />
          <small>{{ post.date }}</small>
        </h4>
      </div>
    </div>
    <div class="contents">
      <div class="tags">
        Tags:
        <t-chip
          v-for="tag in post.tags"
          :key="tag"
          :to="`/blog/tags/${tag}`"
          color="teal"
          text-color="white"
          v-text="tag"
        />
      </div>
      <nuxt-content :document="post" />
    </div>
    <div class="pt-8" style="display: flex; justify-content: space-around;">
      <div>
        <nuxt-link
          v-if="!!next"
          :to="next.path.replace(/\//g, '-').replace('-blog-', '/blog/')"
          >&lt; {{ next ? next.title : '' }}</nuxt-link
        >
      </div>
      <div>
        <nuxt-link
          v-if="!!prev"
          :to="prev.path.replace(/\//g, '-').replace('-blog-', '/blog/')"
          >{{ prev ? prev.title : '' }} &gt;</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content, params }) {
    const post = await $content(`blog`, { deep: true })
      .where({
        path: {
          $eq: `/blog/${params.slug.replace(/(\d{4})-(\d{2})-/, '$1/$2/')}`,
        },
      })
      .fetch()
    const [prev, next] = await $content('blog', { deep: true })
      .only(['title', 'path'])
      .sortBy('date')
      .surround(post[0].slug)
      .fetch()
    return {
      post: post[0],
      prev,
      next,
      style: {
        height: '15em',
        'background-image': `url(${post[0].image})`,
      },
    }
  },
})
</script>
<style lang="scss">
.contents {
  > .tags {
    margin: 1em 0;
  }
  ul,
  ol {
    margin-bottom: 1em;
  }
  code {
    box-shadow: none !important;
  }
  pre {
    margin: 1em 0;
    > code {
      background-color: unset;
      padding: 0;
    }
  }
  p,
  li {
    max-width: 40em;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0.75em 0;
    border-left: 0.675rem solid #b3d4fc;
    padding-left: 0.675rem;
    padding-right: 0.675rem;
    margin: 1.5rem 0;
  }
}
</style>
