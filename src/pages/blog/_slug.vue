<template>
  <div>
    <t-image-card width="100%" height="15em" :img="post.image" :lazy="false">
      <template #title>
        <span
          role="heading"
          aria-level="1"
          :class="$style.h1"
          v-text="post.title"
        />
        <br />
        <span class="text-sm">
          {{ post.description }} <br />
          <small>{{ post.date }}</small>
        </span>
      </template>
    </t-image-card>
    <div :class="$style.contents">
      <div class="tags">
        Tags:
        <t-chip
          v-for="tag in post.tags"
          :key="tag"
          :to="`/blog/tags/${tag}`"
          :class="$style.tag"
          v-text="tag"
        />
      </div>
      <nuxt-content :document="post" />
    </div>
    <div :class="$style.pager">
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
import { hydrateSsrOnly, hydrateWhenIdle } from 'vue-lazy-hydration'

export default Vue.extend({
  components: {
    TImageCard: hydrateSsrOnly(() => import('~/components/TImageCard.vue')),
    TChip: hydrateWhenIdle(() => import('~/components/TChip.vue')),
  },
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
    }
  },
})
</script>
<style lang="scss" module>
.h1 {
  @apply text-3xl;
  @apply font-bold;
}
.tags {
  @apply my-4;
}
.tag {
  @apply bg-teal-600;
  @apply text-white;
}
.pager {
  @apply flex;
  @apply pt-8;
  @apply justify-between;
}
.contents {
  ul,
  ol {
    margin-bottom: 1em;
    margin-left: 2em;
  }
  ol {
    list-style-type: decimal;
  }
  ul {
    list-style-type: square;
  }
  code {
    @apply text-red-400;
    @apply bg-gray-200;
    @apply px-1;
  }
  pre {
    margin: 1em 0;
    > code {
      background-color: unset;
      padding: 0;
    }
  }
  p {
    @apply p-1;
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
    @apply font-bold;
  }
  h1 {
    @apply text-3xl;
  }
  h2 {
    @apply text-2xl;
  }
  h3 {
    @apply text-xl;
  }
}
</style>
