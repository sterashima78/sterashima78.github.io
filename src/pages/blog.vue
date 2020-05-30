<template>
  <Layout>
    <BlogMain :posts="$page.allBlogPost.edges" />
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          id
          title
          date (format: "YYYY年MM月DD日 HH:mm:ss")
          description
          tags
          path
        }
      }
    }
  }
</page-query>

<script>
import BlogMain from "../components/Blog/BlogMain";
export default {
  components: {
    BlogMain,
  },
};
</script>
