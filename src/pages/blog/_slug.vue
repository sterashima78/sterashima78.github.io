<template>
  <Layout>
    <v-img class="hero" :src="post.image">
      <v-row align="center" justify="center">
        <v-col
          class="text-center"
          cols="12"
          style="color: white; background: rgba(0, 0, 0, 0.5);"
        >
          <h1 class="display-1 font-weight-thin mb-4">
            {{ post.title }}
          </h1>
          <h4 class="subheading">
            {{ post.description }} <br />
            <small>{{ post.date }}</small>
          </h4>
        </v-col>
      </v-row>
    </v-img>
    <div class="contents">
      <div class="tags">
        Tags:
        <v-chip
          v-for="tag in post.tags"
          :key="tag"
          :href="`/blog/tags/${tag}`"
          v-text="tag"
        />
      </div>
      <nuxt-content :document="post" />
    </div>
  </Layout>
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
    return { post: post[0] }
  },
})
</script>
<style lang="scss">
.hero {
  height: 15em;
}
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
