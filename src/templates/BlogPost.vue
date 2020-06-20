<template>
  <Layout>
    <v-img class="hero" :src="$page.blogPost.image">
      <v-row align="center" justify="center">
        <v-col
          class="text-center"
          cols="12"
          style="color:white;background: rgba(0 ,0, 0, 0.5)"
        >
          <h1 class="display-1 font-weight-thin mb-4">
            {{ $page.blogPost.title }}
          </h1>
          <h4 class="subheading">
            {{ $page.blogPost.description }} <br />
            <small>{{ $page.blogPost.date }}</small>
          </h4>
        </v-col>
      </v-row>
    </v-img>
    <div class="contents">
      <div class="tags">
        Tags:
        <v-chip
          v-for="tag in $page.blogPost.tags"
          :key="tag.title"
          v-text="tag.title"
          :href="`/blog/tags/${tag.title}`"
        />
      </div>
      <div v-html="$page.blogPost.content" />
    </div>
  </Layout>
</template>

<page-query>
query MarkdownPost ($path: String!) {
  blogPost (path: $path) {
    title
    date (format: "YYYY年MM月DD日 HH:mm:ss")
    content,
    image,
    description,
    tags {
      title
    }
  }
}
</page-query>

<script>
import Vue from "vue";
export default Vue.extend({});
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
    padding: 1em 0;
    border-left: 0.675rem solid #b3d4fc;
    padding-left: 0.675rem;
    padding-right: 0.675rem;
    margin: 2rem 0;
  }
}
</style>
